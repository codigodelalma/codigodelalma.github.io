import { SITE_NAME } from '../config.ts'

export const PRIVACY_UPDATED = '25 de octubre de 2026'

export function Privacy() {
  return (
    <section className="privacy reveal" id="privacidad" aria-labelledby="privacidad-title">
      <p className="eyebrow">Política de privacidad</p>
      <h2 id="privacidad-title">Tus datos no salen de tu dispositivo</h2>
      <div className="glass privacy-card">
        <p className="lead">
          {SITE_NAME} <strong>no recopila, no almacena, no envía y no comparte</strong> ningún dato de las personas que lo
          usan. Ni tu nombre, ni tu fecha de nacimiento, ni tus resultados.
        </p>

        <h3>Qué pasa con lo que escribes</h3>
        <ul className="steps">
          <li>El cálculo se hace por completo en tu navegador, dentro de tu dispositivo.</li>
          <li>Lo que escribes solo existe mientras la página está abierta: al recargarla o cerrarla, desaparece.</li>
          <li>El formulario no se envía a ningún servidor; el sitio ni siquiera tiene un servidor que pueda recibirlo.</li>
          <li>Se pide al navegador que no guarde lo escrito en su autocompletado.</li>
        </ul>

        <h3>Lo que este sitio no usa</h3>
        <ul className="privacy-chips">
          <li>Cookies</li>
          <li>Analítica o estadísticas de visitas</li>
          <li>Publicidad</li>
          <li>Píxeles o rastreadores</li>
          <li>Almacenamiento local del navegador</li>
          <li>Cuentas o registros</li>
          <li>Servicios o fuentes de terceros</li>
        </ul>

        <h3>Cómo se garantiza</h3>
        <ul className="steps">
          <li>
            <b>Bloqueo técnico de envíos:</b> la política de seguridad del sitio (Content-Security-Policy) prohíbe al
            navegador abrir cualquier conexión de datos (<code>connect-src 'none'</code>) y enviar formularios (
            <code>form-action 'none'</code>). Aunque alguien intentara añadir código para enviar datos, el navegador lo
            bloquearía.
          </li>
          <li>
            <b>Todo es propio:</b> scripts, estilos, fuentes e imágenes se sirven desde este mismo sitio; no se carga nada
            de terceros.
          </li>
          <li>
            <b>Verificación automática:</b> cada publicación revisa el código y se detiene si encuentra funciones que
            envíen o guarden datos.
          </li>
          <li>
            <b>Código abierto:</b> cualquiera puede revisar el código fuente en GitHub.
          </li>
        </ul>

        <h3>Solo si tú lo decides</h3>
        <ul className="steps">
          <li>
            <b>Guardar como PDF</b> usa la impresión de tu navegador: el archivo se crea y queda en tu dispositivo.
          </li>
          <li>
            <b>Compartir</b> abre el menú de tu propio dispositivo o copia el texto al portapapeles; tú eliges si lo envías
            y a quién.
          </li>
        </ul>

        <h3>Alojamiento y enlaces externos</h3>
        <p>
          El sitio está alojado en GitHub Pages. Como cualquier servidor web, GitHub puede registrar datos técnicos de la
          conexión, como la dirección IP, por motivos de seguridad y según su{' '}
          <a
            href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            declaración de privacidad
          </a>
          . Esos registros nunca contienen tu nombre ni tu fecha de nacimiento, porque esos datos no salen de tu
          navegador. {SITE_NAME} no tiene acceso a ellos.
        </p>
        <p>
          Los enlaces a las fuentes (Sefaria, Chabad.org, Jewish Virtual Library y otras) abren sitios externos con sus
          propias políticas. Se abren sin indicarles desde qué página vienes.
        </p>

        <p className="note">Última actualización: {PRIVACY_UPDATED}.</p>
      </div>
    </section>
  )
}
