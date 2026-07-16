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
          "Depende del tipo de reclamo. Para impugnar conductas administrativas (actos, actuaciones materiales u omisiones), el artículo 39 del CPCA establece un plazo de caducidad de un año: como regla se cuenta desde el día siguiente a la notificación del acto, para actuaciones materiales desde la cesación de sus efectos, y cuando la conducta produce efectos continuados el plazo no comienza a correr hasta que esos efectos cesen — distinción a menudo pasada por alto que puede mantener viva una causa que parecía perdida. Para reclamos puramente indemnizatorios contra la Administración (responsabilidad patrimonial del Estado), el artículo 198 de la LGAP establece una prescripción de cuatro años, contados a partir del hecho que motiva la responsabilidad, según lo ha confirmado la Sala Primera.",
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
      {
        question: "¿Necesito un abogado especialista en procedimientos administrativos sancionatorios?",
        answer:
          "La ley permite comparecer sin abogado, pero la comparecencia oral funciona como un juicio: se interrogan testigos y peritos, se objeta prueba y se formulan conclusiones verbalmente, bajo sanción de caducidad si se omiten (art. 317). Los vicios que anulan una sanción son técnicos y se alegan en momentos y por vías precisas. Un especialista en derecho administrativo detecta desde el inicio las nulidades, los problemas de competencia del órgano director y los defectos de la imputación que definen el caso.",
      },
      {
        question: "¿Puede caducar el procedimiento en mi contra por el paso del tiempo?",
        answer:
          "Sí. Si el procedimiento iniciado de oficio se paraliza por más de seis meses por causa imputable a la Administración, se produce la caducidad y debe ordenarse su archivo (art. 340). A ello se suman los plazos de prescripción de la potestad sancionatoria, que varían según el régimen aplicable. Antes de asumir que el caso sigue vivo, conviene que un especialista revise el expediente: el tiempo transcurrido es, con frecuencia, una defensa completa.",
      },
      {
        question: "¿Se puede suspender la multa o la sanción mientras se discute su validez?",
        answer:
          "Sí. En la vía contencioso-administrativa puede solicitarse una medida cautelar —incluso antes de presentar la demanda— para suspender los efectos de la sanción mientras el tribunal examina su legalidad (arts. 19 a 30 del CPCA). Para una empresa cuya operación depende de un permiso, o para un servidor destituido, esa suspensión evita que la sanción se ejecute antes de que un juez la revise.",
      },
    ],
    relatedArticleSlug: "defensa-procedimiento-administrativo-sancionatorio",
    relatedArticleLabel:
      "Guía de defensa: me abrieron un procedimiento administrativo sancionatorio, ¿cómo defenderse?",
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
        question: "Me rechazaron o me excluyeron la oferta, ¿qué puedo hacer?",
        answer:
          "Primero hay que determinar si la exclusión se debió a un defecto subsanable (art. 50): si la Administración no le dio la oportunidad de subsanar, ese es un vicio alegable. Luego, la vía depende del procedimiento: en licitación mayor, recurso de apelación ante la Contraloría dentro de los ocho días hábiles siguientes a la comunicación del acto final; en licitación menor o subasta inversa, recurso de revocatoria en cinco días hábiles. En el recurso deberá acreditar su “mejor derecho”: que su oferta era elegible y que, corregido el vicio, usted resultaría adjudicatario. Ese análisis debe hacerse de inmediato — el plazo corre desde la notificación.",
      },
      {
        question: "Después de la Contraloría, ¿puedo acudir a los tribunales?",
        answer:
          "Sí. La resolución que resuelve por el fondo el recurso de objeción o de apelación da por agotada la vía administrativa (arts. 96 y 98). A partir de ese momento procede la demanda ante la jurisdicción contencioso-administrativa, donde además puede solicitarse una medida cautelar para proteger su posición mientras se resuelve el caso.",
      },
    ],
    relatedArticleSlug: "recursos-contratacion-publica-objecion-apelacion-revocatoria",
    relatedArticleLabel:
      "Guía completa: objeción, apelación o revocatoria — qué recurso corresponde, ante quién y en qué plazo",
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
  "asesoria-regulatoria": {
    hookHeadline: "¿Necesita redactar o reformar un reglamento que aguante el control jurisdiccional?",
    hookSubtext:
      "Municipalidades, colegios profesionales, instituciones autónomas y ministerios nos consultan constantemente. Redactamos el reglamento completo, acompañamos el procedimiento de aprobación (audiencias del artículo 361 de la LGAP, consulta de diez días, información pública, publicación) y, si después es impugnado en el contencioso o en la Sala Constitucional, lo defendemos. La ventaja decisiva es conocer desde adentro qué hace caer un reglamento: con esa lectura, lo diseñamos para resistir el escrutinio desde la primera versión.",
    scenariosTitle: "¿Cuándo necesita asesoría en redacción de reglamentos?",
    triggerScenarios: [
      "Una municipalidad necesita redactar o reformar un reglamento autónomo o municipal",
      "Un colegio profesional debe actualizar su código de ética, reglamento disciplinario o arancelario",
      "Una institución autónoma quiere modernizar su reglamento de organización y servicio",
      "Un ministerio prepara un decreto ejecutivo y necesita garantizar la legalidad y constitucionalidad",
      "El reglamento vigente fue impugnado y se requiere defenderlo en el contencioso o ante la Sala IV",
      "Hay duda sobre si una materia se puede regular por reglamento o requiere ley formal",
      "El proceso de consulta pública (LGAP art. 361) fue omitido o defectuoso y hay riesgo de nulidad",
    ],
    services: [
      {
        title: "Redacción integral de reglamentos",
        description:
          "Diseñamos y redactamos reglamentos completos —ejecutivos, autónomos, municipales y de colegios profesionales—, con análisis previo del marco habilitante, jerarquía de fuentes (art. 6 LGAP), límites del reglamento autónomo (arts. 19.2, 59.2 y 124 LGAP) y articulación con la legislación sectorial. Entregamos texto final, exposición de motivos y memoria técnica.",
      },
      {
        title: "Dictámenes jurídicos sobre proyectos normativos",
        description:
          "Emitimos dictámenes técnicos sobre la constitucionalidad y legalidad de proyectos de reglamento, identificando los frentes de riesgo (reserva de ley, exceso de la potestad reglamentaria, vicios de procedimiento, contradicciones con normas superiores) y proponiendo los ajustes necesarios antes de la aprobación.",
      },
      {
        title: "Acompañamiento del procedimiento de aprobación",
        description:
          "Conducimos el procedimiento especial de elaboración del Título IX de la LGAP: audiencia a entidades descentralizadas (art. 361.1), consulta a entidades representativas de intereses afectados con plazo de diez días (art. 361.2), información pública cuando corresponde (art. 361.3), consignación expresa de normas reformadas o derogadas (art. 362) y remisión a Ministros con ocho días de antelación cuando se requiera aprobación del Consejo de Gobierno (art. 363).",
      },
      {
        title: "Reglamentos de colegios profesionales y entes públicos no estatales",
        description:
          "Diseñamos códigos de ética, reglamentos disciplinarios, reglamentos electorales y reglamentos arancelarios para colegios profesionales, con atención a la reserva de ley sancionatoria (art. 124 LGAP), las garantías del debido proceso interno (arts. 39 y 41 de la Constitución) y la articulación con la jurisdicción contencioso-administrativa que conoce de la impugnación de los actos del colegio.",
      },
      {
        title: "Reforma integral de cuerpos normativos",
        description:
          "Auditamos reglamentos vigentes desactualizados o incoherentes, identificamos contradicciones con la legislación posterior y producimos una reforma integral o un texto sustitutivo, con plan de transición y régimen transitorio para preservar situaciones jurídicas consolidadas.",
      },
      {
        title: "Defensa del reglamento ante impugnaciones posteriores",
        description:
          "Defendemos al ente emisor ante la impugnación directa en el contencioso (CPCA art. 10.2), la acción de inconstitucionalidad ante la Sala Constitucional (Ley 7135, arts. 73 a 95) y la impugnación incidental en casos concretos. Contestamos demandas, rendimos informes ante la Sala IV y articulamos el expediente administrativo de respaldo del reglamento.",
      },
    ],
    whatsappMessage:
      "Hola, necesitamos asesoría para redactar (o defender) un reglamento o disposición de carácter general.",
    commercialFaq: [
      {
        question: "¿Puede una municipalidad o un colegio profesional contratarnos para redactar su reglamento?",
        answer:
          "Sí. La redacción técnica de un reglamento es asistencia profesional especializada y se contrata bajo la Ley General de Contratación Pública (Ley N.° 9986). El acto formal de aprobación —acuerdo del Concejo Municipal, acuerdo de Junta Directiva del colegio profesional o decreto ejecutivo— sigue siendo competencia exclusiva del órgano titular; lo que se contrata es el trabajo profesional de diseño, redacción, dictamen y acompañamiento del procedimiento.",
      },
      {
        question: "¿Cuánto demora redactar un reglamento completo, con consulta pública incluida?",
        answer:
          "Depende del tamaño y de la complejidad. En la práctica, un reglamento medio pasa por cuatro fases: diagnóstico y marco habilitante (dos a tres semanas), borrador y revisión interna (tres a cinco semanas), procedimiento de elaboración con audiencias y consulta de diez días del artículo 361 de la LGAP, y cierre con informe de observaciones y texto final para aprobación. Trabajamos con cronograma y entregables definidos desde el inicio.",
      },
      {
        question: "¿Qué pasa si descubrimos que el reglamento vigente tiene vicios?",
        answer:
          "Hay dos rutas, según la gravedad. Si los vicios son sustanciales —invasión de reserva de ley, regulación de penas o tributos en contra del artículo 124 de la LGAP, omisión de la consulta del artículo 361—, lo prudente es promover su reforma o sustitución y, si ya está produciendo efectos lesivos, anularlo por sus propias vías (revisión de oficio del artículo 173 LGAP cuando proceda). Si los vicios son menores, se corrigen mediante reforma parcial conservando la vigencia del cuerpo principal. En todos los casos diseñamos un régimen transitorio para no afectar situaciones jurídicas consolidadas.",
      },
      {
        question: "Si después de aprobado lo impugnan, ¿pueden defenderlo ustedes?",
        answer:
          "Sí, y de hecho la línea editorial del despacho es esa: diseñamos el reglamento pensando en cómo se defenderá. Contestamos demandas de impugnación directa en el contencioso (CPCA art. 10.2), rendimos informes ante la Sala Constitucional en acciones de inconstitucionalidad (Ley 7135, arts. 73 a 95) y oponemos las defensas pertinentes a la pretensión de inaplicación incidental en casos concretos. El expediente administrativo de respaldo del reglamento —que documenta la audiencia del artículo 361, las observaciones recibidas y su tratamiento, y la motivación técnica— es el activo decisivo de esa defensa, y por eso lo construimos desde la fase de redacción.",
      },
    ],
  },
  "defensa-regulatoria-sectorial": {
    hookHeadline: "¿Está su empresa investigada o sancionada por un regulador sectorial?",
    hookSubtext:
      "Cada superintendencia y cada órgano regulador tiene su propio régimen sancionatorio, sus propios plazos cortos y sus propios criterios de prueba. Las sanciones llegan a un dos por ciento del patrimonio en el sector financiero, al cinco por ciento del patrimonio en valores y en seguros, e involucran a los directivos personalmente con inhabilitación de hasta cinco años. La defensa eficaz exige conocer desde adentro el procedimiento de cada regulador y cómo se llega al contencioso. Defendemos empresas y directivos ante Coprocom, SUGEF, SUGEVAL, SUGESE, SUPEN, Ministerio de Salud, Senasa y SFE.",
    scenariosTitle: "¿Cuándo necesita un abogado en defensa regulatoria sectorial?",
    triggerScenarios: [
      "La Coprocom le notificó la apertura de un procedimiento por prácticas monopolísticas",
      "Está evaluando acogerse al programa de clemencia incorporado por la Ley 9736",
      "Su entidad financiera fue calificada en irregularidad de grado dos o tres por SUGEF",
      "SUGEVAL le notificó un procedimiento por uso de información privilegiada o normas de conducta",
      "SUGESE abrió procedimiento contra su entidad aseguradora o intermediario de seguros",
      "Es directivo de una entidad supervisada y le notificaron procedimiento personal",
      "Necesita impugnar en sede contenciosa una sanción regulatoria firme",
    ],
    services: [
      {
        title: "Defensa ante la Comisión para Promover la Competencia (Coprocom)",
        description:
          "Representamos a empresas en investigaciones por prácticas monopolísticas absolutas (art. 11 Ley 7472) y relativas (art. 12), con análisis de mercado relevante y poder sustancial (arts. 13 a 15) y, cuando proceda, evaluación de acogimiento al programa de clemencia incorporado por la Ley 9736.",
      },
      {
        title: "Defensa ante SUGEF y CONASSIF en el sector financiero",
        description:
          "Atendemos procedimientos sancionatorios bajo el régimen de los artículos 155 (entidades) y 155 bis (directivos) de la Ley 7558, los procesos de intervención por irregularidad de grado tres (art. 139), y los recursos verticales contra resoluciones del superintendente ante el Conassif.",
      },
      {
        title: "Defensa ante SUGEVAL en el mercado de valores",
        description:
          "Defendemos a emisores, puestos de bolsa, sociedades administradoras de fondos de inversión, agentes de bolsa y demás participantes del mercado en infracciones muy graves, graves y leves (arts. 157, 159 y 161 de la Ley 7732), con atención al régimen de información privilegiada (arts. 102 y 103) y a las sanciones adicionales a directivos del artículo 163.",
      },
      {
        title: "Defensa ante SUGESE en el mercado de seguros",
        description:
          "Representamos a entidades aseguradoras, reaseguradoras, intermediarios y proveedores de servicios auxiliares en procedimientos sancionatorios (arts. 36 a 39 de la Ley 8653) y atendemos los casos de cancelación de autorización y liquidación (arts. 32 a 34), así como las imputaciones por ejercicio ilegal de la actividad (art. 42).",
      },
      {
        title: "Defensa ante SUPEN en el régimen de pensiones",
        description:
          "Defendemos a operadoras de pensiones complementarias y a entidades supervisadas en procedimientos por infracciones muy graves, graves y leves (arts. 46 a 51 de la Ley 7983), incluidas las medidas precautorias correctivas, los planes de saneamiento y los procesos de intervención administrativa.",
      },
      {
        title: "Defensa ante Ministerio de Salud, Senasa y Servicio Fitosanitario",
        description:
          "Atendemos procedimientos sanitarios, veterinarios y fitosanitarios: medidas especiales del Ministerio de Salud (arts. 355 a 366 de la Ley 5395), procedimiento sancionatorio del Senasa ante su Tribunal de Procedimiento Administrativo Sancionador (arts. 99 a 104 de la Ley 8495) y contravenciones del Servicio Fitosanitario del Estado (arts. 75 a 77 de la Ley 7664).",
      },
    ],
    whatsappMessage:
      "Hola, mi empresa enfrenta un procedimiento ante un regulador sectorial y necesito asesoría especializada.",
    commercialFaq: [
      {
        question: "¿Qué hago si la Coprocom me notifica una investigación por acuerdo con competidores?",
        answer:
          "Lo primero es identificar si los hechos investigados encajan en alguno de los supuestos del artículo 11 de la Ley 7472 —fijación de precios, limitación de producción, división de mercados, coordinación en licitaciones, abstención coordinada o intercambio de información con esos fines—. Si encajan, son prácticas monopolísticas absolutas, declaradas nulas de pleno derecho. En esas primeras setenta y dos horas hay que evaluar tres rutas: el acogimiento al programa de clemencia incorporado por la Ley 9736 (que puede llevar a reducción o exoneración de sanción al primero que coopere), la solidez probatoria de lo que la Coprocom tiene en el expediente, y la viabilidad de reconducir el caso al análisis de prácticas relativas del artículo 12, donde sí caben defensas por mercado relevante y poder sustancial (arts. 13 a 15). Esa decisión inicial define el resto del procedimiento.",
      },
      {
        question: "Si soy directivo de una entidad supervisada por SUGEF, ¿puedo ser sancionado personalmente?",
        answer:
          "Sí. El artículo 155 bis de la Ley 7558 permite sancionar a miembros del órgano de dirección, gerente, subgerentes o puestos de similar naturaleza, representantes legales, y auditor y subauditor internos cuando resulten responsables, por dolo o culpa grave, de actuaciones que impacten negativamente la situación financiera de la entidad, pongan en peligro su estabilidad, oculten información, distorsionen estados financieros, autoricen operaciones fraudulentas o afecten intereses de ahorrantes. Las sanciones son multa de diez a cien salarios base e inhabilitación para ser miembro del órgano de dirección, gerente o auditor interno de cualquier entidad o empresa supervisada hasta por tres años. Por eso la defensa debe disociar desde el primer escrito la conducta de la entidad de la conducta personal de cada directivo: rara vez los criterios de imputación se solapan exactamente.",
      },
      {
        question: "¿Cuál es la diferencia entre la inestabilidad o irregularidad financiera de grados uno, dos y tres?",
        answer:
          "El artículo 136 de la Ley 7558 los define con criterios distintos. El grado uno corresponde a situaciones de inestabilidad leve que pueden ser superadas con medidas correctivas de corto plazo; la Superintendencia convoca al directorio de la entidad, le señala las irregularidades y otorga un plazo prudencial para corregirlas (art. 139.a). El grado dos exige la presentación de un plan de saneamiento aprobado por el superintendente, que es vinculante para la entidad (art. 139.b). El grado tres habilita al Conassif para decretar la intervención por resolución fundada y se aplica en casos de operaciones fraudulentas, suspensión de pagos, incumplimiento de suficiencia patrimonial, lavado de dinero o reducción del patrimonio en más del cincuenta por ciento (art. 136.d). Cada grado abre distintas opciones de defensa y de negociación con la Superintendencia.",
      },
      {
        question: "Una vez sancionada por el regulador, ¿qué opciones tengo para impugnar?",
        answer:
          "Dos vías principales, que pueden ejercerse en paralelo. La administrativa: revocatoria ante el superintendente y apelación ante el Conassif, con plazos cortos de cinco días hábiles (arts. 152 y 153 de la Ley 7558 para SUGEF; equivalentes en valores y seguros). Una vez agotada la vía administrativa, la jurisdicción contencioso-administrativa con las pretensiones del artículo 42 del CPCA (anulación, restablecimiento, indemnización por daños y perjuicios) y, cuando hay urgencia, medidas cautelares del artículo 19 del CPCA. Si la sanción vulnera derechos fundamentales —debido proceso, derecho de defensa, proporcionalidad, non bis in idem—, procede recurso de amparo ante la Sala Constitucional (Ley 7135, arts. 29 a 56). El artículo 168 de la Ley 7732 confirma que la potestad sancionatoria es independiente de las acciones civiles o penales, por lo que un mismo hecho puede generar procesos paralelos que deben coordinarse en una estrategia única.",
      },
    ],
  },
  "informes-juridicos-dictamenes": {
    hookHeadline: "¿Necesita una opinión jurídica externa para respaldar una decisión sensible de su institución?",
    hookSubtext:
      "Municipalidades, instituciones autónomas, empresas públicas, ministerios y colegios profesionales nos consultan permanentemente para emitir dictámenes externos sobre la legalidad de actos, contratos, reglamentos y procedimientos de alto impacto. Cada decisión administrativa debe poder defenderse después ante la Contraloría, el contencioso-administrativo y la Sala Constitucional. La diferencia de un dictamen útil de uno meramente correcto es que el primero se escribe sabiendo cómo lo van a leer esos tres órganos de control.",
    scenariosTitle: "¿Cuándo necesita un dictamen jurídico externo?",
    triggerScenarios: [
      "Una decisión institucional de alto impacto patrimonial o político requiere respaldo técnico",
      "La asesoría jurídica interna emitió un criterio que la junta o concejo quiere contrastar",
      "Hay riesgo de responsabilidad personal del jerarca o de los miembros del órgano colegiado",
      "Se prepara o se cuestiona la nulidad de un acto administrativo en sede administrativa o contenciosa",
      "Se va a aprobar un reglamento, contrato o procedimiento sensible y se quiere blindarlo",
      "La Contraloría, la Defensoría o la Asamblea Legislativa están observando el expediente",
      "Un órgano necesita una segunda opinión técnica frente a la consulta a la Procuraduría",
    ],
    services: [
      {
        title: "Dictámenes sobre legalidad de actos administrativos",
        description:
          "Análisis previo a la emisión del acto o de revisión posterior: cumplimiento del bloque de legalidad (art. 11 LGAP), elementos de validez de los artículos 128 a 136, régimen de nulidades (arts. 158 a 189), procedencia de la revisión de oficio por nulidad evidente y manifiesta del artículo 173 con dictamen favorable de la PGR o la CGR, o de la declaratoria de lesividad como paso previo a la demanda de anulación.",
      },
      {
        title: "Dictámenes en contratación administrativa",
        description:
          "Revisión técnica del cartel y del sistema de evaluación antes de su publicación; análisis de la motivación del acto de adjudicación; viabilidad de modificaciones contractuales dentro de los topes de la Ley 9986; refrendo del contrato ante la Contraloría (arts. 20 y 21 de la Ley 7428); riesgos de los recursos de objeción y apelación; cierre del contrato y liquidación.",
      },
      {
        title: "Dictámenes en procedimientos administrativos y régimen disciplinario",
        description:
          "Detección de vicios procesales —notificación, audiencia oral del art. 309 LGAP, prueba, motivación, sanción— antes de la firmeza del acto. Especial atención al régimen disciplinario del funcionario (arts. 211 a 213 LGAP) y a su articulación con la responsabilidad civil del artículo 199 y siguientes.",
      },
      {
        title: "Dictámenes en materia presupuestaria y de Hacienda Pública",
        description:
          "Análisis ante la Contraloría: aprobación e improbación presupuestaria (art. 18 Ley 7428), dictámenes sobre proyectos de presupuesto y contratos sujetos a refrendo (art. 27), impugnabilidad directa de los actos finales de la CGR ante el contencioso (art. 34), y articulación con la Ley 8131 de Administración Financiera.",
      },
      {
        title: "Dictámenes sobre potestad reglamentaria y normativa propia",
        description:
          "Evaluación de la conformidad de un proyecto de reglamento con la jerarquía normativa (art. 6 LGAP), los límites del artículo 19.2 (reserva de ley en derechos fundamentales) y del artículo 124 (prohibición de penas y cargas por vía reglamentaria), y el cumplimiento del procedimiento de elaboración del Título IX (arts. 361 a 363 LGAP).",
      },
      {
        title: "Dictámenes de riesgo patrimonial y responsabilidad personal del jerarca",
        description:
          "Cuantificación del riesgo patrimonial de la institución (arts. 190 a 198 LGAP) y de la exposición personal del funcionario por dolo o culpa grave (arts. 199 a 213). Incluye análisis del régimen sancionador de la Ley Orgánica de la CGR (arts. 68 y siguientes) cuando la materia involucra Hacienda Pública.",
      },
    ],
    whatsappMessage:
      "Hola, somos una institución pública y necesitamos un dictamen jurídico externo sobre una decisión sensible.",
    commercialFaq: [
      {
        question: "¿Pueden las municipalidades, las instituciones autónomas y los entes descentralizados contratarnos para dictámenes externos?",
        answer:
          "Sí. La contratación de asesoría profesional especializada se adquiere bajo el régimen de la Ley General de Contratación Pública (Ley N.° 9986), en alguna de sus modalidades según el monto y el objeto. El dictamen es un insumo técnico que integra el expediente administrativo: la decisión sigue siendo del órgano competente del ente. Trabajamos rutinariamente bajo esta figura con municipalidades, instituciones autónomas, empresas públicas, colegios profesionales y ministerios.",
      },
      {
        question: "¿Cuánto demora la entrega de un dictamen jurídico externo?",
        answer:
          "Depende del alcance y de la complejidad del asunto. En la práctica, manejamos tres rangos: dictámenes urgentes para asuntos definidos jurídicamente y de alcance acotado, dentro de cinco a diez días hábiles; dictámenes de complejidad media con análisis del expediente, doctrina y jurisprudencia, en dos a cuatro semanas; y dictámenes de gran complejidad o de auditoría jurídica integral, con tres a seis semanas. El plazo se fija desde el inicio del encargo, dentro del propio contrato.",
      },
      {
        question: "¿El dictamen externo blinda al jerarca frente a la responsabilidad personal del artículo 199 de la LGAP?",
        answer:
          "No la elimina automáticamente, pero la atenúa significativamente. El artículo 199 de la LGAP exige dolo o culpa grave del servidor para que pueda repetirse contra él. Cuando el jerarca actúa con base en un dictamen jurídico fundado, recibido de buena fe y razonablemente seguido, la imputación de culpa grave se vuelve mucho más difícil de sostener. El dictamen, incorporado al expediente, opera como prueba documental del análisis técnico que respaldó la decisión; los jueces y la propia Contraloría suelen darle peso al evaluar la conducta personal del jerarca. Es por eso que muchas juntas directivas y concejos lo incorporan como práctica rutinaria antes de decisiones sensibles.",
      },
      {
        question: "¿Se puede usar nuestro dictamen para revocar en sede administrativa un acto declaratorio de derechos?",
        answer:
          "Sí, en los términos del artículo 173 de la LGAP. La Administración puede declarar la nulidad absoluta evidente y manifiesta de un acto declarativo de derechos en su propia sede, sin acudir al proceso de lesividad, siempre que cuente con dictamen favorable y previo de la Procuraduría General de la República o, cuando la materia es de Hacienda Pública, de la Contraloría. Nuestro dictamen externo es un insumo del análisis preparatorio: identifica si efectivamente se está ante una nulidad de ese tipo, dimensiona el riesgo de impugnación y orienta el expediente para que la solicitud a la PGR o la CGR llegue bien planteada. Si la situación no encaja en el artículo 173, el camino es la declaratoria de lesividad y la demanda de anulación en sede contenciosa, donde también acompañamos.",
      },
    ],
  },
  "comercio-internacional": {
    hookHeadline: "¿Le aplicaron un derecho antidumping, una clasificación arancelaria distinta o le frenaron un embarque en aduana?",
    hookSubtext:
      "El comercio internacional costarricense vive un momento de tensión: investigaciones de defensa comercial activas en la región, ajustes de valoración y clasificación en el sistema TICA, y un giro global hacia el proteccionismo arancelario que está reescribiendo cadenas de suministro. En 2023, Costa Rica obtuvo un fallo favorable de un grupo especial de la OMC contra las medidas antidumping de República Dominicana sobre las varillas de acero corrugado (diferencia DS605), prueba de que estos casos se ganan con técnica. Acompañamos a importadores, exportadores, productores nacionales y agentes aduaneros que enfrentan ajustes de la DGA, derechos antidumping o compensatorios, o controversias bajo tratados de libre comercio. Los plazos para recurrir son cortos y la fundamentación técnica decide el resultado.",
    scenariosTitle: "¿Cuándo necesita defensa en comercio internacional o aduanas?",
    triggerScenarios: [
      "La aduana le ajustó el valor en aduana, la clasificación arancelaria o el origen de su mercancía y le exige un pago adicional",
      "Recibió una resolución de la Dirección General de Aduanas que quiere recurrir ante el Tribunal Aduanero Nacional",
      "Sus productos quedaron sujetos a un derecho antidumping o compensatorio en otro país y exporta desde Costa Rica",
      "El sector productor nacional enfrenta importaciones a precios desleales y evalúa solicitar una investigación de defensa comercial",
      "Le negaron un trato arancelario preferencial al amparo del CAFTA-DR u otro TLC por dudas sobre el origen",
      "La administración aduanera le inició un procedimiento sancionatorio o le determinó una obligación tributaria aduanera",
      "Necesita estructurar operaciones de importación, exportación o régimen de zona franca con seguridad jurídica",
      "Una controversia comercial debe ventilarse ante los mecanismos de solución de diferencias de un TLC o de la OMC",
    ],
    services: [
      { title: "Impugnación de ajustes y resoluciones aduaneras", description: "Asumimos los recursos de reconsideración y de apelación ante el Tribunal Aduanero Nacional contra las resoluciones de la Dirección General de Aduanas y las aduanas de control, dentro del plazo de quince días hábiles siguientes a la notificación (art. 198, Ley General de Aduanas, N.° 7557). Litigamos ajustes de valoración, clasificación arancelaria y origen, y agotada la vía administrativa continuamos en sede contencioso-administrativa." },
      { title: "Defensa comercial: antidumping, derechos compensatorios y salvaguardias", description: "Representamos tanto al sector productor nacional que solicita protección como a importadores y exportadores investigados. Tramitamos solicitudes y nos personamos en investigaciones ante el MEIC, autoridad investigadora nacional, conforme al Reglamento Centroamericano sobre Prácticas Desleales de Comercio (Resolución COMIECO N.° 193-2007) y a los Acuerdos de la OMC Antidumping, sobre Subvenciones y Medidas Compensatorias y sobre Salvaguardias." },
      { title: "Solución de controversias bajo TLCs y OMC", description: "Asesoramos en los mecanismos de solución de diferencias del CAFTA-DR (aprobado por Ley N.° 8622, vigente desde el 1.° de enero de 2009) y de los demás tratados suscritos por Costa Rica, así como en el sistema de la OMC. La diferencia DS605 ante la OMC, en que Costa Rica prevaleció contra medidas antidumping sobre varillas de acero, ilustra el tipo de defensa que articulamos." },
      { title: "Trato preferencial, reglas de origen y certificación", description: "Verificamos el cumplimiento de las reglas de origen para el aprovechamiento de preferencias arancelarias al amparo del CAFTA-DR y demás TLCs, defendemos la calificación de origen ante cuestionamientos de la autoridad aduanera y prevenimos contingencias en verificaciones de origen que pueden derivar en el cobro retroactivo de aranceles." },
      { title: "Cumplimiento aduanero y régimen de zonas francas", description: "Estructuramos operaciones de importación, exportación, tránsito y regímenes especiales con apego a la Ley General de Aduanas (N.° 7557) y su reglamento, y asesoramos a empresas bajo el Régimen de Zonas Francas en su relación con PROCOMER y COMEX, creados por la Ley N.° 7638." },
      { title: "Defensa en procedimientos sancionatorios y determinativos", description: "Asumimos la defensa técnica frente a procedimientos sancionatorios y determinativos de la obligación tributaria aduanera, garantizando el debido proceso y articulando la estrategia probatoria desde el inicio del expediente hasta el litigio contencioso-administrativo, cuando corresponda." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría en comercio internacional o derecho aduanero (aduanas, antidumping o TLC) en Costa Rica. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cómo recurro una resolución de la aduana con la que no estoy de acuerdo?",
        answer:
          "La Ley General de Aduanas (N.° 7557) prevé los recursos de reconsideración y de apelación ante el Tribunal Aduanero Nacional contra los actos finales dictados por la Dirección General de Aduanas y las aduanas de control. El plazo para interponerlos es de quince días hábiles contados a partir de la notificación del acto (art. 198), y puede usar uno solo o ambos. El Tribunal Aduanero Nacional es el órgano de alzada que agota la vía administrativa; agotada esta, el asunto puede llevarse a la jurisdicción contencioso-administrativa. Por la cortedad del plazo, conviene actuar de inmediato.",
      },
      {
        question: "¿Quién investiga en Costa Rica el dumping, los subsidios y las salvaguardias?",
        answer:
          "La autoridad investigadora nacional en materia de defensa comercial es el Ministerio de Economía, Industria y Comercio (MEIC), no COMEX. Las investigaciones se rigen por el Reglamento Centroamericano sobre Prácticas Desleales de Comercio (aprobado por Resolución COMIECO N.° 193-2007), complementado por los Acuerdos de la OMC relativos a la aplicación del Artículo VI del GATT (Antidumping), sobre Subvenciones y Medidas Compensatorias y sobre Salvaguardias. La investigación suele iniciarse a solicitud de la rama de producción nacional, aunque la autoridad puede actuar de oficio en casos excepcionales.",
      },
      {
        question: "¿Qué pasa si exporto desde Costa Rica y otro país me impone un derecho antidumping?",
        answer:
          "Puede defenderse en dos planos. En el procedimiento administrativo del país importador, personándose en la investigación para cuestionar el cálculo del margen de dumping, la determinación del daño y los aspectos procesales. Y en el plano interestatal, cuando la medida viola las normas multilaterales, el Estado costarricense puede activar el mecanismo de solución de diferencias de la OMC. Eso ocurrió en la diferencia DS605, donde Costa Rica reclamó contra las medidas antidumping de República Dominicana sobre las varillas de acero corrugado: el informe del grupo especial, distribuido el 27 de julio de 2023, dio la razón a Costa Rica en varias de sus alegaciones.",
      },
      {
        question: "¿Qué riesgo hay si la aduana cuestiona el origen de mi mercancía bajo un TLC?",
        answer:
          "El trato arancelario preferencial de un tratado de libre comercio depende de que la mercancía cumpla las reglas de origen pactadas. Si en una verificación la autoridad aduanera concluye que el origen no se acredita, puede denegar la preferencia y cobrar el arancel de nación más favorecida, en ocasiones de forma retroactiva y con eventuales sanciones. Por eso es clave documentar el origen desde el inicio y atender técnicamente cualquier verificación. En el marco del CAFTA-DR (Ley N.° 8622), los criterios de origen y los procedimientos de verificación son detallados y exigen rigor probatorio.",
      },
      {
        question: "¿En qué se diferencian COMEX, PROCOMER y la Dirección General de Aduanas?",
        answer:
          "El Ministerio de Comercio Exterior (COMEX) define y dirige la política comercial externa y negocia los tratados; PROCOMER es la entidad que promueve exportaciones e inversión y administra trámites como los del Régimen de Zonas Francas. Ambos fueron creados por la Ley N.° 7638 de 1996. La Dirección General de Aduanas, adscrita al Ministerio de Hacienda, es la autoridad que aplica la legislación aduanera en la importación y exportación de mercancías conforme a la Ley General de Aduanas (N.° 7557). Y, como se indicó, la defensa comercial (antidumping, compensatorios y salvaguardias) corresponde al MEIC. Identificar el órgano competente es el primer paso de cualquier estrategia.",
      },
      {
        question: "¿Cómo afecta el giro proteccionista global a las empresas costarricenses?",
        answer:
          "El endurecimiento arancelario y la proliferación de investigaciones de defensa comercial a nivel internacional elevan el riesgo para exportadores e importadores costarricenses: nuevas barreras, ajustes de origen y disputas que antes eran excepcionales hoy son frecuentes. La respuesta no es reactiva sino preventiva: auditar el cumplimiento aduanero, blindar la documentación de origen, anticipar exposiciones a medidas antidumping en mercados de destino y, cuando proceda, activar los mecanismos de los TLCs y de la OMC. Acompañamos esa estrategia con la técnica que exige un litigio comercial moderno.",
      },
    ],
  },
  "gobierno-digital-inteligencia-artificial-datos": {
    hookHeadline: "¿Su institución usa algoritmos para decidir, o la PRODHAB le abrió un procedimiento por datos?",
    hookSubtext:
      "El Estado costarricense ya decide con software: scoring, perfilado, automatización de trámites y, cada vez más, inteligencia artificial. Pero a 2026 Costa Rica NO tiene una ley específica de IA: la materia se rige por la protección de datos (Ley N.° 8968 y su Reglamento, Decreto Ejecutivo N.° 37554-JP), la firma y los documentos electrónicos (Ley N.° 8454), el régimen de Gobierno Digital (Ley N.° 9943) y los principios del derecho administrativo —legalidad, debido proceso y motivación—. Eso convierte cada decisión algorítmica en un terreno jurídicamente delicado. Corporación GC, dirigida por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA (Ley N.° 8508), asesora a instituciones y empresas sobre gobernanza de datos, transparencia algorítmica y defensa ante la PRODHAB.",
    scenariosTitle: "¿Cuándo necesita asesoría en datos, IA y gobierno digital?",
    triggerScenarios: [
      "La PRODHAB le notificó una denuncia o inició un procedimiento por tratamiento indebido de datos personales",
      "Su institución va a automatizar decisiones (perfilado, scoring o IA) que afectan derechos de las personas y necesita blindar la motivación",
      "Recibió un requerimiento de acceso, rectificación o cancelación de datos (autodeterminación informativa) y no sabe cómo responder en plazo",
      "Va a contratar una solución de IA o software con un proveedor y debe regular tratamiento de datos, transferencias y responsabilidades en el cartel y el contrato",
      "Necesita inscribir o actualizar bases de datos ante la PRODHAB o diseñar protocolos de actuación y consentimiento informado",
      "Una decisión administrativa basada en un algoritmo o sistema automatizado le perjudicó y carece de motivación o debido proceso",
      "Su empresa debe alinearse con el estándar europeo (RGPD) ante el proyecto de reforma integral a la Ley N.° 8968 (Expediente N.° 23.097) o con los proyectos de IA en trámite (Expedientes N.° 23.771, 23.919 y 24.484)",
    ],
    services: [
      { title: "Defensa ante la PRODHAB en procedimientos sancionatorios", description: "Representamos a responsables y encargados de tratamiento ante la Agencia de Protección de Datos de los Habitantes (PRODHAB) —órgano de desconcentración máxima adscrito al Ministerio de Justicia y Paz, creado por la Ley N.° 8968— en denuncias, inspecciones y procedimientos por violación al derecho de autodeterminación informativa (art. 4 Ley N.° 8968). Construimos la defensa técnica y, agotada la vía administrativa, impugnamos las resoluciones en sede contencioso-administrativa." },
      { title: "Cumplimiento y gobernanza de datos personales (Ley N.° 8968)", description: "Diseñamos programas de cumplimiento conforme a la Ley N.° 8968 y su Reglamento (Decreto Ejecutivo N.° 37554-JP): protocolos de actuación, consentimiento informado, base de legitimación del tratamiento, manejo de datos sensibles, inscripción de bases de datos ante la PRODHAB y atención de los derechos de acceso, rectificación y cancelación dentro de los plazos de ley." },
      { title: "Gobernanza algorítmica y transparencia en decisiones automatizadas", description: "Como en Costa Rica no existe a 2026 una ley específica de IA, anclamos el uso de algoritmos en el sector público a los principios realmente vigentes: legalidad y reserva de ley (art. 11 Constitución Política y art. 11 LGAP), debido proceso (art. 39 CP) y deber de motivación del acto administrativo. Diseñamos marcos que documenten la lógica de la decisión, la trazabilidad de los datos y la posibilidad de revisión humana, alineados además con la Estrategia Nacional de Inteligencia Artificial 2024-2027 (ENIA) del MICITT." },
      { title: "Firma digital, documentos y trámites electrónicos (Ley N.° 8454)", description: "Asesoramos en la validez y eficacia jurídica de documentos electrónicos, firma digital certificada y notificaciones electrónicas conforme a la Ley N.° 8454, de modo que los actos y contratos electrónicos —públicos y privados— surtan plenos efectos y resistan una eventual impugnación." },
      { title: "Datos e IA en contratación pública y convenios tecnológicos", description: "Revisamos y redactamos las cláusulas de tratamiento de datos, ciberseguridad, propiedad de los modelos, transferencias internacionales y responsabilidad en carteles, contratos y convenios para adquirir software, servicios en la nube o soluciones de IA, articulando la normativa de datos con el régimen de contratación administrativa y de Gobierno Digital (Ley N.° 9943)." },
      { title: "Litigio constitucional y contencioso por decisiones algorítmicas", description: "Impugnamos por la vía de amparo ante la Sala Constitucional o por la vía contencioso-administrativa las decisiones automatizadas o tratamientos de datos que vulneren la intimidad, la autodeterminación informativa o el debido proceso, y reclamamos la responsabilidad patrimonial de la Administración cuando corresponda." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre protección de datos, gobierno digital o uso de inteligencia artificial en Costa Rica. Me gustaría coordinar una consulta con Corporación GC.",
    commercialFaq: [
      {
        question: "¿Existe en Costa Rica una ley de inteligencia artificial?",
        answer:
          "No. A 2026 Costa Rica no cuenta con una ley específica que regule la inteligencia artificial. Lo que existe son tres proyectos de ley en trámite en la Asamblea Legislativa (Expedientes N.° 23.771, 23.919 y 24.484) y una política pública: la Estrategia Nacional de Inteligencia Artificial 2024-2027 (ENIA), presentada por el MICITT en octubre de 2024, que no es una ley sino un instrumento de planificación. Mientras tanto, el uso de IA se rige por el marco realmente vigente: la protección de datos (Ley N.° 8968), la firma y los documentos electrónicos (Ley N.° 8454), el Gobierno Digital (Ley N.° 9943) y los principios del derecho administrativo. Desconfíe de quien le cite una 'Ley de IA' costarricense: no existe.",
      },
      {
        question: "¿Qué es la PRODHAB y cuándo puede sancionarme?",
        answer:
          "La Agencia de Protección de Datos de los Habitantes (PRODHAB) es el órgano —de desconcentración máxima adscrito al Ministerio de Justicia y Paz— creado por la Ley N.° 8968 para velar por el derecho de autodeterminación informativa de las personas (art. 4). Fiscaliza el tratamiento de datos en bases automatizadas o manuales, públicas y privadas, conoce denuncias y puede imponer sanciones administrativas y económicas a los responsables que incumplan la ley o su Reglamento (Decreto Ejecutivo N.° 37554-JP). Si recibe una notificación de la PRODHAB, conviene actuar de inmediato: el procedimiento tiene fases y plazos, y una defensa temprana mejora el resultado.",
      },
      {
        question: "¿Puede una institución pública decidir mi caso con un algoritmo o IA?",
        answer:
          "Puede apoyarse en herramientas automatizadas, pero la decisión sigue siendo un acto administrativo y debe cumplir los mismos requisitos que cualquier otro: estar habilitada por norma (principio de legalidad, art. 11 de la Constitución Política y art. 11 de la Ley General de la Administración Pública), respetar el debido proceso (art. 39 CP) y estar debidamente motivada. Un acto que se limite a invocar el resultado de un algoritmo, sin explicar la lógica ni permitir defensa, es impugnable. Por eso recomendamos a las instituciones documentar la trazabilidad de los datos y prever la revisión humana de las decisiones.",
      },
      {
        question: "¿Qué derechos tengo sobre mis datos personales?",
        answer:
          "La Ley N.° 8968 reconoce el derecho a la autodeterminación informativa (art. 4), que comprende los derechos de acceso, rectificación y cancelación: usted puede saber qué datos suyos tiene una entidad, de dónde los obtuvo y para qué los usa, y exigir que se corrijan o eliminen cuando proceda. El tratamiento de datos sensibles tiene protección reforzada. Si una entidad ignora su solicitud o trata sus datos sin base legítima, puede acudir a la PRODHAB y, según el caso, a la vía de amparo ante la Sala Constitucional.",
      },
      {
        question: "¿Tienen valor legal los documentos firmados digitalmente y los trámites electrónicos?",
        answer:
          "Sí. La Ley N.° 8454, de Certificados, Firmas Digitales y Documentos Electrónicos, establece que los documentos electrónicos y la firma digital certificada tienen eficacia jurídica y se equiparan, en términos generales, a sus equivalentes físicos, tanto en el ámbito privado como en la actuación del Estado y los entes públicos. Lo decisivo es que se cumplan los requisitos técnicos y de certificación: por eso revisamos que sus actos y contratos electrónicos estén bien constituidos y resistan una eventual impugnación.",
      },
      {
        question: "¿Cómo debe regularse el tratamiento de datos cuando se contrata software o IA con un proveedor?",
        answer:
          "El cartel y el contrato deben definir con claridad quién es responsable y quién encargado del tratamiento, las finalidades autorizadas, las medidas de seguridad, el régimen de transferencias —especialmente las internacionales o hacia la nube— y las responsabilidades por incidentes, todo conforme a la Ley N.° 8968 y su Reglamento (Decreto Ejecutivo N.° 37554-JP). En el sector público, esto se articula además con la normativa de contratación administrativa y con el régimen de Gobierno Digital (Ley N.° 9943). Una cláusula bien redactada le evita asumir, por omisión, responsabilidades del proveedor.",
      },
    ],
  },
  "regulacion-ambiental-mercados-carbono": {
    hookHeadline: "¿SETENA frenó su proyecto o necesita estructurar carbono neutralidad sin pisar un vacío legal?",
    hookSubtext:
      "En Costa Rica, ninguna obra que altere el ambiente puede iniciar sin la viabilidad ambiental previa de la SETENA: la evaluación de impacto ambiental es requisito indispensable de arranque (art. 17, Ley Orgánica del Ambiente, Ley N.° 7554), y la Sala Constitucional ha hecho del derecho a un ambiente sano (art. 50 de la Constitución Política) un estándar exigente. Al mismo tiempo, la carbono neutralidad del país descansa en gran medida en decretos y política pública —no en una ley marco de mercados de carbono—, lo que genera incertidumbre para quien quiere compensar, vender créditos o exportar bajo nuevas reglas climáticas. Acompañamos a desarrolladores, industria, agroexportadores y organizaciones que buscan certificarse, en el difícil punto donde el rigor ambiental, el plazo del proyecto y la oportunidad de los mercados de carbono se cruzan.",
    scenariosTitle: "¿Cuándo necesita un abogado en materia ambiental y de carbono?",
    triggerScenarios: [
      "La SETENA le rechazó, archivó o suspendió la viabilidad ambiental de su proyecto",
      "Le exigieron un estudio de impacto ambiental y no sabe en qué categoría cae su obra ni qué instrumento aplica",
      "Recibió una medida cautelar, clausura o denuncia ambiental que paralizó su operación",
      "Un recurso de amparo ante la Sala Constitucional detuvo su proyecto por motivos ambientales",
      "Quiere certificar su organización en carbono neutralidad o compensar emisiones y necesita claridad sobre el régimen aplicable",
      "Va a estructurar, comprar o vender créditos de carbono o Unidades Costarricenses de Compensación y necesita seguridad jurídica",
      "Es agroexportador o industria y debe anticiparse a exigencias climáticas de sus compradores o de la regulación europea de frontera",
    ],
    services: [
      { title: "Tramitación y defensa de la viabilidad ambiental ante SETENA", description: "Gestionamos el proceso de evaluación de impacto ambiental ante la Secretaría Técnica Nacional Ambiental —órgano de desconcentración máxima del MINAE creado por la Ley N.° 7554—, desde la determinación del instrumento aplicable hasta la obtención de la viabilidad. La aprobación previa de SETENA es requisito indispensable para iniciar actividades, obras o proyectos que alteren el ambiente (art. 17, Ley N.° 7554), de modo que estructuramos el expediente para evitar prevenciones, archivos y retrasos costosos." },
      { title: "Impugnación de resoluciones de SETENA, MINAE y SINAC", description: "Recurrimos en vía administrativa y contencioso-administrativa las resoluciones que rechazan la viabilidad ambiental, imponen medidas, ordenan clausuras o sancionan. Llevamos el caso ante el Tribunal Contencioso Administrativo y, cuando corresponde, defendemos o impugnamos actuaciones del Sistema Nacional de Áreas de Conservación (SINAC), integrado bajo la Ley de Biodiversidad (Ley N.° 7788)." },
      { title: "Defensa y litigio en amparos ambientales ante la Sala Constitucional", description: "El derecho a un ambiente sano y ecológicamente equilibrado tiene rango constitucional (art. 50 de la Constitución Política) y la Sala Constitucional ha sido muy activa en suspender proyectos. Asumimos tanto la defensa de proyectos amparados como la promoción de recursos cuando una actuación administrativa lesiona derechos ambientales, con la experiencia de un equipo dirigido por un ex-Magistrado de la Corte Suprema." },
      { title: "Asesoría en carbono neutralidad y mercados de carbono", description: "Le explicamos con honestidad el régimen vigente: la carbono neutralidad nacional se articula principalmente mediante el Programa País Carbono Neutralidad 2.0 (Decreto Ejecutivo N.° 41122-MINAE) y el Plan Nacional de Descarbonización 2018-2050 —instrumentos de política y decreto, no una ley marco de mercados de carbono—, apoyados en normas técnicas de medición de carácter voluntario. Estructuramos su estrategia de certificación, compensación y reporte sobre esa base, sin atribuirle un régimen legal que no existe." },
      { title: "Estructuración legal de compensación y créditos de carbono", description: "Asesoramos en la compensación de emisiones mediante Unidades Costarricenses de Compensación, cuya gestión se canaliza a través del Fondo Nacional de Financiamiento Forestal (FONAFIFO), y en el Pago por Servicios Ambientales que reconoce la mitigación de gases de efecto invernadero como servicio ambiental (art. 3, Ley Forestal, Ley N.° 7575). Redactamos y revisamos los contratos, verificamos titularidad y adicionalidad, y blindamos la transacción frente a riesgos de doble contabilidad." },
      { title: "Cumplimiento ambiental preventivo y due diligence", description: "Realizamos auditorías de cumplimiento ambiental para empresas, fondos y operaciones inmobiliarias: revisamos la vigencia de la viabilidad ambiental, las condiciones de SETENA, los permisos forestales y de aprovechamiento, y los pasivos ambientales antes de una compra, financiamiento o expansión. Identificamos el riesgo regulatorio y climático antes de que se convierta en clausura, sanción o contingencia en una transacción." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría en materia de regulación ambiental o mercados de carbono en Costa Rica (SETENA, evaluación de impacto ambiental o carbono neutralidad). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Por qué mi proyecto necesita la aprobación de SETENA antes de comenzar?",
        answer:
          "Porque la ley lo exige como requisito previo. Las actividades humanas que alteren o destruyan elementos del ambiente o generen residuos, materiales tóxicos o peligrosos requieren una evaluación de impacto ambiental por parte de la Secretaría Técnica Nacional Ambiental (SETENA), y su aprobación previa es requisito indispensable para iniciar actividades, obras o proyectos (art. 17, Ley Orgánica del Ambiente, Ley N.° 7554). Iniciar sin la viabilidad ambiental expone el proyecto a clausura, sanciones y a amparos ante la Sala Constitucional. Por eso conviene determinar desde el inicio en qué supuesto cae la obra y qué instrumento de evaluación corresponde.",
      },
      {
        question: "¿Qué es SETENA y de quién depende?",
        answer:
          "La Secretaría Técnica Nacional Ambiental (SETENA) fue creada por la Ley Orgánica del Ambiente (Ley N.° 7554) como órgano de desconcentración máxima del Ministerio de Ambiente y Energía (MINAE). Su función central es analizar las evaluaciones de impacto ambiental, recomendar las acciones para minimizar el impacto y velar por el cumplimiento de sus resoluciones (art. 84, Ley N.° 7554). Es la autoridad ante la que se tramita y se defiende la viabilidad ambiental de un proyecto.",
      },
      {
        question: "¿Existe en Costa Rica una ley de mercados de carbono?",
        answer:
          "No existe a la fecha una ley marco que regule de forma integral los mercados de carbono. La carbono neutralidad del país se articula principalmente por vía de política pública y decreto: el Programa País Carbono Neutralidad 2.0, oficializado mediante el Decreto Ejecutivo N.° 41122-MINAE, y el Plan Nacional de Descarbonización 2018-2050, cuya meta es alcanzar cero emisiones netas al 2050. La medición y demostración de la carbono neutralidad se apoya además en normas técnicas de aplicación voluntaria. Es importante tenerlo claro: quien estructure una estrategia de compensación o de créditos debe hacerlo sobre este andamiaje de decretos y normas técnicas, no sobre una ley que no existe.",
      },
      {
        question: "¿Cómo puede mi organización compensar sus emisiones legalmente?",
        answer:
          "En el marco del Programa País Carbono Neutralidad, la compensación de emisiones se realiza mediante Unidades Costarricenses de Compensación, cuya gestión se canaliza a través del Fondo Nacional de Financiamiento Forestal (FONAFIFO). Estas unidades se vinculan con el Pago por Servicios Ambientales, ya que la Ley Forestal (Ley N.° 7575) reconoce expresamente la mitigación de gases de efecto invernadero —fijación, reducción, secuestro, almacenamiento y absorción— como un servicio ambiental (art. 3). Le ayudamos a estructurar la compensación, revisar los contratos y verificar que la transacción tenga respaldo y no incurra en doble contabilidad.",
      },
      {
        question: "¿Qué hago si recibí un recurso de amparo o una medida cautelar ambiental que paralizó mi obra?",
        answer:
          "Debe actuar de inmediato. El derecho a un ambiente sano y ecológicamente equilibrado tiene rango constitucional (art. 50 de la Constitución Política) y la Sala Constitucional suele suspender proyectos de forma preventiva mientras resuelve. Asumimos la defensa del proyecto demostrando que cuenta con la viabilidad ambiental y que cumple las condiciones de SETENA, y atacamos en la vía que corresponda las medidas que carezcan de fundamento. La rapidez es clave porque la suspensión puede prolongarse y generar pérdidas significativas.",
      },
      {
        question: "¿La Ley de Biodiversidad afecta mi proyecto o mi investigación?",
        answer:
          "Puede hacerlo. La Ley de Biodiversidad (Ley N.° 7788) tiene por objeto conservar la biodiversidad y el uso sostenible de los recursos, así como distribuir de forma justa los beneficios y costos derivados. Integra competencias en el Sistema Nacional de Áreas de Conservación (SINAC) y regula el acceso a los elementos genéticos y bioquímicos, exigiendo el consentimiento previamente informado como condición para acceder a recursos genéticos con fines de investigación, bioprospección o aprovechamiento económico. Si su proyecto toca áreas protegidas, especies o recursos genéticos, evaluamos qué autorizaciones del SINAC y qué requisitos de acceso aplican.",
      },
    ],
  },
  "regulacion-fintech-criptoactivos": {
    hookHeadline: "¿Opera una fintech, exchange o billetera y no sabe si SUGEF lo va a registrar o lo va a sancionar?",
    hookSubtext:
      "En Costa Rica no existe, a 2026, una ley integral de mercado de criptoactivos: el colón es la única unidad monetaria de la República (art. 42, Ley N.° 7558) y el Banco Central ha sido claro en que las criptomonedas no son moneda de curso legal y su uso es por cuenta y riesgo del usuario. Pero el escenario acaba de cambiar: en mayo de 2026 la Asamblea Legislativa aprobó en segundo debate, por unanimidad, una reforma a la Ley N.° 7786 (expediente N.° 25.340) que obliga a los proveedores de servicios de activos virtuales (VASP) a inscribirse ante la SUGEF y a aplicar controles antilavado, y que entra a regir tres meses después de su publicación en La Gaceta. A eso se suma el marco financiero vigente —supervisión de SUGEF y CONASSIF, prevención de legitimación de capitales (arts. 15 y 15 bis, Ley N.° 7786) y los límites que la Procuraduría fijó a los proveedores de pago en el dictamen C-196-2024—. Acompañamos a fintechs, exchanges, billeteras, plataformas de pago y emisores que necesitan operar sin caer en captación ilegal ni en sanciones.",
    scenariosTitle: "¿Cuándo necesita asesoría regulatoria fintech o cripto?",
    triggerScenarios: [
      "Va a lanzar una plataforma de pagos, billetera o exchange y no sabe si requiere inscripción ante SUGEF",
      "SUGEF le requirió inscribirse como sujeto obligado por los artículos 15 o 15 bis de la Ley N.° 7786 y debe responder",
      "Su modelo de negocio capta o moviliza fondos de terceros y teme cruzar la línea de la intermediación financiera reservada a bancos",
      "Quiere conectarse al SINPE o a un proveedor de pago y necesita estructurar la operación dentro de los límites del dictamen PGR C-196-2024",
      "Enfrenta un procedimiento sancionatorio de SUGEF, SUGEVAL o CONASSIF por presunto incumplimiento de prevención de legitimación de capitales (AML/CFT)",
      "Va a emitir o comercializar un token y no sabe si constituye una oferta pública de valores sujeta a la Ley N.° 7732",
      "Opera como proveedor de servicios de activos virtuales (VASP) y debe prepararse para la inscripción ante SUGEF y los controles antilavado que introduce la reforma a la Ley N.° 7786 (expediente N.° 25.340) antes de que venza su plazo de entrada en vigencia",
    ],
    services: [
      { title: "Diagnóstico regulatorio del modelo de negocio fintech", description: "Analizamos su operación para determinar qué normativa le aplica realmente: si configura intermediación financiera reservada, servicio de pago, oferta pública de valores (Ley N.° 7732) o actividad sujeta a inscripción ante SUGEF por los artículos 15 y 15 bis de la Ley N.° 7786. Le decimos con honestidad qué está regulado, qué está en zona gris y qué riesgos asume." },
      { title: "Inscripción y cumplimiento ante SUGEF (sujetos obligados)", description: "Gestionamos la inscripción ante SUGEF de quienes realizan las actividades de los artículos 15 y 15 bis de la Ley N.° 7786, conforme al Acuerdo SUGEF 11-18, y diseñamos el programa de prevención de legitimación de capitales y financiamiento del terrorismo exigido por el Acuerdo SUGEF 13-19 (políticas de conocimiento del cliente, debida diligencia y reporte)." },
      { title: "Estructuración de plataformas de pago dentro de los límites del dictamen C-196-2024", description: "Diseñamos su operación de pagos respetando la frontera fijada por la Procuraduría: los proveedores de pago pueden transferir fondos, remesar y procesar cobros e incluso conectarse al SINPE, pero no abrir ni mantener cuentas a la vista para clientes, lo que constituiría captación reservada. Estructuramos contratos y flujos de fondos para evitar el reproche de intermediación ilegal." },
      { title: "Defensa en procedimientos sancionatorios de SUGEF, SUGEVAL y CONASSIF", description: "Asumimos la defensa en los procedimientos administrativos que estos órganos tramitan bajo la Ley General de la Administración Pública, exigiendo el debido proceso, y la impugnación en sede contencioso-administrativa de las sanciones o requerimientos que consideramos ilegales o desproporcionados." },
      { title: "Tokens, oferta pública de valores y mercado regulado", description: "Evaluamos si la emisión o comercialización de un token o instrumento digital constituye oferta pública de valores sujeta a la autorización y supervisión de SUGEVAL conforme a la Ley N.° 7732, o si queda fuera del perímetro regulado, para evitar tanto la operación ilegal como el sometimiento innecesario al régimen del mercado de valores." },
      { title: "Cumplimiento VASP bajo la reforma a la Ley N.° 7786 (expediente N.° 25.340)", description: "Preparamos a exchanges, custodios y demás proveedores de servicios de activos virtuales para la nueva obligación de inscribirse ante SUGEF y aplicar controles antilavado que introduce la reforma a la Ley N.° 7786 aprobada en 2026. Diseñamos políticas AML/CFT, identificación de clientes y beneficiarios finales, registros de transacciones y reporte de operaciones sospechosas, de modo que cumpla dentro del plazo de entrada en vigencia y no enfrente sanciones." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría regulatoria para una fintech / actividad con criptoactivos en Costa Rica. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Las criptomonedas son legales en Costa Rica?",
        answer:
          "Su uso no está prohibido, pero tampoco son moneda de curso legal. La unidad monetaria de la República es el colón (art. 42, Ley N.° 7558), y el Banco Central ha sido reiterado en que las criptomonedas no son emitidas ni respaldadas por él, no se consideran moneda ni divisa bajo el régimen cambiario, y quien las adquiere lo hace por su propia cuenta y riesgo. En otras palabras: usted puede operar con criptoactivos por acuerdo entre privados, pero sin la protección que el ordenamiento da a la moneda.",
      },
      {
        question: "¿Existe una ley de criptoactivos en Costa Rica en 2026?",
        answer:
          "No existe una ley integral de mercado de criptoactivos, pero sí hay una novedad importante: en mayo de 2026 la Asamblea Legislativa aprobó en segundo debate, por unanimidad, una reforma a la Ley N.° 7786 (expediente N.° 25.340) que obliga a los proveedores de servicios de activos virtuales (VASP) —exchanges, custodios, plataformas— a inscribirse ante la SUGEF, identificar clientes y beneficiarios finales, llevar registros y reportar operaciones sospechosas a la Unidad de Inteligencia Financiera del ICD. Esa reforma entra a regir tres meses después de su publicación en La Gaceta. Más allá de ese componente antilavado, su actividad sigue rigiéndose por el marco financiero general: la Ley N.° 7558, la Ley N.° 7732, los artículos 15 y 15 bis de la Ley N.° 7786 y la normativa de SUGEF. Cualquiera que le ofrezca tramitar una 'licencia cripto' integral costarricense le está vendiendo algo que hoy no existe como tal.",
      },
      {
        question: "¿Mi fintech debe inscribirse ante la SUGEF?",
        answer:
          "Depende de la actividad. La SUGEF es un órgano de desconcentración máxima del Banco Central creado por el artículo 115 de la Ley N.° 7558. Quienes realizan determinadas actividades financieras —transferencias y remesas de fondos, cambio de divisas, administración de recursos de terceros, entre otras— deben inscribirse ante SUGEF y someterse a su supervisión en materia de prevención de legitimación de capitales, conforme a los artículos 15 y 15 bis de la Ley N.° 7786 y al Acuerdo SUGEF 11-18. Con la reforma de 2026, además, los proveedores de servicios de activos virtuales quedan expresamente obligados a inscribirse. No toda fintech queda sujeta, pero muchas operaciones de pago, cambio y cripto sí. Hacemos ese diagnóstico antes de que sea SUGEF quien se lo haga.",
      },
      {
        question: "¿Puede mi plataforma recibir y mantener el dinero de los clientes?",
        answer:
          "Con un límite importante. En el dictamen C-196-2024 (consulta conjunta de SUGEF y el Banco Central), la Procuraduría General de la República concluyó que los proveedores de servicios de pago pueden transferir fondos, remesar, procesar pagos y cobros e incluso conectarse al SINPE para movilizar fondos propios o de terceros, pero no pueden abrir ni mantener cuentas corrientes o de ahorro a la vista para sus clientes, porque eso constituye captación reservada a los bancos y entidades financieras autorizadas. Estructuramos su operación para movilizar fondos sin incurrir en intermediación financiera ilegal.",
      },
      {
        question: "¿Quién supervisa el sector financiero y de valores, y quién me puede sancionar?",
        answer:
          "La supervisión está repartida. El CONASSIF (Consejo Nacional de Supervisión del Sistema Financiero), creado por el artículo 169 de la Ley N.° 7732, es el órgano colegiado que dirige y aprueba la normativa, y bajo su sombrilla operan las superintendencias: SUGEF para entidades financieras, SUGEVAL para el mercado de valores (art. 3, Ley N.° 7732), SUPEN para pensiones y SUGESE para seguros. Estos órganos tramitan procedimientos administrativos bajo la Ley General de la Administración Pública y pueden imponer sanciones; sus resoluciones son impugnables en sede administrativa y ante la jurisdicción contencioso-administrativa.",
      },
      {
        question: "¿Emitir un token cuenta como oferta pública de valores?",
        answer:
          "Puede que sí. Si un token se ofrece al público con expectativa de rendimiento y reúne las características de un valor, su emisión podría constituir oferta pública sujeta a la autorización y supervisión de SUGEVAL conforme a la Ley N.° 7732, con todas las obligaciones que ello implica. Si no las reúne, podría quedar fuera del perímetro regulado. La calificación es técnica y caso por caso: analizamos la estructura del token antes de la emisión para evitar tanto operar ilegalmente como someterse sin necesidad al régimen del mercado de valores.",
      },
    ],
  },
  "derecho-electoral-financiamiento-politico": {
    hookHeadline: "¿El TSE le abrió un procedimiento por su liquidación de deuda política o sus contribuciones privadas?",
    hookSubtext:
      "El financiamiento de los partidos costarricenses cambió en setiembre de 2025: la Ley N.° 10755, \"Ley para fortalecer el acceso, la equidad y el control del financiamiento de los partidos políticos\", reformó artículos clave del Código Electoral (Ley N.° 8765) en materia de financiamiento anticipado caucionado y control contable. A las puertas del ciclo municipal de febrero de 2028, los plazos de liquidación son cortos, las certificaciones contables se fiscalizan a fondo y los delitos de financiamiento llegan a seis años de prisión. Acompañamos a partidos, comités ejecutivos, tesoreros y candidatos ante la jurisdicción exclusiva e independiente del Tribunal Supremo de Elecciones (TSE), cuyas resoluciones no tienen recurso salvo la acción por prevaricato (art. 103 de la Constitución Política).",
    scenariosTitle: "¿Cuándo necesita asesoría electoral y de financiamiento político?",
    triggerScenarios: [
      "El TSE le previno por inconsistencias en la liquidación de gastos para el reconocimiento de la contribución estatal",
      "Su partido recibió financiamiento anticipado caucionado y debe devolver excedentes o sumas no comprobadas",
      "Detectó una contribución de una persona jurídica o de un extranjero y necesita reportarla y subsanarla antes de incurrir en delito",
      "La tesorería del partido fue requerida formalmente por el TSE para informar sobre el financiamiento privado",
      "Recibió una contribución depositada por una entidad financiera fuera del territorio nacional y no sabe cómo proceder",
      "Es candidato a una alcaldía y prepara la estructura financiera de su campaña para febrero de 2028",
      "Necesita impugnar o defender una resolución del Registro Electoral y de Financiamiento de Partidos Políticos ante el TSE",
    ],
    services: [
      { title: "Cumplimiento del régimen de financiamiento partidario", description: "Auditamos y ordenamos las finanzas del partido conforme al Código Electoral: cuenta corriente única para el financiamiento privado (art. 122), requisitos de las donaciones individualizadas y no anónimas (art. 123), prohibición de gestión paralela (art. 126) y reporte de contribuciones en especie superiores a dos salarios base (art. 130). Diseñamos controles internos que resisten la fiscalización del TSE." },
      { title: "Liquidación de deuda política y reconocimiento de la contribución estatal", description: "Preparamos y defendemos la liquidación de gastos que el partido debe comprobar para recibir el aporte del Estado (arts. 102 a 107). La liquidación debe ir refrendada por contador público autorizado (art. 104) y presentarse, en procesos municipales, dentro de los cuarenta y cinco días hábiles posteriores a la declaratoria de las autoridades municipales (art. 102). Coordinamos la certificación contable y el respaldo documental ante la Dirección de Financiamiento Político del TSE (art. 106)." },
      { title: "Financiamiento anticipado caucionado", description: "Asesoramos en el acceso al financiamiento anticipado —hasta un quince por ciento de la contribución estatal, previa rendición de garantías líquidas suficientes (art. 96)— y en el retiro de las sumas caucionadas conforme a la resolución del TSE (art. 97, reformado por la Ley N.° 10755). Gestionamos la devolución de excedentes o de montos no comprobados para evitar sanciones." },
      { title: "Defensa en procedimientos sancionatorios y delitos de financiamiento", description: "Representamos a partidos, miembros del comité ejecutivo superior y tesoreros en los procedimientos del TSE y en la sede penal electoral. El Código Electoral tipifica delitos sobre el financiamiento partidario (art. 273), las contribuciones privadas de extranjeros y personas jurídicas (art. 274) y las tesorerías (art. 276), con penas de hasta seis años de prisión. Aplicamos el estándar de la Sala Constitucional (voto N.° 1691-2019), que exige un examen de lesividad y culpabilidad previo a toda sanción." },
      { title: "Litigio electoral ante el TSE", description: "Litigamos ante la jurisdicción electoral exclusiva e independiente del Tribunal Supremo de Elecciones (art. 99 de la Constitución Política), que interpreta de forma exclusiva y obligatoria la normativa electoral (art. 102 inciso 3). Promovemos recursos contra resoluciones del Registro Civil y de las juntas electorales y demás gestiones electorales, teniendo presente que las resoluciones del TSE no tienen recurso, salvo la acción por prevaricato (art. 103)." },
      { title: "Estructuración de campañas municipales 2028", description: "Acompañamos a candidatos a alcaldías y a las agrupaciones cantonales en la planificación financiera y de cumplimiento de cara a las elecciones municipales del primer domingo de febrero de 2028 (art. 150). Implementamos los controles de financiamiento a precandidaturas y candidaturas (arts. 125 y 127) para que la contribución se canalice por la tesorería del partido y la campaña sea liquidable." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría en derecho electoral y financiamiento político en Costa Rica (liquidación de deuda política, cumplimiento o un asunto ante el TSE). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cuánto aporta el Estado a los partidos políticos y quién tiene derecho a la contribución?",
        answer:
          "La contribución estatal equivale a un cero coma diecinueve por ciento (0,19%) del producto interno bruto del año anterior a la elección, según el artículo 96 de la Constitución Política (reformado por la Ley N.° 7675 de 2 de julio de 1997). Tienen derecho a ella los partidos que obtengan al menos un cuatro por ciento (4%) de los sufragios válidamente emitidos a escala nacional, o ese mismo porcentaje en su provincia si son provinciales, o que elijan al menos una diputación. El TSE fija el monto doce meses antes de la elección, tomando como base de cálculo el PIB a precios de mercado certificado por el Banco Central de Costa Rica (art. 90 del Código Electoral, Ley N.° 8765).",
      },
      {
        question: "¿Qué cambió con la Ley N.° 10755 para el ciclo electoral 2026-2028?",
        answer:
          "La Ley N.° 10755, \"Ley para fortalecer el acceso, la equidad y el control del financiamiento de los partidos políticos\", se publicó en el Alcance N.° 120 a La Gaceta N.° 175 de 19 de setiembre de 2025 y rige desde el 29 de setiembre de 2025. Reformó varios artículos del Código Electoral (Ley N.° 8765), entre ellos el artículo 97 sobre el retiro del financiamiento anticipado caucionado y el artículo 105 sobre el registro de los profesionales contables ante la Dirección General del Registro Electoral y de Financiamiento de Partidos Políticos. Conviene revisar la estructura financiera del partido a la luz de estas reformas antes del ciclo municipal de 2028.",
      },
      {
        question: "¿Pueden las empresas o los extranjeros financiar a un partido político en Costa Rica?",
        answer:
          "No. El artículo 128 del Código Electoral prohíbe a los extranjeros y a las personas jurídicas de cualquier naturaleza y nacionalidad efectuar, directa o indirectamente, contribuciones, donaciones o aportes a los partidos; a los extranjeros también se les prohíbe otorgar préstamos o adquirir títulos en su beneficio. Tampoco pueden recibirse contribuciones por medio de entidades financieras ubicadas fuera del territorio nacional (art. 129). Infringir estas reglas configura delito: el artículo 274 sanciona con prisión de dos a cuatro años las contribuciones de personas jurídicas y de extranjeros, y el artículo 276 castiga a la tesorería que las reciba. La Sala Constitucional, en el voto N.° 1691-2019, precisó que su aplicación exige un examen previo de lesividad y culpabilidad.",
      },
      {
        question: "¿En qué plazo se presenta la liquidación de gastos y quién debe firmarla?",
        answer:
          "Para recibir el aporte estatal, el partido debe comprobar y liquidar sus gastos (art. 102 del Código Electoral). En procesos municipales, la liquidación se presenta dentro de los cuarenta y cinco días hábiles contados a partir de la declaratoria de elección de todas las autoridades municipales. La liquidación debe ir refrendada por un contador público autorizado, en su condición de profesional responsable y fedatario público (art. 104), y presentarse ante la Dirección de Financiamiento Político del TSE con la certificación de gastos y los documentos de respaldo (art. 106). Corresponde al TSE evaluar las liquidaciones y ordenar el pago de los gastos reconocidos (art. 103).",
      },
      {
        question: "¿Por qué las disputas electorales se ventilan ante el TSE y no ante la Sala Constitucional?",
        answer:
          "La Constitución Política encomienda la organización, dirección y vigilancia de los actos relativos al sufragio exclusivamente al Tribunal Supremo de Elecciones, que goza de independencia en su función (art. 99) e interpreta en forma exclusiva y obligatoria las disposiciones constitucionales y legales en materia electoral (art. 102, inciso 3). Por eso la jurisdicción electoral es propia y distinta de la constitucional. Además, las resoluciones del TSE no tienen recurso, salvo la acción por prevaricato (art. 103), de modo que la estrategia debe construirse correctamente desde la primera gestión. La experiencia constitucional de nuestro fundador es directamente útil para delimitar la frontera entre la competencia del TSE y la de la Sala IV.",
      },
      {
        question: "¿Cuándo son las próximas elecciones municipales y cómo conviene preparar la campaña?",
        answer:
          "Las elecciones municipales se celebran el primer domingo de febrero, dos años después de la elección presidencial y legislativa (art. 150 del Código Electoral), por lo que el próximo proceso municipal corresponde a febrero de 2028. Recomendamos estructurar desde temprano la cuenta única del partido (art. 122) y los controles de financiamiento a precandidaturas y candidaturas (arts. 125 y 127), de modo que toda contribución se canalice por la tesorería y los gastos sean liquidables y reconocibles dentro de la contribución estatal.",
      },
    ],
  },
  "telecomunicaciones-espectro-5g": {
    hookHeadline: "¿Ganó espectro en la subasta 5G y ahora enfrenta las obligaciones de cobertura?",
    hookSubtext:
      "La subasta 5G de enero de 2026 cambió el tablero: siete adjudicatarios —Claro y Liberty en el ámbito nacional, y las cooperativas Coopealfaroruiz, Coopeguanacaste, Coopelesca, Coopesantos junto a Ring en el regional— se comprometieron a desplegar 3.304 radiobases y a cubrir 31 cantones en las siete provincias, en bandas de 700 MHz, 3500 MHz y 26-28 GHz. El espectro radioeléctrico es un bien de dominio público (art. 7, Ley N.° 8642) y la concesión vive de su contrato: cumplir cobertura, pagar la contraprestación, contribuir a FONATEL y respetar las condiciones de la concesión no son trámites, son la frontera entre operar y perder el título. Acompañamos a concesionarios de espectro, operadores de torres, satelitales y cooperativas de electrificación frente a SUTEL y al MICITT.",
    scenariosTitle: "¿Cuándo necesita defender su concesión o desbloquear su despliegue?",
    triggerScenarios: [
      "SUTEL le abrió un procedimiento por presunto incumplimiento de las metas de cobertura o de despliegue comprometidas en el concurso 5G",
      "Una municipalidad le frena o le rechaza el permiso de construcción de torres y radiobases pese al interés público del servicio",
      "Necesita negociar compartición de infraestructura o coubicación con otro operador y la contraparte se niega o impone condiciones abusivas",
      "Su concesión de espectro se aproxima al vencimiento y debe gestionar la prórroga con la antelación que exige la ley",
      "Le notificaron un procedimiento de extinción, caducidad o revocación de la concesión o de la autorización",
      "Es operador satelital (Starlink, OneWeb u otro) y requiere el título habilitante para operar en Costa Rica",
      "SUTEL le impuso una multa o sanción por una presunta infracción a la Ley General de Telecomunicaciones y necesita impugnarla",
    ],
    services: [
      { title: "Cumplimiento de obligaciones de cobertura y despliegue 5G", description: "Estructuramos el cumplimiento de las metas de cobertura, calidad y despliegue de infraestructura asumidas en el cartel del concurso (art. 13, Ley N.° 8642), documentamos avances ante SUTEL y diseñamos la defensa anticipada frente a eventuales objeciones sobre el ritmo de instalación de radiobases." },
      { title: "Permisos municipales para torres y radiobases", description: "Acompañamos la gestión de permisos de construcción de torres y estaciones base ante las municipalidades, conciliando la autonomía municipal con el carácter de servicio de interés público y el régimen de recursos escasos —que incluye expresamente las torres, los postes, los ductos y las canalizaciones— definido en la propia ley (art. 6, Ley N.° 8642), e impugnamos denegatorias o moratorias ilegítimas." },
      { title: "Compartición de infraestructura, acceso e interconexión", description: "Negociamos y, cuando corresponde, llevamos ante SUTEL los acuerdos de acceso e interconexión y de uso compartido de infraestructura (arts. 59 y 60, Ley N.° 8642), incluida la coubicación de equipos, para que la falta de acuerdo entre operadores no detenga el despliegue. Si la negociación no se concreta dentro de los tres meses siguientes a su notificación, SUTEL puede intervenir de oficio o a petición de parte y fijar las condiciones." },
      { title: "Otorgamiento, prórroga y traspaso de concesiones de espectro", description: "Gestionamos solicitudes de concesión por concurso público otorgadas por el Poder Ejecutivo (art. 12, Ley N.° 8642) y la prórroga de concesiones de frecuencias —plazo máximo de quince años, prorrogable hasta veinticinco—, presentando la solicitud al menos dieciocho meses antes del vencimiento, como exige la ley (art. 24, inciso a)." },
      { title: "Defensa en procedimientos sancionatorios ante SUTEL", description: "Asumimos la defensa en los procedimientos de la potestad sancionatoria de SUTEL (art. 65, Ley N.° 8642), donde las infracciones se clasifican en muy graves o graves (art. 67) con multas de hasta el uno por ciento de los ingresos brutos en las muy graves (art. 68), e impugnamos las resoluciones en sede administrativa y contencioso-administrativa." },
      { title: "Títulos habilitantes para operadores satelitales y nuevos entrantes", description: "Asesoramos a operadores satelitales y nuevos entrantes en la obtención del título habilitante para operar redes y prestar servicios en Costa Rica, así como en el régimen de contribución a FONATEL (art. 34, Ley N.° 8642), instrumento de financiamiento del acceso y el servicio universal." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre un caso de telecomunicaciones, espectro o despliegue 5G en Costa Rica (cumplimiento ante SUTEL, permisos de torres o concesión de frecuencias). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cómo se otorga una concesión de espectro radioeléctrico en Costa Rica?",
        answer:
          "El espectro radioeléctrico es un bien de dominio público (art. 7, Ley N.° 8642). Las concesiones de frecuencias para operar y explotar redes públicas de telecomunicaciones las otorga el Poder Ejecutivo mediante un procedimiento de concurso público, conforme a la Ley de Contratación Administrativa; SUTEL instruye el procedimiento previa realización de los estudios de necesidad y factibilidad, de acuerdo con el Plan Nacional de Desarrollo de las Telecomunicaciones (art. 12, Ley N.° 8642). El cartel del concurso fija, entre otros, las bandas y la zona de cobertura, las obligaciones de acceso y servicio universal, el período de vigencia, la contraprestación y las multas por incumplimiento (art. 13).",
      },
      {
        question: "¿Cuánto dura una concesión de frecuencias y cuándo debo pedir la prórroga?",
        answer:
          "Las concesiones de frecuencias para la operación y explotación de redes públicas se otorgan por un período máximo de quince años, prorrogable a solicitud de parte hasta que el plazo acumulado —inicial y prórrogas— no exceda veinticinco años. La solicitud de prórroga debe presentarse por lo menos dieciocho meses antes del vencimiento (art. 24, inciso a), Ley N.° 8642). Las autorizaciones, en cambio, se otorgan por un máximo de diez años, prorrogables por períodos de cinco años hasta un máximo de tres prórrogas, con solicitud al menos seis meses antes (art. 24, inciso b).",
      },
      {
        question: "¿Quién regula las telecomunicaciones en Costa Rica: SUTEL o el MICITT?",
        answer:
          "Ambos, con roles distintos. La Superintendencia de Telecomunicaciones (SUTEL) es el órgano que aplica, vigila y controla el marco regulatorio del sector; fue creada mediante la Ley N.° 8660, que reformó la Ley N.° 7593 y la adscribió como órgano de máxima desconcentración a la ARESEP. El Ministerio de Ciencia, Innovación, Tecnología y Telecomunicaciones (MICITT) ejerce la rectoría del sector y, a través del Poder Ejecutivo, otorga las concesiones de espectro. La ARESEP, por su parte, conserva competencias tarifarias en los servicios regulados.",
      },
      {
        question: "¿Qué obligaciones de despliegue asumieron los adjudicatarios de la subasta 5G?",
        answer:
          "La subasta 5G de enero de 2026 se cerró con siete adjudicatarios: Claro y Liberty en el ámbito nacional, y las cooperativas Coopealfaroruiz, Coopeguanacaste, Coopelesca y Coopesantos, junto a Ring Centrales de Costa Rica, en el ámbito regional. En conjunto se comprometió el despliegue de 3.304 radiobases para llevar 5G a 31 cantones de las siete provincias, en bandas de 700 MHz, 3500 MHz y 26-28 GHz. Estas metas de cobertura y despliegue forman parte de las condiciones del título: su incumplimiento puede abrir procedimientos sancionatorios ante SUTEL e incluso afectar la vigencia de la concesión.",
      },
      {
        question: "¿Puede una municipalidad impedirme instalar torres y radiobases?",
        answer:
          "Las municipalidades conservan competencias urbanísticas y de permisos de construcción dentro de su jurisdicción, pero esas competencias deben ejercerse de forma compatible con el carácter de interés público del servicio de telecomunicaciones y con el régimen de recursos escasos —que incluye expresamente las torres, los postes, los ductos y las canalizaciones— definido en la Ley General de Telecomunicaciones (art. 6, Ley N.° 8642). Una denegatoria injustificada, una moratoria de hecho o condiciones desproporcionadas pueden impugnarse en sede administrativa y contencioso-administrativa. Cada caso exige analizar el plan regulador y los reglamentos municipales aplicables.",
      },
      {
        question: "¿Qué pasa si SUTEL me abre un procedimiento sancionatorio?",
        answer:
          "SUTEL ejerce la potestad sancionatoria del sector (art. 65, Ley N.° 8642). Las infracciones se clasifican en muy graves o graves (art. 67), con multas que, en las muy graves, van de cero coma cinco por ciento (0,5%) hasta el uno por ciento (1%) de los ingresos brutos del operador del período fiscal anterior, y que pueden elevarse cuando el caso reviste gravedad particular (art. 68). Negarse a contribuir a FONATEL, por ejemplo, está tipificado como infracción muy grave. Es esencial atender el procedimiento desde su inicio, ejercer el derecho de defensa y, si la resolución es desfavorable, impugnarla por los recursos administrativos y, en su caso, en la vía contencioso-administrativa.",
      },
    ],
  },
  "energia-renovable-transicion-energetica": {
    hookHeadline: "¿Le denegaron el permiso de generación o el ICE no le firma el contrato de compra de energía?",
    hookSubtext:
      "Costa Rica produce cerca del 98% de su electricidad con fuentes renovables, pero el acceso del generador privado a la red sigue acotado por una ley de 1990: la generación autónoma o paralela está sujeta a un tope individual de 20.000 kW por planta (art. 2) y a un límite del 15% de la potencia del sistema eléctrico nacional para la generación paralela elegible (art. 7, Ley N.° 7200). Eso convierte cada permiso, cada contrato con el ICE y cada gestión tarifaria ante ARESEP en un cuello de botella regulatorio. Mientras la Asamblea Legislativa debate la apertura del mercado de generación, acompañamos a desarrolladores solares, eólicos, hidroeléctricos, de biomasa y de almacenamiento a defender su derecho de acceso, su tarifa y su proyecto.",
    scenariosTitle: "¿Cuándo necesita asesoría en energía y transición energética?",
    triggerScenarios: [
      "El ICE le denegó o no le renueva el contrato de compra de energía de su planta de generación privada",
      "Su solicitud de permiso de generación choca con el tope del 15% del sistema (art. 7) o el límite de 20.000 kW por planta de la Ley N.° 7200",
      "ARESEP le fijó una tarifa o un peaje de acceso que no cubre los costos reales de su proyecto",
      "La SETENA rechazó o condicionó la viabilidad ambiental de su parque solar, eólico o hidroeléctrico",
      "Tiene una disputa con el ICE sobre el despacho de su energía o el acceso a la red de transmisión",
      "Desarrolla un proyecto de hidrógeno verde, almacenamiento en baterías o autoconsumo y no encuentra el marco regulatorio aplicable",
      "Quiere participar en el Mercado Eléctrico Regional vía SIEPAC o estructurar un contrato de compra de energía (PPA) de largo plazo",
    ],
    services: [
      { title: "Permisos de generación privada y elegibilidad bajo la Ley N.° 7200", description: "Analizamos la viabilidad de su proyecto frente al régimen de generación autónoma o paralela: el tope de capacidad limitada de 20.000 kW por planta (art. 2) y el límite del 15% de la potencia del conjunto de centrales del sistema eléctrico nacional que puede provenir de generación paralela elegible (art. 7, Ley N.° 7200). Distinguimos entre el Capítulo I (venta de energía al ICE por centrales de capacidad limitada) y el Capítulo II (Compra de Energía Bajo Régimen de Competencia, incorporado por la Ley N.° 7508, en el que la planta se construye, opera y su titularidad se traspasa al ICE al final del contrato) y gestionamos los permisos ante el ICE y el MINAE." },
      { title: "Negociación y estructuración de contratos de compra de energía (PPA)", description: "Estructuramos y negociamos los contratos de compra de energía con el ICE y las distribuidoras: precio, plazo, garantías, puntos de entrega, despacho, fórmulas de indexación y cláusulas de fuerza mayor. Defendemos al generador cuando el ICE no firma, retrasa o pretende modificar unilateralmente las condiciones del contrato." },
      { title: "Regulación tarifaria y peajes ante ARESEP", description: "Representamos al generador y al usuario en los procesos de fijación tarifaria ante la ARESEP, regidos por el principio de servicio al costo (art. 3 inc. b, Ley N.° 7593) y sometidos a audiencia pública (art. 36). La energía eléctrica en sus etapas de generación, transmisión, distribución y comercialización es servicio público regulado (art. 5 inc. a). Impugnamos resoluciones tarifarias y peajes de acceso a la red que no reflejen los costos del proyecto." },
      { title: "Defensa contencioso-administrativa de denegatorias y disputas con el ICE", description: "Impugnamos en sede administrativa y ante el Tribunal Contencioso Administrativo las denegatorias de permisos, las negativas de contrato y las controversias sobre despacho y acceso a la red de transmisión. Solicitamos medidas cautelares conforme a los artículos 19-30 del CPCA (Ley N.° 8508) cuando la ejecución del acto pone en riesgo el proyecto." },
      { title: "Viabilidad ambiental SETENA para proyectos renovables", description: "Acompañamos el trámite de viabilidad ambiental ante la SETENA para parques solares, eólicos, hidroeléctricos y de biomasa, y recurrimos las denegatorias o condicionamientos que comprometen la rentabilidad del proyecto, articulando la defensa con el marco de eficiencia y uso racional de la energía (Ley N.° 7447, bajo rectoría del MINAE)." },
      { title: "Marcos emergentes: hidrógeno verde, almacenamiento y Mercado Eléctrico Regional", description: "Asesoramos sobre los marcos emergentes de hidrógeno verde, almacenamiento en baterías y autoconsumo, que a la fecha carecen de una ley sectorial específica en Costa Rica y se rigen por la normativa general aplicable. También estructuramos la participación en el Mercado Eléctrico Regional (MER) a través del SIEPAC, conforme al Tratado Marco del Mercado Eléctrico de América Central." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre un proyecto de energía renovable / generación eléctrica en Costa Rica (permisos, contrato con el ICE o tarifa ante ARESEP). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Puede una empresa privada generar y vender electricidad en Costa Rica?",
        answer:
          "Sí, dentro del régimen de generación autónoma o paralela de la Ley N.° 7200. La ley autoriza a empresas privadas y a cooperativas de electrificación rural a operar plantas de capacidad limitada e integrarse al sistema eléctrico nacional. Existen dos modalidades: el Capítulo I, para la venta de energía al ICE por plantas de capacidad limitada, y el Capítulo II, denominado 'Compra de Energía Bajo Régimen de Competencia' (incorporado por la Ley N.° 7508), en el que la planta se construye, opera y su titularidad se traspasa al ICE al término del contrato (esquema tipo BOT). El ICE mantiene la rectoría del sistema eléctrico nacional y es la contraparte de los contratos de compra de energía.",
      },
      {
        question: "¿Cuál es el tamaño máximo de una planta de generación privada?",
        answer:
          "Bajo la Ley N.° 7200, se consideran centrales de capacidad limitada las que no sobrepasan los 20.000 kW (20 MW), sean hidroeléctricas o de fuentes no convencionales (art. 2). Además, el ICE solo puede declarar elegible un proyecto si la potencia por concepto de generación paralela no llega a constituir más del 15% de la potencia del conjunto de centrales que conforman el sistema eléctrico nacional (art. 7). Estos límites son el principal cuello de botella para nuevos proyectos y están en el centro del debate legislativo sobre la apertura del mercado de generación.",
      },
      {
        question: "¿Quién fija la tarifa a la que se paga la energía y cómo se impugna?",
        answer:
          "La ARESEP fija los precios y tarifas de los servicios públicos, incluida la energía eléctrica en sus etapas de generación, transmisión, distribución y comercialización (art. 5 inc. a, Ley N.° 7593). Lo hace conforme al principio de servicio al costo, que contempla únicamente los costos necesarios para prestar el servicio (art. 3 inc. b), y mediante audiencia pública para las fijaciones ordinarias (art. 36). Si la tarifa o el peaje no reflejan los costos reales de su proyecto, la resolución de ARESEP puede impugnarse en sede administrativa y, agotada la vía, ante la jurisdicción contencioso-administrativa.",
      },
      {
        question: "¿Qué hago si el ICE me deniega o no me renueva el contrato de compra de energía?",
        answer:
          "La denegatoria o la negativa de renovación es un acto que puede recurrirse. Evaluamos primero si la decisión respeta el debido proceso y los límites de la Ley N.° 7200, y agotamos los recursos administrativos correspondientes. Si la negativa es ilegítima o arbitraria, acudimos al Tribunal Contencioso Administrativo y, cuando la continuidad del proyecto está en riesgo, solicitamos medidas cautelares conforme a los artículos 19-30 del Código Procesal Contencioso Administrativo (Ley N.° 8508) para suspender los efectos del acto mientras se resuelve el fondo.",
      },
      {
        question: "¿Existe en Costa Rica una ley específica para el hidrógeno verde o el almacenamiento en baterías?",
        answer:
          "A la fecha, Costa Rica no cuenta con una ley sectorial específica que regule de forma integral el hidrógeno verde ni el almacenamiento en baterías. Estos proyectos se enmarcan en la normativa general aplicable: el régimen de generación de la Ley N.° 7200, la regulación de la ARESEP bajo la Ley N.° 7593, la Ley de Regulación del Uso Racional de la Energía (Ley N.° 7447) bajo rectoría del MINAE, y la normativa ambiental y de permisos correspondiente. Por honestidad profesional preferimos advertirlo: estructuramos estos proyectos sobre el marco realmente vigente, sin invocar regulaciones que aún no existen, y damos seguimiento a las iniciativas legislativas en trámite.",
      },
      {
        question: "¿Puedo vender mi energía fuera de Costa Rica o participar en el mercado regional?",
        answer:
          "La participación en el Mercado Eléctrico Regional (MER) se rige por el Tratado Marco del Mercado Eléctrico de América Central y se ejecuta a través de la red de interconexión del SIEPAC. El acceso de un generador costarricense a esas transacciones está condicionado por su régimen interno bajo la Ley N.° 7200 y por la coordinación con el ICE. Analizamos la viabilidad de su proyecto para transacciones regionales y estructuramos los contratos correspondientes dentro de ese marco.",
      },
    ],
  },
  "derecho-civil": {
    hookHeadline: "¿Le deben dinero, le incumplieron un contrato o le invadieron su propiedad?",
    hookSubtext:
      "El conflicto civil entre particulares se gana o se pierde en los detalles: el título correcto, la vía procesal adecuada y, sobre todo, el plazo. Desde la entrada en vigencia del Código Procesal Civil (Ley N.° 9342) el 8 de octubre de 2018, el litigio civil costarricense es oral y mucho más rápido: en el proceso monitorio de cobro, tras la resolución intimatoria el deudor tiene apenas cinco días para cumplir u oponerse (art. 110 CPC). Acompañamos a personas y empresas en cobros judiciales, responsabilidad civil, defensa de la propiedad y disputas contractuales, con la misma rigurosidad técnica que aplicamos ante el Estado.",
    scenariosTitle: "¿Cuándo necesita un abogado en materia civil?",
    triggerScenarios: [
      "Un cliente, socio o tercero le adeuda una suma de dinero documentada y no le paga",
      "Le incumplieron un contrato de obra, servicios, arrendamiento o compraventa y sufrió pérdidas",
      "Un tercero ocupa, invade o usa su propiedad sin título y necesita recuperarla",
      "Sufrió un daño a su persona o a su patrimonio por culpa o negligencia de otro",
      "Su inquilino dejó de pagar la renta y necesita recuperar el inmueble",
      "Le notificaron una demanda de cobro o un proceso monitorio en su contra y el plazo corre",
      "Firmó un contrato que considera nulo, lesivo o viciado y quiere impugnarlo",
    ],
    services: [
      { title: "Cobro judicial por proceso monitorio", description: "Tramitamos el cobro de obligaciones dinerarias líquidas y exigibles documentadas mediante el proceso monitorio dinerario (arts. 110 y 111 CPC), que inicia con una resolución intimatoria al deudor y le concede solo cinco días para oponerse o pagar. Si no hay oposición fundada, se avanza directamente a la ejecución sobre los bienes del deudor." },
      { title: "Defensa frente a demandas de cobro y procesos monitorios", description: "Si le notificaron un monitorio o un proceso de ejecución, los plazos son cortos y la oposición debe plantearse con la prueba y los motivos tasados que la ley admite. Analizamos el título, las defensas oponibles (pago comprobado por escrito, prescripción, falsedad del documento, falta de exigibilidad) y la estrategia para evitar el embargo o liberar bienes ya afectados." },
      { title: "Responsabilidad civil contractual y extracontractual", description: "Reclamamos la reparación de daños y perjuicios derivados del incumplimiento de un contrato o de hechos ilícitos. El art. 1045 del Código Civil (Ley N.° 63) obliga a reparar el daño a quien lo causa por dolo, falta, negligencia o imprudencia; cuantificamos daño emergente, lucro cesante y daño moral, y construimos la prueba pericial necesaria." },
      { title: "Procesos sobre propiedad: reivindicatorios, interdictos y deslinde", description: "Defendemos y recuperamos la propiedad y la posesión frente a invasiones, despojos o usurpaciones. Promovemos la acción reivindicatoria del dueño no poseedor y los interdictos posesorios, que se tramitan por el proceso sumario por su urgencia, además de procesos de deslinde y amojonamiento cuando los linderos están en disputa." },
      { title: "Desahucio y conflictos de arrendamiento", description: "Recuperamos inmuebles arrendados por falta de pago, vencimiento del plazo u otras causales legales, mediante el proceso sumario de desahucio (art. 104 CPC) o el monitorio arrendaticio según corresponda. Asesoramos también a arrendatarios frente a desalojos improcedentes o sin el debido proceso." },
      { title: "Nulidad de contratos y actos jurídicos", description: "Impugnamos contratos y actos viciados por error, dolo, simulación, objeto o causa ilícita, o por incapacidad de las partes, conforme al Código Civil. Buscamos la nulidad o la resolución del contrato y la restitución de prestaciones, con la indemnización que corresponda." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría en un asunto de derecho civil (cobro, contrato, propiedad o responsabilidad civil) en Costa Rica. Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cuánto tarda un cobro judicial con el nuevo Código Procesal Civil?",
        answer:
          "Depende de si el deudor se opone. El proceso monitorio (art. 110 del Código Procesal Civil, Ley N.° 9342) inicia con una resolución intimatoria que ordena el pago al deudor, a quien se le conceden cinco días para pagar u oponerse. Si no se opone, el proceso pasa directamente a la fase de ejecución (embargo y remate de bienes), lo que acorta considerablemente los tiempos respecto del régimen anterior. Si presenta oposición fundada, se convoca a una audiencia oral para resolver. La rapidez efectiva depende de la calidad del título, de la prueba aportada desde el inicio y de la carga del despacho judicial.",
      },
      {
        question: "¿Qué documentos sirven para cobrar una deuda por la vía monitoria?",
        answer:
          "El proceso monitorio dinerario procede para obligaciones dinerarias líquidas y exigibles que consten en un documento. Sirven, entre otros, las escrituras públicas, los documentos privados con la firma reconocida o tenida por reconocida, las letras de cambio, pagarés, facturas y las certificaciones de resoluciones judiciales firmes que establezcan una obligación de dinero. Lo esencial es que el documento identifique con claridad al deudor y refleje una suma cierta y exigible. Revisamos el título antes de demandar para evitar que una oposición prospere por defectos formales.",
      },
      {
        question: "¿Cuánto tiempo tengo para reclamar un daño o cobrar una deuda antes de que prescriba?",
        answer:
          "Como regla general, los derechos y acciones civiles para los que la ley no fija un plazo especial prescriben en diez años (art. 868 del Código Civil, Ley N.° 63), conocida como prescripción decenal. Sin embargo, muchas materias tienen plazos especiales más cortos previstos en leyes específicas, y en materia mercantil rigen plazos distintos. Por eso es importante consultar cuanto antes: dejar correr el plazo puede extinguir un derecho perfectamente válido. Analizamos en cada caso el plazo aplicable y los actos que lo interrumpen.",
      },
      {
        question: "¿Qué diferencia hay entre responsabilidad civil contractual y extracontractual?",
        answer:
          "La responsabilidad contractual nace del incumplimiento de un contrato: una parte no cumple lo pactado y debe reparar los daños y perjuicios causados a la otra. La responsabilidad extracontractual surge de un hecho ilícito al margen de cualquier contrato: el art. 1045 del Código Civil establece que todo aquel que por dolo, falta, negligencia o imprudencia causa a otro un daño está obligado a repararlo junto con los perjuicios. En ambos casos cuantificamos el daño emergente, el lucro cesante y, cuando procede, el daño moral, sustentados en prueba técnica.",
      },
      {
        question: "Un tercero ocupa mi propiedad. ¿Cómo la recupero?",
        answer:
          "Las herramientas varían según su situación jurídica. Si usted es el propietario y otro posee el bien sin título, procede la acción reivindicatoria para recuperar la propiedad. Si lo que se discute es la posesión actual, frente a un despojo o perturbación reciente, proceden los interdictos posesorios, que por su urgencia se tramitan por el proceso sumario. Cuando el conflicto es sobre la ubicación exacta de los linderos, procede el deslinde y amojonamiento. Analizamos el estado registral, la posesión y la prueba disponible para elegir la vía correcta, porque equivocarla retrasa la recuperación.",
      },
      {
        question: "Mi inquilino no paga. ¿Cómo lo desalojo legalmente?",
        answer:
          "No es legal recuperar el inmueble por mano propia ni cambiar cerraduras: debe acudirse a la vía judicial. Según el caso, procede el proceso sumario de desahucio (art. 104 del Código Procesal Civil) o el monitorio arrendaticio, que permiten recuperar el inmueble por falta de pago de la renta, vencimiento del plazo u otras causales legales, con plazos abreviados respecto del litigio ordinario. Preparamos la demanda con el contrato y la prueba del incumplimiento, y le acompañamos hasta la entrega efectiva del inmueble.",
      },
    ],
  },
  "derecho-de-familia": {
    hookHeadline: "¿Enfrenta un divorcio, una pensión alimentaria o el reparto de los bienes del matrimonio?",
    hookSubtext:
      "Desde el 1.° de octubre de 2024 rige en su integridad el Código Procesal de Familia (Ley N.° 9747), que trasladó estos conflictos a procesos orales, por audiencias y con énfasis en el interés superior de la persona menor de edad. Cambian los tiempos, la estrategia probatoria y la forma de litigar el divorcio, la pensión alimentaria, la filiación y la liquidación de gananciales. En materia tan sensible —donde el apremio corporal por pensión puede dictarse hasta por seis meses (arts. 24 y 25, Ley N.° 7654)— un error procesal cuesta caro. Acompañamos a personas y familias en todo el país, con la firmeza técnica y la cercanía que estos asuntos exigen.",
    scenariosTitle: "¿Cuándo necesita un abogado de familia?",
    triggerScenarios: [
      "Quiere divorciarse por mutuo consentimiento o necesita demandar el divorcio por una causal",
      "Le demandaron pensión alimentaria o tiene una orden de apremio corporal por mora",
      "La pensión fijada es desproporcionada respecto a sus ingresos reales y necesita revisarla",
      "Discute la guarda, crianza, régimen de visitas o la patria potestad de sus hijos",
      "Hay que liquidar los bienes gananciales tras la disolución del matrimonio",
      "Necesita reconocer, impugnar o investigar la paternidad o filiación de un hijo",
      "Vive una situación de violencia doméstica y requiere medidas de protección urgentes",
    ],
    services: [
      { title: "Divorcio por mutuo consentimiento o por causal", description: "Tramitamos el divorcio por mutuo consentimiento mediante el convenio en escritura pública que regula la guarda y crianza de los hijos, la obligación alimentaria entre cónyuges y la distribución de los bienes (art. 60, Código de Familia, Ley N.° 5476), así como el divorcio por las causales del artículo 48 del mismo Código, entre ellas la separación de hecho por un plazo no menor de tres años. Bajo el Código Procesal de Familia (Ley N.° 9747) el trámite es oral y por audiencias." },
      { title: "Pensiones alimentarias: fijación, defensa y revisión", description: "Asumimos demandas de pensión alimentaria, la defensa del demandado y los incidentes de aumento o rebajo. El juez fija una pensión provisional ya en la resolución que da traslado a la demanda, ejecutable aunque el auto no esté firme (art. 21, Ley N.° 7654), por lo que la actuación temprana es decisiva para ajustar la cuota a la capacidad económica real." },
      { title: "Defensa frente al apremio corporal por mora", description: "Atendemos órdenes de apremio corporal por incumplimiento del deber alimentario, que procede hasta por seis mensualidades y no puede mantenerse más de seis meses (arts. 24 y 25, Ley N.° 7654). La ley excluye del apremio a la persona menor de edad y a la mayor de setenta y un años. Gestionamos arreglos de pago, levantamiento de la orden y la regularización de la deuda." },
      { title: "Guarda, crianza, patria potestad y régimen de visitas", description: "Litigamos la guarda, crianza y educación de los hijos bajo el principio del interés superior de la persona menor de edad (art. 56, Código de Familia). Estas resoluciones no constituyen cosa juzgada material y pueden modificarse cuando cambian las circunstancias, por lo que diseñamos la prueba tanto para el proceso inicial como para futuras revisiones." },
      { title: "Liquidación de bienes gananciales", description: "Al disolverse o declararse nulo el matrimonio, cada cónyuge adquiere el derecho a participar en la mitad del valor neto de los bienes gananciales constatados en el patrimonio del otro (art. 41, Código de Familia). Identificamos qué bienes son gananciales y cuáles quedan excluidos, valoramos el patrimonio y negociamos o litigamos su distribución." },
      { title: "Filiación: reconocimiento, impugnación e investigación de paternidad", description: "Tramitamos procesos de reconocimiento, impugnación de paternidad y declaración judicial de filiación conforme al Código de Familia, incluida la prueba científica de marcadores genéticos (ADN). La filiación define derechos sucesorios, alimentarios y de identidad del menor, por lo que la estrategia probatoria es central." },
      { title: "Violencia doméstica y medidas de protección", description: "Solicitamos y nos oponemos a las medidas de protección de la Ley contra la Violencia Doméstica (Ley N.° 7586), coordinándolas con los procesos de familia en curso. Actuamos con la urgencia que estos casos demandan para resguardar la integridad de las personas afectadas." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría en un asunto de Derecho de Familia en Costa Rica (divorcio, pensión alimentaria, guarda o bienes gananciales). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Cómo funciona el divorcio por mutuo consentimiento en Costa Rica?",
        answer:
          "Cuando ambos cónyuges están de acuerdo, el divorcio por mutuo consentimiento se tramita con base en un convenio en escritura pública que debe regular tres aspectos: la guarda y crianza de los hijos comunes, la obligación alimentaria entre los cónyuges y la distribución de los bienes (art. 60, Código de Familia, Ley N.° 5476). El mutuo consentimiento es una de las vías previstas en el artículo 48 del mismo Código. Desde el 1.° de octubre de 2024 el proceso se rige por el Código Procesal de Familia (Ley N.° 9747), que es oral y por audiencias. Si no hay acuerdo, el divorcio debe demandarse invocando alguna de las causales del artículo 48, como la separación de hecho por un plazo no menor de tres años.",
      },
      {
        question: "¿Cómo se calcula la pensión alimentaria y cuándo empiezo a pagarla?",
        answer:
          "La pensión se fija en proporción a las necesidades del acreedor alimentario y a la capacidad económica del obligado. Conviene actuar pronto: en la misma resolución que da traslado a la demanda, el juez fija una pensión alimentaria provisional, ejecutable aunque el auto no esté firme (art. 21, Ley de Pensiones Alimentarias, Ley N.° 7654). Por eso es clave acreditar desde el inicio los ingresos reales y las cargas del obligado, tanto para fijar una cuota justa como para defenderse de montos desproporcionados.",
      },
      {
        question: "Me llegó una orden de apremio corporal por pensión. ¿Qué puedo hacer?",
        answer:
          "El apremio corporal por incumplimiento del deber alimentario procede hasta por seis mensualidades y no puede mantenerse por más de seis meses (arts. 24 y 25, Ley N.° 7654). La ley excluye de esta medida a la persona menor de edad y a la mayor de setenta y un años. La orden se deja sin efecto al pagar lo adeudado. Lo recomendable es no esperar: gestionamos arreglos de pago, la regularización de la deuda y el levantamiento del apremio, además de valorar un eventual incidente de rebajo si su situación económica cambió.",
      },
      {
        question: "¿Cómo se reparten los bienes cuando termina el matrimonio?",
        answer:
          "Costa Rica reconoce el régimen de participación en los gananciales. Al disolverse o declararse nulo el matrimonio, cada cónyuge adquiere el derecho a participar en la mitad del valor neto de los bienes gananciales que existan en el patrimonio del otro (art. 41, Código de Familia, Ley N.° 5476). No todo es ganancial: quedan excluidos, por ejemplo, los bienes que cada cónyuge tenía antes del matrimonio y los adquiridos por título gratuito, como herencias o donaciones. Identificar y valorar correctamente qué es ganancial es el punto que más se discute en la práctica.",
      },
      {
        question: "¿Quién decide la guarda de los hijos y se puede cambiar después?",
        answer:
          "El tribunal determina la guarda, crianza y educación de los hijos atendiendo siempre al interés superior de la persona menor de edad (art. 56, Código de Familia). Un punto importante es que estas resoluciones no constituyen cosa juzgada material: pueden modificarse cuando cambian las circunstancias que se tuvieron en cuenta al dictarlas. Por eso conviene documentar bien la situación de los hijos, tanto en el proceso inicial como ante una eventual solicitud de modificación del régimen de guarda o de visitas.",
      },
      {
        question: "¿Ya está vigente el nuevo Código Procesal de Familia?",
        answer:
          "Sí. El Código Procesal de Familia (Ley N.° 9747, del 23 de octubre de 2019) rige en su integridad desde el 1.° de octubre de 2024, luego de varias prórrogas de su entrada en vigencia (la última fijada por la Ley N.° 10315, del 27 de septiembre de 2022). Introduce un proceso oral, por audiencias y con plazos propios, distinto del esquema escrito anterior. Esto cambia la forma de litigar el divorcio, la pensión, la filiación y la liquidación de bienes, por lo que la estrategia procesal y probatoria debe ajustarse a las reglas vigentes.",
      },
    ],
  },
  "derecho-laboral": {
    hookHeadline: "¿Lo despidieron sin justa causa o le adeudan sus prestaciones?",
    hookSubtext:
      "Un despido mal liquidado, un finiquito firmado a la ligera o una jornada que nunca le pagaron como extra pueden costarle —o representarle— montos cuantiosos. Desde la Reforma Procesal Laboral (Ley N.° 9343, vigente desde el 25 de julio de 2017), los conflictos laborales se resuelven en un proceso oral por audiencias, mucho más ágil, donde la prueba se ofrece y se evacúa frente al juez. Y los plazos corren rápido: las acciones derivadas del contrato de trabajo prescriben, por regla general, en un año desde su extinción. Acompañamos a personas trabajadoras y a patronos —del sector privado y del empleo público— en despidos, cobro de prestaciones, riesgos del trabajo, discriminación y litigio laboral oral ante los juzgados de trabajo y la Sala Segunda.",
    scenariosTitle: "¿Cuándo necesita un abogado laboralista?",
    triggerScenarios: [
      "Lo despidieron y la liquidación no incluye preaviso, auxilio de cesantía, vacaciones o aguinaldo proporcionales",
      "Le pidieron firmar un finiquito o una renuncia y duda de su validez o de los montos",
      "Lo despidieron estando embarazada, en lactancia, con fuero sindical o tras denunciar un hostigamiento",
      "Trabajó horas extra, en días feriados o de descanso que nunca le pagaron correctamente",
      "Sufrió un accidente o enfermedad laboral y el INS o el patrono no reconocen el riesgo del trabajo",
      "Es funcionario público y enfrenta un despido, un traslado o un recorte salarial que considera ilegal",
      "Es patrono y necesita documentar un despido con justa causa para evitar una demanda costosa",
    ],
    services: [
      { title: "Demanda por despido injustificado y cobro de prestaciones", description: "Reclamamos en sede judicial el preaviso (art. 28 del Código de Trabajo) y el auxilio de cesantía (art. 29), más vacaciones y aguinaldo proporcionales, salarios adeudados y, cuando procede, daños y perjuicios. El auxilio de cesantía se calcula según la antigüedad conforme a la tabla del artículo 29, con un tope general de ocho años de servicio. Litigamos en el proceso ordinario oral por audiencias de la Reforma Procesal Laboral (Ley N.° 9343)." },
      { title: "Defensa del patrono y despido con justa causa", description: "Asesoramos a empresas para documentar y ejecutar despidos sin responsabilidad patronal por las causales del artículo 81 del Código de Trabajo, respetando el plazo de un mes que tiene el patrono para sancionar la falta (art. 414) y el debido proceso. Una falta mal acreditada convierte el despido en injustificado y obliga a pagar prestaciones; prevenirlo es más barato que litigarlo." },
      { title: "Procesos de protección de fueros y no discriminación", description: "Tramitamos el proceso sumarísimo de tutela del fuero especial y de protección contra la discriminación (arts. 540 y siguientes, Reforma Procesal Laboral): mujeres embarazadas o en lactancia, personas con fuero sindical, denunciantes de hostigamiento y otras categorías protegidas. El juez puede ordenar como medida cautelar la suspensión del acto y la reinstalación mientras se resuelve el fondo." },
      { title: "Riesgos del trabajo y enfermedades laborales", description: "Reclamamos el reconocimiento del accidente o la enfermedad laboral y las prestaciones del seguro de riesgos del trabajo (Título IV del Código de Trabajo) frente al INS y al patrono: incapacidades, indemnizaciones por pérdida de capacidad y atención médica. Impugnamos las calificaciones que niegan indebidamente la naturaleza laboral del riesgo." },
      { title: "Litigio laboral en el empleo público", description: "Defendemos a personas funcionarias frente a despidos, reducciones salariales, traslados y procesos disciplinarios. Atendemos los efectos de la Ley Marco de Empleo Público (Ley N.° 10159) —salario global, evaluación del desempeño y rectoría del régimen— y deslindamos cuándo el conflicto corresponde a la jurisdicción laboral y cuándo a la contencioso-administrativa, según el régimen de empleo aplicable." },
      { title: "Recurso de casación laboral ante la Sala Segunda", description: "Cuando la sentencia de segunda instancia es contraria a derecho, planteamos el recurso de casación ante la Sala Segunda de la Corte Suprema de Justicia, último órgano de la jurisdicción laboral. Preparamos el escrito con la técnica que exige la casación para que el recurso no sea rechazado por defectos formales." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría sobre un caso de Derecho Laboral en Costa Rica (despido, prestaciones o empleo público). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Qué me corresponde si me despiden sin justa causa?",
        answer:
          "En un despido sin justa causa de un contrato por tiempo indefinido, la persona trabajadora tiene derecho al preaviso (art. 28 del Código de Trabajo) y al auxilio de cesantía (art. 29), además de las vacaciones y el aguinaldo proporcionales y los salarios pendientes. El preaviso depende del tiempo laborado y la cesantía se calcula según la tabla del artículo 29, en función de la antigüedad, con un tope general de ocho años de servicio. Si el patrono alega una causa del artículo 81 pero no logra acreditarla en juicio, el despido se reputa injustificado y debe pagar igualmente esos rubros.",
      },
      {
        question: "¿Cuánto tiempo tengo para demandar a mi patrono?",
        answer:
          "Los plazos laborales son cortos. Como regla general, los derechos y acciones derivados de los contratos de trabajo prescriben en un año contado desde la extinción del contrato. Existen plazos y reglas especiales según el tipo de reclamo, y la prescripción puede interrumpirse, por ejemplo, con la gestión de conciliación ante el Ministerio de Trabajo. Por eso conviene consultar de inmediato: dejar correr el tiempo puede hacerle perder un reclamo válido.",
      },
      {
        question: "¿Cómo cambió el juicio laboral con la Reforma Procesal Laboral?",
        answer:
          "La Reforma Procesal Laboral (Ley N.° 9343) rige desde el 25 de julio de 2017 y transformó el proceso laboral. Hoy el ordinario es un proceso oral por audiencias, regido por principios de oralidad, concentración, inmediación y celeridad: la prueba se ofrece y se evacúa ante el juez en audiencia, lo que acorta los tiempos frente al antiguo proceso escrito. La reforma también creó procesos especiales más rápidos, como el sumarísimo de protección de fueros, e introdujo la asistencia legal gratuita para personas trabajadoras de escasos recursos.",
      },
      {
        question: "Estoy embarazada y me despidieron, ¿qué puedo hacer?",
        answer:
          "El despido de una trabajadora embarazada o en período de lactancia está sujeto a un fuero especial de protección. La Reforma Procesal Laboral establece un proceso sumarísimo de tutela del fuero (arts. 540 y siguientes) en el que el juez puede ordenar, como medida cautelar, la suspensión del despido y la reinstalación mientras se resuelve el fondo. Conviene actuar con rapidez y documentar que el patrono conocía el estado de embarazo. Este mismo proceso protege a personas con fuero sindical, a denunciantes de hostigamiento y a otras categorías frente a la discriminación.",
      },
      {
        question: "¿La Ley Marco de Empleo Público afecta mi caso si soy funcionario?",
        answer:
          "Puede afectarlo. La Ley Marco de Empleo Público (Ley N.° 10159) reorganizó el empleo público costarricense e introdujo, entre otras figuras, el salario global y la evaluación del desempeño. Sus efectos dependen del régimen al que pertenezca su plaza y de la fecha de su nombramiento. Además, no todo conflicto de empleo público se ventila en la jurisdicción laboral: según el régimen aplicable, algunos asuntos corresponden a la jurisdicción contencioso-administrativa. En la consulta determinamos cuál es la vía correcta para su caso concreto.",
      },
      {
        question: "Soy patrono, ¿cómo evito una demanda al despedir a alguien?",
        answer:
          "La clave es el despido con justa causa bien fundamentado. El artículo 81 del Código de Trabajo enumera las causas que permiten despedir sin responsabilidad patronal, pero deben acreditarse con prueba. Además, el patrono cuenta con un plazo de un mes para sancionar la falta una vez que la conoce y está en posición de resolver (art. 414), y debe respetar el debido proceso. Un despido apresurado, sin prueba o fuera de plazo se convierte en injustificado y obliga a pagar prestaciones. Asesoramos en la documentación previa para reducir ese riesgo.",
      },
    ],
  },
  "derecho-notarial": {
    hookHeadline: "¿Necesita una escritura, un poder o constituir su sociedad sin errores que luego cuesten años?",
    hookSubtext:
      "En materia notarial, un defecto de forma no se nota el día de la firma: aparece cuando usted intenta vender, hipotecar o heredar, y el Registro rechaza el documento. El notariado público es una función pública ejercida privadamente (art. 1, Código Notarial, Ley N.° 7764), y el notario da fe pública de los hechos y actos que documenta, cuyas manifestaciones se presumen ciertas (art. 31). En Corporación GC redactamos cada instrumento con el rigor de quien sabe que la escritura sobrevive a la operación: poderes, compraventas, hipotecas, constitución de sociedades y procesos sucesorios en sede notarial, con presentación oportuna y trazabilidad ante la Dirección Nacional de Notariado y el Archivo Notarial.",
    scenariosTitle: "¿Cuándo necesita un notario público?",
    triggerScenarios: [
      "Va a comprar o vender un inmueble y necesita la escritura pública e inscripción registral",
      "Requiere otorgar un poder (generalísimo, general o especial) para que alguien actúe en su nombre",
      "Va a constituir una sociedad anónima o de responsabilidad limitada y necesita los estatutos y la inscripción",
      "Debe formalizar una hipoteca, un fideicomiso o una garantía sobre un bien",
      "Un familiar falleció y desea tramitar la sucesión en sede notarial, más ágil que la judicial cuando hay acuerdo",
      "Necesita protocolizar un acta de asamblea, una reforma de estatutos o un cambio de junta directiva",
      "Requiere certificaciones notariales, copias certificadas o autenticación de firmas para un trámite",
    ],
    services: [
      { title: "Otorgamiento de escrituras públicas y gestión registral", description: "Redactamos la escritura pública con sus tres partes —introducción, contenido y conclusión (art. 81, Ley N.° 7764)— para compraventas, hipotecas, donaciones, servidumbres y demás actos, y expedimos el testimonio para su inscripción en el Registro Nacional. Cuidamos que el instrumento ingrese sin defectos que provoquen calificación registral negativa o nota de defectos." },
      { title: "Poderes: generalísimos, generales y especiales", description: "Otorgamos el poder con el alcance exacto que usted necesita y el riesgo que está dispuesto a asumir. Distinguimos el poder generalísimo del general y del especial conforme a los artículos 1253 y siguientes del Código Civil, y lo inscribimos en el Registro cuando la ley lo exige, para que su apoderado pueda actuar sin que el banco, la contraparte o el Registro lo objeten." },
      { title: "Constitución y reforma de sociedades", description: "Constituimos sociedades anónimas y de responsabilidad limitada conforme al Código de Comercio (Ley N.° 3284): redacción de estatutos a la medida, nombramiento de junta directiva o gerencia, capital social, libros legales e inscripción en el Registro de Personas Jurídicas. Tramitamos también reformas de estatutos, aumentos de capital, cambios de junta y fusiones, y le orientamos sobre los cambios introducidos por la Ley N.° 10729 (2025) en la identificación de las sociedades." },
      { title: "Procesos sucesorios en sede notarial", description: "Tramitamos sucesiones testamentarias y ab intestato ante notario, una vía generalmente más ágil que la judicial cuando hay acuerdo entre los herederos. Levantamos el acta inicial, protocolizamos el inventario y la partición, y resolvemos el interés fiscal. La actividad notarial no contenciosa está regulada en el Título VI del Código Notarial (Ley N.° 7764): si surge oposición de un interesado, el notario pierde competencia, suspende su intervención y remite el expediente al tribunal competente (art. 134), donde el asunto continúa por la vía judicial conforme al Código Procesal Civil (Ley N.° 9342)." },
      { title: "Protocolización de actas y documentos", description: "Protocolizamos actas de asamblea, reformas estatutarias, documentos y piezas de expedientes (art. 105, Ley N.° 7764), indicando en la introducción el motivo por el cual se actúa, para dar fecha cierta y eficacia registral a sus acuerdos societarios y decisiones corporativas." },
      { title: "Certificaciones, copias certificadas y autenticaciones", description: "Expedimos certificaciones notariales, copias certificadas y autenticación de firmas para los trámites que las requieren ante entidades públicas, bancos y contrapartes. Garantizamos la presentación oportuna de los índices quincenales al Archivo Notarial, dentro de los cinco días hábiles siguientes a los días quince y último de cada mes (arts. 26 y 27, Ley N.° 7764)." },
    ],
    whatsappMessage:
      "Hola, necesito asesoría notarial en Costa Rica (escritura, poder, constitución de sociedad o sucesión). Me gustaría coordinar una consulta.",
    commercialFaq: [
      {
        question: "¿Qué es la fe pública notarial y por qué importa?",
        answer:
          "La fe pública es la facultad del notario de dar autenticidad a los hechos y actos jurídicos que presencia y documenta dentro de los límites de la ley. En virtud de ella, se presumen ciertas las manifestaciones del notario que constan en los instrumentos y demás documentos autorizados por él (art. 31, Código Notarial, Ley N.° 7764). El notariado público es la función pública ejercida privadamente (art. 1). En la práctica, eso significa que una escritura bien otorgada tiene valor probatorio frente a terceros, al Registro y a los tribunales; un instrumento mal redactado, en cambio, puede ser objetado y dejarle sin la seguridad jurídica que creía tener.",
      },
      {
        question: "¿Qué diferencia hay entre un poder generalísimo, uno general y uno especial?",
        answer:
          "El alcance: el poder generalísimo faculta para actuar en todos los negocios del poderdante, incluso disponer de sus bienes (vender, hipotecar) y representarlo de la manera más amplia; el poder general se limita a la administración de los bienes o de un giro de negocios, sin facultad para disponer libremente; el poder especial se otorga para uno o varios actos concretos. Estas categorías y sus límites están en los artículos 1253 y siguientes del Código Civil. Elegir mal el tipo de poder es un error frecuente: un generalísimo entrega demasiado control y un especial puede quedarse corto para el trámite que usted necesita. Por eso lo ajustamos al acto y al riesgo concreto.",
      },
      {
        question: "¿Puedo tramitar una sucesión ante notario en lugar del juzgado?",
        answer:
          "Sí. El Código Notarial (Ley N.° 7764), en su Título VI sobre actividad judicial no contenciosa, permite tramitar el proceso sucesorio en sede notarial cuando hay acuerdo entre los herederos, vía que suele ser más ágil que la judicial. El notario levanta el acta inicial, protocoliza el inventario y la partición, y atiende el interés fiscal. La clave es la ausencia de conflicto: si cualquier interesado formula oposición, el notario pierde competencia, suspende su intervención y remite el expediente al tribunal competente (art. 134), donde el asunto continúa por la vía judicial conforme al Código Procesal Civil (Ley N.° 9342). Por eso evaluamos primero si su caso es idóneo para la vía notarial.",
      },
      {
        question: "¿Cuánto tarda y qué necesito para constituir una sociedad?",
        answer:
          "La constitución de una sociedad anónima o de responsabilidad limitada se rige por el Código de Comercio (Ley N.° 3284) y se formaliza mediante escritura pública que luego se inscribe en el Registro de Personas Jurídicas del Registro Nacional. Necesitamos la identificación de los socios, el nombre y objeto social, el capital, la estructura de administración (junta directiva o gerencia) y el domicilio. Redactamos los estatutos a la medida del negocio —no plantillas genéricas— y dejamos lista la sociedad con sus libros legales. Después conviene atender obligaciones complementarias como la inscripción tributaria y la declaración del Registro de Transparencia y Beneficiarios Finales. Tenga presente, además, los cambios de la Ley N.° 10729 (2025) en materia de identificación de las sociedades.",
      },
      {
        question: "¿Por qué el Registro rechaza algunas escrituras y cómo lo evitan?",
        answer:
          "El Registro Nacional califica cada documento y puede consignar una nota de defectos cuando la escritura no reúne los requisitos de forma o de fondo: descripción incorrecta del inmueble, citas registrales erróneas, falta de comparecencia o representación debidamente acreditada, o ausencia de alguno de los elementos de la escritura pública (introducción, contenido y conclusión; art. 81, Ley N.° 7764). Nosotros revisamos el estado registral y los antecedentes antes de otorgar, de modo que el testimonio ingrese limpio y se inscriba sin que usted tenga que pagar reprocesos ni perder la prioridad de presentación.",
      },
      {
        question: "¿Quién supervisa a los notarios en Costa Rica?",
        answer:
          "La Dirección Nacional de Notariado (DNN) es el órgano rector de la actividad notarial; tras la reforma del Código Notarial por la Ley N.° 8795 (2010), es un órgano de desconcentración máxima adscrito al Ministerio de Justicia y Paz, con competencia para regular, habilitar y fiscalizar a los notarios públicos (art. 21, Ley N.° 7764). Además, los notarios deben rendir cuentas presentando índices quincenales al Archivo Notarial, dentro de los cinco días hábiles siguientes a los días quince y último de cada mes (arts. 26 y 27). Trabajar con un notario que cumple estos controles le da trazabilidad: sus instrumentos quedan debidamente reportados y archivados.",
      },
    ],
  },
};
