// Months of the Hebrew calendar. Every fact carries a verifiable source.
import type { HebrewMonthKey } from '../../lib/hebrewDate.ts'
import type { HebrewMonth } from '../hebrewMonths.ts'
import type { Fact, Source } from '../tradition.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const FIRST_MONTH = sefaria('Exodus 12:2', 'Exodus.12.2')

const adarFacts: Fact[] = [
  {
    text: 'Purim is celebrated in Adar (on the 14th of Adar; on the 15th in walled cities, Shushan Purim), recalling the deliverance told in the Book of Esther.',
    sources: [sefaria('Esther 9:17-21', 'Esther.9.17-21'), sefaria('Mishnah Megillah 1:1', 'Mishnah_Megillah.1.1')],
  },
  {
    text: '“When Adar enters, joy increases.”',
    sources: [sefaria('Talmud, Taanit 29a', 'Taanit.29a')],
  },
]

export const HEBREW_MONTHS: Record<HebrewMonthKey, HebrewMonth> = {
  nisan: {
    name: 'Nisan',
    hebrew: 'ניסן',
    order: 1,
    facts: [
      {
        text: 'It is the first month of the year: “This month shall be for you the beginning of months.”',
        sources: [FIRST_MONTH],
      },
      {
        text: 'The month of Passover (Pesach), which recalls the Exodus from Egypt: the Passover offering on the 14th and the festival of unleavened bread from the 15th of Nisan.',
        sources: [sefaria('Leviticus 23:5-6', 'Leviticus.23.5-6')],
      },
      {
        text: 'The Torah also calls it “the month of Aviv” (of spring).',
        sources: [sefaria('Exodus 13:4', 'Exodus.13.4'), sefaria('Deuteronomy 16:1', 'Deuteronomy.16.1')],
      },
      {
        text: 'Rabbi Yehoshua teaches in the Talmud: “In Nisan they were redeemed, and in Nisan they will be redeemed” (Rabbi Eliezer holds that the future redemption will be in Tishrei).',
        sources: [sefaria('Talmud, Rosh Hashanah 11a', 'Rosh_Hashanah.11a')],
      },
    ],
  },
  iyar: {
    name: 'Iyar',
    hebrew: 'אייר',
    order: 2,
    facts: [
      {
        text: 'Throughout Iyar the counting of the Omer continues: the 49 days between Passover and Shavuot.',
        sources: [sefaria('Leviticus 23:15-16', 'Leviticus.23.15-16')],
      },
      {
        text: 'The 18th of Iyar is Lag BaOmer, the 33rd day of the count, on which joy is customarily increased.',
        sources: [sefaria('Shulchan Aruch, Orach Chaim 493:2 (Rema)', 'Shulchan_Arukh,_Orach_Chayim.493.2')],
      },
      {
        text: 'The 14th of Iyar is Pesach Sheni, the “second Passover” for those who could not bring the offering in Nisan.',
        sources: [sefaria('Numbers 9:10-11', 'Numbers.9.10-11')],
      },
      {
        text: 'In the Bible it is called “the month of Ziv.”',
        sources: [sefaria('1 Kings 6:1', 'I_Kings.6.1')],
      },
    ],
  },
  sivan: {
    name: 'Sivan',
    hebrew: 'סיון',
    order: 3,
    facts: [
      {
        text: 'In the third month Israel arrived at Mount Sinai. According to the Sages of the Talmud, the Torah was given on the 6th of Sivan (Rabbi Yose says the 7th); Shavuot is celebrated on the 6th of Sivan.',
        sources: [sefaria('Exodus 19:1', 'Exodus.19.1'), sefaria('Talmud, Shabbat 86b', 'Shabbat.86b')],
      },
      {
        text: 'It is mentioned by name in the Book of Esther.',
        sources: [sefaria('Esther 8:9', 'Esther.8.9')],
      },
    ],
  },
  tamuz: {
    name: 'Tammuz',
    hebrew: 'תמוז',
    order: 4,
    facts: [
      {
        text: 'The 17th of Tammuz is a fast day. The Mishnah lists five misfortunes that occurred on that date, among them the breaking of the Tablets and the breach of the walls of Jerusalem.',
        sources: [sefaria('Mishnah Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
    ],
  },
  av: {
    name: 'Av',
    hebrew: 'אב',
    order: 5,
    facts: [
      {
        text: 'The 9th of Av (Tisha B’Av) is the day of mourning for the destruction of both Temples. “When Av enters, joy is diminished.”',
        sources: [sefaria('Mishnah Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
      {
        text: 'The 15th of Av (Tu B’Av) is, according to the Mishnah, one of the most joyful days of the year for Israel.',
        sources: [sefaria('Mishnah Taanit 4:8', 'Mishnah_Taanit.4.8')],
      },
    ],
  },
  elul: {
    name: 'Elul',
    hebrew: 'אלול',
    order: 6,
    facts: [
      {
        text: 'A month of preparation and return (teshuvah) before Rosh Hashanah. In Sephardic custom, Selichot are recited from the beginning of Elul; in Ashkenazi custom, the shofar is sounded throughout the month.',
        sources: [sefaria('Shulchan Aruch, Orach Chaim 581:1', 'Shulchan_Arukh,_Orach_Chayim.581.1')],
      },
      {
        text: 'The rebuilding of the wall of Jerusalem was completed on the 25th of Elul.',
        sources: [sefaria('Nehemiah 6:15', 'Nehemiah.6.15')],
      },
    ],
  },
  tishrei: {
    name: 'Tishrei',
    hebrew: 'תשרי',
    order: 7,
    facts: [
      {
        text: 'The month of the great festivals: Rosh Hashanah (1 Tishrei), Yom Kippur (the 10th) and Sukkot (from the 15th).',
        sources: [sefaria('Leviticus 23:24', 'Leviticus.23.24'), sefaria('Leviticus 23:27', 'Leviticus.23.27'), sefaria('Leviticus 23:34', 'Leviticus.23.34')],
      },
      {
        text: 'The year number changes in Tishrei: the Mishnah counts it among the “four new years.”',
        sources: [sefaria('Mishnah Rosh Hashanah 1:1', 'Mishnah_Rosh_Hashanah.1.1')],
      },
      {
        text: 'In the Bible it is called “the month of Ethanim.”',
        sources: [sefaria('1 Kings 8:2', 'I_Kings.8.2')],
      },
    ],
  },
  jeshvan: {
    name: 'Cheshvan',
    hebrew: 'חשוון',
    order: 8,
    facts: [
      {
        text: 'Also called Marcheshvan. On the 7th of Cheshvan, the prayers in the Land of Israel begin to ask for rain.',
        sources: [sefaria('Mishnah Taanit 1:3', 'Mishnah_Taanit.1.3')],
      },
      {
        text: 'In the Bible it is called “the month of Bul.”',
        sources: [sefaria('1 Kings 6:38', 'I_Kings.6.38')],
      },
      {
        text: 'According to Rabbi Eliezer, the Flood began on the 17th of Cheshvan (Rabbi Yehoshua says it was the 17th of Iyar).',
        sources: [sefaria('Genesis 7:11', 'Genesis.7.11'), sefaria('Talmud, Rosh Hashanah 11b', 'Rosh_Hashanah.11b')],
      },
    ],
  },
  kislev: {
    name: 'Kislev',
    hebrew: 'כסלו',
    order: 9,
    facts: [
      {
        text: 'The eight days of Chanukah begin on the 25th of Kislev.',
        sources: [sefaria('Talmud, Shabbat 21b', 'Shabbat.21b')],
      },
      {
        text: 'It is mentioned by name in the books of Zechariah and Nehemiah.',
        sources: [sefaria('Zechariah 7:1', 'Zechariah.7.1'), sefaria('Nehemiah 1:1', 'Nehemiah.1.1')],
      },
    ],
  },
  tevet: {
    name: 'Tevet',
    hebrew: 'טבת',
    order: 10,
    facts: [
      {
        text: 'The 10th of Tevet is a fast day: it recalls the beginning of the siege of Jerusalem by Nebuchadnezzar.',
        sources: [sefaria('2 Kings 25:1', 'II_Kings.25.1')],
      },
      {
        text: 'It was in Tevet that Esther was taken to King Ahasuerus.',
        sources: [sefaria('Esther 2:16', 'Esther.2.16')],
      },
    ],
  },
  shevat: {
    name: 'Shevat',
    hebrew: 'שבט',
    order: 11,
    facts: [
      {
        text: 'The 15th of Shevat (Tu BiShvat) is the new year for trees, according to the School of Hillel (the School of Shammai says the 1st of Shevat).',
        sources: [sefaria('Mishnah Rosh Hashanah 1:1', 'Mishnah_Rosh_Hashanah.1.1')],
      },
      {
        text: 'On the 1st of the eleventh month, Moses began to explain the Torah to the people.',
        sources: [sefaria('Deuteronomy 1:3-5', 'Deuteronomy.1.3-5')],
      },
    ],
  },
  adar: { name: 'Adar', hebrew: 'אדר', order: 12, facts: adarFacts },
  adar1: {
    name: 'Adar I',
    hebrew: 'אדר א׳',
    order: 12,
    facts: [
      {
        text: 'Adar I exists only in leap years, 7 out of every 19 years of the cycle, so that the festivals stay in their season.',
        sources: [{ label: 'Hebcal — Jewish calendar leap year', url: 'https://www.hebcal.com/home/1660/jewish-calendar-leap-year' }],
      },
      {
        text: 'Purim is celebrated in the second Adar, to “bring one redemption close to the other” (Purim to Passover). The 14th of Adar I is known as Purim Katan.',
        sources: [sefaria('Talmud, Megillah 6b', 'Megillah.6b'), sefaria('Shulchan Aruch, Orach Chaim 697:1', 'Shulchan_Arukh,_Orach_Chayim.697.1')],
      },
    ],
  },
  adar2: {
    name: 'Adar II',
    hebrew: 'אדר ב׳',
    order: 13,
    facts: [
      {
        text: 'In leap years there are two months of Adar, and Purim is celebrated in the second, to “bring one redemption close to the other” (Purim to Passover).',
        sources: [sefaria('Talmud, Megillah 6b', 'Megillah.6b')],
      },
      ...adarFacts.slice(1),
    ],
  },
}

export const HEBREW_DAY_SOURCES: Source[] = [
  sefaria('Genesis 1:5', 'Genesis.1.5'),
  sefaria('Talmud, Chullin 83a', 'Chullin.83a'),
  { label: 'Chabad.org — Jewish Birthdays', url: 'https://www.chabad.org/library/article_cdo/aid/481087/jewish/How-Do-Jews-Celebrate-Birthdays.htm' },
]

export const BIRTHDAY_CUSTOM: Fact = {
  text: 'Celebrating one’s birthday according to the Hebrew calendar is a custom the Lubavitcher Rebbe especially encouraged from 1988 onward: a day to give thanks, reflect and make good resolutions.',
  sources: [{ label: 'Chabad.org — Why your birthday matters', url: 'https://www.chabad.org/library/article_cdo/aid/655568/jewish/Why-Your-Birthday-Matters.htm' }],
}

export const BIRTHDAY_RULES = {
  adar: {
    text: 'The month changes because this year has a different number of Adar months. Those born in Adar of a common year celebrate in Adar II in leap years; those born in Adar I or Adar II celebrate in Adar in common years. The rule comes from the bar mitzvah and is applied by analogy; some customs differ.',
    sources: [sefaria('Shulchan Aruch, Orach Chaim 55:10 (Rema)', 'Shulchan_Arukh,_Orach_Chayim.55.10'), sefaria('Mishnah Berurah 55:43', 'Mishnah_Berurah.55.43')],
  },
  day30: {
    text: 'You were born on the 30th, and this year that month has only 29 days. By analogy with the bar mitzvah rule, the birthday moves to the 1st of the following month; some people celebrate it on the 29th.',
    sources: [sefaria('Mishnah Berurah 55:45', 'Mishnah_Berurah.55.45')],
  },
}
