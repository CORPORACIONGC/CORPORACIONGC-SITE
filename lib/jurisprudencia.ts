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

export type SeccionAnalisis = {
  id: string;
  titulo: string;
  parrafos: string[];
  /** Pasajes literales que acompañan la sección: [pasaje, párrafo] o
   *  [pasaje, párrafo, tras]. `tras` es el párrafo de la sección después del
   *  cual va (0 por defecto; -1, antes del primero). */
  literales?: ([number, number] | [number, number, number])[];
  /** Pasajes literales de otras resoluciones que citan la sentencia. No
   *  pasan por `esLiteral` (no son de esta sentencia): cada uno se cotejó a
   *  mano con el texto íntegro de su resolución. «[…]» marca una omisión.
   *  `tras` es el índice del párrafo después del cual va (0 por defecto). */
  citasExternas?: {
    texto: string;
    destacar?: string[];
    citation: string;
    nexusId: string;
    tras?: number;
  }[];
  visual?:
    | "trayectoria"
    | "linea-temporal"
    | "anclajes"
    | "comparacion"
    | "periodo"
    | "recepcion"
    | "citas";
  /** Nota práctica breve al cierre de la sección. */
  nota?: string;
};

/** Enlace a una fuente oficial: un voto en Nexus o una norma en SINALEVI. */
export type EnlaceFuente = { etiqueta: string; nexusId?: string; scijId?: number };

/** Datos de los elementos visuales. Toda frase marcada `literal` debe ser
 *  copia exacta de un pasaje; la página la descarta si no lo es. */
