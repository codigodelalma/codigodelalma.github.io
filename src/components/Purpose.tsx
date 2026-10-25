import type { Profile } from '../lib/numerology.ts'
import type { HebrewDate } from '../lib/hebrewDate.ts'
import { NUMBERS } from '../data/numerology.ts'
import { HEBREW_MONTHS } from '../data/hebrewMonths.ts'
import { MONTH_KABBALAH } from '../data/monthKabbalah.ts'
import type { Fact } from '../data/tradition.ts'
import { SourceList } from './SourceList.tsx'

const sefaria = (label: string, ref: string) => ({ label, url: `https://www.sefaria.org/${ref}` })

// Enseñanzas generales sobre la misión del alma. Todas verificadas en el texto original.
const TEACHINGS: (Fact & { title: string })[] = [
  {
    title: 'Eres irrepetible',
    text: 'Dios acuñó a todas las personas con el sello de Adán, y ninguna se parece a otra. Por eso cada persona debe decir: «por mí fue creado el mundo».',
    sources: [sefaria('Mishná Sanedrín 4:5', 'Mishnah_Sanhedrin.4.5')],
  },
  {
    title: 'Tu alma viene a completar algo',
    text: 'Según el Arizal, el alma vuelve a este mundo para completar los preceptos que le faltaron: es su tikún, su reparación. (Enseñanza cabalística del Arizal, escrita por Rabí Jaim Vital.)',
    sources: [
      sefaria('Shaar HaGuilgulim, introducción 11', "Sha'ar_HaGilgulim.11.14"),
      sefaria('Shaar HaGuilgulim, introducción 16', "Sha'ar_HaGilgulim.16.1"),
    ],
  },
  {
    title: 'Tú eliges',
    text: '«Te he puesto delante la vida y la muerte… elige la vida». Rabí Yojanán enseña que «no hay mazal para Israel»: los astros no deciden por ti.',
    sources: [sefaria('Deuteronomio 30:19', 'Deuteronomy.30.19'), sefaria('Talmud, Shabat 156a', 'Shabbat.156a.12')],
  },
  {
    title: 'Paso a paso',
    text: '«No te corresponde terminar la obra, pero tampoco eres libre de desentenderte de ella».',
    sources: [sefaria('Mishná Avot 2:16', 'Pirkei_Avot.2.16')],
  },
]

export function Purpose({ profile, hebrew }: { profile: Profile; hebrew: HebrewDate }) {
  const d = profile.destiny
  const destiny = NUMBERS[d.value]
  const month = HEBREW_MONTHS[hebrew.month]
  const k = MONTH_KABBALAH[hebrew.month]

  return (
    <div className="purpose">
      <div className="purpose-grid">
        {TEACHINGS.map((t) => (
          <article key={t.title} className="purpose-card glass reveal">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <SourceList sources={t.sources} />
          </article>
        ))}
      </div>

      <div className="purpose-yours glass reveal">
        <p className="eyebrow">Tu camino, en tus propias claves</p>
        <div className="purpose-keys">
          <div>
            <h4>Numerología · tu destino {d.display}</h4>
            <p>
              <b>{destiny.archetype}.</b> {destiny.positions.destino}
            </p>
          </div>
          <div>
            <h4>Kabbalah · tu mes de {month.name}</h4>
            <p>
              <b>La fuerza {k.faculty.toLowerCase().startsWith('el ') ? `del ${k.faculty.slice(3).toLowerCase()}` : `de ${k.faculty.toLowerCase()}`}.</b>{' '}
              {k.invitation}
            </p>
          </div>
          <div>
            <h4>Tradición judía · tu tikún</h4>
            <p>
              Lo que no se completa, el alma vuelve a buscarlo. Cada día es una ocasión de cumplir lo que te toca, sin
              tener que terminarlo todo de una vez.
            </p>
          </div>
        </div>
        <p className="note">
          Son tres miradas distintas y no se mezclan: la numerología es un sistema moderno de interpretación; la Kabbalah y
          la tradición judía se citan con sus fuentes.
        </p>
      </div>
    </div>
  )
}
