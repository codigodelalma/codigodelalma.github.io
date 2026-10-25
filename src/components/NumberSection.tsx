import { useState } from 'react'
import type { Profile, Reduction } from '../lib/numerology.ts'
import { MASTER_DESTINY_SOURCE, MASTER_NOTES, NUMBERS, POSITIONS, VOCATIONS, type PositionKey } from '../data/numerology.ts'
import { MASTER_TRADITION, SEFIROT, TRADITION } from '../data/tradition.ts'
import { Breakdown } from './Breakdown.tsx'
import { SourceList } from './SourceList.tsx'

const TABS = [
  { id: 'num', label: 'Numerología' },
  { id: 'kab', label: 'Kabbalah' },
  { id: 'jud', label: 'Tradición judía' },
  { id: 'calc', label: 'Cálculo' },
] as const

type TabId = (typeof TABS)[number]['id']

interface Props {
  profile: Profile
  position: PositionKey
  result: Reduction
  index: number
}

export function NumberSection({ profile, position, result, index }: Props) {
  const [tab, setTab] = useState<TabId>('num')
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

      <div className="tabs" role="tablist" aria-label={`Lecturas de ${pos.title}`}>
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`${id}-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`${id}-panel`}
            className={tab === t.id ? 'active' : ''}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${tab}`} key={tab}>
        {tab === 'num' && (
          <div className="panel-grid">
            <p className="lead">{meaning.positions[position]}</p>
            <div className="duo">
              <div className="duo-card light">
                <h4>Tu luz</h4>
                <p>{meaning.light}</p>
              </div>
              <div className="duo-card shadow">
                <h4>Tu sombra</h4>
                <p>{meaning.shadow}</p>
              </div>
            </div>
            <div className="lesson-box">
              <h4>Lección de vida</h4>
              <p>{meaning.lesson}</p>
            </div>
            {vocation && (
              <div className="duo-card">
                <h4>Campos afines a tu destino {shown}</h4>
                <p>{vocation.fields}</p>
                <SourceList sources={[{ label: `Hans Decoz — Expression number ${shown}`, url: vocation.url }]} />
              </div>
            )}
            {master && masterDestiny && (
              <div className="master-box">
                <h4>{MASTER_NOTES[master].title}</h4>
                <p>
                  Tu destino suma <strong>11</strong>, un número maestro, y por eso no se reduce. {MASTER_NOTES[master].text}
                </p>
                <SourceList sources={[MASTER_DESTINY_SOURCE]} />
              </div>
            )}
            {master && !masterDestiny && (
              <div className="master-box">
                <h4>{MASTER_NOTES[master].title}</h4>
                <p>
                  Tu cálculo pasó por el <strong>{master}</strong> antes de reducirse a {n}.{' '}
                  {MASTER_NOTES[master].text}
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
                <span className="kab-letter-value">valor {n}</span>
              </div>
              <div>
                <h4>La letra {trad.letter.name}</h4>
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
                <span className="kab-letter-value">sefirá {n}</span>
              </div>
              <div>
                <h4>
                  Sefirá {sefira.name} · {sefira.translation}
                </h4>
                <p>{sefira.quality}</p>
                <SourceList sources={sefira.sources} />
              </div>
            </div>
            {master && MASTER_TRADITION[master] && (
              <div className="master-box">
                <h4>El {master} en la tradición</h4>
                <p>{MASTER_TRADITION[master].text}</p>
                <SourceList sources={MASTER_TRADITION[master].sources} />
              </div>
            )}
            <p className="note">
              Correspondencia simbólica: el número {n} se asocia aquí con la letra hebrea de valor {n} (guematría) y
              con la {n}.ª sefirá del Árbol de la Vida. La Kabbalah aplica la guematría a palabras hebreas; vincularla
              con nombres en alfabeto latino es una lectura interpretativa, no una enseñanza tradicional.
            </p>
          </div>
        )}

        {tab === 'jud' && (
          <div className="panel-grid">
            <p className="lead">El número {n} en las fuentes judías:</p>
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
