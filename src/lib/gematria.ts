// Guematría de un texto escrito en letras hebreas, con los cuatro métodos clásicos que describe
// la Encyclopaedia Judaica (Jewish Virtual Library, «Gematria»):
//  · Mispar Hejrají (absoluto): Álef = 1 … Tav = 400; las finales valen como la forma normal
//    (y a veces 500–900: se muestra aparte, como variante).
//  · Mispar Sidurí (ordinal): la posición de la letra en el alefato, del 1 al 22.
//  · Mispar Katán (reducido): el valor sin los ceros (Yud = 1, Kuf = 1).
//  · Mispar Katán Misparí (reducido integral): el total reducido a un solo dígito (Jésed 72 → 9).
// No se translitera nada: solo se cuentan letras hebreas escritas por la persona.

interface LetterDef {
  base: string
  value: number
  ordinal: number
  /** Valor alternativo de las formas finales (500–900) */
  finalValue?: number
}

const ALEPHBET = 'אבגדהוזחטיכלמנסעפצקרשת'
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400]
const FINALS: Record<string, { base: string; finalValue: number }> = {
  ך: { base: 'כ', finalValue: 500 },
  ם: { base: 'מ', finalValue: 600 },
  ן: { base: 'נ', finalValue: 700 },
  ף: { base: 'פ', finalValue: 800 },
  ץ: { base: 'צ', finalValue: 900 },
}

const LETTERS: Record<string, LetterDef> = {}
;[...ALEPHBET].forEach((ch, i) => {
  LETTERS[ch] = { base: ch, value: VALUES[i], ordinal: i + 1 }
})
for (const [ch, f] of Object.entries(FINALS)) {
  LETTERS[ch] = { ...LETTERS[f.base], finalValue: f.finalValue }
}

export const KEYBOARD = [...ALEPHBET, ...Object.keys(FINALS)]

export interface GematriaLetter {
  char: string
  value: number
  ordinal: number
  small: number
  final: boolean
}

export interface GematriaResult {
  letters: GematriaLetter[]
  /** Mispar Hejrají */
  absolute: number
  /** Mispar Hejrají con las finales de 500 a 900 (solo si hay letras finales) */
  absoluteWithFinals: number | null
  /** Mispar Sidurí */
  ordinal: number
  /** Mispar Katán */
  small: number
  /** Mispar Katán Misparí: cadena de reducción del total hasta un dígito */
  integral: number[]
}

/** Valor sin ceros: 10 → 1, 200 → 2, 7 → 7 */
const smallValue = (v: number) => (v >= 100 ? v / 100 : v >= 10 ? v / 10 : v)

const digitSum = (n: number) => [...String(n)].reduce((a, d) => a + Number(d), 0)

/** Deja solo las letras hebreas: quita puntos vocálicos, signos y cualquier otro carácter. */
export function hebrewLettersOnly(text: string): string {
  return [...text].filter((c) => LETTERS[c]).join('')
}

export function gematria(text: string): GematriaResult | null {
  const chars = [...hebrewLettersOnly(text)]
  if (!chars.length) return null
  const letters = chars.map((c) => {
    const def = LETTERS[c]
    return { char: c, value: def.value, ordinal: def.ordinal, small: smallValue(def.value), final: def.finalValue !== undefined }
  })
  const absolute = letters.reduce((a, l) => a + l.value, 0)
  const hasFinals = letters.some((l) => l.final)
  const absoluteWithFinals = hasFinals
    ? letters.reduce((a, l) => a + (l.final ? LETTERS[l.char].finalValue! : l.value), 0)
    : null
  const integral = [absolute]
  while (integral[integral.length - 1] > 9) integral.push(digitSum(integral[integral.length - 1]))
  return {
    letters,
    absolute,
    absoluteWithFinals,
    ordinal: letters.reduce((a, l) => a + l.ordinal, 0),
    small: letters.reduce((a, l) => a + l.small, 0),
    integral,
  }
}
