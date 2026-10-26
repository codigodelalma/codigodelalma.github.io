// Significados de la numerología pitagórica según Hans Decoz (worldnumerology.com).
// Cada texto es una paráfrasis fiel y breve de su página (Life Path, Soul Urge, Personality Number,
// Expression Number y Personal Year); los enlaces están en src/data/decoz.ts.
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
    what: 'El camino que viniste a recorrer: las experiencias que se repiten y lo que la vida te pide aprender. En la numerología de Hans Decoz se llama Life Path (camino de vida).',
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
    archetype: 'El Líder',
    keywords: ['Independencia', 'Determinación', 'Originalidad', 'Valentía'],
    essence: 'abrir caminos propios con valentía y originalidad',
    light: 'Tienes madera de líder: necesitas libertad para pensar y actuar, y tu empuje, creatividad y originalidad te llevan a resolver los problemas a tu manera.',
    shadow: 'El orgullo puede volverse vanidad y afán de estatus, impaciencia contigo y con los demás, y una actitud dominante o agresiva cuando las cosas no salen como quieres.',
    lesson: 'Mantener a raya el orgullo y el exceso de confianza, cultivando la gratitud y la humildad, y viendo tus talentos como un don y no como motivo de vanidad.',
    positions: {
      leccion: 'La vida te enseñará que el verdadero liderazgo nace de la humildad y la gratitud, no del orgullo.',
      alma: 'En lo profundo deseas independencia: vivir según tus propias convicciones y no según lo que otros esperan, y llegar a ser la figura que lidera en tu campo.',
      personalidad: 'Proyectas seguridad y autosuficiencia, con ideas originales de pionero; tu intensidad puede parecer brusca o poco accesible si no la suavizas.',
      destino: 'Tu misión es abrir camino con independencia y originalidad: ver con claridad tus metas, perseguirlas con voluntad firme y atreverte a lo no probado, cuidando el equilibrio y la compasión.',
    },
    year: 'Un año de comienzos que abre un nuevo ciclo de nueve años: planifica, comparte tu visión, decide con firmeza y emprende cambios personales, como una nueva rutina o un curso. Evita postergar y dispersarte.',
  },
  2: {
    n: 2,
    archetype: 'El Pacificador',
    keywords: ['Sensibilidad', 'Diplomacia', 'Paciencia', 'Cooperación'],
    essence: 'ser el lazo que une a las personas en armonía',
    light: 'Tienes percepción y tacto: captas lo que sienten los demás y creas armonía entre personas que piensan distinto, a menudo con un trabajo valioso desde un segundo plano.',
    shadow: 'Las críticas pueden herirte con facilidad; callas lo que piensas para evitar conflictos y el resentimiento acumulado puede estallar en críticas duras.',
    lesson: 'Reconocer y usar tu fuerza interior: hablar, defender tus aportes y plantar cara a quien los desvalora, en lugar de rumiar en silencio.',
    positions: {
      leccion: 'La vida te enseñará que tu suavidad es más fuerte cuando también te atreves a hacer oír tu propia voz.',
      alma: 'En lo profundo deseas paz y armonía en todos los ámbitos, compañía cercana, seguridad y belleza, y entregarte por completo a quien o a lo que amas.',
      personalidad: 'Proyectas calidez y cercanía, como un refugio tranquilo donde la gente se siente a gusto; algunos confunden tu sensibilidad con fragilidad y no ven tu fortaleza interior.',
      destino: 'Tu misión es unir y pacificar: con tacto, diplomacia e intuición, acercar a las personas y llevar las situaciones hacia la armonía, a menudo como pareja o apoyo más que como líder.',
    },
    year: 'Un año para proteger y cuidar tus planes: el avance es lento y llega con tacto, paciencia, cooperación y acuerdos, además de estudio. Forzar las cosas puede volverse en tu contra; los vínculos cercanos pueden hacerse más hondos.',
  },
  3: {
    n: 3,
    archetype: 'El Niño Creativo',
    keywords: ['Creatividad', 'Expresión', 'Optimismo', 'Sociabilidad'],
    essence: 'expresar tu creatividad para alegrar e inspirar a los demás',
    light: 'Tienes un gran don para expresarte con creatividad, con ingenio, optimismo y capacidad de recuperarte, y un carácter alegre, generoso y sociable que inspira a los demás.',
    shadow: 'Puede faltarte orden y descuidar responsabilidades (a menudo con problemas de dinero), esconder el dolor tras bromas, caer en el cinismo o el sarcasmo cuando estás de bajón, o dispersar tu talento en la vida social.',
    lesson: 'Convertir el talento en resultados con disciplina, compromiso y enfoque; sin ellos, tus dones pueden quedarse sin usar.',
    positions: {
      leccion: 'La vida te enseñará que tu talento solo florece cuando le das disciplina y enfoque.',
      alma: 'En lo profundo deseas expresarte con creatividad y dar alegría a los demás con tu ingenio, tu humor o el arte, algo que se logra con compromiso y disciplina.',
      personalidad: 'Proyectas vitalidad, calidez y optimismo; iluminas el ambiente con tu ingenio y tu encanto, y tu compañía resulta atractiva y agradable.',
      destino: 'Tu misión es la autoexpresión: compartir tu imaginación y tu vitalidad (al narrar, actuar, escribir o hacer música) e inspirar a otros, concentrando tu energía dispersa en una pasión que ames.',
    },
    year: 'Un tiempo de expansión y crecimiento personal que favorece la creatividad, la vida social, los viajes y la comunicación. Encauza tu energía con disciplina y evita dispersarte, precipitarte, el optimismo desmedido y los derroches.',
  },
  4: {
    n: 4,
    archetype: 'El Constructor',
    keywords: ['Sentido práctico', 'Orden', 'Constancia', 'Fiabilidad'],
    essence: 'construir bases sólidas con trabajo constante y honesto',
    light: 'Tienes sentido práctico, método y capacidad de trabajo, con honestidad y lealtad; resuelves los problemas paso a paso y construyes bases duraderas en las que otros pueden apoyarse.',
    shadow: 'Puedes caer en la rigidez y en juicios apresurados, aferrarte a lo convencional y pecar de cautela hasta perder oportunidades, imponerte a veces y desestabilizarte mucho cuando se rompe tu sentido del orden.',
    lesson: 'Desarrollar flexibilidad: adaptarte y aceptar los cambios necesarios en lugar de dejar que la rigidez te cueste oportunidades.',
    positions: {
      leccion: 'La vida te enseñará que las estructuras más firmes son las que saben adaptarse al cambio.',
      alma: 'En lo profundo deseas una vida estable y ordenada, con rutina y estructura, ser un pilar confiable para los demás y recibir mucho amor, aunque no lo muestres.',
      personalidad: 'Proyectas solidez y confianza: tu criterio da seguridad y anclas a cualquier equipo, aunque tu estilo sobrio puede parecer serio o reservado.',
      destino: 'Tu misión es construir y organizar: dar a familias, empresas y comunidades bases firmes, convirtiendo planes en resultados con método y disciplina, y abrirte a ideas creativas que amplíen tu visión.',
    },
    year: 'Un año práctico y disciplinado para organizarte, trabajar duro y sentar bases: comprométete con tus metas, termina lo pendiente y cumple tus obligaciones. Pueden surgir sensaciones de límite; se ven favorecidos los asuntos del hogar y de la propiedad.',
  },
  5: {
    n: 5,
    archetype: 'El Espíritu Libre',
    keywords: ['Aventura', 'Curiosidad', 'Versatilidad', 'Persuasión'],
    essence: 'vivir la vida a fondo y usar tu libertad con disciplina',
    light: 'Amas la libertad, los viajes, la variedad y conocer gente; tienes curiosidad y muchos talentos, haces amistades con facilidad y tus palabras motivan a los demás.',
    shadow: 'Puede faltarte disciplina y actuar por impulso, dejar muchas cosas a medias, costarte comprometerte y dejar que la libertad derive en excesos.',
    lesson: 'Aprender qué significa de verdad la libertad: desarrollar disciplina y enfoque, y quedarte en un área el tiempo suficiente para dominarla.',
    positions: {
      leccion: 'La vida te enseñará que la verdadera libertad nace del enfoque y el compromiso, no de huir de ellos.',
      alma: 'En lo profundo deseas libertad para moverte, explorar y cambiar de rumbo; anhelas variedad, aventura, gente y lugares nuevos.',
      personalidad: 'Proyectas energía, curiosidad y agilidad mental; tienes encanto, sociabilidad y soltura ante el cambio, aunque algunos perciben inquietud o reticencia a comprometerte.',
      destino: 'Tu misión es explorar tus muchos talentos (sobre todo la comunicación) a través de la variedad, los viajes y las ideas nuevas, y encauzar esa energía inquieta hacia unas pocas áreas hasta dominarlas con autodisciplina.',
    },
    year: 'Un tiempo de cambio dinámico, con sorpresas, aventuras, viajes y quizá una mudanza: mantén la apertura, asume riesgos calculados y date a conocer. Aferrarte a hábitos viejos vuelve el año inquietante, y los excesos llevan a errores.',
  },
  6: {
    n: 6,
    archetype: 'Quien Cuida',
    keywords: ['Compasión', 'Responsabilidad', 'Generosidad', 'Armonía'],
    essence: 'cuidar de los demás con compasión y verdadera utilidad',
    light: 'Tienes un don natural para sanar y ayudar: equilibrio y consuelo en los momentos difíciles, disposición a asumir responsabilidades, y generosidad, calidez y carisma, además de talento artístico.',
    shadow: 'Pueden agobiarte los problemas ajenos; puedes elegir pareja por sentimentalismo, atraer a personas que se vuelven dependientes, verte en el papel de salvador y descuidar tu propia creatividad.',
    lesson: 'Equilibrar ayudar e interferir: saber cuándo retirarte para que otros vivan sus propias lecciones y a quién fortalece de verdad tu ayuda.',
    positions: {
      leccion: 'La vida te enseñará que a veces la mejor ayuda es dar un paso atrás y dejar crecer a los demás.',
      alma: 'En lo profundo deseas cuidar y ayudar a quienes amas y recibir amor a cambio, en una vida cálida y armoniosa centrada en el hogar y la familia, donde se valore y se necesite tu presencia.',
      personalidad: 'Proyectas una presencia protectora, como la de un padre o una madre: la gente se relaja contigo, te confía sus preocupaciones y te ve como un puerto seguro.',
      destino: 'Tu misión es cuidar, sanar y guiar: aconsejar, mediar entre posturas opuestas y llevar armonía y belleza al mundo, sin descuidar tus propios dones artísticos y prácticos.',
    },
    year: 'Un año centrado en la familia, el hogar, la comunidad y la responsabilidad, que también puede traer avances en el trabajo y en lo económico. Cultiva la armonía, apoya a los tuyos con flexibilidad y cariño, y cuenta con que otros te pidan mucho.',
  },
  7: {
    n: 7,
    archetype: 'El Buscador',
    keywords: ['Análisis', 'Espiritualidad', 'Introspección', 'Sabiduría'],
    essence: 'buscar la verdad y las respuestas a los misterios de la vida',
    light: 'Buscas la verdad con una mente analítica y concentrada y una conciencia espiritual; te apasiona investigar y resolver enigmas complejos, y con los años ganas refinamiento y sabiduría.',
    shadow: 'Tu necesidad de soledad puede dificultar los vínculos cercanos y, llevada al extremo, conducir a la soledad, el cinismo, la desconfianza, el egocentrismo y una autocrítica dura.',
    lesson: 'Mantener tu independencia y tu propia mirada sin caer en el aislamiento, abriéndote a las personas y a lo que pueden aportarte.',
    positions: {
      leccion: 'La vida te enseñará que la sabiduría interior se profundiza cuando también te abres a los demás.',
      alma: 'En lo profundo amas el conocimiento, el estudio y la comprensión profunda de la vida; tu reto es confiar y compartir tu corazón con otra persona.',
      personalidad: 'Proyectas un aire enigmático, serio y estudioso que te distingue del resto; se te respeta más por tu agudeza e inteligencia que por tu calidez o tu don de gentes.',
      destino: 'Tu misión es buscar el conocimiento y la verdad: con una mente analítica, explorar las preguntas ocultas de la vida (ciencia, filosofía, espiritualidad), distinguir la ilusión de la realidad y dominar a fondo tu campo.',
    },
    year: 'Un año hacia dentro, en el que la reflexión y la contemplación son la clave: lee, reflexiona, descansa, cuida tu salud y cumple tus deberes diarios, con una actitud serena. Obsesionarte con las recompensas materiales vuelve el año difícil, y aislarte demasiado, también.',
  },
  8: {
    n: 8,
    archetype: 'El Ejecutivo',
    keywords: ['Liderazgo', 'Capacidad de gestión', 'Resiliencia', 'Buen juicio'],
    essence: 'poner tu poder y tus capacidades al servicio del bien común',
    light: 'Tienes liderazgo natural y entiendes bien los negocios, las finanzas y cómo funcionan las empresas; juzgas bien a las personas y tienes la resiliencia para levantarte tras los reveses.',
    shadow: 'Puedes caer en la codicia, la arrogancia y una actitud dominante, terca o impaciente, ansiar lujo y estatus por encima de tus medios y mantener a otros dependientes de ti.',
    lesson: 'Desarrollar desapego, aprender el valor real y relativo del dinero y usar tu poder e influencia en beneficio de los demás.',
    positions: {
      leccion: 'La vida te enseñará que el poder y el dinero valen más cuando sirven a los demás.',
      alma: 'En lo profundo deseas un éxito a gran escala (prosperidad, influencia y bienestar material) y necesitas metas ambiciosas y trabajo exigente que valga la pena.',
      personalidad: 'Proyectas fuerza, seguridad y competencia, de modo que otros confían en tu mando; muestras generosidad con las causas en las que crees, aunque tu presencia puede intimidar.',
      destino: 'Tu misión es alcanzar grandes logros y liderar en tu campo con empuje, eficiencia y buen manejo del dinero y la autoridad, equilibrando ideales y realidad y poniendo tu poder al servicio del bien común.',
    },
    year: 'Tu año de cosecha: el esfuerzo pasado da fruto, llegan recompensas atrasadas y crecen la confianza y la eficacia, así que persigue tus metas con claridad. Los resultados dependen del esfuerzo puesto, y conviene mantener cierto desapego de ellos.',
  },
  9: {
    n: 9,
    archetype: 'El Humanitario',
    keywords: ['Compasión', 'Idealismo', 'Visión de conjunto', 'Creatividad'],
    essence: 'dar y servir a una causa mayor que mejore el mundo',
    light: 'Tienes conciencia social, compasión e idealismo; ves el panorama completo, valoras a las personas por lo que aportan y no por prejuicios sociales, y tienes imaginación y sentido de la belleza.',
    shadow: 'Las imperfecciones propias y ajenas pueden decepcionarte; nunca te conformas con los resultados, puedes volverte cambiante o distante y culpar al mundo; perseguir el dinero por sí mismo puede dejarte con las manos vacías.',
    lesson: 'Soltar posesiones y relaciones en vez de aferrarte, aceptar los límites e imperfecciones de la vida y mirar con honestidad tus virtudes y tus carencias.',
    positions: {
      leccion: 'La vida te enseñará que más encuentras cuando das sin esperar nada a cambio y aprendes a soltar.',
      alma: 'En lo profundo deseas mejorar el mundo y la vida de los demás guiándote por altos ideales y dejar huella; tu mayor satisfacción está en dar y servir, empezando por quienes tienes cerca.',
      personalidad: 'Proyectas dignidad, aplomo y una presencia noble y carismática que despierta admiración, aunque a veces también envidia o se interpreta como distancia.',
      destino: 'Tu misión es servir a la humanidad y trabajar por un mundo mejor (en el derecho, la enseñanza, la sanación o el cuidado del entorno), integrando saberes diversos y abriéndote a compartir tus sentimientos.',
    },
    year: 'Un año de cierre que completa el ciclo de nueve años: termina lo pendiente, desprende lo que ya no necesitas, salda deudas, apoya a otras personas y causas valiosas, y suelta lo que ha terminado.',
  },
}

