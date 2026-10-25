import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'

const UI = {
  es: {
    eyebrow: 'Glosario',
    title: 'Palabras hebreas y judías que encontrarás aquí',
    intro: 'Qué significa cada término, con su escritura en hebreo. Las enseñanzas concretas se citan con su fuente donde aparecen.',
  },
  en: {
    eyebrow: 'Glossary',
    title: 'Hebrew and Jewish words you will find here',
    intro: 'What each term means, with its Hebrew spelling. Specific teachings are cited with their source where they appear.',
  },
}

export function Glossary() {
  const { lang } = useLang()
  const t = UI[lang]
  const { GLOSSARY } = useContent()
  return (
    <section className="glossary reveal" id="glosario" aria-labelledby="glosario-title">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 id="glosario-title">{t.title}</h2>
      <p className="section-intro">{t.intro}</p>
      <dl className="glossary-grid">
        {GLOSSARY.map((g) => (
          <div key={g.hebrew} className="glossary-item glass">
            <dt>
              <span>{g[lang].term}</span>
              <span className="glossary-he" lang="he" dir="rtl">
                {g.hebrew}
              </span>
            </dt>
            <dd>{g[lang].text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
