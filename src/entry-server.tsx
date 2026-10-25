// Render en tiempo de compilación: genera el HTML de la portada en cada idioma para buscadores y primera carga rápida.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import type { Lang } from './i18n/lang.tsx'

export { META, SITE_URL } from './i18n/meta.ts'

export function render(lang: Lang): string {
  return renderToString(
    <StrictMode>
      <App initialLang={lang} />
    </StrictMode>,
  )
}
