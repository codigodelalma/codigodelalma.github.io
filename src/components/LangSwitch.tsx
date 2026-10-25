import { useLang, type Lang } from '../i18n/lang.tsx'

const LANGS: { id: Lang; label: string; name: string }[] = [
  { id: 'es', label: 'ES', name: 'Español' },
  { id: 'en', label: 'EN', name: 'English' },
]

/** Selector de idioma ES | EN, como en screenshotCM. No guarda nada: el idioma va en la dirección (/ o /en/). */
export function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {LANGS.map((l) => (
        <button
          key={l.id}
          type="button"
          data-lang={l.id}
          aria-pressed={lang === l.id}
          title={l.name}
          lang={l.id}
          onClick={() => setLang(l.id)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
