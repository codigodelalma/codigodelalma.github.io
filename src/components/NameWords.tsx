import type { WordInfo } from '../lib/numerology.ts'
import { reduce } from '../lib/numerology.ts'
import { NUMBERS } from '../data/numerology.ts'

/**
 * Cada nombre y apellido tiene su propia alma (vocales) y su propia personalidad (consonantes);
 * juntas forman el destino de ese nombre, que coincide con la suma de todas sus letras.
 */
export function NameWords({ words }: { words: WordInfo[] }) {
  return (
    <div className="name-words">
      {words.map((w, i) => {
        const v = w.vowels.value
        const c = w.consonants.value
        const destiny = reduce(v + c)
        const n = destiny.value
        const m = NUMBERS[n]
        return (
          <article key={i} className="name-card glass reveal">
            <header>
              <span className="orb name-orb" data-n={n}>
                {n}
              </span>
              <div>
                <h3>{w.word}</h3>
                <p className="name-arch">
                  Destino de este nombre · {m.archetype}
                </p>
              </div>
            </header>

            <div className="name-eq" aria-label={`Alma ${v} más personalidad ${c} igual a ${destiny.chain.join(', ')}`}>
              <span className="name-part">
                <small>Alma · vocales</small>
                <b>{v || '—'}</b>
                {v > 0 && <em>{NUMBERS[v].archetype}</em>}
              </span>
              <span className="name-op">+</span>
              <span className="name-part">
                <small>Personalidad · consonantes</small>
                <b>{c || '—'}</b>
                {c > 0 && <em>{NUMBERS[c].archetype}</em>}
              </span>
              <span className="name-op">=</span>
              <span className="name-part total">
                <small>Destino del nombre</small>
                <b>{destiny.chain.join(' → ')}</b>
                <em>{m.archetype}</em>
              </span>
            </div>

            <p>
              «{w.word}» aporta a tu identidad la energía de <em>{m.essence}</em>. {m.light}
            </p>
            <ul className="chips">
              {m.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="name-sum">
              Comprobación con todas las letras: {w.letters.map((l) => l.value).join(' + ')} ={' '}
              <strong>{w.total.chain.join(' → ')}</strong>
              {w.total.master && <span className="name-master"> · vibración maestra {w.total.master}</span>}
            </p>
          </article>
        )
      })}
    </div>
  )
}
