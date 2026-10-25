import { useState, type FormEvent } from 'react'
import { isValidDate, splitName, type BirthDate } from '../lib/numerology.ts'

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

interface Props {
  onSubmit: (name: string, date: BirthDate) => void
}

export function BirthForm({ onSubmit }: Props) {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState('')

  const handle = (e: FormEvent) => {
    e.preventDefault()
    const date = { day: Number(day), month: Number(month), year: Number(year) }
    if (splitName(name).length < 2) {
      return setError('Escribe tu nombre completo, con nombres y apellidos, tal como aparece en tu registro de nacimiento.')
    }
    if (!isValidDate(date) || date.year < 1900) {
      return setError('Revisa la fecha de nacimiento: el día, el mes o el año no son válidos.')
    }
    if (new Date(date.year, date.month - 1, date.day) > new Date()) {
      return setError('La fecha de nacimiento no puede estar en el futuro.')
    }
    setError('')
    onSubmit(name, date)
  }

  return (
    <form className="birth-form glass" onSubmit={handle} noValidate autoComplete="off">
      <label className="field field-name">
        <span>Nombre completo</span>
        <input
          type="text"
          autoComplete="off"
          maxLength={120}
          placeholder="Ej. María Fernanda López Gómez"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <fieldset className="field-date">
        <legend>Fecha de nacimiento</legend>
        <label className="field">
          <span>Día</span>
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
          <span>Mes</span>
          <select value={month} onChange={(e) => setMonth(e.target.value)} autoComplete="off">
            <option value="" disabled>
              Mes
            </option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Año</span>
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
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary">
        Revelar mi código
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="form-note">
        🔒 No recopilamos, guardamos ni enviamos tus datos: todo se calcula en tu dispositivo y desaparece al cerrar la
        página. <a href="#privacidad">Política de privacidad</a>
      </p>
    </form>
  )
}
