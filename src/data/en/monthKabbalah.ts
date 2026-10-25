// Kabbalistic correspondences of each Hebrew month.
// Letter, faculty and constellation: Sefer Yetzirah, Gra / Arizal version, 5:7-10.
// Tribe: the Arizal's scheme as transmitted by the Hasidic masters (Bnei Yissaschar, Shem MiShmuel, Pri Tzadik).
// The "invitation" is a reading of that tradition: not a prediction about someone born in the month.
import type { HebrewMonthKey } from '../../lib/hebrewDate.ts'
import type { Source } from '../tradition.ts'
import type { MonthKabbalah } from '../monthKabbalah.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })
const inner = (month: string, path: string): Source => ({ label: `Inner.org — ${month}`, url: `https://inner.org/${path}` })

const SY1 = sefaria('Sefer Yetzirah (Gra) 5:7', 'Sefer_Yetzirah_Gra_Version.5.7')
const SY2 = sefaria('Sefer Yetzirah (Gra) 5:8', 'Sefer_Yetzirah_Gra_Version.5.8')
const SY3 = sefaria('Sefer Yetzirah (Gra) 5:9', 'Sefer_Yetzirah_Gra_Version.5.9')
const SY4 = sefaria('Sefer Yetzirah (Gra) 5:10', 'Sefer_Yetzirah_Gra_Version.5.10')
const BY_TRIBES = sefaria('Bnei Yissaschar, Elul 1:8', 'Bnei_Yissaschar,_Elul_1.8.2')

const adar: MonthKabbalah = {
  letter: 'ק',
  letterName: 'Kuf',
  faculty: 'Laughter',
  facultyHe: 'שחוק',
  tribe: 'Naphtali',
  stone: 'Achlamah',
  stoneHe: 'אחלמה',
  stoneId: 'amethyst',
  tribeHe: 'נפתלי',
  sign: 'Pisces (Dagim)',
  invitation:
    'Cultivating a joy that does not depend on circumstances: the laughter that is born of trust and is able to transform sadness.',
  sources: [SY4, sefaria('Pri Tzadik, Rosh Chodesh Adar 11', 'Peri_Tzadik,_Rosh_Chodesh_Adar_11.1'), inner('Adar', 'times/adar/adar.htm')],
}

