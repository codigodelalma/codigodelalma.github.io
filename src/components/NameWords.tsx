import type { WordInfo } from '../lib/numerology.ts'
import { NUMBERS } from '../data/numerology.ts'

/** El número propio de cada nombre y apellido (suma de todas sus letras) y lo que aporta. */
export function NameWords({ words }: { words: WordInfo[] }) {
  return (
    <div className="name-words">
      {words.map((w, i) => {
        const n = w.total.value
        const m = NUMBERS[n]
        return (
          <article key={i} className="name-card glass reveal">
            <header>
              <span className="orb name-orb" data-n={n}>
                {n}
              </span>
              <div>
                <h3>{w.word}</h3>
                <p className="name-arch">{m.archetype}</p>
              </div>
            </header>
            <p className="name-sum">
              {w.letters.map((l) => l.value).join(' + ')} = <strong>{w.total.chain.join(' → ')}</strong>
              {w.total.master && <span className="name-master"> · vibración maestra {w.total.master}</span>}
            </p>
            <p>
              «{w.word}» aporta a tu identidad la energía de <em>{m.essence}</em>. {m.light}
            </p>
            <ul className="chips">
              {m.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="name-split">
              <span>
                Vocales (alma): <b>{w.vowels.value || '—'}</b>
              </span>
              <span>
                Consonantes (personalidad): <b>{w.consonants.value || '—'}</b>
              </span>
            </p>
          </article>
        )
      })}
    </div>
  )
}
