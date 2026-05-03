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
};
