import type { Profile } from '../lib/numerology.ts'
import { NUMBERS, type PositionKey } from '../data/numerology.ts'

const chain = (xs: number[]) => xs.join(' → ')

/** Muestra paso a paso cómo se obtuvo cada número, letra por letra. */
export function Breakdown({ profile, position }: { profile: Profile; position: PositionKey }) {
  const { words } = profile

  if (position === 'leccion') {
    const { digits } = profile.lifeLesson
    const { day, month, year } = profile.date
    return (
      <div className="breakdown">
        <p className="bd-date">
          {String(day).padStart(2, '0')} / {String(month).padStart(2, '0')} / {year}
        </p>
        <p className="bd-formula">
          {digits.join(' + ')} = <strong>{chain(profile.lifeLesson.chain)}</strong>
        </p>
      </div>
    )
  }

  if (position === 'destino') {
    const [soul, pers] = profile.destiny.parts
    return (
      <div className="breakdown">
        <p className="bd-formula">
          Alma <strong>{soul}</strong> + Personalidad <strong>{pers}</strong> ={' '}
          <strong>{chain(profile.destiny.chain)}</strong>
        </p>
      </div>
    )
  }

  const vowels = position === 'alma'
  const total = vowels ? profile.soul : profile.personality
  return (
    <div className="breakdown">
      <p className="bd-hint">
        Se toman las <strong>{vowels ? 'vocales' : 'consonantes'}</strong> de cada nombre, se suman y se reducen
        a un dígito.
      </p>
      <div className="bd-words">
        {words.map((w, i) => {
          const values = vowels ? w.vowelValues : w.consonantValues
          const red = vowels ? w.vowels : w.consonants
          return (
            <div className="bd-word" key={i}>
              <div className="bd-letters">
                {w.letters.map((l, j) => {
                  const active = l.vowel === vowels
                  return (
                    <span key={j} className={`tile ${active ? (vowels ? 'tile-vowel' : 'tile-cons') : 'tile-off'}`}>
                      <b>{l.char}</b>
                      <small>{active ? l.value : '·'}</small>
                    </span>
                  )
                })}
              </div>
              <p className="bd-sum">
                {values.length ? values.join(' + ') : '0'} = <strong>{chain(red.chain)}</strong>
              </p>
              {red.value > 0 && (
                <p className="bd-meaning">
                  <span className="bd-chip" data-n={red.value}>
                    {red.value}
                  </span>
                  <span>
                    <b>{NUMBERS[red.value].archetype}.</b>{' '}
                    {vowels
                      ? `«${w.word}» aporta a tu alma el deseo de ${NUMBERS[red.value].essence}.`
                      : `«${w.word}» te hace proyectar ${NUMBERS[red.value].keywords.slice(0, 2).join(' y ').toLowerCase()}.`}
                  </span>
                </p>
              )}
            </div>
          )
        })}
      </div>
      <p className="bd-formula">
        {total.parts.join(' + ')} = <strong>{chain(total.chain)}</strong>
      </p>
    </div>
  )
}
