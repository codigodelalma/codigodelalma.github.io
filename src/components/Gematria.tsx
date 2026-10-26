import { useMemo, useState } from 'react'
import { gematria, hebrewLettersOnly, KEYBOARD } from '../lib/gematria.ts'
import { useLang } from '../i18n/lang.tsx'
import { baseLetter, FINAL_TO_BASE, HEBREW_LETTERS } from '../data/hebrewLetters.ts'
import { SourceList } from './SourceList.tsx'

const JVL = { label: 'Encyclopaedia Judaica — Gematria (Jewish Virtual Library)', url: 'https://www.jewishvirtuallibrary.org/gematria-2' }

const UI = {
  es: {
    what: 'La guematría es la forma tradicional de leer números en las palabras hebreas: cada letra tiene un valor y se suman. Funciona con tu nombre escrito en hebreo. No lo convertimos automáticamente desde el español, porque un mismo nombre puede escribirse de varias maneras y el resultado sería inventado. Si no conoces tu nombre en hebreo, puedes preguntarlo en tu comunidad o a un rabino.',
    label: 'Tu nombre en letras hebreas',
    keyboard: 'Teclado hebreo',
    space: 'Espacio',
    erase: 'Borrar letra',
    clear: 'Limpiar',
    empty: 'Escribe o toca las letras para ver la guematría.',
    absolute: 'Valor absoluto',
    absoluteNote: 'Mispar Hejrají: Álef = 1 … Tav = 400. Las letras finales valen como su forma normal.',
    withFinals: (n: number) => `Si se dan a las letras finales los valores de 500 a 900, como se hace a veces: ${n}.`,
    ordinal: 'Valor ordinal',
    ordinalNote: 'Mispar Sidurí: la posición de cada letra en el alefato, del 1 al 22.',
    small: 'Valor reducido',
    smallNote: 'Mispar Katán: cada letra sin sus ceros (Yud = 1, Kuf = 1).',
    integral: 'Reducido integral',
    integralNote: 'Mispar Katán Misparí: el valor absoluto reducido a un dígito.',
    lettersTitle: 'Las letras de tu nombre',
    lettersIntro:
      'Para cada letra: lo que significa su nombre y lo que enseña el Talmud (Shabat 104a), donde el alfabeto se lee como una lección. Cuando las fuentes no saben con seguridad qué significa un nombre, lo decimos. En el grupo Zain, Jet, Tet, Yud, Kaf y Lámed el Talmud enseña una sola frase; la palabra de cada letra se deduce de sus letras.',
    final: 'final',
    nameLabel: 'Su nombre',
    talmudLabel: 'En el Talmud',
    value: 'valor',
    privacy: 'Lo que escribes aquí tampoco se guarda ni se envía.',
  },
  en: {
    what: 'Gematria is the traditional way of reading numbers in Hebrew words: each letter has a value and they are added together. It works with your name written in Hebrew. We do not convert it automatically from English or Spanish, because the same name can be spelled in several ways and the result would be made up. If you do not know your Hebrew name, you can ask your community or a rabbi.',
    label: 'Your name in Hebrew letters',
    keyboard: 'Hebrew keyboard',
    space: 'Space',
    erase: 'Delete letter',
    clear: 'Clear',
    empty: 'Type or tap the letters to see the gematria.',
    absolute: 'Absolute value',
    absoluteNote: 'Mispar Hechrachi: Aleph = 1 … Tav = 400. Final letters count as their regular form.',
    withFinals: (n: number) => `If the final letters are given the values 500 to 900, as is sometimes done: ${n}.`,
    ordinal: 'Ordinal value',
    ordinalNote: 'Mispar Siduri: the position of each letter in the alphabet, from 1 to 22.',
    small: 'Reduced value',
    smallNote: 'Mispar Katan: each letter without its zeros (Yud = 1, Kuf = 1).',
    integral: 'Integral reduced',
    integralNote: 'Mispar Katan Mispari: the absolute value reduced to one digit.',
    lettersTitle: 'The letters of your name',
    lettersIntro:
      'For each letter: what its name means and what the Talmud teaches (Shabbat 104a), where the alphabet is read as a lesson. When the sources are not sure what a name means, we say so. For the group Zayin, Chet, Tet, Yud, Kaf and Lamed the Talmud teaches a single sentence; the word for each letter is inferred from its letters.',
    final: 'final',
    nameLabel: 'Its name',
    talmudLabel: 'In the Talmud',
    value: 'value',
    privacy: 'What you type here is not stored or sent either.',
  },
}

