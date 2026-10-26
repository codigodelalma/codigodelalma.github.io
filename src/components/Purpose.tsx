import { masterForm, type Profile } from '../lib/numerology.ts'
import type { HebrewDate } from '../lib/hebrewDate.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { SourceList } from './SourceList.tsx'

/** «El oído» → «del oído» · «La risa» → «de la risa» */
const ofFaculty = (faculty: string) => {
  const lower = faculty.toLowerCase()
  return lower.startsWith('el ') ? `del ${lower.slice(3)}` : `de ${lower}`
}

const UI = {
  es: {
    yours: 'Tu camino, en tus propias claves',
    destiny: (n: string) => `Numerología · tu destino ${n}`,
    month: (m: string) => `Kabbalah · tu mes de ${m}`,
    strength: (faculty: string) => `La fuerza ${ofFaculty(faculty)}.`,
    tikkun: 'Tradición judía · tu tikún',
    tikkunText:
      'Lo que no se completa, el alma vuelve a buscarlo. Cada día es una ocasión de cumplir lo que te toca, sin tener que terminarlo todo de una vez.',
    note: 'Son tres miradas distintas y no se mezclan: la numerología es un sistema moderno de interpretación; la Kabbalah y la tradición judía se citan con sus fuentes.',
  },
  en: {
    yours: 'Your path, in your own keys',
    destiny: (n: string) => `Numerology · your destiny ${n}`,
    month: (m: string) => `Kabbalah · your month of ${m}`,
    strength: (faculty: string) => `The strength of ${faculty.toLowerCase()}.`,
    tikkun: 'Jewish tradition · your tikkun',
    tikkunText:
      'What is left incomplete, the soul comes back to seek. Every day is a chance to fulfill your part, without having to finish everything at once.',
    note: 'These are three different perspectives and they are not mixed: numerology is a modern system of interpretation; Kabbalah and Jewish tradition are quoted with their sources.',
  },
}

export function Purpose({ profile, hebrew }: { profile: Profile; hebrew: HebrewDate }) {
  const t = UI[useLang().lang]
  const { NUMBERS, HEBREW_MONTHS, MONTH_KABBALAH, TEACHINGS } = useContent()
  const d = profile.destiny
  const destiny = NUMBERS[d.value]
  const month = HEBREW_MONTHS[hebrew.month]
  const k = MONTH_KABBALAH[hebrew.month]

  return (
    <div className="purpose">
      <div className="purpose-grid">
        {TEACHINGS.map((teaching) => (
          <article key={teaching.title} className="purpose-card glass reveal">
            <h3>{teaching.title}</h3>
            <p>{teaching.text}</p>
            <SourceList sources={teaching.sources} />
          </article>
        ))}
      </div>

      <div className="purpose-yours glass reveal">
        <p className="eyebrow">{t.yours}</p>
        <div className="purpose-keys">
          <div>
            <h4>{t.destiny(masterForm(d))}</h4>
            <p>
              <b>{destiny.archetype}.</b> {destiny.positions.destino}
            </p>
          </div>
          <div>
            <h4>{t.month(month.name)}</h4>
            <p>
              <b>{t.strength(k.faculty)}</b> {k.invitation}
            </p>
          </div>
          <div>
            <h4>{t.tikkun}</h4>
            <p>{t.tikkunText}</p>
          </div>
        </div>
        <p className="note">{t.note}</p>
      </div>
    </div>
  )
}
