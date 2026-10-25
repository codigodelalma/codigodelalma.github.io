// Título, descripción y textos para buscadores y redes, por idioma.
// Lo usan la página en el navegador (al cambiar de idioma) y el pre-renderizado al compilar.
import type { Lang } from './lang.tsx'

export const SITE_URL = 'https://codigodelalma.github.io'

export const META: Record<Lang, { title: string; description: string; ogTitle: string; ogDescription: string; locale: string; tagline: string }> = {
  es: {
    title: 'Código del Alma · Numerología, Kabbalah y tradición judía',
    description:
      'Calcula gratis tu lección de vida, número del alma, personalidad y destino con tu nombre y fecha de nacimiento. Descubre tu fecha de nacimiento hebrea y su significado en numerología, Kabbalah y tradición judía, con fuentes citadas. Sin registros ni datos guardados.',
    ogTitle: 'Código del Alma · Tu nombre y tu fecha de nacimiento guardan un código',
    ogDescription:
      'Numerología, Kabbalah y tradición judía: tu lección de vida, tu alma, tu destino y tu fecha hebrea, número a número. Gratis y sin guardar tus datos.',
    locale: 'es_ES',
    tagline: 'Numerología, Kabbalah y tradición judía',
  },
  en: {
    title: 'Código del Alma · Numerology, Kabbalah and Jewish tradition',
    description:
      'Calculate your life lesson, soul, personality and destiny numbers for free from your name and date of birth. Discover your Hebrew birth date and its meaning in numerology, Kabbalah and Jewish tradition, with cited sources. No sign-up, no data stored.',
    ogTitle: 'Código del Alma · Your name and birth date hold a code',
    ogDescription:
      'Numerology, Kabbalah and Jewish tradition: your life lesson, soul, destiny and Hebrew date, number by number. Free, and your data is never stored.',
    locale: 'en_US',
    tagline: 'Numerology, Kabbalah and Jewish tradition',
  },
}
