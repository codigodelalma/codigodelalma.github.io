import { useState } from 'react'
import type { Profile, Reduction } from '../lib/numerology.ts'
import type { PositionKey } from '../data/numerology.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { Breakdown } from './Breakdown.tsx'
import { SourceList } from './SourceList.tsx'

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
    masterDestiny: 'Tu destino suma 11, un número maestro, y por eso no se reduce.',
    masterPassed: (m: number, n: number) => `Tu cálculo pasó por el ${m} antes de reducirse a ${n}.`,
    value: 'valor',
    sefira: 'sefirá',
    theLetter: 'La letra',
    sefiraTitle: 'Sefirá',
    inTradition: (m: number) => `El ${m} en la tradición`,
    symbolic: (n: number) =>
      `Correspondencia simbólica: el número ${n} se asocia aquí con la letra hebrea de valor ${n} (guematría) y con la ${n}.ª sefirá del Árbol de la Vida. La Kabbalah aplica la guematría a palabras hebreas; vincularla con nombres en alfabeto latino es una lectura interpretativa, no una enseñanza tradicional.`,
    inSources: (n: number) => `El número ${n} en las fuentes judías:`,
  },
  en: {
    tabs: { num: 'Numerology', kab: 'Kabbalah', jud: 'Jewish tradition', calc: 'Calculation' },
    readings: 'Readings of',
    light: 'Your light',
    shadow: 'Your shadow',
    lesson: 'Life lesson',
    fields: 'Fields related to your destiny',
    masterDestiny: 'Your destiny adds up to 11, a master number, so it is not reduced.',
    masterPassed: (m: number, n: number) => `Your calculation passed through ${m} before reducing to ${n}.`,
    value: 'value',
    sefira: 'sefirah',
    theLetter: 'The letter',
    sefiraTitle: 'Sefirah',
    inTradition: (m: number) => `${m} in the tradition`,
    symbolic: (n: number) =>
      `Symbolic correspondence: the number ${n} is associated here with the Hebrew letter of value ${n} (gematria) and with the ${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} sefirah of the Tree of Life. Kabbalah applies gematria to Hebrew words; linking it to names in the Latin alphabet is an interpretive reading, not a traditional teaching.`,
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
  const master = result.master
  // El destino conserva el número maestro 11 (Hans Decoz); los demás números se leen reducidos
  const shown = position === 'destino' ? profile.destiny.display : n
  const masterDestiny = shown !== n
  const vocation = position === 'destino' ? VOCATIONS[shown] : undefined
  const id = `sec-${position}`

  return (
    <section className="number-section glass reveal" id={id} aria-labelledby={`${id}-title`}>
      <header className="ns-header">
        <div className="ns-orb" data-n={n}>
          <span>{shown}</span>
        </div>
        <div className="ns-head-text">
          <p className="eyebrow">
            {String(index).padStart(2, '0')} · {pos.source}
          </p>
          <h2 id={`${id}-title`}>{pos.title}</h2>
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
            {vocation && (
              <div className="duo-card">
                <h4>
                  {t.fields} {shown}
                </h4>
                <p>{vocation.fields}</p>
                <SourceList sources={[{ label: `Hans Decoz — Expression number ${shown}`, url: vocation.url }]} />
              </div>
            )}
            {master && masterDestiny && (
              <div className="master-box">
                <h4>{MASTER_NOTES[master].title}</h4>
                <p>
                  {t.masterDestiny} {MASTER_NOTES[master].text}
                </p>
                <SourceList sources={[MASTER_DESTINY_SOURCE]} />
              </div>
            )}
            {master && !masterDestiny && (
              <div className="master-box">
                <h4>{MASTER_NOTES[master].title}</h4>
                <p>
                  {t.masterPassed(master, n)} {MASTER_NOTES[master].text}
                </p>
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
