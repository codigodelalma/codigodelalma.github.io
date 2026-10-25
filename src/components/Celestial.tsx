import { useEffect, useRef } from 'react'

/** Luna y sol decorativos. Solo SVG y CSS: sin imágenes externas.
 *  En pantallas anchas acompañan el scroll por los márgenes laterales (variable --p de 0 a 1). */

function Moon() {
  return (
    <svg className="moon" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="moon-glow">
          <stop offset="0.35" stopColor="#e9e1ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#e9e1ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moon-face" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="0.55" stopColor="#ece2c6" />
          <stop offset="1" stopColor="#b9a77c" />
        </radialGradient>
        <mask id="moon-crescent">
          <rect width="200" height="200" fill="#fff" />
          <circle cx="128" cy="82" r="56" fill="#000" />
        </mask>
      </defs>
      <circle className="moon-halo" cx="100" cy="100" r="98" fill="url(#moon-glow)" />
      <g mask="url(#moon-crescent)">
        <circle cx="100" cy="100" r="62" fill="url(#moon-face)" />
        <circle cx="66" cy="118" r="9" fill="#cbbd96" opacity="0.55" />
        <circle cx="80" cy="146" r="5" fill="#cbbd96" opacity="0.5" />
        <circle cx="56" cy="88" r="4" fill="#cbbd96" opacity="0.45" />
        <circle cx="104" cy="152" r="6" fill="#cbbd96" opacity="0.4" />
      </g>
      <g className="moon-sparkles" fill="#fff4d6">
        <path d="M160 140l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path d="M150 36l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        <circle cx="176" cy="104" r="2" />
      </g>
    </svg>
  )
}

function Sun() {
  const long = Array.from({ length: 12 }, (_, i) => i * 30)
  const short = Array.from({ length: 12 }, (_, i) => i * 30 + 15)
  return (
    <svg className="sun" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="sun-glow">
          <stop offset="0.3" stopColor="#ffd98a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sun-core" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#fff8dc" />
          <stop offset="0.45" stopColor="#f8d27a" />
          <stop offset="1" stopColor="#d98a2b" />
        </radialGradient>
        <linearGradient id="sun-ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe6a6" stopOpacity="0" />
          <stop offset="1" stopColor="#f6c35c" />
        </linearGradient>
      </defs>
      <circle className="sun-halo" cx="100" cy="100" r="98" fill="url(#sun-glow)" />
      <g className="sun-rays">
        {long.map((a) => (
          <path key={a} d="M100 6 L106 50 L94 50 Z" fill="url(#sun-ray)" transform={`rotate(${a} 100 100)`} />
        ))}
        {short.map((a) => (
          <path key={a} d="M100 24 L104 52 L96 52 Z" fill="url(#sun-ray)" opacity="0.7" transform={`rotate(${a} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="44" fill="url(#sun-core)" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ffe3a0" strokeOpacity="0.45" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="44" fill="none" stroke="#fff3cf" strokeOpacity="0.6" strokeWidth="1" />
    </svg>
  )
}

export function Celestial() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let current = 0
    let target = 0
    let raf = 0

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }

    // Interpolación suave: la luna y el sol "flotan" hacia su posición en vez de saltar
    const step = () => {
      current += (target - current) * 0.08
      if (Math.abs(target - current) < 0.0005) current = target
      el.style.setProperty('--p', current.toFixed(4))
      raf = current === target ? 0 : requestAnimationFrame(step)
    }

    const onScroll = () => {
      target = progress()
      if (reduced) {
        current = target
        el.style.setProperty('--p', current.toFixed(4))
      } else if (!raf) raf = requestAnimationFrame(step)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="celestial" ref={ref} aria-hidden="true">
      <div className="orbit orbit-moon">
        <Moon />
      </div>
      <div className="orbit orbit-sun">
        <Sun />
      </div>
    </div>
  )
}
