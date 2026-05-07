import { TEXTO_1016_F_2004 } from "./jurisprudencia-textos/1016-f-2004";

/**
 * Jurisprudencia Destacada — Sentencias redactadas por el Dr. Óscar Eduardo
 * González Camacho durante su tiempo como Magistrado de la Sala Primera de
 * la Corte Suprema de Justicia (2002-2014).
 *
 * Cada sentencia debe estar verificada con texto literal en el expediente
 * oficial del Poder Judicial. La fórmula de redactoría se cita textualmente
 * en `redactorTextual` para trazabilidad.
 */

export type PasajeParrafo = {
  /** Texto del párrafo. Las frases a destacar se marcan con `destacar`. */
  texto: string;
  /** Frases exactas dentro de `texto` que se renderizan con énfasis tipográfico. */
  destacar?: string[];
};

export type Pasaje = {
  /** Título corto del pasaje (3-6 palabras). */
  titulo: string;
  /** Considerando o ubicación dentro de la sentencia. */
  citation?: string;
  /** Párrafos del pasaje. */
  parrafos: PasajeParrafo[];
};

export type SeccionDoctrinal = {
  titulo: string;
  parrafos: string[];
};

export type SentenciaDestacada = {
  /** URL slug — kebab-case, descriptivo. */
  slug: string;

  /** Identificación oficial */
  numero: string; // "Resolución N° 1016-F-2004"
  fecha: string; // "26 de noviembre de 2004"
  fechaCorta: string; // "26 Nov 2004"
  hora?: string;
  expediente: string;
  tribunal: string;

  /** Categorización */
  area: string;
  materia: string;

  /** Badge editorial opcional */
  badge?: {
    type: "fundacional" | "paradigmatica" | "ambiental" | "doctrinal";
    label: string;
  };

  /** Headline editorial */
  titulo: string;
  subtitulo?: string;

  /** Cita central (la frase más icónica) */
  pullQuote: {
    texto: string;
    citation?: string;
  };

  /** Contexto: por qué importa esta sentencia */
  contexto: string[];

  /** Pasajes destacados con el texto literal de la sentencia */
  pasajes: Pasaje[];

  /** Análisis doctrinal — qué estableció jurídicamente */
  doctrina: SeccionDoctrinal[];

  /** Resumen del caso (las partes y el conflicto fáctico) */
  casoFactico?: string[];

  /** Texto íntegro de la sentencia (puede ser largo) */
  textoCompleto?: string;
  textoCompletoFuente?: string;
  textoCompletoUrl?: string;

  /** Atribución */
  redactor: string;
  redactorTextual: string; // cita literal "Redacta el Magistrado..."
  redactoresAdicionales?: string[];

  /** Fuente */
  fuenteUrl?: string;
  fuenteNombre?: string;

  /** SEO */
  metaDescription: string;
};

/* ─────────────────────────────────────────────────────────────────────────
 * Sentencias verificadas
 * ──────────────────────────────────────────────────────────────────────── */