export const MONTH_KABBALAH: Record<HebrewMonthKey, MonthKabbalah> = {
  nisan: {
    letter: 'ה',
    letterName: 'He',
    faculty: 'Speech',
    facultyHe: 'שיחה',
    tribe: 'Judah',
    stone: 'Nofech',
    stoneHe: 'נפך',
    stoneId: 'carbuncle (Septuagint) or emerald (Onkelos)',
    tribeHe: 'יהודה',
    sign: 'Aries (Taleh)',
    invitation:
      'Elevating speech: speaking with truth and with kindness, and using your voice to free, to give thanks and to build, never to hurt.',
    sources: [SY1, BY_TRIBES, inner('Nisan', 'times/nissan/nissan.htm')],
  },
  iyar: {
    letter: 'ו',
    letterName: 'Vav',
    faculty: 'Thought',
    facultyHe: 'הרהור',
    tribe: 'Issachar',
    stone: 'Sapir',
    stoneHe: 'ספיר',
    stoneId: 'sapphire; probably lapis lazuli',
    tribeHe: 'יששכר',
    sign: 'Taurus (Shor)',
    invitation:
      'Ordering and purifying thought: choosing which ideas you dwell on and working on yourself patiently, day by day.',
    sources: [SY1, BY_TRIBES, inner('Iyar', 'times/iyar/iyar.htm')],
  },
  sivan: {
    letter: 'ז',
    letterName: 'Zayin',
    faculty: 'Walking',
    facultyHe: 'הילוך',
    tribe: 'Zebulun',
    stone: 'Yahalom',
    stoneHe: 'יהלום',
    stoneId: 'jasper (Septuagint); often translated as diamond',
    tribeHe: 'זבולון',
    sign: "Gemini (Te'omim)",
    invitation:
      'Moving forward: not standing still, taking concrete steps toward what uplifts you and carrying what you have learned to every place you go.',
    sources: [SY1, BY_TRIBES, inner('Sivan', 'times/sivan/sivan.htm')],
  },
  tamuz: {
    letter: 'ח',
    letterName: 'Chet',
    faculty: 'Sight',
    facultyHe: 'ראייה',
    tribe: 'Reuben',
    stone: 'Odem',
    stoneHe: 'אודם',
    stoneId: 'sardius or carnelian, a red stone',
    tribeHe: 'ראובן',
    sign: 'Cancer (Sartan)',
    invitation:
      'Learning to look with a "good eye": seeing the good in others and in what happens to you, even when appearances say otherwise.',
    sources: [SY2, BY_TRIBES, sefaria('Mishnah Avot 2:9 ("good eye")', 'Pirkei_Avot.2.9'), inner('Tammuz', 'times/tamuz/tamuz.htm')],
  },
  av: {
    letter: 'ט',
    letterName: 'Tet',
    faculty: 'Hearing',
    facultyHe: 'שמיעה',
    tribe: 'Simeon',
    stone: 'Pitdah',
    stoneHe: 'פטדה',
    stoneId: 'topaz',
    tribeHe: 'שמעון',
    sign: 'Leo (Aryeh)',
    invitation:
      'Truly listening: to others, to your own conscience and to what life teaches, and finding the good hidden behind what is difficult.',
    sources: [SY2, BY_TRIBES, inner('Av', 'times/av/av.htm')],
  },
  elul: {
    letter: 'י',
    letterName: 'Yud',
    faculty: 'Action',
    facultyHe: 'מעשה',
    tribe: 'Gad',
    stone: 'Shevo',
    stoneHe: 'שבו',
    stoneId: 'agate',
    tribeHe: 'גד',
    sign: 'Virgo (Betulah)',
    invitation:
      'Turning good intentions into deeds: taking stock, repairing what is pending and starting anew with concrete acts.',
    sources: [SY2, BY_TRIBES, inner('Elul', 'times/elul/elul.htm')],
  },
  tishrei: {
    letter: 'ל',
    letterName: 'Lamed',
    faculty: 'Union',
    facultyHe: 'תשמיש',
    tribe: 'Ephraim',
    stone: 'Shoham',
    stoneHe: 'שהם',
    stoneId: 'onyx or beryl; it is the stone of Joseph, which Ephraim shares with Manasseh',
    tribeHe: 'אפרים',
    sign: 'Libra (Moznayim)',
    invitation:
      'Uniting and bonding: the text speaks of marital union, and Hasidic teaching extends it to the capacity to truly connect with others and with the sacred.',
    sources: [
      SY3,
      sefaria('Bnei Yissaschar, Tishrei 1:1', 'Bnei_Yissaschar,_Tishrei_1.1.1'),
      inner('Tishrei', 'english-transcripts/ten-days-of-teshuvah-repentance-and-the-letter-lamed-of-tishrei'),
    ],
  },
  jeshvan: {
    letter: 'נ',
    letterName: 'Nun',
    faculty: 'Smell',
    facultyHe: 'ריח',
    tribe: 'Manasseh',
    stone: 'Shoham',
    stoneHe: 'שהם',
    stoneId: 'onyx or beryl; it is the stone of Joseph, which Manasseh shares with Ephraim',
    tribeHe: 'מנשה',
    sign: 'Scorpio (Akrav)',
    invitation:
      'Refining the perception of the subtle: distinguishing the essential from the superficial and discovering the sacred in everyday life.',
    sources: [SY3, sefaria('Shem MiShmuel, Bereshit 3', 'Shem_MiShmuel,_Bereshit_3.2'), inner('Cheshvan', 'times/cheshvan/cheshvan.htm')],
  },
  kislev: {
    letter: 'ס',
    letterName: 'Samech',
    faculty: 'Sleep',
    facultyHe: 'שינה',
    tribe: 'Benjamin',
    stone: 'Yashfeh',
    stoneHe: 'ישפה',
    stoneId: 'jasper',
    tribeHe: 'בנימין',
    sign: 'Sagittarius (Keshet)',
    invitation:
      'Trusting and dreaming: resting in trust, tending the dreams that give direction to life and kindling light in the darkness.',
    sources: [SY3, sefaria('Bnei Yissaschar, Kislev and Tevet 3:38', 'Bnei_Yissaschar,_Kislev_and_Tevet_3.38.1'), inner('Kislev', 'times/kislev/kislev.htm')],
  },
  tevet: {
    letter: 'ע',
    letterName: 'Ayin',
    faculty: 'Anger',
    facultyHe: 'רוגז',
    tribe: 'Dan',
    stone: 'Leshem',
    stoneHe: 'לשם',
    stoneId: 'jacinth or opal',
    tribeHe: 'דן',
    sign: 'Capricorn (Gedi)',
    invitation:
      'Transforming anger: not letting rage take control, and turning that force into firmness against injustice and energy for good.',
    sources: [SY4, sefaria('Bnei Yissaschar, Kislev and Tevet 3:38', 'Bnei_Yissaschar,_Kislev_and_Tevet_3.38.1'), inner('Tevet', 'times/tevet/tevet.htm')],
  },
  shevat: {
    letter: 'צ',
    letterName: 'Tzadi',
    faculty: 'Eating',
    facultyHe: 'לעיטה',
    tribe: 'Asher',
    stone: 'Tarshish',
    stoneHe: 'תרשיש',
    stoneId: 'chrysolite or beryl',
    tribeHe: 'אשר',
    sign: 'Aquarius (Deli)',
    invitation:
      'Sanctifying the everyday: eating, enjoying and receiving with gratitude and awareness, without letting appetite rule us.',
    sources: [SY4, sefaria('Bnei Yissaschar, Shevat 1:8', 'Bnei_Yissaschar,_Shevat_1.8.1'), inner('Shevat', 'times/shevat/shevat.htm')],
  },
  adar,
  adar1: adar,
  adar2: adar,
}

