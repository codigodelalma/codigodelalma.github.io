// «Para qué viniste»: enseñanzas sobre la misión del alma, verificadas en el texto original.
import type { Fact, Source } from './tradition.ts'

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

export const TEACHINGS: (Fact & { title: string })[] = [
  {
    title: 'Eres irrepetible',
    text: 'Dios acuñó a todas las personas con el sello de Adán, y ninguna se parece a otra. Por eso cada persona debe decir: «por mí fue creado el mundo».',
    sources: [sefaria('Mishná Sanedrín 4:5', 'Mishnah_Sanhedrin.4.5')],
  },
  {
    title: 'Tu alma viene a completar algo',
    text: 'Según el Arizal, el alma vuelve a este mundo para completar los preceptos que le faltaron: es su tikún, su reparación. (Enseñanza cabalística del Arizal, escrita por Rabí Jaim Vital.)',
    sources: [
      sefaria('Shaar HaGuilgulim, introducción 11', "Sha'ar_HaGilgulim.11.14"),
      sefaria('Shaar HaGuilgulim, introducción 16', "Sha'ar_HaGilgulim.16.1"),
    ],
  },
  {
    title: 'Tú eliges',
    text: '«Te he puesto delante la vida y la muerte… elige la vida». Rabí Yojanán enseña que «no hay mazal para Israel»: los astros no deciden por ti.',
    sources: [sefaria('Deuteronomio 30:19', 'Deuteronomy.30.19'), sefaria('Talmud, Shabat 156a', 'Shabbat.156a.12')],
  },
  {
    title: 'Paso a paso',
    text: '«No te corresponde terminar la obra, pero tampoco eres libre de desentenderte de ella».',
    sources: [sefaria('Mishná Avot 2:16', 'Pirkei_Avot.2.16')],
  },
]
