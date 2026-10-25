// Fecha hebrea con el calendario del propio navegador (Intl, ICU): sin conexiones externas.
import type { BirthDate } from './numerology.ts'

export type HebrewMonthKey =
  | 'nisan' | 'iyar' | 'sivan' | 'tamuz' | 'av' | 'elul'
  | 'tishrei' | 'jeshvan' | 'kislev' | 'tevet' | 'shevat'
  | 'adar' | 'adar1' | 'adar2'

const ICU_MONTHS: Record<string, HebrewMonthKey> = {
  Tishri: 'tishrei',
  Heshvan: 'jeshvan',
  Kislev: 'kislev',
  Tevet: 'tevet',
  Shevat: 'shevat',
  'Adar I': 'adar1',
  Adar: 'adar',
  'Adar II': 'adar2',
  Nisan: 'nisan',
  Iyar: 'iyar',
  Sivan: 'sivan',
  Tamuz: 'tamuz',
  Av: 'av',
  Elul: 'elul',
}

export interface HebrewDate {
  day: number
  month: HebrewMonthKey
  year: number
}

const formatter = new Intl.DateTimeFormat('en', {
  calendar: 'hebrew',
  timeZone: 'UTC',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

/** Mediodía UTC: evita que la zona horaria cambie el día civil. */
const utcNoon = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d, 12))

export function toHebrew(date: Date): HebrewDate {
  const parts = Object.fromEntries(formatter.formatToParts(date).map((p) => [p.type, p.value]))
  return { day: Number(parts.day), month: ICU_MONTHS[parts.month], year: Number(parts.year) }
}

/** El día judío empieza al anochecer: quien nace tras la puesta del sol tiene la fecha del día siguiente. */
export function hebrewBirthDate({ day, month, year }: BirthDate, afterSunset: boolean): HebrewDate {
  return toHebrew(utcNoon(year, month, day + (afterSunset ? 1 : 0)))
}

/** Año bisiesto hebreo (con Adar I y Adar II): 7 de cada 19 años. */
export const isLeapYear = (year: number) => (7 * year + 1) % 19 < 7

// ---------- Numerales hebreos (guematría) ----------

const UNITS = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט']
const TENS = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ']
const HUNDREDS = ['', 'ק', 'ר', 'ש', 'ת']

function letters(n: number): string {
  let out = ''
  while (n >= 400) {
    out += 'ת'
    n -= 400
  }
  out += HUNDREDS[Math.floor(n / 100)]
  n %= 100
  // 15 y 16 se escriben ט״ו y ט״ז para no formar un Nombre divino
  if (n === 15) return out + 'טו'
  if (n === 16) return out + 'טז'
  return out + TENS[Math.floor(n / 10)] + UNITS[n % 10]
}

/** 9 → ט׳ · 15 → ט״ו · 5736 → ה׳תשל״ו */
export function hebrewNumeral(n: number, withThousands = false): string {
  const thousands = Math.floor(n / 1000)
  const body = letters(n % 1000)
  const marked = body.length === 1 ? body + '׳' : body.slice(0, -1) + '״' + body.slice(-1)
  return withThousands && thousands ? UNITS[thousands] + '׳' + marked : marked
}

// ---------- Próximo cumpleaños hebreo ----------

/** Mes en que cae el cumpleaños en un año dado, según sea bisiesto o no. */
function birthdayMonth(born: HebrewMonthKey, year: number): HebrewMonthKey {
  const leap = isLeapYear(year)
  if (born === 'adar' && leap) return 'adar2'
  if ((born === 'adar1' || born === 'adar2') && !leap) return 'adar'
  return born
}

export interface HebrewBirthday {
  /** Fecha civil del cumpleaños (empieza al anochecer del día anterior) */
  date: Date
  hebrew: HebrewDate
  /** El mes de ese año no tiene día 30 */
  shortMonth: boolean
}

export function nextHebrewBirthday(born: HebrewDate, from = new Date()): HebrewBirthday | null {
  const start = utcNoon(from.getFullYear(), from.getMonth() + 1, from.getDate())
  for (let i = 0; i < 400; i++) {
    const date = new Date(start.getTime() + i * 86_400_000)
    const h = toHebrew(date)
    if (h.month !== birthdayMonth(born.month, h.year)) continue
    if (h.day === born.day) return { date, hebrew: h, shortMonth: false }
    // Nacido un día 30 en un año en que el mes tiene 29 días: el cumpleaños pasa al día 1 del mes siguiente
    if (born.day === 30 && h.day === 29) {
      const next = new Date(date.getTime() + 86_400_000)
      const hn = toHebrew(next)
      if (hn.day === 1) return { date: next, hebrew: hn, shortMonth: true }
    }
  }
  return null
}
