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

const html = readFileSync('dist/index.html', 'utf8')
const csp = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1].replaceAll('&#39;', "'") ?? ''
for (const rule of ["default-src 'none'", "connect-src 'none'", "form-action 'none'"]) {
  if (!csp.includes(rule)) problems.push(`dist/index.html: la CSP no incluye ${rule}`)
}
for (const m of html.matchAll(/(?:src|href)="(https?:)?\/\/[^"]+"/g)) problems.push(`dist/index.html: recurso externo ${m[0]}`)

if (problems.length) {
  console.error('✗ Verificación de privacidad fallida:\n  ' + problems.join('\n  '))
  process.exit(1)
}
console.log(`✓ Privacidad verificada: ${targets.length} archivos sin envío, almacenamiento ni rastreo de datos; CSP bloquea conexiones y formularios.`)
