// Correspondencias cabalísticas de cada mes hebreo.
// Letra, facultad y constelación: Séfer Yetsirá, versión del Gra / Arizal, 5:7-10.
// Tribu: esquema del Arizal transmitido por los maestros jasídicos (Bnei Yisajar, Shem MiShmuel, Peri Tsadik).
// La «invitación» es una lectura de esa tradición: no una predicción sobre quien nace en el mes.
import type { HebrewMonthKey } from '../lib/hebrewDate.ts'
import type { Source } from './tradition.ts'

export interface MonthKabbalah {
  letter: string
  letterName: string
  faculty: string
  facultyHe: string
  tribe: string
  tribeHe: string
  sign: string
  /** Piedra de la tribu en el pectoral del Sumo Sacerdote */
  stone: string
  stoneHe: string
  stoneId: string
  invitation: string
  sources: Source[]
}

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })
const inner = (month: string, path: string): Source => ({ label: `Inner.org — ${month}`, url: `https://inner.org/${path}` })

const SY1 = sefaria('Séfer Yetsirá (Gra) 5:7', 'Sefer_Yetzirah_Gra_Version.5.7')
const SY2 = sefaria('Séfer Yetsirá (Gra) 5:8', 'Sefer_Yetzirah_Gra_Version.5.8')
const SY3 = sefaria('Séfer Yetsirá (Gra) 5:9', 'Sefer_Yetzirah_Gra_Version.5.9')
const SY4 = sefaria('Séfer Yetsirá (Gra) 5:10', 'Sefer_Yetzirah_Gra_Version.5.10')
const BY_TRIBES = sefaria('Bnei Yisajar, Elul 1:8', 'Bnei_Yissaschar,_Elul_1.8.2')

const adar: MonthKabbalah = {
  letter: 'ק',
  letterName: 'Kuf',
  faculty: 'La risa',
  facultyHe: 'שחוק',
  tribe: 'Naftalí',
  stone: 'Ajlamá',
  stoneHe: 'אחלמה',
  stoneId: 'amatista',
  tribeHe: 'נפתלי',
  sign: 'Piscis (Daguim)',
  invitation:
    'Cultivar una alegría que no depende de las circunstancias: la risa que nace de la confianza y que es capaz de transformar la tristeza.',
  sources: [SY4, sefaria('Peri Tsadik, Rosh Jódesh Adar 11', 'Peri_Tzadik,_Rosh_Chodesh_Adar_11.1'), inner('Adar', 'times/adar/adar.htm')],
}

