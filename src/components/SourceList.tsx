import type { Source } from '../data/tradition.ts'
import { useLang } from '../i18n/lang.tsx'

export function SourceList({ sources }: { sources: Source[] }) {
  if (!sources.length) return null
  return (
    <p className="sources">
      <span>{useLang().lang === 'en' ? 'Source:' : 'Fuente:'}</span>{' '}
      {sources.map((s, i) => (
        <span key={i}>
          {i > 0 && ' · '}
          {s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ) : (
            s.label
          )}
        </span>
      ))}
    </p>
  )
}
