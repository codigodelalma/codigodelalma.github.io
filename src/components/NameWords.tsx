import type { WordInfo } from '../lib/numerology.ts'
import { reduce } from '../lib/numerology.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { decozUrl } from '../data/decoz.ts'
import { SourceList } from './SourceList.tsx'

const UI = {
  es: {
    destinyOfName: 'Destino de este nombre',
    soul: 'Alma · vocales',
    personality: 'Personalidad · consonantes',
    total: 'Destino del nombre',
    eq: (v: number, c: number, chain: string) => `Alma ${v} más personalidad ${c} igual a ${chain}`,
    brings: (word: string) => `«${word}» aporta a tu identidad la energía de `,
    check: 'Comprobación con todas las letras:',
    master: 'vibración maestra',
  },
  en: {
    destinyOfName: 'Destiny of this name',
    soul: 'Soul · vowels',
    personality: 'Personality · consonants',
    total: 'Destiny of the name',
    eq: (v: number, c: number, chain: string) => `Soul ${v} plus personality ${c} equals ${chain}`,
    brings: (word: string) => `“${word}” brings to your identity the drive to `,
    check: 'Check with all the letters:',
    master: 'master vibration',
  },
}

/**
 * Cada nombre y apellido tiene su propia alma (vocales) y su propia personalidad (consonantes);
 * juntas forman el destino de ese nombre, que coincide con la suma de todas sus letras.
 */
export function NameWords({ words }: { words: WordInfo[] }) {
  const t = UI[useLang().lang]
  const { NUMBERS } = useContent()
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
                  {t.destinyOfName} · {m.archetype}
                </p>
              </div>
            </header>

            <div className="name-eq" aria-label={t.eq(v, c, destiny.chain.join(', '))}>
              <span className="name-part">
                <small>{t.soul}</small>
                <b>{v || '—'}</b>
                {v > 0 && <em>{NUMBERS[v].archetype}</em>}
              </span>
              <span className="name-op">+</span>
              <span className="name-part">
                <small>{t.personality}</small>
                <b>{c || '—'}</b>
                {c > 0 && <em>{NUMBERS[c].archetype}</em>}
              </span>
              <span className="name-op">=</span>
              <span className="name-part total">
                <small>{t.total}</small>
                <b>{destiny.chain.join(' → ')}</b>
                <em>{m.archetype}</em>
              </span>
            </div>

            <p>
              {t.brings(w.word)}
              <em>{m.essence}</em>. {m.light}
            </p>
            <ul className="chips">
              {m.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <SourceList sources={[{ label: `Hans Decoz — Life Path ${n}`, url: decozUrl('lifePath', n) }]} />
            <p className="name-sum">
              {t.check} {w.letters.map((l) => l.value).join(' + ')} ={' '}
              <strong>{w.total.chain.join(' → ')}</strong>
              {w.total.master && <span className="name-master">
                  {' '}
                  · {t.master} {w.total.master}
                </span>}
            </p>
          </article>
        )
      })}
    </div>
  )
}
