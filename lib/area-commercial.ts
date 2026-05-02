export type CommercialLanding = {
  hookHeadline: string;
  hookSubtext: string;
  triggerScenarios: string[];
  services: { title: string; description: string }[];
  pricingNote: string;
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
    pricingNote:
      "Los honorarios se acuerdan caso por caso según complejidad, urgencia y cuantía afectada. Trabajamos con honorarios fijos, por etapas o con éxito condicionado, según la naturaleza del asunto. La consulta inicial es sin costo y permite definir el esquema más adecuado.",
    whatsappMessage:
      "Hola, necesito asesoría urgente sobre una medida cautelar contra el Estado. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cuánto tarda en resolverse una medida cautelar?",
        answer:
          "Las medidas provisionalísimas (art. 21 CPCA) pueden dictarse en cuestión de horas, sin audiencia previa a la parte contraria. Las cautelares ordinarias requieren audiencia oral, generalmente dentro de los días siguientes a la solicitud. La rapidez efectiva depende de la urgencia demostrada y del Tribunal de turno.",
      },
      {
        question: "¿Cuánto cuesta solicitar una medida cautelar?",
        answer:
          "Los honorarios se establecen caso por caso según la complejidad técnica, la urgencia y la cuantía afectada. Recibimos casos con honorarios fijos, por etapas procesales o con éxito condicionado. La consulta inicial es sin costo y nos permite definir el esquema más adecuado al caso concreto.",
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
};
