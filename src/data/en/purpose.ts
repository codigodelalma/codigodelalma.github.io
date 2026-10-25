// “Why you came”: teachings on the soul's mission, verified in the original text.
import type { Fact, Source } from '../tradition.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

export const TEACHINGS: (Fact & { title: string })[] = [
  {
    title: 'You are one of a kind',
    text: 'God stamped every person with the seal of Adam, and no one is like another. That is why each person must say: “for my sake the world was created.”',
    sources: [sefaria('Mishnah Sanhedrin 4:5', 'Mishnah_Sanhedrin.4.5')],
  },
  {
    title: 'Your soul comes to complete something',
    text: 'According to the Arizal, the soul returns to this world to complete the commandments it lacked: this is its tikkun, its repair. (Kabbalistic teaching of the Arizal, written by Rabbi Chaim Vital.)',
    sources: [
      sefaria("Sha'ar HaGilgulim, Introduction 11", "Sha'ar_HaGilgulim.11.14"),
      sefaria("Sha'ar HaGilgulim, Introduction 16", "Sha'ar_HaGilgulim.16.1"),
    ],
  },
  {
    title: 'You choose',
    text: '“I have set before you life and death… choose life.” Rabbi Yochanan teaches that “there is no mazal for Israel”: the stars do not decide for you.',
    sources: [sefaria('Deuteronomy 30:19', 'Deuteronomy.30.19'), sefaria('Talmud, Shabbat 156a', 'Shabbat.156a.12')],
  },
  {
    title: 'Step by step',
    text: '“It is not your duty to finish the work, but neither are you free to desist from it.”',
    sources: [sefaria('Mishnah Avot 2:16', 'Pirkei_Avot.2.16')],
  },
]
