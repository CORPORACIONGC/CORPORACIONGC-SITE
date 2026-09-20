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
    | "citas"
    | "formas"
    | "reparto";
  /** Nota práctica breve al cierre de la sección. */
  nota?: string;
};

/** Enlace a una fuente oficial: un voto en Nexus, una norma en SINALEVI o,
 *  con `url`, otra fuente oficial (un dictamen de la Procuraduría en SINALEVI). */
export type EnlaceFuente = { etiqueta: string; nexusId?: string; scijId?: number; url?: string };

/** Datos de los elementos visuales. Toda frase marcada `literal` debe ser
 *  copia exacta de un pasaje; la página la descarta si no lo es. */
export type VisualesSentencia = {
  trayectoria?: { etapa: string; sede: string; detalle: string; final?: boolean }[];
  anclajes?: {
    articulo: string;
    /** Ley del artículo, si no es la Constitución (p. ej. «LGAP»). */
    norma?: string;
    principio: string;
    literal: string;
    citation: string;
  }[];
  comparacion?: {
    titulo: string;
    rasgo: string;
    enElCaso?: string;
    literal: string;
    citation: string;
  }[];
  periodo?: { desde: string; hasta: string; tramo: string; parametro: string };
  /** Comparaciones por id de sección, cuando la página tiene más de una
   *  (si falta la de una sección, se usa `comparacion`). */
  comparaciones?: Record<string, NonNullable<VisualesSentencia["comparacion"]>>;
  /** Tres o cuatro formas de un concepto, en prosa de la firma, por id de
   *  la sección que las muestra. */
  formas?: Record<string, { titulo: string; texto: string }[]>;
  /** Reparto de una condena entre causas concurrentes. `condena` marca la
   *  parte que asume la Administración. */
  reparto?: {
    total: { etiqueta: string; monto: string };
    partes: { etiqueta: string; porcentaje: number; detalle: string; condena?: boolean }[];
    nota: string;
  };
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
  fechaISO: string; // "2004-11-26"
  hora?: string;
  expediente: string;
  tribunal: string;

  /** Categorización */
  area: string;
  materia: string;

  /** Badge editorial opcional */
  badge?: {
    type: "fundacional" | "referencia" | "ambiental" | "doctrinal";
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

  /** Votos que la propia sentencia cita, con su documento en Nexus (si aún
   *  no se tiene, se muestran sin enlace). */
  precedentes?: {
    /** Sala Primera si se omite. */
    organo?: string;
    numero: string;
    fecha: string;
    nexusId?: string;
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
  /** Título para el buscador: primero lo que la gente escribe, después el
   *  voto y el nombre del magistrado. Si falta, se arma con el título
   *  editorial, que es bello pero no es lo que se busca. */
  seoTitle?: string;
  /** Áreas de práctica donde aplicamos este criterio. Enlaza la sentencia
   *  con `/areas/<slug>` en ambos sentidos: la página del área muestra la
   *  sentencia y la sentencia remite al área. */
  areas?: string[];
  /** Etiquetas de artículos con las que se empareja, para ofrecerla al pie
   *  de los artículos que tratan la misma materia. */
  temas?: string[];
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
    fechaISO: "2004-11-26",
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
        "Una arrendataria de cinco locales comerciales en San José demandó a la propietaria del edificio, que **simuló la venta del inmueble** para no devolvérselos después de una remodelación. Obtuvo una indemnización por el derecho de llave y el lucro cesante; cuando después pidió actualizar esas sumas a su valor presente, el Tribunal se lo negó con base en la jurisprudencia nominalista.",
      analisis:
        "La Sala Primera **abandonó quince años de doctrina** según la cual la indexación solo procedía si las partes la habían pactado. Con fundamento directo en los **artículos 41, 33 y 49 de la Constitución**, sostuvo que **reparar exige restituir el valor real de lo debido**, distinguió las obligaciones dinerarias de las de valor y señaló el Índice de Precios al Consumidor como parámetro.",
      impacto:
        "La Sala Primera la reiteró en 2005, la Sala Segunda la llevó a los procesos laborales y la Sala Constitucional avaló esa extensión en 2012; en lo contencioso-administrativo, el Código de 2006 hizo de la actualización un deber de toda condena dineraria. Hoy la citan **al menos 154 resoluciones de 16 despachos**, además de catorce pronunciamientos de la Procuraduría, de la Corte y de la ARESEP. Su regla práctica sigue intacta: **la indexación se pide desde la demanda**.",
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
          "Más de veinte años después, la sentencia sigue en uso. Hemos buscado su cita en Nexus, el buscador público del Poder Judicial, y la hemos encontrado en el texto de al menos 154 resoluciones de 16 despachos, dictadas entre 2005 y 2026.",
          "El reparto dice a dónde llegó. La jurisdicción contencioso-administrativa la cita en 43 resoluciones y la propia Sala Primera en 34, pero el grupo más numeroso después de ellas es la Sala Segunda con los tribunales de trabajo, con 41. Los tribunales civiles la citan en 18, la Sala Constitucional en 7, y el Tribunal de Familia y el Tribunal Agrario en 4 cada uno. La primera cita llegó tres meses después del fallo, en el voto 81-2005 de la misma Sala, del 22 de febrero de 2005; las dos últimas son sentencias de la Sala Constitucional de julio de 2026.",
          "Fuera de los tribunales la citan 14 pronunciamientos. Ocho son de la Procuraduría: dos opiniones jurídicas de 2005, a los pocos meses del fallo; tres informes rendidos a la Sala Constitucional en acciones de inconstitucionalidad de 2012 y 2018; y los dictámenes C-457-2020 y C-159-2024, que reproducen su párrafo sobre actualizar lo debido a la fecha efectiva del pago. El Consejo Superior del Poder Judicial la invocó en cuatro sesiones, la última en abril de 2025, y la Junta Directiva de la ARESEP en 2009, al tratar el derecho al equilibrio financiero de un contrato de servicio público. La Corte Plena la citó en 2013.",
          "En la doctrina aparece en cuatro revistas de acceso libre: El Foro 9 (2009), del Colegio de Abogados; la Revista Judicial 98 (2010) y 112 (2014), de la Escuela Judicial; y la Revista de Derecho de la Hacienda Pública de la Contraloría, de 2025, que la trae a propósito de la plusvalía ecológica.",
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
          "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 1016-F-2004, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
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

    areas: ["litigio-contencioso-administrativo", "casacion-sala-primera", "expropiaciones"],
    temas: ["Derecho Administrativo", "Contencioso Administrativo", "CPCA", "Responsabilidad Patrimonial", "Derecho Expropiatorio"],
    metaDescription:
      "¿Se actualiza una condena en colones sin que se haya pactado? La Sala Primera dijo que sí y fijó el IPC. Voto 1016-F-2004, con los pasajes literales.",
    seoTitle: "Indexación de deudas en Costa Rica · Voto 1016-F-2004 · Óscar González Camacho",
  },
  /* 584-F-2005. Los pasajes se copiaron del texto de Nexus, que anonimiza a
     las personas: por eso la prosa tampoco las nombra. */
  {
    slug: "responsabilidad-del-estado-por-omision",
    numero: "Resolución N° 584-F-2005",
    fecha: "11 de agosto de 2005",
    fechaCorta: "11 Ago 2005",
    fechaISO: "2005-08-11",
    hora: "10:40 horas",
    expediente: "97-000736-0163-CA",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",
    area: "Derecho Administrativo",
    materia: "Responsabilidad patrimonial de la Administración",
    badge: {
      type: "referencia",
      label: "Sentencia de Referencia"
    },
    titulo: "La omisión que obliga a reparar",
    subtitulo: "La Sala Primera ordenó el régimen de responsabilidad objetiva de la Administración, definió el funcionamiento anormal y reconoció que la inactividad del Estado también genera el deber de indemnizar.",
    pullQuote: {
      texto: "De ahí que, ha de afirmarse de manera contundente (con fundamento y de acuerdo con lo dicho en considerandos anteriores) que la Administración Pública también es responsable por los daños y perjuicios ocasionados con su inactividad administrativa.",
      citation: "Considerando VII"
    },
    sintesisPortada: {
      caso: "Un peatón murió atropellado al cruzar la Autopista General Cañas, en un punto donde los vecinos **pedían un puente peatonal desde 1986**. Iba en alto estado de ebriedad. Su viuda demandó al Estado, y el Juzgado y el Tribunal rechazaron la demanda por culpa de la víctima.",
      analisis: "La Sala Primera ordenó el **régimen de responsabilidad objetiva** de la Administración. Definió el funcionamiento anormal, lo distinguió de la ilicitud y de la antijuridicidad, y declaró que **la inactividad también obliga a reparar**. La embriaguez de la víctima **redujo la condena a la mitad**, sin eliminarla.",
      impacto: "**Al menos 477 resoluciones** la citan, y **2024 y 2025 son los años de mayor uso**. La aplican el Tribunal Contencioso Administrativo, las tres Salas de casación, la Sala Constitucional y la jurisdicción penal, para condenar por omisión y para reducir la condena cuando la víctima concurre al daño."
    },
    fragmentosPortada: [
      {
        texto: "Desde que el Estado es persona sometida al Derecho y parte esencial del engranaje democrático, es responsable.",
        citation: "Considerando III"
      },
      {
        texto: "Esto permite señalar que la anormalidad puede manifestarse a través de un mal funcionamiento; un funcionamiento tardío, o una ausencia total de funcionamiento.",
        citation: "Considerando VI"
      },
      {
        texto: "De más está decir, que la indolencia administrativa puede producir (y de hecho produce) más graves lesiones que la propia actuación limitativa del órgano o ente público.",
        citation: "Considerando VII"
      }
    ],
    contexto: [
      "Desde la Ley General de la Administración Pública de 1978, la responsabilidad patrimonial de la Administración en Costa Rica es objetiva: la víctima no tiene que probar la culpa de ningún funcionario. La ley, sin embargo, dejó abiertas preguntas que la jurisprudencia tuvo que resolver, entre ellas qué es un funcionamiento anormal y si el Estado responde por lo que deja de hacer.",
      "La sentencia 584-F-2005, redactada por el magistrado Óscar Eduardo González Camacho, respondió esas preguntas en un solo cuerpo doctrinal y lo aplicó a un caso de omisión con resultado de muerte."
    ],
    pasajes: [
      {
        titulo: "La inactividad también obliga",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "De más está decir, que la indolencia administrativa puede producir (y de hecho produce) más graves lesiones que la propia actuación limitativa del órgano o ente público. De ahí que, ha de afirmarse de manera contundente (con fundamento y de acuerdo con lo dicho en considerandos anteriores) que la Administración Pública también es responsable por los daños y perjuicios ocasionados con su inactividad administrativa.",
            destacar: [
              "la Administración Pública también es responsable por los daños y perjuicios ocasionados con su inactividad administrativa"
            ]
          }
        ]
      },
      {
        titulo: "El Estado responsable",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Desde que el Estado es persona sometida al Derecho y parte esencial del engranaje democrático, es responsable. En abandono ha quedado aquella inmunidad absoluta de quien ejerce el poder.",
            destacar: [
              "es responsable"
            ]
          }
        ]
      },
      {
        titulo: "El régimen objetivo",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Este criterio finalista produce a su vez, una transformación plena en el eje central de la responsabilidad misma, pues abandona la observación analítica del sujeto productor del daño y la calificación de su conducta, para ubicarse en la posición de la víctima, que menguada en su situación jurídica, queda eximida en la comprobación de cualquier parámetro subjetivo del agente público actuante (salvo en lo que a su responsabilidad personal se refiere). Esto ocasiona, sin duda, un giro en el enfoque mismo de su fundamento, ya que habrá responsabilidad de la Administración siempre que su funcionamiento normal o anormal, cause un daño que la víctima no tenga el deber de soportar, ya sea patrimonial o extrapatrimonial, con independencia de su situación jurídica subjetiva y la titularidad o condición de poder que ostente, cumpliendo claro está, con el presupuesto imprescindible del nexo causal.",
            destacar: [
              "un daño que la víctima no tenga el deber de soportar",
              "cumpliendo claro está, con el presupuesto imprescindible del nexo causal"
            ]
          }
        ]
      },
      {
        titulo: "Los parámetros de la ley",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "De esta manera, el numeral 190 de nuestra Ley General de la Administración Pública refiere a “funcionamiento legítimo o ilegítimo, normal o anormal”, de donde la legitimidad o su antítesis, hace referencia básicamente a las conductas jurídicas de la Administración, mientras que lo normal o anormal, apunta, ante todo (pero no en exclusiva), a la conducta material de la Administración, representada entre otras, por la actividad prestacional que se atribuye al Estado como parte de la categoría social que también se le asigna en procura del bienestar general del colectivo. Nótese como el artículo 194 de la indicada ley, hace referencia a los “actos lícitos”, bajo la concepción de actividad jurídica, distinguiéndolos en la misma norma, de lo que califica como “funcionamiento normal”, entendido como actividad material."
          }
        ]
      },
      {
        titulo: "Los requisitos del daño",
        citation: "Considerando IV · cita el voto 132 de 1991",
        parrafos: [
          {
            texto: "para establecer así la responsabilidad directa del Estado sin necesidad de probar previamente que el daño se produjo por culpa del funcionario o de la Administración, exigiendo para la procedencia de la indemnización que el daño sufrido sea efectivo, evaluable e individualizable en relación con una persona o grupo -artículo 196-."
          }
        ]
      },
      {
        titulo: "La anormalidad",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "De esta manera, la anormalidad atiende a aquellas conductas administrativas, que en sí mismas, se apartan de la buena administración (conforme al concepto utilizado por la propia Ley General en el artículo 102 inciso d., que entre otras cosas incluye la eficacia y la eficiencia) o de la organización, de las reglas técnicas o de la pericia y el prudente quehacer en el despliegue de sus actuaciones, con efecto lesivo para la persona. Esto permite señalar que la anormalidad puede manifestarse a través de un mal funcionamiento; un funcionamiento tardío, o una ausencia total de funcionamiento.",
            destacar: [
              "un mal funcionamiento; un funcionamiento tardío, o una ausencia total de funcionamiento"
            ]
          }
        ]
      },
      {
        titulo: "La antijuridicidad de base",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "Siempre que la víctima no tenga ese deber de soportar la lesión, se convierte en antijurídica, por menoscabo a un tercero a contrapelo del ordenamiento. De no existir ésta, no cabe reparación.",
            destacar: [
              "De no existir ésta, no cabe reparación."
            ]
          }
        ]
      },
      {
        titulo: "La inactividad material",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "Más simple, hay inactividad de este tipo cuando existiendo para el ente u órgano público una obligación de dar o hacer impuesta por el ordenamiento jurídico o por una previa decisión suya, fuera o dentro de un procedimiento administrativo, no se despliega la debida actividad fáctica o jurídica que lleve a buen término la función otorgada, con detrimento de los derechos o intereses de uno o varios sujetos pasivos, ya sean privados o públicos, individuales o colectivos."
          }
        ]
      },
      {
        titulo: "La omisión, anormal e ilegítima",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "Esa pasividad frente al cumplimiento de obligaciones preexistentes se enmarca, para efectos de la responsabilidad civil extracontractual, como funcionamiento anormal de la Administración (en tanto se corresponda con una actividad material debida) y con una conducta ilegítima, que para este caso puede ser concurrente, en la medida en que el incumplimiento de lo debido no sólo atenta contra las reglas de buena administración, sino que infringe la juricidad en tanto incumple las potestades administrativas funcionales que dimanan del propio Ordenamiento Jurídico."
          }
        ]
      },
      {
        titulo: "La concurrencia de responsabilidades",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "Esta circunstancia confluye con el funcionamiento anormal e ilícito indicado, y por tanto, atenúa la responsabilidad de la Administración establecida en el considerando precedente."
          },
          {
            texto: "En efecto, de conformidad con todo lo anteriormente dicho, queda claro que en este caso existe una concurrencia de responsabilidades, pues confluyeron para la acción dañosa, tanto factores imputables a la Administración demandada (inactividad material-funcionamiento anormal e ilícito), cuanto a la propia culpa de la víctima por estado de ebriedad. Esta última sin embargo, no exime al Estado de su obligación indemnizatoria, pues como se ha dicho tantas veces, la ausencia del puente peatonal puso al occiso en una situación obligada de riesgo.",
            destacar: [
              "no exime al Estado de su obligación indemnizatoria"
            ]
          }
        ]
      },
      {
        titulo: "El cálculo del daño moral",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "Ahora bien, tomando en cuenta las condiciones sociales, económicas y temporales del fallecido, v.gr. su edad, ocupación, estado civil, ingresos posibles, expectativa de vida, etc, esta Sala arriba a la conclusión de que para el extremo de daño moral pleno corresponde una indemnización de ¢20.000.000,00. No obstante, siendo que la responsabilidad del Estado queda reducida a un cincuenta por ciento de la indemnización total –por virtud de la concurrencia de responsabilidades anteriormente indicada- debe reconocerse a la actora una indemnización por daño moral subjetivo en la suma de ¢10.000.000,00.",
            destacar: [
              "queda reducida a un cincuenta por ciento de la indemnización total"
            ]
          }
        ]
      },
      {
        titulo: "El voto salvado",
        citation: "Voto salvado de la magistrada León Feoli",
        parrafos: [
          {
            texto: "Es cierto que el Estado debe asegurar el bienestar colectivo, emprender las obras y el actuar necesario para garantía de la seguridad y que el cumplimiento de estas tareas genera responsabilidad. Pero, ello no conlleva a que las personas se conduzcan faltando al deber de cuidado y pongan en peligro su vida e integridad."
          }
        ]
      },
      {
        titulo: "La coincidencia en la doctrina",
        citation: "Voto salvado de la magistrada León Feoli",
        parrafos: [
          {
            texto: "Concuerdo con el preámbulo que se expone en el voto de mayoría, en punto a la temática sobre la evolución e independencia del régimen de responsabilidad objetiva, su fundamento constitucional, los parámetros de imputación legal, la obligatoriedad indemnizatoria frente a los daños y perjuicios causados por inacción y el nexo causal como presupuesto de responsabilidad, pese a que, en mi criterio, el Tribunal nunca desconoció la responsabilidad de la Administración, sólo que estimó aplicable una eximente que, como tal, la libera de asumirla."
          }
        ]
      }
    ],
    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "En 1986, la asociación de vecinos de la urbanización Los Arcos pidió al Ministerio de Obras Públicas y Transportes un puente peatonal para cruzar la Autopista General Cañas en ese sector. Once años después el puente seguía sin construirse. El 22 de enero de 1997, un hombre murió atropellado cuando intentaba cruzar la autopista en ese punto. La autopsia le encontró 377 mg % de alcohol en la sangre, un estado de intoxicación aguda.",
          "Su viuda reclamó la indemnización ante el Ministerio, que la denegó, y demandó al Estado por la responsabilidad objetiva derivada de esa omisión. El Juzgado acogió la defensa de culpa de la víctima y rechazó la demanda, y el Tribunal Contencioso Administrativo confirmó. Para ambas instancias, la embriaguez del peatón liberaba al Estado por completo.",
          "La Sala Primera casó la sentencia. Reconoció que la omisión del Ministerio fue causa de la muerte, admitió que la culpa de la víctima concurrió con ella y repartió el daño entre ambas. Condenó al Estado a pagar ¢10 millones por daño moral, con intereses y costas. La magistrada León Feoli salvó el voto."
        ],
        visual: "trayectoria"
      },
      {
        id: "regimen",
        titulo: "Un régimen objetivo",
        parrafos: [
          "Antes de resolver el caso, la Sala ordenó el régimen completo de la responsabilidad de la Administración. Partió de una premisa histórica:",
          "Desde la Ley General de la Administración Pública, esa responsabilidad es objetiva. La víctima no tiene que probar la culpa ni el dolo de ningún funcionario: le basta demostrar el daño y el nexo causal, y es la Administración la que debe probar una causa que la exima. La Sala lo explicó como un cambio de perspectiva, que deja de juzgar al autor del daño y se sitúa en la posición de quien lo sufre:",
          "El fundamento, recordó la Sala con la sentencia 5207-2004 de la Sala Constitucional, está en la propia Constitución, que obliga a reparar los daños antijurídicos causados por las administraciones públicas. En la ley, el régimen descansa en tres artículos de la Ley General:"
        ],
        literales: [
          [
            1,
            0,
            0
          ],
          [
            2,
            0,
            1
          ]
        ],
        visual: "anclajes"
      },
      {
        id: "anormalidad",
        titulo: "Funcionar mal, tarde o nunca",
        parrafos: [
          "El carácter objetivo del régimen tiene límites. La Sala lo advirtió con franqueza: un deber de reparar irrestricto y permanente sería insoportable para cualquier Estado con recursos limitados. Por eso la ley acude a criterios de imputación, y uno de ellos es el funcionamiento anormal:",
          "La anormalidad mide la conducta material de la Administración, es decir, cómo presta el servicio o ejecuta la obra frente a las reglas de la buena administración, la técnica y la pericia. Puede presentarse de tres maneras:"
        ],
        literales: [
          [
            5,
            0,
            0
          ]
        ],
        visual: "formas"
      },
      {
        id: "antijuridicidad",
        titulo: "El daño que no hay deber de soportar",
        parrafos: [
          "La sentencia separa tres conceptos que la práctica suele mezclar. La ilegitimidad se refiere a la conducta jurídica de la Administración; la anormalidad, a su conducta material; la antijuridicidad, al daño mismo. Esta última existe cuando la víctima no tiene el deber de soportar la lesión, y es el presupuesto de toda reparación:",
          "De ahí una consecuencia práctica. El Estado responde también por sus actos lícitos y por su funcionamiento normal cuando el daño es especial, por la pequeña proporción de afectados o por su intensidad excepcional, como prevé el artículo 194. En esos casos la conducta se ajusta a Derecho, y lo que obliga a reparar es la antijuridicidad del daño."
        ],
        literales: [
          [
            6,
            0,
            0
          ]
        ],
        visual: "formas"
      },
      {
        id: "inactividad",
        titulo: "La omisión también obliga",
        parrafos: [
          "Con ese marco, la Sala respondió la pregunta del caso: si el Estado responde por lo que dejó de hacer. La conducta administrativa comprende también la omisión, y la Sala definió con precisión la inactividad material:",
          "Esa pasividad es, a la vez, funcionamiento anormal y conducta ilegítima, porque incumple una obligación que el ordenamiento ya imponía. La construcción y el mantenimiento de las vías y de los puentes peatonales correspondían al Ministerio según su ley orgánica, y la Sala Constitucional había declarado en la sentencia 11519-2003 que el Estado debe adoptar las medidas idóneas frente a un peligro inminente para la vida, incluidas las soluciones peatonales. La conclusión fue categórica:"
        ],
        literales: [
          [
            7,
            0,
            0
          ],
          [
            0,
            0,
            1
          ]
        ]
      },
      {
        id: "concausa",
        titulo: "Nexo causal y culpa de la víctima",
        parrafos: [
          "Faltaba el nexo causal. La Sala aplicó la teoría de la causa adecuada: entre los factores que confluyen en un daño, cuenta aquel del que es lógico o probable que derive el resultado. La ausencia del puente obligó al peatón, como a cualquier otro, a cruzar sin ningún medio seguro una autopista por la que los vehículos circulan a alta velocidad. Eso lo colocó en una situación obligada de riesgo que fue, en alguna medida, causa adecuada de su muerte.",
          "Quedaba la embriaguez. El artículo 190 admite tres eximentes, la fuerza mayor, el hecho de un tercero y la culpa de la víctima, y la Sala precisó que el caso fortuito quedó excluido a propósito. Cualquiera de ellas rompe el nexo causal, en forma total o parcial. Aquí la culpa del peatón concurrió con la omisión del Estado:",
          "La consecuencia fue un reparto. La Sala fijó el daño moral pleno en ¢20 millones y lo redujo a la mitad por la concurrencia de responsabilidades, con un mecanismo porcentual que ya había aplicado en 1990. El daño material se rechazó porque no se probó."
        ],
        literales: [
          [
            9,
            1,
            1
          ],
          [
            10,
            0,
            2
          ]
        ],
        visual: "reparto",
        nota: "Quien alegue la culpa de la víctima debe probarla. Aun probada, si la omisión del Estado también fue causa del daño, solo reduce la condena."
      },
      {
        id: "voto-salvado",
        titulo: "El voto salvado",
        parrafos: [
          "La magistrada León Feoli compartió todo el desarrollo doctrinal de la mayoría, aunque lo consideró innecesario para el caso, porque el Tribunal nunca había negado la responsabilidad del Estado:",
          "Su desacuerdo fue sobre el peso de la embriaguez. Para ella, quien cruza una autopista en ese estado asume el riesgo, y esa culpa rompe por completo el nexo causal. Entre ambas posiciones media la diferencia entre una eximente parcial y una total:"
        ],
        literales: [
          [
            12,
            0,
            0
          ]
        ],
        visual: "comparacion"
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La sentencia se volvió referencia de inmediato. Seis días después, la Sala Primera transcribió su pasaje sobre la carga de la prueba para resolver una demanda contra la Caja Costarricense de Seguro Social en el voto 590-F-2005, y en 2007 el Tribunal Contencioso Administrativo ya transcribía sus páginas sobre la inactividad para resolver la muerte de una menor.",
          "Su propio redactor fijó el alcance del precedente seis meses después. En el voto 74-F-2007, el Estado lo invocó para pedir que se repartiera la responsabilidad con un tercero, y la Sala respondió que las bases jurídicas del 584 eran aplicables, con un cuadro fáctico que no admitía comparación:",
          "Desde entonces se aplica en las dos direcciones: para condenar por omisión y para reducir la condena cuando la víctima concurre al daño. En junio de 2026, la Sala Primera mantuvo un fallo que, con la misma fórmula, atenuó la reparación por la concausa del propio lesionado."
        ],
        citasExternas: [
          {
            texto: "La especie es total y diametralmente distinta. El cuadro fáctico de ambos procesos es a todas luces incomparable, aún cuando las bases jurídicas en que se sentó la responsabilidad pública sean de plena aplicabilidad a la presente. A diferencia del precedente invocado, no existe eximente alguna en esta contienda.",
            destacar: [
              "las bases jurídicas en que se sentó la responsabilidad pública sean de plena aplicabilidad"
            ],
            citation: "Sala Primera, voto 74-F-2007 · redacta el magistrado González Camacho",
            nexusId: "sen-1-0034-370854",
            tras: 1
          }
        ],
        visual: "recepcion"
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "Más de veinte años después, la sentencia sigue en pleno uso. En Nexus, el buscador público del Poder Judicial, su cita aparece en el texto de al menos 477 resoluciones, dictadas entre 2005 y 2026. Es la más citada de las cinco sentencias que hemos estudiado.",
          "Cuatro de cada cinco citas vienen de la jurisdicción contencioso-administrativa, con 406 resoluciones, y dentro de ella manda la Sección Sexta, que la cita 106 veces. La Sala Primera la cita en 43, la jurisdicción penal en 17 —al resolver la acción civil contra el Estado—, la Sala Segunda y los tribunales de trabajo en 8, y la Sala Constitucional en 2.",
          "Su uso crece. Los dos años con más citas son 2024 y 2025, con 59 y 53 resoluciones, y en lo que va de 2026 ya suman 13: desde 2022 se acumulan 187, casi dos de cada cinco de toda su vida. Lo que se cita es su andamiaje: la definición de anormalidad, la inactividad material, la antijuridicidad de base, la causalidad adecuada y la eximente parcial.",
          "Fuera de los tribunales la citan 18 pronunciamientos. Nueve son de la Procuraduría, desde el dictamen C-196-2008 hasta el C-152-2024, que dice que con esta sentencia la Sala esclareció «de una vez por todas» el concepto de anormalidad; entre ellos, el C-299-2011 y el C-162-2015 la usan para exigir que la Administración actúe conforme a las reglas de la ciencia y de la técnica, y el C-060-2021 para explicar las causas que liberan de responsabilidad. El Consejo Superior del Poder Judicial la ha invocado en ocho sesiones, entre 2014 y 2022, y la Corte Plena en una.",
          "En la doctrina la citan cinco trabajos: tres tesis del repositorio Kérwá de la Universidad de Costa Rica —sobre el régimen de la lesividad, sobre el silencio administrativo y sobre la legalidad urbanística—, un número de El Foro del Colegio de Abogados y la Revista Judicial 138, de 2024, de la Escuela Judicial."
        ],
        visual: "citas"
      }
    ],
    visuales: {
      trayectoria: [
        {
          etapa: "La demanda",
          sede: "Juzgado Contencioso Administrativo y Civil de Hacienda",
          detalle: "La viuda reclama ¢84,9 millones de daño material y ¢35,1 millones de daño moral por la omisión del Ministerio, que había denegado el reclamo en 1997."
        },
        {
          etapa: "Primera instancia",
          sede: "Sentencia 357-2003 · 8 de mayo de 2003",
          detalle: "Acoge la falta de derecho por culpa de la víctima y declara sin lugar la demanda."
        },
        {
          etapa: "Apelación",
          sede: "Tribunal Contencioso Administrativo, Sección Primera · 28 de mayo de 2004",
          detalle: "Confirma el fallo: la culpa de la víctima libera al Estado."
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 11 de agosto de 2005",
          detalle: "Declara con lugar el recurso: la omisión del Estado es causa del daño y la culpa de la víctima solo reduce la condena, que fija en ¢10 millones.",
          final: true
        }
      ],
      anclajes: [
        {
          articulo: "190",
          norma: "LGAP",
          principio: "Responde por todo su funcionamiento",
          literal: "funcionamiento legítimo o ilegítimo, normal o anormal",
          citation: "Considerando VI"
        },
        {
          articulo: "194",
          norma: "LGAP",
          principio: "Conducta lícita y funcionamiento normal",
          literal: "Nótese como el artículo 194 de la indicada ley, hace referencia a los “actos lícitos”, bajo la concepción de actividad jurídica, distinguiéndolos en la misma norma, de lo que califica como “funcionamiento normal”, entendido como actividad material.",
          citation: "Considerando VI"
        },
        {
          articulo: "196",
          norma: "LGAP",
          principio: "Un daño efectivo, evaluable e individualizable",
          literal: "que el daño sufrido sea efectivo, evaluable e individualizable en relación con una persona o grupo",
          citation: "Considerando IV · cita el voto 132 de 1991"
        }
      ],
      formas: {
        anormalidad: [
          {
            titulo: "Mal funcionamiento",
            texto: "El servicio se presta, pero sin la técnica, la pericia o el cuidado que exige la buena administración."
          },
          {
            titulo: "Funcionamiento tardío",
            texto: "La Administración actúa fuera del tiempo en que su actuación habría evitado el daño."
          },
          {
            titulo: "Ausencia total de funcionamiento",
            texto: "La Administración no actúa aunque debía hacerlo. Es el caso del puente que nunca se construyó."
          }
        ],
        antijuridicidad: [
          {
            titulo: "Ilegitimidad",
            texto: "Se predica de la conducta jurídica: los actos de la Administración y su conformidad con el ordenamiento."
          },
          {
            titulo: "Anormalidad",
            texto: "Se predica de la conducta material: el servicio o la obra frente a la buena administración, la técnica y la pericia."
          },
          {
            titulo: "Antijuridicidad",
            texto: "Se predica del daño: la víctima no tiene el deber de soportarlo. Está presente en todo daño indemnizable, aun por conducta lícita."
          }
        ]
      },
      comparacion: [
        {
          titulo: "La mayoría",
          rasgo: "La culpa de la víctima concurre con la omisión del Estado y reduce la condena.",
          enElCaso: "¢10 millones, la mitad del daño moral.",
          literal: "Esta última sin embargo, no exime al Estado de su obligación indemnizatoria, pues como se ha dicho tantas veces, la ausencia del puente peatonal puso al occiso en una situación obligada de riesgo.",
          citation: "Considerando IX"
        },
        {
          titulo: "El voto salvado",
          rasgo: "La embriaguez de la víctima rompe el nexo causal y libera por completo al Estado.",
          enElCaso: "Sin condena, como resolvieron el Juzgado y el Tribunal.",
          literal: "Es cierto que el Estado debe asegurar el bienestar colectivo, emprender las obras y el actuar necesario para garantía de la seguridad y que el cumplimiento de estas tareas genera responsabilidad. Pero, ello no conlleva a que las personas se conduzcan faltando al deber de cuidado y pongan en peligro su vida e integridad.",
          citation: "Voto salvado de la magistrada León Feoli"
        }
      ],
      reparto: {
        total: {
          etiqueta: "Daño moral pleno fijado por la Sala",
          monto: "¢20.000.000"
        },
        partes: [
          {
            etiqueta: "Omisión del Estado",
            porcentaje: 50,
            detalle: "¢10.000.000 a cargo del Estado, con intereses desde la firmeza del fallo.",
            condena: true
          },
          {
            etiqueta: "Culpa de la víctima",
            porcentaje: 50,
            detalle: "La embriaguez fue concausa del atropello. Esa mitad no se indemniza."
          }
        ],
        nota: "Las costas del proceso quedaron a cargo del Estado, porque la actora resultó vencedora, aunque en forma parcial."
      },
      recepcion: [
        {
          anio: "2005",
          organo: "Sala Primera",
          texto: "Seis días después, transcribe su pasaje sobre la carga de la prueba.",
          enlaces: [
            {
              etiqueta: "Voto 590-F-2005",
              nexusId: "sen-1-0034-341952"
            }
          ]
        },
        {
          anio: "2007",
          organo: "Sala Primera",
          texto: "Del mismo redactor: aplica sus bases jurídicas y distingue los hechos. Sin culpa de la víctima, el Estado responde por completo.",
          enlaces: [
            {
              etiqueta: "Voto 74-F-2007",
              nexusId: "sen-1-0034-370854"
            }
          ]
        },
        {
          anio: "2011",
          organo: "Tribunal de Apelación de Sentencia Penal",
          texto: "Lo cita al resolver la acción civil resarcitoria en un proceso penal.",
          enlaces: [
            {
              etiqueta: "Voto 1590-2011",
              nexusId: "sen-1-0034-532522"
            }
          ]
        },
        {
          anio: "2024",
          organo: "Sala Primera",
          texto: "Transcribe su definición de anormalidad y mantiene la condena al Estado.",
          enlaces: [
            {
              etiqueta: "Voto 1242-F-S1-2024",
              nexusId: "sen-1-0004-1250512"
            }
          ]
        },
        {
          anio: "2025",
          organo: "Sala Constitucional",
          texto: "Transcribe su definición de anormalidad.",
          enlaces: [
            {
              etiqueta: "Voto 20640-2025",
              nexusId: "sen-1-0007-1336893"
            }
          ]
        },
        {
          anio: "2026",
          organo: "Sala Primera",
          texto: "Mantiene una reparación atenuada por la concausa del lesionado, con la fórmula del 584.",
          enlaces: [
            {
              etiqueta: "Voto 711-F-S1-2026",
              nexusId: "sen-1-0004-1402661"
            }
          ],
          final: true
        }
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo: "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 584-F-2005, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
        csv: "/datos/jurisprudencia/584-F-2005-resoluciones-que-la-citan.csv"
      }
    },
    casoFactico: [
      "En 1986, los vecinos de la urbanización Los Arcos pidieron al Ministerio de Obras Públicas y Transportes un puente peatonal sobre la Autopista General Cañas. En 1997 el puente no existía, y un hombre murió atropellado al cruzar la autopista en ese sector, en alto estado de ebriedad.",
      "Su viuda demandó al Estado. El Juzgado y el Tribunal rechazaron la demanda por culpa de la víctima. La Sala Primera casó la sentencia, declaró la responsabilidad del Estado por su omisión y redujo la indemnización a la mitad por la concurrencia de la culpa de la víctima."
    ],
    nexusId: "sen-1-0034-315154",
    precedentes: [
      {
        numero: "Voto 263-1990",
        fecha: "22-08-1990",
        nexusId: "sen-1-0034-150731",
        nota: "Aplicó antes el reparto porcentual por responsabilidad concurrente."
      },
      {
        numero: "Voto 132-1991",
        fecha: "14-08-1991",
        nexusId: "sen-1-0034-878",
        nota: "Carácter objetivo de la responsabilidad bajo la Ley General de la Administración Pública."
      },
      {
        numero: "Voto 25-F-1999",
        fecha: "22-01-1999",
        nexusId: "sen-1-0034-5064",
        nota: "Eximentes taxativas, cuya prueba corresponde a la Administración."
      },
      {
        numero: "Voto 252-F-2001",
        fecha: "28-03-2001",
        nexusId: "sen-1-0034-162277",
        nota: "Causa próxima, adecuada y eficiente; eximentes de responsabilidad."
      },
      {
        organo: "Sala Constitucional",
        numero: "Voto 11519-2003",
        fecha: "10-10-2003",
        nexusId: "sen-1-0007-251643",
        nota: "Obligación objetiva del Estado de tutelar la vida; soluciones peatonales."
      },
      {
        organo: "Sala Constitucional",
        numero: "Voto 5207-2004",
        fecha: "18-05-2004",
        nexusId: "sen-1-0007-264576",
        nota: "Fundamento constitucional de la responsabilidad de las administraciones públicas."
      }
    ],
    citadaPor: [
      {
        organo: "Sala Primera",
        numero: "Voto 590-F-2005",
        fecha: "17-08-2005",
        nexusId: "sen-1-0034-341952",
        nota: "Transcribe su pasaje sobre la carga de la prueba."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 74-F-2007",
        fecha: "02-02-2007",
        nexusId: "sen-1-0034-370854",
        nota: "Aplica sus bases jurídicas y distingue los hechos: sin eximente, el Estado responde por completo."
      },
      {
        organo: "Tribunal de Apelación de Sentencia Penal",
        numero: "Voto 1590-2011",
        fecha: "23-11-2011",
        nexusId: "sen-1-0034-532522",
        nota: "Lo cita en la acción civil resarcitoria contra la Administración."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 1242-F-S1-2024",
        fecha: "19-09-2024",
        nexusId: "sen-1-0004-1250512",
        nota: "Transcribe su definición de anormalidad."
      },
      {
        organo: "Sala Constitucional",
        numero: "Voto 20640-2025",
        fecha: "04-07-2025",
        nexusId: "sen-1-0007-1336893",
        nota: "Transcribe su definición de anormalidad."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 711-F-S1-2026",
        fecha: "04-06-2026",
        nexusId: "sen-1-0004-1402661",
        nota: "Mantiene una reparación atenuada por concausa del lesionado."
      }
    ],
    normativa: [
      {
        nombre: "Ley General de la Administración Pública",
        detalle: "Ley 6227 · 2 de mayo de 1978",
        articulos: "Arts. 190, 191, 194 y 196",
        scijId: 13231
      },
      {
        nombre: "Constitución Política de la República de Costa Rica",
        detalle: "7 de noviembre de 1949",
        articulos: "Arts. 9 y 41",
        scijId: 871
      }
    ],
    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho.",
    redactoresAdicionales: [],
    fuenteUrl: "https://nexuspj.poder-judicial.go.cr/document/sen-1-0034-315154",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",
    areas: ["litigio-contencioso-administrativo", "derecho-administrativo", "servicio-publico", "casacion-sala-primera"],
    temas: ["Responsabilidad Patrimonial", "Derecho Administrativo", "Derecho a la Salud", "LGAP"],
    metaDescription:
      "Cuando el Estado no actúa y el daño ocurre, responde. La Sala Primera definió el funcionamiento anormal y la eximente parcial. Voto 584-F-2005.",
    seoTitle: "Responsabilidad del Estado por omisión · Voto 584-F-2005 · Óscar González Camacho",
  },
  /* 34-F-S1-2011. Pasajes copiados del texto de Nexus. */
  {
    slug: "caducidad-del-procedimiento-administrativo",
    numero: "Resolución N° 34-F-S1-2011",
    fecha: "20 de enero de 2011",
    fechaCorta: "20 Ene 2011",
    fechaISO: "2011-01-20",
    hora: "8:00 horas",
    expediente: "09-000644-1027-CA",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",
    area: "Derecho Administrativo",
    materia: "Caducidad del procedimiento administrativo",
    badge: {
      type: "referencia",
      label: "Sentencia de Referencia"
    },
    titulo: "La inercia que cierra el procedimiento",
    subtitulo: "La Sala Primera extendió la caducidad a los procedimientos que la Administración inicia de oficio, incluidos los sancionatorios, y fijó cómo opera: de pleno derecho, sin extinguir la competencia y como garantía de seguridad jurídica.",
    pullQuote: {
      texto: "Así, a pesar de que el ordinal 340 no regula la caducidad para los procedimientos iniciados de oficio por la Administración, sus postulados básicos son aplicables, mutatis mutandi, a estos, por integración del ordenamiento.",
      citation: "Considerando VIII"
    },
    sintesisPortada: {
      caso: "La Superintendencia de Pensiones abrió en 2004 un procedimiento sancionador contra la operadora BN Vital y lo dejó **paralizado más de dos años** después de la audiencia oral. Luego le impuso una multa de ¢26,8 millones, que el Tribunal Contencioso Administrativo **anuló por caducidad**.",
      analisis: "La redacción original del artículo 340 de la LGAP solo preveía la caducidad del procedimiento promovido por el interesado. La Sala la extendió **por integración a los procedimientos de oficio**, con fundamento en la **igualdad, la justicia pronta y la seguridad jurídica**, y fijó que opera **de pleno derecho** y sin extinguir la competencia.",
      impacto: "La reforma del CPCA, vigente desde 2008, ya recogía esa solución para los procedimientos nuevos, y lo que hoy se cita son sus reglas de funcionamiento. **Al menos 166 resoluciones** la citan, y otros 29 pronunciamientos fuera de los tribunales, desde la ARESEP hasta la Contraloría. En 2016 la Sala Primera le fijó un límite: **dictado el acto final, la caducidad ya no procede**."
    },
    fragmentosPortada: [
      {
        texto: "La caducidad es un instituto mediante el cual, en aras de garantizar el principio constitucional de seguridad jurídica, se sanciona con el archivo del expediente aquellas paralizaciones injustificadas del procedimiento por un plazo superior a los seis meses.",
        citation: "Considerando VI"
      },
      {
        texto: "Esto implica que sus efectos se producen de pleno derecho, y por ende su reconocimiento tiene efectos meramente declarativos, no constitutivos.",
        citation: "Considerando VIII"
      },
      {
        texto: "Desde esta perspectiva, si la prolongación o paralización de un expediente puede generar incluso la anulación del acto al vulnerar derechos y principios de orden constitucional, por mayoría de razón, puede generar la caducidad del procedimiento.",
        citation: "Considerando IX"
      }
    ],
    contexto: [
      "El artículo 340 de la Ley General de la Administración Pública sanciona con la caducidad el procedimiento paralizado más de seis meses. En su redacción original solo se refería al procedimiento promovido por el interesado, y durante años se discutió si alcanzaba también a los que la Administración inicia de oficio, como los sancionatorios.",
      "La sentencia 34-F-S1-2011, redactada por el magistrado Óscar Eduardo González Camacho, resolvió esa discusión para los procedimientos anteriores a la reforma de 2008 y fijó las reglas con que el instituto opera desde entonces."
    ],
    pasajes: [
      {
        titulo: "La integración",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Así, a pesar de que el ordinal 340 no regula la caducidad para los procedimientos iniciados de oficio por la Administración, sus postulados básicos son aplicables, mutatis mutandi, a estos, por integración del ordenamiento."
          }
        ]
      },
      {
        titulo: "Qué es la caducidad",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "La caducidad es un instituto mediante el cual, en aras de garantizar el principio constitucional de seguridad jurídica, se sanciona con el archivo del expediente aquellas paralizaciones injustificadas del procedimiento por un plazo superior a los seis meses.",
            destacar: [
              "se sanciona con el archivo del expediente"
            ]
          }
        ]
      },
      {
        titulo: "Lo que no la justifica",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "Lo mismo debe ser dicho de los alegatos relacionados con la complejidad del caso concreto y la carga de trabajo de la SUPEN, ya que se trata de cuestiones metajurídicas, a las cuales las disposiciones relacionadas con la caducidad no les otorga ningún efecto exculpante, ni generan, en consecuencia, un régimen de excepción.",
            destacar: [
              "se trata de cuestiones metajurídicas"
            ]
          }
        ]
      },
      {
        titulo: "El impulso",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "Por el contrario, cuando lo pretendido es la satisfacción de un interés público, particularmente cuando este procura la imposición de una situación de desventaja o gravamen al particular (ablatorias en general), como en este caso, resulta ilógico, además de antijurídico, exigirle a este último que promueva su continuación. En este supuesto, la tramitación y el impulso recae, en forma exclusiva, en la Administración.",
            destacar: [
              "resulta ilógico, además de antijurídico, exigirle a este último que promueva su continuación"
            ]
          }
        ]
      },
      {
        titulo: "A gestión de parte",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "Empero, cuando el particular lo promueve para obtener un beneficio, asume, en forma concomitante, el deber de instar su prosecución en lo que le corresponda, asumiendo las consecuencias de su indolencia cuando esta resulte un impedimento para la continuación de las actuaciones, en concordancia con lo dispuesto en el precepto 340 de la LGAP, según se dirá en el siguiente considerando."
          }
        ]
      },
      {
        titulo: "Los efectos",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En primer término, se puede observar que la norma recién transcrita se encuentra redactada en forma imperativa, es decir, no regula una facultad; por el contrario, una vez cumplidos los presupuestos de hecho en ella contenidos, la consecuencia deviene en obligatoria para el órgano encargado de la tramitación. Esto implica que sus efectos se producen de pleno derecho, y por ende su reconocimiento tiene efectos meramente declarativos, no constitutivos. Vale aclarar que lo anterior no debe ser interpretado como una pérdida de competencia –la cual es, por definición, irrenunciable, intransmisible e imprescriptible según el numeral 66 LGAP-, sino, únicamente, como la imposibilidad de continuar con la tramitación del procedimiento específico en el que se produjo la inercia.",
            destacar: [
              "sus efectos se producen de pleno derecho",
              "no debe ser interpretado como una pérdida de competencia"
            ]
          }
        ]
      },
      {
        titulo: "La igualdad",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "No obstante lo anterior, en virtud del principio de igualdad, debe integrarse el ordenamiento a efectos de reconocer su aplicabilidad en los procedimientos iniciados de oficio por la Administración. Desde esta perspectiva, el reconocimiento del instituto en beneficio de solo una de las partes podría rozar con el Derecho de la Constitución, máxime si se considera que opera en perjuicio de los individuos. Por esta razón, y considerando la posición de igualdad que debe existir entre partes, no cabe duda que la laguna normativa existente respecto de los procedimientos oficiosos debe resolverse en los mismos términos que aplicaría si la situación fuera inversa.",
            destacar: [
              "en virtud del principio de igualdad, debe integrarse el ordenamiento"
            ]
          }
        ]
      },
      {
        titulo: "Justicia pronta y seguridad jurídica",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En este orden de ideas, la aplicación extensiva del instituto que se analiza a los procedimientos oficiosos es una consecuencia directa del principio de justicia pronta y cumplida, el cual permea incluso a la sede administrativa y el sentido que se le debe dar a las disposiciones de la LGAP."
          },
          {
            texto: "El reconocimiento de la caducidad dentro de los procedimientos administrativos regulados por la LGAP deviene de la interpretación armónica del ordinal 340 ya citado, no sólo con el principio de igualdad, según se desarrolló en las líneas precedentes, sino también con el de seguridad jurídica, en la medida en que permite garantizar a los administrados que no se les someterá a un trámite en forma indefinida.",
            destacar: [
              "no se les someterá a un trámite en forma indefinida"
            ]
          }
        ]
      },
      {
        titulo: "La reforma",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Finalmente, conviene indicar que la reforma legal operada lo que hace es reconocer, expresamente, esta interpretación. En este sentido, la modificación torna innecesaria la integración, supliendo una laguna existente, por lo que no puede inferirse que, con anterioridad a esta, los procedimientos oficiosos estuvieran excluidos de la figura de la caducidad al no existir norma expresa.",
            destacar: [
              "lo que hace es reconocer, expresamente, esta interpretación"
            ]
          }
        ]
      },
      {
        titulo: "De oficio, basta el plazo",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Por el contrario, en aquellos casos iniciados en forma oficiosa, la anterior precisión no resulta aplicable, siendo que al administrado no le asiste ninguna responsabilidad de impulsar la tramitación, según lo ya dicho, lo determinante es el transcurso de los seis meses sin actuaciones tendientes al avance del trámite."
          }
        ]
      },
      {
        titulo: "Por mayoría de razón",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "Desde esta perspectiva, si la prolongación o paralización de un expediente puede generar incluso la anulación del acto al vulnerar derechos y principios de orden constitucional, por mayoría de razón, puede generar la caducidad del procedimiento."
          }
        ]
      },
      {
        titulo: "Plazos ordenatorios",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "Los dos primeros constituyen plazos ordenatorios previstos a efectos de agilizar el procedimiento, y en nada justifican la paralización del proceso más allá del tiempo legal fijado para que opere la caducidad."
          }
        ]
      },
      {
        titulo: "La sanción de la inercia",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "Uno y otro supuesto se diferencian en que en este último, existe un actuar antijurídico identificado en la infracción al deber de impulsar el procedimiento y para el cual se prevé, como sanción, la caducidad."
          }
        ]
      },
      {
        titulo: "El expediente listo para resolver",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "Como se ha insistido, la caducidad surge como respuesta a una inercia durante la tramitación que evita que el asunto llegue a ser resuelto en forma definitiva, por lo que, y tal y como se estipula en el mismo canon 340 tantas veces citado, no opera cuando “el expediente se encuentre listo para la resolución final”, toda vez que, a partir de ese momento, el particular puede hacer valer sus derechos mediante la figura silencial."
          }
        ]
      },
      {
        titulo: "La inactividad, no el juez",
        citation: "Considerando XI",
        parrafos: [
          {
            texto: "Si una conducta antijurídica no se sanciona por haber operado la caducidad en el procedimiento, esto se deriva de una inactividad administrativa, y no de un pronunciamiento jurisdiccional que por el fondo lo implida o invalide pues solo se limitó a aplicar la sanción prevista por el ordenamiento ante la irregularidad en la tramitación del expediente."
          }
        ]
      }
    ],
    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "El 21 de octubre de 2004, la Superintendencia de Pensiones abrió un procedimiento sancionador contra BN Vital, operadora de pensiones complementarias, por incumplimientos denunciados por afiliados durante la llamada crisis de los fondos de inversión. La audiencia oral y privada se celebró el 22 y el 23 de noviembre de ese año.",
          "Después, el expediente se detuvo. La Superintendencia puso la transcripción de la audiencia en conocimiento de la operadora hasta febrero de 2007, más de dos años más tarde. La operadora alegó entonces la caducidad del procedimiento; el órgano director la rechazó y el acto final le impuso una multa de ¢30,2 millones, que el Consejo Nacional de Supervisión del Sistema Financiero dejó en ¢26,8 millones al corregir una diferencia aritmética.",
          "La operadora demandó la nulidad. El Tribunal Contencioso Administrativo anuló los actos por caducidad y ordenó devolver la multa con intereses. La Superintendencia recurrió en casación: sostuvo que, con la redacción del artículo 340 vigente al momento de los hechos, la caducidad solo operaba cuando la inercia era del administrado."
        ],
        visual: "trayectoria"
      },
      {
        id: "impulso",
        titulo: "Quién impulsa el procedimiento",
        parrafos: [
          "La Sala partió del impulso procesal. El artículo 222 de la LGAP obliga a la Administración a impulsar de oficio todo procedimiento, sin perjuicio del impulso que le den las partes. La carga de cada una depende de lo que el procedimiento persigue, y cuando busca imponer un gravamen al particular, la carga es solo de la Administración:",
          "Por eso el plazo se cuenta de modo distinto según quién haya iniciado el procedimiento:"
        ],
        literales: [
          [
            3,
            0,
            0
          ]
        ],
        visual: "comparacion"
      },
      {
        id: "integracion",
        titulo: "Una laguna que se integra",
        parrafos: [
          "En un punto, la Sala dio la razón a la Superintendencia. El artículo 340, en su redacción original, hablaba del «interesado» que promovió el procedimiento, y la Administración no ocupa ese lugar, porque actúa en un interés fiduciario, nunca propio. El Tribunal se había equivocado al leer «interesado» como comprensivo de ambos. El resultado, en cambio, se mantenía:",
          "La Sala enlazó esa integración con la jurisprudencia constitucional sobre la duración razonable de los procedimientos administrativos, y cerró con un argumento de mayor a menor:",
          "Advirtió, por último, que la reforma introducida por el Código Procesal Contencioso-Administrativo, vigente desde 2008, vino a reconocer esa misma lectura:",
          "La integración descansa así en tres fundamentos:"
        ],
        literales: [
          [
            6,
            0,
            0
          ],
          [
            10,
            0,
            1
          ],
          [
            8,
            0,
            2
          ]
        ],
        visual: "formas"
      },
      {
        id: "efectos",
        titulo: "Cómo opera",
        parrafos: [
          "Integrada la laguna, la Sala precisó cómo funciona el instituto. La norma es imperativa: cumplido el plazo, el órgano no puede elegir.",
          "De ahí tres rasgos que la jurisprudencia posterior repite casi siempre con las mismas palabras:"
        ],
        literales: [
          [
            5,
            0,
            0
          ]
        ],
        visual: "formas"
      },
      {
        id: "plazos",
        titulo: "Plazos que ordenan y plazo que sanciona",
        parrafos: [
          "La Superintendencia alegó que la jurisprudencia constitucional tolera procedimientos más largos que los plazos de la ley. La Sala distinguió tres plazos: el de dos meses para concluir el procedimiento (artículo 261 de la LGAP), los del órgano director para resolver las incidencias (artículo 262) y el de seis meses de la caducidad (artículo 340).",
          "Por la misma razón descartó el argumento del artículo 329, según el cual el acto dictado fuera de plazo es válido. La caducidad responde a la inercia durante la tramitación, y por eso deja de operar cuando el expediente ya está listo para el acto final:"
        ],
        literales: [
          [
            13,
            0,
            1
          ]
        ],
        visual: "comparacion"
      },
      {
        id: "excusas",
        titulo: "Lo que no la excusa",
        parrafos: [
          "La Superintendencia invocó también la complejidad del caso, su carga de trabajo y la protección de los afiliados. La Sala respondió que nada de eso cambia las consecuencias de la paralización:",
          "Y precisó a quién es imputable que una infracción quede sin sanción:"
        ],
        literales: [
          [
            2,
            0,
            0
          ],
          [
            14,
            0,
            1
          ]
        ],
        nota: "En los procedimientos de oficio, el administrado no tiene que impulsar el expediente: basta que transcurran seis meses sin actuaciones de la Administración."
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La Sala Primera asumió el criterio como propio. En 2012 sistematizó a partir de él los requisitos de la caducidad, y en 2016 le fijó un límite: una vez dictado el acto final, la caducidad ya no procede, porque la fase recursiva no puede terminar un procedimiento que ya concluyó. Desde entonces la cita habitual es «34-F-S1-2011, reiterada en 147-F-S1-2016».",
          "El precedente salió también de la jurisdicción contencioso-administrativa. Lo transcriben la Sala Segunda, en demandas laborales contra entidades públicas, y el Tribunal Agrario, al conocer recursos jerárquicos impropios."
        ],
        visual: "recepcion"
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "En Nexus, el buscador público del Poder Judicial, su cita aparece en el texto de al menos 166 resoluciones, dictadas entre 2011 y 2026. La jurisdicción contencioso-administrativa reúne 141, con la Sección Sexta a la cabeza (56) y el Tribunal de Casación con 20. La Sala Primera la cita en 13, la Sala Segunda en 6, el Tribunal Agrario en 5 y la Sala Constitucional en 1.",
          "Su uso alcanzó el máximo en 2015, con 28 resoluciones, y se mantiene: 11 en 2023, 8 en 2024 y 13 en 2025. La reforma del CPCA había resuelto ya la pregunta principal para los procedimientos iniciados después de 2008. Lo que se sigue citando son sus reglas de funcionamiento: los efectos de pleno derecho, la conservación de la competencia, la distinción con los plazos ordenatorios y el límite del acto final.",
          "De las cinco sentencias que hemos estudiado, esta es la que más salió de los tribunales: 29 pronunciamientos de siete órganos distintos. El primero llegó a los diez meses, en el voto 1031-2011 que el Tribunal Registral Administrativo publica en su propio sitio. La Junta Directiva de la ARESEP la ha citado en nueve sesiones; el Tribunal de la Inspección Judicial, en seis resoluciones disciplinarias entre 2019 y 2021; el Consejo Superior, en seis sesiones; la Junta del Fondo de Jubilaciones y Pensiones del Poder Judicial, en tres, la última de diciembre de 2025; y la Corte Plena, en dos. La Contraloría la recoge en el oficio DJ-1484-2015 y la Procuraduría en el dictamen C-069-2015, los dos del mismo verano.",
          "En la doctrina, el repositorio Kérwá de la Universidad de Costa Rica devuelve cuatro tesis que la citan, de 2017 a 2025: sobre la caducidad de la instancia, sobre los conflictos de competencia entre la jurisdicción agraria y la contencioso-administrativa, sobre la instrucción de faltas en la propia Universidad y sobre el elemento temporal de la potestad disciplinaria."
        ],
        visual: "citas"
      }
    ],
    visuales: {
      trayectoria: [
        {
          etapa: "El procedimiento",
          sede: "Superintendencia de Pensiones · 21 de octubre de 2004",
          detalle: "Abre un procedimiento sancionador contra BN Vital por la crisis de los fondos de inversión. La audiencia oral se celebra el 22 y el 23 de noviembre."
        },
        {
          etapa: "La paralización",
          sede: "Noviembre de 2004 a febrero de 2007",
          detalle: "Más de dos años sin actuaciones. Se rechaza la caducidad y se impone una multa, que el CONASSIF deja en ¢26,8 millones."
        },
        {
          etapa: "Primera instancia",
          sede: "Tribunal Contencioso Administrativo, Sección Cuarta · 4 de noviembre de 2009",
          detalle: "Anula los actos por caducidad y ordena devolver la multa con intereses."
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 20 de enero de 2011",
          detalle: "Declara sin lugar el recurso de la Superintendencia: la caducidad rige también en los procedimientos de oficio.",
          final: true
        }
      ],
      comparaciones: {
        impulso: [
          {
            titulo: "A gestión de parte",
            rasgo: "El particular pide algo para sí y comparte la carga de impulsar el expediente.",
            literal: "Empero, cuando el particular lo promueve para obtener un beneficio, asume, en forma concomitante, el deber de instar su prosecución en lo que le corresponda, asumiendo las consecuencias de su indolencia cuando esta resulte un impedimento para la continuación de las actuaciones, en concordancia con lo dispuesto en el precepto 340 de la LGAP, según se dirá en el siguiente considerando.",
            citation: "Considerando VII"
          },
          {
            titulo: "De oficio",
            rasgo: "La Administración persigue un interés público, a menudo un gravamen, y el impulso le corresponde solo a ella.",
            literal: "Por el contrario, en aquellos casos iniciados en forma oficiosa, la anterior precisión no resulta aplicable, siendo que al administrado no le asiste ninguna responsabilidad de impulsar la tramitación, según lo ya dicho, lo determinante es el transcurso de los seis meses sin actuaciones tendientes al avance del trámite.",
            citation: "Considerando VIII"
          }
        ],
        plazos: [
          {
            titulo: "Plazos ordenatorios",
            rasgo: "Artículos 261 y 262 de la LGAP. Ordenan el procedimiento; su incumplimiento puede generar responsabilidad del funcionario.",
            literal: "Los dos primeros constituyen plazos ordenatorios previstos a efectos de agilizar el procedimiento, y en nada justifican la paralización del proceso más allá del tiempo legal fijado para que opere la caducidad.",
            citation: "Considerando X"
          },
          {
            titulo: "Plazo de caducidad",
            rasgo: "Artículo 340 de la LGAP. Seis meses de paralización cierran el procedimiento.",
            literal: "Uno y otro supuesto se diferencian en que en este último, existe un actuar antijurídico identificado en la infracción al deber de impulsar el procedimiento y para el cual se prevé, como sanción, la caducidad.",
            citation: "Considerando X"
          }
        ]
      },
      formas: {
        integracion: [
          {
            titulo: "Igualdad",
            texto: "Reconocer la caducidad solo a favor de la Administración rozaría la Constitución. La laguna se resuelve como se resolvería si la situación fuera inversa."
          },
          {
            titulo: "Justicia pronta y cumplida",
            texto: "El artículo 41 de la Constitución alcanza a la sede administrativa y exige plazos razonables también en los procedimientos de oficio."
          },
          {
            titulo: "Seguridad jurídica",
            texto: "Nadie puede quedar sometido a un trámite en forma indefinida, en la incertidumbre sobre su situación jurídica."
          }
        ],
        efectos: [
          {
            titulo: "De pleno derecho",
            texto: "Cumplidos los seis meses, la consecuencia es obligatoria. La resolución que la reconoce solo la declara."
          },
          {
            titulo: "Sin pérdida de competencia",
            texto: "La competencia es irrenunciable e imprescriptible. Lo que termina es ese procedimiento, no la potestad de la Administración."
          },
          {
            titulo: "Antes del acto final",
            texto: "No opera cuando el expediente ya está listo para resolver: desde ese momento, el particular cuenta con el silencio."
          }
        ]
      },
      recepcion: [
        {
          anio: "2012",
          organo: "Sala Primera",
          texto: "Sistematiza los requisitos de la caducidad y reitera que antes de la reforma la solución era la misma.",
          enlaces: [
            {
              etiqueta: "Voto 608-F-S1-2012",
              nexusId: "sen-1-0034-685779"
            }
          ]
        },
        {
          anio: "2013",
          organo: "Tribunal Agrario",
          texto: "Transcribe su considerando sobre los efectos al conocer un recurso jerárquico impropio.",
          enlaces: [
            {
              etiqueta: "Voto 198-2013",
              nexusId: "sen-1-0034-587084"
            }
          ]
        },
        {
          anio: "2015",
          organo: "Sala Segunda",
          texto: "Lo transcribe en una demanda laboral contra una entidad pública.",
          enlaces: [
            {
              etiqueta: "Voto 809-2015",
              nexusId: "sen-1-0034-645508"
            }
          ]
        },
        {
          anio: "2016",
          organo: "Sala Primera",
          texto: "Le fija un límite: dictado el acto final, la caducidad ya no procede en la fase recursiva.",
          enlaces: [
            {
              etiqueta: "Voto 147-F-S1-2016",
              nexusId: "sen-1-0034-660952"
            }
          ]
        },
        {
          anio: "2025",
          organo: "Sala Primera",
          texto: "Aplica la fórmula «34-F-S1-2011, reiterada en 147-F-S1-2016» y niega la caducidad en la fase recursiva de un caso tributario.",
          enlaces: [
            {
              etiqueta: "Voto 820-F-S1-2025",
              nexusId: "sen-1-0004-1291129"
            }
          ],
          final: true
        }
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo: "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 34-F-S1-2011, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
        csv: "/datos/jurisprudencia/34-F-S1-2011-resoluciones-que-la-citan.csv"
      }
    },
    casoFactico: [
      "En 2004 la Superintendencia de Pensiones abrió un procedimiento sancionador contra la operadora BN Vital. Tras la audiencia oral de noviembre de ese año, el expediente estuvo paralizado hasta febrero de 2007.",
      "La operadora fue multada y demandó la nulidad. El Tribunal Contencioso Administrativo anuló los actos por caducidad, y la Sala Primera confirmó el resultado: la caducidad rige también en los procedimientos que la Administración inicia de oficio."
    ],
    nexusId: "sen-1-0034-509623",
    precedentes: [
      {
        organo: "Sala Constitucional",
        numero: "Voto 3140-2007",
        fecha: "09-03-2007",
        nexusId: "sen-1-0007-373776",
        nota: "Duración excesiva de un procedimiento administrativo; justicia pronta y cumplida en sede administrativa."
      },
      {
        organo: "Sala Constitucional",
        numero: "Voto 6758-2007",
        fecha: "18-05-2007",
        nexusId: "sen-1-0007-381479",
        nota: "Plazo razonable de la actividad administrativa, apreciado caso por caso."
      }
    ],
    citadaPor: [
      {
        organo: "Sala Primera",
        numero: "Voto 608-F-S1-2012",
        fecha: "16-05-2012",
        nexusId: "sen-1-0034-685779",
        nota: "Sistematiza los requisitos de la caducidad."
      },
      {
        organo: "Tribunal Agrario",
        numero: "Voto 198-2013",
        fecha: "28-02-2013",
        nexusId: "sen-1-0034-587084",
        nota: "Transcribe su considerando sobre los efectos."
      },
      {
        organo: "Sala Segunda",
        numero: "Voto 809-2015",
        fecha: "29-07-2015",
        nexusId: "sen-1-0034-645508",
        nota: "Lo transcribe en una demanda laboral contra una entidad pública."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 147-F-S1-2016",
        fecha: "18-02-2016",
        nexusId: "sen-1-0034-660952",
        nota: "La caducidad no procede en la fase recursiva."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 820-F-S1-2025",
        fecha: "08-05-2025",
        nexusId: "sen-1-0004-1291129",
        nota: "Reitera la fórmula con el 147-F-S1-2016 en un caso tributario."
      }
    ],
    normativa: [
      {
        nombre: "Ley General de la Administración Pública",
        detalle: "Ley 6227 · 2 de mayo de 1978",
        articulos: "Arts. 222, 261, 262, 329 y 340",
        scijId: 13231
      },
      {
        nombre: "Código Procesal Contencioso-Administrativo",
        detalle: "Ley 8508 · 28 de abril de 2006",
        articulos: "Art. 200, inciso 10 (reforma del art. 340 de la LGAP)",
        scijId: 57436,
        tema: "Posterior a los hechos"
      },
      {
        nombre: "Constitución Política de la República de Costa Rica",
        detalle: "7 de noviembre de 1949",
        articulos: "Art. 41",
        scijId: 871
      }
    ],
    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho.",
    redactoresAdicionales: [],
    fuenteUrl: "https://nexuspj.poder-judicial.go.cr/document/sen-1-0034-509623",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",
    areas: ["procedimientos-sancionatorios", "derecho-administrativo", "empleo-publico", "defensa-regulatoria-sectorial"],
    temas: ["Procedimientos Sancionatorios", "Derecho Administrativo", "LGAP"],
    metaDescription:
      "Seis meses de inercia de la Administración caducan el procedimiento, aunque lo haya abierto de oficio. Lo fijó la Sala Primera. Voto 34-F-S1-2011.",
    seoTitle: "Caducidad del procedimiento administrativo · Voto 34-F-S1-2011 · Óscar González Camacho",
  },
  /* 300-F-S1-2009. Pasajes copiados del texto de Nexus. */
  {
    slug: "responsabilidad-bancaria-por-fraude-electronico",
    numero: "Resolución N° 300-F-S1-2009",
    fecha: "26 de marzo de 2009",
    fechaCorta: "26 Mar 2009",
    fechaISO: "2009-03-26",
    hora: "11:25 horas",
    expediente: "08-000123-0161-CA",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",
    area: "Derecho del Consumidor",
    materia: "Responsabilidad bancaria por fraude electrónico",
    badge: {
      type: "referencia",
      label: "Sentencia de Referencia"
    },
    titulo: "El riesgo que el banco no puede trasladar",
    subtitulo: "La Sala Primera aplicó a la banca por internet la responsabilidad objetiva de la Ley del Consumidor: el banco responde por la seguridad del servicio completo, incluido el mecanismo que identifica al cliente, y solo se libera si prueba una causa eximente.",
    pullQuote: {
      texto: "Al fin y al cabo, los bancos, sin que el demandado sea la excepción, custodian y administran, entre otros, un bien ajeno; y no cualquier bien, sino fondos del público. Así las cosas, no solo responde por la fortaleza de sus sistemas internos, sino también por la seguridad de quien, para llegar allí, utiliza los únicos canales posibles que el propio Banco conoce y reconoce como riesgosos.",
      citation: "Considerando V"
    },
    sintesisPortada: {
      caso: "En 2007 y 2008, un tercero entró a la banca por internet de una clienta del Banco de Costa Rica con su usuario y su clave, y le sustrajo **¢1,49 millones y $4.379**. El banco rechazó el reclamo porque **la operación se hizo con una clave válida**, y el Tribunal Contencioso Administrativo lo condenó a reintegrar el dinero.",
      analisis: "La Sala encuadró la relación en la **Ley del Consumidor** y aplicó la **teoría del riesgo creado**. La plataforma del banco no fue vulnerada, pero el riesgo estaba en **el mecanismo que identifica al cliente**, que forma parte del servicio. El banco solo se libera si **prueba una causa eximente**, y su reglamento interno no puede trasladar esa prueba al cliente.",
      impacto: "**Al menos 271 resoluciones** la citan, cerca de la mitad en litigios ajenos a la banca. Desde 2022 la Sala Primera usa el mismo marco para liberar al banco cuando el cliente **entregó sus claves a un estafador**, y en 2026 la **Ley 10889** escribió en el artículo 35 de la Ley del Consumidor la responsabilidad objetiva de las entidades financieras por la sustracción de fondos."
    },
    fragmentosPortada: [
      {
        texto: "Por lo anterior, no es admisible el argumento, para eximirse de responsabilidad, de que internet no es del Banco, cuando bien sabe el demandado que ofrece un servicio altamente riesgoso.",
        citation: "Considerando V"
      },
      {
        texto: "Lo anterior, aunado a la existencia de causales eximentes demuestra que la legislación en comentario no constituye una transferencia patrimonial automática.",
        citation: "Considerando III"
      },
      {
        texto: "De allí que los mecanismos de garantía al cliente –usuario-, deben darse no solo dentro de los muros informáticos del propio Banco, sino también en el camino de acceso a él como parte del servicio.",
        citation: "Considerando V"
      }
    ],
    contexto: [
      "El artículo 35 de la Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor, de 1994, obliga al comerciante y al proveedor a responder por los daños de sus bienes y servicios con independencia de la culpa, y solo libera a quien demuestre que fue ajeno al daño. Cuando llegó la banca por internet, los reglamentos del servicio, como el del Banco de Costa Rica, daban por hecha por el cliente toda operación realizada con su clave.",
      "La sentencia 300-F-S1-2009, redactada por el magistrado Óscar Eduardo González Camacho, abrió la jurisprudencia de la Sala Primera sobre fraude en la banca por internet y fijó el marco con que esos casos se resuelven desde entonces."
    ],
    pasajes: [
      {
        titulo: "La relación de consumo",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "El Banco actúa en ejercicio de su capacidad de derecho privado, como una verdadera empresa pública, y en dicha condición, ofrece a sus clientes un servicio, por lo que, al existir una relación de consumo, el caso particular debe ser analizado bajo el ámbito de cobertura del numeral 35 en comentario.",
            destacar: [
              "al existir una relación de consumo"
            ]
          }
        ]
      },
      {
        titulo: "Los elementos de la responsabilidad",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Asimismo, es importante considerar, por su influencia en el tema probatorio, que los elementos determinantes para el surgimiento de la responsabilidad civil, sea esta subjetiva u objetiva, son: una conducta lesiva (la cual puede ser activa o pasiva, legítima o ilegítima), la existencia de un daño (es decir, una lesión a un bien jurídico tutelado), un nexo de causalidad que vincule los dos anteriores, y en la mayoría de los casos la verificación de un criterio de atribución, que dependerá del régimen legal específico."
          }
        ]
      },
      {
        titulo: "La causalidad adecuada",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Si bien existen diversas teorías sobre la materia, la que se ha considerado más acorde con el régimen costarricense es la de causalidad adecuada, según la cual existe una vinculación entre daño y conducta cuando el primero se origine, si no necesariamente, al menos con una alta probabilidad según las circunstancias específicas que incidan en la materia, de la segunda",
            destacar: [
              "causalidad adecuada"
            ]
          }
        ]
      },
      {
        titulo: "El riesgo creado",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "En esencia, dicha teoría postula que, quien crea, ejerza o se aprovecha de una actividad lucrativa lícita que presenta elementos potencialmente peligrosos para los demás, debe también soportar sus inconvenientes (ubi emolumentum, ubi onus, el cual puede ser traducido como donde está el emolumento, está la carga).",
            destacar: [
              "debe también soportar sus inconvenientes"
            ]
          }
        ]
      },
      {
        titulo: "Un riesgo anormal",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Lo anterior lleva a afirmar que, para el surgimiento del deber de reparación, el riesgo asociado con la actividad debe presentar un grado de anormalidad, esto es, que exceda el margen de tolerancia que resulta admisible de acuerdo a las reglas de la experiencia, lo cual debe ser analizado, de manera casuística, por el juez.",
            destacar: [
              "debe presentar un grado de anormalidad"
            ]
          }
        ]
      },
      {
        titulo: "Sin transferencia automática",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Es importante mencionar que en una actividad es dable encontrar distintos grados de riesgo, los cuales deben ser administrados por aquel sujeto que se beneficia de esta, circunstancia que ejerce una influencia directa en el deber probatorio que le compete, ya que resulta relevante para determinar la imputación en el caso concreto. Lo anterior, aunado a la existencia de causales eximentes demuestra que la legislación en comentario no constituye una transferencia patrimonial automática.",
            destacar: [
              "no constituye una transferencia patrimonial automática"
            ]
          }
        ]
      },
      {
        titulo: "La carga se redistribuye",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Producto de lo anterior, y según lo ha indicado esta Sala con anterioridad, se redistribuye el deber de demostración entre las partes litigantes, en donde el “onus probandi” (deber probatorio) le corresponde a quien se encuentre en mejores condiciones para aportar la prueba al proceso (en este sentido, se puede ver la resolución no. 212 de las 8 horas 15 minutos del 25 de marzo de 2008).",
            destacar: [
              "le corresponde a quien se encuentre en mejores condiciones para aportar la prueba"
            ]
          }
        ]
      },
      {
        titulo: "Lo que prueba la víctima",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Empero, de lo anterior no debe extraerse que la víctima se encuentra exenta del deber probatorio, ya que le corresponde acreditar, en los términos dichos, el daño sufrido y el nexo de causalidad."
          }
        ]
      },
      {
        titulo: "Lo que prueba el banco",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Por su parte, corre por cuenta del accionado probar que es ajeno a la producción del daño, es decir, debe demostrar la concurrencia de alguna de las causas eximentes de responsabilidad, ya sea la culpa de la víctima, el hecho de un tercero o la fuerza mayor."
          }
        ]
      },
      {
        titulo: "La buena fe",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Así, un correcto entendimiento de los mecanismos de seguridad que en cada momento implementen los intermediarios financieros resulta clave para apreciar si la parte demandante actúa, o no, con buena fe."
          }
        ]
      },
      {
        titulo: "La identidad del cliente",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "No cabe duda que se encuentra sometida a una ineludible obligación de garantizar la seguridad de las transacciones realizadas, ya sea en ventanilla o mediante cualquier otro medio puesto a disposición de los clientes, la cual debe abarcar, necesariamente, el uso de todos aquellos mecanismos disponibles que le permitan contar con un mayor grado de certeza en cuanto a la identificación de las personas que se encuentran facultadas para realizar transacciones electrónicas desde las cuentas.",
            destacar: [
              "ineludible obligación de garantizar la seguridad de las transacciones"
            ]
          }
        ]
      },
      {
        titulo: "El mecanismo de identificación",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "En este sentido, debe tomarse en cuenta que el riesgo en el funcionamiento del sistema se da, precisamente, por el mecanismo mediante el cual se comprueba la identidad del cliente, motivo por el cual, no se aprecia el yerro que se imputa a la sentencia del Tribunal.",
            destacar: [
              "por el mecanismo mediante el cual se comprueba la identidad del cliente"
            ]
          }
        ]
      },
      {
        titulo: "Internet también cuenta",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "Por lo anterior, no es admisible el argumento, para eximirse de responsabilidad, de que internet no es del Banco, cuando bien sabe el demandado que ofrece un servicio altamente riesgoso."
          }
        ]
      },
      {
        titulo: "Fondos del público",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "Al fin y al cabo, los bancos, sin que el demandado sea la excepción, custodian y administran, entre otros, un bien ajeno; y no cualquier bien, sino fondos del público. Así las cosas, no solo responde por la fortaleza de sus sistemas internos, sino también por la seguridad de quien, para llegar allí, utiliza los únicos canales posibles que el propio Banco conoce y reconoce como riesgosos.",
            destacar: [
              "fondos del público"
            ]
          }
        ]
      },
      {
        titulo: "El camino de acceso",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "El medio para acceder a la plataforma del Banco no se trata, por ende, de un foco ajeno de riesgo, sino de un instrumento consustancial al servicio que presta; si se quiere, forma parte intrínseca de la actividad, que si bien es accesorio a la actividad del intermediario, resulta imprescindible. De allí que los mecanismos de garantía al cliente –usuario-, deben darse no solo dentro de los muros informáticos del propio Banco, sino también en el camino de acceso a él como parte del servicio.",
            destacar: [
              "también en el camino de acceso a él como parte del servicio"
            ]
          }
        ]
      },
      {
        titulo: "Sin eximente probada",
        citation: "Considerando V",
        parrafos: [
          {
            texto: "En sede jurisdiccional, no se puede afirmar que la actora haya producido, por conducta suya, la lesión a su propio patrimonio; según se ha dicho reiteradamente, no quedó acreditado un uso indebido ni incorrecto de sus mecanismos de seguridad – usuario y claves propias."
          }
        ]
      },
      {
        titulo: "Contrato y responsabilidad",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En este sentido, es importante aclarar que el numeral 35 de la Ley de Defensa del Consumidor resulta aplicable tanto a los supuestos de responsabilidad extracontractual como contractual, independientemente, en este último caso, del incumplimiento de los acuerdos inter- partes que regulan la relación específica."
          }
        ]
      },
      {
        titulo: "El reglamento del banco",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En segundo lugar, no resulta admisible pretender que un Reglamento interno del Banco (cuyo objeto es regular el servicio ofrecido al público, no el régimen de responsabilidad aplicable) configure una presunción que tenga por efecto variar el deber probatorio que vincula a las partes, ya que sería ir en contra de la norma legal correspondiente, máxime que la conducta que se analiza no es el incumplimiento de cláusulas contractuales.",
            destacar: [
              "configure una presunción que tenga por efecto variar el deber probatorio"
            ]
          }
        ]
      },
      {
        titulo: "Los deberes del cliente",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En este sentido, debe quedar claro que la posición del cliente no resulta totalmente pasiva, sino que, por el contrario, se encuentra compelido por una serie de deberes que le impone la buena fe contractual. Así, no cabe duda que es su responsabilidad el garantizar el manejo adecuado de la clave de acceso, así como seguir las recomendaciones dadas por las entidades financieras en materia de seguridad. La decisión de ser beneficiario de estos servicios lleva aparejado un deber de diligencia que, en caso de ser incumplido, podría liberar de responsabilidad al prestatario. No resulta admisible, de acuerdo a los principios de razonabilidad y proporcionalidad, relevar al cliente de sus deberes de prudencia en aquellos aspectos que forman parte de su ámbito personal de control, como lo es el lugar donde realiza la conexión, así como utilizar equipos de cómputo adecuados y con los programas informáticos adecuados para garantizar la seguridad de la información.",
            destacar: [
              "podría liberar de responsabilidad al prestatario"
            ]
          }
        ]
      },
      {
        titulo: "El contralor de la Constitución",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "El Juez de Casación se erige no sólo en operador del Derecho de la Constitución, sino también (y sobre todo) en su contralor."
          },
          {
            texto: "De modo que habrá invalidez de la sentencia contencioso-administrativa, así como de aquellas dictadas en otras materias, siempre que habiéndose recurrido, se alegue y se encuentre, una desatención, inaplicación o indebida interpretación de cualquier norma o principio del Derecho de la Constitución, tal y como lo ha dispuesto y aplicado en múltiples precedentes esta misma Sala, con anterioridad, incluso, del propio Código Procesal Contencioso Administrativo."
          }
        ]
      },
      {
        titulo: "Lo metajurídico",
        citation: "Considerando XI",
        parrafos: [
          {
            texto: "Resulta pertinente indicar que el test de razonabilidad a que hace referencia el recurso debe ser realizado teniendo como punto de partida un marco jurídico determinado, de forma tal que no es dable limitar los argumentos con que se combate la sentencia a cuestiones metajurídicas como lo hace el recurrente, como la presunta socialización de todos los riesgos de una relación de consumo.",
            destacar: [
              "cuestiones metajurídicas"
            ]
          }
        ]
      }
    ],
    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "En julio de 2007 y en abril de 2008, un tercero entró a la banca por internet de una clienta del Banco de Costa Rica con su usuario y su clave, y transfirió en total ¢1.489.290,60 de su cuenta corriente y $4.379,53 de su cuenta de ahorros en dólares. La clienta denunció los hechos ante el Organismo de Investigación Judicial y ante la Contraloría de Servicios del banco.",
          "El banco rechazó el reclamo porque las transferencias se hicieron con una clave válida. La clienta lo demandó, y el Tribunal Contencioso Administrativo lo condenó a reintegrar las sumas, con intereses y costas, con base en la responsabilidad objetiva del artículo 35 de la Ley del Consumidor.",
          "El banco recurrió en casación. Su perito había declarado que la plataforma del banco no fue vulnerada, y con eso sostuvo que el riesgo estaba fuera de su control, en internet o en el manejo de la clave. Invocó además su Reglamento de Servicios de Banca Electrónica, según el cual toda operación hecha con la clave correcta se tiene por realizada por el cliente."
        ],
        visual: "trayectoria"
      },
      {
        id: "consumo",
        titulo: "Una relación de consumo",
        parrafos: [
          "La Sala empezó por el régimen. El Banco de Costa Rica es una entidad pública, pero al ofrecer la banca por internet actúa con su capacidad de derecho privado, frente a un cliente que es consumidor:",
          "En ese régimen la culpa no cuenta: el artículo 35 obliga al proveedor a responder aunque no haya negligencia, imprudencia, impericia ni dolo. Para el nexo causal, la Sala adoptó la teoría que considera más acorde con el ordenamiento costarricense:",
          "Aun sin culpa, toda responsabilidad exige los mismos elementos, sea objetiva o subjetiva:"
        ],
        literales: [
          [
            0,
            0,
            0
          ],
          [
            2,
            0,
            1
          ]
        ],
        visual: "formas"
      },
      {
        id: "riesgo",
        titulo: "El riesgo creado y su medida",
        parrafos: [
          "El criterio de atribución del artículo 35 es el riesgo creado. La Sala lo explicó con una máxima latina:",
          "Enseguida le fijó límites. El riesgo que obliga a reparar es el anormal, el que excede lo que la vida en sociedad tolera:",
          "Responde, además, quien domina la actividad y obtiene de ella un beneficio, directo o indirecto. Con esos límites y con las eximentes, el régimen objetivo queda lejos de una garantía total a cargo del proveedor:"
        ],
        literales: [
          [
            3,
            0,
            0
          ],
          [
            4,
            0,
            1
          ],
          [
            5,
            0,
            2
          ]
        ]
      },
      {
        id: "prueba",
        titulo: "Quién prueba qué",
        parrafos: [
          "El fraude electrónico deja a la víctima con pocas pruebas: no sabe cómo obtuvo el tercero su clave ni puede examinar los sistemas del banco. La Sala retomó un criterio que había fijado en 2008 y redistribuyó la carga:",
          "El banco enfrenta una dificultad parecida cuando alega la culpa de la víctima, porque tendría que probar hechos de la esfera personal del cliente. Por eso la Sala pidió valorar la prueba según el acceso de cada parte a ella, desde la presunción de buena fe del demandante:",
          "Así quedó repartida la prueba:"
        ],
        literales: [
          [
            6,
            0,
            0
          ],
          [
            9,
            0,
            1
          ]
        ],
        visual: "comparacion",
        nota: "El consumidor prueba el daño y el nexo causal. La causa eximente la prueba el banco."
      },
      {
        id: "el-camino",
        titulo: "El camino de acceso",
        parrafos: [
          "El núcleo del fallo está en el considerando V. La Sala aceptó que la plataforma interna del banco no fue vulnerada. Lo decisivo era otra obligación, la de identificar a quien opera las cuentas:",
          "El riesgo que se materializó estaba en ese mecanismo de identificación, y con él en el acceso al servicio. Internet es el canal que el propio banco ofrece y promociona para su beneficio, de modo que forma parte de lo que presta:",
          "Tampoco había prueba de una eximente. Nada indicaba que la clienta hubiera usado mal su usuario o sus claves, y el banco no demostró haber adoptado las mejores medidas de seguridad en todo el servicio: su propio perito declaró que trabajaba en un sistema de firma digital y que había implementado la clave dinámica como factor adicional de identificación."
        ],
        literales: [
          [
            10,
            0,
            0
          ],
          [
            14,
            0,
            1
          ],
          [
            15,
            0,
            2
          ]
        ]
      },
      {
        id: "reglamento",
        titulo: "El reglamento y los deberes del cliente",
        parrafos: [
          "El banco sostuvo que su reglamento, aceptado por la clienta al afiliarse al servicio, era un contrato: la custodia de la clave corría por cuenta del cliente, y toda transacción hecha con ella se tenía por suya. La Sala respondió que el artículo 35 rige en la responsabilidad contractual y en la extracontractual:",
          "Y que una cláusula del propio banco carece de fuerza para cambiar la prueba que la ley reparte:",
          "A mayor abundamiento, y al margen del caso, la Sala dejó dicho qué se espera del cliente:"
        ],
        literales: [
          [
            16,
            0,
            0
          ],
          [
            17,
            0,
            1
          ],
          [
            18,
            0,
            2
          ]
        ]
      },
      {
        id: "constitucion",
        titulo: "El juez de casación y la Constitución",
        parrafos: [
          "El último agravio del banco invocaba la razonabilidad y la proporcionalidad: responder por un robo ocurrido en «el infinito mundo de Internet» equivalía, según el recurso, a socializar todos los riesgos del consumo. La Sala aprovechó para fijar el papel de la casación frente a la Constitución:",
          "Y rechazó el agravio. El Tribunal había aplicado el régimen que el legislador dictó en desarrollo de los artículos 41 y 46 de la Constitución, y el argumento del banco quedaba fuera del marco jurídico:"
        ],
        literales: [
          [
            19,
            0,
            0
          ],
          [
            19,
            1,
            0
          ],
          [
            20,
            0,
            1
          ]
        ]
      },
      {
        id: "ingenieria-social",
        titulo: "Cuando el cliente entrega la clave",
        parrafos: [
          "La sentencia dejó abierta la puerta de las eximentes. En 2013, la Sección Octava del Tribunal Contencioso Administrativo aplicó su marco para tener por probada la culpa de la víctima y absolver al banco en otro fraude electrónico.",
          "Con la estafa por ingeniería social, en la que el propio cliente entrega sus datos a quien se hace pasar por el banco, la cuestión llegó a la Sala Primera. En 2022, en un caso ajeno a la banca, la Sala precisó qué significa ser «ajeno al daño»: la fuerza mayor, la culpa de la víctima y el hecho de un tercero del artículo 190 de la Ley General de la Administración Pública. Ese mismo año llevó el criterio a los fraudes bancarios. Sus sentencias citan la 300-F-S1-2009 para recordar que el régimen objetivo tiene límites, y liberan al banco cuando un tercero operó con los datos del cliente y la entidad probó medidas de seguridad razonables:",
          "La misma sentencia conservó la regla de la prueba: el consumidor no tiene que demostrar que la actividad del banco excede los riesgos tolerables. La línea tiene, además, una disidencia. En 2023, en un caso de mensajes de texto y correos que pedían a la clienta cambiar su clave, el magistrado López Casal salvó el voto:",
          "A su juicio, el banco no probó haber advertido debidamente a la clienta, y sin esa información la culpa de la víctima no podía tenerse por configurada."
        ],
        citasExternas: [
          {
            texto: "Con base en el amplio bagaje jurisprudencial desarrollado por esta Sala, es dable señalar, con total seguridad, que la realización de un acto ilícito y dañino por parte de un tercero – con o sin participación de la presunta víctima -, sin que el agente oferente del servicio bancario haya propiciado condiciones idóneas para tal acción – antes bien, se demostró la realización de actos útiles para evitarlo, incluidas campañas informativas y la utilización de sistemas de seguridad que superan los estándares imperantes -, resulta totalmente inimputable a este último, por cuanto el daño no es el resultado de un riesgo propiciado o creado por la entidad financiera, sino de actos ilícitos - muy posiblemente constitutivos de delitos - ideados y materializados por personas externas a la organización empresarial del BN.",
            destacar: [
              "resulta totalmente inimputable a este último"
            ],
            citation: "Sala Primera, voto 2007-F-S1-2022 · Considerando VII",
            nexusId: "sen-1-0004-1113951",
            tras: 1
          },
          {
            texto: "En el presente litigio no hubo culpa de la víctima porque quedó demostrado que a ella se le envió un mensaje de texto, a su teléfono celular y también un correo electrónico, en el cual se le pidió el cambio de su clave y se le comunicó que había olvidado su contraseña.",
            citation: "Sala Primera, voto 1892-F-S1-2023 · voto salvado del magistrado López Casal",
            nexusId: "sen-1-0004-1198530",
            tras: 2
          }
        ]
      },
      {
        id: "reforma",
        titulo: "La reforma de 2026",
        parrafos: [
          "El 22 de abril de 2026 entró en vigor la Ley 10889, que reformó el artículo 35 de la Ley del Consumidor. Las entidades financieras responden, con independencia de la culpa, por la sustracción de dinero que haga un tercero no autorizado por el titular, «independientemente del mecanismo utilizado para la sustracción», salvo que se configure una eximente legal. La ley invirtió además la carga de la prueba en los fraudes electrónicos y reguló el reclamo ante la entidad, que solo puede rechazarlo si prueba autofraude, dolo o una transferencia entre cuentas del mismo titular, con revisión de la Sugef.",
          "La Asociación Bancaria Costarricense impugnó los artículos 3, 5 y 8 de la ley, que regulan el reclamo, sus plazos y el reporte de las cuentas usadas en fraudes. La Sala Constitucional dio curso a la acción el 28 de mayo de 2026 y le acumuló las de la Cámara de Bancos e Instituciones Financieras y de la Federación de Cooperativas de Ahorro y Crédito. Al cierre de este análisis, Nexus no registra sentencia de fondo."
        ]
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La Sala Primera asumió el criterio como propio en 2009, cuando lo aplicó a otro fraude por internet contra el mismo banco. En 2010, el Tribunal de Casación de lo Contencioso Administrativo lo usó para calificar como de consumo la relación entre el banco y el titular de una tarjeta de débito, y condenó solidariamente al Banco Popular y a la empresa dueña del cajero automático donde se hicieron seis retiros no autorizados.",
          "La doctrina salió también del ámbito bancario. El Tribunal Contencioso Administrativo y la Sala Primera la citan en demandas contra el Estado, la Caja Costarricense de Seguro Social, las municipalidades o el Instituto Costarricense de Electricidad, por su formulación de la causalidad adecuada y de la carga de la prueba. En enero de 2026 la Sala Primera la citó en la demanda de una funcionaria pública herida por el desprendimiento de un cielorraso."
        ],
        visual: "recepcion"
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "Hemos encontrado su cita en el texto de al menos 271 resoluciones, dictadas entre 2009 y 2026. La mayoría proviene del Tribunal Contencioso Administrativo, que conoce las demandas contra los bancos públicos, y de la Sala Primera, con 99 resoluciones. También la citan el Tribunal de Casación de lo Contencioso Administrativo, tribunales civiles y penales, la Sala Segunda y la Sala Constitucional.",
          "Cerca de la mitad resuelve demandas contra bancos y otras entidades financieras. El resto la invoca como doctrina general de la responsabilidad objetiva. El pasaje sobre el riesgo anormal aparece en el texto de más de un centenar de resoluciones, y el de la transferencia patrimonial automática, en más de un tercio.",
          "Su uso tuvo dos momentos. Entre 2010 y 2012 la citaron 77 resoluciones. Desde 2022 volvió a crecer: 99 resoluciones entre 2022 y 2025, con 32 en 2024.",
          "Fuera de los tribunales el rastro es más corto y más llamativo. La Junta Directiva de la ARESEP y el Consejo Superior del Poder Judicial la citan para explicar la causalidad adecuada y el deber de la entidad de mantener sistemas de doble identificación y claves cambiantes. Y el Poder Ejecutivo la llevó a una norma: el Decreto 43629-MICITT de 2022, que reformó el Reglamento para la transición a la televisión digital terrestre, la cita en sus considerandos para fundar la carga dinámica de la prueba, o sea, que prueba quien está en mejores condiciones de hacerlo.",
          "En la doctrina la citan la Revista Judicial 112, de 2014, y dos tesis de acceso abierto: una del repositorio de la ULACIT, sobre la responsabilidad objetiva de la banca frente al phishing, de 2020, y otra de Kérwá, sobre el delito de estafa informática, de 2021."
        ],
        visual: "citas"
      }
    ],
    visuales: {
      trayectoria: [
        {
          etapa: "Los fraudes",
          sede: "Banca por internet del Banco de Costa Rica · julio de 2007 y abril de 2008",
          detalle: "Transferencias hechas con el usuario y la clave de la clienta sustraen ¢1.489.290,60 y $4.379,53 de sus cuentas."
        },
        {
          etapa: "El reclamo",
          sede: "Banco de Costa Rica",
          detalle: "La clienta denuncia ante el OIJ y la Contraloría de Servicios. El banco rechaza el reclamo porque se usó una clave válida."
        },
        {
          etapa: "Primera instancia",
          sede: "Tribunal Contencioso Administrativo, Sección Cuarta · 19 de setiembre de 2008",
          detalle: "Condena al banco a reintegrar lo sustraído, con intereses y costas."
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 26 de marzo de 2009",
          detalle: "Declara sin lugar el recurso del banco: el riesgo estaba en el funcionamiento del servicio y no se probó ninguna eximente.",
          final: true
        }
      ],
      comparaciones: {
        prueba: [
          {
            titulo: "La víctima",
            rasgo: "Prueba el daño y el nexo causal. Su buena fe se presume.",
            enElCaso: "Acreditó las sustracciones y sus denuncias ante el OIJ y el banco.",
            literal: "Empero, de lo anterior no debe extraerse que la víctima se encuentra exenta del deber probatorio, ya que le corresponde acreditar, en los términos dichos, el daño sufrido y el nexo de causalidad.",
            citation: "Considerando IV"
          },
          {
            titulo: "El banco",
            rasgo: "Prueba que fue ajeno al daño: culpa de la víctima, hecho de un tercero o fuerza mayor.",
            enElCaso: "Probó que su plataforma no fue vulnerada. No probó ninguna eximente.",
            literal: "Por su parte, corre por cuenta del accionado probar que es ajeno a la producción del daño, es decir, debe demostrar la concurrencia de alguna de las causas eximentes de responsabilidad, ya sea la culpa de la víctima, el hecho de un tercero o la fuerza mayor.",
            citation: "Considerando IV"
          }
        ]
      },
      formas: {
        consumo: [
          {
            titulo: "Una conducta lesiva",
            texto: "Activa u omisiva, legítima o ilegítima. En el caso, el funcionamiento del servicio de banca por internet."
          },
          {
            titulo: "Un daño",
            texto: "La lesión de un bien jurídico tutelado. En el caso, el dinero sustraído de las cuentas."
          },
          {
            titulo: "El nexo causal",
            texto: "Se aprecia con la causalidad adecuada. Las eximentes actúan sobre él y lo rompen."
          },
          {
            titulo: "Un criterio de atribución",
            texto: "Depende del régimen legal. En el artículo 35 de la Ley del Consumidor, el riesgo creado."
          }
        ]
      },
      recepcion: [
        {
          anio: "2009",
          organo: "Sala Primera",
          texto: "Lo aplica a otro fraude por internet contra el mismo banco y transcribe sus considerandos sobre la prueba.",
          enlaces: [
            {
              etiqueta: "Voto 827-F-S1-2009",
              nexusId: "sen-1-0034-449085"
            }
          ]
        },
        {
          anio: "2010",
          organo: "Tribunal de Casación de lo Contencioso Administrativo",
          texto: "Califica como de consumo la relación con el titular de una tarjeta y condena solidariamente al banco y a la dueña del cajero.",
          enlaces: [
            {
              etiqueta: "Voto 84-F-TC-2010",
              nexusId: "sen-1-0034-465549"
            }
          ]
        },
        {
          anio: "2013",
          organo: "Tribunal Contencioso Administrativo",
          texto: "Con el mismo marco, tiene por probada la culpa de la víctima y absuelve al banco.",
          enlaces: [
            {
              etiqueta: "Voto 9-2013, Sección Octava",
              nexusId: "sen-1-0034-561177"
            }
          ]
        },
        {
          anio: "2022",
          organo: "Sala Primera",
          texto: "Define qué es ser «ajeno al daño» y libera al banco cuando un tercero operó con los datos del cliente.",
          enlaces: [
            {
              etiqueta: "Voto 1016-F-S1-2022",
              nexusId: "sen-1-0004-1092614"
            },
            {
              etiqueta: "Voto 2007-F-S1-2022",
              nexusId: "sen-1-0004-1113951"
            }
          ]
        },
        {
          anio: "2023",
          organo: "Sala Primera",
          texto: "Mantiene la línea en un caso de mensajes falsos, con el voto salvado del magistrado López Casal.",
          enlaces: [
            {
              etiqueta: "Voto 1892-F-S1-2023",
              nexusId: "sen-1-0004-1198530"
            }
          ]
        },
        {
          anio: "2026",
          organo: "Asamblea Legislativa",
          texto: "La Ley 10889 reforma el artículo 35 de la Ley del Consumidor e invierte la carga de la prueba en los fraudes electrónicos.",
          enlaces: [
            {
              etiqueta: "Ley 10889",
              scijId: 106861
            }
          ],
          final: true
        }
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo: "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 300-F-S1-2009, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
        csv: "/datos/jurisprudencia/300-F-S1-2009-resoluciones-que-la-citan.csv"
      }
    },
    casoFactico: [
      "En julio de 2007 y en abril de 2008, un tercero usó el usuario y la clave de una clienta del Banco de Costa Rica para transferir fondos desde sus cuentas por la banca por internet. El banco rechazó el reclamo porque las operaciones se hicieron con una clave válida.",
      "El Tribunal Contencioso Administrativo condenó al banco a reintegrar lo sustraído, y la Sala Primera confirmó la condena: el riesgo estaba en el funcionamiento del servicio, y el banco no probó ninguna causa eximente."
    ],
    nexusId: "sen-1-0034-442609",
    precedentes: [
      {
        organo: "Sala Primera",
        numero: "Voto 1008-F-2006",
        fecha: "21-12-2006",
        nexusId: "sen-1-0034-391270",
        nota: "La causalidad adecuada como teoría del nexo causal."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 212-F-S1-2008",
        fecha: "25-03-2008",
        nexusId: "sen-1-0034-412982",
        nota: "La carga de la prueba corresponde a quien está en mejores condiciones de aportarla."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 467-F-S1-2008",
        fecha: "04-07-2008",
        nexusId: "sen-1-0034-429238",
        nota: "La causalidad adecuada como teoría del nexo causal."
      }
    ],
    citadaPor: [
      {
        organo: "Sala Primera",
        numero: "Voto 827-F-S1-2009",
        fecha: "07-08-2009",
        nexusId: "sen-1-0034-449085",
        nota: "Aplica el criterio a otro fraude por internet contra el Banco de Costa Rica."
      },
      {
        organo: "Tribunal de Casación de lo Contencioso Administrativo",
        numero: "Voto 84-F-TC-2010",
        fecha: "21-01-2010",
        nexusId: "sen-1-0034-465549",
        nota: "Relación de consumo con el titular de una tarjeta; condena solidaria de la dueña del cajero."
      },
      {
        organo: "Tribunal Contencioso Administrativo, Sección Octava",
        numero: "Voto 9-2013",
        fecha: "06-02-2013",
        nexusId: "sen-1-0034-561177",
        nota: "Tiene por probada la culpa de la víctima y absuelve al banco."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 1016-F-S1-2022",
        fecha: "12-05-2022",
        nexusId: "sen-1-0004-1092614",
        nota: "Qué significa ser ajeno al daño."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 2007-F-S1-2022",
        fecha: "13-09-2022",
        nexusId: "sen-1-0004-1113951",
        nota: "Libera al banco en un fraude hecho con los datos del cliente."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 1892-F-S1-2023",
        fecha: "02-11-2023",
        nexusId: "sen-1-0004-1198530",
        nota: "Voto salvado del magistrado López Casal."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 48-F-S1-2026",
        fecha: "15-01-2026",
        nexusId: "sen-1-0004-1361322",
        nota: "La cita como doctrina general de la causalidad adecuada."
      }
    ],
    normativa: [
      {
        nombre: "Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor",
        detalle: "Ley 7472 · 20 de diciembre de 1994",
        articulos: "Art. 35",
        scijId: 26481
      },
      {
        nombre: "Código Civil",
        detalle: "Ley 30 · 19 de abril de 1885",
        articulos: "Arts. 1022, 1045 y 1048",
        scijId: 15437
      },
      {
        nombre: "Ley General de la Administración Pública",
        detalle: "Ley 6227 · 2 de mayo de 1978",
        articulos: "Art. 190",
        scijId: 13231
      },
      {
        nombre: "Código Procesal Contencioso-Administrativo",
        detalle: "Ley 8508 · 28 de abril de 2006",
        articulos: "Arts. 138 y 150",
        scijId: 57436
      },
      {
        nombre: "Constitución Política de la República de Costa Rica",
        detalle: "7 de noviembre de 1949",
        articulos: "Arts. 41 y 46",
        scijId: 871
      },
      {
        nombre: "Ley de protección a las personas consumidoras en la custodia de su dinero",
        detalle: "Ley 10889 · 23 de marzo de 2026",
        articulos: "Art. 1 (reforma del art. 35 de la Ley 7472)",
        scijId: 106861,
        tema: "Posterior a la sentencia"
      }
    ],
    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho",
    redactoresAdicionales: [],
    fuenteUrl: "https://nexuspj.poder-judicial.go.cr/document/sen-1-0034-442609",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",
    areas: ["litigio-contencioso-administrativo", "regulacion-fintech-criptoactivos", "defensa-regulatoria-sectorial", "servicio-publico"],
    temas: ["Responsabilidad Patrimonial", "VASP", "SUGEF", "Derecho Público"],
    metaDescription:
      "Si le vacían la cuenta por internet, el riesgo es del banco. La Sala Primera aplicó la responsabilidad objetiva a la banca electrónica. Voto 300-F-S1-2009.",
    seoTitle: "Fraude en la banca por internet · Voto 300-F-S1-2009 · Óscar González Camacho",
  },
  /* 1426-F-S1-2012. Pasajes copiados del texto de Nexus. */
  {
    slug: "caducidad-de-la-accion",
    numero: "Resolución N° 1426-F-S1-2012",
    fecha: "23 de octubre de 2012",
    fechaCorta: "23 Oct 2012",
    fechaISO: "2012-10-23",
    hora: "10:10 horas",
    expediente: "11-002378-1027-CA",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",
    area: "Derecho Administrativo",
    materia: "Caducidad de la acción y actos de efectos continuados",
    badge: {
      type: "referencia",
      label: "Sentencia de Referencia"
    },
    titulo: "El acto que se agota en un solo momento",
    subtitulo: "La Sala Primera definió cuándo un acto administrativo tiene efectos continuados: las consecuencias que se derivan de una situación ya definida dejan el plazo para demandar donde estaba, y la caducidad la examina el juez de oficio.",
    pullQuote: {
      texto: "Ahora bien, las distintas consecuencias que se puedan derivar de ello, como la pretendida imposibilidad de acceder a estudios de postgrado, o bien, eventuales ingresos adicionales, no constituyen efectos jurídicos y directos dispuestos por el acto administrativo que resolvió la gestión del petente, sino, que derivan, precisamente, de esa consolidación del estatus académico otorgado como una repercusión consecuencial, secundaria y permanente en el tiempo, pero no de incidencia repetida.",
      citation: "Considerando IX"
    },
    sintesisPortada: {
      caso: "En 1987 la Universidad de Costa Rica equiparó a licenciatura el título de un ingeniero formado en la antigua Unión Soviética. En 2007 él pidió la equiparación como maestría; la Universidad la negó y le notificó la negativa en **febrero de 2008**. Demandó en **mayo de 2011**, y el Tribunal Contencioso Administrativo declaró **de oficio** caducada la acción.",
      analisis: "La Sala confirmó que la caducidad **se examina de oficio** y que el régimen aplicable lo fija **la firmeza del acto**. Distinguió el acto de **efecto instantáneo**, que se agota en un solo momento, del de **efectos continuados**, que incide una y otra vez, y precisó que las consecuencias de un estatus ya definido **dejan el plazo donde estaba**.",
      impacto: "**Al menos 187 resoluciones** la citan, y cuatro de cada cinco son de 2020 en adelante. Su definición decide cuatro plazos: la demanda, la lesividad, la anulación de oficio y la revisión municipal. Fuera de los tribunales suman **16 pronunciamientos**: diez dictámenes de la Procuraduría y cinco sesiones de Corte Plena, una de ellas con 158 artículos."
    },
    fragmentosPortada: [
      {
        texto: "aquellos actos de efecto instantáneo en los que su incidencia o efecto se agota en un solo momento, precisamente en el que varía, en forma positiva o negativa, el conjunto de derechos, potestades, obligaciones, deberes, y cargas de las personas.",
        citation: "Considerando IX"
      },
      {
        texto: "Esta constituye un presupuesto esencial para que la controversia pueda ser conocida por los órganos jurisdiccionales, ya que una vez traspasado ese umbral temporal, la acción mediante la que se solicita la actuación e intervención judicial decae, dado que, incluso, es irrenunciable para la parte.",
        citation: "Considerando IV"
      },
      {
        texto: "En la línea de lo expuesto en el considerando anterior, el acto impugnado no es la causa de las afectaciones aducidas, sino que tales efectos son derivación del estatus jurídico que se perpetuó una vez resuelta la gestión de homologación.",
        citation: "Considerando IX"
      }
    ],
    contexto: [
      "Desde 2008, el Código Procesal Contencioso-Administrativo da un año para demandar la nulidad de un acto administrativo. Si el acto tiene efectos continuados, el año corre desde que esos efectos cesan. La ley, sin embargo, no dice qué es un efecto continuado.",
      "La sentencia 1426-F-S1-2012, redactada por el magistrado Óscar Eduardo González Camacho, dio la definición que desde entonces usan los tribunales, la Procuraduría y la Corte Plena."
    ],
    pasajes: [
      {
        titulo: "La caducidad, de oficio",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "En este sentido, es importante destacar que, a diferencia de la prescripción, que puede ser renunciada expresa o tácitamente, la caducidad de la acción no se encuentra sujeta al principio rogatorio, y por ende, su análisis puede efectuarse de manera oficiosa.",
            destacar: [
              "no se encuentra sujeta al principio rogatorio"
            ]
          }
        ]
      },
      {
        titulo: "Un presupuesto esencial",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Esta constituye un presupuesto esencial para que la controversia pueda ser conocida por los órganos jurisdiccionales, ya que una vez traspasado ese umbral temporal, la acción mediante la que se solicita la actuación e intervención judicial decae, dado que, incluso, es irrenunciable para la parte.",
            destacar: [
              "presupuesto esencial"
            ]
          }
        ]
      },
      {
        titulo: "El plazo del Código",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "En este sentido, con la excepción contenida en el artículo 40 respecto de la inaplicabilidad futura de los actos cuyos efectos sean continuados, el CPCA dispone un plazo máximo para incoar el proceso de un año, momento a partir del cual la demanda resulta inadmisible, tal y como se consigna en el precepto 92 del mismo cuerpo normativo."
          }
        ]
      },
      {
        titulo: "La firmeza decide",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Así, la ultractividad de la redacción original del precepto 175 previamente citado, y por ende, del plazo de caducidad de cuatro años, únicamente cobija aquellos actos que hayan adquirido firmeza antes del 2008. Es decir, el supuesto de hecho determinante para la aplicación del transitorio mencionado es el momento a partir del cual se puede considerar que el acto adquirió firmeza.",
            destacar: [
              "el momento a partir del cual se puede considerar que el acto adquirió firmeza"
            ]
          }
        ]
      },
      {
        titulo: "La comunicación del acto",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "En este sentido, y dado que la eficacia de los actos, salvo que concedan derechos al particular, se encuentra supeditada a la comunicación (art. 140 de la Ley General de la Administración Pública), lo cierto es que la firmeza del acto sobrevino cuando ya estaba vigente el CPCA."
          }
        ]
      },
      {
        titulo: "Efectos continuados",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "este supuesto es propio de aquellas relaciones jurídicas de duración, entendiendo que opera cuando el acto incide reiteradamente en la esfera jurídica del particular, ya sea creando, modificado o extinguiendo durante ese período las relaciones o situaciones jurídicas que integran dicha esfera jurídica.",
            destacar: [
              "incide reiteradamente en la esfera jurídica del particular"
            ]
          }
        ]
      },
      {
        titulo: "Efecto instantáneo",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "aquellos actos de efecto instantáneo en los que su incidencia o efecto se agota en un solo momento, precisamente en el que varía, en forma positiva o negativa, el conjunto de derechos, potestades, obligaciones, deberes, y cargas de las personas.",
            destacar: [
              "se agota en un solo momento"
            ]
          }
        ]
      },
      {
        titulo: "Consecuencias que no son efectos",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "Ahora bien, las distintas consecuencias que se puedan derivar de ello, como la pretendida imposibilidad de acceder a estudios de postgrado, o bien, eventuales ingresos adicionales, no constituyen efectos jurídicos y directos dispuestos por el acto administrativo que resolvió la gestión del petente, sino, que derivan, precisamente, de esa consolidación del estatus académico otorgado como una repercusión consecuencial, secundaria y permanente en el tiempo, pero no de incidencia repetida.",
            destacar: [
              "una repercusión consecuencial, secundaria y permanente en el tiempo, pero no de incidencia repetida"
            ]
          }
        ]
      },
      {
        titulo: "La causa de las afectaciones",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "En la línea de lo expuesto en el considerando anterior, el acto impugnado no es la causa de las afectaciones aducidas, sino que tales efectos son derivación del estatus jurídico que se perpetuó una vez resuelta la gestión de homologación."
          }
        ]
      },
      {
        titulo: "El plazo vencido",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "A partir de las razones expuestas, el plazo máximo para interponer este proceso jurisdiccional contra el oficio ORI-R-1437-2007 feneció en febrero de 2009, y la demanda se interpuso el 2 de mayo de 2011, lo que confirma lo resuelto, y obliga al rechazo del reparo."
          }
        ]
      },
      {
        titulo: "Un acto firme y consentido",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "Dicha omisión consolidó lo resuelto en aquel entonces, por lo que la presentación del segundo procedimiento administrativo, así como este proceso, resultan improcedentes, en la medida en que pretenden modificar un acto administrativo firme y consentido.",
            destacar: [
              "un acto administrativo firme y consentido"
            ]
          }
        ]
      },
      {
        titulo: "La nota sobre las costas",
        citation: "Nota de los magistrados González Camacho y Escoto Fernández",
        parrafos: [
          {
            texto: "Sin embargo, en parecer de los suscritos, la indebida inaplicación de los preceptos que permiten la exoneración de costas, infringe, sin duda, el Ordenamiento Jurídico y, en concreto, las normas que la autorizan, ya sea por error o inadecuada apreciación de los jueces en el conflicto específico. En ese tanto, aunque se trate de una facultad, es lo cierto que no se encuentra inmune al control casacional, pues tanto en su ejercicio como en su inaplicación, puede operar una violación de ley, y en esa medida, la indebida omisión no es ni debe ser, sinónimo de arbitrariedad, en tal caso, cometida por el propio Juzgador.",
            destacar: [
              "no se encuentra inmune al control casacional"
            ]
          }
        ]
      }
    ],
    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "En diciembre de 1987, la Universidad de Costa Rica reconoció y equiparó al grado de licenciatura el título de ingeniero eléctrico que un profesional había obtenido en un instituto politécnico de la antigua Unión Soviética. En abril de 2007, él pidió que el mismo título se equiparara al grado de maestría, al amparo del convenio de cooperación cultural y científica entre ambos países.",
          "La Universidad rechazó la gestión con un oficio que le notificó el 5 de febrero de 2008. El 2 de mayo de 2011 él demandó la nulidad de ese oficio, la equiparación y una indemnización. El Tribunal Contencioso Administrativo declaró de oficio caducada la acción de nulidad y, por accesoriedad, rechazó las demás pretensiones, aunque el juez tramitador había desestimado la caducidad en la audiencia preliminar.",
          "El actor recurrió en casación. Alegó que la caducidad no podía examinarse de oficio, que la equiparación era su pretensión principal, que el caso debía regirse por el plazo de cuatro años anterior al Código y que la negativa tenía efectos continuados, porque le impedía cada día aspirar a un doctorado."
        ],
        visual: "trayectoria"
      },
      {
        id: "de-oficio",
        titulo: "La caducidad, de oficio",
        parrafos: [
          "El actor sostuvo que el Tribunal no podía volver sobre la caducidad, porque el juez tramitador la había rechazado y la Universidad no la reiteró en sus conclusiones. La Sala separó las dos defensas que se habían opuesto:",
          "La caducidad funciona como una condición para que el juez pueda conocer el asunto:",
          "Y el Código fija ese umbral en un año:"
        ],
        literales: [
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            1
          ],
          [
            2,
            0,
            2
          ]
        ],
        nota: "La prescripción solo se examina si la parte la alega. La caducidad de la acción la revisa el juez aunque nadie la invoque."
      },
      {
        id: "firmeza",
        titulo: "El plazo lo fija la firmeza del acto",
        parrafos: [
          "El actor pidió el plazo de cuatro años del artículo 175 de la Ley General de la Administración Pública, vigente antes del Código, porque su gestión había empezado en 2007. La Sala precisó qué decide el régimen aplicable según el transitorio III del Código:",
          "El oficio que negó la equiparación se dictó en 2007, pero se notificó en febrero de 2008, y un acto es eficaz desde que se comunica:",
          "Regía, entonces, el plazo de un año del Código Procesal Contencioso-Administrativo."
        ],
        literales: [
          [
            3,
            0,
            0
          ],
          [
            4,
            0,
            1
          ]
        ]
      },
      {
        id: "efectos",
        titulo: "Instantáneo o continuado",
        parrafos: [
          "El núcleo del fallo está en el considerando IX. El artículo 40 del Código permite demandar un acto de efectos continuados mientras esos efectos subsistan, y la ley deja sin definir la categoría. La Sala la definió por contraste.",
          "La pregunta es si el acto sigue actuando sobre la situación jurídica de la persona o si la fijó de una vez:"
        ],
        visual: "comparacion"
      },
      {
        id: "consecuencias",
        titulo: "Consecuencias que no son efectos",
        parrafos: [
          "El actor alegaba un daño que se renovaba cada día: sin la maestría no podía aspirar a un doctorado ni a mejores ingresos. La Sala respondió con la distinción que la jurisprudencia posterior más repite:",
          "Con un acto de efecto instantáneo, el plazo había vencido mucho antes de la demanda:",
          "A mayor abundamiento, la Sala advirtió que la equiparación de 1987 había quedado firme y consentida:"
        ],
        literales: [
          [
            7,
            0,
            0
          ],
          [
            9,
            0,
            1
          ],
          [
            10,
            0,
            2
          ]
        ],
        nota: "Lo decisivo es si el acto vuelve a incidir en la situación jurídica de la persona. Las repercusiones de un estatus ya definido dejan el plazo donde estaba."
      },
      {
        id: "cuatro-plazos",
        titulo: "Una distinción que decide cuatro plazos",
        parrafos: [
          "La sentencia resolvió un problema de caducidad de la acción. Su definición sirvió después en todas las normas que hacen depender un plazo de que los efectos del acto perduren:"
        ],
        visual: "formas"
      },
      {
        id: "costas",
        titulo: "La nota sobre las costas",
        parrafos: [
          "El considerando sobre las costas lo redactó el magistrado Solís, con el criterio de la mayoría: la condena al vencido no se revisa en casación cuando el tribunal se limita a imponerla. Los magistrados González Camacho y Escoto Fernández mantuvieron su posición en una nota separada:",
          "En el caso concreto compartieron la condena, así que la nota no cambió el resultado."
        ],
        literales: [
          [
            11,
            0,
            0
          ]
        ]
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La recepción fue rápida. En 2013, el Tribunal de Casación de lo Contencioso Administrativo hizo suyo el considerando IX para confirmar la caducidad de una demanda contra una orden municipal de reabrir un camino público, y la Sección Cuarta del Tribunal Contencioso Administrativo lo aplicó para rechazar la caducidad opuesta a una lesividad del Estado.",
          "La Sala Primera la aplicó en los dos sentidos. En 2016 negó efectos continuados a la cancelación del asiento de nacimiento de una persona; en 2022 los reconoció en la exoneración de una contribución que se descuenta cada mes, y casó los fallos que habían declarado inadmisibles las lesividades del Estado. En la Procuraduría, al menos diez dictámenes la citan, como el C-169-2024, que la usa para decidir si sigue abierta la potestad de anular de oficio un acto absolutamente nulo."
        ],
        visual: "recepcion"
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "Hemos encontrado su cita en el texto de al menos 187 resoluciones, dictadas entre 2013 y 2026. Casi todas provienen del Tribunal Contencioso Administrativo y de su Tribunal de Casación; la Sección Tercera, que conoce las apelaciones contra acuerdos municipales, la cita en 28 resoluciones. La Sala Primera la cita en 24, y el Tribunal Agrario, en dos.",
          "Su uso creció con el tiempo: cuatro de cada cinco citas son de 2020 en adelante, con 31 en 2020 y 30 en 2022. Es la más joven de las cinco sentencias que hemos estudiado y ya la citan tantas resoluciones como a las que tienen diez años más.",
          "Fuera de los tribunales la citan 16 pronunciamientos. Diez son dictámenes de la Procuraduría, de 2014 a 2025, que usan su definición para decidir si sigue abierta la potestad de anular de oficio un acto absolutamente nulo. La Corte Plena la ha invocado en cinco sesiones, y en una sola de 2026 la cita en 158 artículos, al resolver sobre pluses salariales de pago periódico: cada pago renueva el efecto y mantiene abierto el plazo. El Consejo Superior la citó en 2022.",
          "En la doctrina la citan dos tesis publicadas en Kérwá, el repositorio de la Universidad de Costa Rica: una sobre la caducidad de la instancia y otra sobre el régimen de la lesividad, las dos escritas después de que el fallo se volviera la referencia obligada de la materia."
        ],
        visual: "citas"
      }
    ],
    visuales: {
      trayectoria: [
        {
          etapa: "La equiparación",
          sede: "Universidad de Costa Rica · diciembre de 1987",
          detalle: "Reconoce el título soviético como licenciatura en ingeniería eléctrica. La decisión no se impugna."
        },
        {
          etapa: "La nueva gestión",
          sede: "Abril de 2007 · negativa notificada el 5 de febrero de 2008",
          detalle: "Pide la equiparación como maestría. La Universidad la rechaza."
        },
        {
          etapa: "Primera instancia",
          sede: "Tribunal Contencioso Administrativo, Sección Sexta · 28 de octubre de 2011",
          detalle: "La demanda llega el 2 de mayo de 2011. El Tribunal declara de oficio la caducidad."
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 23 de octubre de 2012",
          detalle: "Rechaza de plano el recurso: el plazo para demandar venció en febrero de 2009.",
          final: true
        }
      ],
      comparaciones: {
        efectos: [
          {
            titulo: "Efecto instantáneo",
            rasgo: "La incidencia del acto se agota en un solo momento. El año para demandar corre desde la notificación (artículo 39 del Código).",
            enElCaso: "La negativa a equiparar el título.",
            literal: "aquellos actos de efecto instantáneo en los que su incidencia o efecto se agota en un solo momento, precisamente en el que varía, en forma positiva o negativa, el conjunto de derechos, potestades, obligaciones, deberes, y cargas de las personas.",
            citation: "Considerando IX"
          },
          {
            titulo: "Efectos continuados",
            rasgo: "Propio de relaciones jurídicas de duración: el acto incide una y otra vez. El año corre desde que cesan sus efectos (artículo 40 del Código).",
            enElCaso: "Lo que alegaba el actor.",
            literal: "este supuesto es propio de aquellas relaciones jurídicas de duración, entendiendo que opera cuando el acto incide reiteradamente en la esfera jurídica del particular, ya sea creando, modificado o extinguiendo durante ese período las relaciones o situaciones jurídicas que integran dicha esfera jurídica.",
            citation: "Considerando IX"
          }
        ]
      },
      formas: {
        "cuatro-plazos": [
          {
            titulo: "La demanda",
            texto: "Artículos 39 y 40 del Código Procesal Contencioso-Administrativo. Un año desde la notificación; con efectos continuados, un año desde que cesan, para anular el acto hacia el futuro."
          },
          {
            titulo: "La lesividad",
            texto: "Artículo 34 del mismo Código. La Administración declara lesivo su acto en un año; si es absolutamente nulo, mientras perduren sus efectos."
          },
          {
            titulo: "La anulación de oficio",
            texto: "Artículo 173 de la Ley General de la Administración Pública. La potestad de anular un acto de nulidad evidente y manifiesta caduca en un año, salvo que sus efectos perduren."
          },
          {
            titulo: "La revisión municipal",
            texto: "Artículo 166 del Código Municipal. El recurso extraordinario procede si no han pasado diez años y el acto no ha agotado todos sus efectos."
          }
        ]
      },
      recepcion: [
        {
          anio: "2013",
          organo: "Tribunal de Casación de lo Contencioso Administrativo",
          texto: "Hace suyo el considerando IX y confirma la caducidad de una demanda contra una orden municipal de reabrir un camino.",
          enlaces: [
            {
              etiqueta: "Voto 51-A-TC-2013",
              nexusId: "sen-1-0034-585291"
            }
          ]
        },
        {
          anio: "2013",
          organo: "Tribunal Contencioso Administrativo",
          texto: "Lo aplica para rechazar la caducidad opuesta a una lesividad del Estado.",
          enlaces: [
            {
              etiqueta: "Voto 52-2013, Sección Cuarta",
              nexusId: "sen-1-0034-578000"
            }
          ]
        },
        {
          anio: "2016",
          organo: "Sala Primera",
          texto: "La cancelación de un asiento de nacimiento cambió la situación de la persona en un solo momento.",
          enlaces: [
            {
              etiqueta: "Voto 836-F-S1-2016",
              nexusId: "sen-1-0034-676008"
            }
          ]
        },
        {
          anio: "2022",
          organo: "Sala Primera",
          texto: "La exoneración de una contribución que se descuenta cada mes tiene efectos continuados: la lesividad estaba en plazo.",
          enlaces: [
            {
              etiqueta: "Voto 1148-F-S1-2022",
              nexusId: "sen-1-0004-1091769"
            },
            {
              etiqueta: "Voto 2066-F-S1-2022",
              nexusId: "sen-1-0004-1116400"
            }
          ]
        },
        {
          anio: "2024",
          organo: "Procuraduría General de la República",
          texto: "La usa para decidir si sigue abierta la potestad de anular de oficio un acto absolutamente nulo.",
          enlaces: [
            {
              etiqueta: "Dictamen C-169-2024",
              url: "https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=24584&param2=1&param3=1"
            }
          ]
        },
        {
          anio: "2026",
          organo: "Corte Plena",
          texto: "En una sola sesión la invoca en 158 artículos, sobre pluses salariales de pago periódico.",
          enlaces: [
            {
              etiqueta: "Sesión 30-2026",
              nexusId: "act-1-0003-9050-25"
            }
          ],
          final: true
        }
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo: "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 1426-F-S1-2012, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
        csv: "/datos/jurisprudencia/1426-F-S1-2012-resoluciones-que-la-citan.csv"
      }
    },
    casoFactico: [
      "En 1987 la Universidad de Costa Rica equiparó a licenciatura un título de ingeniería obtenido en la antigua Unión Soviética. En 2007 el titular pidió la equiparación como maestría, y la Universidad la negó en un oficio notificado en febrero de 2008.",
      "La demanda llegó en mayo de 2011. El Tribunal Contencioso Administrativo declaró de oficio la caducidad, y la Sala Primera la confirmó: la negativa fue un acto de efecto instantáneo, y el plazo había vencido en febrero de 2009."
    ],
    nexusId: "sen-1-0004-767786",
    precedentes: [
      {
        organo: "Sala Primera",
        numero: "Voto 1001-F-2002",
        fecha: "20-12-2002",
        nexusId: "sen-1-0034-228564",
        nota: "La nota la recoge entre los fallos del criterio de mayoría sobre las costas."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 541-F-2003",
        fecha: "03-09-2003",
        nexusId: "sen-1-0034-250519",
        nota: "La nota la cita a contrario sensu, con la 563-F-2003, sobre las costas en casación."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 563-F-2003",
        fecha: "10-09-2003",
        nexusId: "sen-1-0034-250539",
        nota: "La nota la cita a contrario sensu, con la 541-F-2003, sobre las costas en casación."
      }
    ],
    citadaPor: [
      {
        organo: "Tribunal de Casación de lo Contencioso Administrativo",
        numero: "Voto 51-A-TC-2013",
        fecha: "13-06-2013",
        nexusId: "sen-1-0034-585291",
        nota: "Hace suyo el considerando IX; confirma una caducidad."
      },
      {
        organo: "Tribunal Contencioso Administrativo, Sección Cuarta",
        numero: "Voto 52-2013",
        fecha: "11-06-2013",
        nexusId: "sen-1-0034-578000",
        nota: "Rechaza la caducidad opuesta a una lesividad del Estado."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 836-F-S1-2016",
        fecha: "11-08-2016",
        nexusId: "sen-1-0034-676008",
        nota: "Cancelación de un asiento de nacimiento: efecto instantáneo."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 1148-F-S1-2022",
        fecha: "12-05-2022",
        nexusId: "sen-1-0004-1091769",
        nota: "Exoneración mensual: efectos continuados."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 2066-F-S1-2022",
        fecha: "29-09-2022",
        nexusId: "sen-1-0004-1116400",
        nota: "Reitera el criterio en otra lesividad del Estado."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 712-F-S1-2025",
        fecha: "24-04-2025",
        nexusId: "sen-1-0004-1288892",
        nota: "Por mayoría: el otorgamiento de una pensión tiene efectos continuados y la lesividad estaba en plazo."
      }
    ],
    normativa: [
      {
        nombre: "Código Procesal Contencioso-Administrativo",
        detalle: "Ley 8508 · 28 de abril de 2006",
        articulos: "Arts. 34, 39, 40, 92, 140 y 193; transitorio III",
        scijId: 57436
      },
      {
        nombre: "Ley General de la Administración Pública",
        detalle: "Ley 6227 · 2 de mayo de 1978",
        articulos: "Arts. 140 y 175; art. 173 en la aplicación posterior",
        scijId: 13231
      },
      {
        nombre: "Código Municipal",
        detalle: "Ley 7794 · 30 de abril de 1998",
        articulos: "Art. 166 (recurso extraordinario de revisión)",
        scijId: 40197,
        tema: "Aplicación posterior"
      }
    ],
    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el magistrado González Camacho excepto el XIII que lo redacta el magistrado Solís",
    redactoresAdicionales: [
      "Magistrado Román Solís Zelaya (considerando XIII)"
    ],
    fuenteUrl: "https://nexuspj.poder-judicial.go.cr/document/sen-1-0004-767786",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",
    areas: ["litigio-contencioso-administrativo", "derecho-administrativo", "materia-municipal", "casacion-sala-primera"],
    temas: ["Contencioso Administrativo", "CPCA", "Derecho Administrativo"],
    metaDescription:
      "¿Un año desde cuándo? La Sala Primera separó el acto que se agota en un momento del de efectos continuados: de eso depende el plazo. Voto 1426-F-S1-2012.",
    seoTitle: "Plazo para demandar un acto administrativo · Voto 1426-F-S1-2012 · Óscar González Camacho",
  },
  /* 654-F-S1-2008. Pasajes copiados del texto de Nexus. */
  {
    slug: "responsabilidad-del-estado-juez",
    numero: "Resolución N° 654-F-S1-2008",
    fecha: "26 de setiembre de 2008",
    fechaCorta: "26 Set 2008",
    fechaISO: "2008-09-26",
    hora: "10:45 horas",
    expediente: "02-000605-0163-CA",
    tribunal: "Sala Primera de la Corte Suprema de Justicia",
    area: "Derecho Administrativo",
    materia: "Responsabilidad del Estado por la función jurisdiccional",
    badge: {
      type: "referencia",
      label: "Sentencia de Referencia"
    },
    titulo: "El Estado también responde cuando juzga",
    subtitulo: "La Sala Primera sostuvo que la responsabilidad del Estado por su función jurisdiccional nace de la Constitución y no espera a que una ley la desarrolle, y fijó cuándo la prisión preventiva de quien después resulta inocente debe indemnizarse.",
    pullQuote: {
      texto: "Sin embargo, en criterio de esta Sala, esa ausencia legislativa no podría sustentar un principio de irresponsabilidad del Estado en su función jurisdiccional. Ya se ha señalado que dicha responsabilidad deriva del mismo marco del Derecho de la Constitución, como contrapeso relevante en las relaciones del Estado con las personas y como factor de alta trascendencia en la ecuación del Estado de Derecho.",
      citation: "Considerando VIII"
    },
    sintesisPortada: {
      caso: "El gerente de una agencia bancaria fue asaltado y obligado a abrir la bóveda. Por las contradicciones de su declaración, la Fiscalía pidió su prisión preventiva y él pasó **tres días en la cárcel**, hasta que el Tribunal de Juicio revocó la medida. En 1998 lo sobreseyeron porque **no se le pudo vincular con el hecho**. Demandó al Estado; el Juzgado le concedió ¢9 millones de daño moral y el Tribunal los subió a ¢15 millones.",
      analisis: "La Sala **cambió su propia línea** sobre el plazo para reclamar: donde antes aplicaba los diez años del Código Civil, fijó los **cuatro años del artículo 198 de la LGAP**, por ser el derecho administrativo el que rige la materia. Y sostuvo que la responsabilidad del Estado por juzgar **deriva de la Constitución**, aunque ninguna ley la desarrolle.",
      impacto: "**Al menos 255 resoluciones** la citan. Es la sentencia matriz de la responsabilidad del Estado Juez: fija el plazo para reclamar, distingue la función jurisdiccional de la actividad del Organismo de Investigación Judicial y del Ministerio Público, y precisa cuándo un sobreseimiento **demuestra la inocencia**."
    },
    fragmentosPortada: [
      {
        texto: "Así las cosas, en este último escenario (relevante al presente caso), en tanto exista una lesión antijurídica o ilegítima causada al justiciable, producida como consecuencia de estas competencias, se impone la responsabilidad objetiva del Estado Juez. Como se ha dicho, lo anterior encuentra sustento en los ordinales 9, 11, 33, 41 y 154, todos de la Carta Magna, normas que sientan las bases de la responsabilidad por el error judicial, o por funcionamiento anormal o ilícito de la función jurisdiccional.",
        citation: "Considerando VII"
      },
      {
        texto: "En el ordenamiento patrio, por principio constitucional, toda persona parte de un estado de inocencia hasta que se demuestre lo contrario. Empero, a fin de perfeccionar el estatus jurídico que acredite el derecho a una reparación patrimonial por la causa aludida, se invierte el presupuesto que rige para lo penal, en tanto, se pasa de un estado de inocencia, a uno de inocencia comprobada, como requisito sine qua non de la aplicabilidad normativa.",
        citation: "Considerando X"
      },
      {
        texto: "No fue la duda sobre su culpabilidad lo que determinó la decisión del juzgador, sino la certeza en torno a su no participación en el ilícito, cosa muy distinta.",
        citation: "Considerando XII"
      }
    ],
    contexto: [
      "El artículo 154 de la Constitución dice que las resoluciones del Poder Judicial no imponen a sus jueces más responsabilidades que las que señale la ley, y el 166 remite a lo que la ley disponga. Durante décadas esa remisión sirvió para sostener que, sin ley que la desarrollara, la responsabilidad del Estado por juzgar no existía.",
      "La sentencia 654-F-S1-2008, redactada por el magistrado Óscar Eduardo González Camacho, resolvió lo contrario: el principio de responsabilidad pública está en la Constitución y no admite zonas exentas."
    ],
    pasajes: [
      {
        titulo: "La autonomía del Derecho administrativo",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "No obstante lo anterior, luego de un concienzudo análisis y replanteamiento sobre el tema, este órgano colegiado considera que el plazo con el cual se debe de integrar el derecho es el cuatrienal, regulado en el artículo 198 de la Ley General de la Administración Pública. Lo anterior por cuanto el numeral 9 de dicho cuerpo normativo establece la autonomía del derecho administrativo respecto de otras ramas jurídicas, e indica claramente que, ante la necesidad de integrar el ordenamiento jurídico administrativo, se debe recurrir a las normas y principios del derecho público, de tal forma que existe una prevalencia del derecho administrativo respecto del privado, cuya aplicación sería, en todo caso, subsidiaria y supletoria ante la insuficiencia de aquel.",
            destacar: [
              "el plazo con el cual se debe de integrar el derecho es el cuatrienal"
            ]
          }
        ]
      },
      {
        titulo: "Integrar no es elegir a gusto",
        citation: "Considerando III",
        parrafos: [
          {
            texto: "Esta Sala no desconoce las bondades que en el fondo llevaría aplicar el plazo decenal que estatuye el ordinal 868 de la normativa civil en el contexto de la interpretación que le asigna el Tribunal. Empero, al momento en que se integra el derecho, supliendo una omisión del legislador, creando la norma aplicable, la discrecionalidad del juzgador no es absoluta, y por el contrario, debe procurar una afinidad entre el supuesto de hecho concreto y la norma de la cual se desprende la consecuencia jurídica aplicable.",
            destacar: [
              "la discrecionalidad del juzgador no es absoluta"
            ]
          }
        ]
      },
      {
        titulo: "Si el Derecho empodera, también responsabiliza",
        citation: "Considerando IV",
        parrafos: [
          {
            texto: "Si el Derecho empodera al Estado en sus distintas funciones (ejecutiva, legislativa y judicial), la consecuencia lógica y natural de ese efecto, es la imposición de un sistema de responsabilidad que permita la reparación de los efectos lesivos que su proceder pueda generar en la esfera jurídica de las personas (lo que incluye la tutela de los derechos subjetivos y los intereses legítimos).",
            destacar: [
              "la imposición de un sistema de responsabilidad"
            ]
          }
        ]
      },
      {
        titulo: "Una subespecie de la responsabilidad pública",
        citation: "Considerando VI",
        parrafos: [
          {
            texto: "Se trata por ende, de una subespecie de aquella, en donde el Estado se encuentra en obligación de reparar cualquier daño efectivo, evaluable e individualizado, imputable a una dependencia judicial, a raíz de su funcionamiento, con prescindencia de los criterios subjetivos de dolo o culpa, salvo aquellos reductos en donde el ordenamiento disponga un esquema subjetivo.",
            destacar: [
              "con prescindencia de los criterios subjetivos de dolo o culpa"
            ]
          }
        ]
      },
      {
        titulo: "Las tres facetas del Poder Judicial",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "En un segundo plano, se ubican las unidades auxiliares que no realizan actividad administrativa, ni jurisdiccional, sino que despliegan actuaciones judiciales de instrucción e investigación (actos judicial stricto sensu), como el Organismo de Investigación Judicial, Ministerio Público, Ciencias Forenses, la Defensa Pública entre otros. Pero a la vez, resulta responsable por los daños ocasionados en el ejercicio de la función jurisdiccional propiamente dicha, sea, en la resolución definitiva de las controversias que le sean planteadas y ejecución de sus sentencias (canon 153 constitucional), cuando su proceder haya sido arbitrario, anormal o ilícito.",
            destacar: [
              "actuaciones judiciales de instrucción e investigación"
            ]
          }
        ]
      },
      {
        titulo: "La base constitucional",
        citation: "Considerando VII",
        parrafos: [
          {
            texto: "Así las cosas, en este último escenario (relevante al presente caso), en tanto exista una lesión antijurídica o ilegítima causada al justiciable, producida como consecuencia de estas competencias, se impone la responsabilidad objetiva del Estado Juez. Como se ha dicho, lo anterior encuentra sustento en los ordinales 9, 11, 33, 41 y 154, todos de la Carta Magna, normas que sientan las bases de la responsabilidad por el error judicial, o por funcionamiento anormal o ilícito de la función jurisdiccional.",
            destacar: [
              "se impone la responsabilidad objetiva del Estado Juez"
            ]
          }
        ]
      },
      {
        titulo: "El silencio de la ley no exime",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Sin embargo, en criterio de esta Sala, esa ausencia legislativa no podría sustentar un principio de irresponsabilidad del Estado en su función jurisdiccional. Ya se ha señalado que dicha responsabilidad deriva del mismo marco del Derecho de la Constitución, como contrapeso relevante en las relaciones del Estado con las personas y como factor de alta trascendencia en la ecuación del Estado de Derecho.",
            destacar: [
              "esa ausencia legislativa no podría sustentar un principio de irresponsabilidad"
            ]
          }
        ]
      },
      {
        titulo: "Sin cuadros de dispensa",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "El principio de responsabilidad que dimana, como regla general, del precepto 9 constitucional y encuentra amparo en otras normas que tutelan las garantías del individuo, no contiene marcos de excepción. Así las cosas, cualquier consecuencia final ablativa de la conducta pública debe ser reparada, salvo que concurra en el administrado el deber jurídico de soportar el daño.",
            destacar: [
              "no contiene marcos de excepción"
            ]
          }
        ]
      },
      {
        titulo: "No solo las sentencias",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "Cabe agregar que, esta responsabilidad no se limita a las sentencias solamente. Nótese que el numeral 154 de la Carta Magna utiliza el término “resolución”, con lo cual, resultan comprendidos los distintos modelos que integran esta categoría, sea, providencia, autos, autos con carácter de sentencia y sentencias (numeral 153 Código Procesal Civil).",
            destacar: [
              "el numeral 154 de la Carta Magna utiliza el término “resolución”"
            ]
          }
        ]
      },
      {
        titulo: "Qué es el error judicial",
        citation: "Considerando VIII",
        parrafos: [
          {
            texto: "El error judicial comprende toda decisión jurisdiccional que prive a la persona de uno de sus derechos o intereses legítimos y que resulte errónea o contraria a derecho."
          }
        ]
      },
      {
        titulo: "El segundo párrafo del 271",
        citation: "Considerando IX",
        parrafos: [
          {
            texto: "Ahora bien, el otro supuesto regulado por el numeral 271 de comentario, en el párrafo segundo, resulta aún más específico, ya que surge por una prisión preventiva, en contra de una persona, quien luego es absuelta o sobreseída, con plena demostración de inocencia. Consiste en una hipótesis concreta y especial, que despliega la responsabilidad exclusiva del Estado, no condicionada a la convergencia de valoraciones atinentes a la conducta del funcionario, por tanto de índole objetiva.",
            destacar: [
              "la responsabilidad exclusiva del Estado"
            ]
          }
        ]
      },
      {
        titulo: "De la inocencia presumida a la comprobada",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "En el ordenamiento patrio, por principio constitucional, toda persona parte de un estado de inocencia hasta que se demuestre lo contrario. Empero, a fin de perfeccionar el estatus jurídico que acredite el derecho a una reparación patrimonial por la causa aludida, se invierte el presupuesto que rige para lo penal, en tanto, se pasa de un estado de inocencia, a uno de inocencia comprobada, como requisito sine qua non de la aplicabilidad normativa.",
            destacar: [
              "se pasa de un estado de inocencia, a uno de inocencia comprobada"
            ]
          }
        ]
      },
      {
        titulo: "Por qué la inocencia decide",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "La comprobación de inocencia se erige como un elemento fundamental para el surgimiento del deber de reparar, en la medida en que es ésta circunstancia la que determina la existencia de una lesión antijurídica; el que se ordene una prisión preventiva contra una persona respecto de la cual existe, ex post facto, certeza que no ha cometido ningún ilícito deviene, a todas luces, en injustificada, al haberse afectado derechos de la persona cuando se puede colegir que no procedía.",
            destacar: [
              "es ésta circunstancia la que determina la existencia de una lesión antijurídica"
            ]
          }
        ]
      },
      {
        titulo: "Cuando la medida sí estuvo justificada",
        citation: "Considerando X",
        parrafos: [
          {
            texto: "En caso contrario, es decir, cuando si bien un imputado es sobreseído o no fue condenado por motivos distintos a una demostración de su inocencia, las razones que concurrieron inicialmente para la adopción de la medida cautelar no son desvirtuadas en forma sobreviniente por el resultado del proceso, como si sucede en el anterior supuesto, al arribarse a una convicción de no culpabilidad o al demostrarse la no participación en el ilícito."
          }
        ]
      },
      {
        titulo: "La duda y la certeza",
        citation: "Considerando XII",
        parrafos: [
          {
            texto: "No fue la duda sobre su culpabilidad lo que determinó la decisión del juzgador, sino la certeza en torno a su no participación en el ilícito, cosa muy distinta.",
            destacar: [
              "sino la certeza en torno a su no participación en el ilícito"
            ]
          }
        ]
      },
      {
        titulo: "El daño de los cuatro días",
        citation: "Considerando XIV",
        parrafos: [
          {
            texto: "La privación de libertad constituye un estado que en si mismo, ocasiona padecimientos a nivel psíquico y emocional, lo que se intensifica si el recluso en realidad es inocente. Ser expuesto a un ambiente en condiciones sanitarias deficitarias, en un centro carcelario que de manera pública y notoria padece de hacinamiento, con el riesgo que ello implica para la integridad física y emocional del individuo, son fuentes generadoras de un serio detrimento interno.",
            destacar: [
              "lo que se intensifica si el recluso en realidad es inocente"
            ]
          }
        ]
      },
      {
        titulo: "El daño moral no se prueba",
        citation: "Considerando XIV",
        parrafos: [
          {
            texto: "no obstante, por la naturaleza del daño, el cual consiste en una perturbación injusta de las condiciones anímicas del individuo, la prueba de su existencia, y el posterior reconocimiento, se realizan “in re ipsa.",
            destacar: [
              "in re ipsa"
            ]
          }
        ]
      }
    ],
    analisis: [
      {
        id: "el-caso",
        titulo: "El caso",
        parrafos: [
          "El 21 de febrero de 1998, a las siete de la mañana, el Organismo de Investigación Judicial de Cartago recibió una llamada al 911: habían asaltado una agencia bancaria y su gerente había quedado esposado. Él declaró que dos encapuchados lo interceptaron cuando conducía, le dijeron que tenían raptada a su familia y lo obligaron a volver al banco, desconectar la alarma y abrir la bóveda, de la que sustrajeron cerca de seis millones de colones; después lo maniataron y lo encerraron en el baño.",
          "Por algunas contradicciones entre las declaraciones, la Fiscalía pidió su prisión preventiva y el Juzgado Penal la ordenó por tres meses. El Tribunal de Juicio la revocó dos días después. En junio de 1998 el Juzgado Penal dictó sobreseimiento definitivo, porque no se pudo determinar que él hubiera participado en el delito.",
          "En 2000 reclamó ante el Consejo Superior del Poder Judicial, que lo rechazó. En 2002 demandó al Estado por el daño moral y por lo que pagó a su defensa penal. El Juzgado le concedió ¢9 millones y el Tribunal los aumentó a ¢15 millones. El Estado recurrió en casación: alegó que la acción estaba prescrita, que el sobreseimiento no demostraba inocencia y que el monto era desproporcionado."
        ],
        visual: "trayectoria"
      },
      {
        id: "prescripcion",
        titulo: "El plazo para reclamar",
        parrafos: [
          "El primer agravio del Estado era el plazo. El Tribunal había aplicado los diez años del artículo 868 del Código Civil, con el argumento de que la responsabilidad por la función jurisdiccional queda fuera de la Ley General de la Administración Pública. La Sala había sostenido antes esa misma tesis, en el voto 436 de 2003. Aquí la abandonó:",
          "La razón de fondo es de método. Integrar una laguna deja un margen, y ese margen tiene límites:"
        ],
        literales: [
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            1
          ]
        ],
        nota: "El Estado ganó el argumento y perdió el caso: la Sala le dio la razón sobre el plazo aplicable, pero el reclamo administrativo de 2000 había interrumpido el cómputo, así que la acción seguía viva."
      },
      {
        id: "fundamento",
        titulo: "De dónde nace la responsabilidad",
        parrafos: [
          "Resuelta la prescripción, la Sala entró en el fondo. Empezó por el principio: si el ordenamiento inviste al Estado de poder, le impone al mismo tiempo el deber de reparar lo que ese poder dañe.",
          "La responsabilidad del Poder Judicial queda cubierta por esa cláusula general, con el mismo criterio objetivo que rige para la Administración:",
          "Y tiene anclaje constitucional expreso:"
        ],
        literales: [
          [
            2,
            0,
            0
          ],
          [
            3,
            0,
            1
          ],
          [
            5,
            0,
            2
          ]
        ]
      },
      {
        id: "tres-facetas",
        titulo: "Tres maneras de responder",
        parrafos: [
          "Antes de aplicar la regla, la sentencia separó los planos en que el Poder Judicial puede causar un daño. La distinción se volvió la parte más citada del fallo, porque de ella depende qué régimen se aplica a cada reclamo:"
        ],
        visual: "formas",
        nota: "La actividad del Organismo de Investigación Judicial, del Ministerio Público, de la Defensa Pública y de Ciencias Forenses queda bajo la Ley General de la Administración Pública. La función de juzgar tiene su propio régimen."
      },
      {
        id: "sin-ley",
        titulo: "El silencio de la ley no exime",
        parrafos: [
          "El Estado se apoyaba en que los artículos 154 y 166 de la Constitución remiten a la ley, y ninguna ley desarrolla esta responsabilidad. La Sala respondió que la omisión del legislador no crea un privilegio:",
          "El principio no admite excepciones tácitas:",
          "La regla alcanza a toda resolución, no solo a las sentencias:",
          "Y define el error judicial:"
        ],
        literales: [
          [
            6,
            0,
            0
          ],
          [
            7,
            0,
            1
          ],
          [
            8,
            0,
            2
          ],
          [
            9,
            0,
            3
          ]
        ]
      },
      {
        id: "inocencia",
        titulo: "Cuándo la prisión preventiva se indemniza",
        parrafos: [
          "El Código Procesal Penal sí regula un supuesto concreto. Su artículo 271 tiene dos párrafos: el primero cubre cualquier medida cautelar impuesta indebidamente por un funcionario que actuó con arbitrariedad o culpa grave; el segundo es más específico.",
          "Ese segundo párrafo exige tres cosas que deben darse juntas: prisión preventiva, sobreseimiento o absolutoria, y plena demostración de inocencia. Lo decisivo es la tercera:"
        ],
        literales: [
          [
            10,
            0,
            1
          ]
        ],
        visual: "comparacion"
      },
      {
        id: "el-fallo",
        titulo: "La duda y la certeza",
        parrafos: [
          "El Estado sostenía que el sobreseimiento se había dictado por falta de certeza sobre la participación del imputado, lo que dejaría fuera la indemnización. La Sala leyó el expediente penal y concluyó lo contrario: la Fiscalía lo había pedido por el inciso a) del artículo 311, el hecho no fue cometido por el imputado.",
          "De ahí la frase que la jurisprudencia posterior repite:"
        ],
        literales: [
          [
            14,
            0,
            1
          ]
        ],
        nota: "El sobreseimiento por prescripción o por falta de certeza deja intacta la razón que justificó la prisión preventiva. El sobreseimiento porque la persona no cometió el hecho la desvirtúa hacia atrás."
      },
      {
        id: "dano-moral",
        titulo: "El daño de los días presos",
        parrafos: [
          "Quedaba el monto. El Estado reclamaba que ¢15 millones era una suma desproporcionada y que el daño no se había probado. La Sala describió en qué consiste el daño:",
          "Y recordó que esta clase de daño no necesita prueba:",
          "A eso sumó la frustración de verse señalado por un contubernio con los asaltantes, en perjuicio de la agencia que gerenciaba, en un cargo donde la confianza lo es todo. Confirmó el monto por razonable y rechazó el recurso, con las costas a cargo del Estado."
        ],
        literales: [
          [
            15,
            0,
            0
          ],
          [
            16,
            0,
            1
          ]
        ]
      },
      {
        id: "recepcion",
        titulo: "La recepción",
        parrafos: [
          "La sentencia se instaló de inmediato. En 2009 la Sala Primera la usó para separar la responsabilidad civil del juez de la responsabilidad patrimonial del Estado. En 2011 el Tribunal de Casación de lo Contencioso Administrativo reconoció por escrito que con ella «operó un cambio en la línea jurisprudencial» sobre el plazo, y rechazó que ese cambio lesionara la confianza legítima de quien reclamaba.",
          "El otro frente es el de los órganos auxiliares. La Sala Primera la invocó en 2017, en el caso de unas declaraciones del Fiscal General, y el Tribunal de Casación anuló en 2022 un fallo que había dejado al Ministerio Público fuera del régimen de la Ley General de la Administración Pública. En 2025 el Tribunal Contencioso Administrativo la sigue citando para decir que cualquier resolución, de cualquier jurisdicción, puede generar el deber de reparar."
        ],
        visual: "recepcion"
      },
      {
        id: "impacto",
        titulo: "Su impacto",
        parrafos: [
          "Hemos encontrado su cita en el texto de al menos 255 resoluciones, dictadas entre 2009 y 2026. La jurisdicción contencioso-administrativa reúne 212 —el Tribunal Contencioso Administrativo, con la Sección Sexta a la cabeza, y su Tribunal de Casación—, y la Sala Primera la cita en 39. También aparece en la Sala Tercera, en la Sala Constitucional y en un tribunal de trabajo.",
          "Su uso no ha bajado en quince años: 2024 es el año de mayor cita, con 28 resoluciones, y desde 2020 se acumulan 119, casi la mitad de todas.",
          "Fuera de los tribunales la citan catorce pronunciamientos, y doce son actas del Consejo Superior del Poder Judicial, que es el órgano que resuelve en sede administrativa los reclamos contra el Estado por error judicial: la sentencia se convirtió en el criterio con que el propio Poder Judicial mide su responsabilidad. La Procuraduría la usó en un informe a la Sala Constitucional y la Corte Plena la citó en 2013.",
          "En la doctrina la citan la Revista Judicial 138, de la Escuela Judicial, que la ubica entre los enfoques posibles sobre la responsabilidad del Estado juez, y una tesis de la Universidad de Costa Rica de 2024."
        ],
        visual: "citas"
      }
    ],
    visuales: {
      trayectoria: [
        {
          etapa: "El asalto y la prisión",
          sede: "Cartago · 21 a 24 de febrero de 1998",
          detalle: "Dos encapuchados lo obligan a abrir la bóveda. Por contradicciones en su declaración, el Juzgado Penal ordena prisión preventiva; el Tribunal de Juicio la revoca dos días después."
        },
        {
          etapa: "El sobreseimiento",
          sede: "Juzgado Penal de Cartago · 3 de junio de 1998",
          detalle: "La Fiscalía lo pide por el inciso a) del artículo 311: el hecho no fue cometido por el imputado."
        },
        {
          etapa: "La vía administrativa",
          sede: "Consejo Superior del Poder Judicial · 2000",
          detalle: "El reclamo se presenta en julio y se rechaza en noviembre. Ese trámite interrumpió el plazo de prescripción."
        },
        {
          etapa: "Primera instancia y apelación",
          sede: "Juzgado y Tribunal Contencioso Administrativo",
          detalle: "La demanda llega en 2002. El Juzgado concede ¢9 millones de daño moral; el Tribunal los aumenta a ¢15 millones."
        },
        {
          etapa: "Casación",
          sede: "Sala Primera · 26 de setiembre de 2008",
          detalle: "Rechaza el recurso del Estado, con las costas a su cargo, y de paso cambia su propia línea sobre el plazo para reclamar.",
          final: true
        }
      ],
      comparaciones: {
        inocencia: [
          {
            titulo: "Sobreseimiento por inocencia",
            rasgo: "El hecho no se realizó o no fue cometido por la persona imputada (artículo 311, inciso a). La prisión preventiva queda sin justificación hacia atrás y el Estado indemniza.",
            enElCaso: "Es el caso de esta sentencia.",
            literal: "La comprobación de inocencia se erige como un elemento fundamental para el surgimiento del deber de reparar, en la medida en que es ésta circunstancia la que determina la existencia de una lesión antijurídica; el que se ordene una prisión preventiva contra una persona respecto de la cual existe, ex post facto, certeza que no ha cometido ningún ilícito deviene, a todas luces, en injustificada, al haberse afectado derechos de la persona cuando se puede colegir que no procedía.",
            citation: "Considerando X"
          },
          {
            titulo: "Sobreseimiento por otras causas",
            rasgo: "Prescripción de la acción penal, o falta de certeza sin posibilidad de nueva prueba (incisos d y e). Las razones que motivaron la medida siguen en pie.",
            enElCaso: "Lo que el Estado alegaba.",
            literal: "En caso contrario, es decir, cuando si bien un imputado es sobreseído o no fue condenado por motivos distintos a una demostración de su inocencia, las razones que concurrieron inicialmente para la adopción de la medida cautelar no son desvirtuadas en forma sobreviniente por el resultado del proceso, como si sucede en el anterior supuesto, al arribarse a una convicción de no culpabilidad o al demostrarse la no participación en el ilícito.",
            citation: "Considerando X"
          }
        ]
      },
      formas: {
        "tres-facetas": [
          {
            titulo: "La administración de justicia",
            texto: "El Poder Judicial como servicio público y como organización: los medios materiales y personales que hacen posible juzgar. Responde por su funcionamiento anormal, con la Ley General de la Administración Pública."
          },
          {
            titulo: "Los órganos auxiliares",
            texto: "Organismo de Investigación Judicial, Ministerio Público, Ciencias Forenses y Defensa Pública. No juzgan: instruyen e investigan. Su actividad queda bajo el mismo régimen administrativo."
          },
          {
            titulo: "La función jurisdiccional",
            texto: "Resolver las controversias y ejecutar lo resuelto. Aquí responde el Estado Juez cuando su proceder fue arbitrario, anormal o ilícito, por error judicial o por funcionamiento anormal."
          }
        ]
      },
      recepcion: [
        {
          anio: "2009",
          organo: "Sala Primera",
          texto: "La usa para separar la responsabilidad civil del juez de la responsabilidad patrimonial del Estado.",
          enlaces: [
            {
              etiqueta: "Voto 783-F-S1-2009",
              nexusId: "sen-1-0034-447118"
            }
          ]
        },
        {
          anio: "2011",
          organo: "Tribunal de Casación de lo Contencioso Administrativo",
          texto: "Reconoce que con esta sentencia «operó un cambio en la línea jurisprudencial» sobre el plazo, y rechaza que el cambio lesione la confianza legítima.",
          enlaces: [
            {
              etiqueta: "Voto 27-F-TC-2011",
              nexusId: "sen-1-0034-532545"
            }
          ]
        },
        {
          anio: "2017",
          organo: "Sala Primera",
          texto: "Precedente de la responsabilidad objetiva por la actividad de los órganos auxiliares, en el caso de unas declaraciones del Fiscal General.",
          enlaces: [
            {
              etiqueta: "Voto 451-F-S1-2017",
              nexusId: "sen-1-0034-715582"
            }
          ]
        },
        {
          anio: "2019",
          organo: "Tribunal de Casación de lo Contencioso Administrativo",
          texto: "El plazo de cuatro años del artículo 198 ya se aplica como regla asentada.",
          enlaces: [
            {
              etiqueta: "Voto 12-F-TC-2019",
              nexusId: "sen-1-1011-909434"
            }
          ]
        },
        {
          anio: "2022",
          organo: "Tribunal de Casación de lo Contencioso Administrativo",
          texto: "Anula un fallo que había dejado al Ministerio Público fuera del régimen de la Ley General de la Administración Pública.",
          enlaces: [
            {
              etiqueta: "Voto 104-F-TC-2022",
              nexusId: "sen-1-1011-1102006"
            }
          ]
        },
        {
          anio: "2025",
          organo: "Tribunal Contencioso Administrativo",
          texto: "Cualquier resolución, de cualquier jurisdicción, puede generar el deber de reparar si causa un daño antijurídico.",
          enlaces: [
            {
              etiqueta: "Voto 691-2025",
              nexusId: "sen-1-0034-1277949"
            }
          ],
          final: true
        }
      ],
      citas: {
        corte: "19 de setiembre de 2026",
        metodo: "Buscamos el número de la sentencia en todas sus formas, incluidas las que llevan ceros delante, y leímos una por una cada coincidencia para dejar solo las que citan de verdad la 654-F-S1-2008, por cualquiera de sus puntos. Las fuentes son públicas: Nexus del Poder Judicial para las resoluciones y las actas, el SINALEVI de la Procuraduría, y los buscadores de la Contraloría, del Tribunal Registral Administrativo y de la ARESEP; la doctrina, en los repositorios Kérwá de la Universidad de Costa Rica y de la ULACIT. Cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
        csv: "/datos/jurisprudencia/654-F-S1-2008-resoluciones-que-la-citan.csv"
      }
    },
    casoFactico: [
      "El gerente de una agencia bancaria de Cartago fue asaltado en febrero de 1998 y obligado a abrir la bóveda. Por las contradicciones de su declaración estuvo preso tres días, hasta que el Tribunal de Juicio revocó la prisión preventiva; meses después lo sobreseyeron porque no se le pudo vincular con el hecho.",
      "Demandó al Estado en 2002. El Juzgado le concedió ¢9 millones de daño moral y el Tribunal los subió a ¢15 millones. La Sala Primera rechazó el recurso del Estado y confirmó la condena."
    ],
    nexusId: "sen-1-0004-764867",
    precedentes: [
      {
        organo: "Sala Constitucional",
        numero: "Voto 5981-1995",
        fecha: "07-11-1995",
        nexusId: "sen-1-0007-81793",
        nota: "Fundamento constitucional de la responsabilidad objetiva del Poder Judicial, que la sentencia transcribe."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 1011-F-2006",
        fecha: "21-12-2006",
        nexusId: "sen-1-0034-370378",
        nota: "La responsabilidad del Estado Juez no depende de que una ley la desarrolle."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 584-F-2005",
        fecha: "11-08-2005",
        nexusId: "sen-1-0034-315154",
        nota: "La evolución de la responsabilidad de la Administración, que esta sentencia lleva al Poder Judicial."
      }
    ],
    citadaPor: [
      {
        organo: "Sala Primera",
        numero: "Voto 783-F-S1-2009",
        fecha: "28-07-2009",
        nexusId: "sen-1-0034-447118",
        nota: "Separa la responsabilidad civil del juez de la del Estado."
      },
      {
        organo: "Tribunal de Casación de lo Contencioso Administrativo",
        numero: "Voto 27-F-TC-2011",
        fecha: "24-11-2011",
        nexusId: "sen-1-0034-532545",
        nota: "«Operó un cambio en la línea jurisprudencial» sobre el plazo."
      },
      {
        organo: "Sala Primera",
        numero: "Voto 451-F-S1-2017",
        fecha: "04-05-2017",
        nexusId: "sen-1-0034-715582",
        nota: "Responsabilidad objetiva por la actividad de los órganos auxiliares."
      },
      {
        organo: "Tribunal de Casación de lo Contencioso Administrativo",
        numero: "Voto 12-F-TC-2019",
        fecha: "06-02-2019",
        nexusId: "sen-1-1011-909434",
        nota: "Aplica el plazo cuatrienal como regla asentada."
      },
      {
        organo: "Tribunal de Casación de lo Contencioso Administrativo",
        numero: "Voto 104-F-TC-2022",
        fecha: "29-04-2022",
        nexusId: "sen-1-1011-1102006",
        nota: "El Ministerio Público queda dentro del régimen de la LGAP."
      },
      {
        organo: "Tribunal Contencioso Administrativo",
        numero: "Voto 691-2025",
        fecha: "31-01-2025",
        nexusId: "sen-1-0034-1277949",
        nota: "Alcanza a cualquier resolución de cualquier jurisdicción."
      }
    ],
    normativa: [
      {
        nombre: "Constitución Política de la República de Costa Rica",
        detalle: "7 de noviembre de 1949",
        articulos: "Arts. 9, 11, 33, 41, 49, 153, 154 y 166",
        scijId: 871
      },
      {
        nombre: "Ley General de la Administración Pública",
        detalle: "Ley 6227 · 2 de mayo de 1978",
        articulos: "Arts. 9, 190, 198 y 199",
        scijId: 13231
      },
      {
        nombre: "Código Procesal Penal",
        detalle: "Ley 7594 · 10 de abril de 1996",
        articulos: "Arts. 271 y 311",
        scijId: 1224
      }
    ],
    redactor: "Magistrado Óscar Eduardo González Camacho",
    redactorTextual: "Redacta el Magistrado González Camacho",
    fuenteUrl: "https://nexuspj.poder-judicial.go.cr/document/sen-1-0004-764867",
    fuenteNombre: "NEXUS-PJ — Poder Judicial",
    areas: ["litigio-contencioso-administrativo", "casacion-sala-primera", "derecho-administrativo"],
    temas: ["Responsabilidad Patrimonial", "Derecho Administrativo", "LGAP", "Derecho Público"],
    metaDescription:
      "¿Responde el Estado por la prisión preventiva de un inocente? La Sala Primera fijó el plazo de cuatro años y exigió inocencia demostrada. Voto 654-F-S1-2008.",
    seoTitle: "Indemnización por prisión preventiva · Voto 654-F-S1-2008 · Óscar González Camacho",
  }
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

