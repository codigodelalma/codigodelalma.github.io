# Seguridad

Código del Alma es un sitio estático: no tiene servidor, base de datos, cuentas de usuario ni cookies.
El nombre y la fecha de nacimiento se procesan solo en el navegador de quien los escribe y no se envían a ningún lado.

## Privacidad: no se recopila ningún dato

El sitio no recopila, almacena, envía ni comparte información de las personas. Se garantiza así:

- La CSP incluye `connect-src 'none'` y `form-action 'none'`: el navegador bloquea cualquier conexión de datos y cualquier envío de formulario, incluso si se añadiera código para intentarlo.
- No hay cookies, analítica, publicidad, rastreadores ni almacenamiento local (`localStorage`, `sessionStorage`, IndexedDB).
- El formulario usa `autocomplete="off"` para que el navegador no guarde lo escrito.
- `scripts/privacy-check.mjs` se ejecuta en cada build y lo detiene si encuentra APIs de red, almacenamiento, cookies, geolocalización o rastreadores.
- La política de privacidad visible está en la sección «Privacidad» del sitio.

GitHub Pages, como proveedor de alojamiento, puede registrar datos técnicos de conexión (como la IP) según su propia declaración de privacidad; esos registros no incluyen datos del formulario.

## Medidas aplicadas

- Política de seguridad de contenido (CSP) estricta en el HTML publicado: solo se cargan scripts, estilos, fuentes e imágenes del propio sitio, y no se permite ninguna conexión saliente.
- Sin dependencias de terceros en tiempo de ejecución: las fuentes están alojadas en el sitio.
- React escapa todo el texto que se muestra; no se usa `innerHTML` ni `eval`.
- Los enlaces externos se abren con `rel="noopener noreferrer"`.
- Workflow de despliegue con permisos mínimos, acciones fijadas por SHA, `npm ci --ignore-scripts` y `npm audit`.
- Dependabot revisa dependencias y acciones.

## Reportar un problema

Abre un aviso privado en la pestaña **Security → Report a vulnerability** del repositorio.
