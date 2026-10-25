import { useState } from 'react'
import type { Profile } from '../lib/numerology.ts'
import { NUMBERS, POSITIONS, type PositionKey } from '../data/numerology.ts'
import { SEFIROT } from '../data/tradition.ts'
import { NumberSection } from './NumberSection.tsx'
import { TreeOfLife } from './TreeOfLife.tsx'

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const ORDER: PositionKey[] = ['leccion', 'alma', 'personalidad', 'destino']

export function Results({ profile, onReset }: { profile: Profile; onReset: () => void }) {
  const [copied, setCopied] = useState(false)
  const values: Record<PositionKey, number> = {
    leccion: profile.lifeLesson.value,
    alma: profile.soul.value,
    personalidad: profile.personality.value,
    destino: profile.destiny.value,
  }
  const results = {
    leccion: profile.lifeLesson,
    alma: profile.soul,
    personalidad: profile.personality,
    destino: profile.destiny,
  }

  const marks: Record<number, string[]> = {}
  for (const k of ORDER) (marks[values[k]] ??= []).push(POSITIONS[k].title)

  const L = NUMBERS[values.leccion]
  const A = NUMBERS[values.alma]
  const P = NUMBERS[values.personalidad]
  const D = NUMBERS[values.destino]
  const Y = NUMBERS[profile.personalYear.value]
  const firstName = profile.words[0]?.word ?? ''
  const { day, month, year } = profile.date

  const summary =
    `${profile.name} · ${day} de ${MONTHS[month - 1]} de ${year}\n` +
    ORDER.map((k) => `${POSITIONS[k].title}: ${values[k]} (${NUMBERS[values[k]].archetype})`).join('\n')

  const share = async () => {
    const text = `Mi código numerológico\n${summary}\n${location.href}`
    try {
      if (navigator.share) await navigator.share({ title: 'Mi código numerológico', text })
      else {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }
    } catch {
      /* el usuario canceló */
    }
  }

  return (
    <div className="results" id="resultados">
      <section className="summary reveal">
        <p className="eyebrow">Tu mapa numerológico</p>
        <h2 className="summary-name">{profile.name}</h2>
        <p className="summary-date">
          Fecha de nacimiento: {day} de {MONTHS[month - 1]} de {year}
        </p>
        <div className="orbs">
          {ORDER.map((k, i) => (
            <a key={k} href={`#sec-${k}`} className="orb-card" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="orb" data-n={values[k]}>
                {values[k]}
              </span>
              <span className="orb-title">{POSITIONS[k].title}</span>
              <span className="orb-sub">{NUMBERS[values[k]].archetype}</span>
            </a>
          ))}
        </div>
        <div className="mini-stats">
          <div className="mini glass">
            <span className="mini-n">{profile.birthDay.value}</span>
            <span>
              <b>Número del día</b>
              <small>Talento natural: {NUMBERS[profile.birthDay.value].keywords.slice(0, 2).join(' y ').toLowerCase()}</small>
            </span>
          </div>
          <div className="mini glass">
            <span className="mini-n">{profile.personalYear.value}</span>
            <span>
              <b>Año personal {profile.personalYear.year}</b>
              <small>{Y.archetype}</small>
            </span>
          </div>
        </div>
      </section>

      <section className="synthesis glass reveal">
        <p className="eyebrow">Tu lección de vida en breve</p>
        <h2>Síntesis para {firstName}</h2>
        <p>
          Tu <strong>lección de vida {values.leccion}</strong> ({L.archetype.toLowerCase()}) te invita a{' '}
          <em>{L.essence}</em>. {L.lesson}
        </p>
        <p>
          En lo profundo, tu <strong>alma {values.alma}</strong> busca <em>{A.essence}</em>, mientras que el mundo te
          percibe a través de tu <strong>personalidad {values.personalidad}</strong>, que proyecta{' '}
          {P.keywords.slice(0, 2).join(' y ').toLowerCase()}.
        </p>
        <p>
          La unión de ambos forma tu <strong>destino {values.destino}</strong>: {D.positions.destino.charAt(0).toLowerCase() + D.positions.destino.slice(1)}
        </p>
        <p className="synthesis-year">
          <strong>
            Tu año personal {profile.personalYear.year} vibra en {profile.personalYear.value}:
          </strong>{' '}
          {Y.year}
        </p>
      </section>

      {ORDER.map((k, i) => (
        <NumberSection key={k} profile={profile} position={k} result={results[k]} index={i + 1} />
      ))}

      <section className="tree-section reveal">
        <p className="eyebrow">Kabbalah</p>
        <h2>Tus números en el Árbol de la Vida</h2>
        <p className="section-intro">
          El Árbol de la Vida (Etz Jaím) representa las diez sefirot, los atributos a través de los cuales, según la
          Kabbalah, lo divino se manifiesta. Aquí se iluminan las sefirot que corresponden a tus números:{' '}
          {Object.keys(marks)
            .map((n) => SEFIROT[Number(n) - 1].name)
            .join(', ')}
          .
        </p>
        <TreeOfLife marks={marks} initial={values.leccion} />
      </section>

      <section className="karmic glass reveal">
        <p className="eyebrow">Las letras de tu nombre</p>
        <h2>Tabla de inclusión y lecciones kármicas</h2>
        <p className="section-intro">
          Cuántas letras de tu nombre vibran en cada número. Los números ausentes se conocen en numerología como{' '}
          <strong>lecciones kármicas</strong>: cualidades que esta vida te pide desarrollar de forma consciente.
        </p>
        <div className="incl-grid">
          {profile.inclusion.map((count, i) => (
            <div key={i} className={`incl-cell${count === 0 ? ' missing' : ''}`}>
              <span className="incl-n">{i + 1}</span>
              <span className="incl-count">{count === 0 ? '—' : `×${count}`}</span>
            </div>
          ))}
        </div>
        {profile.karmicLessons.length ? (
          <ul className="karmic-list">
            {profile.karmicLessons.map((n) => (
              <li key={n}>
                <b>{n} · {NUMBERS[n].archetype}:</b> desarrollar {NUMBERS[n].keywords.slice(0, 3).join(', ').toLowerCase()}.
              </li>
            ))}
          </ul>
        ) : (
          <p className="lead">Tu nombre contiene los nueve números: no tienes lecciones kármicas pendientes.</p>
        )}
      </section>

      <div className="actions">
        <button className="btn btn-primary" onClick={() => window.print()}>
          Guardar como PDF
        </button>
        <button className="btn btn-ghost" onClick={share}>
          {copied ? '¡Copiado!' : 'Compartir'}
        </button>
        <button className="btn btn-ghost" onClick={onReset}>
          Nueva consulta
        </button>
      </div>
    </div>
  )
}