export function Gematria() {
  const { lang } = useLang()
  const t = UI[lang]
  const [text, setText] = useState('')
  const result = useMemo(() => gematria(text), [text])
  const distinct = useMemo(() => [...new Set([...hebrewLettersOnly(text)].map(baseLetter))], [text])
  const keyTitle = (ch: string) => {
    const name = HEBREW_LETTERS[baseLetter(ch)]?.[lang].name
    return name && FINAL_TO_BASE[ch] ? `${name} ${t.final}` : name
  }

  return (
    <div className="gematria">
      <div className="glass gem-input-card reveal">
        <p className="section-intro">{t.what}</p>
        <label className="field">
          <span>{t.label}</span>
          <input
            className="gem-input"
            type="text"
            dir="rtl"
            lang="he"
            inputMode="text"
            autoComplete="off"
            spellCheck={false}
            maxLength={60}
            placeholder="שם"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div className="gem-keyboard" role="group" aria-label={t.keyboard} dir="rtl">
          {KEYBOARD.map((ch) => (
            <button key={ch} type="button" lang="he" title={keyTitle(ch)} onClick={() => setText((v) => v + ch)}>
              {ch}
            </button>
          ))}
          <button type="button" className="gem-wide" onClick={() => setText((v) => v + ' ')}>
            {t.space}
          </button>
          <button type="button" className="gem-wide" aria-label={t.erase} onClick={() => setText((v) => [...v].slice(0, -1).join(''))}>
            ⌫
          </button>
          <button type="button" className="gem-wide" onClick={() => setText('')}>
            {t.clear}
          </button>
        </div>
        <p className="note">{t.privacy}</p>
      </div>

      {!result ? (
        <p className="note gem-empty">{t.empty}</p>
      ) : (
        <>
          <div className="glass gem-result reveal visible">
            <div className="gem-tiles" dir="rtl">
              {result.letters.map((l, i) => (
                <span key={i} className="tile tile-vowel gem-tile">
                  <b lang="he">{l.char}</b>
                  <small>{l.value}</small>
                </span>
              ))}
            </div>
            <div className="gem-values">
              <div>
                <h4>{t.absolute}</h4>
                <p className="gem-big">{result.absolute}</p>
                <p className="note">{t.absoluteNote}</p>
                {result.absoluteWithFinals !== null && <p className="note">{t.withFinals(result.absoluteWithFinals)}</p>}
              </div>
              <div>
                <h4>{t.ordinal}</h4>
                <p className="gem-big">{result.ordinal}</p>
                <p className="note">{t.ordinalNote}</p>
              </div>
              <div>
                <h4>{t.small}</h4>
                <p className="gem-big">{result.small}</p>
                <p className="note">{t.smallNote}</p>
              </div>
              <div>
                <h4>{t.integral}</h4>
                <p className="gem-big">{result.integral.join(' → ')}</p>
                <p className="note">{t.integralNote}</p>
              </div>
            </div>
            <SourceList sources={[JVL]} />
          </div>

          {distinct.some((ch) => HEBREW_LETTERS[ch]) && (
            <div className="gem-letters">
              <h3>{t.lettersTitle}</h3>
              <p className="section-intro">{t.lettersIntro}</p>
              <div className="gem-letter-grid">
                {distinct.map((ch) => {
                  const info = HEBREW_LETTERS[ch]
                  if (!info) return null
                  return (
                    <article key={ch} className="glass gem-letter">
                      <header>
                        <span className="gem-glyph" lang="he">
                          {ch}
                        </span>
                        <div>
                          <h4>{info[lang].name}</h4>
                          <p className="note">
                            {t.value} {info.value}
                          </p>
                        </div>
                      </header>
                      {info[lang].nameMeaning && <p className="gem-label">{t.nameLabel}</p>}
                      {info[lang].nameMeaning && <p>{info[lang].nameMeaning}</p>}
                      {info.nameSource && <SourceList sources={info.nameSource2 ? [info.nameSource, info.nameSource2] : [info.nameSource]} />}
                      {info[lang].talmud && <p className="gem-label">{t.talmudLabel}</p>}
                      {info[lang].talmud && <p>{info[lang].talmud}</p>}
                      {info.talmudSource && <SourceList sources={[info.talmudSource]} />}
                    </article>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
