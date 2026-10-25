// Luz y sombra de la facultad de cada mes. Solo textos verificados en la fuente original.
// Si no hay una fuente clásica para la sombra de un mes, no se escribe.
import type { HebrewMonthKey } from '../lib/hebrewDate.ts'
import type { Fact, Source } from './tradition.ts'

export interface MonthDepth {
  light: Fact
  shadow?: Fact
}

const sefaria = (label: string, ref: string): Source => ({ label, url: `https://www.sefaria.org/${ref}` })

const adar: MonthDepth = {
  light: {
    text: 'Alegrar a los demás. El profeta Elías señaló a dos bufones como merecedores del mundo venidero: alegraban a los tristes y ponían paz entre los que se peleaban. Y «cuando entra Adar, aumenta la alegría».',
    sources: [sefaria('Talmud, Taanit 22a', 'Taanit.22a.4-7'), sefaria('Talmud, Taanit 29a', 'Taanit.29a.18')],
  },
  shadow: {
    text: 'La risa vacía: «la risa y la ligereza acostumbran a la persona a la inmoralidad».',
    sources: [sefaria('Mishná Avot 3:13', 'Pirkei_Avot.3.13')],
  },
}

export const MONTH_DEPTH: Record<HebrewMonthKey, MonthDepth> = {
  nisan: {
    light: {
      text: 'La palabra que libera. En Pésaj la Torá manda contar a los hijos la salida de Egipto («y se lo contarás a tu hijo»), y el Arizal enseña que Pésaj se lee pe saj, «la boca que habla».',
      sources: [sefaria('Éxodo 13:8', 'Exodus.13.8'), sefaria('Arizal, Shaar HaKavanot, Pésaj 3', "Sha'ar_HaKavanot,_Sermons_on_Passover.3.4")],
    },
    shadow: {
      text: 'Hablar de más: «no encontré nada mejor para el cuerpo que el silencio… quien multiplica las palabras trae el pecado».',
      sources: [sefaria('Mishná Avot 1:17', 'Pirkei_Avot.1.17')],
    },
  },
  iyar: {
    light: {
      text: 'Un mes de curación. El Bnei Yisajar enseña que en Iyar comenzó a caer el maná y nadie enfermaba, y que el nombre אייר tiene el mismo valor numérico que la raíz de arujá, «curación».',
      sources: [sefaria('Bnei Yisajar, Iyar 1:3', 'Bnei_Yissaschar,_Iyar.1.3.1'), sefaria('Bnei Yisajar, Iyar 1:5', 'Bnei_Yissaschar,_Iyar.1.5.1')],
    },
  },
  sivan: {
    light: {
      text: 'Avanzar. El profeta promete: «te daré lugares para caminar entre estos que están de pie». Y el Talmud juega con las palabras halijot (caminos) y halajot (leyes): quien estudia halajot cada día tiene asegurado el mundo venidero.',
      sources: [sefaria('Zacarías 3:7', 'Zechariah.3.7'), sefaria('Talmud, Nidá 73a', 'Niddah.73a.15')],
    },
  },
  tamuz: {
    light: {
      text: 'El «buen ojo»: Rabí Eliézer enseña que el mejor camino para una persona es tener buen ojo, mirar con generosidad.',
      sources: [sefaria('Mishná Avot 2:9', 'Pirkei_Avot.2.9')],
    },
    shadow: {
      text: 'Dejarse llevar por lo que se ve: «no vayan tras su corazón y tras sus ojos».',
      sources: [sefaria('Números 15:39', 'Numbers.15.39')],
    },
  },
  av: {
    light: {
      text: 'Escuchar de verdad. La declaración central de la fe judía comienza con una orden de oír: «Escucha, Israel».',
      sources: [sefaria('Deuteronomio 6:4', 'Deuteronomy.6.4')],
    },
  },
  elul: {
    light: {
      text: 'Lo que cuenta es el hecho: «no es el estudio lo principal, sino la acción».',
      sources: [sefaria('Mishná Avot 1:17', 'Pirkei_Avot.1.17')],
    },
    shadow: {
      text: 'Dejar las cosas sin hacer: «no te corresponde terminar la obra, pero tampoco eres libre de desentenderte de ella».',
      sources: [sefaria('Mishná Avot 2:16', 'Pirkei_Avot.2.16')],
    },
  },
  tishrei: {
    light: {
      text: 'La alegría compartida. En Sucot la Torá manda tomar las cuatro especies y alegrarse siete días: «te alegrarás en tu fiesta, tú, tu hijo, tu hija… el extranjero, el huérfano y la viuda».',
      sources: [sefaria('Levítico 23:40', 'Leviticus.23.40'), sefaria('Deuteronomio 16:14', 'Deuteronomy.16.14')],
    },
  },
  jeshvan: {
    light: {
      text: 'Percibir lo sutil. El Talmud enseña que el aroma es lo que disfruta el alma y no el cuerpo, y del Mesías dice el profeta que «olerá en el temor de Dios»: juzgará por ese sentido.',
      sources: [sefaria('Talmud, Berajot 43b', 'Berakhot.43b.3'), sefaria('Isaías 11:3', 'Isaiah.11.3'), sefaria('Talmud, Sanedrín 93b', 'Sanhedrin.93b.7')],
    },
  },
  kislev: {
    light: {
      text: 'Soñar con propósito: «el sueño es una sexagésima parte de la profecía». Jacob soñó con la escalera que unía el cielo y la tierra, y José soñó su destino.',
      sources: [sefaria('Talmud, Berajot 57b', 'Berakhot.57b.13'), sefaria('Génesis 28:12', 'Genesis.28.12'), sefaria('Génesis 37:5', 'Genesis.37.5')],
    },
  },
  tevet: {
    light: {
      text: 'La fuerza bien dirigida: «¿quién es fuerte? El que domina su inclinación».',
      sources: [sefaria('Mishná Avot 4:1', 'Pirkei_Avot.4.1')],
    },
    shadow: {
      text: 'El enojo: el Rambam lo cuenta entre los rasgos que hay que alejar al extremo, y el Talmud enseña que a quien se enoja, si es sabio, se le va su sabiduría.',
      sources: [sefaria('Rambam, Deot 2:3', 'Mishneh_Torah,_Human_Dispositions.2.3'), sefaria('Talmud, Pesajim 66b', 'Pesachim.66b.7')],
    },
  },
  shevat: {
    light: {
      text: 'Recibir con gratitud: «comerás, te saciarás y bendecirás».',
      sources: [sefaria('Deuteronomio 8:10', 'Deuteronomy.8.10')],
    },
    shadow: {
      text: 'Tragar sin medida: Esaú pidió «dame de tragar» (haliteni, de la misma raíz que leitá, la facultad de este mes) y por un plato vendió su primogenitura.',
      sources: [sefaria('Génesis 25:30-34', 'Genesis.25.30-34')],
    },
  },
  adar,
  adar1: adar,
  adar2: adar,
}
