// Kabbalah y tradición judía. Cada afirmación lleva su fuente verificable.
// Cuando un dato es una enseñanza posterior (jasídica, del Maharal, homilética) se indica en el texto.

export interface Source {
  label: string
  url?: string
}

export interface Fact {
  text: string
  sources: Source[]
}

export interface Sefira {
  n: number
  name: string
  hebrew: string
  translation: string
  quality: string
  sources: Source[]
}

export interface Tradition {
  letter: { glyph: string; name: string; meaning: Fact }
  jewish: Fact[]
}

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const CHABAD_SEFIROT: Source = {
  label: 'Chabad.org — Las sefirot',
  url: 'https://www.chabad.org/library/article_cdo/aid/380651',
}
const JVL_SEFIROT: Source = {
  label: 'Jewish Virtual Library — Sefirot',
  url: 'https://www.jewishvirtuallibrary.org/sefirot',
}
const SHABBAT_104A = sefaria('Talmud, Shabat 104a', 'Shabbat.104a')

export const SEFIROT: Sefira[] = [
  {
    n: 1,
    name: 'Kéter',
    hebrew: 'כתר',
    translation: 'Corona',
    quality: 'La sefirá más alta: la voluntad primordial, anterior a todo pensamiento. Es la raíz de la que surgen las demás.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 2,
    name: 'Jojmá',
    hebrew: 'חכמה',
    translation: 'Sabiduría',
    quality: 'El destello inicial de la idea, la intuición que aún no tiene forma.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 3,
    name: 'Biná',
    hebrew: 'בינה',
    translation: 'Entendimiento',
    quality: 'La capacidad de desarrollar, analizar y dar estructura a la idea recibida de Jojmá.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 4,
    name: 'Jésed',
    hebrew: 'חסד',
    translation: 'Bondad',
    quality: 'El amor que se expande y da sin medida; generosidad y benevolencia.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 5,
    name: 'Guevurá',
    hebrew: 'גבורה',
    translation: 'Fuerza · Rigor',
    quality: 'También llamada Din (juicio): el límite, la disciplina y la contención que equilibran a Jésed.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 6,
    name: 'Tiféret',
    hebrew: 'תפארת',
    translation: 'Belleza · Armonía',
    quality: 'El centro del árbol: integra la bondad y el rigor en equilibrio; se asocia con la compasión y la verdad.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 7,
    name: 'Nétsaj',
    hebrew: 'נצח',
    translation: 'Victoria · Eternidad',
    quality: 'La perseverancia y la iniciativa que lleva la bondad a la acción y la sostiene en el tiempo.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 8,
    name: 'Hod',
    hebrew: 'הוד',
    translation: 'Esplendor · Gloria',
    quality: 'La receptividad, el reconocimiento y la humildad; complementa a Nétsaj.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 9,
    name: 'Yesod',
    hebrew: 'יסוד',
    translation: 'Fundamento',
    quality: 'El canal que reúne todas las sefirot superiores y las transmite a Maljut; vínculo y conexión.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
  {
    n: 10,
    name: 'Maljut',
    hebrew: 'מלכות',
    translation: 'Reino',
    quality: 'La manifestación de lo divino en el mundo concreto; la sefirá que recibe y realiza.',
    sources: [CHABAD_SEFIROT, JVL_SEFIROT],
  },
]

export const TRADITION: Record<number, Tradition> = {
  1: {
    letter: {
      glyph: 'א',
      name: 'Álef',
      meaning: {
        text: 'Primera letra del alefato, con valor 1. Es una letra muda: no tiene sonido propio. El Talmud la lee como «aprende sabiduría» (alef biná). La enseñanza jasídica la relaciona con aluf, «maestro» o «jefe».',
        sources: [SHABBAT_104A, { label: 'Chabad.org — Álef', url: 'https://www.chabad.org/library/article_cdo/aid/137073/jewish/Aleph.htm' }],
      },
    },
    jewish: [
      {
        text: 'El Shemá, la declaración central de la fe judía, proclama la unidad de Dios: «Escucha, Israel: el Señor es nuestro Dios, el Señor es Uno (Ejad)».',
        sources: [sefaria('Deuteronomio 6:4', 'Deuteronomy.6.4')],
      },
      {
        text: 'La palabra Ejad (אחד, «uno») suma 13 en guematría (1+8+4). Una lectura homilética muy citada la equipara con Ahavá (אהבה, «amor»), que también suma 13.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    ],
  },
  2: {
    letter: {
      glyph: 'ב',
      name: 'Bet',
      meaning: {
        text: 'Valor 2; su nombre significa «casa» (bayit). Con ella empieza la Torá (Bereshit). El Midrash explica que la Bet está cerrada por tres lados y abierta hacia adelante, que es la inicial de berajá (bendición) y que su valor alude a dos mundos: este y el venidero.',
        sources: [sefaria('Bereshit Rabá 1:10', 'Bereshit_Rabbah.1.10')],
      },
    },
    jewish: [
      {
        text: 'Moisés recibió dos Tablas del Testimonio, escritas por ambos lados.',
        sources: [sefaria('Éxodo 31:18', 'Exodus.31.18'), sefaria('Éxodo 32:15', 'Exodus.32.15')],
      },
      {
        text: 'El mandamiento del Shabat aparece en dos formas: «Recuerda» (Zajor) y «Guarda» (Shamor). Según el Talmud, ambas fueron dichas en una sola palabra.',
        sources: [sefaria('Éxodo 20:8', 'Exodus.20.8'), sefaria('Deuteronomio 5:12', 'Deuteronomy.5.12'), sefaria('Talmud, Shevuot 20b', 'Shevuot.20b')],
      },
      {
        text: 'La costumbre de encender dos luces de Shabat se explica como una por Zajor y otra por Shamor.',
        sources: [sefaria('Shulján Aruj, Óraj Jaím 263:1', 'Shulchan_Arukh,_Orach_Chayim.263.1')],
      },
    ],
  },
  3: {
    letter: {
      glyph: 'ג',
      name: 'Guímel',
      meaning: {
        text: 'Valor 3. El Talmud lee Guímel-Dálet como guemol dalim, «haz el bien a los pobres», y explica que la pata de la Guímel se extiende hacia la Dálet porque quien hace bondad corre tras el necesitado.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'Solo a tres se les llama patriarcas: Abraham, Isaac y Jacob.',
        sources: [sefaria('Talmud, Berajot 16b', 'Berakhot.16b')],
      },
      {
        text: 'Se reza tres veces al día: Shajarit, Minjá y Arvit. Según una opinión, los instituyeron los tres patriarcas.',
        sources: [sefaria('Talmud, Berajot 26b', 'Berakhot.26b')],
      },
      {
        text: 'El Talmud describe «una Torá triple (Torá, Profetas, Escritos), dada a un pueblo triple (cohen, leví, israelita), por medio de un tercero (Moisés), el tercer día, en el tercer mes».',
        sources: [sefaria('Talmud, Shabat 88a', 'Shabbat.88a')],
      },
      {
        text: '«El cordón de tres dobleces no se rompe pronto».',
        sources: [sefaria('Eclesiastés 4:12', 'Ecclesiastes.4.12')],
      },
    ],
  },
  4: {
    letter: {
      glyph: 'ד',
      name: 'Dálet',
      meaning: {
        text: 'Valor 4. Su nombre se relaciona con délet, «puerta». En el Talmud representa al dal, el pobre que recibe la bondad de la Guímel.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'Las cuatro matriarcas: Sara, Rebeca, Raquel y Lea.',
        sources: [sefaria('Talmud, Berajot 16b', 'Berakhot.16b')],
      },
      {
        text: 'En el Séder de Pésaj se beben cuatro copas de vino y se hacen las cuatro preguntas. El Talmud de Jerusalén vincula las copas con las cuatro expresiones de redención de Éxodo 6:6-7.',
        sources: [sefaria('Mishná Pesajim 10:1', 'Mishnah_Pesachim.10.1'), sefaria('Mishná Pesajim 10:4', 'Mishnah_Pesachim.10.4'), sefaria('Éxodo 6:6-7', 'Exodus.6.6-7')],
      },
      {
        text: 'El Nombre de Dios de cuatro letras, el Tetragrámaton (YHVH), y las cuatro especies de Sucot.',
        sources: [sefaria('Levítico 23:40', 'Leviticus.23.40')],
      },
    ],
  },
  5: {
    letter: {
      glyph: 'ה',
      name: 'He',
      meaning: {
        text: 'Valor 5. Es la letra que Dios añadió a los nombres de Abram y Sarai, que pasaron a ser Abraham y Sara al sellarse el pacto.',
        sources: [sefaria('Génesis 17:5', 'Genesis.17.5'), sefaria('Génesis 17:15', 'Genesis.17.15')],
      },
    },
    jewish: [
      {
        text: 'La Torá escrita consta de cinco libros (Jumash): Génesis, Éxodo, Levítico, Números y Deuteronomio.',
        sources: [{ label: 'Jewish Virtual Library — Torah', url: 'https://www.jewishvirtuallibrary.org/the-torah' }],
      },
      {
        text: 'El Midrash enseña que el alma recibe cinco nombres: néfesh, rúaj, neshamá, jayá y yejidá.',
        sources: [sefaria('Bereshit Rabá 14:9', 'Bereshit_Rabbah.14.9')],
      },
      {
        text: 'En Yom Kipur se observan cinco abstenciones.',
        sources: [sefaria('Mishná Yomá 8:1', 'Mishnah_Yoma.8.1')],
      },
    ],
  },
  6: {
    letter: {
      glyph: 'ו',
      name: 'Vav',
      meaning: {
        text: 'Valor 6. Su nombre significa «gancho» (los vavim que sostenían las cortinas del Tabernáculo) y como prefijo funciona como la conjunción «y»: la letra que une.',
        sources: [sefaria('Éxodo 27:10', 'Exodus.27.10')],
      },
    },
    jewish: [
      {
        text: 'El mundo fue creado en seis días, y en el séptimo Dios descansó.',
        sources: [sefaria('Génesis 1', 'Genesis.1'), sefaria('Éxodo 20:11', 'Exodus.20.11')],
      },
      {
        text: 'La Mishná se organiza en seis órdenes (Shishá Sedarim, de donde viene la sigla «Shas»): Zeraím, Moed, Nashim, Nezikín, Kodashim y Tohorot.',
        sources: [{ label: 'Jewish Virtual Library — Mishnah', url: 'https://www.jewishvirtuallibrary.org/mishnah' }],
      },
    ],
  },
  7: {
    letter: {
      glyph: 'ז',
      name: 'Zayin',
      meaning: {
        text: 'Valor 7. Su nombre significa «arma». El Talmud la relaciona con zan, «alimentar»: el Santo, bendito sea, sustenta.',
        sources: [SHABBAT_104A],
      },
    },
    jewish: [
      {
        text: 'El séptimo día, Shabat, fue bendecido y santificado.',
        sources: [sefaria('Génesis 2:2-3', 'Genesis.2.2-3')],
      },
      {
        text: 'La Menorá del Tabernáculo tenía siete lámparas.',
        sources: [sefaria('Éxodo 25:31-37', 'Exodus.25.31-37')],
      },
      {
        text: 'El séptimo año es Shmitá, año de descanso de la tierra, y se cuentan siete semanas del Ómer hasta Shavuot.',
        sources: [sefaria('Levítico 25:1-7', 'Leviticus.25.1-7'), sefaria('Levítico 23:15', 'Leviticus.23.15')],
      },
      {
        text: 'El Midrash enseña: «todos los séptimos son amados».',
        sources: [sefaria('Vayikrá Rabá 29:11', 'Vayikra_Rabbah.29.11')],
      },
    ],
  },
  8: {
    letter: {
      glyph: 'ח',
      name: 'Jet',
      meaning: {
        text: 'Valor 8. Junto con la Yud (10) forma la palabra Jai (חי), «vida», que suma 18.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    },
    jewish: [
      {
        text: 'El Brit Milá (circuncisión) se realiza al octavo día.',
        sources: [sefaria('Génesis 17:12', 'Genesis.17.12'), sefaria('Levítico 12:3', 'Leviticus.12.3')],
      },
      {
        text: 'Janucá se celebra durante ocho días, en recuerdo del aceite que alcanzó para ocho días.',
        sources: [sefaria('Talmud, Shabat 21b', 'Shabbat.21b')],
      },
      {
        text: 'Enseñanza del Maharal de Praga (s. XVI): si el 7 representa el orden natural de la creación, el 8 representa lo que está por encima de la naturaleza.',
        sources: [{ label: 'OU — The Magic of 8 (Maharal)', url: 'https://www.ou.org/holidays/magic-8-chanukah-maharal/' }],
      },
      {
        text: 'El Talmud dice que el arpa de los días del Mesías tendrá ocho cuerdas.',
        sources: [sefaria('Talmud, Arajín 13b', 'Arakhin.13b')],
      },
    ],
  },
  9: {
    letter: {
      glyph: 'ט',
      name: 'Tet',
      meaning: {
        text: 'Valor 9. Según el Talmud, ver una Tet en sueños es buena señal, porque la primera Tet de la Torá aparece en tov, «bueno»: «y vio Dios que la luz era buena».',
        sources: [sefaria('Talmud, Bava Kama 55a', 'Bava_Kamma.55a'), sefaria('Génesis 1:4', 'Genesis.1.4')],
      },
    },
    jewish: [
      {
        text: 'El 9 de Av (Tishá BeAv) es el día de duelo nacional en que, según la Mishná, ocurrieron cinco calamidades, entre ellas la destrucción de ambos Templos.',
        sources: [sefaria('Mishná Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
      {
        text: 'Lectura cabalística posterior (guematría reducida, no talmúdica): Émet (אמת, «verdad») suma 441, y 4+4+1 = 9. Como los múltiplos del 9 siempre se reducen a 9, se usa como imagen de que la verdad no cambia.',
        sources: [{ label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' }],
      },
    ],
  },
}

/** Números maestros: aparecen solo como paso intermedio del cálculo. */
export const MASTER_TRADITION: Record<number, Fact> = {
  11: {
    text: 'El incienso del Templo (ketoret) se componía de once especias. En hebreo, 11 se escribe יא (Yud-Álef).',
    sources: [sefaria('Talmud, Kritot 6a', 'Keritot.6a')],
  },
  22: {
    text: 'El alfabeto hebreo tiene 22 letras. El Séfer Yetsirá enseña que Dios las grabó y combinó, y que con ellas formó todo lo creado. Junto a las 10 sefirot forman los «32 senderos de sabiduría».',
    sources: [sefaria('Séfer Yetsirá 1:1-2', 'Sefer_Yetzirah.1.1'), sefaria('Séfer Yetsirá 2:2', 'Sefer_Yetzirah.2.2')],
  },
  33: {
    text: 'Lag BaÓmer es el día 33 del conteo del Ómer (ל״ג: Lámed 30 + Guímel 3). Por tradición se asocia con Rabí Shimón bar Yojai, a quien se atribuye el Zóhar; los historiadores lo sitúan en el siglo XIII (Moisés de León).',
    sources: [
      { label: 'Britannica — Lag ba-Omer', url: 'https://www.britannica.com/topic/Lag-ba-Omer' },
      { label: 'Chabad.org — Lag BaOmer', url: 'https://www.chabad.org/library/article_cdo/aid/679300/jewish/What-Is-Lag-BaOmer.htm' },
    ],
  },
}

export const GENERAL_SOURCES: Source[] = [
  { label: 'Sefaria — biblioteca de textos judíos (Torá, Talmud, Midrash, Séfer Yetsirá)', url: 'https://www.sefaria.org' },
  sefaria('Séfer Yetsirá 1:1-2 — 32 senderos: 10 sefirot y 22 letras', 'Sefer_Yetzirah.1.1'),
  JVL_SEFIROT,
  CHABAD_SEFIROT,
  { label: 'Jewish Virtual Library — Gematria', url: 'https://www.jewishvirtuallibrary.org/gematria' },
  { label: 'Encyclopaedia Britannica — Numerology', url: 'https://www.britannica.com/topic/numerology' },
  { label: 'L. Dow Balliett, The Philosophy of Numbers (1908) — origen de la numerología «pitagórica» moderna' },
  { label: 'Juno Jordan, Numerology: The Romance in Your Name (1965)' },
  { label: 'Matthew Oliver Goodwin, Numerology: The Complete Guide, vol. 1 (1981) — regla de la Y' },
  { label: 'Hans Decoz, Numerology: Key to Your Inner Self (1994)' },
  { label: 'Underwood Dudley, Numerology, or What Pythagoras Wrought (1997) — visión crítica' },
]
