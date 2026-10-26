import { useMemo, useState, type ReactNode } from 'react'
import type { Profile } from '../lib/numerology.ts'
import type { PositionKey } from '../data/numerology.ts'
import { NumberSection } from './NumberSection.tsx'
import { TreeOfLife } from './TreeOfLife.tsx'
import { HebrewBirth } from './HebrewBirth.tsx'
import { Purpose } from './Purpose.tsx'
import { hebrewBirthDate } from '../lib/hebrewDate.ts'
import { ResultsNav, type NavItem } from './ResultsNav.tsx'
import { NameWords } from './NameWords.tsx'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { decozUrl } from '../data/decoz.ts'
import { SourceList } from './SourceList.tsx'

const ORDER: PositionKey[] = ['leccion', 'alma', 'personalidad', 'destino']
const PART_IDS = ['parte-resumen', 'parte-numeros', 'parte-hebrea', 'parte-arbol', 'parte-nombre', 'parte-mision', 'parte-guardar']

const UI = {
  es: {
    nav: ['Resumen', 'Tus 4 números', 'Fecha hebrea', 'Árbol de la Vida', 'Tu nombre', 'Para qué viniste', 'Guardar'],
    map: 'Tu mapa numerológico',
    born: 'Fecha de nacimiento',
    parts: [
      ['Tu resumen', 'Tus cuatro números principales de un vistazo y lo que significan juntos.'],
      [
        'Tus cuatro números, uno por uno',
        'Cada número tiene cuatro pestañas: su significado en numerología, en la Kabbalah, en la tradición judía y cómo se calculó.',
      ],
      [
        'Tu fecha de nacimiento en el calendario hebreo',
        'El día y el mes judíos en que naciste, la fuerza de ese mes, tu Salmo del año y tu próximo cumpleaños hebreo.',
      ],
      ['Tus números en el Árbol de la Vida', ''],
      [
        'Las letras de tu nombre',
        'El número propio de cada uno de tus nombres y apellidos, cuántas letras vibran en cada número y qué cualidades te pide desarrollar esta vida.',
      ],
      ['Para qué viniste', 'Lo que enseñan las fuentes judías sobre la misión de cada alma, y cómo se reflejan en tus propios números.'],
      ['Guarda tu resultado', 'Descárgalo como PDF o compártelo. Todo ocurre en tu dispositivo: no guardamos nada.'],
    ],
    tree: (names: string) =>
      `El Árbol de la Vida (Etz Jaím) representa las diez sefirot, los atributos a través de los cuales, según la Kabbalah, lo divino se manifiesta. Se iluminan las que corresponden a tus números: ${names}.`,
    dayNumber: 'Número del día',
    talent: 'Talento natural',
    personalYear: 'Año personal',
    personalHow: 'día + mes +',
    universalYear: 'Año universal',
    universalHow: 'el año para todas las personas',
    yearsSource: 'Año personal y año universal según Hans Decoz:',
    and: ' y ',
    synthesisEyebrow: 'Tu lección de vida en breve',
    challenge: 'Tu reto:',
    synthesisFor: 'Síntesis para',
    s1: (n: number, arch: string, essence: string) => (
      <>
        Tu <strong>lección de vida {n}</strong> ({arch.toLowerCase()}) te invita a <em>{essence}</em>.{' '}
      </>
    ),
    s2: (a: number, essence: string, p: number, proj: string) => (
      <>
        En lo profundo, tu <strong>alma {a}</strong> busca <em>{essence}</em>, mientras que el mundo te percibe a través de tu{' '}
        <strong>personalidad {p}</strong>, que proyecta {proj}.
      </>
    ),
    s3: (d: number) => (
      <>
        La unión de ambos forma tu <strong>destino {d}</strong>:{' '}
      </>
    ),
    s4: (y: number, n: number) => `Tu año personal ${y} vibra en ${n}:`,
    karmicIntro: (
      <>
        Los números ausentes se conocen en numerología como <strong>lecciones kármicas</strong>: cualidades que esta vida te
        pide desarrollar de forma consciente.
      </>
    ),
    develop: 'desarrollar',
    noKarmic: 'Tu nombre contiene los nueve números: no tienes lecciones kármicas pendientes.',
    pdf: 'Guardar como PDF',
    share: 'Compartir',
    copied: '¡Copiado!',
    again: 'Nueva consulta',
    shareTitle: 'Mi código numerológico',
  },
  en: {
    nav: ['Summary', 'Your 4 numbers', 'Hebrew date', 'Tree of Life', 'Your name', 'Why you came', 'Save'],
    map: 'Your numerology map',
    born: 'Date of birth',
    parts: [
      ['Your summary', 'Your four main numbers at a glance and what they mean together.'],
      [
        'Your four numbers, one by one',
        'Each number has four tabs: its meaning in numerology, in Kabbalah, in Jewish tradition, and how it was calculated.',
      ],
      [
        'Your birth date in the Hebrew calendar',
        'The Jewish day and month you were born in, the strength of that month, your Psalm of the year and your next Hebrew birthday.',
      ],
      ['Your numbers in the Tree of Life', ''],
      [
        'The letters of your name',
        'The number of each of your names and surnames, how many letters vibrate in each number and which qualities this life asks you to develop.',
      ],
      ['Why you came', 'What Jewish sources teach about each soul’s mission, and how it is reflected in your own numbers.'],
      ['Save your result', 'Download it as a PDF or share it. Everything happens on your device: we store nothing.'],
    ],
    tree: (names: string) =>
      `The Tree of Life (Etz Chaim) depicts the ten sefirot, the attributes through which, according to Kabbalah, the divine is manifested. The ones that match your numbers light up: ${names}.`,
    dayNumber: 'Birth day number',
    talent: 'Natural talent',
    personalYear: 'Personal year',
    personalHow: 'day + month +',
    universalYear: 'Universal year',
    universalHow: 'the year for everyone',
    yearsSource: 'Personal year and universal year according to Hans Decoz:',
    and: ' and ',
    synthesisEyebrow: 'Your life lesson in brief',
    challenge: 'Your challenge:',
    synthesisFor: 'Summary for',
    s1: (n: number, arch: string, essence: string) => (
      <>
        Your <strong>life lesson {n}</strong> ({arch.toLowerCase()}) invites you to <em>{essence}</em>.{' '}
      </>
    ),
    s2: (a: number, essence: string, p: number, proj: string) => (
      <>
        Deep down, your <strong>soul {a}</strong> seeks to <em>{essence}</em>, while the world sees you through your{' '}
        <strong>personality {p}</strong>, which projects {proj}.
      </>
    ),
    s3: (d: number) => (
      <>
        Together they form your <strong>destiny {d}</strong>:{' '}
      </>
    ),
    s4: (y: number, n: number) => `Your personal year ${y} vibrates in ${n}:`,
    karmicIntro: (
      <>
        In numerology, the missing numbers are known as <strong>karmic lessons</strong>: qualities this life asks you to develop
        consciously.
      </>
    ),
    develop: 'develop',
    noKarmic: 'Your name contains all nine numbers: you have no pending karmic lessons.',
    pdf: 'Save as PDF',
    share: 'Share',
    copied: 'Copied!',
    again: 'New reading',
    shareTitle: 'My numerology code',
  },
}

