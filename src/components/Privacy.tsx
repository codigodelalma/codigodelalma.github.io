import { SITE_NAME } from '../config.ts'
import { useLang } from '../i18n/lang.tsx'

const UI = {
  es: {
    eyebrow: 'Política de privacidad',
    title: 'Tus datos no salen de tu dispositivo',
    lead: (
      <>
        {SITE_NAME} <strong>no recopila, no almacena, no envía y no comparte</strong> ningún dato de las personas que lo usan.
        Ni tu nombre, ni tu fecha de nacimiento, ni tus resultados.
      </>
    ),
    whatTitle: 'Qué pasa con lo que escribes',
    what: [
      'El cálculo se hace por completo en tu navegador, dentro de tu dispositivo.',
      'Lo que escribes solo existe mientras la página está abierta: al recargarla o cerrarla, desaparece.',
      'El formulario no se envía a ningún servidor; el sitio ni siquiera tiene un servidor que pueda recibirlo.',
      'Se pide al navegador que no guarde lo escrito en su autocompletado.',
      'El idioma se elige con la dirección de la página (/en/ para inglés); no se guarda en tu navegador.',
    ],
    notTitle: 'Lo que este sitio no usa',
    not: [
      'Cookies',
      'Analítica o estadísticas de visitas',
      'Publicidad',
      'Píxeles o rastreadores',
      'Almacenamiento local del navegador',
      'Cuentas o registros',
      'Servicios o fuentes de terceros',
    ],
    howTitle: 'Cómo se garantiza',
    how: [
      <>
        <b>Bloqueo técnico de envíos:</b> la política de seguridad del sitio (Content-Security-Policy) prohíbe al navegador
        abrir cualquier conexión de datos (<code>connect-src 'none'</code>) y enviar formularios (<code>form-action 'none'</code>).
        Aunque alguien intentara añadir código para enviar datos, el navegador lo bloquearía.
      </>,
      <>
        <b>Todo es propio:</b> scripts, estilos, fuentes e imágenes se sirven desde este mismo sitio; no se carga nada de
        terceros.
      </>,
      <>
        <b>Verificación automática:</b> cada publicación revisa el código y se detiene si encuentra funciones que envíen o
        guarden datos.
      </>,
      <>
        <b>Código abierto:</b> cualquiera puede revisar el código fuente en GitHub.
      </>,
    ],
    choiceTitle: 'Solo si tú lo decides',
    choice: [
      <>
        <b>Guardar como PDF</b> usa la impresión de tu navegador: el archivo se crea y queda en tu dispositivo.
      </>,
      <>
        <b>Compartir</b> abre el menú de tu propio dispositivo o copia el texto al portapapeles; tú eliges si lo envías y a
        quién.
      </>,
    ],
    hostTitle: 'Alojamiento y enlaces externos',
    host: (
      <>
        El sitio está alojado en GitHub Pages. Como cualquier servidor web, GitHub puede registrar datos técnicos de la
        conexión, como la dirección IP, por motivos de seguridad y según su{' '}
        <a
          href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          declaración de privacidad
        </a>
        . Esos registros nunca contienen tu nombre ni tu fecha de nacimiento, porque esos datos no salen de tu navegador.{' '}
        {SITE_NAME} no tiene acceso a ellos.
      </>
    ),
    links:
      'Los enlaces a las fuentes (Sefaria, Chabad.org, Jewish Virtual Library y otras) abren sitios externos con sus propias políticas. Se abren sin indicarles desde qué página vienes.',
    updated: 'Última actualización: 25 de octubre de 2026.',
  },
  en: {
    eyebrow: 'Privacy policy',
    title: 'Your data never leaves your device',
    lead: (
      <>
        {SITE_NAME} <strong>does not collect, store, send or share</strong> any data about the people who use it. Not your
        name, not your date of birth, not your results.
      </>
    ),
    whatTitle: 'What happens to what you type',
    what: [
      'The calculation runs entirely in your browser, on your device.',
      'What you type only exists while the page is open: when you reload or close it, it disappears.',
      'The form is not sent to any server; the site does not even have a server that could receive it.',
      'The browser is asked not to save what you type in its autofill.',
      'The language is chosen through the page address (/en/ for English); it is not saved in your browser.',
    ],
    notTitle: 'What this site does not use',
    not: [
      'Cookies',
      'Analytics or visit statistics',
      'Advertising',
      'Pixels or trackers',
      'Browser local storage',
      'Accounts or sign-ups',
      'Third-party services or fonts',
    ],
    howTitle: 'How this is guaranteed',
    how: [
      <>
        <b>Technical block on sending:</b> the site’s security policy (Content-Security-Policy) forbids the browser from
        opening any data connection (<code>connect-src 'none'</code>) and from submitting forms (<code>form-action 'none'</code>).
        Even if someone tried to add code to send data, the browser would block it.
      </>,
      <>
        <b>Everything is self-hosted:</b> scripts, styles, fonts and images are served from this same site; nothing is loaded
        from third parties.
      </>,
      <>
        <b>Automatic check:</b> every release scans the code and stops if it finds functions that send or store data.
      </>,
      <>
        <b>Open source:</b> anyone can review the source code on GitHub.
      </>,
    ],
    choiceTitle: 'Only if you decide',
    choice: [
      <>
        <b>Save as PDF</b> uses your browser’s print feature: the file is created and stays on your device.
      </>,
      <>
        <b>Share</b> opens your own device’s menu or copies the text to the clipboard; you choose whether to send it and to
        whom.
      </>,
    ],
    hostTitle: 'Hosting and external links',
    host: (
      <>
        The site is hosted on GitHub Pages. Like any web server, GitHub may log technical connection data, such as the IP
        address, for security reasons and according to its{' '}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy statement
        </a>
        . Those logs never contain your name or your date of birth, because that data never leaves your browser. {SITE_NAME}{' '}
        has no access to them.
      </>
    ),
    links:
      'Links to the sources (Sefaria, Chabad.org, Jewish Virtual Library and others) open external sites with their own policies. They open without telling them which page you came from.',
    updated: 'Last updated: October 25, 2026.',
  },
}

export function Privacy() {
  const t = UI[useLang().lang]
  return (
    <section className="privacy reveal" id="privacidad" aria-labelledby="privacidad-title">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 id="privacidad-title">{t.title}</h2>
      <div className="glass privacy-card">
        <p className="lead">{t.lead}</p>

        <h3>{t.whatTitle}</h3>
        <ul className="steps">
          {t.what.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.notTitle}</h3>
        <ul className="privacy-chips">
          {t.not.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.howTitle}</h3>
        <ul className="steps">
          {t.how.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t.choiceTitle}</h3>
        <ul className="steps">
          {t.choice.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t.hostTitle}</h3>
        <p>{t.host}</p>
        <p>{t.links}</p>

        <p className="note">{t.updated}</p>
      </div>
    </section>
  )
}
