import type { ReactNode } from 'react'
import { PYTHAGOREAN_TABLE } from '../lib/numerology.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'

const UI: Record<'es' | 'en', { eyebrow: string; title: string; table: string; tableText: string; four: string; steps: ReactNode[]; y: ReactNode; three: string; views: ReactNode[]; sources: string; disclaimer: string }> = {
  es: {
    eyebrow: 'Metodología',
    title: '¿Cómo se calcula?',
    table: 'La tabla pitagórica',
    tableText: 'Cada letra recibe un valor del 1 al 9 según su posición en el alfabeto. Los acentos se ignoran y la Ñ vale como la N.',
    four: 'Los cuatro números',
    steps: [
      <>
        <b>Lección de vida:</b> se suman todos los dígitos de la fecha. 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 → 6.
      </>,
      <>
        <b>Alma:</b> se suman las vocales de cada nombre, se reduce cada uno a un dígito y luego se suman entre sí.
      </>,
      <>
        <b>Personalidad externa:</b> el mismo procedimiento con las consonantes.
      </>,
      <>
        <b>Destino:</b> alma + personalidad. Si suma 11, se conserva como número maestro, como indica Hans Decoz; si no,
        se reduce a un dígito.
      </>,
    ],
    y: (
      <>
        La <b>Y</b> cuenta como vocal cuando suena como «i» (al final de palabra o antes de consonante: Godoy, Mayra) y como
        consonante antes de vocal (Yolanda). Si en el camino aparece 11, 22 o 33, se señala como vibración maestra.
      </>
    ),
    three: 'Tres miradas, bien distinguidas',
    views: [
      <>
        <b>Numerología pitagórica:</b> sistema moderno de interpretación simbólica, sistematizado a comienzos del siglo XX
        (L. Dow Balliett). Pese a su nombre, no procede de Pitágoras.
      </>,
      <>
        <b>Kabbalah:</b> la tradición mística judía; aquí se usa la correspondencia simbólica entre cada número, la letra
        hebrea de ese valor y la sefirá del mismo orden.
      </>,
      <>
        <b>Tradición judía:</b> lo que el número representa en la Torá, el Talmud y las costumbres judías, siempre con su
        fuente citada.
      </>,
    ],
    sources: 'Fuentes de referencia',
    disclaimer:
      'Este sitio tiene fines de reflexión personal y divulgación cultural. La numerología no es una ciencia y sus lecturas no sustituyen el consejo profesional. Las referencias a la tradición judía buscan informar con respeto y no representan la opinión de ninguna autoridad rabínica.',
  },
  en: {
    eyebrow: 'Method',
    title: 'How is it calculated?',
    table: 'The Pythagorean table',
    tableText: 'Each letter gets a value from 1 to 9 according to its position in the alphabet. Accents are ignored and Ñ counts as N.',
    four: 'The four numbers',
    steps: [
      <>
        <b>Life lesson:</b> add all the digits of the date. 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 → 6.
      </>,
      <>
        <b>Soul:</b> add the vowels of each name, reduce each one to a single digit and then add them together.
      </>,
      <>
        <b>Outer personality:</b> the same procedure with the consonants.
      </>,
      <>
        <b>Destiny:</b> soul + personality. If it adds up to 11, it is kept as a master number, as Hans Decoz indicates;
        otherwise it is reduced to one digit.
      </>,
    ],
    y: (
      <>
        <b>Y</b> counts as a vowel when it sounds like “i” (at the end of a word or before a consonant: Godoy, Mayra) and as a
        consonant before a vowel (Yolanda). If 11, 22 or 33 appears along the way, it is marked as a master vibration.
      </>
    ),
    three: 'Three perspectives, clearly distinguished',
    views: [
      <>
        <b>Pythagorean numerology:</b> a modern system of symbolic interpretation, systematized in the early 20th century (L.
        Dow Balliett). Despite its name, it does not come from Pythagoras.
      </>,
      <>
        <b>Kabbalah:</b> the Jewish mystical tradition; here we use the symbolic correspondence between each number, the
        Hebrew letter of that value and the sefirah of the same order.
      </>,
      <>
        <b>Jewish tradition:</b> what the number represents in the Torah, the Talmud and Jewish customs, always with its source
        cited.
      </>,
    ],
    sources: 'Reference sources',
    disclaimer:
      'This site is meant for personal reflection and cultural education. Numerology is not a science and its readings do not replace professional advice. The references to Jewish tradition aim to inform respectfully and do not represent the opinion of any rabbinic authority.',
  },
}

export function Method() {
  const t = UI[useLang().lang]
  const { GENERAL_SOURCES } = useContent()
  return (
    <section className="method reveal" id="metodo">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2>{t.title}</h2>
      <div className="method-grid">
        <div className="glass method-card">
          <h3>{t.table}</h3>
          <p>{t.tableText}</p>
          <table className="pyth">
            <thead>
              <tr>
                {Array.from({ length: 9 }, (_, i) => (
                  <th key={i}>{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PYTHAGOREAN_TABLE.map((row, r) => (
                <tr key={r}>
                  {Array.from({ length: 9 }, (_, i) => (
                    <td key={i}>{row[i] ?? ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass method-card">
          <h3>{t.four}</h3>
          <ol className="steps">
            {t.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="note">{t.y}</p>
        </div>
        <div className="glass method-card">
          <h3>{t.three}</h3>
          <ul className="steps">
            {t.views.map((view, i) => (
              <li key={i}>{view}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass sources-card">
        <h3>{t.sources}</h3>
        <ul>
          {GENERAL_SOURCES.map((s) => (
            <li key={s.label}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </li>
          ))}
        </ul>
        <p className="note">{t.disclaimer}</p>
      </div>
    </section>
  )
}
