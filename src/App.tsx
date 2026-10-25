import { useEffect, useState } from 'react'
import { buildProfile, type BirthDate, type Profile } from './lib/numerology.ts'
import { SITE_NAME, SITE_TAGLINE } from './config.ts'
import { Starfield } from './components/Starfield.tsx'
import { BirthForm } from './components/BirthForm.tsx'
import { Results } from './components/Results.tsx'
import { Method } from './components/Method.tsx'
import { Privacy } from './components/Privacy.tsx'

/** Activa la animación de entrada de los elementos .reveal al hacer scroll. */
function useReveal(dep: unknown) {
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
  }, [dep])
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(null)
  useReveal(profile)

  const handleSubmit = (name: string, date: BirthDate) => {
    setProfile(buildProfile(name, date))
    requestAnimationFrame(() =>
      document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    )
  }

  const reset = () => {
    setProfile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Starfield />
      <div className="aurora" aria-hidden="true" />

      <header className="topbar">
        <a href="#" className="brand" onClick={reset}>
          <img src="./favicon.svg" alt="" width="28" height="28" />
          <span>{SITE_NAME}</span>
        </a>
        <nav>
          <a href="#metodo">Metodología</a>
          <a href="#privacidad">Privacidad</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{SITE_TAGLINE}</p>
            <h1>
              Tu nombre y tu fecha de nacimiento
              <br />
              <em>guardan un código.</em>
            </h1>
            <p className="hero-sub">
              Descubre tu lección de vida, el número de tu alma, tu personalidad y tu destino. Cada número se desglosa
              en tres lecturas: numerología, Kabbalah y tradición judía, con fuentes citadas.
            </p>
            <div className="hero-glyphs" aria-hidden="true" lang="he">
              {'אבגדהוזחט'.split('').map((g, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.25}s` }}>
                  {g}
                </span>
              ))}
            </div>
          </div>
          <BirthForm onSubmit={handleSubmit} />
        </section>

        {profile && <Results profile={profile} onReset={reset} key={profile.name + JSON.stringify(profile.date)} />}

        <Method />
        <Privacy />
      </main>

      <footer className="footer">
        <p>
          {SITE_NAME} · {new Date().getFullYear()}
        </p>
        <p className="note">
          No recopilamos ni guardamos ningún dato · <a href="#privacidad">Política de privacidad</a>
        </p>
        <p className="note">Contenido con fines de reflexión personal y divulgación cultural.</p>
      </footer>
    </>
  )
}
