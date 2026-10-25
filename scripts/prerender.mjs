// Genera la portada pre-renderizada en español (dist/index.html) y en inglés (dist/en/index.html).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render, META, SITE_URL } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const template = readFileSync('dist/index.html', 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error('No se encontró <div id="root"></div> en dist/index.html')

const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

function page(lang) {
  const m = META[lang]
  const url = lang === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`
  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escape(m.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${m.locale}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(m.ogTitle)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escape(m.ogDescription)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escape(m.ogTitle)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escape(m.ogDescription)}$2`)
  return html.replace(marker, `<div id="root">${render(lang)}</div>`)
}

writeFileSync('dist/index.html', page('es'))
mkdirSync('dist/en', { recursive: true })
writeFileSync('dist/en/index.html', page('en'))
rmSync('dist-ssr', { recursive: true, force: true })

console.log('✓ Portadas pre-renderizadas: / (es) y /en/ (en)')
