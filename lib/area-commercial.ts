export type CommercialLanding = {
  hookHeadline: string;
  hookSubtext: string;
  /** Título de la sección de escenarios. OBLIGATORIO: cada área debe usar el
      suyo, ajustado a su materia. Así se evita cualquier título genérico
      hardcodeado que quede mal en otra área (el build falla si falta). */
  scenariosTitle: string;
  triggerScenarios: string[];
  services: { title: string; description: string }[];
  whatsappMessage: string;
  commercialFaq: { question: string; answer: string }[];
  relatedArticleSlug?: string;
  relatedArticleLabel?: string;
};

export const AREA_COMMERCIAL: Record<string, CommercialLanding> = {
  "medidas-cautelares": {
    hookHeadline: "¿Necesita suspender un acto administrativo urgente?",
    hookSubtext:
      "Las medidas cautelares contencioso-administrativas pueden detener una sanción, ejecución o procedimiento en cuestión de horas. Acompañamos a personas y empresas que enfrentan amenazas administrativas inminentes contra su patrimonio, su actividad o sus derechos.",
    scenariosTitle: "¿Cuándo aplica una medida cautelar?",
    triggerScenarios: [
      "El Estado le impuso una sanción que está por ejecutarse",
      "Una resolución municipal ordena demoler su construcción",
      "La Administración revocó su concesión y se la van a retirar",
      "Una entidad pública le canceló un permiso o licencia",
      "Le notificaron una orden de cierre de establecimiento",
      "La CGR ordenó suspender un procedimiento contractual en curso",
      "Una resolución compromete su patrimonio o actividad económica de forma inminente",
    ],
    services: [
      {
        title: "Análisis técnico inmediato",
        description:
          "Evaluamos el caso en 24–48 horas para determinar la viabilidad de la medida cautelar, el tipo procedente (provisionalísima, ante causam o coetánea) y la estrategia probatoria.",
      },
      {
        title: "Redacción y presentación de la solicitud",
        description:
          "Preparamos la solicitud cautelar con la fundamentación de los presupuestos del CPCA (periculum in mora y fumus boni iuris) y la prueba que el juez necesita para resolver inmediatamente.",
      },
      {
        title: "Medidas provisionalísimas en urgencia extrema",
        description:
          "Cuando la dilación tornaría irreparable el daño, solicitamos provisionalísimas (art. 21 CPCA) que se dictan sin audiencia previa, en cuestión de horas.",
      },
      {
        title: "Audiencia oral ante el juez tramitador",
        description:
          "Asumimos la representación en la audiencia oral del CPCA donde se decide el mantenimiento, modificación o revocatoria de la medida.",
      },
      {
        title: "Defensa frente a recursos de la Administración",
        description:
          "Si la Administración recurre la medida concedida, sostenemos la defensa en segunda instancia hasta la firmeza del pronunciamiento cautelar.",
      },
      {
        title: "Coordinación con la demanda principal",
        description:
          "Cuando la cautelar se solicita ante causam, coordinamos su otorgamiento con la presentación oportuna de la demanda dentro del plazo fijado por el tribunal.",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría urgente sobre una medida cautelar contra el Estado. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cuánto tarda en resolverse una medida cautelar?",
        answer:
          "Las medidas provisionalísimas (art. 21 CPCA) pueden dictarse en cuestión de horas, sin audiencia previa a la parte contraria. Las cautelares ordinarias requieren audiencia oral, generalmente dentro de los días siguientes a la solicitud. La rapidez efectiva depende de la urgencia demostrada y del Tribunal de turno.",
      },
      {
        question: "¿Necesito tener la demanda lista para solicitar la medida?",
        answer:
          "No. El CPCA permite solicitar medidas cautelares ante causam, antes de presentar la demanda principal. Si el juez la concede, fija un plazo para interponer la demanda dentro del cual la cautelar se mantiene. En urgencia extrema, puede solicitarse directamente una provisionalísima ante causam que se dicta de forma inmediata.",
      },
      {
        question: "¿Qué pasa si la medida cautelar es rechazada?",
        answer:
          "Procede recurso de apelación ante el órgano superior dentro de los plazos del CPCA. El rechazo cautelar no afecta el fondo del proceso principal: la demanda contencioso-administrativa puede continuar su trámite. En algunos casos también es posible plantear una nueva solicitud cautelar con presupuestos diferentes.",
      },
      {
        question: "¿Cómo se demuestra la urgencia para una provisionalísima?",
        answer:
          "Debe acreditarse al juez que el daño es inminente, cierto y verificable, y que cualquier dilación lo haría irreparable. La calidad técnica de la solicitud es determinante: una provisionalísima mal planteada se rechaza de plano y puede comprometer toda la estrategia cautelar posterior.",
      },
    ],
    relatedArticleSlug: "medidas-cautelares-contra-el-estado-costa-rica",
    relatedArticleLabel:
      "Lectura complementaria: ¿Cómo proteger sus derechos mientras dura el proceso contra el Estado?",
  },

  "zona-maritimo-terrestre": {
    hookHeadline: "¿Recibió notificación de demolición o vence su concesión?",
    hookSubtext:
      "La zona marítimo terrestre es patrimonio nacional inalienable e imprescriptible (art. 1, Ley N.° 6043), administrada por la municipalidad respectiva. Los plazos para defender una concesión, oponerse a una demolición o impugnar una resolución municipal son cortos. Acompañamos a concesionarios y propietarios costeros en Quepos, Tamarindo, Sámara, Limón y todo el litoral costarricense.",
    scenariosTitle: "¿Cuándo necesita defender su concesión?",
    triggerScenarios: [
      "Recibió una notificación de demolición sobre su construcción costera",
      "Su concesión sobre la zona restringida está próxima a vencer o ya venció",
      "La municipalidad inició un proceso de extinción o cancelación de su concesión",
      "Ocupantes ilegales invadieron la zona objeto de su concesión",
      "El plan regulador costero modificó las condiciones de uso de su parcela",
      "Va a adquirir una propiedad costera y necesita verificar si es propiedad inscrita o concesión",
      "Le rechazaron una solicitud de concesión nueva, prórroga o traspaso",
    ],
    services: [
      {
        title: "Análisis técnico de la concesión y el inmueble",
        description:
          "Revisamos el estado registral, la vigencia de la concesión, los gravámenes, los pagos de canon y la conformidad con el plan regulador costero aplicable. Distinguimos entre propiedad lícitamente inscrita (excluida de la ZMT por el art. 6 Ley N.° 6043) y concesión sobre zona restringida.",
      },
      {
        title: "Defensa contra notificaciones de demolición",
        description:
          "Asumimos los recursos administrativos del Código Municipal (revocatoria y apelación, plazo de cinco días hábiles) y la impugnación judicial cuando una municipalidad ordena demoler una construcción en zona restringida.",
      },
      {
        title: "Trámite, prórroga y traspaso de concesiones",
        description:
          "Gestionamos solicitudes de concesión nueva (plazo legal de cinco a veinte años, art. 48), prórrogas dentro de los tres meses siguientes al aviso municipal (art. 50) y traspasos, que requieren autorización expresa de la municipalidad y del ICT o el ITCO según corresponda (art. 45 Ley N.° 6043).",
      },
      {
        title: "Impugnación de extinción o cancelación",
        description:
          "Recurrimos en sede administrativa y contencioso-administrativa las resoluciones municipales que extinguen (art. 52) o cancelan concesiones (art. 53 Ley N.° 6043, por falta de pago, incumplimiento o violación de la ley). La cancelación exige debido proceso conforme al ordenamiento administrativo.",
      },
      {
        title: "Recursos contra planes reguladores costeros",
        description:
          "Impugnamos planes reguladores y modificaciones que afectan derechos consolidados de concesionarios, ante el Tribunal Contencioso Administrativo o por vía de inconstitucionalidad ante la Sala Constitucional cuando corresponda.",
      },
      {
        title: "Defensa frente a ocupaciones ilegales",
        description:
          "Promovemos los procesos administrativos y judiciales para recuperar la zona restringida concesionada cuando ha sido invadida o ocupada ilegalmente por terceros.",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre un caso de Zona Marítimo Terrestre en Costa Rica. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cuánto tiempo dura una concesión en zona marítimo terrestre?",
        answer:
          "Las concesiones en zona restringida se otorgan por un plazo no menor de cinco ni mayor de veinte años, fijado por la municipalidad junto con el canon (art. 48 Ley N.° 6043). Pueden prorrogarse sucesivamente al vencimiento, por plazos dentro del mismo máximo legal (art. 50), siempre que el concesionario lo solicite dentro de los tres meses siguientes al aviso municipal, esté al día en el canon y cumpla las obligaciones de ley y del contrato. La denegación de la prórroga procede por las causales del artículo 51: utilidad pública, conveniencia general, ubicación de la parcela en zona pública, necesidad para planes urbanos o turísticos aprobados, o incumplimiento del concesionario.",
      },
      {
        question: "¿Puedo construir en zona restringida si tengo concesión?",
        answer:
          "Solo si la concesión y el plan regulador costero aplicable lo autorizan, y con el permiso municipal correspondiente. La construcción debe ajustarse al uso, retiros y densidades del plan regulador, y respetar la zona pública —los primeros cincuenta metros desde la pleamar ordinaria—, dedicada al uso público y al libre tránsito; salvo las excepciones establecidas por la ley, no puede ser ocupada bajo ningún título (arts. 10 y 20 Ley N.° 6043). Los manglares y esteros, sea cual fuere su extensión, también son zona pública (art. 11).",
      },
      {
        question: "¿Qué hago si me notifican una orden de demolición?",
        answer:
          "Tiene plazos cortos para impugnarla. Contra los actos de funcionarios municipales proceden los recursos administrativos del Código Municipal (revocatoria y apelación, dentro de cinco días hábiles desde la notificación). Si se trata de un acuerdo del Concejo Municipal, procede además apelación ante el Tribunal Contencioso Administrativo en vía jerárquica impropia (art. 173 Constitución Política). En sede contencioso-administrativa puede solicitar medidas cautelares (arts. 19-30 CPCA) para suspender la ejecución mientras se resuelve el fondo.",
      },
      {
        question: "¿Puedo vender o traspasar mi concesión costera?",
        answer:
          "Las concesiones no se transmiten libremente. Es prohibido cederlas, comprometerlas, traspasarlas o gravarlas, total o parcialmente, sin la autorización expresa de la municipalidad respectiva y del Instituto Costarricense de Turismo o del Instituto de Tierras y Colonización, según corresponda (art. 45 Ley N.° 6043). Si va a adquirir un inmueble costero, distinga si se trata de propiedad lícitamente inscrita —excluida de la ZMT por el artículo 6, que solo cubre las propiedades inscritas con sujeción a la ley— o de una concesión sobre zona restringida; en este último caso, verifique vigencia, canon al día y ausencia de procesos de extinción o cancelación.",
      },
      {
        question: "¿Qué diferencia hay entre zona pública y zona restringida?",
        answer:
          "La zona marítimo terrestre tiene doscientos metros de ancho, medidos horizontalmente a partir de la línea de la pleamar ordinaria (art. 9 Ley N.° 6043). Los primeros cincuenta metros son zona pública, dedicada al uso público y al libre tránsito; salvo excepciones legales, no puede ser ocupada bajo ningún título (arts. 10 y 20). Los ciento cincuenta metros restantes son zona restringida, donde sí pueden otorgarse concesiones bajo las condiciones del plan regulador costero (arts. 10 y 39). Los manglares y esteros también son zona pública sin importar su extensión (art. 11).",
      },
      {
        question: "¿Pueden los extranjeros ser concesionarios de zona marítimo terrestre?",
        answer:
          "No se otorgarán concesiones a extranjeros que no hayan residido en el país durante al menos cinco años, ni a sociedades anónimas con acciones al portador o constituidas en el extranjero (art. 47 Ley N.° 6043). Estas restricciones aplican al otorgamiento; las concesiones existentes que cumplían los requisitos al momento de su adjudicación permanecen vigentes según las reglas aplicables a su prórroga o traspaso.",
      },
    ],
  },

  "litigio-contencioso-administrativo": {
    hookHeadline: "¿Necesita demandar al Estado o un ente público?",
    hookSubtext:
      "Corporación GC concentra su práctica en el contencioso-administrativo costarricense. El bufete fue fundado y es dirigido por el Dr. Óscar Eduardo González Camacho, ex-Magistrado de la Sala Primera de la Corte Suprema (2002-2014) y co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508). Junto a él, un equipo de cinco abogados formados en Derecho Público bajo su supervisión directa asume demandas de nulidad, plena jurisdicción, responsabilidad patrimonial y recursos de casación ante la Sala Primera.",
    scenariosTitle: "¿Cuándo demandar al Estado?",
    triggerScenarios: [
      "Una entidad pública le impuso una sanción administrativa que considera ilegal",
      "La Administración no le respondió o le rechazó una solicitud que afecta sus derechos",
      "Sufrió un daño patrimonial causado por la actuación u omisión del Estado",
      "Le revocaron una concesión, permiso o autorización sin debido proceso",
      "Una resolución firme le perjudica y necesita anularla",
      "Una entidad pública incumple un contrato administrativo o se niega a pagar",
      "Tiene una sentencia favorable contra el Estado y necesita ejecutarla",
    ],
    services: [
      {
        title: "Análisis técnico del caso y vías procesales",
        description:
          "Evaluamos la viabilidad de la pretensión, las vías procesales aplicables (anulatoria, plena jurisdicción, responsabilidad patrimonial), los plazos del CPCA y la estrategia probatoria desde el inicio del expediente.",
      },
      {
        title: "Redacción y presentación de la demanda",
        description:
          "Preparamos la demanda con la fundamentación de hechos, derecho y pretensiones conforme al artículo 42 del CPCA. Asumimos la representación ante el Tribunal Contencioso Administrativo en todas las etapas del proceso oral.",
      },
      {
        title: "Audiencia preliminar y juicio oral",
        description:
          "Asumimos la representación en la audiencia preliminar (donde se fijan los hechos controvertidos y se admite la prueba) y en la audiencia complementaria del juicio oral, donde se evacúa la prueba y se presentan los alegatos.",
      },
      {
        title: "Medidas cautelares durante el proceso",
        description:
          "Cuando el caso lo requiere, solicitamos medidas cautelares conforme a los artículos 19-30 del CPCA: suspensión de actos administrativos, medidas de hacer o no hacer, provisionalísimas en urgencia extrema.",
      },
      {
        title: "Recurso de casación ante la Sala Primera",
        description:
          "Asumimos la impugnación de sentencias del TCA mediante recurso de casación regulado en los artículos 134 a 148 del CPCA. Combinamos la trayectoria del Dr. González (Magistrado de la Sala Primera durante doce años, 2002-2014) con la práctica regular del equipo en la jurisdicción casacional.",
      },
      {
        title: "Ejecución de sentencias contra el Estado",
        description:
          "Llevamos los procesos de ejecución cuando la sentencia favorable no se cumple voluntariamente, incluida la cuantificación judicial de daños y perjuicios y la coerción administrativa correspondiente.",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre una posible demanda contra el Estado o un ente público en Costa Rica. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Qué es el contencioso-administrativo y a quién puede demandarse?",
        answer:
          "Es la jurisdicción especializada del Poder Judicial cuyo objeto es tutelar las situaciones jurídicas de toda persona y garantizar la legalidad de cualquier conducta de la Administración Pública sujeta al Derecho administrativo (art. 1 CPCA, Ley N.° 8508). Permite demandar al Estado (Gobierno Central, ministerios), instituciones autónomas (CCSS, ICE, INVU, AyA, IMAS), municipalidades, entes públicos (universidades estatales, ARESEP, SUTEL, CGR) y empresas públicas. El principio de universalidad del control (art. 49 Constitución Política, reformado en 1963) garantiza que toda conducta sujeta al Derecho Administrativo puede ser sometida al escrutinio judicial.",
      },
      {
        question: "¿Cuál es el plazo para demandar al Estado?",
        answer:
          "El artículo 39 del CPCA establece un plazo máximo de un año para incoar el proceso. Como regla general se cuenta desde el día siguiente a la notificación del acto. Para actuaciones materiales se cuenta desde la cesación de sus efectos. Cuando la conducta produce efectos continuados, el plazo no comienza a correr hasta que esos efectos cesen — distinción a menudo pasada por alto que puede mantener viva una causa que parecía perdida.",
      },
      {
        question: "¿Es necesario agotar la vía administrativa antes de demandar?",
        answer:
          "En la mayoría de los casos no. El artículo 31 del CPCA establece que el agotamiento de la vía administrativa es facultativo, salvo lo dispuesto en los artículos 173 y 182 de la Constitución Política. Las excepciones principales en la práctica son la contratación pública (Ley N.° 9986) y los casos derivados de los artículos constitucionales mencionados, que requieren un análisis caso por caso.",
      },
      {
        question: "¿Qué pretensiones puedo formular en la demanda?",
        answer:
          "El artículo 42 del CPCA establece un catálogo amplio: declarar la disconformidad de la conducta administrativa con el ordenamiento jurídico, anular total o parcialmente el acto, reconocer o restablecer derechos, condenar a la Administración a una prestación específica (de hacer, no hacer o dar) e indemnizar daños y perjuicios. El proceso permite la reparación integral, no solo la eliminación del acto ilegal.",
      },
      {
        question: "¿Cuánto puede durar un proceso contencioso-administrativo?",
        answer:
          "Un caso ordinario puede durar entre dos y cinco años desde la presentación hasta la sentencia firme, dependiendo de la complejidad, el volumen de prueba y la carga del Tribunal. Las medidas cautelares del CPCA (arts. 19-30) permiten proteger los derechos del administrado durante todo el proceso, incluyendo provisionalísimas que se resuelven en horas en casos de urgencia extrema.",
      },
      {
        question: "¿Procede recurso contra la sentencia del Tribunal Contencioso?",
        answer:
          "Sí. La sentencia admite recurso de casación ante la Sala Primera de la Corte Suprema de Justicia, regulado en los artículos 134 a 148 del CPCA. Es un recurso de técnica rigurosa: requiere identificar con precisión el motivo invocado (procesal o sustantivo, arts. 137-138), la norma infringida y la incidencia en la parte dispositiva. Los defectos de técnica casacional conducen a la inadmisibilidad del recurso.",
      },
    ],
    relatedArticleSlug: "como-demandar-al-estado-costa-rica",
    relatedArticleLabel: "Lectura complementaria: ¿Cómo demandar al Estado en Costa Rica?",
  },

  "casacion-sala-primera": {
    hookHeadline: "¿Una sentencia del Tribunal Contencioso le fue adversa y es contraria a derecho?",
    hookSubtext:
      "La casación no es una segunda instancia y no se parece a una apelación ni a una revocatoria, aunque muchos litigantes lo asumen así —y por eso fracasan—. Es un recurso extraordinario y formalista, de técnica propia: la gran mayoría de las casaciones se rechazan de plano (art. 140 CPCA), porque el recurso está diseñado para no admitir las que no cumplen una rigurosa exigencia técnico-argumentativa. Prepararla bien obliga a una subsunción fáctico-jurídica de todo el expediente y a un análisis crítico de la sentencia con métodos específicos. Nuestro director fue Magistrado de la Sala Primera de la Corte Suprema y co-redactor del CPCA: domina la técnica casacional como pocos en el país.",
    scenariosTitle: "¿Cuándo procede recurrir en casación?",
    triggerScenarios: [
      "Perdió en el Tribunal Contencioso y considera que la sentencia es contraria a derecho",
      "El Tribunal valoró indebidamente la prueba o ignoró prueba decisiva de su caso",
      "La sentencia carece de motivación o no determina con claridad los hechos probados",
      "El Tribunal aplicó o interpretó mal una norma, o dejó de aplicar la que correspondía",
      "Le causaron indefensión o hubo defectos en el emplazamiento durante el proceso",
      "La sentencia viola principios constitucionales como razonabilidad, proporcionalidad o igualdad",
      "Resultó victorioso y la contraparte interpuso casación: necesita defender la sentencia",
    ],
    services: [
      {
        title: "Análisis de viabilidad y de competencia",
        description:
          "Determinamos si la resolución admite casación —solo proceden las sentencias y autos con carácter de sentencia con cosa juzgada material que sean contrarios al ordenamiento (art. 134 CPCA)— y ante quién corresponde: la Sala Primera (Poder Ejecutivo, ministerios, instituciones descentralizadas, reglamentos y materia tributaria; art. 135) o el Tribunal de Casación (colegios profesionales, entes públicos no estatales y sanciones disciplinarias; art. 136).",
      },
      {
        title: "Subsunción fáctico-jurídica del expediente completo",
        description:
          "Revisamos la totalidad del expediente y confrontamos los hechos acreditados con la sentencia, para aislar el vicio exacto y su incidencia en la parte dispositiva. Este trabajo de fondo —no una simple inconformidad con el fallo— es lo que separa un recurso admisible de uno rechazado de plano.",
      },
      {
        title: "Redacción con técnica casacional",
        description:
          "Formulamos los motivos de forma clara y precisa, distinguiendo entre violación de normas procesales (art. 137) y sustantivas (art. 138), con la fundamentación fáctica y jurídica que exige el art. 139. La precisión técnica es decisiva: el recurso se rechaza de plano si carece de fundamentación o si el Tribunal deduce su improcedencia (art. 140).",
      },
      {
        title: "Interposición en plazo y trámite",
        description:
          "Interponemos el recurso dentro de los quince días hábiles siguientes a la notificación de la resolución a todas las partes (art. 139.1), atendemos cualquier prevención de subsanación (art. 141) y, cuando es útil, ampliamos los motivos en el plazo del art. 143.",
      },
      {
        title: "Representación en la audiencia oral",
        description:
          "Asumimos la exposición de los motivos y la defensa del recurso en la audiencia oral de casación (art. 142), así como las conclusiones ante la Sala Primera o el Tribunal de Casación.",
      },
      {
        title: "Defensa de la sentencia favorable",
        description:
          "Cuando es la contraparte quien recurre, defendemos la sentencia que le fue favorable y, si procede, gestionamos la ejecución provisional de lo que ya está firme (art. 146).",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre un recurso de casación contencioso-administrativo. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿La casación es como apelar la sentencia?",
        answer:
          "No, y confundirlas es el error más frecuente. La revocatoria y la apelación son recursos ordinarios que permiten revisar ampliamente lo resuelto. La casación es un recurso extraordinario y formalista: no reabre el debate del caso, sino que examina si la sentencia violó normas procesales (art. 137) o sustantivas (art. 138). Exige una técnica argumentativa rigurosa y métodos específicos de análisis; plantearla como si fuera una apelación conduce al rechazo.",
      },
      {
        question: "¿Por qué se rechazan tantas casaciones?",
        answer:
          "Porque el recurso está diseñado para filtrar. El artículo 140 del CPCA ordena rechazar de plano la casación cuando la resolución no es casable, cuando se presenta fuera de plazo, o cuando carece de fundamentación o el Tribunal deduce su improcedencia. La gran mayoría de los recursos mal planteados no supera ese filtro de admisibilidad. Por eso la preparación técnica —y no la mera inconformidad con el fallo— es lo que define el resultado.",
      },
      {
        question: "¿Cuánto tiempo tengo para presentar la casación?",
        answer:
          "Quince días hábiles, contados a partir del día hábil siguiente a la notificación de la resolución a todas las partes (art. 139.1 CPCA). Si hubo adición o aclaración, el plazo corre desde que se notifica lo resuelto sobre ella. Es un plazo fatal: una vez vencido, la sentencia queda firme.",
      },
      {
        question: "¿Toda casación la resuelve la Sala Primera?",
        answer:
          "No. El CPCA reparte la competencia según el órgano que dictó la conducta impugnada: la Sala Primera conoce los recursos contra el Poder Ejecutivo, los ministerios, las instituciones descentralizadas (incluidas las municipales), los reglamentos y la materia tributaria (art. 135); el Tribunal de Casación de lo Contencioso-Administrativo conoce los de colegios profesionales, entes públicos no estatales, empresas públicas y las sanciones disciplinarias, multas y condenas en sede administrativa (art. 136).",
      },
      {
        question: "¿Qué ocurre si la casación se acoge?",
        answer:
          "Depende del vicio. Si la sentencia se casa por una razón procesal, se anula y el proceso se reenvía al tribunal de juicio para que reponga los trámites y vuelva a fallar (art. 150.1). Si se casa por violación de normas sustantivas, la Sala Primera o el Tribunal de Casación resuelven directamente el fondo del asunto en la misma resolución (art. 150.2).",
      },
    ],
    relatedArticleSlug: "como-demandar-al-estado-costa-rica",
    relatedArticleLabel:
      "Lectura complementaria: ¿Cómo demandar al Estado en Costa Rica?",
  },

  "procedimientos-sancionatorios": {
    hookHeadline: "¿La Administración le abrió un procedimiento que puede terminar en sanción?",
    hookSubtext:
      "Su defensa empieza desde el primer día, no cuando llega la sanción. Cuando un acto puede causarle un perjuicio grave —imponerle una multa, suprimirle un derecho o, en lo disciplinario, suspenderlo o destituirlo— la Administración está obligada a seguir el procedimiento ordinario de la LGAP (arts. 308-319), cuyo eje es una comparecencia oral. Los errores de la Administración en esa tramitación pueden anular todo lo actuado por indefensión (art. 219). Una defensa técnica y oportuna define el resultado.",
    scenariosTitle: "¿Cuándo necesita defensa en un procedimiento administrativo?",
    triggerScenarios: [
      "Le notificaron la apertura de un procedimiento administrativo en su contra",
      "Enfrenta un procedimiento disciplinario que puede terminar en suspensión o destitución",
      "Le citaron a una comparecencia oral y debe presentar su prueba y su defensa",
      "Una entidad pública pretende imponerle una multa o una sanción",
      "La Administración no le dio audiencia ni acceso al expediente",
      "El órgano director le rechazó prueba o no respetó el plazo de citación",
      "Le notificaron el acto final con una sanción y necesita impugnarlo",
    ],
    services: [
      {
        title: "Análisis del expediente y de la legalidad del procedimiento",
        description:
          "Revisamos si la Administración siguió el procedimiento ordinario obligatorio cuando el acto puede causar perjuicio grave o se trata de una sanción disciplinaria de gravedad (art. 308 LGAP), y si respetó las formalidades cuya omisión causa nulidad (art. 223).",
      },
      {
        title: "Defensa en la comparecencia oral",
        description:
          "Asumimos la representación en la comparecencia oral y privada donde se admite y recibe toda la prueba (art. 309), ejerciendo los derechos de la parte: ofrecer prueba, repreguntar a testigos y peritos, y formular conclusiones (art. 317).",
      },
      {
        title: "Ofrecimiento y control de la prueba",
        description:
          "Preparamos y presentamos la prueba en tiempo —antes o durante la comparecencia (art. 312)— y exigimos que el órgano director verifique la verdad real de los hechos que sirven de motivo al acto (art. 221).",
      },
      {
        title: "Alegato de nulidades por indefensión",
        description:
          "Cuando la Administración omite la audiencia, el acceso al expediente o una formalidad sustancial, planteamos la nulidad de lo actuado: la omisión injustificada de esos trámites causa indefensión y nulidad (arts. 219 y 223).",
      },
      {
        title: "Recursos contra el acto final",
        description:
          "Interponemos los recursos de revocatoria y apelación contra el acto final dentro del plazo de tres días hábiles (arts. 345 y 346) y agotamos la vía administrativa ante el órgano superior (art. 350).",
      },
      {
        title: "Continuidad hacia la vía contencioso-administrativa",
        description:
          "Si la sanción se confirma en sede administrativa, llevamos la impugnación —y, cuando procede, la solicitud de medida cautelar para suspenderla— ante el Tribunal Contencioso Administrativo.",
      },
    ],
    whatsappMessage:
      "Hola, me abrieron un procedimiento administrativo sancionatorio y necesito asesoría para mi defensa.",
    commercialFaq: [
      {
        question: "¿Por qué me abrieron un procedimiento administrativo ordinario?",
        answer:
          "Porque la LGAP obliga a la Administración a seguir el procedimiento ordinario cuando el acto final puede causarle un perjuicio grave —imponerle obligaciones, suprimirle o denegarle derechos— o cuando hay contradicción de intereses (art. 308.1). Ese mismo procedimiento se aplica a los procedimientos disciplinarios que pueden terminar en suspensión, destitución o sanciones de similar gravedad (art. 308.2).",
      },
      {
        question: "¿Cuánto tiempo tengo para preparar mi defensa?",
        answer:
          "La citación a la comparecencia oral debe hacerse con quince días de anticipación (art. 311). Ese plazo es para que usted conozca el expediente y prepare su prueba, que debe presentarse antes o en la propia comparecencia (art. 312). Conviene usar ese tiempo con asesoría: la comparecencia es la oportunidad central de defensa.",
      },
      {
        question: "¿Qué pasa si no asisto a la comparecencia?",
        answer:
          "Su ausencia injustificada no impide que la comparecencia se realice, pero tampoco vale como aceptación de los hechos, pretensiones ni pruebas de la Administración (art. 315). Aun así, no comparecer le hace perder la oportunidad de ofrecer prueba, repreguntar y alegar (art. 317), por lo que rara vez conviene.",
      },
      {
        question: "¿Puedo anular el procedimiento si la Administración cometió errores?",
        answer:
          "Sí. Solo causa nulidad la omisión de formalidades sustanciales, es decir, aquellas cuya ausencia causa indefensión o habría cambiado la decisión final (art. 223). En particular, omitir injustificadamente la audiencia o la comparecencia causa indefensión y la nulidad de todo lo actuado después (art. 219.2).",
      },
      {
        question: "¿Puedo impugnar la sanción una vez dictada?",
        answer:
          "Sí. Contra el acto final caben los recursos ordinarios de revocatoria y apelación, que deben interponerse dentro de los tres días hábiles siguientes a su notificación (arts. 343, 345 y 346). La apelación la resuelve el órgano superior, que agota la vía administrativa (art. 350) y abre la puerta a la jurisdicción contencioso-administrativa.",
      },
    ],
    relatedArticleSlug: "como-demandar-al-estado-costa-rica",
    relatedArticleLabel:
      "Lectura complementaria: ¿Cómo demandar al Estado en Costa Rica?",
  },

  "contratacion-publica": {
    hookHeadline:
      "¿Su empresa quedó fuera de una licitación o necesita impugnar una adjudicación?",
    hookSubtext:
      "En contratación pública los plazos son cortos, corren en días hábiles y la preclusión extingue el derecho a impugnar lo que no se recurrió a tiempo. Si el cartel contiene cláusulas que lo dejan fuera, o si la adjudicación se otorgó a una oferta que no debía ganar, la ley le da recursos para reaccionar —pero hay que actuar de inmediato. Interponer el recurso de objeción suspende la recepción de ofertas (art. 96) y el de apelación suspende automáticamente los efectos de la adjudicación (art. 98). Un recurso bien fundamentado, con la prueba técnica que la ley exige, es la diferencia entre que lo admitan o lo rechacen de plano.",
    scenariosTitle: "¿Cuándo conviene impugnar en un procedimiento de contratación?",
    triggerScenarios: [
      "Su empresa presentó oferta y la adjudicación se otorgó a otro participante",
      "El cartel o pliego de condiciones contiene cláusulas que restringen indebidamente su participación",
      "Considera que la oferta ganadora no cumple los requisitos del pliego",
      "Necesita impugnar una licitación mayor ante la Contraloría General de la República",
      "Lo excluyeron del concurso por un defecto que era subsanable",
      "Le declararon desierto o infructuoso un concurso en el que participó",
      "Debe objetar un cartel antes de que venza el plazo para recibir ofertas",
    ],
    services: [
      {
        title: "Recurso de objeción al pliego de condiciones",
        description:
          "Impugnamos las cláusulas del cartel contrarias al ordenamiento, discriminatorias o que restringen la participación: ante la Contraloría General en licitación mayor (ocho días hábiles desde la publicación del pliego) o ante la Administración en licitación menor (tres días hábiles). Su interposición suspende la recepción de ofertas y el acto de apertura (arts. 95 y 96).",
      },
      {
        title: "Apelación ante la Contraloría en licitación mayor",
        description:
          "Apelamos el acto de adjudicación —o la declaratoria de desierto o infructuoso— de una licitación mayor dentro de los ocho días hábiles siguientes a su comunicación. La interposición suspende automáticamente todos los efectos del acto final recurrido (arts. 97 y 98).",
      },
      {
        title: "Revocatoria en licitación menor, reducida y subasta inversa",
        description:
          "Interponemos el recurso de revocatoria contra el acto final de la licitación menor, la subasta inversa electrónica y las nuevas adjudicaciones, dentro del plazo de cinco días hábiles, ante el órgano que dictó el acto y en única instancia (art. 99).",
      },
      {
        title: "Fundamentación técnica del recurso",
        description:
          "Redactamos el recurso con la prueba idónea y los estudios técnicos que la ley exige, indicando la infracción sustancial del ordenamiento (art. 88), para evitar el rechazo de plano por inadmisibilidad o por improcedencia manifiesta (art. 87).",
      },
      {
        title: "Control de plazos y preclusión",
        description:
          "Los plazos corren en días hábiles desde la notificación y la preclusión extingue la facultad de impugnar lo que ya se pudo recurrir (arts. 86 y 90). Vigilamos cada término para que no pierda el derecho a recurrir.",
      },
      {
        title: "Continuidad hacia la vía contencioso-administrativa",
        description:
          "La resolución que decide por el fondo el recurso de objeción o de apelación agota la vía administrativa (arts. 96 y 98). A partir de ahí llevamos la impugnación —y, cuando procede, la medida cautelar— ante la jurisdicción contencioso-administrativa.",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría para impugnar una licitación o una adjudicación en un procedimiento de contratación pública.",
    commercialFaq: [
      {
        question: "¿Cómo impugno la adjudicación de una licitación?",
        answer:
          "Depende del tipo de procedimiento. Contra el acto de adjudicación de una licitación mayor procede el recurso de apelación ante la Contraloría General de la República, dentro de los ocho días hábiles siguientes a su comunicación (art. 97). Contra el acto final de una licitación menor, de una subasta inversa electrónica o de una nueva adjudicación procede el recurso de revocatoria ante la Administración, dentro de los cinco días hábiles (art. 99). En ambos casos la interposición suspende los efectos del acto recurrido.",
      },
      {
        question: "¿Puedo impugnar el cartel antes de que se reciban las ofertas?",
        answer:
          "Sí, mediante el recurso de objeción al pliego de condiciones (arts. 95 y 96). En licitación mayor se interpone ante la Contraloría General dentro de los ocho días hábiles siguientes a la publicación del pliego; en licitación menor, ante la Administración dentro de los tres días hábiles. Interpuesto el recurso, se suspende automáticamente la etapa de recepción de ofertas y el acto de apertura, y la resolución de fondo agota la vía administrativa.",
      },
      {
        question: "¿Qué tipos de procedimiento de contratación existen?",
        answer:
          "Los procedimientos ordinarios son la licitación mayor, la licitación menor y la licitación reducida, que se determinan según el umbral del artículo 36 —según el monto y el objeto: bienes, servicios u obra— (arts. 55 a 63). Además, la ley regula procedimientos extraordinarios —el remate (art. 64) y la subasta inversa electrónica (art. 65)— y procedimientos especiales (arts. 66 a 70).",
      },
      {
        question: "¿Por qué rechazan un recurso “de plano”?",
        answer:
          "El artículo 87 ordena rechazar el recurso por inadmisible (incompetencia en razón de la materia, el tiempo, el tipo de procedimiento o la inobservancia de requisitos formales) o por improcedencia manifiesta (cuando el recurrente carece de legitimación o de mejor derecho, no fundamenta el recurso o gira sobre argumentos precluidos). Por eso el recurso debe presentarse debidamente fundamentado y con la prueba idónea (art. 88).",
      },
      {
        question: "Después de la Contraloría, ¿puedo acudir a los tribunales?",
        answer:
          "Sí. La resolución que resuelve por el fondo el recurso de objeción o de apelación da por agotada la vía administrativa (arts. 96 y 98). A partir de ese momento procede la demanda ante la jurisdicción contencioso-administrativa, donde además puede solicitarse una medida cautelar para proteger su posición mientras se resuelve el caso.",
      },
    ],
    relatedArticleSlug: "hermeneutica-ia-contratacion-publica",
    relatedArticleLabel:
      "Publicación de la firma sobre la Ley N.° 9986: inteligencia artificial en la contratación pública",
  },

  "recursos-de-amparo": {
    hookHeadline: "¿Le están vulnerando un derecho fundamental?",
    hookSubtext:
      "El amparo es la vía más rápida para frenar una violación de derechos fundamentales: no exige agotar recursos administrativos (art. 31), lo puede interponer cualquier persona (art. 33) y la Sala Constitucional lo tramita de forma privilegiada, con plazos perentorios (art. 39). Al admitirse, la aplicación del acto impugnado al recurrente queda suspendida de pleno derecho (art. 41). Pero el plazo es corto —dos meses desde que cesó la violación (art. 35)— y un recurso oscuro o mal planteado se rechaza de plano. La redacción técnica define el resultado.",
    scenariosTitle: "¿Cuándo procede un recurso de amparo?",
    triggerScenarios: [
      "Una institución pública le niega o retrasa un servicio o trámite al que tiene derecho",
      "La CCSS lo mantiene en una lista de espera que pone en riesgo su salud",
      "Presentó una gestión y la Administración no le responde (derecho de petición)",
      "Una autoridad lo perjudica con una actuación material sin acto firme ni debido proceso",
      "Un hospital privado, colegio, universidad o colegio profesional le vulnera un derecho",
      "Necesita frenar con urgencia una actuación que amenaza un derecho fundamental",
      "Le notificaron una resolución que considera inconstitucional y el plazo corre",
    ],
    services: [
      {
        title: "Amparo contra órganos y servidores públicos",
        description:
          "Interponemos el amparo contra toda acción, omisión o actuación material de la Administración que viole, amenace o restrinja un derecho fundamental, incluso cuando se funde en normas erróneamente interpretadas o indebidamente aplicadas (art. 29).",
      },
      {
        title: "Amparo por silencio o derecho de petición",
        description:
          "Cuando la Administración no resuelve su gestión y no hay plazo señalado, la violación al derecho de petición y pronta resolución se configura a los diez días hábiles (art. 32; art. 27 de la Constitución), y la Sala puede ordenarle responder.",
      },
      {
        title: "Suspensión inmediata del acto y medidas cautelares",
        description:
          "Al admitirse el amparo, la aplicación al recurrente del acto concreto impugnado se suspende de pleno derecho, sin garantía ni audiencia previa (art. 41); además solicitamos las medidas de conservación o seguridad necesarias para evitar daños mientras se resuelve.",
      },
      {
        title: "Amparo contra sujetos de derecho privado",
        description:
          "Procede también contra hospitales privados, universidades, colegios profesionales y demás sujetos en posición de poder, cuando los remedios jurisdiccionales comunes resulten claramente insuficientes o tardíos (art. 57).",
      },
      {
        title: "Redacción técnica del recurso",
        description:
          "El amparo no exige autenticación ni formalidades especiales (art. 38), pero un recurso oscuro, fuera del plazo de dos meses (art. 35) o en un supuesto de improcedencia (art. 30) se rechaza. Definimos con precisión el derecho lesionado, el responsable y la prueba de cargo.",
      },
      {
        title: "Indemnización y ejecución de la sentencia",
        description:
          "Toda sentencia que acoge el amparo condena en abstracto a la indemnización de daños y perjuicios y al pago de costas (art. 51). Gestionamos su cumplimiento —cuyo incumplimiento configura desobediencia (art. 53)— y la liquidación de la indemnización en la vía contencioso-administrativa (art. 56).",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría para presentar un recurso de amparo por la violación de un derecho fundamental.",
    commercialFaq: [
      {
        question: "¿Tengo que agotar trámites administrativos antes de presentar un amparo?",
        answer:
          "No. El artículo 31 de la Ley de la Jurisdicción Constitucional establece que no es necesaria la reposición ni ningún otro recurso administrativo para interponer el amparo; puede ejercerse directamente en cualquier momento. Si usted opta por usar los recursos administrativos, el plazo de prescripción se suspende mientras la Administración no resuelva expresamente.",
      },
      {
        question: "¿Cuánto tiempo tengo para presentar un recurso de amparo?",
        answer:
          "El amparo puede interponerse mientras subsista la violación y hasta dos meses después de que hayan cesado totalmente sus efectos (art. 35). Tratándose de derechos puramente patrimoniales, dentro de los dos meses siguientes a la fecha en que tuvo noticia fehaciente de la violación. Aun si el amparo prescribe, el acto puede impugnarse en otra vía (art. 36).",
      },
      {
        question: "¿Quién puede presentar un amparo y qué necesito?",
        answer:
          "Cualquier persona puede interponerlo (art. 33). No requiere autenticación ni formalidades especiales (art. 38): basta expresar con claridad el hecho u omisión, el derecho violado o amenazado, el órgano o servidor responsable y la prueba de cargo. Aun así, una redacción técnica evita el rechazo de plano y fortalece el caso.",
      },
      {
        question: "¿El amparo suspende el acto que me perjudica?",
        answer:
          "Sí. Al admitirse el recurso, la aplicación al recurrente del acto concreto impugnado se suspende de pleno derecho (art. 41). Solo en casos de excepcional gravedad la Sala puede autorizar su ejecución, con cautelas. Además, el Presidente o el magistrado instructor pueden dictar medidas de conservación o seguridad para prevenir daños mientras se resuelve.",
      },
      {
        question: "Si gano el amparo, ¿me indemnizan?",
        answer:
          "Sí. Toda resolución que acoge el amparo condena en abstracto a la indemnización de los daños y perjuicios causados y al pago de las costas (art. 51), contra el Estado o la entidad de la que dependa el demandado. La liquidación de esa indemnización se tramita después en la vía contencioso-administrativa (art. 56).",
      },
    ],
    relatedArticleSlug: "recurso-amparo-costa-rica",
    relatedArticleLabel:
      "Lea nuestra guía completa: Recurso de Amparo en Costa Rica (plazos, requisitos y trámite)",
  },

  "acciones-de-inconstitucionalidad": {
    hookHeadline: "¿Una ley o un reglamento inconstitucional le está causando un perjuicio?",
    hookSubtext:
      "La acción de inconstitucionalidad es el instrumento más poderoso del ordenamiento: la sentencia que la acoge elimina la norma del ordenamiento con efecto general para todos (art. 88). Pero no cualquiera puede plantearla en cualquier momento: por regla general se exige un asunto pendiente en el que se invoque la inconstitucionalidad como medio razonable de amparar su derecho (art. 75), el escrito debe ir autenticado por abogado y fundamentarse con cita concreta de las normas constitucionales infringidas (art. 78), y un planteamiento sin esas formalidades puede no recibir trámite (art. 80). La técnica define el resultado.",
    scenariosTitle: "¿Cuándo procede una acción de inconstitucionalidad?",
    triggerScenarios: [
      "Una ley o un reglamento le aplica una norma que considera contraria a la Constitución",
      "Un tributo o cobro se sustenta en una norma que estima inconstitucional",
      "Tiene un proceso judicial o administrativo donde la norma aplicable es inconstitucional",
      "Una disposición de alcance general afecta intereses difusos o colectivos (ambiente, patrimonio público)",
      "La formación de una ley violó un trámite sustancial de la Constitución",
      "Una reforma constitucional se aprobó con vicios de procedimiento",
      "Una ley se opone a un tratado o convenio internacional (artículo 7 de la Constitución)",
    ],
    services: [
      {
        title: "Evaluación de procedencia y legitimación",
        description:
          "Determinamos si la norma es impugnable (art. 73) y por cuál vía corresponde: la incidental, que exige un asunto previo pendiente donde se invoque la inconstitucionalidad (art. 75, párr. 1), o la directa, sin asunto previo, para intereses difusos o colectivos (art. 75, párr. 2).",
      },
      {
        title: "Acción a partir de un asunto pendiente",
        description:
          "Cuando usted tiene un proceso judicial, un amparo o un procedimiento de agotamiento de la vía administrativa, planteamos la inconstitucionalidad como medio razonable de amparar su derecho. El derecho caduca si el proceso base queda resuelto por sentencia firme (art. 77), por lo que el momento es crítico.",
      },
      {
        title: "Defensa de intereses difusos y colectivos",
        description:
          "Para asuntos sin lesión individual y directa —ambiente, patrimonio público, derechos de la colectividad— planteamos la acción de forma directa, sin necesidad de un caso previo pendiente (art. 75, párr. 2).",
      },
      {
        title: "Redacción técnica del escrito",
        description:
          "El escrito debe presentarse autenticado y exponer los fundamentos con cita concreta de las normas o principios constitucionales infringidos (art. 78). Lo redactamos con el rigor que evita la prevención de subsanación en tres días y la consecuente denegación del trámite (art. 80).",
      },
      {
        title: "Trámite ante la Sala Constitucional",
        description:
          "Acompañamos todo el proceso: la audiencia de quince días a la Procuraduría General y a la contraparte del asunto principal (art. 81), la coadyuvancia de terceros interesados (art. 83) y la audiencia oral de conclusiones (art. 85). La Sala debe resolver en un máximo de un mes desde la vista (art. 86).",
      },
      {
        title: "Efectos de la sentencia",
        description:
          "La sentencia estimatoria produce cosa juzgada y elimina la norma del ordenamiento, con efecto general para todos (art. 88). Su efecto es declarativo y retroactivo a la fecha de vigencia de la norma —sin perjuicio de los derechos adquiridos de buena fe—, y la Sala puede graduar y dimensionar ese efecto para proteger la seguridad jurídica (art. 91).",
      },
    ],
    whatsappMessage:
      "Hola, necesito asesoría para plantear una acción de inconstitucionalidad contra una norma que me perjudica.",
    commercialFaq: [
      {
        question: "¿Quién puede plantear una acción de inconstitucionalidad?",
        answer:
          "Por la vía incidental, cualquier persona que sea parte en un asunto pendiente —judicial, de amparo, de hábeas corpus o de agotamiento de la vía administrativa— donde invoque la inconstitucionalidad como medio razonable de amparar su derecho (art. 75, párr. 1). Sin asunto previo pueden hacerlo quienes defienden intereses difusos o colectivos y, de forma directa, el Contralor General, el Procurador General, el Fiscal General y el Defensor de los Habitantes (art. 75, párrs. 2 y 3).",
      },
      {
        question: "¿Necesito tener un juicio antes de plantearla?",
        answer:
          "Por regla general, sí: se exige un asunto pendiente de resolver donde la norma impugnada sea aplicable y se invoque su inconstitucionalidad como medio razonable de amparar el derecho lesionado (art. 75). La excepción son los asuntos sin lesión individual y directa o de intereses difusos y colectivos, que no requieren caso previo. Además, el derecho caduca si el proceso base queda resuelto por sentencia firme antes de plantearla (art. 77).",
      },
      {
        question: "¿Contra qué normas procede?",
        answer:
          "Contra leyes y disposiciones generales —incluso de sujetos privados— que infrinjan la Constitución por acción u omisión; contra actos subjetivos de autoridades públicas que no quepan en amparo o hábeas corpus; contra vicios en la formación de las leyes o en las reformas constitucionales; y contra leyes que se opongan a un tratado internacional (art. 73). No procede contra los actos jurisdiccionales del Poder Judicial ni contra los actos del Tribunal Supremo de Elecciones en materia electoral (art. 74).",
      },
      {
        question: "¿Qué requisitos tiene el escrito?",
        answer:
          "Debe presentarse autenticado por abogado y exponer los fundamentos con cita concreta de las normas o principios constitucionales infringidos (art. 78), acompañado de la certificación del asunto principal y las copias de ley (art. 79). Si faltan formalidades, el Presidente de la Sala previene subsanarlas en tres días y, de no cumplirse, deniega el trámite (art. 80). Por eso la calidad técnica del planteamiento es determinante.",
      },
      {
        question: "Si la acción se acoge, ¿qué efecto tiene la sentencia?",
        answer:
          "La sentencia que declara la inconstitucionalidad produce cosa juzgada y elimina la norma del ordenamiento, con efecto general para todos (art. 88). Su efecto es declarativo y retroactivo a la fecha de vigencia de la norma, sin perjuicio de los derechos adquiridos de buena fe; la Sala puede graduar y dimensionar ese efecto retroactivo para evitar dislocaciones a la seguridad jurídica (art. 91). En materia penal o sancionatoria, la retroactividad opera siempre a favor del afectado (art. 92).",
      },
    ],
    relatedArticleSlug: "recurso-amparo-costa-rica",
    relatedArticleLabel:
      "Lea también nuestra guía sobre el recurso de amparo en Costa Rica",
  },

  "expropiaciones": {
    hookHeadline: "¿Le notificaron una expropiación o una declaratoria de interés público?",
    hookSubtext:
      "El plazo es corto y decisivo: desde la notificación del avalúo administrativo usted tiene solo cinco días hábiles para manifestar su disconformidad, y su silencio se tiene como aceptación del precio (art. 25). El avalúo del Estado suele limitarse al terreno y las construcciones, pero la ley obliga a indemnizar el justo precio completo —derechos comerciales, lucro cesante, daño al remanente, intereses y más (art. 22)—. Oponerse a tiempo abre el proceso judicial donde un perito independiente revisa la valoración. Actuar con rapidez y respaldo técnico define cuánto recibe.",
    scenariosTitle: "¿Cuándo necesita defender su expropiación?",
    triggerScenarios: [
      "Le notificaron una declaratoria de interés público sobre su propiedad",
      "Le notificaron el avalúo administrativo y corre el plazo para responder",
      "Considera que el monto ofrecido no refleja el valor real de su bien",
      "Su propiedad alberga un negocio, licencias o una actividad productiva",
      "El Estado expropia solo una parte y el remanente le queda inservible",
      "Lo expropiaron y no le han pagado o no le reconocen intereses",
      "El proyecto para el que lo expropiaron no se ejecutó (derecho de restitución)",
    ],
    services: [
      {
        title: "Oposición al avalúo administrativo",
        description:
          "Dentro de los cinco días hábiles siguientes a la notificación del avalúo, presentamos su disconformidad fundada. Si guarda silencio, la ley tiene el avalúo por aceptado y queda firme, sin posibilidad de oposición posterior (art. 25).",
      },
      {
        title: "Determinación del justo precio",
        description:
          "El justo precio no es solo el terreno: el artículo 22 obliga a valorar las construcciones, los derechos de inquilinos y arrendatarios, las licencias y derechos comerciales, las concesiones y permisos de explotación, los gravámenes y cualquier otro elemento indemnizable.",
      },
      {
        title: "Lucro cesante y daño al remanente",
        description:
          "Reclamamos el lucro cesante de un negocio activo, con base en la cláusula abierta del artículo 22 inciso i) y la jurisprudencia de la Sala Primera. Cuando la expropiación parcial deja el resto inservible, exigimos la expropiación de la totalidad del inmueble (art. 17).",
      },
      {
        title: "Proceso especial ante el Juzgado Contencioso",
        description:
          "Llevamos el proceso especial de expropiación ante el Juzgado Contencioso-Administrativo y Civil de Hacienda, donde un perito independiente nombrado por el juez revisa el avalúo (art. 30) y se discute la indemnización definitiva (art. 29).",
      },
      {
        title: "Intereses e indexación del valor",
        description:
          "Exigimos los intereses que la Administración debe reconocer de oficio, desde la desposesión del bien hasta el pago efectivo (art. 11); y si usted aceptó el avalúo y transcurren más de seis meses sin pago, la actualización del valor conforme a la inflación del Banco Central (art. 23).",
      },
      {
        title: "Control de la posesión, el desalojo y la restitución",
        description:
          "Verificamos que la Administración no entre en posesión sin depositar antes el avalúo (art. 28), vigilamos los plazos de desalojo —quince días, o dos meses si es vivienda familiar (art. 30)— y gestionamos el derecho de restitución si el bien no se usa para el fin declarado (art. 16).",
      },
    ],
    whatsappMessage:
      "Hola, me notificaron una expropiación y necesito asesoría para defender el justo precio de mi propiedad.",
    commercialFaq: [
      {
        question: "¿Cuánto tiempo tengo para oponerme al avalúo?",
        answer:
          "Cinco días hábiles desde la notificación del avalúo administrativo (art. 25). Si no responde dentro de ese plazo, su silencio se tiene como aceptación del avalúo, que queda firme y ya no admite oposición en etapas posteriores. Por eso la evaluación técnica debe hacerse de inmediato.",
      },
      {
        question: "¿Qué incluye el justo precio además del terreno?",
        answer:
          "El artículo 22 obliga a valorar, de forma independiente y detallada: las construcciones, los derechos de los inquilinos y arrendatarios, las licencias y derechos comerciales, las concesiones y permisos de explotación, los gravámenes y «cualesquiera otros elementos o derechos susceptibles de valoración e indemnización» (inciso i), base —junto con la jurisprudencia de la Sala Primera— del lucro cesante y el daño emergente.",
      },
      {
        question: "¿El Estado puede entrar a mi propiedad antes de pagar?",
        answer:
          "No. La Administración debe depositar antes el monto del avalúo administrativo ante el Juzgado Contencioso-Administrativo y Civil de Hacienda, como requisito indispensable y previo a la entrada en posesión (art. 28). A partir de la resolución inicial, usted tiene quince días hábiles para desalojar, plazo que se extiende a dos meses cuando se trata de vivienda familiar (art. 30).",
      },
      {
        question: "¿Qué pasa si expropian solo una parte de mi propiedad?",
        answer:
          "Si la parte que no se expropia resulta inadecuada para su uso o explotación racional, usted puede exigir que el Estado expropie la totalidad del inmueble (art. 17). En terrenos urbanos se consideran sobrantes inadecuados los que, a raíz de la expropiación, queden con frente, fondo o superficie inferiores a lo que exigen las normas para edificar.",
      },
      {
        question: "¿Me reconocen intereses si se demora el pago?",
        answer:
          "Sí. La Administración debe reconocer intereses de oficio, a la tasa legal vigente, desde la desposesión del bien hasta el pago efectivo; cuando hay un depósito del avalúo, se calculan sobre la diferencia con el justiprecio (art. 11). Además, si usted aceptó el avalúo y pasan más de seis meses sin pago, puede pedir que el valor se actualice conforme a los índices de inflación del Banco Central (art. 23).",
      },
    ],
    relatedArticleSlug: "expropiacion-costa-rica-derechos",
    relatedArticleLabel:
      "Lea nuestra guía: expropiación en Costa Rica (plazos, derechos y justo precio)",
  },

  "derecho-administrativo": {
    hookHeadline: "¿Tiene un conflicto con una institución pública?",
    hookSubtext:
      "El Derecho Administrativo es el marco que rige cómo actúa la Administración Pública y cómo usted se defiende frente a ella. Todo acto administrativo debe ajustarse al ordenamiento: si le falta total o parcialmente alguno de sus elementos constitutivos, es nulo (arts. 166 y 167 de la LGAP). Usted puede impugnarlo con los recursos de revocatoria y apelación (arts. 342-352) y, como el agotamiento de la vía administrativa es facultativo (art. 31 del CPCA), también puede acudir directamente al contencioso. Un análisis técnico del acto y de los plazos define su estrategia.",
    scenariosTitle: "¿Cuándo necesita un abogado en derecho administrativo?",
    triggerScenarios: [
      "Una institución pública le denegó un permiso, una licencia o una autorización",
      "Le dictaron un acto administrativo que considera ilegal o lesivo de sus derechos",
      "Enfrenta un procedimiento administrativo que puede afectar sus derechos subjetivos",
      "La Administración no le responde una gestión o un recurso",
      "Le impusieron una obligación o una carga sin el debido procedimiento",
      "Necesita impugnar un acto con los recursos de revocatoria y apelación",
      "Quiere demandar al Estado y evaluar si conviene agotar la vía administrativa",
    ],
    services: [
      {
        title: "Análisis de legalidad y vicios del acto",
        description:
          "Determinamos si el acto adolece de un vicio que lo invalida: hay nulidad absoluta cuando faltan totalmente uno o varios de sus elementos constitutivos (art. 166) y relativa cuando uno es imperfecto (art. 167). Un recurso bien fundado en un motivo de legalidad hace obligatoria la anulación del acto (art. 162).",
      },
      {
        title: "Recursos administrativos: revocatoria y apelación",
        description:
          "Interponemos los recursos ordinarios contra el acto: la revocatoria ante el mismo órgano y la apelación ante el superior jerárquico, dentro de los tres días hábiles tratándose del acto final (art. 346), de forma potestativa —uno solo o ambos— (art. 347), conforme a los artículos 342 a 352 de la LGAP.",
      },
      {
        title: "Defensa en el procedimiento administrativo ordinario",
        description:
          "Cuando el acto final pueda causarle un perjuicio grave, la Administración debe seguir el procedimiento ordinario con comparecencia oral y privada (arts. 308 y 309). Ejercemos su defensa y alegamos la nulidad cuando se omiten formalidades sustanciales que causan indefensión (art. 223).",
      },
      {
        title: "Estrategia de agotamiento de la vía",
        description:
          "El agotamiento de la vía administrativa es facultativo (art. 31 del CPCA): definimos si conviene impugnar en sede administrativa o acudir directamente a la jurisdicción contencioso-administrativa, según la urgencia y la estrategia del caso.",
      },
      {
        title: "Inactividad y silencio administrativo",
        description:
          "Cuando la Administración no resuelve, accionamos según corresponda: el silencio negativo habilita la vía siguiente (art. 261) y el silencio positivo aprueba su solicitud de permiso, licencia o autorización transcurrido un mes (arts. 330 y 331).",
      },
      {
        title: "Continuidad hacia la jurisdicción contencioso-administrativa",
        description:
          "Si la vía administrativa no resuelve su situación, llevamos la impugnación —y, cuando procede, la solicitud de medida cautelar— ante el Tribunal Contencioso Administrativo conforme al CPCA.",
      },
    ],
    whatsappMessage:
      "Hola, tengo un conflicto con una institución pública y necesito asesoría en derecho administrativo.",
    commercialFaq: [
      {
        question: "¿Cuándo es nulo un acto administrativo?",
        answer:
          "Un acto es inválido cuando es sustancialmente disconforme con el ordenamiento jurídico (art. 158 de la LGAP). La nulidad es absoluta cuando faltan totalmente uno o varios de sus elementos constitutivos (art. 166) y relativa cuando uno de ellos es imperfecto (art. 167). En caso de duda sobre la gravedad del vicio, se está a la consecuencia más favorable a la conservación del acto (art. 168).",
      },
      {
        question: "¿Qué recursos puedo interponer contra un acto administrativo?",
        answer:
          "Los recursos ordinarios son la revocatoria —ante el mismo órgano que dictó el acto— y la apelación —ante el superior jerárquico—, regulados en los artículos 342 a 352 de la LGAP. Contra el acto final se interponen dentro de los tres días hábiles siguientes a su comunicación (art. 346); es potestativo usar uno solo o ambos (art. 347). La alzada es de única instancia y agota la vía administrativa (art. 350).",
      },
      {
        question: "¿Tengo que agotar la vía administrativa antes de demandar?",
        answer:
          "No, por regla general. El artículo 31 del CPCA establece que el agotamiento de la vía administrativa es facultativo, salvo en materia municipal y de contratación administrativa (artículos 173 y 182 de la Constitución). Usted puede interponer los recursos administrativos o acudir directamente a la jurisdicción contencioso-administrativa.",
      },
      {
        question: "¿Qué pasa si la Administración no me responde?",
        answer:
          "Opera el silencio administrativo. El negativo (art. 261 de la LGAP): transcurrido el plazo de ley sin resolución expresa, se entiende rechazada la gestión y queda habilitada la vía siguiente. El positivo (arts. 330 y 331): en solicitudes de permisos, licencias y autorizaciones, transcurrido un mes sin respuesta se entiende aprobada, y la Administración ya no puede dictar un acto denegatorio.",
      },
      {
        question: "¿Qué debe respetar la Administración antes de dictar un acto que me perjudica?",
        answer:
          "Cuando el acto final pueda causarle un perjuicio grave —o en procedimientos disciplinarios de gravedad—, la Administración debe seguir el procedimiento ordinario (art. 308) con comparecencia oral y privada (art. 309), acceso al expediente y derecho de defensa. La omisión de formalidades sustanciales que cause indefensión acarrea la nulidad de lo actuado (art. 223).",
      },
    ],
    relatedArticleSlug: "como-demandar-al-estado-costa-rica",
    relatedArticleLabel:
      "Lea nuestra guía: ¿Cómo demandar al Estado en Costa Rica?",
  },
  "empleo-publico": {
    hookHeadline: "¿Lo despidieron o sancionaron de un puesto público?",
    hookSubtext:
      "El servidor público goza de estabilidad: solo puede ser removido por una causal de despido justificado o por reducción forzosa de servicios (art. 192 de la Constitución). Antes de despedirlo, la Administración debe seguir el procedimiento especial del artículo 21 de la Ley Marco de Empleo Público (Ley N.° 10159), con órgano director, traslado de cargos y comparecencia oral. Si revoca el despido, el Tribunal de Servicio Civil puede ordenar su restitución con salarios caídos (art. 22). Defendemos su puesto en sede administrativa y judicial.",
    scenariosTitle: "¿Cuándo necesita un abogado en empleo público?",
    triggerScenarios: [
      "Le abrieron un procedimiento de despido o le notificaron un traslado de cargos",
      "Lo despidieron de una institución pública y cree que fue sin causa o sin debido proceso",
      "Le impusieron una suspensión sin goce de salario u otra sanción disciplinaria",
      "Lo suspendieron de su cargo durante una investigación",
      "Lo cesaron por una reducción forzosa de servicios sin justificación técnica ni pago de prestaciones",
      "Necesita apelar ante el Tribunal de Servicio Civil dentro del plazo de cinco días hábiles",
      "No sabe si su caso se litiga en la vía laboral o en la contencioso-administrativa",
    ],
    services: [
      {
        title: "Defensa en el procedimiento de despido",
        description:
          "Ejercemos su defensa en el procedimiento especial del artículo 21 de la Ley N.° 10159: contestamos el traslado de cargos dentro de los quince días, ofrecemos prueba y lo representamos en la comparecencia oral y privada. La omisión del procedimiento o de sus garantías esenciales causa nulidad.",
      },
      {
        title: "Recursos y apelación ante el Tribunal de Servicio Civil",
        description:
          "Interponemos la revocatoria y la apelación en subsidio dentro del plazo improrrogable de cinco días hábiles (art. 22). En las instituciones cubiertas por el Estatuto, la apelación se remite en ambos efectos al Tribunal de Servicio Civil, que puede revocar el despido y ordenar la restitución con salarios caídos.",
      },
      {
        title: "Impugnación de sanciones disciplinarias",
        description:
          "Defendemos contra amonestaciones, advertencias escritas y suspensiones sin goce de salario. Verificamos que exista causal, proporcionalidad y un procedimiento previo respetuoso del debido proceso, y atacamos la sanción cuando falta alguno de esos elementos.",
      },
      {
        title: "Cese por reducción forzosa",
        description:
          "Revisamos los ceses por reducción forzosa de servicios (art. 20 de la Ley N.° 10159): exigimos la rigurosa justificación técnica y el pago previo de las prestaciones e indemnización. Cuando esos requisitos faltan, impugnamos el cese.",
      },
      {
        title: "Determinación de la vía: laboral o contencioso-administrativa",
        description:
          "Definimos la jurisdicción competente según el contenido de la pretensión y el régimen aplicable (art. 420 del Código de Trabajo; voto 9928-2010 de la Sala Constitucional). Un error de competencia puede costar el caso; lo evitamos antes de demandar.",
      },
      {
        title: "Demanda y reinstalación en sede judicial",
        description:
          "Llevamos su caso a la vía judicial —laboral o contencioso-administrativa según corresponda— para pedir la nulidad del despido, la reinstalación en el puesto, el pago de salarios caídos y la indemnización de daños. El agotamiento de la vía administrativa es facultativo (art. 460 del Código de Trabajo).",
      },
    ],
    whatsappMessage:
      "Hola, soy servidor público y necesito asesoría por un despido o una sanción en mi trabajo.",
    commercialFaq: [
      {
        question: "¿Pueden despedirme de un puesto público sin causa?",
        answer:
          "No. El artículo 192 de la Constitución y el artículo 37 del Estatuto de Servicio Civil garantizan la estabilidad: el servidor solo puede ser removido por una causal de despido justificado o por reducción forzosa de servicios. Además, antes del despido la Administración debe tramitar el procedimiento especial del artículo 21 de la Ley N.° 10159, con órgano director, traslado de cargos y comparecencia oral. Un despido sin causa o sin ese procedimiento es impugnable.",
      },
      {
        question: "¿Cuánto tiempo tengo para apelar un despido?",
        answer:
          "El plazo es improrrogable: cinco días hábiles desde la notificación de la resolución de despido, para interponer la revocatoria y la apelación en subsidio (art. 22 de la Ley N.° 10159). En las instituciones cubiertas por el Estatuto de Servicio Civil, la apelación se concede en ambos efectos ante el Tribunal de Servicio Civil, que puede revocar el despido y ordenar la restitución con salarios caídos. Por lo corto del plazo, conviene actuar de inmediato.",
      },
      {
        question: "¿Mi caso va a la jurisdicción laboral o a la contencioso-administrativa?",
        answer:
          "Depende del contenido de la pretensión y del régimen jurídico aplicable, criterios de deslinde que fijó la Sala Constitucional en el voto N.° 9928-2010 y que recoge el artículo 420 del Código de Trabajo. Como regla, las pretensiones patrimoniales y la tutela de fueros y del debido proceso se ventilan en la jurisdicción laboral; las que cuestionan la validez de un acto administrativo pueden corresponder a la contencioso-administrativa. Es una frontera técnica y cambiante: un error de competencia puede costar el caso, por lo que la evaluamos antes de demandar.",
      },
      {
        question: "¿Puedo recuperar mi puesto y los salarios caídos?",
        answer:
          "Sí, es posible. Si el Tribunal de Servicio Civil revoca el despido, dicta un nuevo fallo y resuelve si procede la restitución del servidor en su puesto, con pleno goce de sus derechos y el pago de los salarios caídos (art. 22 de la Ley N.° 10159). En la vía judicial, la reinstalación y los salarios caídos son también pretensiones típicas de la defensa de un funcionario despedido.",
      },
    ],
  },
  "materia-municipal": {
    hookHeadline: "¿La municipalidad le denegó una patente o le dictó un acto que lo perjudica?",
    hookSubtext:
      "Las municipalidades son autónomas, pero sus actos deben ajustarse a la ley. Si un acuerdo del Concejo o una decisión municipal lo afecta —una patente denegada, un cobro de tributos, una clausura, una valoración—, usted puede impugnarlo con los recursos de revocatoria y apelación del Código Municipal (arts. 162 a 171). En materia municipal el agotamiento de la vía administrativa es preceptivo (art. 31 del CPCA), de modo que cumplir bien esos recursos —y a tiempo, en cinco días— es decisivo antes de demandar.",
    scenariosTitle: "¿Cuándo necesita un abogado en derecho municipal?",
    triggerScenarios: [
      "La municipalidad le denegó, suspendió o revocó una patente o licencia comercial",
      "Recibió un cobro de tributos, tasas o multas municipales que considera improcedente",
      "Un acuerdo del Concejo Municipal lesiona sus derechos o los de su empresa",
      "Le notificaron una clausura o una orden de la municipalidad",
      "Necesita impugnar un acto municipal y el plazo es de solo cinco días",
      "Una decisión de la alcaldía o de un funcionario municipal le causa un perjuicio",
      "Quiere demandar a la municipalidad ante la jurisdicción contencioso-administrativa",
    ],
    services: [
      {
        title: "Impugnación de patentes y licencias",
        description:
          "Atacamos la denegación, suspensión o revocación de patentes y licencias comerciales. Verificamos el silencio positivo a los treinta días (art. 89), que la denegación se ajuste a las causales del art. 90 y que la suspensión por falta de pago respete el debido proceso (art. 90 bis del Código Municipal).",
      },
      {
        title: "Defensa frente a tributos y tasas municipales",
        description:
          "Revisamos la legalidad de los cobros, las tasas y las valoraciones municipales. Las tasas deben responder al costo del servicio más un diez por ciento (art. 83) y los tributos prescriben en cinco años (art. 82); cuestionamos los cobros improcedentes antes de que la certificación del contador se vuelva título ejecutivo.",
      },
      {
        title: "Recursos contra acuerdos del Concejo",
        description:
          "Interponemos la revocatoria ante el Concejo y la apelación ante el Tribunal Contencioso-Administrativo dentro del quinto día (arts. 162 y 165). La apelación procede por ilegalidad y la revocatoria también por inoportunidad del acuerdo.",
      },
      {
        title: "Recursos contra actos de la alcaldía y funcionarios",
        description:
          "Impugnamos las decisiones de la alcaldía y de los funcionarios municipales con los recursos de los artículos 170 y 171: apelación ante el Concejo o ante el Tribunal Contencioso-Administrativo, según el órgano, dentro del plazo de cinco días.",
      },
      {
        title: "Agotamiento de la vía administrativa municipal",
        description:
          "En materia municipal el agotamiento es preceptivo (art. 31 del CPCA, supuesto del art. 173 de la Constitución). Cumplimos correctamente los recursos del Código Municipal —presupuesto indispensable de la demanda— para que el caso no se caiga por un defecto de admisibilidad.",
      },
      {
        title: "Litigio contencioso contra la municipalidad",
        description:
          "Agotada la vía, demandamos a la municipalidad ante la jurisdicción contencioso-administrativa: pedimos la anulación del acto o acuerdo, el restablecimiento del derecho y la indemnización de los daños (art. 42 del CPCA), con medidas cautelares cuando hay urgencia (art. 19).",
      },
    ],
    whatsappMessage:
      "Hola, tengo un conflicto con una municipalidad y necesito asesoría en derecho municipal.",
    commercialFaq: [
      {
        question: "¿Cuánto tiempo tengo para impugnar un acto municipal?",
        answer:
          "Por regla general, cinco días para interponer la revocatoria y la apelación, tanto contra los acuerdos del Concejo (arts. 162 y 165 del Código Municipal) como contra los actos de la alcaldía y de los funcionarios municipales (arts. 170 y 171). Es un plazo muy corto, por lo que conviene actuar de inmediato: dejarlo pasar consolida el acto y cierra la vía.",
      },
      {
        question: "¿A quién se le apela un acuerdo del Concejo Municipal?",
        answer:
          "La revocatoria la conoce el propio Concejo y la apelación la resuelve el Tribunal Contencioso-Administrativo, que actúa como jerarca impropio y debe resolver en el plazo máximo de un mes (art. 165 del Código Municipal y art. 31 del CPCA). La apelación procede solo por ilegalidad; la revocatoria también por inoportunidad del acuerdo.",
      },
      {
        question: "¿Tengo que agotar la vía administrativa antes de demandar a la municipalidad?",
        answer:
          "Sí. La materia municipal es una de las excepciones en que el agotamiento de la vía administrativa es preceptivo (art. 31 del CPCA, supuesto del art. 173 de la Constitución). A diferencia de la regla general, aquí hay que cumplir los recursos del Código Municipal antes de acudir a la jurisdicción contencioso-administrativa; omitirlos puede hacer inadmisible la demanda.",
      },
      {
        question: "¿Me pueden quitar la patente por no pagar?",
        answer:
          "La licencia comercial se suspende por falta de pago de dos o más trimestres, sean consecutivos o alternos, y en caso de reincidencia la municipalidad puede revocarla, previo debido proceso (art. 90 bis del Código Municipal). Si la suspensión o la revocación se dicta sin respetar el procedimiento o sin fundamento, es impugnable con los recursos del Código Municipal.",
      },
    ],
    relatedArticleSlug: "potestad-discrecional-municipalidades-urbanismo",
    relatedArticleLabel:
      "Lea: La potestad discrecional de la administración municipal en materia urbanística",
  },
  "derecho-urbanistico": {
    hookHeadline: "¿Le denegaron un permiso de construcción o un uso del suelo?",
    hookSubtext:
      "El urbanismo lo controla la municipalidad a través del plan regulador y de los reglamentos de zonificación, fraccionamiento y construcciones. Si le negaron un uso del suelo, un permiso de construcción, o le ordenaron una clausura o una demolición, esa decisión debe ajustarse a la Ley de Planificación Urbana (Ley N.° 4240) y a la Ley de Construcciones (Ley N.° 833). Una denegatoria mal fundada, o una carga de cesión excesiva en un fraccionamiento, es impugnable —y en lo municipal hay que actuar en cinco días—.",
    scenariosTitle: "¿Cuándo necesita un abogado en derecho urbanístico?",
    triggerScenarios: [
      "La municipalidad le denegó un permiso de construcción o se lo condiciona ilegalmente",
      "Le negaron el certificado de uso del suelo y no puede sacar la patente",
      "Le notificaron una clausura o una orden de demolición de su obra",
      "Le exigen ceder un porcentaje de terreno excesivo en un fraccionamiento o urbanización",
      "Su finca quedó reservada a uso público en el plan regulador y nadie se la compra",
      "Una restricción de zonificación le impide el uso razonable de su propiedad",
      "El INVU o la Dirección de Urbanismo le rechazó un proyecto o un plano",
    ],
    services: [
      {
        title: "Permisos de construcción y uso del suelo",
        description:
          "Gestionamos e impugnamos permisos de construcción (art. 74 de la Ley de Construcciones) y certificados de uso del suelo (art. 28 de la Ley de Planificación Urbana). Atacamos las denegatorias que se apartan de las causales legales (art. 58) y que frenan su patente o su obra.",
      },
      {
        title: "Fraccionamientos y urbanizaciones",
        description:
          "Tramitamos el visado municipal de planos (arts. 33 y 34) y la aprobación de urbanizaciones (art. 38), y discutimos la cesión de áreas de uso público —entre el 5% y el 20%, con tope del 45% (art. 40)— cuando la municipalidad la exige de más.",
      },
      {
        title: "Defensa frente a clausuras y demoliciones",
        description:
          "Lo defendemos ante una información por construir sin licencia: el plazo de treinta días para regularizar (art. 93) y la amenaza de destrucción o clausura (art. 96 de la Ley de Construcciones). Una respuesta técnica a tiempo puede salvar la obra.",
      },
      {
        title: "Restricciones de zonificación y reserva de uso público",
        description:
          "Cuando una restricción urbanística o una reserva del plan vacía de contenido su propiedad, invocamos el artículo 45 de la Constitución y el artículo 48 de la Ley de Planificación Urbana: si la reserva excede la cesión normal, la municipalidad o el Estado deben comprar o expropiar dentro del año.",
      },
      {
        title: "Impugnación del plan regulador y sus reglamentos",
        description:
          "Revisamos la legalidad del plan regulador y de sus reglamentos, incluido el procedimiento de adopción —audiencia pública, aprobación del INVU y publicación (art. 17)—. Los vicios de procedimiento o de fondo abren la vía de impugnación.",
      },
      {
        title: "Recursos ante la municipalidad, el INVU y el contencioso",
        description:
          "Interponemos los recursos del Código Municipal —revocatoria y apelación ante el Tribunal Contencioso como jerarca impropio (arts. 165 y 171)— y los de la Ley de Planificación Urbana ante la Junta Directiva del INVU y el Poder Ejecutivo (art. 13). Agotada la vía, demandamos con las pretensiones del art. 42 del CPCA.",
      },
    ],
    whatsappMessage:
      "Hola, tengo un problema urbanístico (permiso de construcción o uso del suelo) y necesito asesoría.",
    commercialFaq: [
      {
        question: "¿Qué hago si me deniegan el permiso de construcción o el uso del suelo?",
        answer:
          "La denegatoria debe ser motivada y ajustarse a las causales legales (art. 58 de la Ley de Planificación Urbana; art. 74 de la Ley de Construcciones). Se impugna con los recursos del Código Municipal —revocatoria y apelación dentro del quinto día, que suben al Tribunal Contencioso-Administrativo como jerarca impropio (arts. 165 y 171)—. En materia municipal el agotamiento de la vía es preceptivo (art. 31 del CPCA); agotada, se demanda para que se anule la denegatoria, se ordene el permiso y se indemnicen los daños (art. 42 del CPCA).",
      },
      {
        question: "¿Necesito permiso para una remodelación pequeña?",
        answer:
          "Las obras menores que no superen el equivalente a diez salarios base no requieren un profesional responsable (ingeniero o arquitecto), pero sí necesitan la licencia municipal correspondiente (art. 83 bis de la Ley de Construcciones). Ojo: no se puede fraccionar una obra mayor en varias obras menores para evadir los controles; la municipalidad puede denegar el permiso si lo detecta.",
      },
      {
        question: "¿Pueden obligarme a ceder parte de mi terreno al urbanizar?",
        answer:
          "Sí, dentro de un límite. Quien urbaniza o fracciona fuera del cuadrante debe ceder gratuitamente al uso público las áreas de vías, parques y facilidades comunales: entre un 5% y un 20% del terreno según el tamaño de los lotes, sin que el total supere el 45% (art. 40 de la Ley de Planificación Urbana). Una exigencia por encima de esos porcentajes es discutible.",
      },
      {
        question: "¿Y si el plan regulador reserva mi finca para uso público?",
        answer:
          "El artículo 45 de la Constitución protege la propiedad: solo puede privarse de ella por interés público y previa indemnización. Cuando se niega el permiso porque la finca —o una parte que excede la cesión normal— queda reservada a uso público, la municipalidad, el Estado o la institución deben negociar la compra o iniciar la expropiación dentro del año siguiente (art. 48 de la Ley de Planificación Urbana). La reserva no puede mantenerse indefinidamente sin pagar.",
      },
    ],
    relatedArticleSlug: "potestad-discrecional-municipalidades-urbanismo",
    relatedArticleLabel:
      "Lea: La potestad discrecional de la administración municipal en materia urbanística",
  },
  "servicio-publico": {
    hookHeadline: "¿ARESEP o SUTEL le dictó una resolución que afecta su tarifa, su concesión o su operación?",
    hookSubtext:
      "El régimen regulatorio costarricense es denso y técnico: una solicitud tarifaria mal armada o una audiencia pública mal trabajada cuesta millones. Defendemos a prestadores de servicios públicos —cooperativas de electrificación, operadores de telecomunicaciones, concesionarios de transporte y otros— en solicitudes tarifarias ordinarias, en audiencias públicas, en procedimientos sancionatorios y en la impugnación de resoluciones desfavorables, en sede regulatoria y, agotada la vía, ante el contencioso.",
    scenariosTitle: "¿Cuándo necesita un abogado ante ARESEP o SUTEL?",
    triggerScenarios: [
      "ARESEP redujo o denegó su solicitud de fijación tarifaria ordinaria",
      "SUTEL le notificó un procedimiento sancionatorio o una resolución desfavorable",
      "Le abrieron una revocatoria de concesión o título habilitante",
      "Hay una audiencia pública en curso que afecta su tarifa o su operación",
      "Necesita preparar una solicitud tarifaria sólida que pase el filtro técnico",
      "Quiere oponerse formalmente a la tarifa o concesión que otro operador busca obtener",
      "Una resolución regulatoria lo afecta y quiere impugnarla en la jurisdicción contencioso-administrativa",
    ],
    services: [
      {
        title: "Solicitudes tarifarias (ordinaria y extraordinaria)",
        description:
          "Preparamos solicitudes tarifarias técnicas y jurídicamente sólidas: en las ordinarias, el estudio anual del prestador (art. 30 de la Ley 7593) bajo el principio de servicio al costo (art. 31); en las extraordinarias, la gestión correcta del modelo automático de ajuste o la sustentación técnica de las circunstancias que justifican una revisión de oficio.",
      },
      {
        title: "Audiencias públicas ante ARESEP/SUTEL",
        description:
          "Lo representamos en las audiencias públicas del artículo 36 de la Ley 7593: oposiciones por escrito y sustentación oral basadas en estudios técnicos. La intervención sólida en audiencia es a menudo el punto de quiebre del expediente.",
      },
      {
        title: "Recursos contra resoluciones regulatorias",
        description:
          "Interponemos los recursos de revocatoria y apelación contra resoluciones del Regulador General; la Junta Directiva resuelve en alzada y agota la vía (art. 53 de la Ley 7593). Cuidamos el plazo —tres días hábiles, supletoriedad de la LGAP— para no perder la impugnación por vencimiento.",
      },
      {
        title: "Defensa en procedimientos sancionatorios",
        description:
          "Defendemos al prestador en procedimientos sancionatorios. En ARESEP (art. 38 de la Ley 7593), las multas se calculan sobre el daño o salarios base; en SUTEL (arts. 67 y 68 de la Ley 8642), sobre los ingresos brutos. La calificación de la infracción cambia la sanción por uno o dos órdenes de magnitud.",
      },
      {
        title: "Defensa de concesiones y títulos habilitantes",
        description:
          "Defendemos las concesiones de servicios públicos frente a revocatorias (art. 41 de la Ley 7593) y los títulos habilitantes en telecomunicaciones —concesiones, autorizaciones y permisos— frente a las causales de extinción de la Ley 8642 (arts. 22, 25 y 26).",
      },
      {
        title: "Litigio contencioso-administrativo regulatorio",
        description:
          "El agotamiento de la vía administrativa es facultativo en materia regulatoria (art. 31 del CPCA). Acudimos directamente al contencioso —o tras agotar los recursos— con las pretensiones del art. 42 del CPCA: anulación, restablecimiento, indemnización. Cuando hay urgencia, medidas cautelares (art. 19) para suspender los efectos.",
      },
    ],
    whatsappMessage:
      "Hola, somos prestadores de un servicio regulado por ARESEP/SUTEL y necesitamos asesoría.",
    commercialFaq: [
      {
        question: "¿Cuánto tiempo tengo para impugnar una resolución de ARESEP o SUTEL?",
        answer:
          "La Ley 7593 no fija plazos especiales para los recursos, por lo que rige la LGAP en forma supletoria: tres días hábiles para impugnar el acto final (art. 346 de la LGAP). La revocatoria se interpone ante el Regulador General y la apelación ante la Junta Directiva de la ARESEP, que agota la vía (art. 53, incisos b y k). Es un plazo muy corto; conviene actuar de inmediato.",
      },
      {
        question: "¿La audiencia pública es obligatoria antes de fijar una tarifa?",
        answer:
          "Sí, en las fijaciones ordinarias. El artículo 36 de la Ley 7593 obliga a la ARESEP a convocar a audiencia pública —publicación en La Gaceta y en dos periódicos de circulación nacional— y dar treinta días naturales para presentar oposiciones por escrito y sustentarlas oralmente. La omisión de la audiencia vicia el acto tarifario. Las extraordinarias, en cambio, se hacen de oficio y no requieren audiencia.",
      },
      {
        question: "¿Tengo que agotar la vía administrativa antes de demandar al regulador?",
        answer:
          "No. En materia regulatoria el agotamiento de la vía administrativa es facultativo (art. 31 del CPCA): no es uno de los supuestos preceptivos de los artículos 173 y 182 de la Constitución. El prestador puede agotar los recursos ante la Junta Directiva de la ARESEP o acudir directamente a la jurisdicción contencioso-administrativa, según convenga al caso y a la urgencia.",
      },
      {
        question: "¿Qué pasa si la sanción de ARESEP o SUTEL pone en riesgo mi operación?",
        answer:
          "Si la resolución es inminente y compromete la prestación del servicio, junto con la impugnación se solicitan medidas cautelares de urgencia ante el Tribunal Contencioso-Administrativo (art. 19 del CPCA) para suspender los efectos del acto mientras se resuelve el fondo. En el contencioso pueden pretenderse, además, la anulación, el restablecimiento del derecho y la indemnización (art. 42 del CPCA).",
      },
    ],
  },
  "dominio-publico": {
    hookHeadline: "¿Le revocaron una concesión o le ordenaron desalojar un bien del Estado?",
    hookSubtext:
      "Las cosas públicas están fuera del comercio (art. 262 del Código Civil), pero los derechos del concesionario y del permisionario sí están protegidos. Si la Administración revoca su concesión, ordena un desalojo o le niega un permiso de uso, esa decisión debe ajustarse a la ley: el art. 154 de la LGAP fija reglas sobre permisos precarios; el 155 exige dictamen de la Contraloría e indemnización completa para revocar derechos subjetivos; el 194 fija la responsabilidad por sacrificio especial. Cuando hay urgencia, llevamos medidas cautelares para suspender el acto.",
    scenariosTitle: "¿Cuándo necesita un abogado en dominio público?",
    triggerScenarios: [
      "La Administración revocó —o anunció revocar— su concesión sobre un bien del Estado",
      "Le notificaron una orden de desalojo o sanción por ocupar un bien demanial",
      "Le denegaron un permiso de uso del dominio público o se lo revocaron sin motivación adecuada",
      "Declararon la caducidad de su concesión por incumplimiento",
      "Le restringieron o limitaron derechos sobre un bien del Estado en su perjuicio",
      "La Administración usó la autotutela sin respetar el debido proceso",
      "Necesita una indemnización por la revocatoria de su concesión por interés público",
    ],
    services: [
      {
        title: "Defensa de concesiones y revocatorias con indemnización",
        description:
          "Cuando la Administración intenta revocar una concesión, exigimos el cumplimiento estricto del artículo 155 de la LGAP: dictamen favorable de la Contraloría General de la República y reconocimiento simultáneo de la indemnización completa, so pena de nulidad absoluta. Esa nulidad es el argumento principal cuando el procedimiento se omite.",
      },
      {
        title: "Permisos de uso precarios",
        description:
          "Tramitamos e impugnamos permisos de uso del dominio público (art. 154 de la LGAP). Aunque el título sea precario, la revocación no puede ser intempestiva ni arbitraria y debe darse un plazo prudencial: una revocación apresurada o sin motivación adecuada es revisable.",
      },
      {
        title: "Defensa frente a desalojos administrativos",
        description:
          "Defendemos a ocupantes y poseedores ante desalojos administrativos: exigimos el debido proceso ordinario (LGAP, arts. 308 y 309) y, cuando el desalojo es inminente, solicitamos medidas cautelares para suspenderlo (art. 19 del CPCA).",
      },
      {
        title: "Indemnizaciones por sacrificio especial",
        description:
          "Reclamamos la indemnización por conducta lícita de la Administración cuando un acto legítimo —típicamente la revocatoria por interés público— le causa un daño especial. El artículo 194 de la LGAP cubre el valor del daño al momento del pago; cuando la conducta es ilícita (arts. 190-192), la reparación incluye además el lucro cesante.",
      },
      {
        title: "Caducidad de concesiones por incumplimiento",
        description:
          "Cuando la Administración declara la caducidad por incumplimiento del concesionario, revisamos si el procedimiento siguió las reglas y si los hechos imputados se acreditaron: una caducidad sin debido proceso o sin causa probada es impugnable.",
      },
      {
        title: "Litigio contencioso-administrativo demanial",
        description:
          "Llevamos el caso a la jurisdicción contencioso-administrativa con las pretensiones del artículo 42 del CPCA: anulación del acto, restablecimiento del concesionario en su derecho e indemnización. Para casos urgentes, medidas cautelares (art. 19) para suspender el desalojo o la revocatoria.",
      },
    ],
    whatsappMessage:
      "Hola, tengo un problema con una concesión o permiso sobre un bien del Estado y necesito asesoría.",
    commercialFaq: [
      {
        question: "¿Pueden quitarme una concesión sin pagarme?",
        answer:
          "No, si la concesión otorga un derecho subjetivo. El artículo 155 de la LGAP exige, para revocar un acto declaratorio de derechos subjetivos, el dictamen favorable de la Contraloría General de la República y el reconocimiento simultáneo de la indemnización completa de los daños y perjuicios, so pena de nulidad absoluta. Una revocación sin esos requisitos —o sin liquidación de daños dentro del mes siguiente a la solicitud— es impugnable. Distinto es el permiso de uso precario del artículo 154, que sí puede revocarse «sin responsabilidad», aunque no de forma intempestiva ni arbitraria.",
      },
      {
        question: "¿Puedo recuperar el lucro cesante si me revocan la concesión?",
        answer:
          "Depende de la causa. Si la revocatoria es por conducta lícita de la Administración —típicamente, por interés público sobrevenido—, el artículo 194 de la LGAP limita la indemnización al valor de los daños al momento del pago, pero «no el lucro cesante». Si la revocatoria es por conducta ilícita (arts. 190-192) o por falta de un servidor en el ejercicio del cargo, la reparación es más amplia y sí alcanza el lucro cesante. Por eso es decisivo encuadrar correctamente la causa de la revocatoria.",
      },
      {
        question: "¿Pueden desalojarme de un terreno del Estado sin juicio?",
        answer:
          "Sí, en virtud de la autotutela administrativa, pero con debido proceso. La Administración debe seguir el procedimiento ordinario de los artículos 308 y 309 de la LGAP —notificación, traslado de cargos, comparecencia oral y privada y derecho de defensa— antes de ejecutar el desalojo. Su omisión causa nulidad. La orden de desalojo es además impugnable: cuando es inminente, conviene pedir medidas cautelares de urgencia (art. 19 del CPCA) para suspenderla mientras se resuelve el fondo.",
      },
      {
        question: "¿Puedo adquirir por usucapión un bien del Estado?",
        answer:
          "No. El artículo 262 del Código Civil pone las cosas públicas «fuera del comercio», y de ahí la jurisprudencia deriva la imprescriptibilidad: por más tiempo que se ocupe un bien demanial, el ocupante no adquiere la propiedad. Esa exclusión cede solo si la propia ley desafecta el bien y lo separa del uso público al que estaba destinado.",
      },
    ],
  },
  "materia-presupuestaria": {
    hookHeadline: "¿La Contraloría le abrió un procedimiento sancionatorio o le rechazó un refrendo o un presupuesto?",
    hookSubtext:
      "Las potestades de la Contraloría son vinculantes para la Administración (art. 68 de la Ley 7428): cuando recomienda una sanción, el órgano competente debe imponerla en el plazo fijado. Y en materia de presupuesto, refrendo y contratación, los actos de la Contraloría no son recurribles administrativamente (art. 34): se llevan directamente al contencioso. Defendemos a funcionarios, jerarcas, regidores y entidades públicas con la técnica que ese marco exige.",
    scenariosTitle: "¿Cuándo necesita un abogado ante la Contraloría?",
    triggerScenarios: [
      "La CGR le abrió un procedimiento sancionatorio o le recomendó una sanción contra usted",
      "Le rechazaron el refrendo de un contrato o se lo objetaron",
      "Le improbaron parcial o totalmente el presupuesto institucional",
      "La CGR declaró una nulidad absoluta evidente y manifiesta de un acto",
      "Es regidor o síndico y enfrenta una posible cancelación de credencial",
      "Le notificaron una resolución de reintegro por daño económico (título ejecutivo)",
      "Necesita demandar a la CGR en el contencioso por un acto que lo afecta",
    ],
    services: [
      {
        title: "Defensa en procedimientos sancionatorios CGR",
        description:
          "Defendemos al funcionario, jerarca o regidor desde el inicio del expediente. La recomendación de sanción de la CGR es vinculante para el órgano competente (art. 68 de la Ley 7428), por lo que la defensa técnica en el procedimiento —no después— es decisiva. Aplicamos los criterios de valoración del art. 108 de la Ley 8131 y el catálogo del art. 113.",
      },
      {
        title: "Refrendo de contratos administrativos",
        description:
          "Gestionamos el refrendo de contratos ante la CGR dentro del plazo de treinta días hábiles (art. 20 de la Ley 7428), defendemos frente a negativas y aprovechamos el silencio positivo cuando se vence el plazo (art. 30). Cuando se niega, la impugnación va directo al contencioso (art. 34).",
      },
      {
        title: "Presupuestos y modificaciones",
        description:
          "Asesoramos a las instituciones en la formulación y defensa de sus presupuestos ante la CGR; en la improbación parcial trabajamos con la regla del art. 18 (el del año anterior rige solo en cuanto a lo improbado) y, en las modificaciones, con la regla del silencio positivo del art. 30.",
      },
      {
        title: "Cancelación de credencial de regidores y síndicos",
        description:
          "Defendemos a regidores y síndicos en procesos de cancelación de credencial por falta grave o por condena penal en delitos contra los deberes de la función pública (art. 73 de la Ley 7428). El estándar probatorio y el debido proceso son la batalla principal.",
      },
      {
        title: "Reintegro por daño económico y responsabilidad civil",
        description:
          "Defendemos al servidor en el procedimiento del art. 76 de la Ley 7428 —donde la certificación de la resolución es título ejecutivo— y, del lado de la institución, perseguimos el cobro de los daños. La responsabilidad civil se rige por la LGAP y el régimen del título X de la Ley 8131, y puede ser solidaria (art. 116).",
      },
      {
        title: "Litigio contencioso directo contra actos de la CGR",
        description:
          "En contratación administrativa, refrendo y materia presupuestaria, los actos de la CGR no son recurribles administrativamente (art. 34 de la Ley 7428): vamos directo al contencioso con las pretensiones del art. 42 del CPCA y, cuando hay urgencia, con medidas cautelares (art. 19) para suspender los efectos.",
      },
    ],
    whatsappMessage:
      "Hola, tengo un asunto ante la Contraloría General de la República y necesito asesoría.",
    commercialFaq: [
      {
        question: "¿Es vinculante la recomendación de sanción de la Contraloría?",
        answer:
          "Sí. El artículo 68 de la Ley 7428 establece que el criterio técnico de la CGR es vinculante: la autoridad competente del sujeto pasivo debe cumplir la recomendación de sanción en el plazo que la Contraloría fije. Solo cabe una gestión de revisión motivada en ocho días hábiles; resuelta esta, el incumplimiento configura delito de desobediencia. Por eso la defensa técnica desde el inicio del expediente es decisiva: una vez emitido el criterio técnico, el margen de maniobra se cierra.",
      },
      {
        question: "¿Cómo se impugna un acto de la Contraloría?",
        answer:
          "Depende del acto. La regla general (art. 33 de la Ley 7428) es el régimen común de impugnación: LGAP en sede administrativa y CPCA en sede judicial. Pero el artículo 34 exceptúa expresamente tres categorías —contratación administrativa, refrendo y materia presupuestaria—: esos actos quedan firmes desde que se dictan, sin recurso administrativo, y se impugnan directamente en el contencioso. En todos los casos, el agotamiento de la vía administrativa es facultativo (art. 31 del CPCA).",
      },
      {
        question: "¿Qué pasa si la CGR me improba el presupuesto?",
        answer:
          "Si la improbación es total, rige el del año inmediato anterior; si es parcial, el del año anterior rige solamente en cuanto a lo improbado, hasta que se corrijan las deficiencias (art. 18 de la Ley 7428). La improbación no es recurrible administrativamente (art. 34): se impugna directamente ante la jurisdicción contencioso-administrativa, con las pretensiones del art. 42 del CPCA y, cuando se compromete la operación, medidas cautelares (art. 19).",
      },
      {
        question: "¿Qué es el reintegro por daño económico que ordena la Contraloría?",
        answer:
          "Es el procedimiento del artículo 76 de la Ley 7428: cuando hay daño contra los fondos públicos «proveniente de una ilegalidad flagrante y manifiesta» y el monto es líquido o liquidable con vista de documentos, la Contraloría dicta resolución razonada que declara la responsabilidad y su monto, previo expediente con audiencia. La certificación de esa resolución constituye título ejecutivo contra el responsable y el sujeto pasivo afectado debe iniciar de inmediato el cobro judicial. Por eso defenderse en el procedimiento —antes de la certificación— es la diferencia entre un asunto administrativo y una ejecución forzosa en su contra.",
      },
    ],
  },
  "alianzas-publico-privadas-infraestructura": {
    hookHeadline: "¿Necesita estructurar, impugnar o defender un proyecto de concesión o APP?",
    hookSubtext:
      "Costa Rica está en transición. La Ley 7762 sigue siendo el régimen vigente para los contratos de concesión y para todos los procedimientos en curso. El expediente 24.009 (Ley Marco APP) fue aprobado en primer debate el 19 de mayo de 2026 pero está suspendido por una consulta de constitucionalidad ante la Sala Constitucional; cuando entre en vigor —tras su reglamentación— sustituirá al Consejo Nacional de Concesiones por la Agencia Nacional de APP. Defendemos a concesionarios, consorcios, inversionistas y al sector público en ambos regímenes: estructuración, refrendo, objeción de carteles, apelación de adjudicaciones y litigio contencioso contra los actos del CNC, MOPT y CGR.",
    scenariosTitle: "¿Cuándo necesita un abogado en concesiones y APP?",
    triggerScenarios: [
      "Va a participar en una licitación de concesión y necesita estructurar la oferta",
      "Le rechazaron el refrendo de un contrato de concesión ante la CGR",
      "Necesita objetar un cartel o apelar una adjudicación ante la Contraloría",
      "Un contrato de concesión vigente enfrenta una controversia de equilibrio económico-financiero",
      "Necesita impugnar en sede contenciosa un acto del CNC, MOPT o CGR que afecta su contrato",
      "Es proponente de una iniciativa privada y la quiere llevar al CNC (o, en su día, a la ANAPP)",
      "Necesita saber cómo le afectará el expediente 24.009 a su proyecto vigente",
    ],
    services: [
      {
        title: "Estructuración y participación en licitaciones",
        description:
          "Preparamos las ofertas técnica y económica conforme al cartel (Ley 7762 arts. 21 a 28), evaluando los factores de selección del art. 28 (valor presente de ingresos, tarifa, plazo, subsidio, pagos al Estado, ingresos mínimos garantizados, puntaje técnico) y los requisitos de admisibilidad. Tramitamos también la constitución de la sociedad anónima nacional (art. 31).",
      },
      {
        title: "Iniciativa privada y proyectos del sector público",
        description:
          "Acompañamos al proponente privado en la presentación de iniciativas (art. 20), incluyendo los estudios de factibilidad técnica, ambiental y económica, y el régimen de recuperación de costos cuando se llegue a la adjudicación.",
      },
      {
        title: "Refrendo de contratos y modificaciones",
        description:
          "Gestionamos el refrendo del contrato de concesión ante la Contraloría (art. 30 Ley 7762) y la aprobación de modificaciones e inversiones adicionales, dentro del tope del 25% de la inversión inicial (art. 48).",
      },
      {
        title: "Objeción de carteles y apelación de adjudicaciones ante la CGR",
        description:
          "Interponemos objeciones al cartel ante la CGR (art. 34: primer tercio del plazo para presentar ofertas; resolución en 30 días naturales con silencio positivo) y apelaciones contra la adjudicación (art. 35: diez días hábiles desde la publicación, resolución en 40 días hábiles prorrogables).",
      },
      {
        title: "Litigio contencioso contra actos del CNC, MOPT y CGR",
        description:
          "Impugnamos los actos del Consejo Nacional de Concesiones, del MOPT y de la Contraloría que afecten el contrato o el procedimiento de licitación, ante la jurisdicción contencioso-administrativa, con las pretensiones del art. 42 del CPCA y medidas cautelares de urgencia cuando el caso lo amerite (art. 19).",
      },
      {
        title: "Equilibrio económico-financiero y reclamos contra el Estado",
        description:
          "Analizamos y reclamamos administrativa y judicialmente el restablecimiento del equilibrio económico-financiero del contrato y las indemnizaciones por hecho del príncipe, fuerza mayor o decisiones de la Administración que afecten al concesionario, con fundamento en la Ley 7762 y en el régimen de responsabilidad de la LGAP (arts. 190 a 194).",
      },
    ],
    whatsappMessage:
      "Hola, tengo un proyecto de concesión u APP y necesito asesoría jurídica especializada.",
    commercialFaq: [
      {
        question: "¿La Ley 7762 sigue vigente o ya rige la nueva Ley Marco APP?",
        answer:
          "La Ley 7762 sigue siendo el régimen vigente. El expediente 24.009 (Ley Marco APP) fue aprobado en primer debate el 19 de mayo de 2026, pero veinte diputados presentaron consulta facultativa de constitucionalidad ante la Sala Constitucional, lo que suspende el segundo debate hasta que la Sala se pronuncie. Aun cuando supere ese tamiz, la propia ley rige a partir de su reglamentación, que el Poder Ejecutivo tiene hasta doce meses para emitir. Los contratos ya adjudicados continuarán bajo la Ley 7762 aun después de la nueva ley, salvo acuerdo mutuo en contrario (transitorios I y II).",
      },
      {
        question: "¿Cuánto tiempo tengo para objetar un cartel o apelar una adjudicación ante la CGR?",
        answer:
          "La objeción al cartel debe presentarse dentro del primer tercio del plazo para presentar ofertas (art. 34 de la Ley 7762); la CGR resuelve en treinta días naturales y, si no lo hace, la objeción se tiene por acogida en los términos del recurrente. La apelación contra la adjudicación se presenta dentro de los diez días hábiles siguientes a la publicación en La Gaceta (art. 35); la CGR resuelve en cuarenta días hábiles prorrogables. Quien pudiendo recurrir no lo hiciere no podrá usar esos argumentos después.",
      },
      {
        question: "¿Cómo se impugnan los actos del CNC, del MOPT o de la CGR que afectan un contrato de concesión vigente?",
        answer:
          "Se impugnan en sede contencioso-administrativa contra los actos del Consejo Nacional de Concesiones, del MOPT o de la Contraloría que afecten el contrato o su ejecución. La demanda se rige por el CPCA: pretensiones del artículo 42 (anulación, restablecimiento, indemnización por daños y perjuicios) y, cuando hay urgencia y peligro de daño irreparable, medidas cautelares del artículo 19. En lo pecuniario aplica además el régimen de responsabilidad de la Administración de la LGAP (arts. 190 a 194), incluido el equilibrio económico-financiero del contrato.",
      },
      {
        question: "¿Qué pasa con mi contrato vigente bajo Ley 7762 cuando entre en vigor la Ley Marco APP?",
        answer:
          "Su contrato continúa bajo la Ley 7762. El transitorio I del expediente 24.009 establece que los procedimientos con acto de adjudicación firme, los contratos ya formalizados y los contratos en ejecución bajo la Ley 7762 se ejecutan según esa misma ley, salvo que las partes —de manera necesariamente conjunta— declaren la conveniencia de aplicar la nueva ley. La ANAPP asumirá las funciones del antiguo CNC en estos casos. Los procedimientos en licitación sin adjudicación firme se ajustarán al nuevo marco, con excepciones cuando ya hay ofertas o adjudicación no firme.",
      },
    ],
  },
  "compliance-publico-anticorrupcion": {
    hookHeadline: "¿Está expuesto al régimen anticorrupción al contratar con el Estado o ejercer un cargo público?",
    hookSubtext:
      "La Ley 8422 articula tres planos: prevención (prohibiciones, incompatibilidades, declaración jurada de bienes), sanción administrativa ante la Contraloría y persecución penal por delitos contra los deberes de la función pública. Las reformas recientes endurecieron la persecución: la Ley 10437 (2024) protege al denunciante, la Ley 10523 (2024) cruzó las declaraciones con la información del Banco Central sobre beneficiarios finales, la Ley 10691 (2025) reforzó la prescripción y la Ley 10373 (2023, OCDE) incorporó un capítulo entero de medidas cautelares inmediatas, decomiso y destino del dinero decomisado. Defendemos a funcionarios y a empresas en sede administrativa y penal.",
    scenariosTitle: "¿Cuándo necesita un abogado en compliance y anticorrupción?",
    triggerScenarios: [
      "Va a asumir un cargo público sujeto a declaración jurada y necesita prepararla correctamente",
      "La Contraloría le previno por no presentar la declaración o le pidió aclaraciones",
      "Está investigado por la CGR en un procedimiento de responsabilidad administrativa",
      "El Ministerio Público le sigue causa por enriquecimiento ilícito, sobreprecio, tráfico de influencias o soborno transnacional",
      "Las autoridades le congelaron cuentas o bienes en aplicación del artículo 67 de la Ley 8422",
      "Su empresa contrata con el Estado y necesita un programa de cumplimiento que la blinde",
      "Fue denunciado por una persona protegida bajo la Ley 10437 y necesita defenderse sin afectar la confidencialidad",
    ],
    services: [
      {
        title: "Declaración jurada de bienes y régimen patrimonial",
        description:
          "Preparamos las declaraciones inicial, anual y final ante la Contraloría (arts. 21, 22 y 29 de la Ley 8422) con el detalle que exige el contenido del artículo 29: derechos reales sobre inmuebles, muebles, participaciones societarias, bonos, certificados, cuentas, fondos de pensión, rentas, activos intangibles y pasivos. Acompañamos también las constataciones de veracidad reforzadas tras la Ley 10523/2024, cuando el cruce con beneficiarios finales del Banco Central genera consultas o ampliaciones.",
      },
      {
        title: "Régimen de prohibiciones e incompatibilidades",
        description:
          "Asesoramos sobre la prohibición del ejercicio liberal (art. 14), el desempeño simultáneo de cargos públicos (art. 17), las incompatibilidades del artículo 18 —cargos directivos, representación, apoderamiento y participación accionaria— y su levantamiento ante la Contraloría (art. 19); también sobre la «puerta giratoria» del artículo 53 (un año de prohibición tras contratos administrativos relevantes) y el régimen de obsequios del artículo 20.",
      },
      {
        title: "Defensa en procedimientos de responsabilidad administrativa ante la CGR",
        description:
          "Representamos al funcionario o al exfuncionario investigado por las causales del artículo 38 (incumplimiento del régimen de prohibiciones, falta de veracidad o simulación en la declaración, conflicto de intereses, debilitamiento del control interno, percepción indebida de retribuciones, entre otras), con la mira en las sanciones del artículo 39 y en los criterios del artículo 41 (dolo o culpa grave, reincidencia, impacto en el servicio).",
      },
      {
        title: "Defensa penal por delitos contra los deberes de la función pública",
        description:
          "Defendemos ante el Ministerio Público y los tribunales penales en causas por enriquecimiento ilícito (art. 45), falsedad en la declaración (art. 46), legislación o administración en provecho propio (art. 48), sobreprecio irregular (art. 49), falsedad en la recepción de bienes o servicios (art. 50), pago irregular de contratos (art. 51), tráfico de influencias (art. 52), soborno transnacional (art. 55) y fraude de ley en función administrativa (art. 58), con atención a la inhabilitación del artículo 59 y a la prescripción reforzada del artículo 62 (Ley 10691/2025).",
      },
      {
        title: "Medidas cautelares, congelamiento de cuentas y decomiso",
        description:
          "Impugnamos y modulamos las medidas cautelares de los artículos 65 y 67 de la Ley 8422 —congelamiento e inmovilización de cuentas, productos financieros y bienes muebles e inmuebles— dentro de los plazos cortos del propio capítulo VI (24 horas la UIF, 10 días hábiles el Ministerio Público, 5 días hábiles el juez), y atendemos el procedimiento de comiso del artículo 68 y la liquidación de los bienes administrados por el ICD (art. 69).",
      },
      {
        title: "Programas de cumplimiento para contratistas del Estado",
        description:
          "Diseñamos para empresas y consorcios que contratan con el Estado programas integrales de cumplimiento anticorrupción: códigos de conducta, canal de denuncias con la confidencialidad reforzada del artículo 8 de la Ley 8422 y la Ley 10437/2024, debida diligencia de contrapartes, capacitación documentada, matriz de riesgo por modalidad de contratación, auditoría interna y protocolos de respuesta ante medidas cautelares de la UIF.",
      },
    ],
    whatsappMessage:
      "Hola, tengo una consulta sobre compliance público o un asunto de la Ley 8422 (anticorrupción).",
    commercialFaq: [
      {
        question: "¿Tener un programa de cumplimiento sirve de algo si la empresa es investigada?",
        answer:
          "Sí. Un programa serio de cumplimiento aporta dos cosas en el procedimiento administrativo y penal. En sede administrativa, refleja el deber de control interno cuya omisión es ella misma causal de responsabilidad (art. 38.d de la Ley 8422) y permite documentar la diligencia debida en la selección y vigilancia de personas, lo que pesa al valorar la culpa grave que exige el artículo 41. En sede penal, demuestra ausencia o reducción de la culpabilidad organizacional y crea base probatoria para defender la actuación de buena fe del representante. La Ley N.° 9699 de responsabilidad penal de personas jurídicas regula además, con sus propias reglas, los efectos atenuantes del cumplimiento empresarial; ese análisis lo hacemos caso por caso con el texto literal de esa ley.",
      },
      {
        question: "¿Puede la Contraloría exigirle declaración jurada a alguien que no está en la lista del artículo 21?",
        answer:
          "Sí. El artículo 23 de la Ley 8422 autoriza a la Contraloría —y al Ministerio Público, por medio del fiscal general— a exigir por orden singular y en cualquier momento la declaración jurada a todo funcionario público que administre o custodie fondos públicos. Desde la fecha de la orden corren los plazos, términos y sanciones de la ley. Por eso conviene preparar la situación patrimonial aun en cargos no listados que manejen fondos públicos.",
      },
      {
        question: "¿Qué pasa si congelan las cuentas de mi empresa por aplicación del artículo 67?",
        answer:
          "Es lo que más afecta operativamente. La Ley N.° 10373 de 2023 incorporó el artículo 67 a la Ley 8422: cuando la UIF lo comunica formalmente, las entidades financieras y el Registro Nacional inmovilizan productos financieros, dinero, activos y bienes muebles o inmuebles vinculados a la investigación, e informan a la UIF en veinticuatro horas. El Ministerio Público tiene diez días hábiles para solicitar al juez la medida formal, y el juez cinco días hábiles para resolverla. La defensa dentro de esos plazos —para impugnar la causa de la medida, su proporcionalidad o su alcance— es la diferencia entre conservar liquidez operativa y verla paralizada por meses. En paralelo se trabaja el comiso del artículo 68 y el destino del dinero decomisado del artículo 70.",
      },
      {
        question: "¿Cuánto tiempo dura la persecución penal por delitos de corrupción tras la reforma de 2025?",
        answer:
          "La Ley N.° 10691, publicada en mayo de 2025, reformó el artículo 62 de la Ley 8422. Hoy una vez interrumpida la prescripción los plazos del artículo 31 del CPP vuelven a correr íntegros, sin reducción; se añaden como causales de interrupción la declaratoria de ilegalidad de la función administrativa y la anulación de actos y contratos vinculados al delito —en vía judicial o administrativa—; el plazo se suspende mientras dure una asistencia legal internacional; y el plazo de prescripción de los delitos del título XV del Código Penal y del capítulo V de la Ley 8422 remite al inciso d) del artículo 31 del CPP. Resultado práctico: causas que antes prescribían por inactividad procesal hoy pueden mantenerse vivas por más tiempo, y la defensa debe diseñarse pensando en horizontes más largos.",
      },
    ],
  },
};