export const STONE_NOTE: { text: string; sources: Source[] } = {
  text: 'Each tribe had its stone on the breastplate (Choshen) of the High Priest, with its name engraved on it. Here the Midrash’s assignment is followed; Targum Jonathan arranges some stones differently. Which present-day gem corresponds to each Hebrew stone is uncertain: the ancient translations differ.',
  sources: [
    sefaria('Exodus 28:17-21', 'Exodus.28.17-21'),
    sefaria('Bamidbar Rabbah 2:7', 'Bamidbar_Rabbah.2.7'),
    sefaria('Targum Jonathan, Exodus 28:17-21', 'Targum_Jonathan_on_Exodus.28.17-21'),
  ],
}

export const MONTH_KABBALAH_NOTE: { text: string; sources: Source[] } = {
  text: 'Sefer Yetzirah assigns each month a letter, a faculty and a constellation. The Talmud acknowledges that the time of birth imprints tendencies: one born under Mars will be someone who sheds blood, and Rav Ashi clarifies that this may be a bloodletter, a thief, a slaughterer or a mohel: the same inclination can be lived out for good or for ill. That is why the strength of your month is a gift you bring, not a sealed fate: Rabbi Yochanan teaches that "there is no mazal for Israel," and the Talmud tells how charity saved a person from the death the astrologers had foretold. The correspondences follow the Gra and Arizal version of Sefer Yetzirah; other versions order the faculties differently.',
  sources: [
    sefaria('Talmud, Shabbat 156a:11-12', 'Shabbat.156a.11-12'),
    sefaria('Talmud, Shabbat 156b', 'Shabbat.156b.4-5'),
    sefaria('Sefer Yetzirah (short version) 5:1', 'Sefer_Yetzirah.5.1'),
    sefaria('Pri Tzadik, Rosh Chodesh Sivan 4', 'Peri_Tzadik,_Rosh_Chodesh_Sivan_4.3'),
  ],
}
