import { useMemo, useState } from 'react'
import type { BirthDate } from '../lib/numerology.ts'
import { hebrewBirthDate, hebrewNumeral, isLeapYear, nextHebrewBirthday } from '../lib/hebrewDate.ts'
import { BIRTHDAY_CUSTOM, BIRTHDAY_RULES, HEBREW_DAY_SOURCES, HEBREW_MONTHS } from '../data/hebrewMonths.ts'
import { SourceList } from './SourceList.tsx'

const civil = new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const civilShort = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', timeZone: 'UTC' })

const ordinal = (n: number) => `${n}.º`

export function HebrewBirth({ date }: { date: BirthDate }) {
  const [afterSunset, setAfterSunset] = useState(false)
  const h = useMemo(() => hebrewBirthDate(date, afterSunset), [date, afterSunset])
  const next = useMemo(() => nextHebrewBirthday(h), [h])
  const m = HEBREW_MONTHS[h.month]
  const hebrewText = `${hebrewNumeral(h.day)} ב${m.hebrew} ${hebrewNumeral(h.year, true)}`
  const nextMonth = next && HEBREW_MONTHS[next.hebrew.month]
  const eve = next && new Date(next.date.getTime() - 86_400_000)

  return (
    <div className="hebrew-birth">
      <div className="hb-hero glass reveal">
        <p className="eyebrow">Naciste el</p>
        <p className="hb-date">
          {h.day} de {m.name} de {h.year}
        </p>
        <p className="hb-hebrew" lang="he" dir="rtl">
          {hebrewText}
        </p>
        <label className="switch">
          <input type="checkbox" checked={afterSunset} onChange={(e) => setAfterSunset(e.target.checked)} />
          <span className="switch-track" aria-hidden="true" />
          <span>Nací de noche (después de la puesta del sol)</span>
        </label>
        <p className="note">
          En el calendario judío el día empieza al anochecer («y fue la tarde y fue la mañana»). Si naciste de noche, tu
          fecha hebrea es la del día siguiente. Si naciste justo entre la puesta del sol y la salida de las estrellas, la
          fecha es dudosa: lo indicado es consultar a un rabino.
        </p>
        <SourceList sources={HEBREW_DAY_SOURCES} />
      </div>

      <div className="hb-grid">
        <div className="hb-month glass reveal">
          <div className="hb-month-head">
            <span className="hb-month-glyph" lang="he">
              {m.hebrew}
            </span>
            <div>
              <h3>Mes de {m.name}</h3>
              <p className="note">
                {ordinal(m.order)} mes contando desde Nisán
                {h.month.startsWith('adar') && isLeapYear(h.year) ? ' · año bisiesto (con dos meses de Adar)' : ''}
              </p>
            </div>
          </div>
          <ul className="facts">
            {m.facts.map((f, i) => (
              <li key={i}>
                <p>{f.text}</p>
                <SourceList sources={f.sources} />
              </li>
            ))}
          </ul>
        </div>

        {next && nextMonth && eve && (
          <div className="hb-next glass reveal">
            <p className="eyebrow">Tu próximo cumpleaños hebreo</p>
            <p className="hb-next-date">
              {next.hebrew.day} de {nextMonth.name} de {next.hebrew.year}
            </p>
            <p className="hb-next-civil">{civil.format(next.date)}</p>
            <p className="note">Comienza al anochecer del {civilShort.format(eve)}.</p>
            {!next.shortMonth && next.hebrew.month !== h.month && (
              <p className="note">{BIRTHDAY_RULES.adar.text}</p>
            )}
            {next.shortMonth && <p className="note">{BIRTHDAY_RULES.day30.text}</p>}
            {(next.shortMonth || next.hebrew.month !== h.month) && (
              <SourceList sources={next.shortMonth ? BIRTHDAY_RULES.day30.sources : BIRTHDAY_RULES.adar.sources} />
            )}
            <p className="hb-custom">{BIRTHDAY_CUSTOM.text}</p>
            <SourceList sources={BIRTHDAY_CUSTOM.sources} />
          </div>
        )}
      </div>
    </div>
  )
}
