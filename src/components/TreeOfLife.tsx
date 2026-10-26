import { useState } from 'react'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { SourceList } from './SourceList.tsx'

const UI = {
  es: {
    aria: 'Árbol de la Vida con tus sefirot resaltadas',
    sefira: 'Sefirá',
    hint: 'Toca cualquier sefirá del árbol para leer su significado.',
    note: 'El diagrama sigue la disposición de 22 senderos difundida desde el siglo XVII (Kircher); cabalistas judíos como el Arí usan trazados distintos.',
  },
  en: {
    aria: 'Tree of Life with your sefirot highlighted',
    sefira: 'Sefirah',
    hint: 'Tap any sefirah on the tree to read its meaning.',
    note: 'The diagram follows the 22-path layout spread since the 17th century (Kircher); Jewish Kabbalists such as the Ari use different layouts.',
  },
}

// Disposición clásica del Árbol de la Vida (10 sefirot y 22 senderos)
const POS: [number, number][] = [
  [200, 50], // 1 Kéter
  [320, 130], // 2 Jojmá
  [80, 130], // 3 Biná
  [320, 270], // 4 Jésed
  [80, 270], // 5 Guevurá
  [200, 340], // 6 Tiféret
  [320, 470], // 7 Nétsaj
  [80, 470], // 8 Hod
  [200, 540], // 9 Yesod
  [200, 650], // 10 Maljut
]

const PATHS: [number, number][] = [
  [1, 2], [1, 3], [1, 6], [2, 3], [2, 4], [2, 6], [3, 5], [3, 6], [4, 5], [4, 6], [4, 7],
  [5, 6], [5, 8], [6, 7], [6, 8], [6, 9], [7, 8], [7, 9], [7, 10], [8, 9], [8, 10], [9, 10],
]

interface Props {
  /** Etiquetas por sefirá (1–10): qué números del perfil caen en ella */
  marks: Record<number, string[]>
  /** Sefirá que se muestra al cargar */
  initial: number
}

export function TreeOfLife({ marks, initial }: Props) {
  const [selected, setSelected] = useState(initial)
  const t = UI[useLang().lang]
  const { SEFIROT } = useContent()
  const s = SEFIROT[selected - 1]

  return (
    <div className="tree-wrap">
      <svg className="tree" viewBox="0 0 400 710" role="img" aria-label={t.aria}>
        <defs>
          <radialGradient id="glow">
            <stop offset="0" stopColor="#f6d58e" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f6d58e" stopOpacity="0" />
          </radialGradient>
        </defs>
        {PATHS.map(([a, b]) => {
          const lit = marks[a] && marks[b]
          return (
            <line
              key={`${a}-${b}`}
              x1={POS[a - 1][0]}
              y1={POS[a - 1][1]}
              x2={POS[b - 1][0]}
              y2={POS[b - 1][1]}
              className={lit ? 'path lit' : 'path'}
            />
          )
        })}
        {SEFIROT.map((sf) => {
          const [x, y] = POS[sf.n - 1]
          const lit = !!marks[sf.n]
          return (
            <g
              key={sf.n}
              className={`sefira-node${lit ? ' lit' : ''}${selected === sf.n ? ' selected' : ''}`}
              transform={`translate(${x} ${y})`}
              onClick={() => setSelected(sf.n)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(sf.n)}
              tabIndex={0}
              role="button"
              aria-label={`${sf.name}, ${sf.translation}${lit ? `: ${marks[sf.n].join(', ')}` : ''}`}
            >
              {lit && <circle r="46" fill="url(#glow)" className="halo" />}
              <circle r="30" className="disc" />
              <text y="-3" className="node-num">
                {sf.n}
              </text>
              <text y="13" className="node-name">
                {sf.name}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="tree-info glass">
        <p className="eyebrow">
          {t.sefira} {s.n}
        </p>
        <h3>
          {s.name} <span lang="he">{s.hebrew}</span>
        </h3>
        <p className="tree-trans">{s.translation}</p>
        {marks[s.n] && (
          <ul className="chips">
            {marks[s.n].map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        <p>{s.quality}</p>
        <SourceList sources={s.sources} />
        <p className="note">
          <span className="tree-hint">{t.hint} </span>
          {t.note}
        </p>
      </div>
    </div>
  )
}
