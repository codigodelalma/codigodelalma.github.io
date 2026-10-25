import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages no permite cabeceras HTTP propias, así que la política de seguridad va como <meta>.
// Solo en el build: en desarrollo Vite necesita estilos en línea y su websocket de recarga.
const CSP = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "font-src 'self' data:",
  "img-src 'self' data:",
  "connect-src 'none'", // ninguna conexión saliente: los datos no pueden enviarse a ningún lado
  "manifest-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = (): Plugin => ({
  name: 'csp-meta',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
  ],
})

// Rutas absolutas: el sitio vive en la raíz del dominio y la versión en inglés en /en/
export default defineConfig({
  base: '/',
  plugins: [react(), securityHeaders()],
  build: { sourcemap: false, modulePreload: { polyfill: false } },
})
