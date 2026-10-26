// Kabbalah and Jewish tradition. Every statement carries a verifiable source.
// When a point is a later teaching (Chassidic, from the Maharal, homiletic), the text says so.
import type { Fact, Sefira, Source, Tradition } from '../tradition.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const CHABAD_SEFIROT: Source = {
  label: 'Chabad.org — The Sefirot',
  url: 'https://www.chabad.org/library/article_cdo/aid/380651',
}
const JVL_SEFIROT: Source = {
  label: 'Jewish Virtual Library — Sefirot',
  url: 'https://www.jewishvirtuallibrary.org/sefirot',
}
const SHABBAT_104A = sefaria('Talmud, Shabbat 104a', 'Shabbat.104a')

export const SEFIROT: Sefira[] = [
  {
    n: 1,
    name: 'Keter',
    hebrew: 'כתר',
    translation: 'Crown',
    quality: 'The highest sefirah: the primordial will, prior to all thought. It is the root from which all the others emerge.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 2,
    name: 'Chochmah',
    hebrew: 'חכמה',
    translation: 'Wisdom',
    quality: 'The first flash of an idea, the intuition that has not yet taken shape.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 3,
    name: 'Binah',
    hebrew: 'בינה',
    translation: 'Understanding',
    quality: 'The capacity to develop, analyze and give structure to the idea received from Chochmah.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 4,
    name: 'Chesed',
    hebrew: 'חסד',
    translation: 'Kindness',
    quality: 'The love that expands and gives without measure; generosity and benevolence.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 5,
    name: 'Gevurah',
    hebrew: 'גבורה',
    translation: 'Strength · Severity',
    quality: 'Also called Din (judgment): the limits, discipline and restraint that balance Chesed.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 6,
    name: 'Tiferet',
    hebrew: 'תפארת',
    translation: 'Beauty · Harmony',
    quality: 'The center of the tree: it brings kindness and severity into balance; it is associated with compassion and truth.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 7,
    name: 'Netzach',
    hebrew: 'נצח',
    translation: 'Victory · Eternity',
    quality: 'The perseverance and initiative that carry kindness into action and sustain it over time.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 8,
    name: 'Hod',
    hebrew: 'הוד',
    translation: 'Splendor · Glory',
    quality: 'Receptivity, acknowledgment and humility; it complements Netzach.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 9,
    name: 'Yesod',
    hebrew: 'יסוד',
    translation: 'Foundation',
    quality: 'The channel that gathers all the higher sefirot and passes them on to Malchut; bond and connection.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 10,
    name: 'Malchut',
    hebrew: 'מלכות',
    translation: 'Kingship',
    quality: 'The manifestation of the divine in the concrete world; the sefirah that receives and brings into being.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
]

export const TRADITION: Record<number, Tradition> = {
  1: {
    letter: {
      glyph: 'א',
      name: 'Aleph',
      meaning: {
        text: 'The first letter of the Hebrew alphabet, with a value of 1. It is a silent letter: it has no sound of its own. The Talmud reads it as “learn wisdom” (aleph binah). Chassidic teaching connects it with aluf, “master” or “chief.”',
        sources: [SHABBAT_104A, { label: 'Chabad.org — Aleph', url: 'https://www.chabad.org/library/article_cdo/aid/137073/jewish/Aleph.htm' }],
      },
    },
    jewish: [
      {
        text: 'The Shema, the central declaration of Jewish faith, proclaims the oneness of God: “Hear, O Israel: the Lord is our God, the Lord is One (Echad).”',
        sources: [sefaria('Deuteronomy 6:4', 'Deuteronomy.6.4')],
      },
      {
        text: 'The word Echad (אחד, “one”) adds up to 13 in gematria (1+8+4). A widely quoted homiletic reading pairs it with Ahavah (אהבה, “love”), which also adds up to 13.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    ],
  },
  2: {
    letter: {
      glyph: 'ב',
      name: 'Bet',
      meaning: {
        text: 'Value 2; its name means “house” (bayit). The Torah begins with it (Bereshit). The Midrash explains that the Bet is closed on three sides and open toward the front, that it is the first letter of berachah (blessing), and that its value alludes to two worlds: this one and the World to Come.',
        sources: [sefaria('Bereshit Rabbah 1:10', 'Bereshit_Rabbah.1.10')],
      },
    },
    jewish: [
      {
        text: 'Moses received two Tablets of the Testimony, written on both sides.',
        sources: [sefaria('Exodus 31:18', 'Exodus.31.18'), sefaria('Exodus 32:15', 'Exodus.32.15')],
      },
      {
        text: 'The commandment of Shabbat appears in two forms: “Remember” (Zachor) and “Keep” (Shamor). According to the Talmud, both were spoken in a single utterance.',
        sources: [sefaria('Exodus 20:8', 'Exodus.20.8'), sefaria('Deuteronomy 5:12', 'Deuteronomy.5.12'), sefaria('Talmud, Shevuot 20b', 'Shevuot.20b')],
      },
      {
        text: 'The custom of lighting two Shabbat candles is explained as one for Zachor and one for Shamor.',
        sources: [sefaria('Shulchan Aruch, Orach Chaim 263:1', 'Shulchan_Arukh,_Orach_Chayim.263.1')],
      },
    ],
  },
  3: {
    letter: {
      glyph: 'ג',
      name: 'Gimel',
      meaning: {
        text: 'Value 3. The Talmud reads Gimel-Dalet as gemol dalim, “be kind to the poor,” and explains that the foot of the Gimel stretches toward the Dalet because whoever does kindness runs after the one in need.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'Only three are called patriarchs: Abraham, Isaac and Jacob.',
        sources: [sefaria('Talmud, Berakhot 16b', 'Berakhot.16b')],
      },
      {
        text: 'Prayers are said three times a day: Shacharit, Mincha and Arvit. According to one opinion, they were instituted by the three patriarchs.',
        sources: [sefaria('Talmud, Berakhot 26b', 'Berakhot.26b')],
      },
      {
        text: 'The Talmud describes “a threefold Torah (Torah, Prophets, Writings), given to a threefold people (Kohen, Levite, Israelite), through a third (Moses), on the third day, in the third month.”',
        sources: [sefaria('Talmud, Shabbat 88a', 'Shabbat.88a')],
      },
      {
        text: '“A threefold cord is not quickly broken.”',
        sources: [sefaria('Ecclesiastes 4:12', 'Ecclesiastes.4.12')],
      },
    ],
  },
  4: {
    letter: {
      glyph: 'ד',
      name: 'Dalet',
      meaning: {
        text: 'Value 4. Its name is related to delet, “door.” In the Talmud it represents the dal, the poor person who receives the kindness of the Gimel.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'The four matriarchs: Sarah, Rebecca, Rachel and Leah.',
        sources: [sefaria('Talmud, Berakhot 16b', 'Berakhot.16b')],
      },
      {
        text: 'At the Passover Seder, four cups of wine are drunk and the four questions are asked. The Jerusalem Talmud links the cups with the four expressions of redemption in Exodus 6:6-7.',
        sources: [sefaria('Mishnah Pesachim 10:1', 'Mishnah_Pesachim.10.1'), sefaria('Mishnah Pesachim 10:4', 'Mishnah_Pesachim.10.4'), sefaria('Exodus 6:6-7', 'Exodus.6.6-7')],
      },
      {
        text: 'The four-letter Name of God, the Tetragrammaton (YHVH), and the four species of Sukkot.',
        sources: [sefaria('Leviticus 23:40', 'Leviticus.23.40')],
      },
    ],
  },
  5: {
    letter: {
      glyph: 'ה',
      name: 'He',
      meaning: {
        text: 'Value 5. It is the letter God added to the names of Abram and Sarai, who became Abraham and Sarah when the covenant was sealed.',
        sources: [sefaria('Genesis 17:5', 'Genesis.17.5'), sefaria('Genesis 17:15', 'Genesis.17.15')],
      },
    },
    jewish: [
      {
        text: 'The Written Torah is made up of five books (the Chumash): Genesis, Exodus, Leviticus, Numbers and Deuteronomy.',
        sources: [{ label: 'Jewish Virtual Library — Torah', url: 'https://www.jewishvirtuallibrary.org/the-torah' }],
      },
      {
        text: 'The Midrash teaches that the soul is given five names: nefesh, ruach, neshamah, chayah and yechidah.',
        sources: [sefaria('Bereshit Rabbah 14:9', 'Bereshit_Rabbah.14.9')],
      },
      {
        text: 'On Yom Kippur, five abstentions are observed.',
        sources: [sefaria('Mishnah Yoma 8:1', 'Mishnah_Yoma.8.1')],
      },
    ],
  },
  6: {
    letter: {
      glyph: 'ו',
      name: 'Vav',
      meaning: {
        text: 'Value 6. Its name means “hook” (the vavim that held up the curtains of the Tabernacle), and as a prefix it works as the conjunction “and”: the letter that joins.',
        sources: [sefaria('Exodus 27:10', 'Exodus.27.10')],
      },
    },
    jewish: [
      {
        text: 'The world was created in six days, and on the seventh God rested.',
        sources: [sefaria('Genesis 1', 'Genesis.1'), sefaria('Exodus 20:11', 'Exodus.20.11')],
      },
      {
        text: 'The Mishnah is arranged in six orders (Shishah Sedarim, the source of the acronym “Shas”): Zeraim, Moed, Nashim, Nezikin, Kodashim and Tohorot.',
        sources: [{ label: 'Jewish Virtual Library — Mishnah', url: 'https://www.jewishvirtuallibrary.org/mishnah' }],
      },
    ],
  },
  7: {
    letter: {
      glyph: 'ז',
      name: 'Zayin',
      meaning: {
        text: 'Value 7. Its name means “weapon.” The Talmud connects it with zan, “to feed”: the Holy One, blessed be He, provides sustenance.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'The seventh day, Shabbat, was blessed and made holy.',
        sources: [sefaria('Genesis 2:2-3', 'Genesis.2.2-3')],
      },
      {
        text: 'The Menorah of the Tabernacle had seven lamps.',
        sources: [sefaria('Exodus 25:31-37', 'Exodus.25.31-37')],
      },
      {
        text: 'The seventh year is Shmita, a year of rest for the land, and seven weeks of the Omer are counted until Shavuot.',
        sources: [sefaria('Leviticus 25:1-7', 'Leviticus.25.1-7'), sefaria('Leviticus 23:15', 'Leviticus.23.15')],
      },
      {
        text: 'The Midrash teaches: “All sevenths are beloved.”',
        sources: [sefaria('Vayikra Rabbah 29:11', 'Vayikra_Rabbah.29.11')],
      },
    ],
  },
  8: {
    letter: {
      glyph: 'ח',
      name: 'Chet',
      meaning: {
        text: 'Value 8. Together with the Yud (10) it forms the word Chai (חי), “life,” which adds up to 18.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    },
    jewish: [
      {
        text: 'The Brit Milah (circumcision) is performed on the eighth day.',
        sources: [sefaria('Genesis 17:12', 'Genesis.17.12'), sefaria('Leviticus 12:3', 'Leviticus.12.3')],
      },
      {
        text: 'Chanukah is celebrated for eight days, in memory of the oil that lasted for eight days.',
        sources: [sefaria('Talmud, Shabbat 21b', 'Shabbat.21b')],
      },
      {
        text: 'A teaching of the Maharal of Prague (16th century): if 7 represents the natural order of creation, 8 represents what lies above nature.',
        sources: [{ label: 'OU — The Magic of 8 (Maharal)', url: 'https://www.ou.org/holidays/magic-8-chanukah-maharal/' }],
      },
      {
        text: 'The Talmud says that the harp of the days of the Messiah will have eight strings.',
        sources: [sefaria('Talmud, Arakhin 13b', 'Arakhin.13b')],
      },
    ],
  },
  9: {
    letter: {
      glyph: 'ט',
      name: 'Tet',
      meaning: {
        text: 'Value 9. According to the Talmud, seeing a Tet in a dream is a good sign, because the first Tet in the Torah appears in tov, “good”: “and God saw the light, that it was good.”',
        sources: [sefaria('Talmud, Bava Kamma 55a', 'Bava_Kamma.55a'), sefaria('Genesis 1:4', 'Genesis.1.4')],
      },
    },
    jewish: [
      {
        text: 'The 9th of Av (Tisha B’Av) is the day of national mourning on which, according to the Mishnah, five calamities took place, among them the destruction of both Temples.',
        sources: [sefaria('Mishnah Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
      {
        text: 'A later Kabbalistic reading (reduced gematria, not Talmudic): Emet (אמת, “truth”) adds up to 441, and 4+4+1 = 9. Since multiples of 9 always reduce to 9, it is used as an image of truth that does not change.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    ],
  },
}

/** Master numbers: they appear only as an intermediate step of the calculation. */
export const MASTER_TRADITION: Record<number, Fact> = {
  11: {
    text: 'The incense of the Temple (ketoret) was made of eleven spices. In Hebrew, 11 is written יא (Yud-Aleph).',
    sources: [sefaria('Talmud, Keritot 6a', 'Keritot.6a')],
  },
  22: {
    text: 'The Hebrew alphabet has 22 letters. Sefer Yetzirah teaches that God engraved and combined them, and that with them He formed all of creation. Together with the 10 sefirot they make up the “32 paths of wisdom.”',
    sources: [sefaria('Sefer Yetzirah 1:1-2', 'Sefer_Yetzirah.1.1'), sefaria('Sefer Yetzirah 2:2', 'Sefer_Yetzirah.2.2')],
  },
  33: {
    text: 'Lag BaOmer is the 33rd day of the counting of the Omer (ל״ג: Lamed 30 + Gimel 3). By tradition it is associated with Rabbi Shimon bar Yochai, to whom the Zohar is attributed; historians place the Zohar in the 13th century (Moses de León).',
    sources: [
      { label: 'Britannica — Lag ba-Omer', url: 'https://www.britannica.com/topic/Lag-ba-Omer' },
      { label: 'Chabad.org — Lag BaOmer', url: 'https://www.chabad.org/library/article_cdo/aid/679300/jewish/What-Is-Lag-BaOmer.htm' },
    ],
  },
}

export const GENERAL_SOURCES: Source[] = [
  { label: 'Sefaria — library of Jewish texts (Torah, Talmud, Midrash, Sefer Yetzirah)', url: 'https://www.sefaria.org' },
  sefaria('Sefer Yetzirah 1:1-2 — 32 paths: 10 sefirot and 22 letters', 'Sefer_Yetzirah.1.1'),
  JVL_SEFIROT,
  CHABAD_SEFIROT,
  { label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' },
  { label: 'Encyclopaedia Britannica — Numerology', url: 'https://www.britannica.com/topic/numerology' },
  { label: 'L. Dow Balliett, The Philosophy of Numbers (1908) — origin of modern “Pythagorean” numerology' },
  { label: 'Juno Jordan, Numerology: The Romance in Your Name (1965)' },
  { label: 'Matthew Oliver Goodwin, Numerology: The Complete Guide, vol. 1 (1981) — rule for Y' },
  { label: 'Hans Decoz, Numerology: Key to Your Inner Self (1994)' },
  { label: 'Underwood Dudley, Numerology, or What Pythagoras Wrought (1997) — a critical view' },
]
