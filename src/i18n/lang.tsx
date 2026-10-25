import { createContext, useContext, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangState>({ lang: 'es', setLang: () => {} })

export function LangProvider({ value, children }: { value: LangState; children: ReactNode }) {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

/** Ruta de cada idioma: el español en la raíz y el inglés en /en/ (cada uno indexable por separado). */
export const pathFor = (lang: Lang) => (lang === 'en' ? '/en/' : '/')

export const langFromPath = (path: string): Lang => (/^\/en(\/|$)/.test(path) ? 'en' : 'es')
