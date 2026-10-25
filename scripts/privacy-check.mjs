// Verificación de privacidad: falla el build si el código puede enviar, guardar o rastrear datos.
// Se ejecuta en cada build (local y en GitHub Actions), así que un cambio así nunca llega a publicarse.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const FORBIDDEN = [
  [/\bfetch\s*\(/, 'fetch() — envío de datos por red'],
  [/XMLHttpRequest/, 'XMLHttpRequest — envío de datos por red'],
  [/sendBeacon/, 'navigator.sendBeacon — envío de datos por red'],
  [/\bWebSocket\b/, 'WebSocket — conexión de red'],
  [/\bEventSource\b/, 'EventSource — conexión de red'],
  [/RTCPeerConnection/, 'WebRTC — conexión de red'],
  [/localStorage/, 'localStorage — almacenamiento en el navegador'],
  [/sessionStorage/, 'sessionStorage — almacenamiento en el navegador'],
  [/indexedDB/, 'IndexedDB — almacenamiento en el navegador'],
  [/document\.cookie/, 'cookies'],
  [/caches\.open/, 'Cache Storage — almacenamiento en el navegador'],
  [/serviceWorker/, 'Service Worker'],
  [/geolocation/, 'geolocalización'],
  [/google-analytics|googletagmanager|gtag\(|facebook\.net|hotjar|clarity\.ms|plausible|matomo|segment\.com/i, 'rastreador o analítica'],
]

const files = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? files(p) : [p]
  })

const targets = [
  ...files('src').filter((f) => /\.(ts|tsx|js|jsx)$/.test(f)),
  ...files('dist').filter((f) => /\.(js|html)$/.test(f)),
]

const problems = []
for (const file of targets) {
  const text = readFileSync(file, 'utf8')
  for (const [re, what] of FORBIDDEN) if (re.test(text)) problems.push(`${file}: ${what}`)
}

for (const page of ['dist/index.html', 'dist/en/index.html']) {
  const html = readFileSync(page, 'utf8')
  const csp = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1].replaceAll('&#39;', "'") ?? ''
  for (const rule of ["default-src 'none'", "connect-src 'none'", "form-action 'none'"]) {
    if (!csp.includes(rule)) problems.push(`${page}: la CSP no incluye ${rule}`)
  }
  // La CSP bloquea los estilos en línea: el HTML pre-renderizado no debe llevar atributos style
  if (/<[a-z][^>]*\sstyle="/i.test(html)) problems.push(`${page}: hay atributos style en línea (los bloquea la CSP)`)
  // Recursos que el navegador carga solo (scripts, estilos, imágenes, marcos…): únicamente del propio sitio.
  // Los enlaces <a href> a las fuentes citadas no cargan nada hasta que la persona los pulsa.
  const RESOURCE = /<(script|link|img|iframe|source|video|audio|embed|object|track)[^>]*?(?:src|href|srcset)="((?:https?:)?\/\/[^"]+)"/g
  for (const m of html.matchAll(RESOURCE)) {
    if (!m[2].startsWith('https://codigodelalma.github.io/')) problems.push(`${page}: recurso externo <${m[1]}> ${m[2]}`)
  }
}

if (problems.length) {
  console.error('✗ Verificación de privacidad fallida:\n  ' + problems.join('\n  '))
  process.exit(1)
}
console.log(`✓ Privacidad verificada: ${targets.length} archivos sin envío, almacenamiento ni rastreo de datos; CSP bloquea conexiones y formularios.`)
