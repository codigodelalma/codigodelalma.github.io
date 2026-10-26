import { useState } from 'react'
import type { Profile, Reduction } from '../lib/numerology.ts'
import type { PositionKey } from '../data/numerology.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { DECOZ_TITLE, decozUrl, type DecozKind } from '../data/decoz.ts'

const POSITION_KIND: Record<PositionKey, DecozKind> = {
  leccion: 'lifePath',
  alma: 'soulUrge',
  personalidad: 'personality',
  destino: 'expression',
}
import { Breakdown } from './Breakdown.tsx'
import { SourceList } from './SourceList.tsx'
import { MasterNumber } from './MasterNumber.tsx'

const TAB_IDS = ['num', 'kab', 'jud', 'calc'] as const
type TabId = (typeof TAB_IDS)[number]

const UI = {
  es: {
    tabs: { num: 'Numerología', kab: 'Kabbalah', jud: 'Tradición judía', calc: 'Cálculo' },
    readings: 'Lecturas de',
    light: 'Tu luz',
    shadow: 'Tu sombra',
    lesson: 'Lección de vida',
    fields: 'Campos afines a tu destino',
    masterKept: (m: number, n: number) =>
      `Tu suma pasó por el ${m}, un número maestro. Te damos las dos formas: el ${m}, que Hans Decoz conserva sin reducir, y su forma reducida, el ${n}, que es la base de las lecturas de arriba.`,
    value: 'valor',
    sefira: 'sefirá',
    theLetter: 'La letra',
    sefiraTitle: 'Sefirá',
    inTradition: (m: number) => `El ${m} en la tradición`,
    symbolic: (n: number) =>
      `Correspondencia simbólica: el número ${n} se asocia aquí con la letra hebrea de valor ${n} (guematría) y con la ${n}.ª sefirá del Árbol de la Vida. La Kabbalah aplica la guematría a palabras hebreas; vincularla con nombres en alfabeto latino es una lectura interpretativa, no una enseñanza tradicional. Para una guematría real, escribe tu nombre en hebreo en la parte «Guematría».`,
    inSources: (n: number) => `El número ${n} en las fuentes judías:`,
  },
  en: {
    tabs: { num: 'Numerology', kab: 'Kabbalah', jud: 'Jewish tradition', calc: 'Calculation' },
    readings: 'Readings of',
    light: 'Your light',
    shadow: 'Your shadow',
    lesson: 'Life lesson',
    fields: 'Fields related to your destiny',
    masterKept: (m: number, n: number) =>
      `Your sum passed through ${m}, a master number. We give you both forms: ${m}, which Hans Decoz keeps unreduced, and its reduced form, ${n}, which is the basis of the readings above.`,
    value: 'value',
    sefira: 'sefirah',
    theLetter: 'The letter',
    sefiraTitle: 'Sefirah',
    inTradition: (m: number) => `${m} in the tradition`,
    symbolic: (n: number) =>
      `Symbolic correspondence: the number ${n} is associated here with the Hebrew letter of value ${n} (gematria) and with the ${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} sefirah of the Tree of Life. Kabbalah applies gematria to Hebrew words; linking it to names in the Latin alphabet is an interpretive reading, not a traditional teaching. For a real gematria, write your name in Hebrew in the “Gematria” part.`,
    inSources: (n: number) => `The number ${n} in Jewish sources:`,
  },
}

interface Props {
  profile: Profile
  position: PositionKey
  result: Reduction
  index: number
}