export const SENTENCIAS_DESTACADAS: SentenciaDestacada[] = [
  {
    slug: "indexacion-de-obligaciones-dinerarias",
    numero: "Resolución N° 1016-F-2004",
    fecha: "26 de noviembre de 2004",
    fechaCorta: "26 Nov 2004",
    hora: "9:30 horas",
    expediente: "95-000223-181-CI",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",

    area: "Derecho Civil",
    materia: "Indexación de obligaciones dinerarias",

    badge: {
      type: "fundacional",
      label: "Sentencia Fundacional",
    },

    titulo: "El giro hacia la indexación constitucional",
    subtitulo:
      "El abandono del nominalismo clásico y el reconocimiento de la indexación extra-convencional como exigencia del Derecho de la Constitución.",

    pullQuote: {
      texto:
        "Luego de una profunda y concienzuda reflexión, se llega al convencimiento de que el referido instituto (indexación no convencional), sí cabe en determinados supuestos obligacionales en que la parte con derecho así lo requiera, todo ello por aplicación directa de la Constitución Política.",
      citation: "Considerando VIII",
    },

    contexto: [
      "Hasta el 26 de noviembre de 2004, la Sala Primera de la Corte Suprema de Justicia sostenía, en jurisprudencia constante desde 1989, que la indexación de obligaciones dinerarias solo procedía cuando las partes la habían pactado expresamente. Ante la ausencia de norma legal que la autorizara, la actualización del valor de la deuda se consideraba improcedente — el deudor solo debía la suma nominal, aunque la inflación la hubiera vaciado de contenido.",
      "Cinco precedentes consolidaban esta doctrina nominalista: las sentencias n.° 57 de 1989, n.° 75 de 1992, n.° 49 de 1995, n.° 947 de 2000 y n.° 518 de 2003. En la práctica, esto significaba que un acreedor podía recibir, años después de su sentencia favorable, una suma que ya no equivalía al daño efectivamente sufrido. La justicia llegaba — pero llegaba devaluada.",
      "Con la sentencia N° 1016-F-2004, redactada por el Magistrado Óscar Eduardo González Camacho, la Sala Primera abandonó esa doctrina y abrió la puerta a la indexación extra-convencional. El fundamento no fue una nueva ley sino la propia Constitución Política: los artículos 41 (justicia pronta y cumplida), 33 (igualdad) y 49 (tutela judicial efectiva). El razonamiento es sencillo y poderoso: no hay justicia cumplida sin restitución plena de lo debido.",
    ],

    pasajes: [
      {
        titulo: "El cambio de paradigma",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto:
              "Empero, luego de una profunda y concienzuda reflexión, se llega al convencimiento de que el referido instituto (indexación no convencional), sí cabe en determinados supuestos obligacionales en que la parte con derecho así lo requiera, todo ello por aplicación directa de la Constitución Política. En efecto, no se requiere de norma legal alguna para el reconocimiento de una pretensión indexatoria, cuando por principio general de Derecho y por Constitución, se establece la obligada y plena reparación de los daños y perjuicios irrogados a quien figura como acreedor o lesionado.",
            destacar: [
              "luego de una profunda y concienzuda reflexión",
              "por aplicación directa de la Constitución Política",
              "no se requiere de norma legal alguna",
              "obligada y plena reparación de los daños y perjuicios",
            ],
          },
        ],
      },
      {
        titulo: "El fundamento constitucional",
        citation: "Considerando VIII — Artículo 41 Constitución Política",
        parrafos: [
          {
            texto:
              "En este sentido, es preciso retomar el ajustado análisis e interpretación de la norma fundamental cuando expresamente establece que «Ocurriendo a las leyes, todos han de encontrar reparación para las injurias o daños que hayan recibido en su persona, propiedad o intereses morales. Debe hacerles justicia pronta, cumplida, sin denegación y en estricta conformidad con las leyes» (artículo 41).",
            destacar: ["justicia pronta, cumplida, sin denegación"],
          },
          {
            texto:
              "Habrá de observarse que se dispone la reparación debida de los daños, mandato que va más allá de la simple indemnización de aquéllos. Reparar implica restituir, reponer en lo posible el estado de cosas lesionado a su situación anterior dentro del contexto y valor presente. De esta manera, no se repara sino se repone la suma o el bien debido que corresponde conforme a su valor actual y real establecido a su fecha de pago.",
            destacar: [
              "Reparar implica restituir, reponer",
              "no se repara sino se repone la suma o el bien debido",
              "valor actual y real establecido a su fecha de pago",
            ],
          },
          {
            texto:
              "La negativa a ello implica cohonestar el pago en cantidad insuficiente, con enriquecimiento injusto y abuso del derecho de quien figura como deudor. Su reconocimiento deriva de la simple y adecuada proyección del derecho constitucional a una justicia cumplida y sin denegación, que el mismo precepto declara con absoluta energía y claridad. No hay justicia cumplida y efectiva sin restitución plena de lo debido.",
            destacar: [
              "enriquecimiento injusto y abuso del derecho",
              "No hay justicia cumplida y efectiva sin restitución plena de lo debido",
            ],
          },
        ],
      },
      {
        titulo: "El argumento de igualdad",
        citation: "Considerando VIII — Artículo 33 Constitución Política",
        parrafos: [
          {
            texto:
              "El reconocimiento de la indexación extra-convencional viene además exigido por el derecho de igualdad, en tanto se reconoce este extremo, aún de manera oficiosa, para ciertos ámbitos de la Administración Pública. Su reconocimiento privilegiado para ciertas facetas del quehacer público, con exclusión de otras, infringiría, sin duda, el numeral 33 de la Constitución Política. Ante una misma situación, la misma solución.",
            destacar: [
              "derecho de igualdad",
              "Ante una misma situación, la misma solución",
            ],
          },
        ],
      },
      {
        titulo: "Obligaciones dinerarias y obligaciones de valor",
        citation: "Considerando IX",
        parrafos: [
          {
            texto:
              "Ahora bien, dejando por sentada la procedencia de la indexación extra-convencional, es pertinente establecer la naturaleza jurídica de las obligaciones ya declaradas en la sentencia que se recurre, determinando, después de ello, la susceptible aplicabilidad del mecanismo indexatorio sobre éstas.",
          },
          {
            texto:
              "Conviene por tanto señalar que la indemnización concedida en lo relativo al derecho de llave, constituye en efecto una típica obligación de valor [...] E igual ocurre con el lucro cesante, que deviene como efecto ocasionado por la actividad dañosa, y cuya compensación indemnizatoria no hace más que valorar económicamente aquello que se dejó de recibir. Ambos extremos escapan por tanto a los límites de una estimación pecuniaria establecida en el libelo de demanda, y ambas quedan, por mayoría de razón, sujetas a la reparación patrimonial actualizada.",
            destacar: [
              "típica obligación de valor",
              "reparación patrimonial actualizada",
            ],
          },
          {
            texto:
              "Esto permite sostener que la indexación como tal, cobra sentido esencialmente respecto de las obligaciones dinerarias, sobre las que no existe duda en su procedencia, sin exclusión, claro está, de los perjuicios correspondientes, pues ha de quedar claro que se trata de extremos diferentes e independientes.",
            destacar: [
              "obligaciones dinerarias",
              "extremos diferentes e independientes",
            ],
          },
        ],
      },
      {
        titulo: "El instrumento técnico: el Índice de Precios al Consumidor",
        citation: "Considerando IX",
        parrafos: [
          {
            texto:
              "No obstante lo dicho, hay que reconocer que la fijación del monto indemnizatorio y la firmeza de la sentencia condenatoria, aún en las obligaciones de valor, suelen tener entre sí considerables espacios temporales, que automáticamente desactualizan el monto concedido oportunamente. Bajo estas circunstancias, debe puntualizarse que en ejecución del fallo (siempre y cuando la sentencia principal lo haya establecido, por expresa solicitud de parte), podría efectuarse la operación indexatoria, que cubriría el período comprendido entre el establecimiento del monto otorgado a título de condena y la firmeza de la sentencia.",
          },
          {
            texto:
              "Así estará afectada a la regla general indicada, bajo parámetros de concreción de muy diversa índole, dentro de los cuales el más conveniente y razonable, está representado por el Índice de Precios al Consumidor (IPC), criterio que además de ajustable de acuerdo con diversos factores de la realidad, es establecido por la más importante entidad estatal rectora en materia financiera.",
            destacar: [
              "Índice de Precios al Consumidor (IPC)",
              "más conveniente y razonable",
            ],
          },
        ],
      },
    ],

    doctrina: [
      {
        titulo: "Una ruptura con quince años de jurisprudencia contraria",
        parrafos: [
          "La sentencia N° 1016-F-2004 representa el punto de inflexión más relevante en materia de obligaciones dinerarias en Costa Rica desde la reforma constitucional de 1949. Hasta ese momento, la Sala Primera había sostenido — en cinco precedentes que abarcaban quince años (1989-2003) — que solo cabía indexar lo pactado. Sin pacto, no había actualización: el deudor pagaba la suma nominal aunque para entonces fuera apenas una fracción del valor real.",
          "El giro doctrinal no introduce una nueva regla legal: declara que la regla siempre estuvo en la Constitución. Lo que cambia es la lectura. La Sala reinterpreta el artículo 41 («justicia pronta, cumplida, sin denegación») y deduce que la cumplida no admite pago insuficiente. Si la inflación devalúa la moneda entre la sentencia y su ejecución, indemnizar el monto nominal equivale a denegar parcialmente la justicia.",
        ],
      },
      {
        titulo: "El triple anclaje constitucional",
        parrafos: [
          "El razonamiento descansa en tres pilares simultáneos: el artículo 41 (la reparación debe ser íntegra y oportuna), el artículo 49 (tutela judicial efectiva, recogida también en la jurisprudencia constitucional), y el artículo 33 (igualdad: si se indexa para la Administración Pública en ciertos ámbitos, ha de indexarse también para los particulares en situaciones equivalentes).",
          "El argumento de igualdad es particularmente potente. La Sala observa que el ordenamiento ya reconocía indexación oficiosa en algunas materias (notablemente, en obligaciones de la Administración). Negar la misma protección a un acreedor privado violentaría el principio de que «ante una misma situación, la misma solución».",
        ],
      },
      {
        titulo: "El legado técnico: distinción y método",
        parrafos: [
          "Más allá del pronunciamiento de principios, la sentencia construye la arquitectura técnica de la indexación. Distingue las obligaciones dinerarias (susceptibles de indexación directa) de las obligaciones de valor (que ya se reparan a valor presente y se indexan en ejecución cuando hay desfase temporal). Identifica el Índice de Precios al Consumidor (IPC) del INEC como parámetro razonable. Y deja claro que la indexación debe pedirse expresamente — la Sala mantiene el principio dispositivo, lo que significa que la procedencia depende de su inclusión en la pretensión.",
          "Por esto, la doctrina se aplica desde 2004 hasta el día de hoy en miles de procesos civiles, comerciales y contencioso-administrativos. Cada vez que un tribunal indexa una condena, está aplicando — directa o indirectamente — el cambio doctrinal que esta sentencia introdujo.",
        ],
      },
    ],

    casoFactico: [
      "El caso surgió de un conflicto inmobiliario en San José. Ángela Zelaya Irias arrendaba cinco locales comerciales a Edificio Central S.A. en el inmueble conocido como «Edificio Knöhr». En diciembre de 1992, las partes pactaron la entrega temporal de los locales para que el propietario remodelara, con el compromiso de devolverlos a la actora en una fecha cierta. Si incumplía, debía pagar ¢87.500 mensuales como cláusula penal.",
      "Edificio Central S.A. no entregó los locales. En su lugar, simuló una venta del inmueble a Megaservicios Automotrices S.A. — empresa de la misma familia — y arrendó el bien a Centro Uno Actual S.A. La señora Zelaya demandó en proceso ordinario, pidiendo la nulidad de la venta simulada, el pago de la cláusula penal, daño por derecho de llave, lucro cesante e indexación.",
      "La instancia y el tribunal le dieron parcialmente la razón pero rechazaron la indexación, citando la jurisprudencia nominalista. La actora recurrió en casación. La Sala desestimó el recurso por razones procesales (la indexación no se había pedido expresamente en la demanda original), pero aprovechó el caso para reformular la doctrina hacia el futuro. La pretensión particular se perdió; la doctrina cambió para todos.",
    ],

    textoCompleto: TEXTO_1016_F_2004,

    textoCompletoFuente: "Sistema NEXUS-PJ — Poder Judicial de Costa Rica",
    textoCompletoUrl:
      "https://salaprimera.poder-judicial.go.cr/phocadownload/Textos_fallos_relevantes/Civil/1016-F-04.pdf",

    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho.",
    redactoresAdicionales: [],

    fuenteUrl:
      "https://nexuspj.poder-judicial.go.cr",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",

    metaDescription:
      "Resolución N° 1016-F-2004 de la Sala Primera de la Corte Suprema de Justicia, redactada por el Magistrado Óscar Eduardo González Camacho. Sentencia fundacional que estableció la procedencia de la indexación extra-convencional de obligaciones dinerarias en Costa Rica con base directa en los artículos 41, 33 y 49 de la Constitución Política.",
  },
];

export function getSentenciaBySlug(slug: string): SentenciaDestacada | null {
  return SENTENCIAS_DESTACADAS.find((s) => s.slug === slug) ?? null;
}

export function getAllSentencias(): SentenciaDestacada[] {
  return SENTENCIAS_DESTACADAS;
}
