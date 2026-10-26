// Motor de cálculo:
//  · Lección de vida: suma de todos los dígitos de la fecha (15/08/1990 → 33 → 6)
//  · Número del alma: vocales de cada nombre, reducidas por palabra y luego sumadas
//  · Personalidad externa: consonantes, mismo procedimiento
//  · Número destino: alma + personalidad, reducido

const ROWS = ['ABCDEFGHI', 'JKLMNOPQR', 'STUVWXYZ']

export const LETTER_VALUES: Record<string, number> = Object.fromEntries(
  ROWS.flatMap((row) => [...row].map((ch, i) => [ch, i + 1])),
)

export const PYTHAGOREAN_TABLE = ROWS.map((row) =>
  [...row].map((ch) => (ch === 'N' ? 'N/Ñ' : ch)),
)

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U'])
export const MASTER_NUMBERS = new Set([11, 22, 33])

export interface Reduction {
  /** Cadena completa: [36, 9] o [19, 10, 1] */
  chain: number[]
  value: number
  /** Primer número maestro que aparece en la cadena (si lo hay) */
  master?: number
}

export function digitSum(n: number): number {
  return [...String(n)].reduce((acc, d) => acc + Number(d), 0)
}

export function reduce(n: number): Reduction {
  const chain = [n]
  while (chain[chain.length - 1] > 9) chain.push(digitSum(chain[chain.length - 1]))
  return {
    chain,
    value: chain[chain.length - 1],
    master: chain.find((x) => MASTER_NUMBERS.has(x)),
  }
}

export interface LetterInfo {
  char: string
  base: string
  value: number
  vowel: boolean
}

export interface WordInfo {
  word: string
  letters: LetterInfo[]
  vowelValues: number[]
  consonantValues: number[]
  vowels: Reduction
  consonants: Reduction
  /** Todas las letras del nombre: el número propio de esa palabra */
  total: Reduction
}

/** Quita acentos (Á→A, Ü→U, Ñ→N) dejando solo A–Z. */
function baseLetter(ch: string): string {
  return ch.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase()
}

/**
 * La Y cuenta como vocal cuando suena como "i": al final de la palabra
 * (Godoy, Rey) o antes de consonante (Mayra). Es consonante antes de vocal (Yolanda, Reyes).
 * Coincide con Matthew Oliver Goodwin, Numerology: The Complete Guide (1981): vocal si no hay otra vocal
 * en la sílaba o si sigue a una vocal y suena con ella (Doyle). Decoz la cuenta como consonante en ese caso.
 */
function isVowel(letters: string[], i: number): boolean {
  const ch = letters[i]
  if (VOWELS.has(ch)) return true
  if (ch !== 'Y') return false
  const next = letters[i + 1]
  return next === undefined || !VOWELS.has(next)
}

export function analyzeWord(word: string): WordInfo {
  const chars = [...word].filter((c) => /[A-Z]/.test(baseLetter(c)))
  const bases = chars.map(baseLetter)
  const letters = chars.map((char, i) => ({
    char: char.toUpperCase(),
    base: bases[i],
    value: LETTER_VALUES[bases[i]],
    vowel: isVowel(bases, i),
  }))
  const vowelValues = letters.filter((l) => l.vowel).map((l) => l.value)
  const consonantValues = letters.filter((l) => !l.vowel).map((l) => l.value)
  const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0)
  return {
    word,
    letters,
    vowelValues,
    consonantValues,
    vowels: reduce(sum(vowelValues)),
    consonants: reduce(sum(consonantValues)),
    total: reduce(sum(letters.map((l) => l.value))),
  }
}

export function splitName(name: string): string[] {
  return name
    .trim()
    .split(/[\s-]+/)
    .filter((w) => [...w].some((c) => /[A-Z]/.test(baseLetter(c))))
}

export interface BirthDate {
  day: number
  month: number
  year: number
}

export interface Profile {
  name: string
  date: BirthDate
  words: WordInfo[]
  lifeLesson: Reduction & { digits: number[] }
  soul: Reduction & { parts: number[] }
  personality: Reduction & { parts: number[] }
  /** display: el número que se muestra (11 se conserva como número maestro en el destino) */
  destiny: Reduction & { parts: number[]; display: number }
  birthDay: Reduction
  /** Año personal (Hans Decoz): día + mes de nacimiento + año del calendario en curso */
  personalYear: Reduction & { year: number; digits: number[] }
  /** Año universal (Hans Decoz): los dígitos del año en curso (2026 → 10 → 1) */
  universalYear: Reduction & { year: number }
  /** Cuántas letras del nombre tienen cada valor 1–9 (índice 0 = valor 1) */
  inclusion: number[]
  /** Valores 1–9 ausentes en el nombre */
  karmicLessons: number[]
}

export function dateDigits({ day, month, year }: BirthDate): number[] {
  const text = String(day).padStart(2, '0') + String(month).padStart(2, '0') + String(year)
  return [...text].map(Number)
}

export function isValidDate({ day, month, year }: BirthDate): boolean {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) return false
  const d = new Date(year, month - 1, day)
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day
}

export function buildProfile(name: string, date: BirthDate, today = new Date()): Profile {
  const words = splitName(name).map(analyzeWord)

  const digits = dateDigits(date)
  const lifeLesson = { ...reduce(digits.reduce((a, b) => a + b, 0)), digits }

  const soulParts = words.map((w) => w.vowels.value)
  const soul = { ...reduce(soulParts.reduce((a, b) => a + b, 0)), parts: soulParts }

  const persParts = words.map((w) => w.consonants.value)
  const personality = { ...reduce(persParts.reduce((a, b) => a + b, 0)), parts: persParts }

  const destinyParts = [soul.value, personality.value]
  const destinyRed = reduce(soul.value + personality.value)
  // Número maestro: si alma + personalidad suman 11, el destino se muestra como 11 (Hans Decoz: no se reduce)
  const destiny = { ...destinyRed, parts: destinyParts, display: destinyRed.chain[0] === 11 ? 11 : destinyRed.value }

  const currentYear = today.getFullYear()
  const pyDigits = dateDigits({ day: date.day, month: date.month, year: currentYear })
  const personalYear = {
    ...reduce(pyDigits.reduce((a, b) => a + b, 0)),
    year: currentYear,
    digits: pyDigits,
  }
  const universalYear = { ...reduce(digitSum(currentYear)), year: currentYear }

  const inclusion = Array.from({ length: 9 }, () => 0)
  for (const w of words) for (const l of w.letters) inclusion[l.value - 1]++
  const karmicLessons = inclusion.flatMap((count, i) => (count === 0 ? [i + 1] : []))

  return {
    name: name.trim(),
    date,
    words,
    lifeLesson,
    soul,
    personality,
    destiny,
    birthDay: reduce(date.day),
    personalYear,
    universalYear,
    inclusion,
    karmicLessons,
  }
}
