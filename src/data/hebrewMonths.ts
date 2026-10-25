// Meses del calendario hebreo. Cada dato lleva su fuente verificable.
import type { HebrewMonthKey } from '../lib/hebrewDate.ts'
import type { Fact, Source } from './tradition.ts'

export interface HebrewMonth {
  name: string
  hebrew: string
  /** Posición contando desde Nisán, el primer mes (Éxodo 12:2) */
  order: number
  facts: Fact[]
}

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const FIRST_MONTH = sefaria('Éxodo 12:2', 'Exodus.12.2')

const adarFacts: Fact[] = [
  {
    text: 'En Adar se celebra Purim (14 de Adar; 15 en las ciudades amuralladas, Shushán Purim), que recuerda la salvación narrada en el libro de Ester.',
    sources: [sefaria('Ester 9:17-21', 'Esther.9.17-21'), sefaria('Mishná Meguilá 1:1', 'Mishnah_Megillah.1.1')],
  },
  {
    text: '«Cuando entra Adar, aumenta la alegría».',
    sources: [sefaria('Talmud, Taanit 29a', 'Taanit.29a')],
  },
]

export const HEBREW_MONTHS: Record<HebrewMonthKey, HebrewMonth> = {
  nisan: {
    name: 'Nisán',
    hebrew: 'ניסן',
    order: 1,
    facts: [
      {
        text: 'Es el primer mes del año: «Este mes será para ustedes el principio de los meses».',
        sources: [FIRST_MONTH],
      },
      {
        text: 'Mes de Pésaj, que recuerda la salida de Egipto: el sacrificio pascual el 14 y la fiesta de los panes ázimos desde el 15 de Nisán.',
        sources: [sefaria('Levítico 23:5-6', 'Leviticus.23.5-6')],
      },
      {
        text: 'La Torá lo llama también «mes de Aviv» (de la primavera).',
        sources: [sefaria('Éxodo 13:4', 'Exodus.13.4'), sefaria('Deuteronomio 16:1', 'Deuteronomy.16.1')],
      },
      {
        text: 'Rabí Yehoshúa enseña en el Talmud: «En Nisán fueron redimidos y en Nisán serán redimidos» (Rabí Eliézer sostiene que la redención futura será en Tishréi).',
        sources: [sefaria('Talmud, Rosh Hashaná 11a', 'Rosh_Hashanah.11a')],
      },
    ],
  },
  iyar: {
    name: 'Iyar',
    hebrew: 'אייר',
    order: 2,
    facts: [
      {
        text: 'Durante todo Iyar continúa la cuenta del Ómer, los 49 días entre Pésaj y Shavuot.',
        sources: [sefaria('Levítico 23:15-16', 'Leviticus.23.15-16')],
      },
      {
        text: 'El 18 de Iyar es Lag BaÓmer, el día 33 de la cuenta, en el que por costumbre se aumenta la alegría.',
        sources: [sefaria('Shulján Aruj, Óraj Jaím 493:2 (Rema)', 'Shulchan_Arukh,_Orach_Chayim.493.2')],
      },
      {
        text: 'El 14 de Iyar es Pésaj Shení, la «segunda Pascua» para quien no pudo ofrecer el sacrificio en Nisán.',
        sources: [sefaria('Números 9:10-11', 'Numbers.9.10-11')],
      },
      {
        text: 'En la Biblia se le llama «mes de Ziv».',
        sources: [sefaria('1 Reyes 6:1', 'I_Kings.6.1')],
      },
    ],
  },
  sivan: {
    name: 'Siván',
    hebrew: 'סיון',
    order: 3,
    facts: [
      {
        text: 'En el tercer mes llegó Israel al monte Sinaí. Según los sabios del Talmud, la Torá se entregó el 6 de Siván (Rabí Yosé dice el 7); el 6 de Siván se celebra Shavuot.',
        sources: [sefaria('Éxodo 19:1', 'Exodus.19.1'), sefaria('Talmud, Shabat 86b', 'Shabbat.86b')],
      },
      {
        text: 'Es mencionado por su nombre en el libro de Ester.',
        sources: [sefaria('Ester 8:9', 'Esther.8.9')],
      },
    ],
  },
  tamuz: {
    name: 'Tamuz',
    hebrew: 'תמוז',
    order: 4,
    facts: [
      {
        text: 'El 17 de Tamuz es día de ayuno. La Mishná enumera cinco desgracias ocurridas en esa fecha, entre ellas la ruptura de las Tablas y la brecha en las murallas de Jerusalén.',
        sources: [sefaria('Mishná Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
    ],
  },
  av: {
    name: 'Av',
    hebrew: 'אב',
    order: 5,
    facts: [
      {
        text: 'El 9 de Av (Tishá BeAv) es el día de duelo por la destrucción de ambos Templos. «Cuando entra Av, se disminuye la alegría».',
        sources: [sefaria('Mishná Taanit 4:6', 'Mishnah_Taanit.4.6')],
      },
      {
        text: 'El 15 de Av (Tu BeAv) es, según la Mishná, uno de los días más alegres del año para Israel.',
        sources: [sefaria('Mishná Taanit 4:8', 'Mishnah_Taanit.4.8')],
      },
    ],
  },
  elul: {
    name: 'Elul',
    hebrew: 'אלול',
    order: 6,
    facts: [
      {
        text: 'Mes de preparación y retorno (teshuvá) antes de Rosh Hashaná. En la costumbre sefardí se recitan Selijot desde el inicio de Elul; en la asquenazí se toca el shofar durante el mes.',
        sources: [sefaria('Shulján Aruj, Óraj Jaím 581:1', 'Shulchan_Arukh,_Orach_Chayim.581.1')],
      },
      {
        text: 'La muralla de Jerusalén se terminó de reconstruir el 25 de Elul.',
        sources: [sefaria('Nehemías 6:15', 'Nehemiah.6.15')],
      },
    ],
  },
  tishrei: {
    name: 'Tishréi',
    hebrew: 'תשרי',
    order: 7,
    facts: [
      {
        text: 'El mes de las grandes festividades: Rosh Hashaná (1 de Tishréi), Yom Kipur (10) y Sucot (desde el 15).',
        sources: [sefaria('Levítico 23:24', 'Leviticus.23.24'), sefaria('Levítico 23:27', 'Leviticus.23.27'), sefaria('Levítico 23:34', 'Leviticus.23.34')],
      },
      {
        text: 'En Tishréi cambia el número del año: la Mishná lo cuenta entre los «cuatro años nuevos».',
        sources: [sefaria('Mishná Rosh Hashaná 1:1', 'Mishnah_Rosh_Hashanah.1.1')],
      },
      {
        text: 'En la Biblia se le llama «mes de Etanim».',
        sources: [sefaria('1 Reyes 8:2', 'I_Kings.8.2')],
      },
    ],
  },
  jeshvan: {
    name: 'Jeshván',
    hebrew: 'חשוון',
    order: 8,
    facts: [
      {
        text: 'También llamado Marjeshván. El 7 de Jeshván se empieza a pedir la lluvia en las oraciones en la Tierra de Israel.',
        sources: [sefaria('Mishná Taanit 1:3', 'Mishnah_Taanit.1.3')],
      },
      {
        text: 'En la Biblia se le llama «mes de Bul».',
        sources: [sefaria('1 Reyes 6:38', 'I_Kings.6.38')],
      },
      {
        text: 'Según Rabí Eliézer, el diluvio comenzó el 17 de Jeshván (Rabí Yehoshúa dice que fue el 17 de Iyar).',
        sources: [sefaria('Génesis 7:11', 'Genesis.7.11'), sefaria('Talmud, Rosh Hashaná 11b', 'Rosh_Hashanah.11b')],
      },
    ],
  },
  kislev: {
    name: 'Kislev',
    hebrew: 'כסלו',
    order: 9,
    facts: [
      {
        text: 'El 25 de Kislev comienzan los ocho días de Janucá.',
        sources: [sefaria('Talmud, Shabat 21b', 'Shabbat.21b')],
      },
      {
        text: 'Es mencionado por su nombre en los libros de Zacarías y Nehemías.',
        sources: [sefaria('Zacarías 7:1', 'Zechariah.7.1'), sefaria('Nehemías 1:1', 'Nehemiah.1.1')],
      },
    ],
  },
  tevet: {
    name: 'Tevet',
    hebrew: 'טבת',
    order: 10,
    facts: [
      {
        text: 'El 10 de Tevet es día de ayuno: recuerda el comienzo del sitio de Jerusalén por Nabucodonosor.',
        sources: [sefaria('2 Reyes 25:1', 'II_Kings.25.1')],
      },
      {
        text: 'En Tevet fue llevada Ester ante el rey Asuero.',
        sources: [sefaria('Ester 2:16', 'Esther.2.16')],
      },
    ],
  },
  shevat: {
    name: 'Shevat',
    hebrew: 'שבט',
    order: 11,
    facts: [
      {
        text: 'El 15 de Shevat (Tu BiShvat) es el año nuevo de los árboles, según la escuela de Hilel (la de Shamai dice el 1 de Shevat).',
        sources: [sefaria('Mishná Rosh Hashaná 1:1', 'Mishnah_Rosh_Hashanah.1.1')],
      },
      {
        text: 'El 1 del undécimo mes, Moisés comenzó a explicar la Torá al pueblo.',
        sources: [sefaria('Deuteronomio 1:3-5', 'Deuteronomy.1.3-5')],
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
        text: 'Adar I existe solo en los años bisiestos, 7 de cada 19 años del ciclo, para que las fiestas se mantengan en su estación.',
        sources: [{ label: 'Hebcal — Jewish calendar leap year', url: 'https://www.hebcal.com/home/1660/jewish-calendar-leap-year' }],
      },
      {
        text: 'Purim se celebra en el segundo Adar, para «acercar una redención a la otra» (Purim a Pésaj). El 14 de Adar I se conoce como Purim Katán.',
        sources: [sefaria('Talmud, Meguilá 6b', 'Megillah.6b'), sefaria('Shulján Aruj, Óraj Jaím 697:1', 'Shulchan_Arukh,_Orach_Chayim.697.1')],
      },
    ],
  },
  adar2: {
    name: 'Adar II',
    hebrew: 'אדר ב׳',
    order: 13,
    facts: [
      {
        text: 'En los años bisiestos hay dos meses de Adar, y Purim se celebra en el segundo, para «acercar una redención a la otra» (Purim a Pésaj).',
        sources: [sefaria('Talmud, Meguilá 6b', 'Megillah.6b')],
      },
      ...adarFacts.slice(1),
    ],
  },
}

export const HEBREW_DAY_SOURCES: Source[] = [
  sefaria('Génesis 1:5', 'Genesis.1.5'),
  sefaria('Talmud, Julín 83a', 'Chullin.83a'),
  { label: 'Chabad.org — Cumpleaños judíos', url: 'https://www.chabad.org/library/article_cdo/aid/481087/jewish/How-Do-Jews-Celebrate-Birthdays.htm' },
]

export const BIRTHDAY_CUSTOM: Fact = {
  text: 'Celebrar el cumpleaños según el calendario hebreo es una costumbre que el Rebe de Lubavitch impulsó especialmente desde 1988: un día para agradecer, reflexionar y tomar buenas resoluciones.',
  sources: [{ label: 'Chabad.org — Why your birthday matters', url: 'https://www.chabad.org/library/article_cdo/aid/655568/jewish/Why-Your-Birthday-Matters.htm' }],
}

export const BIRTHDAY_RULES = {
  adar: {
    text: 'El mes cambia porque este año tiene un número distinto de meses de Adar. Quien nace en Adar de un año común celebra en Adar II en los años bisiestos; quien nace en Adar I o Adar II celebra en Adar en los años comunes. La regla viene del bar mitzvá y se aplica por analogía; hay costumbres que difieren.',
    sources: [sefaria('Shulján Aruj, Óraj Jaím 55:10 (Rema)', 'Shulchan_Arukh,_Orach_Chayim.55.10'), sefaria('Mishná Berurá 55:43', 'Mishnah_Berurah.55.43')],
  },
  day30: {
    text: 'Naciste un día 30 y este año ese mes solo tiene 29 días. Por analogía con la regla del bar mitzvá, el cumpleaños pasa al 1 del mes siguiente; algunas personas lo celebran el 29.',
    sources: [sefaria('Mishná Berurá 55:45', 'Mishnah_Berurah.55.45')],
  },
}