/** Las sentencias en orden cronológico, como se lee una línea
 *  jurisprudencial: el folio de la portada abre con la más antigua. */
/** Las sentencias ligadas a un área de práctica, de la más nueva a la más
 *  antigua, para el bloque de jurisprudencia de `/areas/<slug>`. */
export function getSentenciasPorArea(area: string): SentenciaDestacada[] {
  return SENTENCIAS_DESTACADAS.filter((s) => s.areas?.includes(area)).sort((a, b) =>
    b.fechaISO.localeCompare(a.fechaISO),
  );
}

/** Las sentencias que tratan alguno de estos temas, para el pie de un
 *  artículo. La comparación ignora tildes y mayúsculas. */
const sinTilde = (x: string) => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export function getSentenciasPorTemas(tags: string[], tope = 2): SentenciaDestacada[] {
  const t = tags.map(sinTilde);
  return SENTENCIAS_DESTACADAS.filter((s) => s.temas?.some((tema) => t.includes(sinTilde(tema))))
    .sort((a, b) => b.fechaISO.localeCompare(a.fechaISO))
    .slice(0, tope);
}

export function getAllSentencias(): SentenciaDestacada[] {
  return [...SENTENCIAS_DESTACADAS].sort((a, b) => a.fechaISO.localeCompare(b.fechaISO));
}
