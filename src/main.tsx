import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import { langFromPath } from './i18n/lang.tsx'
import './fonts.ts'
import './styles.css'

// Con JavaScript activo se habilitan las animaciones de entrada (sin JS el contenido se ve completo)
document.documentElement.classList.add('js')

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App initialLang={langFromPath(location.pathname)} />
  </StrictMode>
)

// En producción la portada llega pre-renderizada: React se engancha a ese HTML en vez de dibujarlo de nuevo
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
