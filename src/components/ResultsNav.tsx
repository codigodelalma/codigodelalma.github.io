import { useEffect, useState } from 'react'
import { useLang } from '../i18n/lang.tsx'

export interface NavItem {
  id: string
  label: string
}

/** Índice fijo de los resultados: muestra en qué parte estás y permite saltar a cualquiera. */
export function ResultsNav({ items }: { items: NavItem[] }) {
  const { lang } = useLang()
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    items.forEach((it) => {
      const el = document.getElementById(it.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [items])

  useEffect(() => {
    // Centra el enlace activo dentro del índice sin mover la página
    const list = document.querySelector<HTMLElement>('.results-nav ol')
    const link = document.querySelector<HTMLElement>(`.results-nav a[href="#${active}"]`)
    if (list && link) list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  return (
    <nav className="results-nav" aria-label={lang === 'en' ? 'Parts of your results' : 'Partes de tus resultados'}>
      <ol>
        {items.map((it, i) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className={active === it.id ? 'active' : ''} aria-current={active === it.id ? 'true' : undefined}>
              <span className="rn-num">{i + 1}</span>
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
