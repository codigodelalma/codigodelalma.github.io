// Inserta el HTML pre-renderizado de la portada en dist/index.html.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const html = render()

const file = 'dist/index.html'
const page = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!page.includes(marker)) throw new Error('No se encontró <div id="root"></div> en dist/index.html')
writeFileSync(file, page.replace(marker, `<div id="root">${html}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })

console.log(`✓ Portada pre-renderizada: ${(html.length / 1024).toFixed(1)} KB de HTML`)