export const MASTER_NOTES: Record<number, { title: string; text: string }> = {
  11: {
    title: 'Vibración maestra 11',
    text: 'Hans Decoz describe el 11 como una versión muy cargada del 2: un camino de gran intuición y energía que inspira a los demás casi sin proponérselo, como un canal entre una comprensión superior y la vida cotidiana. Su lección clave es confiar en su propia capacidad.',
  },
  22: {
    title: 'Vibración maestra 22',
    text: 'Para Hans Decoz, el 22 es el Maestro Constructor: visión y sentido práctico para convertir grandes sueños en resultados concretos, uniendo a personas muy distintas en torno a una meta. Está dominado por el pragmatismo del 4.',
  },
  33: {
    title: 'Vibración maestra 33',
    text: 'Hans Decoz llama al 33 el Maestro Guía: compasión y equilibrio, con dones para sanar, aconsejar y guiar; está dominado por el 6 amoroso y responsable. Su lección es ser de verdad útil, equilibrando ayudar e interferir.',
  },
}

/** Campos profesionales afines al número de destino (expresión), según Hans Decoz. */
export const VOCATIONS: Record<number, { fields: string; url: string }> = {
  1: {
    fields: 'Liderar o dirigir un negocio propio; generales, políticos, empresarios, inventores, líderes religiosos, activistas y artistas de vanguardia.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-1/',
  },
  2: {
    fields: 'Diplomacia y consejería, con talento para la psicología; también talento musical.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-2/',
  },
  3: {
    fields: 'Escritura, comedia, teatro y música; las artes y las tareas que piden soluciones creativas.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-3/',
  },
  4: {
    fields: 'Contaduría, administración, gerencia, función pública y derecho; artes y música con orden, como la música clásica y la ópera.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-4/',
  },
  5: {
    fields: 'Ventas, política, derecho, relaciones públicas y ministerio religioso.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-5/',
  },
  6: {
    fields: 'Docencia (sobre todo con niños o educación especial), sanación, consejería, trabajo social, psicología, arte, diseño, jardinería y agricultura; negocios de trato con la gente.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-6/',
  },
  7: {
    fields: 'Investigación, análisis, invención, técnica, estudios académicos, derecho, banca, filosofía, teología y dirección en campos científicos o técnicos.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-7/',
  },
  8: {
    fields: 'Empresa, dirección ejecutiva, banca, negociación, construcción, ingeniería, mando militar o policial, pilotaje y dirección de instituciones.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-8/',
  },
  9: {
    fields: 'Política, derecho, protección del medio ambiente, enseñanza y sanación; artes como la literatura, la pintura y las artes escénicas.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-9/',
  },
  11: {
    fields: 'No señala profesiones concretas: lo describe como un docente natural en cualquier área.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-11/',
  },
  22: {
    fields: 'No señala profesiones concretas: le atribuye dotes de liderazgo y gusto por las grandes empresas y el trabajo a escala internacional.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-22/',
  },
  33: {
    fields: 'Negocios de trato con la gente; una motivación humanitaria, sobre todo en educación, medicina, política o derecho.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-33/',
  },
}

export const MASTER_DESTINY_SOURCE = {
  label: 'Hans Decoz — Expression number («si encuentras un número maestro, 11, 22 o 33, no lo reduzcas»)',
  url: 'https://www.worldnumerology.com/numerology-expression-number.htm',
}
