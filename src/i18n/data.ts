// Contenido según el idioma: cada módulo de datos tiene su versión en inglés en src/data/en/.
import * as numerologyEs from '../data/numerology.ts'
import * as numerologyEn from '../data/en/numerology.ts'
import * as traditionEs from '../data/tradition.ts'
import * as traditionEn from '../data/en/tradition.ts'
import * as monthsEs from '../data/hebrewMonths.ts'
import * as monthsEn from '../data/en/hebrewMonths.ts'
import * as kabbalahEs from '../data/monthKabbalah.ts'
import * as kabbalahEn from '../data/en/monthKabbalah.ts'
import * as depthEs from '../data/monthDepth.ts'
import * as depthEn from '../data/en/monthDepth.ts'
import * as purposeEs from '../data/purpose.ts'
import * as purposeEn from '../data/en/purpose.ts'
import * as glossary from '../data/glossary.ts'
import { useLang, type Lang } from './lang.tsx'

const ES = {
  POSITIONS: numerologyEs.POSITIONS,
  NUMBERS: numerologyEs.NUMBERS,
  MASTER_NOTES: numerologyEs.MASTER_NOTES,
  VOCATIONS: numerologyEs.VOCATIONS,
  MASTER_DESTINY_SOURCE: numerologyEs.MASTER_DESTINY_SOURCE,
  SEFIROT: traditionEs.SEFIROT,
  TRADITION: traditionEs.TRADITION,
  MASTER_TRADITION: traditionEs.MASTER_TRADITION,
  GENERAL_SOURCES: traditionEs.GENERAL_SOURCES,
  HEBREW_MONTHS: monthsEs.HEBREW_MONTHS,
  HEBREW_DAY_SOURCES: monthsEs.HEBREW_DAY_SOURCES,
  BIRTHDAY_CUSTOM: monthsEs.BIRTHDAY_CUSTOM,
  BIRTHDAY_RULES: monthsEs.BIRTHDAY_RULES,
  MONTH_KABBALAH: kabbalahEs.MONTH_KABBALAH,
  STONE_NOTE: kabbalahEs.STONE_NOTE,
  MONTH_KABBALAH_NOTE: kabbalahEs.MONTH_KABBALAH_NOTE,
  MONTH_DEPTH: depthEs.MONTH_DEPTH,
  TEACHINGS: purposeEs.TEACHINGS,
  GLOSSARY: glossary.GLOSSARY,
}

export type Content = typeof ES

const EN: Content = {
  POSITIONS: numerologyEn.POSITIONS,
  NUMBERS: numerologyEn.NUMBERS,
  MASTER_NOTES: numerologyEn.MASTER_NOTES,
  VOCATIONS: numerologyEn.VOCATIONS,
  MASTER_DESTINY_SOURCE: numerologyEn.MASTER_DESTINY_SOURCE,
  SEFIROT: traditionEn.SEFIROT,
  TRADITION: traditionEn.TRADITION,
  MASTER_TRADITION: traditionEn.MASTER_TRADITION,
  GENERAL_SOURCES: traditionEn.GENERAL_SOURCES,
  HEBREW_MONTHS: monthsEn.HEBREW_MONTHS,
  HEBREW_DAY_SOURCES: monthsEn.HEBREW_DAY_SOURCES,
  BIRTHDAY_CUSTOM: monthsEn.BIRTHDAY_CUSTOM,
  BIRTHDAY_RULES: monthsEn.BIRTHDAY_RULES,
  MONTH_KABBALAH: kabbalahEn.MONTH_KABBALAH,
  STONE_NOTE: kabbalahEn.STONE_NOTE,
  MONTH_KABBALAH_NOTE: kabbalahEn.MONTH_KABBALAH_NOTE,
  MONTH_DEPTH: depthEn.MONTH_DEPTH,
  TEACHINGS: purposeEn.TEACHINGS,
  GLOSSARY: glossary.GLOSSARY,
}

export const contentFor = (lang: Lang): Content => (lang === 'en' ? EN : ES)

export const useContent = () => contentFor(useLang().lang)
