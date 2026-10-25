// Significados de la numerología pitagórica moderna.
// Interpretaciones convencionales del sistema, tal como aparecen en las obras de referencia
// (Juno Jordan, "Numerology: The Romance in Your Name"; Hans Decoz, "Numerology: Key to Your Inner Self").
// Es un sistema simbólico de interpretación, no una afirmación científica.

export type PositionKey = 'leccion' | 'alma' | 'personalidad' | 'destino'

export interface NumberMeaning {
  n: number
  archetype: string
  keywords: string[]
  /** Frase breve para la síntesis: "…tu camino te invita a ___" */
  essence: string
  light: string
  shadow: string
  lesson: string
  positions: Record<PositionKey, string>
  /** Tono del año personal */
  year: string
}

export const POSITIONS: Record<PositionKey, { title: string; source: string; what: string }> = {
  leccion: {
    title: 'Lección de vida',
    source: 'Fecha de nacimiento completa',
    what: 'El camino que viniste a recorrer: las experiencias que se repiten y lo que la vida te pide aprender.',
  },
  alma: {
    title: 'Número del alma',
    source: 'Vocales del nombre',
    what: 'Tu mundo interior: lo que de verdad deseas, lo que te motiva aunque no siempre lo muestres.',
  },
  personalidad: {
    title: 'Personalidad externa',
    source: 'Consonantes del nombre',
    what: 'La imagen que proyectas: cómo te perciben los demás al conocerte.',
  },
  destino: {
    title: 'Número destino',
    source: 'Alma + personalidad',
    what: 'La síntesis de lo que eres por dentro y por fuera: la misión que vienes a expresar en el mundo.',
  },
}

