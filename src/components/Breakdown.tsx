import type { Profile } from '../lib/numerology.ts'
import type { PositionKey } from '../data/numerology.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'

const chain = (xs: number[]) => xs.join(' → ')

const UI = {
  es: {
    soul: 'Alma',
    personality: 'Personalidad',
    hint: (vowels: boolean) => (
      <>
        Se toman las <strong>{vowels ? 'vocales' : 'consonantes'}</strong> de cada nombre, se suman y se reducen a un dígito.
      </>
    ),
    soulGives: (word: string, essence: string) => `«${word}» aporta a tu alma el deseo de ${essence}.`,
    projects: (word: string, traits: string) => `«${word}» te hace proyectar ${traits}.`,
    and: ' y ',
  },
  en: {
    soul: 'Soul',
    personality: 'Personality',
    hint: (vowels: boolean) => (
      <>
        Take the <strong>{vowels ? 'vowels' : 'consonants'}</strong> of each name, add them up and reduce them to one digit.
      </>
    ),
    soulGives: (word: string, essence: string) => `“${word}” gives your soul the desire to ${essence}.`,
    projects: (word: string, traits: string) => `“${word}” makes you project ${traits}.`,
    and: ' and ',
  },
}

/** Muestra paso a paso cómo se obtuvo cada número, letra por letra. */
export function Breakdown({ profile, position }: { profile: Profile; position: PositionKey }) {
  const { words } = profile
  const t = UI[useLang().lang]
  const { NUMBERS } = useContent()

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
          {t.soul} <strong>{soul}</strong> + {t.personality} <strong>{pers}</strong> ={' '}
          <strong>{chain(profile.destiny.chain)}</strong>
        </p>
      </div>
    )
  }

  const vowels = position === 'alma'
  const total = vowels ? profile.soul : profile.personality
  return (
    <div className="breakdown">
      <p className="bd-hint">{t.hint(vowels)}</p>
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
                      ? t.soulGives(w.word, NUMBERS[red.value].essence)
                      : t.projects(w.word, NUMBERS[red.value].keywords.slice(0, 2).join(t.and).toLowerCase())}
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
