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

/** Enlace a una fuente oficial: un voto en Nexus o una norma en SINALEVI. */
export type EnlaceFuente = { etiqueta: string; nexusId?: string; scijId?: number };

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
        "La Sala Primera la reiteró en 2005, la Sala Segunda la llevó a los procesos laborales y la Sala Constitucional avaló esa extensión en 2012; en lo contencioso-administrativo, el Código de 2006 hizo de la actualización un deber de toda condena dineraria. Hoy la citan **al menos 132 resoluciones de 16 despachos**. Su regla práctica sigue intacta: **la indexación se pide desde la demanda**.",
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
          "Más de veinte años después, la sentencia sigue en uso. Hemos encontrado su cita en el texto de al menos 132 resoluciones de 16 despachos, dictadas entre 2005 y 2026: el Tribunal Contencioso Administrativo, las Salas Primera, Segunda y Constitucional, y tribunales civiles, de trabajo, de familia y agrarios.",
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
          "Más de veinte años después, la sentencia sigue en pleno uso. Hemos encontrado su cita en el texto de al menos 477 resoluciones, dictadas entre 2005 y 2026. La mayor parte proviene del Tribunal Contencioso Administrativo; también la citan las Salas Primera, Segunda y Tercera, la Sala Constitucional y los tribunales penales cuando resuelven la acción civil contra el Estado.",
          "Su uso crece. Los dos años con más citas son 2024 y 2025, con 59 y 53 resoluciones, y en lo que va de 2026 ya suman 13. Lo que se cita es su andamiaje: la definición de anormalidad, la inactividad material, la antijuridicidad de base, la causalidad adecuada y la eximente parcial."
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
        metodo: "Resoluciones judiciales cuyo texto cita la 584-F-2005, por cualquiera de sus puntos, leídas una por una. Recuento de Corporación GC sobre jurisprudencia publicada: cada resolución cuenta una vez, se excluyen las del mismo expediente y las secciones de un mismo tribunal cuentan como un solo despacho.",
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
    metaDescription: "Resolución N° 584-F-2005 de la Sala Primera de la Corte Suprema de Justicia, redactada por el Magistrado Óscar Eduardo González Camacho. Ordenó el régimen de responsabilidad objetiva de la Administración, definió el funcionamiento anormal y reconoció la responsabilidad del Estado por inactividad, con la culpa de la víctima como eximente parcial."
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
      impacto: "La reforma del CPCA, vigente desde 2008, ya recogía esa solución para los procedimientos nuevos, y lo que hoy se cita son sus reglas de funcionamiento. **Al menos 158 resoluciones** la citan. En 2016 la Sala Primera le fijó un límite: **dictado el acto final, la caducidad ya no procede**."
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
          "Hemos encontrado su cita en el texto de al menos 158 resoluciones, dictadas entre 2011 y 2026. La mayor parte proviene del Tribunal Contencioso Administrativo y del Tribunal de Casación de lo Contencioso Administrativo; también la citan la Sala Primera, la Sala Segunda, el Tribunal Agrario y la Sala Constitucional.",
          "Su uso alcanzó el máximo en 2015, con 27 resoluciones, y se mantiene: 11 en 2023, 8 en 2024 y 10 en 2025. La reforma del CPCA había resuelto ya la pregunta principal para los procedimientos iniciados después de 2008. Lo que se sigue citando son sus reglas de funcionamiento: los efectos de pleno derecho, la conservación de la competencia, la distinción con los plazos ordenatorios y el límite del acto final."
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
        metodo: "Resoluciones judiciales cuyo texto cita la 34-F-S1-2011, por cualquiera de sus puntos, leídas una por una. Recuento de Corporación GC sobre jurisprudencia publicada: cada resolución cuenta una vez, se excluyen las del mismo expediente y los órganos administrativos, y las secciones de un mismo tribunal cuentan como un solo despacho.",
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
    metaDescription: "Resolución N° 34-F-S1-2011 de la Sala Primera de la Corte Suprema de Justicia, redactada por el Magistrado Óscar Eduardo González Camacho. Extendió la caducidad del artículo 340 de la LGAP a los procedimientos administrativos iniciados de oficio, incluidos los sancionatorios, y fijó sus efectos."
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
      impacto: "**Al menos 270 resoluciones** la citan, cerca de la mitad en litigios ajenos a la banca. Desde 2022 la Sala Primera usa el mismo marco para liberar al banco cuando el cliente **entregó sus claves a un estafador**, y en 2026 la **Ley 10889** escribió en el artículo 35 de la Ley del Consumidor la responsabilidad objetiva de las entidades financieras por la sustracción de fondos."
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
          "Hemos encontrado su cita en el texto de al menos 270 resoluciones, dictadas entre 2009 y 2026. La mayoría proviene del Tribunal Contencioso Administrativo, que conoce las demandas contra los bancos públicos, y de la Sala Primera, con 98 resoluciones. También la citan el Tribunal de Casación de lo Contencioso Administrativo, tribunales civiles y penales, la Sala Segunda y la Sala Constitucional.",
          "Cerca de la mitad resuelve demandas contra bancos y otras entidades financieras. El resto la invoca como doctrina general de la responsabilidad objetiva. El pasaje sobre el riesgo anormal aparece en el texto de más de un centenar de resoluciones, y el de la transferencia patrimonial automática, en más de un tercio.",
          "Su uso tuvo dos momentos. Entre 2010 y 2012 la citaron 77 resoluciones. Desde 2022 volvió a crecer: 98 resoluciones entre 2022 y 2025, con 31 en 2024."
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
        metodo: "Resoluciones judiciales cuyo texto cita la 300-F-S1-2009, por cualquiera de sus puntos, leídas una por una. Recuento de Corporación GC sobre jurisprudencia publicada: cada resolución cuenta una vez, se excluyen las del mismo expediente y los órganos administrativos, y las secciones de un mismo tribunal cuentan como un solo despacho.",
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
    metaDescription: "Resolución N° 300-F-S1-2009 de la Sala Primera de la Corte Suprema de Justicia, redactada por el Magistrado Óscar Eduardo González Camacho. Aplicó la responsabilidad objetiva de la Ley del Consumidor al fraude en la banca por internet: el banco responde por el riesgo del servicio, incluida la identificación del cliente, salvo causa eximente probada."
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

export function getAllSentencias(): SentenciaDestacada[] {
  return SENTENCIAS_DESTACADAS;
}