export function NumberSection({ profile, position, result, index }: Props) {
  const [tab, setTab] = useState<TabId>('num')
  const { lang } = useLang()
  const t = UI[lang]
  const { MASTER_DESTINY_SOURCE, MASTER_NOTES, NUMBERS, POSITIONS, VOCATIONS, MASTER_TRADITION, SEFIROT, TRADITION } = useContent()
  const n = result.value
  const meaning = NUMBERS[n]
  const pos = POSITIONS[position]
  const trad = TRADITION[n]
  const sefira = SEFIROT[n - 1]
  // Si la suma pasó por 11, 22 o 33 se dan las dos formas: el maestro (Hans Decoz) y la reducida
  const master = result.master
  const vocations = position === 'destino' ? [master, n].filter((v): v is number => !!v && !!VOCATIONS[v]) : []
  const id = `sec-${position}`

  return (
    <section className="number-section glass reveal" id={id} aria-labelledby={`${id}-title`}>
      <header className="ns-header">
        <div className="ns-orb" data-n={n}>
          <span>
            <MasterNumber result={result} />
          </span>
        </div>
        <div className="ns-head-text">
          <p className="eyebrow">
            {String(index).padStart(2, '0')} · {pos.source}
          </p>
          <h3 className="ns-title" id={`${id}-title`}>
            {pos.title}
          </h3>
          <p className="ns-archetype">
            {meaning.archetype}
            <span className="ns-hebrew" lang="he">
              {trad.letter.glyph}
            </span>
          </p>
          <p className="ns-what">{pos.what}</p>
        </div>
      </header>

      <ul className="chips">
        {meaning.keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>

      <div className="tabs" role="tablist" aria-label={`${t.readings} ${pos.title}`}>
        {TAB_IDS.map((tabId) => (
          <button
            key={tabId}
            role="tab"
            id={`${id}-tab-${tabId}`}
            aria-selected={tab === tabId}
            aria-controls={`${id}-panel`}
            className={tab === tabId ? 'active' : ''}
            onClick={() => setTab(tabId)}
          >
            {t.tabs[tabId]}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${tab}`} key={tab}>
        {tab === 'num' && (
          <div className="panel-grid">
            <p className="lead">{meaning.positions[position]}</p>
            <SourceList
              sources={[
                {
                  label: `Hans Decoz — ${DECOZ_TITLE[POSITION_KIND[position]]} ${n}`,
                  url: decozUrl(POSITION_KIND[position], n),
                },
              ]}
            />
            <div className="duo">
              <div className="duo-card light">
                <h4>{t.light}</h4>
                <p>{meaning.light}</p>
              </div>
              <div className="duo-card shadow">
                <h4>{t.shadow}</h4>
                <p>{meaning.shadow}</p>
              </div>
            </div>
            <div className="lesson-box">
              <h4>{t.lesson}</h4>
              <p>{meaning.lesson}</p>
            </div>
            <SourceList sources={[{ label: `Hans Decoz — Life Path ${n}`, url: decozUrl('lifePath', n) }]} />
            {vocations.map((v) => (
              <div key={v} className="duo-card">
                <h4>
                  {t.fields} {v}
                </h4>
                <p>{VOCATIONS[v].fields}</p>
                <SourceList sources={[{ label: `Hans Decoz — Expression number ${v}`, url: VOCATIONS[v].url }]} />
              </div>
            ))}
            {master && (
              <div className="master-box">
                <h4>{MASTER_NOTES[master].title}</h4>
                <p>
                  {t.masterKept(master, n)} {MASTER_NOTES[master].text}
                </p>
                <SourceList
                  sources={[
                    {
                      label: `Hans Decoz — ${DECOZ_TITLE[POSITION_KIND[position]]} ${master}`,
                      url: decozUrl(POSITION_KIND[position], master),
                    },
                    MASTER_DESTINY_SOURCE,
                  ]}
                />
              </div>
            )}
          </div>
        )}

        {tab === 'kab' && (
          <div className="panel-grid">
            <div className="kab-row">
              <div className="kab-letter">
                <span className="glyph" lang="he">
                  {trad.letter.glyph}
                </span>
                <span className="kab-letter-name">{trad.letter.name}</span>
                <span className="kab-letter-value">
                  {t.value} {n}
                </span>
              </div>
              <div>
                <h4>
                  {t.theLetter} {trad.letter.name}
                </h4>
                <p>{trad.letter.meaning.text}</p>
                <SourceList sources={trad.letter.meaning.sources} />
              </div>
            </div>
            <div className="kab-row">
              <div className="kab-letter sefira">
                <span className="glyph" lang="he">
                  {sefira.hebrew}
                </span>
                <span className="kab-letter-name">{sefira.name}</span>
                <span className="kab-letter-value">
                  {t.sefira} {n}
                </span>
              </div>
              <div>
                <h4>
                  {t.sefiraTitle} {sefira.name} · {sefira.translation}
                </h4>
                <p>{sefira.quality}</p>
                <SourceList sources={sefira.sources} />
              </div>
            </div>
            {master && MASTER_TRADITION[master] && (
              <div className="master-box">
                <h4>{t.inTradition(master)}</h4>
                <p>{MASTER_TRADITION[master].text}</p>
                <SourceList sources={MASTER_TRADITION[master].sources} />
              </div>
            )}
            <p className="note">{t.symbolic(n)}</p>
          </div>
        )}

        {tab === 'jud' && (
          <div className="panel-grid">
            <p className="lead">{t.inSources(n)}</p>
            <ul className="facts">
              {trad.jewish.map((f, i) => (
                <li key={i}>
                  <p>{f.text}</p>
                  <SourceList sources={f.sources} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === 'calc' && <Breakdown profile={profile} position={position} />}
      </div>
    </section>
  )
}