export const MONTH_KABBALAH: Record<HebrewMonthKey, MonthKabbalah> = {
  nisan: {
    letter: 'ה',
    letterName: 'He',
    faculty: 'El habla',
    facultyHe: 'שיחה',
    tribe: 'Yehudá',
    stone: 'Nófej',
    stoneHe: 'נפך',
    stoneId: 'carbunclo (Septuaginta) o esmeralda (Onkelos)',
    tribeHe: 'יהודה',
    sign: 'Aries (Tlé)',
    invitation:
      'Elevar la palabra: hablar con verdad y con bondad, y usar la voz para liberar, agradecer y construir, nunca para herir.',
    sources: [SY1, BY_TRIBES, inner('Nisán', 'times/nissan/nissan.htm')],
  },
  iyar: {
    letter: 'ו',
    letterName: 'Vav',
    faculty: 'El pensamiento',
    facultyHe: 'הרהור',
    tribe: 'Isajar',
    stone: 'Sapir',
    stoneHe: 'ספיר',
    stoneId: 'zafiro; probablemente lapislázuli',
    tribeHe: 'יששכר',
    sign: 'Tauro (Shor)',
    invitation:
      'Ordenar y purificar el pensamiento: elegir en qué ideas te detienes y trabajar en ti con paciencia, día a día.',
    sources: [SY1, BY_TRIBES, inner('Iyar', 'times/iyar/iyar.htm')],
  },
  sivan: {
    letter: 'ז',
    letterName: 'Zayin',
    faculty: 'El caminar',
    facultyHe: 'הילוך',
    tribe: 'Zevulún',
    stone: 'Yahalom',
    stoneHe: 'יהלום',
    stoneId: 'jaspe (Septuaginta); a menudo traducida como diamante',
    tribeHe: 'זבולון',
    sign: 'Géminis (Teomim)',
    invitation:
      'Avanzar: no quedarse estancado, dar pasos concretos hacia lo que te eleva y llevar lo aprendido a cada lugar al que vas.',
    sources: [SY1, BY_TRIBES, inner('Siván', 'times/sivan/sivan.htm')],
  },
  tamuz: {
    letter: 'ח',
    letterName: 'Jet',
    faculty: 'La vista',
    facultyHe: 'ראייה',
    tribe: 'Reuvén',
    stone: 'Ódem',
    stoneHe: 'אודם',
    stoneId: 'sardio o cornalina, una piedra roja',
    tribeHe: 'ראובן',
    sign: 'Cáncer (Sartán)',
    invitation:
      'Aprender a mirar con «buen ojo»: ver lo bueno en los demás y en lo que te ocurre, incluso cuando las apariencias dicen lo contrario.',
    sources: [SY2, BY_TRIBES, sefaria('Mishná Avot 2:9 («buen ojo»)', 'Pirkei_Avot.2.9'), inner('Tamuz', 'times/tamuz/tamuz.htm')],
  },
  av: {
    letter: 'ט',
    letterName: 'Tet',
    faculty: 'El oído',
    facultyHe: 'שמיעה',
    tribe: 'Shimón',
    stone: 'Pitdá',
    stoneHe: 'פטדה',
    stoneId: 'topacio',
    tribeHe: 'שמעון',
    sign: 'Leo (Arié)',
    invitation:
      'Escuchar de verdad: a los demás, a la propia conciencia y a lo que la vida enseña, y encontrar el bien escondido detrás de lo difícil.',
    sources: [SY2, BY_TRIBES, inner('Av', 'times/av/av.htm')],
  },
  elul: {
    letter: 'י',
    letterName: 'Yud',
    faculty: 'La acción',
    facultyHe: 'מעשה',
    tribe: 'Gad',
    stone: 'Shevó',
    stoneHe: 'שבו',
    stoneId: 'ágata',
    tribeHe: 'גד',
    sign: 'Virgo (Betulá)',
    invitation:
      'Convertir las buenas intenciones en hechos: hacer balance, reparar lo pendiente y empezar de nuevo con actos concretos.',
    sources: [SY2, BY_TRIBES, inner('Elul', 'times/elul/elul.htm')],
  },
  tishrei: {
    letter: 'ל',
    letterName: 'Lámed',
    faculty: 'La unión',
    facultyHe: 'תשמיש',
    tribe: 'Efraim',
    stone: 'Shóham',
    stoneHe: 'שהם',
    stoneId: 'ónice o berilo; es la piedra de Yosef, que Efraim comparte con Menashé',
    tribeHe: 'אפרים',
    sign: 'Libra (Moznáim)',
    invitation:
      'Unir y vincular: el texto habla de la unión conyugal, y la enseñanza jasídica lo amplía a la capacidad de conectar de verdad con los demás y con lo sagrado.',
    sources: [
      SY3,
      sefaria('Bnei Yisajar, Tishréi 1:1', 'Bnei_Yissaschar,_Tishrei_1.1.1'),
      inner('Tishréi', 'english-transcripts/ten-days-of-teshuvah-repentance-and-the-letter-lamed-of-tishrei'),
    ],
  },
  jeshvan: {
    letter: 'נ',
    letterName: 'Nun',
    faculty: 'El olfato',
    facultyHe: 'ריח',
    tribe: 'Menashé',
    stone: 'Shóham',
    stoneHe: 'שהם',
    stoneId: 'ónice o berilo; es la piedra de Yosef, que Menashé comparte con Efraim',
    tribeHe: 'מנשה',
    sign: 'Escorpio (Akrav)',
    invitation:
      'Afinar la percepción de lo sutil: distinguir lo esencial de lo superficial y descubrir lo sagrado en la vida cotidiana.',
    sources: [SY3, sefaria('Shem MiShmuel, Bereshit 3', 'Shem_MiShmuel,_Bereshit_3.2'), inner('Jeshván', 'times/cheshvan/cheshvan.htm')],
  },
  kislev: {
    letter: 'ס',
    letterName: 'Sámej',
    faculty: 'El sueño',
    facultyHe: 'שינה',
    tribe: 'Biniamín',
    stone: 'Yashfé',
    stoneHe: 'ישפה',
    stoneId: 'jaspe',
    tribeHe: 'בנימין',
    sign: 'Sagitario (Keshet)',
    invitation:
      'Confiar y soñar: descansar en la confianza, cuidar los sueños que dan rumbo a la vida y encender luz en la oscuridad.',
    sources: [SY3, sefaria('Bnei Yisajar, Kislev y Tevet 3:38', 'Bnei_Yissaschar,_Kislev_and_Tevet_3.38.1'), inner('Kislev', 'times/kislev/kislev.htm')],
  },
  tevet: {
    letter: 'ע',
    letterName: 'Ayin',
    faculty: 'El enojo',
    facultyHe: 'רוגז',
    tribe: 'Dan',
    stone: 'Léshem',
    stoneHe: 'לשם',
    stoneId: 'jacinto u ópalo',
    tribeHe: 'דן',
    sign: 'Capricornio (Gdi)',
    invitation:
      'Transformar el enojo: no dejar que la ira gobierne, y convertir esa fuerza en firmeza contra lo injusto y en energía para el bien.',
    sources: [SY4, sefaria('Bnei Yisajar, Kislev y Tevet 3:38', 'Bnei_Yissaschar,_Kislev_and_Tevet_3.38.1'), inner('Tevet', 'times/tevet/tevet.htm')],
  },
  shevat: {
    letter: 'צ',
    letterName: 'Tsadi',
    faculty: 'El comer',
    facultyHe: 'לעיטה',
    tribe: 'Asher',
    stone: 'Tarshish',
    stoneHe: 'תרשיש',
    stoneId: 'crisólito o berilo',
    tribeHe: 'אשר',
    sign: 'Acuario (Dli)',
    invitation:
      'Santificar lo cotidiano: comer, disfrutar y recibir con gratitud y conciencia, sin dejar que el apetito nos gobierne.',
    sources: [SY4, sefaria('Bnei Yisajar, Shevat 1:8', 'Bnei_Yissaschar,_Shevat_1.8.1'), inner('Shevat', 'times/shevat/shevat.htm')],
  },
  adar,
  adar1: adar,
  adar2: adar,
}

