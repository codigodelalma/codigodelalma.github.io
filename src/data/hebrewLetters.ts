// Las 22 letras hebreas: nombre, valor, significado del nombre y enseñanza del Talmud (Shabat 104a).
// Verificado el 26/10/2026: Shabat 104a en Sefaria (arameo y edición William Davidson); significado de los
// nombres en la Jewish Encyclopedia (1906) y el Klein Dictionary (Sefaria). Donde las fuentes dudan, se dice.
import type { Source } from './tradition.ts'

export interface HebrewLetterInfo {
  value: number
  es: { name: string; nameMeaning?: string; talmud?: string }
  en: { name: string; nameMeaning?: string; talmud?: string }
  nameSource?: Source
  /** Segunda fuente cuando las dos no coinciden */
  nameSource2?: Source
  talmudSource?: Source
}

/** Formas finales → su letra (mismo valor en Mispar Hejrají) */
export const FINAL_TO_BASE: Record<string, string> = { 'ך': 'כ', 'ם': 'מ', 'ן': 'נ', 'ף': 'פ', 'ץ': 'צ' }

export const baseLetter = (ch: string) => FINAL_TO_BASE[ch] ?? ch

export const HEBREW_LETTERS: Record<string, HebrewLetterInfo> = {
  'א': {
    value: 1,
    es: {
      name: 'Álef',
      nameMeaning: 'Buey: el nombre es la forma pausal de élef («bueyes»); la letra antigua representaba la cabeza de un buey.',
      talmud: 'Junto con Bet: «Álef Bet» se lee alef biná, «aprende sabiduría».',
    },
    en: {
      name: 'Aleph',
      nameMeaning: "Ox: the name is the pausal form of elef (\"oxen\"); the ancient letter depicted an ox's head.",
      talmud: 'Paired with Bet: "Alef Bet" is read alef binah, "learn wisdom."',
    },
    nameSource: { label: 'Klein Dictionary, אָלֶף (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%90%D6%B8%D6%BD%D7%9C%D6%B6%D7%A3.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:4 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.4' },
  },
  'ב': {
    value: 2,
    es: {
      name: 'Bet',
      nameMeaning: 'Casa (báyit); la letra antigua representaba una casa.',
      talmud: 'Junto con Álef: alef biná, «aprende sabiduría».',
    },
    en: {
      name: 'Bet',
      nameMeaning: 'House (bayit); the ancient letter depicted a house.',
      talmud: 'Paired with Aleph: alef binah, "learn wisdom."',
    },
    nameSource: { label: 'Klein Dictionary, בֵּית (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%91%D6%B5%D6%BC%D7%99%D7%AA.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:4 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.4' },
  },
  'ג': {
    value: 3,
    es: {
      name: 'Guímel',
      nameMeaning: 'Camello (gamal), quizá porque la letra antigua se parece al cuello de un camello.',
      talmud: 'Junto con Dálet: gemol dalim, «haz el bien a los pobres». La pata de la Guímel se extiende hacia la Dálet porque quien hace el bien corre tras los pobres.',
    },
    en: {
      name: 'Gimel',
      nameMeaning: "Camel (gamal), perhaps because the ancient letter resembles a camel's neck.",
      talmud: "Paired with Dalet: gemol dalim, \"be kind to the poor.\" Gimel's leg stretches toward Dalet because the one who does kindness runs after the poor.",
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Gimel', url: 'https://www.jewishencyclopedia.com/articles/6678-gimel' },
    talmudSource: { label: 'Talmud, Shabbat 104a:4 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.4' },
  },
  'ד': {
    value: 4,
    es: {
      name: 'Dálet',
      nameMeaning: 'Puerta (délet), por la forma de la letra fenicia.',
      talmud: 'Junto con Guímel (gemol dalim). Su pata se extiende hacia la Guímel para que la persona pobre se deje encontrar, y su cara se aparta para enseñar que la ayuda se da en secreto, sin avergonzar.',
    },
    en: {
      name: 'Dalet',
      nameMeaning: 'Door (delet), from the shape of the Phoenician letter.',
      talmud: 'Paired with Gimel (gemol dalim). Its leg stretches toward Gimel so that people in need let themselves be found, and it faces away to teach that help is given discreetly, without shaming.',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Dalet', url: 'https://www.jewishencyclopedia.com/articles/4853-dalet' },
    talmudSource: { label: 'Talmud, Shabbat 104a:4 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.4' },
  },
  'ה': {
    value: 5,
    es: {
      name: 'He',
      nameMeaning: 'Incierto: de origen desconocido.',
      talmud: 'Junto con Vav: «He Vav, ese es el Nombre del Santo, bendito sea».',
    },
    en: {
      name: 'He',
      nameMeaning: 'Uncertain: of unknown origin.',
      talmud: 'Paired with Vav: "He Vav — that is the Name of the Holy One, blessed be He."',
    },
    nameSource: { label: 'Klein Dictionary, הֵא (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%94%D6%B5%D7%90_%E1%B4%B5.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ו': {
    value: 6,
    es: {
      name: 'Vav',
      nameMeaning: 'Gancho o clavo (probable); la letra fenicia se parece a un gancho.',
      talmud: 'Junto con He: «ese es el Nombre del Santo, bendito sea».',
    },
    en: {
      name: 'Vav',
      nameMeaning: 'Hook or nail (probable); the Phoenician letter resembles a hook.',
      talmud: 'Paired with He: "that is the Name of the Holy One, blessed be He."',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Waw', url: 'https://www.jewishencyclopedia.com/articles/14651-waw' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ז': {
    value: 7,
    es: {
      name: 'Zain',
      nameMeaning: 'Incierto. Klein propone «arma».',
      talmud: 'En el grupo Zain-Jet-Tet-Yud-Kaf-Lámed: «si haces así, el Santo, bendito sea, te alimenta (zan)…». La Zain corresponde a zan, «alimenta».',
    },
    en: {
      name: 'Zayin',
      nameMeaning: 'Uncertain. Klein proposes "weapon."',
      talmud: 'In the group Zayin-Chet-Tet-Yod-Kaf-Lamed: "if you do so, the Holy One, blessed be He, sustains you (zan)…". Zayin stands for zan, "sustains."',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Zayin', url: 'https://www.jewishencyclopedia.com/articles/15182-zayin' },
    nameSource2: { label: 'Klein Dictionary, זַיִן II (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%96%D6%B7%D6%BD%D7%99%D6%B4%D7%9F_%E1%B4%B5%E1%B4%B5.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ח': {
    value: 8,
    es: {
      name: 'Jet',
      nameMeaning: 'Incierto; quizá «cerca» o «valla».',
      talmud: 'En el mismo grupo: Dios «te muestra favor» (jan).',
    },
    en: {
      name: 'Chet',
      nameMeaning: 'Uncertain; perhaps "hedge" or "fence."',
      talmud: 'In the same group: God "shows you favor" (chan).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Ḥet', url: 'https://www.jewishencyclopedia.com/articles/7653-het' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ט': {
    value: 9,
    es: {
      name: 'Tet',
      nameMeaning: 'Incierto.',
      talmud: 'En el mismo grupo: Dios «te hace el bien» (metiv).',
    },
    en: {
      name: 'Tet',
      nameMeaning: 'Uncertain.',
      talmud: 'In the same group: God "does good to you" (metiv).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Ṭet', url: 'https://www.jewishencyclopedia.com/articles/14345-tet' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'י': {
    value: 10,
    es: {
      name: 'Yud',
      nameMeaning: 'Mano (yad); la letra fenicia se parece remotamente a una mano.',
      talmud: 'En el mismo grupo: Dios «te da una herencia» (yerushá).',
    },
    en: {
      name: 'Yod',
      nameMeaning: 'Hand (yad); the Phoenician letter remotely resembles a hand.',
      talmud: 'In the same group: God "gives you an inheritance" (yerushah).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Yod', url: 'https://www.jewishencyclopedia.com/articles/15114-yod' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'כ': {
    value: 20,
    es: {
      name: 'Kaf',
      nameMeaning: 'Hueco de la mano (palma).',
      talmud: 'Con Lámed, cierra el grupo: Dios «te ata una corona (kéter) en el mundo venidero». Sobre la Kaf final (ך) no hay enseñanza propia; solo figura entre las cinco formas finales (מנצפ״ך), que según la Guemará ya existían, se olvidaron y los profetas las restablecieron (104a:1-2).',
    },
    en: {
      name: 'Kaf',
      nameMeaning: 'Hollow of the hand (palm).',
      talmud: 'With Lamed, it closes the group: God "ties a crown (keter) for you in the World to Come." Final Kaf (ך) gets no specific teaching; it is only listed among the five final forms (מנצפ״ך), which the Gemara says already existed, were forgotten and were re-established by the prophets (104a:1-2).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Kaf', url: 'https://www.jewishencyclopedia.com/articles/9115-kaf' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ל': {
    value: 30,
    es: {
      name: 'Lámed',
      nameMeaning: 'Incierto según la Jewish Encyclopedia. Klein lo deriva de lamad («acostumbrar, aprender», de un sentido original «aguijonear») y lo traduce como «probablemente la vara del maestro».',
      talmud: 'Con Kaf: «…en el mundo venidero» (la-olam ha-ba).',
    },
    en: {
      name: 'Lamed',
      nameMeaning: 'Uncertain per the Jewish Encyclopedia. Klein derives it from lamad ("accustom, learn", originally "to prick, goad") and glosses it "probably the rod of the teacher."',
      talmud: "With Kaf: \"…in the World to Come\" (la'olam ha-ba).",
    },
    nameSource: { label: 'Klein Dictionary, לָמֶד (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%9C%D6%B8%D6%BD%D7%9E%D6%B6%D7%93.1' },
    nameSource2: { label: 'Jewish Encyclopedia (1906): Lamed', url: 'https://www.jewishencyclopedia.com/articles/9592-lamed' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'מ': {
    value: 40,
    es: {
      name: 'Mem',
      nameMeaning: 'Agua (máyim); la forma primitiva parecía olas.',
      talmud: 'La Mem abierta (מ) y la Mem cerrada (ם) enseñan que hay un dicho abierto y un dicho cerrado (oculto). Además, Rav Jisdá dice que la Mem final y la Sámej de las Tablas, talladas de lado a lado, se sostenían por milagro (104a:1, 3).',
    },
    en: {
      name: 'Mem',
      nameMeaning: 'Water (mayim); the primitive shape resembled waves.',
      talmud: 'Open Mem (מ) and closed Mem (ם) teach that there is an open saying and a closed (hidden) saying. Rav Chisda also says the final Mem and Samekh of the Tablets, carved right through, stood by a miracle (104a:1, 3).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Mem', url: 'https://www.jewishencyclopedia.com/articles/10611-mem' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'נ': {
    value: 50,
    es: {
      name: 'Nun',
      nameMeaning: 'Pez.',
      talmud: 'La Nun curvada (נ) y la Nun recta (ן): la persona fiel que hoy es humilde («curvada») al final será reconocida («recta») (neemán kafuf, neemán pashut).',
    },
    en: {
      name: 'Nun',
      nameMeaning: 'Fish.',
      talmud: "Bent Nun (נ) and straight Nun (ן): the faithful person who is humble (\"bent\") now will in the end stand tall (\"straight\") (ne'eman kafuf, ne'eman pashut).",
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Nun', url: 'https://www.jewishencyclopedia.com/articles/11622-nun' },
    talmudSource: { label: 'Talmud, Shabbat 104a:5 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.5' },
  },
  'ס': {
    value: 60,
    es: {
      name: 'Sámej',
      nameMeaning: 'Probablemente «apoyo, sostén».',
      talmud: 'Junto con Ayin: semoj aniyim, «sostén a los pobres». Otra versión: «haz señales (simanim) en la Torá y adquiérela». La Sámej de las Tablas se sostenía por milagro (104a:1).',
    },
    en: {
      name: 'Samekh',
      nameMeaning: 'Probably "prop, support."',
      talmud: 'Paired with Ayin: semokh aniyim, "support the poor." Another version: "make mnemonic signs (simanim) in the Torah and acquire it." The Samekh of the Tablets stood by a miracle (104a:1).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Samek', url: 'https://www.jewishencyclopedia.com/articles/13064-samek' },
    talmudSource: { label: 'Talmud, Shabbat 104a:6 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.6' },
  },
  'ע': {
    value: 70,
    es: {
      name: 'Ayin',
      nameMeaning: 'Ojo; en su forma antigua era un círculo, dibujo de un ojo.',
      talmud: 'Junto con Sámej: semoj aniyim, «sostén a los pobres» (o «haz señales en la Torá»).',
    },
    en: {
      name: 'Ayin',
      nameMeaning: 'Eye; its early form was a circle depicting an eye.',
      talmud: 'Paired with Samekh: semokh aniyim, "support the poor" (or "make signs in the Torah").',
    },
    nameSource: { label: "Jewish Encyclopedia (1906): 'Ayin", url: 'https://www.jewishencyclopedia.com/articles/2188-ayin' },
    talmudSource: { label: 'Talmud, Shabbat 104a:6 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.6' },
  },
  'פ': {
    value: 80,
    es: {
      name: 'Pe',
      nameMeaning: 'Boca (pe).',
      talmud: 'La Pe curvada (פ) y la Pe recta (ף): boca abierta y boca cerrada; hay momentos para hablar y momentos para callar.',
    },
    en: {
      name: 'Pe',
      nameMeaning: 'Mouth (peh).',
      talmud: 'Bent Pe (פ) and straight Pe (ף): an open mouth and a closed mouth; there are times to speak and times to be silent.',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Pe', url: 'https://www.jewishencyclopedia.com/articles/11963-pe' },
    talmudSource: { label: 'Talmud, Shabbat 104a:6 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.6' },
  },
  'צ': {
    value: 90,
    es: {
      name: 'Tsadi',
      nameMeaning: 'Probablemente «anzuelo», por comparación con el siríaco y el árabe (raíz tsud, «cazar, atrapar»). Relacionarla con tsadik («justo») es una lectura homilética, no etimológica.',
      talmud: 'La Tsadi curvada (צ) y la Tsadi recta (ץ): la persona justa que hoy es humilde al final será reconocida. La Guemará añade que esta curvatura duplica la de la Nun, y de ahí aprende que la Torá se dio con humildad y temor reverente.',
    },
    en: {
      name: 'Tsadi',
      nameMeaning: 'Probably "fishhook", by comparison with Syriac and Arabic (root tsud, "to hunt, catch"). Linking it to tzaddik ("righteous") is homiletic, not etymological.',
      talmud: "Bent Tsadi (צ) and straight Tsadi (ץ): the righteous person who is humble now will in the end be recognized. The Gemara notes this adds a second bending to Nun's, and learns that the Torah was given with humility and awe.",
    },
    nameSource: { label: 'Klein Dictionary, צָדֵי (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%A6%D6%B8%D7%93%D6%B5%D7%99.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:6 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.6' },
  },
  'ק': {
    value: 100,
    es: {
      name: 'Kuf',
      nameMeaning: 'Incierto. Klein propone «ojo de la aguja». Ninguna de las dos fuentes respalda «mono» ni «nuca».',
      talmud: 'Kuf = kadosh, «santo» (Dios). Su corona se vuelve hacia la Resh: si la persona malvada se arrepiente, Dios le ata una corona como la Suya. Su pata está suspendida para que, si se arrepiente, pueda entrar por esa abertura (104a:7-8).',
    },
    en: {
      name: 'Qof',
      nameMeaning: 'Uncertain. Klein proposes "eye of a needle." Neither source supports "monkey" or "back of the head."',
      talmud: 'Kuf = kadosh, "holy" (God). Its crown turns toward Resh: if the wicked person repents, God ties a crown for them like His own. Its leg hangs free so that, if they repent, they can enter through that opening (104a:7-8).',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Ḳof', url: 'https://www.jewishencyclopedia.com/articles/9411-kof' },
    nameSource2: { label: 'Klein Dictionary, קוֹף II (Sefaria)', url: 'https://www.sefaria.org/Klein_Dictionary,_%D7%A7%D7%95%D6%B9%D7%A3_%E1%B4%B5%E1%B4%B5.1' },
    talmudSource: { label: 'Talmud, Shabbat 104a:7 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.7' },
  },
  'ר': {
    value: 200,
    es: {
      name: 'Resh',
      nameMeaning: 'Cabeza (arameo resh; hebreo rosh).',
      talmud: 'Resh = rashá, «persona malvada». La Kuf le da la espalda porque Dios dice: «No puedo mirar a la persona malvada».',
    },
    en: {
      name: 'Resh',
      nameMeaning: 'Head (Aramaic resh; Hebrew rosh).',
      talmud: 'Resh = rasha, "a wicked person." Kuf faces away from it because God says: "I cannot look at the wicked."',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Resh', url: 'https://www.jewishencyclopedia.com/articles/12687-resh' },
    talmudSource: { label: 'Talmud, Shabbat 104a:7 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.7' },
  },
  'ש': {
    value: 300,
    es: {
      name: 'Shin',
      nameMeaning: 'Diente (shen).',
      talmud: 'Shin = shéker, «mentira». Las letras de shéker (ש-ק-ר) son vecinas en el alfabeto porque la mentira abunda, y se apoyan en un solo pie porque la mentira no se sostiene.',
    },
    en: {
      name: 'Shin',
      nameMeaning: 'Tooth (shen).',
      talmud: 'Shin = sheker, "falsehood." The letters of sheker (ש-ק-ר) sit next to each other because falsehood is common, and stand on one foot because falsehood does not endure.',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Shin', url: 'https://www.jewishencyclopedia.com/articles/13581-shin' },
    talmudSource: { label: 'Talmud, Shabbat 104a:9 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.9' },
  },
  'ת': {
    value: 400,
    es: {
      name: 'Tav',
      nameMeaning: 'Marca, señal (tav).',
      talmud: 'Tav = emet, «verdad». Las letras de emet (א-מ-ת) están lejos entre sí porque la verdad es difícil de hallar, y tienen bases anchas como ladrillos porque la verdad permanece.',
    },
    en: {
      name: 'Tav',
      nameMeaning: 'Mark, sign (tav).',
      talmud: 'Tav = emet, "truth." The letters of emet (א-מ-ת) are far apart because truth is hard to find, and rest on brick-like bases because truth endures.',
    },
    nameSource: { label: 'Jewish Encyclopedia (1906): Taw', url: 'https://www.jewishencyclopedia.com/articles/14270-taw' },
    talmudSource: { label: 'Talmud, Shabbat 104a:9 (Sefaria)', url: 'https://www.sefaria.org/Shabbat.104a.9' },
  },
}
