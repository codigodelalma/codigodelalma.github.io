// Light and shadow of each month's faculty. Only texts verified in the original source.
// If there is no classical source for a month's shadow, none is written.
import type { HebrewMonthKey } from '../../lib/hebrewDate.ts'
import type { Source } from '../tradition.ts'
import type { MonthDepth } from '../monthDepth.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const adar: MonthDepth = {
  light: {
    text: 'Bringing joy to others. Elijah the prophet pointed to two jesters as worthy of the World to Come: they cheered up the sad and made peace between those who quarreled. And “when Adar begins, joy increases.”',
    sources: [sefaria('Talmud, Taanit 22a', 'Taanit.22a.4-7'), sefaria('Talmud, Taanit 29a', 'Taanit.29a.18')],
  },
  shadow: {
    text: 'Empty laughter: “laughter and levity accustom a person to lewdness.”',
    sources: [sefaria('Mishnah Avot 3:13', 'Pirkei_Avot.3.13')],
  },
}

export const MONTH_DEPTH: Record<HebrewMonthKey, MonthDepth> = {
  nisan: {
    light: {
      text: 'The word that sets free. On Passover the Torah commands us to tell our children about the Exodus from Egypt (“and you shall tell your son”), and the Arizal teaches that Pesach can be read as pe sach, “the mouth that speaks.”',
      sources: [sefaria('Exodus 13:8', 'Exodus.13.8'), sefaria("Arizal, Sha'ar HaKavanot, Pesach 3", "Sha'ar_HaKavanot,_Sermons_on_Passover.3.4")],
    },
    shadow: {
      text: 'Saying too much: “I have found nothing better for the body than silence… whoever multiplies words brings about sin.”',
      sources: [sefaria('Mishnah Avot 1:17', 'Pirkei_Avot.1.17')],
    },
  },
  iyar: {
    light: {
      text: 'A month of healing. The Bnei Yissaschar teaches that in Iyar the manna began to fall and no one fell ill, and that the name אייר has the same numerical value as the root of arucha, “healing.”',
      sources: [sefaria('Bnei Yissaschar, Iyar 1:3', 'Bnei_Yissaschar,_Iyar.1.3.1'), sefaria('Bnei Yissaschar, Iyar 1:5', 'Bnei_Yissaschar,_Iyar.1.5.1')],
    },
  },
  sivan: {
    light: {
      text: 'Moving forward. The prophet promises: “I will give you places to walk among these who stand.” And the Talmud plays on the words halichot (ways) and halachot (laws): whoever studies halachot every day is assured of the World to Come.',
      sources: [sefaria('Zechariah 3:7', 'Zechariah.3.7'), sefaria('Talmud, Niddah 73a', 'Niddah.73a.15')],
    },
  },
  tamuz: {
    light: {
      text: 'The “good eye”: Rabbi Eliezer teaches that the best path for a person is to have a good eye, to look upon others with generosity.',
      sources: [sefaria('Mishnah Avot 2:9', 'Pirkei_Avot.2.9')],
    },
    shadow: {
      text: 'Being carried away by what one sees: “do not stray after your heart and after your eyes.”',
      sources: [sefaria('Numbers 15:39', 'Numbers.15.39')],
    },
  },
  av: {
    light: {
      text: 'Truly listening. The central declaration of Jewish faith begins with a command to hear: “Hear, O Israel.”',
      sources: [sefaria('Deuteronomy 6:4', 'Deuteronomy.6.4')],
    },
  },
  elul: {
    light: {
      text: 'What counts is the deed: “Not study is the main thing, but action.”',
      sources: [sefaria('Mishnah Avot 1:17', 'Pirkei_Avot.1.17')],
    },
    shadow: {
      text: 'Leaving things undone: “It is not your duty to finish the work, but neither are you free to desist from it.”',
      sources: [sefaria('Mishnah Avot 2:16', 'Pirkei_Avot.2.16')],
    },
  },
  tishrei: {
    light: {
      text: 'Shared joy. On Sukkot the Torah commands us to take the four species and rejoice for seven days: “you shall rejoice in your festival, you, your son and your daughter… the stranger, the orphan and the widow.”',
      sources: [sefaria('Leviticus 23:40', 'Leviticus.23.40'), sefaria('Deuteronomy 16:14', 'Deuteronomy.16.14')],
    },
  },
  jeshvan: {
    light: {
      text: 'Perceiving the subtle. The Talmud teaches that scent is what the soul enjoys, not the body, and the prophet says of the Messiah that “he shall smell with the fear of God”: he will judge by that sense.',
      sources: [sefaria('Talmud, Berakhot 43b', 'Berakhot.43b.3'), sefaria('Isaiah 11:3', 'Isaiah.11.3'), sefaria('Talmud, Sanhedrin 93b', 'Sanhedrin.93b.7')],
    },
  },
  kislev: {
    light: {
      text: 'Dreaming with purpose: “a dream is one sixtieth of prophecy.” Jacob dreamed of the ladder that joined heaven and earth, and Joseph dreamed his destiny.',
      sources: [sefaria('Talmud, Berakhot 57b', 'Berakhot.57b.13'), sefaria('Genesis 28:12', 'Genesis.28.12'), sefaria('Genesis 37:5', 'Genesis.37.5')],
    },
  },
  tevet: {
    light: {
      text: 'Strength well directed: “Who is strong? One who conquers his inclination.”',
      sources: [sefaria('Mishnah Avot 4:1', 'Pirkei_Avot.4.1')],
    },
    shadow: {
      text: 'Anger: the Rambam counts it among the traits one must distance oneself from to the extreme, and the Talmud teaches that whoever becomes angry, if they are wise, loses their wisdom.',
      sources: [sefaria("Rambam, De'ot 2:3", 'Mishneh_Torah,_Human_Dispositions.2.3'), sefaria('Talmud, Pesachim 66b', 'Pesachim.66b.7')],
    },
  },
  shevat: {
    light: {
      text: 'Receiving with gratitude: “You shall eat and be satisfied, and bless.”',
      sources: [sefaria('Deuteronomy 8:10', 'Deuteronomy.8.10')],
    },
    shadow: {
      text: 'Swallowing without measure: Esau asked “let me gulp down” (haliteni, from the same root as le\'itah, this month\'s faculty) and sold his birthright for a dish of food.',
      sources: [sefaria('Genesis 25:30-34', 'Genesis.25.30-34')],
    },
  },
  adar,
  adar1: adar,
  adar2: adar,
}
