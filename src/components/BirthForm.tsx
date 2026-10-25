import { useState, type FormEvent } from 'react'
import { isValidDate, splitName, type BirthDate } from '../lib/numerology.ts'
import { useLang } from '../i18n/lang.tsx'

type ErrorKey = '' | 'name' | 'date' | 'future'

const UI = {
  es: {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    name: 'Nombre completo',
    placeholder: 'Ej. María Fernanda López Gómez',
    birth: 'Fecha de nacimiento',
    day: 'Día',
    month: 'Mes',
    year: 'Año',
    submit: 'Revelar mi código',
    errors: {
      name: 'Escribe tu nombre completo, con nombres y apellidos, tal como aparece en tu registro de nacimiento.',
      date: 'Revisa la fecha de nacimiento: el día, el mes o el año no son válidos.',
      future: 'La fecha de nacimiento no puede estar en el futuro.',
    },
    note: 'No recopilamos, guardamos ni enviamos tus datos: todo se calcula en tu dispositivo y desaparece al cerrar la página.',
    policy: 'Política de privacidad',
  },
  en: {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    name: 'Full name',
    placeholder: 'e.g. María Fernanda López Gómez',
    birth: 'Date of birth',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    submit: 'Reveal my code',
    errors: {
      name: 'Enter your full name, with first names and surnames, as it appears on your birth record.',
      date: 'Check the date of birth: the day, month or year is not valid.',
      future: 'The date of birth cannot be in the future.',
    },
    note: 'We do not collect, store or send your data: everything is calculated on your device and disappears when you close the page.',
    policy: 'Privacy policy',
  },
}

interface Props {
  onSubmit: (name: string, date: BirthDate) => void
}

export function BirthForm({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState<ErrorKey>('')
  const t = UI[useLang().lang]

  const handle = (e: FormEvent) => {
    e.preventDefault()
    const date = { day: Number(day), month: Number(month), year: Number(year) }
    if (splitName(name).length < 2) {
      return setError('name')
    }
    if (!isValidDate(date) || date.year < 1900) {
      return setError('date')
    }
    if (new Date(date.year, date.month - 1, date.day) > new Date()) {
      return setError('future')
    }
    setError('')
    onSubmit(name, date)
  }

  return (
    <form className="birth-form glass" onSubmit={handle} noValidate autoComplete="off">
      <label className="field field-name">
        <span>{t.name}</span>
        <input
          type="text"
          autoComplete="off"
          maxLength={120}
          placeholder={t.placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <fieldset className="field-date">
        <legend>{t.birth}</legend>
        <label className="field">
          <span>{t.day}</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={31}
            placeholder="15"
            autoComplete="off"
            value={day}
            onChange={(e) => setDay(e.target.value.slice(0, 2))}
          />
        </label>
        <label className="field">
          <span>{t.month}</span>
          <select value={month} onChange={(e) => setMonth(e.target.value)} autoComplete="off">
            <option value="" disabled>
              {t.month}
            </option>
            {t.months.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{t.year}</span>
          <input
            type="number"
            inputMode="numeric"
            min={1900}
            placeholder="1990"
            autoComplete="off"
            value={year}
            onChange={(e) => setYear(e.target.value.slice(0, 4))}
          />
        </label>
      </fieldset>

      {error && (
        <p className="form-error" role="alert">
          {t.errors[error]}
        </p>
      )}

      <button type="submit" className="btn btn-primary">
        {t.submit}
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="form-note">
        🔒 {t.note} <a href="#privacidad">{t.policy}</a>
      </p>
    </form>
  )
}