function Part({ index, title, intro, children }: { index: number; title: string; intro: string; children: ReactNode }) {
  const id = PART_IDS[index]
  return (
    <section className="part" id={id} aria-labelledby={`${id}-title`}>
      <header className="part-header reveal">
        <span className="part-num">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{intro}</p>
        </div>
      </header>
      {children}
    </section>
  )
}

const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

export function Results({ profile, onReset }: { profile: Profile; onReset: () => void }) {
  const { lang } = useLang()
  const t = UI[lang]
  const C = useContent()
  const [copied, setCopied] = useState(false)
  const [afterSunset, setAfterSunset] = useState(false)
  const hebrew = useMemo(() => hebrewBirthDate(profile.date, afterSunset), [profile.date, afterSunset])
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
  const shown = (k: PositionKey) => (k === 'destino' ? profile.destiny.display : values[k])

  const marks: Record<number, string[]> = {}
  for (const k of ORDER) (marks[values[k]] ??= []).push(C.POSITIONS[k].title)

  const L = C.NUMBERS[values.leccion]
  const A = C.NUMBERS[values.alma]
  const P = C.NUMBERS[values.personalidad]
  const D = C.NUMBERS[values.destino]
  const Y = C.NUMBERS[profile.personalYear.value]
  const firstName = profile.words[0]?.word ?? ''
  const { day, month, year } = profile.date
  const birth = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, day, 12)),
  )
  const parts = PART_IDS.map((id, i): NavItem => ({ id, label: t.nav[i] }))

  const summary =
    `${profile.name} · ${birth}\n` +
    ORDER.map((k) => `${C.POSITIONS[k].title}: ${shown(k)} (${C.NUMBERS[values[k]].archetype})`).join('\n')

  const share = async () => {
    const text = `${t.shareTitle}\n${summary}\n${location.href}`
    try {
      if (navigator.share) await navigator.share({ title: t.shareTitle, text })
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
      <div className="summary reveal">
        <p className="eyebrow">{t.map}</p>
        <h2 className="summary-name">{profile.name}</h2>
        <p className="summary-date">
          {t.born}: {birth}
        </p>
      </div>

      <ResultsNav items={parts} />

      <Part index={0} title={t.parts[0][0]} intro={t.parts[0][1]}>
        <div className="orbs">
          {ORDER.map((k, i) => (
            <a key={k} href={`#sec-${k}`} className="orb-card" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="orb" data-n={values[k]}>
                {shown(k)}
              </span>
              <span className="orb-title">{C.POSITIONS[k].title}</span>
              <span className="orb-sub">{C.NUMBERS[values[k]].archetype}</span>
            </a>
          ))}
        </div>
        <div className="mini-stats">
          <div className="mini glass">
            <span className="mini-n">{profile.birthDay.value}</span>
            <span>
              <b>{t.dayNumber}</b>
              <small>
                {t.talent}: {C.NUMBERS[profile.birthDay.value].keywords.slice(0, 2).join(t.and).toLowerCase()}
              </small>
            </span>
          </div>
          <div className="mini glass">
            <span className="mini-n">{profile.personalYear.value}</span>
            <span>
              <b>
                {t.personalYear} {profile.personalYear.year}
              </b>
              <small>
                {Y.archetype} · {t.personalHow} {profile.personalYear.year}
              </small>
            </span>
          </div>
          <div className="mini glass">
            <span className="mini-n">{profile.universalYear.value}</span>
            <span>
              <b>
                {t.universalYear} {profile.universalYear.year}
              </b>
              <small>
                {C.NUMBERS[profile.universalYear.value].archetype} · {t.universalHow}
              </small>
            </span>
          </div>
        </div>
        <p className="note mini-source">
          {t.yearsSource}{' '}
          <a href="https://www.worldnumerology.com/numerology-personal-year/" target="_blank" rel="noopener noreferrer">
            Personal Year
          </a>{' '}
          ·{' '}
          <a
            href="https://www.worldnumerology.com/numerology-articles/2026-numerology-forecast-and-predictions.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universal Year
          </a>
        </p>

        <div className="synthesis glass reveal">
          <p className="eyebrow">{t.synthesisEyebrow}</p>
          <h3>
            {t.synthesisFor} {firstName}
          </h3>
          <p>
            {t.s1(values.leccion, L.archetype, L.essence)}
            {t.challenge} {lowerFirst(L.lesson)}
          </p>
          <p>{t.s2(values.alma, A.essence, values.personalidad, P.keywords.slice(0, 2).join(t.and).toLowerCase())}</p>
          <p>
            {t.s3(profile.destiny.display)}
            {lowerFirst(D.positions.destino)}
          </p>
          <p className="synthesis-year">
            <strong>{t.s4(profile.personalYear.year, profile.personalYear.value)}</strong> {Y.year}
          </p>
          <SourceList
            sources={[
              { label: `Hans Decoz — Life Path ${values.leccion}`, url: decozUrl('lifePath', values.leccion) },
              { label: `Hans Decoz — Personal Year`, url: decozUrl('personalYear', profile.personalYear.value) },
            ]}
          />
        </div>
      </Part>

      <Part index={1} title={t.parts[1][0]} intro={t.parts[1][1]}>
        {ORDER.map((k, i) => (
          <NumberSection key={k} profile={profile} position={k} result={results[k]} index={i + 1} />
        ))}
      </Part>

      <Part index={2} title={t.parts[2][0]} intro={t.parts[2][1]}>
        <HebrewBirth date={profile.date} afterSunset={afterSunset} onAfterSunset={setAfterSunset} />
      </Part>

      <Part
        index={3}
        title={t.parts[3][0]}
        intro={t.tree(
          Object.keys(marks)
            .map((n) => C.SEFIROT[Number(n) - 1].name)
            .join(', '),
        )}
      >
        <div className="reveal">
          <TreeOfLife marks={marks} initial={values.leccion} />
        </div>
      </Part>

      <Part index={4} title={t.parts[4][0]} intro={t.parts[4][1]}>
        <NameWords words={profile.words} />
        <div className="karmic glass reveal">
          <div className="incl-grid">
            {profile.inclusion.map((count, i) => (
              <div key={i} className={`incl-cell${count === 0 ? ' missing' : ''}`}>
                <span className="incl-n">{i + 1}</span>
                <span className="incl-count">{count === 0 ? '—' : `×${count}`}</span>
              </div>
            ))}
          </div>
          <p className="section-intro">{t.karmicIntro}</p>
          {profile.karmicLessons.length ? (
            <ul className="karmic-list">
              {profile.karmicLessons.map((n) => (
                <li key={n}>
                  <b>
                    {n} · {C.NUMBERS[n].archetype}:
                  </b>{' '}
                  {t.develop} {C.NUMBERS[n].keywords.slice(0, 3).join(', ').toLowerCase()}.
                </li>
              ))}
            </ul>
          ) : (
            <p className="lead">{t.noKarmic}</p>
          )}
        </div>
      </Part>

      <Part index={5} title={t.parts[5][0]} intro={t.parts[5][1]}>
        <Purpose profile={profile} hebrew={hebrew} />
      </Part>

      <Part index={6} title={t.parts[6][0]} intro={t.parts[6][1]}>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => window.print()}>
            {t.pdf}
          </button>
          <button className="btn btn-ghost" onClick={share}>
            {copied ? t.copied : t.share}
          </button>
          <button className="btn btn-ghost" onClick={onReset}>
            {t.again}
          </button>
        </div>
      </Part>
    </div>
  )
}
