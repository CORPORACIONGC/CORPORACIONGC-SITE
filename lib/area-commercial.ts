export type CommercialLanding = {
  hookHeadline: string;
  hookSubtext: string;
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
};
