import { useEffect, useState } from 'react'
import { buildProfile, type BirthDate, type Profile } from './lib/numerology.ts'
import { SITE_NAME } from './config.ts'
import { Starfield } from './components/Starfield.tsx'
import { BirthForm } from './components/BirthForm.tsx'
import { Results } from './components/Results.tsx'
import { Method } from './components/Method.tsx'
import { Glossary } from './components/Glossary.tsx'
import { Privacy } from './components/Privacy.tsx'
import { Celestial } from './components/Celestial.tsx'
import { LangSwitch } from './components/LangSwitch.tsx'
import { LangProvider, langFromPath, pathFor, type Lang } from './i18n/lang.tsx'
import { META } from './i18n/meta.ts'

const UI = {
  es: {
    nav: { method: 'Metodología', glossary: 'Glosario', privacy: 'Privacidad' },
    h1: 'Tu nombre y tu fecha de nacimiento',
    h1em: 'guardan un código.',
    sub: 'Descubre tu lección de vida, el número de tu alma, tu personalidad y tu destino. Cada número se desglosa en tres lecturas: numerología, Kabbalah y tradición judía, con fuentes citadas.',
    footerPrivacy: 'No recopilamos ni guardamos ningún dato',
    footerPolicy: 'Política de privacidad',
    footerNote: 'Contenido con fines de reflexión personal y divulgación cultural.',
  },
  en: {
    nav: { method: 'Method', glossary: 'Glossary', privacy: 'Privacy' },
    h1: 'Your name and your date of birth',
    h1em: 'hold a code.',
    sub: 'Discover your life lesson, your soul number, your personality and your destiny. Each number is broken down into three readings: numerology, Kabbalah and Jewish tradition, with cited sources.',
    footerPrivacy: 'We do not collect or store any data',
    footerPolicy: 'Privacy policy',
    footerNote: 'Content for personal reflection and cultural education.',
  },
}

/** Activa la animación de entrada de los elementos .reveal al hacer scroll. */
function useReveal(deps: unknown[]) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Ajusta el idioma del documento, el título y la descripción al cambiar de idioma. */
function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang
  document.title = META[lang].title
  document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description)
}

export default function App({ initialLang = 'es' }: { initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [profile, setProfile] = useState<Profile | null>(null)
  const t = UI[lang]
  useReveal([profile, lang])

  // Cambiar de idioma no recarga la página: se conservan los resultados ya calculados
  const setLang = (next: Lang) => {
    if (next === lang) return
    setLangState(next)
    history.pushState(null, '', pathFor(next) + location.hash)
    applyDocumentLang(next)
  }

  useEffect(() => {
    const onPop = () => {
      const next = langFromPath(location.pathname)
      setLangState(next)
      applyDocumentLang(next)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const handleSubmit = (name: string, date: BirthDate) => {
    setProfile(buildProfile(name, date))
    requestAnimationFrame(() => document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  const reset = () => {
    setProfile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <LangProvider value={{ lang, setLang }}>
      <Starfield />
      <div className="aurora" aria-hidden="true" />
      <Celestial />

      <header className="topbar">
        <a
          href={pathFor(lang)}
          className="brand"
          onClick={(e) => {
            e.preventDefault()
            reset()
          }}
        >
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>{SITE_NAME}</span>
        </a>
        <nav>
          <a href="#metodo">{t.nav.method}</a>
          <a href="#glosario">{t.nav.glossary}</a>
          <a href="#privacidad">{t.nav.privacy}</a>
          <LangSwitch />
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{META[lang].tagline}</p>
            <h1>
              {t.h1}
              <br />
              <em>{t.h1em}</em>
            </h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="hero-glyphs" aria-hidden="true" lang="he">
              {/* Sin estilos en línea: la CSP (style-src 'self') los bloquearía en el HTML pre-renderizado */}
              {'אבגדהוזחט'.split('').map((g, i) => (
                <span key={i}>{g}</span>
              ))}
            </div>
          </div>
          <BirthForm onSubmit={handleSubmit} />
        </section>

        {profile && <Results profile={profile} onReset={reset} key={profile.name + JSON.stringify(profile.date)} />}

        <Method />
        <Glossary />
        <Privacy />
      </main>

      <footer className="footer">
        <p>
          {SITE_NAME} · {new Date().getFullYear()}
        </p>
        <p className="note">
          {t.footerPrivacy} · <a href="#privacidad">{t.footerPolicy}</a>
        </p>
        <p className="note">{t.footerNote}</p>
      </footer>
    </LangProvider>
  )
}