export const NUMBERS: Record<number, NumberMeaning> = {
  1: {
    n: 1,
    archetype: 'El Pionero',
    keywords: ['Liderazgo', 'Independencia', 'Iniciativa', 'Originalidad'],
    essence: 'abrir caminos propios con valentía',
    light: 'Voluntad firme, coraje para empezar, ideas originales y capacidad de tomar decisiones.',
    shadow: 'Impaciencia, egocentrismo, dificultad para pedir ayuda o aceptar otros puntos de vista.',
    lesson: 'Aprender a confiar en ti y a liderar sin imponer: la independencia madura es la que también sabe escuchar.',
    positions: {
      leccion: 'La vida te pondrá una y otra vez en situaciones donde tendrás que valerte por ti y dar el primer paso.',
      alma: 'En lo profundo deseas autonomía, dejar tu sello y no depender de nadie para avanzar.',
      personalidad: 'Proyectas seguridad y determinación; los demás te ven como alguien que sabe lo que quiere.',
      destino: 'Tu misión es iniciar: proyectos, ideas o cambios que otros seguirán después.',
    },
    year: 'Año de inicios: siembra, empieza proyectos y toma decisiones nuevas. Lo que inicies marcará los próximos nueve años.',
  },
  2: {
    n: 2,
    archetype: 'El Mediador',
    keywords: ['Cooperación', 'Sensibilidad', 'Diplomacia', 'Paciencia'],
    essence: 'unir, acompañar y crear armonía entre las personas',
    light: 'Tacto, empatía, intuición, capacidad de escuchar y de trabajar en equipo.',
    shadow: 'Indecisión, dependencia emocional, hipersensibilidad o miedo al conflicto.',
    lesson: 'Encontrar el equilibrio entre dar y recibir: la suavidad también es una forma de fuerza.',
    positions: {
      leccion: 'Tu camino pasa por las relaciones: aprenderás a través de la pareja, las alianzas y la colaboración.',
      alma: 'Anhelas paz, compañía y sentirte en sintonía con quienes amas.',
      personalidad: 'Proyectas amabilidad y cercanía; la gente se siente cómoda contigo.',
      destino: 'Tu misión es ser puente: reconciliar, acompañar y sumar donde otros dividen.',
    },
    year: 'Año de paciencia y alianzas: lo sembrado crece despacio. Cuida las relaciones y no fuerces los tiempos.',
  },
  3: {
    n: 3,
    archetype: 'El Comunicador',
    keywords: ['Expresión', 'Creatividad', 'Alegría', 'Sociabilidad'],
    essence: 'expresar tu verdad y contagiar entusiasmo',
    light: 'Talento para comunicar, imaginación, optimismo y facilidad para inspirar a otros.',
    shadow: 'Dispersión, superficialidad, crítica fácil o dejar proyectos a medias.',
    lesson: 'Dar forma a tu creatividad con constancia: tu voz tiene valor cuando la pones al servicio de un propósito.',
    positions: {
      leccion: 'La vida te invita a expresarte: hablar, escribir, crear y compartir lo que sientes.',
      alma: 'Deseas disfrutar, crear y sentirte libre para mostrar quién eres.',
      personalidad: 'Proyectas simpatía y chispa; sueles ser el alma de la reunión.',
      destino: 'Tu misión es comunicar e inspirar, llevar alegría y belleza a tu entorno.',
    },
    year: 'Año de expresión y vida social: crea, comunica y date espacio para disfrutar, sin dispersar tu energía.',
  },
  4: {
    n: 4,
    archetype: 'El Constructor',
    keywords: ['Orden', 'Trabajo', 'Estabilidad', 'Disciplina'],
    essence: 'construir bases sólidas y duraderas',
    light: 'Responsabilidad, método, perseverancia y lealtad; alguien en quien se puede confiar.',
    shadow: 'Rigidez, terquedad, exceso de control o resistencia al cambio.',
    lesson: 'Construir con paciencia sin cerrarte a lo nuevo: la estructura existe para sostener la vida, no para encerrarla.',
    positions: {
      leccion: 'Tu camino te pide esfuerzo constante: los logros llegan paso a paso, con orden y trabajo.',
      alma: 'Buscas seguridad, estabilidad y la tranquilidad de tener las cosas en su lugar.',
      personalidad: 'Proyectas seriedad y solidez; transmites confianza y sentido práctico.',
      destino: 'Tu misión es construir: familias, empresas o sistemas que perduren.',
    },
    year: 'Año de trabajo y cimientos: organiza, ahorra y consolida. El esfuerzo de hoy sostiene lo que viene.',
  },
  5: {
    n: 5,
    archetype: 'El Aventurero',
    keywords: ['Libertad', 'Cambio', 'Versatilidad', 'Curiosidad'],
    essence: 'vivir la libertad y abrazar el cambio con consciencia',
    light: 'Adaptabilidad, curiosidad, magnetismo y capacidad de reinventarte.',
    shadow: 'Inestabilidad, impulsividad, excesos o miedo al compromiso.',
    lesson: 'Usar la libertad con responsabilidad: elegir el cambio en lugar de huir hacia él.',
    positions: {
      leccion: 'La vida te traerá cambios, viajes y experiencias diversas para que aprendas a adaptarte sin perderte.',
      alma: 'Anhelas libertad, movimiento y experiencias que te hagan sentir con vida.',
      personalidad: 'Proyectas dinamismo y encanto; pareces siempre en movimiento.',
      destino: 'Tu misión es mostrar a otros que el cambio es posible y abrir horizontes.',
    },
    year: 'Año de cambios y movimiento: viajes, novedades y decisiones. Fluye, pero sin perder el rumbo.',
  },
  6: {
    n: 6,
    archetype: 'El Protector',
    keywords: ['Amor', 'Responsabilidad', 'Familia', 'Armonía'],
    essence: 'cuidar, sanar y crear hogar',
    light: 'Generosidad, sentido de la justicia, calidez y vocación de servicio.',
    shadow: 'Perfeccionismo, sobreprotección, culpa o sacrificarte en exceso.',
    lesson: 'Amar sin controlar y cuidarte a ti con la misma entrega con que cuidas a los demás.',
    positions: {
      leccion: 'Tu camino gira en torno al hogar, la familia y las responsabilidades afectivas.',
      alma: 'Deseas amar y recibir amor, ver a los tuyos en armonía y sentirte útil.',
      personalidad: 'Proyectas calidez y confianza; eres a quien acuden los demás por consejo.',
      destino: 'Tu misión es servir y sanar: llevar equilibrio, belleza y amor a tu comunidad.',
    },
    year: 'Año de hogar y compromisos: familia, pareja y responsabilidades piden tu presencia.',
  },
  7: {
    n: 7,
    archetype: 'El Buscador',
    keywords: ['Introspección', 'Sabiduría', 'Análisis', 'Espiritualidad'],
    essence: 'buscar la verdad y profundizar en el sentido de la vida',
    light: 'Mente analítica, intuición, profundidad y vocación por el conocimiento.',
    shadow: 'Aislamiento, desconfianza, frialdad o exceso de escepticismo.',
    lesson: 'Unir mente y espíritu: confiar en tu intuición y compartir lo que descubres.',
    positions: {
      leccion: 'La vida te lleva hacia adentro: estudio, reflexión y búsqueda espiritual.',
      alma: 'Anhelas comprender, tener silencio y espacio propio para pensar.',
      personalidad: 'Proyectas reserva y profundidad; los demás te perciben como alguien enigmático.',
      destino: 'Tu misión es investigar, enseñar y aportar sabiduría.',
    },
    year: 'Año de introspección: estudia, descansa y revisa tu camino interior. Menos acción, más comprensión.',
  },
  8: {
    n: 8,
    archetype: 'El Realizador',
    keywords: ['Poder', 'Abundancia', 'Autoridad', 'Logro'],
    essence: 'materializar metas y ejercer el poder con justicia',
    light: 'Visión, capacidad de gestión, ambición sana y fortaleza ante la adversidad.',
    shadow: 'Materialismo, afán de control, dureza o adicción al trabajo.',
    lesson: 'Equilibrar lo material y lo espiritual: el poder vale cuando se usa para el bien de otros.',
    positions: {
      leccion: 'Tu camino pasa por el logro, el dinero y la autoridad; aprenderás a administrar el poder.',
      alma: 'Deseas reconocimiento, éxito y la satisfacción de ver tus metas cumplidas.',
      personalidad: 'Proyectas autoridad y eficacia; transmites que puedes con todo.',
      destino: 'Tu misión es realizar: dirigir, organizar recursos y generar prosperidad.',
    },
    year: 'Año de cosecha y poder personal: resultados, finanzas y reconocimiento. Gestiona con integridad.',
  },
  9: {
    n: 9,
    archetype: 'El Humanista',
    keywords: ['Compasión', 'Servicio', 'Idealismo', 'Cierre de ciclos'],
    essence: 'servir con compasión y saber soltar',
    light: 'Generosidad, visión amplia, sensibilidad artística y capacidad de perdonar.',
    shadow: 'Resentimiento, papel de víctima, idealismo excesivo o dificultad para cerrar etapas.',
    lesson: 'Soltar, perdonar y dar sin esperar: cada final te prepara para un comienzo más sabio.',
    positions: {
      leccion: 'La vida te enseña a través de finales y desprendimientos: aprender a soltar para trascender.',
      alma: 'Anhelas un mundo mejor y sentir que tu vida tiene un sentido que va más allá de ti.',
      personalidad: 'Proyectas nobleza y comprensión; inspiras confianza en personas muy distintas.',
      destino: 'Tu misión es humanitaria: servir, enseñar con el ejemplo y cerrar ciclos con sabiduría.',
    },
    year: 'Año de cierre: termina lo pendiente, perdona y libera espacio. Se prepara un nuevo ciclo.',
  },
}

export const MASTER_NOTES: Record<number, { title: string; text: string }> = {
  11: {
    title: 'Vibración maestra 11',
    text: 'En numerología, el 11 se considera un número maestro: intuición elevada, inspiración y sensibilidad espiritual. Se vive como un 2 con una exigencia mayor.',
  },
  22: {
    title: 'Vibración maestra 22',
    text: 'El 22 es el "maestro constructor": capacidad de llevar grandes visiones a la realidad. Se vive como un 4 con un alcance mayor.',
  },
  33: {
    title: 'Vibración maestra 33',
    text: 'El 33 es el "maestro del servicio": amor compasivo y vocación de enseñar. Se vive como un 6 con una responsabilidad mayor. Es una incorporación posterior al 11 y al 22, y no todos los autores lo aceptan.',
  },
}
