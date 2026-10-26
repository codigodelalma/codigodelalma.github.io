// Páginas de Hans Decoz (worldnumerology.com) de las que se parafrasean los significados de cada número.
// Los textos del sitio son paráfrasis fieles y breves; el original está en cada enlace.

const BASE = 'https://www.worldnumerology.com'

export type DecozKind = 'lifePath' | 'soulUrge' | 'personality' | 'expression' | 'personalYear'

export function decozUrl(kind: DecozKind, n: number): string {
  switch (kind) {
    case 'lifePath':
      return `${BASE}/numerology-life-path/life-path-number-${n}/`
    case 'soulUrge':
      return `${BASE}/numerology-soul-urge/meaning-of-soul-urge-${n}/`
    case 'personality':
      return `${BASE}/numerology-personality/meaning-of-personality-number-${n}/`
    case 'expression':
      return `${BASE}/numerology-expression/expression-number-${n}/`
    case 'personalYear':
      // Las páginas por número de año personal remiten al pronóstico general de Decoz
      return n === 1 ? `${BASE}/personal-numerology-forecast/personal-year-1/` : `${BASE}/personal-numerology-forecast/`
  }
}

/** Nombre de cada página en inglés, como la titula Decoz. */
export const DECOZ_TITLE: Record<DecozKind, string> = {
  lifePath: 'Life Path',
  soulUrge: 'Soul Urge',
  personality: 'Personality Number',
  expression: 'Expression Number',
  personalYear: 'Personal Year',
}