export const STONE_NOTE: { text: string; sources: Source[] } = {
  text: 'Cada tribu tenía su piedra en el pectoral (Jóshen) del Sumo Sacerdote, con su nombre grabado. Aquí se sigue la asignación del Midrash; el Targum Yonatán ordena algunas piedras de otra forma. Qué gema actual corresponde a cada piedra hebrea es incierto: las traducciones antiguas difieren.',
  sources: [
    sefaria('Éxodo 28:17-21', 'Exodus.28.17-21'),
    sefaria('Bamidbar Rabá 2:7', 'Bamidbar_Rabbah.2.7'),
    sefaria('Targum Yonatán, Éxodo 28:17-21', 'Targum_Jonathan_on_Exodus.28.17-21'),
  ],
}

export const MONTH_KABBALAH_NOTE: { text: string; sources: Source[] } = {
  text: 'El Séfer Yetsirá asigna a cada mes una letra, una facultad y una constelación. El Talmud reconoce que el momento del nacimiento imprime tendencias: quien nace bajo Marte será alguien que derrama sangre, y Rav Ashi aclara que puede ser sangrador (el que hacía sangrías), ladrón, matarife o mohel: la misma inclinación se vive para bien o para mal. Por eso la fuerza de tu mes es un don que traes, no un destino cerrado: Rabí Yojanán enseña que «no hay mazal para Israel», y el Talmud cuenta cómo la caridad libró a una persona de la muerte que anunciaban los astrólogos. Las correspondencias siguen la versión del Séfer Yetsirá del Gra y el Arizal; otras versiones ordenan las facultades de otra manera.',
  sources: [
    sefaria('Talmud, Shabat 156a:11-12', 'Shabbat.156a.11-12'),
    sefaria('Talmud, Shabat 156b', 'Shabbat.156b.4-5'),
    sefaria('Séfer Yetsirá (versión corta) 5:1', 'Sefer_Yetzirah.5.1'),
    sefaria('Peri Tsadik, Rosh Jódesh Siván 4', 'Peri_Tzadik,_Rosh_Chodesh_Sivan_4.3'),
  ],
}