export type VisualesSentencia = {
  trayectoria?: { etapa: string; sede: string; detalle: string; final?: boolean }[];
  anclajes?: { articulo: string; principio: string; literal: string; citation: string }[];
  comparacion?: {
    titulo: string;
    rasgo: string;
    enElCaso?: string;
    literal: string;
    citation: string;
  }[];
  periodo?: { desde: string; hasta: string; tramo: string; parametro: string };
  /** Cómo la recibieron la jurisprudencia y la ley, en orden cronológico. */
  recepcion?: {
    anio: string;
    organo: string;
    texto: string;
    enlaces: EnlaceFuente[];
    final?: boolean;
  }[];
  /** Recuento de las resoluciones que la citan. Las cifras y la lista salen
   *  de `RESOLUCIONES_QUE_CITAN` (lib/jurisprudencia-citas.ts); aquí van la
   *  fecha de corte, el método y el CSV público. */
  citas?: { corte: string; metodo: string; csv: string };
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

  /** Síntesis breves para la ficha de la portada, en prosa y en voz de la
   *  firma (a diferencia de los fragmentos, que son de la Sala). Deben
   *  sostenerse en el análisis de esta misma página. */
  sintesisPortada?: {
    caso: string;
    analisis: string;
    impacto: string;
  };

  /** Frases breves para la portada. Deben ser copia exacta de una frase de
   *  `pasajes`: `fragmentosLiterales` descarta la que no lo sea. */
  fragmentosPortada?: { texto: string; citation: string }[];

  /** Análisis doctrinal — qué estableció jurídicamente (formato anterior;
   *  si existe `analisis`, la página usa ese). */
  doctrina?: SeccionDoctrinal[];

  /** Análisis en prosa para la página de la sentencia. Cada sección es
   *  prosa de la firma; `literales` teje pasajes de la Sala (índices de
   *  `pasajes`) y `visual` inserta un elemento gráfico con datos de
   *  `visuales`. */
  analisis?: SeccionAnalisis[];
  visuales?: VisualesSentencia;

  /** Resumen del caso (las partes y el conflicto fáctico) */
  casoFactico?: string[];

  /** Identificador del documento de la sentencia en Nexus PJ (tipo «sen-»,
   *  el texto completo; no el extracto «ext-»). El sitio no reproduce el
   *  texto íntegro: enlaza directo a Nexus. */
  nexusId: string;

  /** Votos que la propia sentencia cita, con su documento en Nexus. */
  precedentes?: {
    /** Sala Primera si se omite. */
    organo?: string;
    numero: string;
    fecha: string;
    nexusId: string;
    nota: string;
  }[];

  /** Votos posteriores que citan la sentencia, verificados en su texto. */
  citadaPor?: {
    organo: string;
    numero: string;
    fecha: string;
    nexusId: string;
    nota: string;
  }[];

  /** Normativa de la sentencia, con su identificador en SINALEVI. `tema`
   *  distingue la que aplica de la posterior (por defecto, «Disposiciones
   *  aplicadas»). */
  normativa?: {
    nombre: string;
    detalle: string;
    articulos: string;
    scijId: number;
    tema?: string;
  }[];

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

    sintesisPortada: {
      caso:
        "Una arrendataria de cinco locales comerciales en San José demandó a la propietaria del edificio, que simuló la venta del inmueble para no devolvérselos después de una remodelación. Obtuvo una indemnización por el derecho de llave y el lucro cesante; cuando después pidió actualizar esas sumas a su valor presente, el Tribunal se lo negó con base en la jurisprudencia nominalista.",
      analisis:
        "La Sala Primera abandonó quince años de doctrina según la cual la indexación solo procedía si las partes la habían pactado. Con fundamento directo en los artículos 41, 33 y 49 de la Constitución, sostuvo que reparar exige restituir el valor real de lo debido, distinguió las obligaciones dinerarias de las de valor y señaló el Índice de Precios al Consumidor como parámetro.",
      impacto:
        "La Sala Primera la reiteró en 2005, la Sala Segunda la llevó a los procesos laborales y la Sala Constitucional avaló esa extensión en 2012; en lo contencioso-administrativo, el Código de 2006 hizo de la actualización un deber de toda condena dineraria. Hoy la citan al menos 132 resoluciones de 16 despachos. Su regla práctica sigue intacta: la indexación se pide desde la demanda.",
    },

    fragmentosPortada: [
      {
        texto:
          "Reparar implica restituir, reponer en lo posible el estado de cosas lesionado a su situación anterior dentro del contexto y valor presente.",
        citation: "Considerando VIII · Artículo 41",
      },
      {
        texto: "No hay justicia cumplida y efectiva sin restitución plena de lo debido.",
        citation: "Considerando VIII · Artículo 41",
      },
      {
        texto: "Ante una misma situación, la misma solución.",
        citation: "Considerando VIII · Artículo 33",
      },
    ],

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
      {
        titulo: "La tesis que se abandona",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto:
              "Ante ello es preciso recordar que en varios antecedentes jurisprudenciales de esta Sala, por unanimidad en unos, por mayoría en otros, se ha declarado la improcedente indexación extra-convencional en virtud de la inexistencia de una norma legal que así lo disponga. Se ha dicho que “la indexación es viable siempre que sea convencional, es decir, cuando medie acuerdo expreso, no así ante la ausencia de pacto entre las partes, porque no existe norma legal que lo autorice”.",
            destacar: ["la indexación es viable siempre que sea convencional"],
          },
        ],
      },
      {
        titulo: "La tutela judicial efectiva",
        citation: "Considerando VIII — Artículos 41 y 49 Constitución Política",
        parrafos: [
          {
            texto:
              "Es por ello, que la Constitución Política por virtud de los artículos 41 y 49, contempla como derecho fundamental, la tutela judicial efectiva, según lo ha pregonado la unívoca y diáfana jurisprudencia de la Sala Constitucional.",
            destacar: ["la tutela judicial efectiva"],
          },
        ],
      },
      {
        titulo: "La pretensión expresa",
        citation: "Considerando X",
        parrafos: [
          {
            texto:
              "Y este aspecto resulta de capital importancia en el caso bajo análisis, ya que, en el estado actual de cosas, el reconocimiento de la indexación, para las obligaciones y en los términos anteriormente dichos, lo será, siempre que, se haya dado un requerimiento expreso de la parte en su pretensión oportuna; de lo contrario, su reconocimiento provocaría la incongruencia del fallo estimatorio, con la súbita nulidad de lo dispuesto.",
            destacar: ["un requerimiento expreso de la parte en su pretensión oportuna"],
          },
        ],
      },
    ],

    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "El conflicto nació en el Edificio Knöhr, en San José. Ángela Zelaya Irias arrendaba allí cinco locales comerciales a Edificio Central S.A. En diciembre de 1992 las partes pactaron que la propietaria los recibiría temporalmente para remodelarlos y los devolvería en una fecha cierta; si incumplía, pagaría ¢87.500 mensuales como cláusula penal.",
          "Edificio Central S.A. nunca devolvió los locales. Simuló una venta del inmueble a Megaservicios Automotrices S.A., empresa de la misma familia, y lo arrendó a Centro Uno Actual S.A. La arrendataria demandó en proceso ordinario la nulidad de esa venta, la cláusula penal y los daños por el derecho de llave y el lucro cesante.",
          "El Juzgado declaró simulada la venta y le reconoció la cláusula penal y el derecho de llave, pero le negó el lucro cesante; el Tribunal se lo concedió en apelación. Solo después de la primera sentencia pidió la actora que esas sumas se actualizaran a su valor presente, y el Tribunal se lo negó con base en la jurisprudencia nominalista de la Sala Primera. Con ese agravio llegó a casación.",
        ],
        visual: "trayectoria",
      },
      {
        id: "nominalismo",
        titulo: "Quince años de nominalismo",
        parrafos: [
          "Hasta el 26 de noviembre de 2004, la Sala Primera sostenía, en jurisprudencia constante desde 1989, que la indexación de una obligación dineraria solo procedía cuando las partes la habían pactado expresamente. A falta de una norma legal que la autorizara, el deudor debía únicamente la suma nominal, aunque la inflación la hubiera vaciado de contenido.",
          "Cinco sentencias sostenían esa tesis. En la práctica, un acreedor podía recibir, años después de ganar su juicio, una suma que ya no equivalía al daño sufrido: la justicia llegaba, pero llegaba devaluada.",
        ],
        literales: [[5, 0]],
        visual: "linea-temporal",
      },
      {
        id: "el-giro",
        titulo: "El giro",
        parrafos: [
          "Con esas palabras, la Sala abandonó la tesis nominalista. Su fundamento fue la propia Constitución Política: la regla siempre estuvo ahí, y lo que cambió fue la lectura. El artículo 41 manda hacer «justicia pronta, cumplida, sin denegación», y de él la Sala dedujo que la justicia cumplida no admite un pago insuficiente. Si la moneda se devalúa entre la condena y el pago, indemnizar el monto nominal equivale a denegar parcialmente la justicia.",
        ],
        literales: [[0, 0, -1]],
      },
      {
        id: "anclajes",
        titulo: "Tres anclajes constitucionales",
        parrafos: [
          "El razonamiento descansa en tres artículos que operan a la vez. El 41 exige una reparación íntegra y oportuna; el 49, leído junto con el 41, consagra la tutela judicial efectiva; y el 33 asegura la igualdad.",
          "El argumento de igualdad es particularmente fuerte. El ordenamiento ya reconocía la indexación, incluso de oficio, en ciertos ámbitos de la Administración Pública, y negarla a un acreedor en una situación equivalente habría roto ese principio.",
        ],
        literales: [[1, 2]],
        visual: "anclajes",
      },
      {
        id: "obligaciones",
        titulo: "Obligaciones dinerarias y obligaciones de valor",
        parrafos: [
          "Sentada la procedencia de la indexación, la Sala construyó su arquitectura técnica a partir de una distinción. Las obligaciones dinerarias admiten la indexación directa. Las obligaciones de valor, como las indemnizaciones por el derecho de llave y el lucro cesante de este caso, ya se reparan a valor presente, y se actualizan en la ejecución cuando entre la condena y el pago media un desfase.",
        ],
        visual: "comparacion",
      },
      {
        id: "ipc",
        titulo: "El Índice de Precios al Consumidor",
        parrafos: [
          "Aun en las obligaciones de valor, entre la fijación del monto y la firmeza de la sentencia suele transcurrir mucho tiempo, y ese lapso desactualiza la condena. Para cubrirlo, la Sala admitió la operación indexatoria en la ejecución del fallo, siempre que la sentencia principal la haya establecido a solicitud expresa de parte, y señaló como parámetro el Índice de Precios al Consumidor.",
        ],
        literales: [[4, 1]],
        visual: "periodo",
      },
      {
        id: "requisito",
        titulo: "Un requisito: pedirla en la demanda",
        parrafos: [
          "La sentencia mantiene el principio dispositivo: la indexación se reconoce cuando la parte la pidió expresamente en su pretensión. Por esa razón la actora no la obtuvo. La solicitó después de la primera sentencia, y concederla habría hecho incongruente el fallo. La Sala declaró sin lugar el recurso y, en el mismo acto, cambió la doctrina para todos los casos siguientes.",
        ],
        literales: [[7, 0]],
        nota: "Quien reclame una suma de dinero debe pedir su indexación desde la demanda.",
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La nueva doctrina se asentó pronto. En julio de 2005, al resolver el reclamo de unas sumas dejadas de percibir por puntos de carrera profesional, la propia Sala Primera la reiteró y dejó constancia de cómo había llegado a ella.",
          "Al año siguiente, la regla pasó a la ley en la jurisdicción contencioso-administrativa. El artículo 123 del Código Procesal Contencioso-Administrativo, del que el magistrado González Camacho fue corredactor, dispone que la sentencia que condene al cumplimiento de una obligación dineraria «deberá incluir pronunciamiento sobre la actualización de dicha suma», y toma para las obligaciones en colones el mismo parámetro que la Sala había señalado: el índice de precios al consumidor.",
          "Después, la doctrina salió de la materia civil. Entre 2009 y 2010, la Sala Segunda la aplicó a los procesos laborales y admitió que los montos reclamados por un trabajador se indexen aunque ninguna ley ni ningún pacto lo prevean. Esa extensión llegó dos veces a la Sala Constitucional en 2012, por una consulta judicial y por una acción de inconstitucionalidad, y en ambas la Sala la tuvo por conforme con la Constitución. Al razonarlo, situó su origen en la sentencia de 2004:",
        ],
        citasExternas: [
          {
            texto:
              "No obstante, luego de un serio proceso de reflexión sobre el tema, en fecha reciente, en la sentencia No. 1016-F-04 de las 9 horas 30 minutos del 26 de noviembre del 2004, se estableció la procedencia de la indexación no convencional, en determinados supuestos de obligaciones donde la parte con derecho así lo haya requerido, básicamente, con sustento en la doctrina que se desprende del numeral 41 de la Constitución Política que obliga a la reparación integral de los daños.",
            destacar: ["luego de un serio proceso de reflexión sobre el tema"],
            citation: "Sala Primera, voto 519-F-2005 · Considerando IX",
            nexusId: "sen-1-0034-315153",
          },
          {
            texto:
              "Asimismo, Sala Primera de la Corte Suprema de Justicia, en la Sentencia No. 1016-F-2004 de las 09:30 hrs. de 26 de noviembre de 2004, determinó que, igualmente, se pueden llevar a cabo indexaciones extraconvencionales, sin que exista norma expresa que así lo establezca. A partir, precisamente, de lo dispuesto en éste último voto -y ante la carencia en nuestro ordenamiento jurídico de norma alguna sobre el particular-, es que la Sala Segunda de la Corte Suprema de Justicia ha determinado, a lo largo de varias de sus sentencias (v.gr. las Nos. 260-2009, 312-2009, 225-2010 y 1419-2010), que es posible que se indexen […] los montos dinerarios de los derechos laborales pretendidos en una demanda de trabajo.",
            destacar: ["A partir, precisamente, de lo dispuesto en éste último voto"],
            citation: "Sala Constitucional, voto 8742-2012 · Considerando V",
            nexusId: "sen-1-0007-543071",
            tras: 2,
          },
        ],
        visual: "recepcion",
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "Más de veinte años después, la sentencia sigue en uso. Hemos encontrado su cita en el texto de al menos 132 resoluciones de 16 despachos, dictadas entre 2005 y 2026: tribunales contencioso-administrativos, las Salas Primera, Segunda y Constitucional, y tribunales civiles, de trabajo, de familia y agrarios.",
          "Es el alcance de un fallo que nació en un pleito entre una arrendataria y la dueña de un edificio, y que además negó lo que la recurrente pedía. Cada vez que un tribunal actualiza una condena dineraria a su valor presente sin que las partes lo hayan pactado, aplica una regla que se escribió aquí, directamente o a través de la ley y de los fallos que la siguieron.",
        ],
        visual: "citas",
      },
    ],

    visuales: {
      trayectoria: [
        {
          etapa: "La demanda",
          sede: "Juzgado Segundo Civil de San José · 1995",
          detalle: "Nulidad de la venta simulada, cláusula penal, derecho de llave y lucro cesante. La indexación no se pide.",
        },
        {
          etapa: "Primera instancia",
          sede: "Sentencia 239-01 · 27 de marzo de 2001",
          detalle: "Declara simulada la venta y concede la cláusula penal y el derecho de llave. Deniega el lucro cesante.",
        },
        {
          etapa: "Apelación",
          sede: "Tribunal Segundo Civil, Sección Primera · 28 de febrero de 2003",
          detalle: "Fija el derecho de llave en ¢7 millones y concede ¢5 millones de lucro cesante. Niega traerlos a valor presente: la indexación, dice, solo nace de un convenio.",
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 26 de noviembre de 2004",
          detalle: "Declara sin lugar el recurso, porque la indexación no estaba en la demanda, y en el mismo fallo abandona la tesis nominalista.",
          final: true,
        },
      ],
      anclajes: [
        {
          articulo: "41",
          principio: "Reparación íntegra",
          literal:
            "Reparar implica restituir, reponer en lo posible el estado de cosas lesionado a su situación anterior dentro del contexto y valor presente.",
          citation: "Considerando VIII",
        },
        {
          articulo: "49",
          principio: "Tutela judicial efectiva",
          literal:
            "Es por ello, que la Constitución Política por virtud de los artículos 41 y 49, contempla como derecho fundamental, la tutela judicial efectiva, según lo ha pregonado la unívoca y diáfana jurisprudencia de la Sala Constitucional.",
          citation: "Considerando VIII",
        },
        {
          articulo: "33",
          principio: "Igualdad",
          literal: "Ante una misma situación, la misma solución.",
          citation: "Considerando VIII",
        },
      ],
      comparacion: [
        {
          titulo: "Obligación dineraria",
          rasgo: "Se debe una suma de dinero. Admite la indexación directa.",
          literal:
            "Esto permite sostener que la indexación como tal, cobra sentido esencialmente respecto de las obligaciones dinerarias, sobre las que no existe duda en su procedencia, sin exclusión, claro está, de los perjuicios correspondientes, pues ha de quedar claro que se trata de extremos diferentes e independientes.",
          citation: "Considerando IX",
        },
        {
          titulo: "Obligación de valor",
          rasgo: "Se debe un valor, que se liquida a valor presente y se actualiza en la ejecución si hay desfase.",
          enElCaso: "El derecho de llave y el lucro cesante.",
          literal:
            "Ambos extremos escapan por tanto a los límites de una estimación pecuniaria establecida en el libelo de demanda, y ambas quedan, por mayoría de razón, sujetas a la reparación patrimonial actualizada.",
          citation: "Considerando IX",
        },
      ],
      periodo: {
        desde: "Fijación del monto de la condena",
        hasta: "Firmeza de la sentencia",
        tramo: "Período que cubre la indexación, en la ejecución del fallo",
        parametro: "Índice de Precios al Consumidor",
      },
      recepcion: [
        {
          anio: "2005",
          organo: "Sala Primera",
          texto: "La reitera y la consolida como doctrina de la Sala.",
          enlaces: [{ etiqueta: "Voto 519-F-2005", nexusId: "sen-1-0034-315153" }],
        },
        {
          anio: "2006",
          organo: "Código Procesal Contencioso-Administrativo",
          texto: "La actualización de la condena dineraria pasa a ser un deber legal.",
          enlaces: [{ etiqueta: "Ley 8508, art. 123", scijId: 57436 }],
        },
        {
          anio: "2009",
          organo: "Sala Segunda",
          texto: "La extiende a los reclamos laborales, entre 2009 y 2010.",
          enlaces: [
            { etiqueta: "260-2009", nexusId: "sen-1-0034-438436" },
            { etiqueta: "312-2009", nexusId: "sen-1-0005-825662" },
            { etiqueta: "225-2010", nexusId: "sen-1-0034-465494" },
            { etiqueta: "1419-2010", nexusId: "sen-1-0034-492209" },
          ],
        },
        {
          anio: "2012",
          organo: "Sala Constitucional",
          texto: "Avala esa extensión y sitúa su origen en la sentencia de 2004.",
          enlaces: [
            { etiqueta: "8742-2012", nexusId: "sen-1-0007-543071" },
            { etiqueta: "14891-2012", nexusId: "sen-1-0007-550981" },
          ],
        },
        {
          anio: "2026",
          organo: "Sala Constitucional",
          texto: "Todavía la cita, al resolver una acción sobre la indexación laboral.",
          enlaces: [{ etiqueta: "26765-2026", nexusId: "sen-1-0007-1409860" }],
          final: true,
        },
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo:
          "Resoluciones judiciales cuyo texto cita la 1016-F-2004, por cualquiera de sus puntos, leídas una por una. Recuento de Corporación GC sobre jurisprudencia publicada: cada resolución cuenta una vez y las secciones de un mismo tribunal, como un solo despacho.",
        csv: "/datos/jurisprudencia/1016-F-2004-resoluciones-que-la-citan.csv",
      },
    },

    casoFactico: [
      "El caso surgió de un conflicto inmobiliario en San José. Ángela Zelaya Irias arrendaba cinco locales comerciales a Edificio Central S.A. en el inmueble conocido como «Edificio Knöhr». En diciembre de 1992, las partes pactaron la entrega temporal de los locales para que el propietario remodelara, con el compromiso de devolverlos a la actora en una fecha cierta. Si incumplía, debía pagar ¢87.500 mensuales como cláusula penal.",
      "Edificio Central S.A. no entregó los locales. En su lugar, simuló una venta del inmueble a Megaservicios Automotrices S.A. — empresa de la misma familia — y arrendó el bien a Centro Uno Actual S.A. La señora Zelaya demandó en proceso ordinario, pidiendo la nulidad de la venta simulada, el pago de la cláusula penal, daño por derecho de llave y lucro cesante.",
      "Las instancias le dieron parcialmente la razón y le reconocieron el derecho de llave y el lucro cesante. Después de la sentencia de primera instancia, la actora pidió además que esas sumas se actualizaran a su valor presente, y el Tribunal lo rechazó citando la jurisprudencia nominalista. La Sala declaró sin lugar el recurso de casación porque la indexación no se había pedido en la demanda, pero aprovechó el caso para reformular la doctrina hacia el futuro. La pretensión particular se perdió; la doctrina cambió para todos.",
    ],

    nexusId: "sen-1-0034-292363",

    /* Los cinco votos de la línea nominalista que la sentencia enumera y
       abandona, en el orden y con las fechas con que los cita. */
    precedentes: [
      { numero: "Voto 57-1989", fecha: "24-07-1989", nexusId: "sen-1-0034-148328", nota: "Precedente de la tesis nominalista que la sentencia abandona." },
      { numero: "Voto 75-1992", fecha: "13-05-1992", nexusId: "sen-1-0034-157067", nota: "Precedente de la tesis nominalista que la sentencia abandona." },
      { numero: "Voto 49-1995", fecha: "19-05-1995", nexusId: "sen-1-0034-162798", nota: "Precedente de la tesis nominalista que la sentencia abandona." },
      { numero: "Voto 947-2000", fecha: "22-12-2000", nexusId: "sen-1-0034-148487", nota: "Precedente de la tesis nominalista que la sentencia abandona." },
      { numero: "Voto 518-2003", fecha: "28-08-2003", nexusId: "sen-1-0034-250505", nota: "Precedente de la tesis nominalista que la sentencia abandona." },
      { organo: "Sala Constitucional", numero: "Voto 5224-94", fecha: "13-09-1994", nexusId: "sen-1-0007-81131", nota: "Citado por la Sala sobre el alcance de «ocurriendo a las leyes» del artículo 41." },
      { organo: "Sala Constitucional", numero: "Voto 1979-96", fecha: "30-04-1996", nexusId: "sen-1-0007-81953", nota: "Citado por la Sala sobre el alcance de «ocurriendo a las leyes» del artículo 41." },
    ],

    /* Votos posteriores que la citan, cotejados en su texto íntegro. */
    citadaPor: [
      { organo: "Sala Primera", numero: "Voto 519-F-2005", fecha: "20-07-2005", nexusId: "sen-1-0034-315153", nota: "Reitera la procedencia de la indexación no convencional." },
      { organo: "Sala Segunda", numero: "Voto 260-2009", fecha: "26-03-2009", nexusId: "sen-1-0034-438436", nota: "Indexación extraconvencional de derechos laborales." },
      { organo: "Sala Segunda", numero: "Voto 312-2009", fecha: "22-04-2009", nexusId: "sen-1-0005-825662", nota: "Indexación extraconvencional de derechos laborales." },
      { organo: "Sala Segunda", numero: "Voto 225-2010", fecha: "17-02-2010", nexusId: "sen-1-0034-465494", nota: "Indexación extraconvencional de derechos laborales." },
      { organo: "Sala Segunda", numero: "Voto 1419-2010", fecha: "27-10-2010", nexusId: "sen-1-0034-492209", nota: "Indexación extraconvencional de derechos laborales." },
      { organo: "Sala Constitucional", numero: "Voto 8742-2012", fecha: "27-06-2012", nexusId: "sen-1-0007-543071", nota: "Consulta judicial: la indexación extraconvencional en materia laboral no resulta inconstitucional." },
      { organo: "Sala Constitucional", numero: "Voto 14891-2012", fecha: "24-10-2012", nexusId: "sen-1-0007-550981", nota: "Declara sin lugar la acción contra esa jurisprudencia." },
      { organo: "Sala Constitucional", numero: "Voto 26765-2026", fecha: "15-07-2026", nexusId: "sen-1-0007-1409860", nota: "Reproduce el razonamiento de 2012 y la cita de la 1016-F-2004." },
    ],

    normativa: [
      {
        nombre: "Constitución Política de la República de Costa Rica",
        detalle: "7 de noviembre de 1949",
        articulos: "Arts. 33, 41 y 49",
        scijId: 871,
      },
      {
        nombre: "Código Procesal Contencioso-Administrativo",
        detalle: "Ley 8508 · 28 de abril de 2006",
        articulos: "Arts. 123 y 124",
        scijId: 57436,
        tema: "Posterior a la sentencia",
      },
    ],

    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho.",
    redactoresAdicionales: [],

    fuenteUrl:
      "https://nexuspj.poder-judicial.go.cr/document/sen-1-0034-292363",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",

    metaDescription:
      "Resolución N° 1016-F-2004 de la Sala Primera de la Corte Suprema de Justicia, redactada por el Magistrado Óscar Eduardo González Camacho. Sentencia fundacional que estableció la procedencia de la indexación extra-convencional de obligaciones dinerarias en Costa Rica con base directa en los artículos 41, 33 y 49 de la Constitución Política.",
  },
];

export const nexusUrl = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
export const scijUrl = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;

export function getSentenciaBySlug(slug: string): SentenciaDestacada | null {
  return SENTENCIAS_DESTACADAS.find((s) => s.slug === slug) ?? null;
}

/** Los fragmentos de portada que aparecen literalmente en algún pasaje. Un
 *  fragmento que no coincida carácter por carácter no se muestra: la portada
 *  nunca cita algo que la sentencia no dice. */
/** ¿Aparece el texto, carácter por carácter, en algún pasaje literal? */
export function esLiteral(s: SentenciaDestacada, texto: string) {
  return s.pasajes.some((p) => p.parrafos.some((q) => q.texto.includes(texto)));
}

export function fragmentosLiterales(s: SentenciaDestacada) {
  const textos = s.pasajes.flatMap((p) => p.parrafos.map((q) => q.texto));
  return (s.fragmentosPortada ?? []).filter((f) => textos.some((t) => t.includes(f.texto)));
}

export function getAllSentencias(): SentenciaDestacada[] {
  return SENTENCIAS_DESTACADAS;
}
