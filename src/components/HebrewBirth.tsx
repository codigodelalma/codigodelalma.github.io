import { useMemo } from 'react'
import type { BirthDate } from '../lib/numerology.ts'
import { hebrewAge, hebrewBirthDate, hebrewNumeral, isLeapYear, nextHebrewBirthday } from '../lib/hebrewDate.ts'
import { useLang } from '../i18n/lang.tsx'
import { useContent } from '../i18n/data.ts'
import { SourceList } from './SourceList.tsx'

/** «El oído» → «del oído» · «La risa» → «de la risa» */
const ofFaculty = (faculty: string) => {
  const lower = faculty.toLowerCase()
  return lower.startsWith('el ') ? `del ${lower.slice(3)}` : `de ${lower}`
}

const enOrdinal = (n: number) => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`

const UI = {
  es: {
    bornOn: 'Naciste el',
    date: (d: number, m: string, y: number) => `${d} de ${m} de ${y}`,
    night: 'Nací de noche (después de la puesta del sol)',
    nightNote:
      'En el calendario judío el día empieza al anochecer («y fue la tarde y fue la mañana»). Si naciste de noche, tu fecha hebrea es la del día siguiente.',
    strength: 'La fuerza de tu mes',
    bornIn: (m: string, faculty: string) => `Naciste en ${m}: el mes ${ofFaculty(faculty)}`,
    letter: 'Letra',
    faculty: 'Facultad',
    tribe: 'Tribu',
    stone: 'Piedra de la tribu',
    sign: 'Constelación',
    stoneOf: (stone: string, tribe: string) => `${stone}, la piedra de ${tribe}:`,
    identified: (id: string) => `identificada tradicionalmente como ${id}.`,
    mission: 'Tu misión según el mes',
    lightOf: (faculty: string) => `La luz ${ofFaculty(faculty)}`,
    shadow: 'Su sombra',
    monthOf: (m: string) => `Mes de ${m}`,
    order: (n: number) => `${n}.º mes contando desde Nisán`,
    leap: ' · año bisiesto (con dos meses de Adar)',
    psalmEyebrow: 'El Salmo de tu año',
    psalm: (n: number) => `Salmo ${n}`,
    psalmText: (age: number, n: number) =>
      `Según el calendario hebreo tienes ${age} años: estás en tu año ${n} de vida. Es costumbre recitar cada día, desde el cumpleaños hebreo, el Salmo que corresponde a ese año.`,
    readPsalm: (n: number) => `Leer el Salmo ${n}`,
    next: 'Tu próximo cumpleaños hebreo',
    starts: (d: string) => `Comienza al anochecer del ${d}.`,
  },
  en: {
    bornOn: 'You were born on',
    date: (d: number, m: string, y: number) => `${d} ${m} ${y}`,
    night: 'I was born at night (after sunset)',
    nightNote:
      'In the Jewish calendar the day begins at nightfall (“and there was evening and there was morning”). If you were born at night, your Hebrew date is that of the following day.',
    strength: 'The strength of your month',
    bornIn: (m: string, faculty: string) => `You were born in ${m}: the month of ${faculty.toLowerCase()}`,
    letter: 'Letter',
    faculty: 'Faculty',
    tribe: 'Tribe',
    stone: 'Stone of the tribe',
    sign: 'Constellation',
    stoneOf: (stone: string, tribe: string) => `${stone}, the stone of ${tribe}:`,
    identified: (id: string) => `traditionally identified as ${id}.`,
    mission: 'Your mission according to the month',
    lightOf: (faculty: string) => `The light of ${faculty.toLowerCase()}`,
    shadow: 'Its shadow',
    monthOf: (m: string) => `The month of ${m}`,
    order: (n: number) => `${enOrdinal(n)} month counting from Nisan`,
    leap: ' · leap year (with two months of Adar)',
    psalmEyebrow: 'The Psalm of your year',
    psalm: (n: number) => `Psalm ${n}`,
    psalmText: (age: number, n: number) =>
      `According to the Hebrew calendar you are ${age}: you are in year ${n} of your life. It is customary to recite every day, from the Hebrew birthday on, the Psalm that corresponds to that year.`,
    readPsalm: (n: number) => `Read Psalm ${n}`,
    next: 'Your next Hebrew birthday',
    starts: (d: string) => `It begins at nightfall on ${d}.`,
  },
}

interface Props {
  date: BirthDate
  afterSunset: boolean
  onAfterSunset: (value: boolean) => void
}

export function HebrewBirth({ date, afterSunset, onAfterSunset }: Props) {
  const { lang } = useLang()
  const t = UI[lang]
  const { BIRTHDAY_CUSTOM, BIRTHDAY_RULES, HEBREW_DAY_SOURCES, HEBREW_MONTHS, MONTH_KABBALAH, MONTH_KABBALAH_NOTE, STONE_NOTE, MONTH_DEPTH } =
    useContent()
  const civil = new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
  const civilShort = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', timeZone: 'UTC' })
  const h = useMemo(() => hebrewBirthDate(date, afterSunset), [date, afterSunset])
  const next = useMemo(() => nextHebrewBirthday(h), [h])
  const age = useMemo(() => hebrewAge(h), [h])
  // Costumbre jasídica: cada año se recita el Salmo de la edad + 1 (el año de vida en el que se está)
  const psalm = age !== null && age + 1 <= 150 ? age + 1 : null
  const m = HEBREW_MONTHS[h.month]
  const k = MONTH_KABBALAH[h.month]
  const depth = MONTH_DEPTH[h.month]
  const hebrewText = `${hebrewNumeral(h.day)} ב${m.hebrew} ${hebrewNumeral(h.year, true)}`
  const nextMonth = next && HEBREW_MONTHS[next.hebrew.month]
  const eve = next && new Date(next.date.getTime() - 86_400_000)

  return (
    <div className="hebrew-birth">
      <div className="hb-hero glass reveal">
        <p className="eyebrow">{t.bornOn}</p>
        <p className="hb-date">{t.date(h.day, m.name, h.year)}</p>
        <p className="hb-hebrew" lang="he" dir="rtl">
          {hebrewText}
        </p>
        <label className="switch">
          <input type="checkbox" checked={afterSunset} onChange={(e) => onAfterSunset(e.target.checked)} />
          <span className="switch-track" aria-hidden="true" />
          <span>{t.night}</span>
        </label>
        <p className="note">{t.nightNote}</p>
        <SourceList sources={HEBREW_DAY_SOURCES} />
      </div>

      <div className="hb-mission glass reveal">
        <p className="eyebrow">{t.strength}</p>
        <h3>{t.bornIn(m.name, k.faculty)}</h3>
        <dl className="hb-attrs">
          <div>
            <dt>{t.letter}</dt>
            <dd>
              <span className="hb-attr-he" lang="he">
                {k.letter}
              </span>
              {k.letterName}
            </dd>
          </div>
          <div>
            <dt>{t.faculty}</dt>
            <dd>
              <span className="hb-attr-he" lang="he">
                {k.facultyHe}
              </span>
              {k.faculty}
            </dd>
          </div>
          <div>
            <dt>{t.tribe}</dt>
            <dd>
              <span className="hb-attr-he" lang="he">
                {k.tribeHe}
              </span>
              {k.tribe}
            </dd>
          </div>
          <div>
            <dt>{t.stone}</dt>
            <dd>
              <span className="hb-attr-he" lang="he">
                {k.stoneHe}
              </span>
              {k.stone}
            </dd>
          </div>
          <div>
            <dt>{t.sign}</dt>
            <dd>{k.sign}</dd>
          </div>
        </dl>
        <p className="hb-stone">
          <b>{t.stoneOf(k.stone, k.tribe)}</b> {t.identified(k.stoneId)}
        </p>
        <div className="lesson-box">
          <h4>{t.mission}</h4>
          <p>{k.invitation}</p>
        </div>
        <SourceList sources={k.sources} />
        <div className="duo">
          <div className="duo-card light">
            <h4>{t.lightOf(k.faculty)}</h4>
            <p>{depth.light.text}</p>
            <SourceList sources={depth.light.sources} />
          </div>
          {depth.shadow && (
            <div className="duo-card shadow">
              <h4>{t.shadow}</h4>
              <p>{depth.shadow.text}</p>
              <SourceList sources={depth.shadow.sources} />
            </div>
          )}
        </div>
        <p className="note">{STONE_NOTE.text}</p>
        <SourceList sources={STONE_NOTE.sources} />
        <p className="note">{MONTH_KABBALAH_NOTE.text}</p>
        <SourceList sources={MONTH_KABBALAH_NOTE.sources} />
      </div>

      <div className="hb-grid">
        <div className="hb-month glass reveal">
          <div className="hb-month-head">
            <span className="hb-month-glyph" lang="he">
              {m.hebrew}
            </span>
            <div>
              <h3>{t.monthOf(m.name)}</h3>
              <p className="note">
                {t.order(m.order)}
                {h.month.startsWith('adar') && isLeapYear(h.year) ? t.leap : ''}
              </p>
            </div>
          </div>
          <ul className="facts">
            {m.facts.map((f, i) => (
              <li key={i}>
                <p>{f.text}</p>
                <SourceList sources={f.sources} />
              </li>
            ))}
          </ul>
        </div>

        {psalm && age !== null && (
          <div className="hb-psalm glass reveal">
            <p className="eyebrow">{t.psalmEyebrow}</p>
            <p className="hb-next-date">{t.psalm(psalm)}</p>
            <p>{t.psalmText(age, psalm)}</p>
            <p>
              <a className="btn btn-ghost btn-sm" href={`https://www.sefaria.org/Psalms.${psalm}?lang=${lang === 'en' ? 'en' : 'bi'}`} target="_blank" rel="noopener noreferrer">
                {t.readPsalm(psalm)}
              </a>
            </p>
            <SourceList
              sources={[
                { label: 'Chabad.org — Jewish Birthday', url: 'https://www.chabad.org/library/article_cdo/aid/604383/jewish/Jewish-Birthday.htm' },
                { label: 'Chabad.org — Saying Psalms according to age', url: 'https://www.chabad.org/library/article_cdo/aid/4779124/jewish/Saying-Psalms-According-to-Your-Loved-Ones-Age.htm' },
              ]}
            />
          </div>
        )}

        {next && nextMonth && eve && (
          <div className="hb-next glass reveal">
            <p className="eyebrow">{t.next}</p>
            <p className="hb-next-date">{t.date(next.hebrew.day, nextMonth.name, next.hebrew.year)}</p>
            <p className="hb-next-civil">{civil.format(next.date)}</p>
            <p className="note">{t.starts(civilShort.format(eve))}</p>
            {!next.shortMonth && next.hebrew.month !== h.month && (
              <p className="note">{BIRTHDAY_RULES.adar.text}</p>
            )}
            {next.shortMonth && <p className="note">{BIRTHDAY_RULES.day30.text}</p>}
            {(next.shortMonth || next.hebrew.month !== h.month) && (
              <SourceList sources={next.shortMonth ? BIRTHDAY_RULES.day30.sources : BIRTHDAY_RULES.adar.sources} />
            )}
            <p className="hb-custom">{BIRTHDAY_CUSTOM.text}</p>
            <SourceList sources={BIRTHDAY_CUSTOM.sources} />
          </div>
        )}
      </div>
    </div>
  )
}
