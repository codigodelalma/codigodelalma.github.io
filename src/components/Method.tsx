import { PYTHAGOREAN_TABLE } from '../lib/numerology.ts'
import { GENERAL_SOURCES } from '../data/tradition.ts'

export function Method() {
  return (
    <section className="method reveal" id="metodo">
      <p className="eyebrow">Metodología</p>
      <h2>¿Cómo se calcula?</h2>
      <div className="method-grid">
        <div className="glass method-card">
          <h3>La tabla pitagórica</h3>
          <p>Cada letra recibe un valor del 1 al 9 según su posición en el alfabeto. Los acentos se ignoran y la Ñ vale como la N.</p>
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
          <h3>Los cuatro números</h3>
          <ol className="steps">
            <li>
              <b>Lección de vida:</b> se suman todos los dígitos de la fecha. 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 → 6.
            </li>
            <li>
              <b>Alma:</b> se suman las vocales de cada nombre, se reduce cada uno a un dígito y luego se suman entre sí.
            </li>
            <li>
              <b>Personalidad externa:</b> el mismo procedimiento con las consonantes.
            </li>
            <li>
              <b>Destino:</b> alma + personalidad, reducido a un dígito.
            </li>
          </ol>
          <p className="note">
            La <b>Y</b> cuenta como vocal cuando suena como «i» (al final de palabra o antes de consonante: Godoy, Mayra) y
            como consonante antes de vocal (Yolanda). Si en el camino aparece 11, 22 o 33, se señala como vibración maestra.
          </p>
        </div>
        <div className="glass method-card">
          <h3>Tres miradas, bien distinguidas</h3>
          <ul className="steps">
            <li>
              <b>Numerología pitagórica:</b> sistema moderno de interpretación simbólica, sistematizado a comienzos del siglo XX (L. Dow Balliett). Pese a su nombre, no procede de Pitágoras.
            </li>
            <li>
              <b>Kabbalah:</b> la tradición mística judía; aquí se usa la correspondencia simbólica entre cada número, la letra
              hebrea de ese valor y la sefirá del mismo orden.
            </li>
            <li>
              <b>Tradición judía:</b> lo que el número representa en la Torá, el Talmud y las costumbres judías, siempre con su
              fuente citada.
            </li>
          </ul>
        </div>
      </div>

      <div className="glass sources-card">
        <h3>Fuentes de referencia</h3>
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
        <p className="note">
          Este sitio tiene fines de reflexión personal y divulgación cultural. La numerología no es una ciencia y sus
          lecturas no sustituyen el consejo profesional. Las referencias a la tradición judía buscan informar con
          respeto y no representan la opinión de ninguna autoridad rabínica.
        </p>
      </div>
    </section>
  )
}
