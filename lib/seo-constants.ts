// lib/seo-constants.ts
// Datos seo / og por slug. Pegar en lib/constants.ts o mantener separado.

export interface PracticeAreaSeo {
  /** Título mostrado en H1 de la página (sin afijos). */
  title: string;
  /** Descripción larga / subtítulo. */
  description: string;
  /** <title> + meta description. */
  seoTitle?: string;
  seoDescription?: string;
  /** Para la imagen OG default — texto del H1 con `{{em}}` como placeholder de la palabra a destacar. */
  ogShortTitle?: string;
  ogEmphasis?: string;
}

export const PRACTICE_AREA_PAGES: Record<string, PracticeAreaSeo> = {
  "casacion-sala-primera": {
    title: "Casación ante Sala Primera",
    description:
      "Recurso ante la Sala Primera dirigido por el ex-Magistrado de la propia Sala y co-redactor del CPCA.",
    seoTitle: "Recurso de Casación ante Sala Primera · Costa Rica",
    seoDescription:
      "¿Perdió en el TCA y necesita casación? Recurso ante la Sala Primera dirigido por el ex-Magistrado de la propia Sala y co-redactor del CPCA. Vicios de sentencia, técnica casacional, arts. 134-148.",
    ogShortTitle: "Recurso de Casación ante la {{em}}",
    ogEmphasis: "Sala Primera",
  },
  "contratacion-publica": {
    title: "Contratación pública",
    description:
      "Litigio en licitaciones públicas conforme a la Ley N.° 9986. Experiencia ante CGR, SICOP y TCA.",
    seoTitle: "Contratación Pública · Licitaciones Costa Rica",
    seoDescription:
      "Objeción al cartel, impugnación de adjudicaciones y litigio en licitaciones públicas conforme a la Ley N.° 9986. Bufete con experiencia ante CGR, SICOP y el TCA. Asesoría inmediata para contratistas.",
    ogShortTitle: "{{em}} y licitaciones",
    ogEmphasis: "Contratación pública",
  },
  "recursos-de-amparo": {
    title: "Recursos de amparo",
    description:
      "Protección urgente de derechos fundamentales ante la Sala Constitucional.",
    seoTitle: "Recurso de Amparo · Sala IV, Costa Rica",
    seoDescription:
      "Protección urgente de derechos fundamentales ante la Sala Constitucional. Amparo contra actos u omisiones de autoridades públicas y sujetos privados. Ley N.° 7135, arts. 29-56. Asesoría inmediata.",
    ogShortTitle: "Recurso de amparo · {{em}}",
    ogEmphasis: "Sala IV",
  },
  "acciones-de-inconstitucionalidad": {
    title: "Acciones de inconstitucionalidad",
    description:
      "Impugnación de leyes, decretos y reglamentos contrarios a la Constitución.",
    seoTitle: "Acción de Inconstitucionalidad · Sala IV, Costa Rica",
    seoDescription:
      "Impugnación de leyes, decretos y reglamentos contrarios a la Constitución ante la Sala Constitucional. Bufete dirigido por especialista en Derecho Constitucional formado en España. Ley N.° 7135.",
    ogShortTitle: "Acción de {{em}}",
    ogEmphasis: "inconstitucionalidad",
  },
  "asesoria-regulatoria": {
    title: "Asesoría regulatoria",
    description:
      "Redacción de reglamentos, decretos ejecutivos y normativa de alcance general.",
    seoTitle: "Redacción de Reglamentos y Decretos · Costa Rica",
    seoDescription:
      "Asesoría experta a entes públicos en redacción de reglamentos, decretos ejecutivos y normativa de alcance general conforme al art. 140.3 de la Constitución y arts. 121-129 de la LGAP. Corporación GC.",
    ogShortTitle: "Reglamentos y {{em}}",
    ogEmphasis: "decretos",
  },
  "informes-juridicos-dictamenes": {
    title: "Informes y dictámenes jurídicos",
    description:
      "Informes y dictámenes para entes públicos sobre legalidad de actuaciones, contratos y procedimientos.",
    seoTitle: "Dictámenes de Legalidad Administrativa · Costa Rica",
    seoDescription:
      "Informes y dictámenes jurídicos para entes públicos sobre legalidad de actuaciones, contratos y procedimientos. Bufete dirigido por el co-redactor del CPCA, ex-Magistrado de la Sala Primera de la CSJ.",
    ogShortTitle: "Dictámenes de {{em}}",
    ogEmphasis: "legalidad administrativa",
  },
  "derecho-administrativo": {
    title: "Vía administrativa y recursos",
    description:
      "Procedimientos administrativos ordinarios y agotamiento de vía administrativa conforme a la LGAP.",
    seoTitle: "Recurso de Revocatoria y Apelación · Costa Rica",
    seoDescription:
      "Procedimientos administrativos ordinarios, recursos de revocatoria con apelación en subsidio y agotamiento de vía administrativa conforme a la LGAP (arts. 308-352). Defensa del administrado.",
    ogShortTitle: "Recurso de {{em}} y apelación",
    ogEmphasis: "revocatoria",
  },
  "procedimientos-sancionatorios": {
    title: "Procedimientos sancionatorios",
    description:
      "Defensa del administrado en procedimientos disciplinarios y sancionatorios.",
    seoTitle: "Defensa en Procedimientos Sancionatorios · CR",
    seoDescription:
      "Defensa del administrado en procedimientos disciplinarios y sancionatorios de la Administración Pública. Garantías del debido proceso, audiencia oral y recursos. LGAP arts. 308-319. Asesoría urgente.",
    ogShortTitle: "Defensa en procedimientos {{em}}",
    ogEmphasis: "sancionatorios",
  },
  "empleo-publico": {
    title: "Empleo público",
    description:
      "Defensa de servidores públicos en procedimientos disciplinarios, suspensiones y despidos.",
    seoTitle: "Empleo Público · Defensa de Servidores | CR",
    seoDescription:
      "Defensa de servidores públicos en procedimientos disciplinarios, suspensiones y despidos. Estatuto de Servicio Civil, Ley Marco de Empleo Público (Ley N.° 10159) y procedimiento ordinario LGAP.",
    ogShortTitle: "Empleo público · {{em}}",
    ogEmphasis: "defensa de servidores",
  },
  "servicio-publico": {
    title: "Servicio público y regulación tarifaria",
    description:
      "Fijación tarifaria e impugnación de resoluciones de ARESEP y SUTEL.",
    seoTitle: "Litigio ante ARESEP y SUTEL · Costa Rica",
    seoDescription:
      "Fijación tarifaria, impugnación de resoluciones de ARESEP y SUTEL, defensa de concesiones de servicios públicos y litigio regulatorio conforme a la Ley N.° 7593. Bufete con experiencia comprobada.",
    ogShortTitle: "Litigio ante {{em}} y SUTEL",
    ogEmphasis: "ARESEP",
  },
  "materia-municipal": {
    title: "Materia municipal",
    description:
      "Impugnación de actos municipales, patentes y acuerdos del Concejo.",
    seoTitle: "Derecho Municipal · Litigio Municipalidades CR",
    seoDescription:
      "Impugnación de actos municipales, patentes, tributos locales y acuerdos del Concejo. Litigio contencioso-administrativo contra gobiernos locales conforme al Código Municipal (Ley N.° 7794).",
    ogShortTitle: "Derecho {{em}}",
    ogEmphasis: "municipal",
  },
  "dominio-publico": {
    title: "Dominio público",
    description:
      "Concesiones sobre bienes del Estado y permisos de uso sobre bienes demaniales.",
    seoTitle: "Dominio Público y Concesiones · Costa Rica",
    seoDescription:
      "Concesiones sobre bienes del Estado, defensa contra revocatorias, caducidades y desalojos administrativos. Protección de derechos derivados de permisos de uso sobre bienes demaniales en Costa Rica.",
    ogShortTitle: "{{em}} y concesiones",
    ogEmphasis: "Dominio público",
  },
  "derecho-urbanistico": {
    title: "Derecho urbanístico",
    description:
      "Permisos de construcción, zonificación y planes reguladores.",
    seoTitle: "Permisos de Construcción y Urbanismo · CR",
    seoDescription:
      "Impugnación de denegatorias de permisos de construcción, recursos contra zonificación y defensa frente a planes reguladores cantonales conforme a la Ley de Planificación Urbana (Ley N.° 4240).",
    ogShortTitle: "Permisos de construcción y {{em}}",
    ogEmphasis: "urbanismo",
  },
  "materia-presupuestaria": {
    title: "Materia presupuestaria",
    description:
      "Impugnación de resoluciones de la Contraloría y litigio sobre aprobación presupuestaria.",
    seoTitle: "Litigio contra la Contraloría · Costa Rica",
    seoDescription:
      "Impugnación de resoluciones de la Contraloría General, defensa en responsabilidad fiscal y litigio sobre aprobación presupuestaria conforme a la Ley N.° 8131 y la Ley Orgánica de la CGR (N.° 7428).",
    ogShortTitle: "Litigio contra la {{em}}",
    ogEmphasis: "Contraloría",
  },
  "comercio-internacional": {
    title: "Comercio internacional",
    description:
      "Antidumping, salvaguardias y solución de controversias bajo TLCs y OMC.",
    seoTitle: "Antidumping y Comercio Internacional · CR",
    seoDescription:
      "Investigaciones antidumping y de salvaguardias ante COMEX, defensa frente a derechos compensatorios y solución de controversias bajo TLCs y OMC. Cumplimiento arancelario conforme a la Ley N.° 7638.",
    ogShortTitle: "{{em}} y comercio internacional",
    ogEmphasis: "Antidumping",
  },
  "compliance-publico-anticorrupcion": {
    title: "Compliance público y anticorrupción",
    description:
      "Programas de compliance para contratistas del Estado y defensa ante CGR.",
    seoTitle: "Compliance Anticorrupción · Costa Rica",
    seoDescription:
      "Programas de compliance para contratistas del Estado y defensa ante CGR y Ministerio Público. Reducción de hasta 40% en multas conforme a la Ley N.° 9699. Diagnóstico de riesgo y debida diligencia.",
    ogShortTitle: "Compliance {{em}}",
    ogEmphasis: "anticorrupción",
  },
  "gobierno-digital-inteligencia-artificial-datos": {
    title: "IA, gobierno digital y datos",
    description:
      "Cumplimiento PRODHAB, gobierno digital y regulación de IA en la Administración.",
    seoTitle: "IA, Gobierno Digital y Protección de Datos · Costa Rica",
    seoDescription:
      "Cumplimiento de PRODHAB (Ley N.° 8968), gobierno digital (Ley N.° 9943) y regulación de IA en la Administración. Gobernanza algorítmica, transparencia y defensa en sanciones. Corporación GC.",
    ogShortTitle: "IA, gobierno digital y {{em}}",
    ogEmphasis: "datos",
  },
  "defensa-regulatoria-sectorial": {
    title: "Defensa regulatoria sectorial",
    description:
      "Defensa ante COPROCOM, SUTEL, SUGEF y ARESEP.",
    seoTitle: "Defensa ante COPROCOM, SUGEF y Reguladores · CR",
    seoDescription:
      "Defensa de empresas en procedimientos sancionatorios de COPROCOM, SUTEL, SUGEF y ARESEP. Carteles, prácticas monopolísticas, Programa de Clemencia e impugnación de sanciones desproporcionadas.",
    ogShortTitle: "Defensa ante {{em}} y reguladores",
    ogEmphasis: "COPROCOM",
  },
  "regulacion-ambiental-mercados-carbono": {
    title: "Regulación ambiental y mercados de carbono",
    description:
      "Defensa ante SETENA, MINAE y SINAC; estructuración de créditos de carbono.",
    seoTitle: "Litigio Ambiental y Mercados de Carbono · CR",
    seoDescription:
      "Defensa ante SETENA, MINAE y SINAC, evaluación de impacto ambiental y estructuración de créditos de carbono (UCC, FONAFIFO). Cumplimiento del CBAM europeo. Litigio ambiental ante TCA y Sala IV.",
    ogShortTitle: "Litigio ambiental y mercados de {{em}}",
    ogEmphasis: "carbono",
  },
  "alianzas-publico-privadas-infraestructura": {
    title: "Alianzas público-privadas e infraestructura",
    description:
      "Concesiones de obra pública y APP bajo la Ley N.° 7762.",
    seoTitle: "Concesiones de Obra Pública y APP · Costa Rica",
    seoDescription:
      "Estructuración, negociación y arbitraje de concesiones e infraestructura pública bajo la Ley N.° 7762. Defensa ante CNC, MOPT y CGR. Litigio contencioso de actos administrativos en proyectos APP.",
    ogShortTitle: "Concesiones de obra pública y {{em}}",
    ogEmphasis: "APP",
  },
  "regulacion-fintech-criptoactivos": {
    title: "Regulación fintech y criptoactivos",
    description:
      "Asesoría a fintechs, exchanges y VASPs ante SUGEF y CONASSIF.",
    seoTitle: "Regulación Fintech y Cripto · Costa Rica",
    seoDescription:
      "Asesoría a fintechs, exchanges y VASPs ante SUGEF y CONASSIF. Registro VASP (Proyecto N.° 22.837), AML/CFT (Ley N.° 8204) y cumplimiento de estándares CARF/OCDE para criptoactivos.",
    ogShortTitle: "Regulación {{em}} y cripto",
    ogEmphasis: "fintech",
  },
  "derecho-electoral-financiamiento-politico": {
    title: "Derecho electoral y financiamiento político",
    description:
      "Cumplimiento, liquidación de deuda política y disputas ante el TSE.",
    seoTitle: "Derecho Electoral y Financiamiento Político · CR",
    seoDescription:
      "Primera firma costarricense con práctica en derecho electoral desde el Derecho Público. Cumplimiento, liquidación de deuda política y disputas ante el TSE. Código Electoral y Ley N.° 10755 (2025).",
    ogShortTitle: "Derecho {{em}} y financiamiento político",
    ogEmphasis: "electoral",
  },
  "telecomunicaciones-espectro-5g": {
    title: "Telecomunicaciones, espectro y 5G",
    description:
      "Asesoría a concesionarios de espectro, operadores de torres y satelitales.",
    seoTitle: "Telecomunicaciones, Espectro y 5G · Costa Rica",
    seoDescription:
      "Asesoría a concesionarios de espectro, operadores de torres y satelitales tras la subasta 5G de 2025. Cumplimiento ante SUTEL y MICITT, permisos municipales y compartición de infraestructura.",
    ogShortTitle: "Telecomunicaciones, espectro y {{em}}",
    ogEmphasis: "5G",
  },
  "energia-renovable-transicion-energetica": {
    title: "Energía renovable y transición energética",
    description:
      "Permisos, contratos PPA con ICE y regulación tarifaria ante ARESEP.",
    seoTitle: "Energía Renovable y PPA con ICE · Costa Rica",
    seoDescription:
      "Asesoría a generadores privados en permisos, contratos PPA con ICE, regulación tarifaria ante ARESEP y disputas de despacho. Hidrógeno verde, almacenamiento y Mercado Eléctrico Regional (SIEPAC).",
    ogShortTitle: "Energía renovable y {{em}}",
    ogEmphasis: "PPA con ICE",
  },
  "derecho-civil": {
    title: "Derecho civil",
    description:
      "Responsabilidad civil, cobro judicial, sucesiones y nulidades.",
    seoTitle: "Derecho Civil · Litigio Privado | Costa Rica",
    seoDescription:
      "Responsabilidad civil contractual y extracontractual, cobro judicial, desahucio, reivindicatorios, sucesiones y nulidades conforme al Código Civil (N.° 63) y al Código Procesal Civil (Ley N.° 9342).",
    ogShortTitle: "Derecho {{em}} · Litigio privado",
    ogEmphasis: "civil",
  },
  "derecho-de-familia": {
    title: "Derecho de familia",
    description:
      "Divorcio, pensión alimentaria, guarda y crianza, filiación.",
    seoTitle: "Derecho de Familia · Divorcio y Pensiones | CR",
    seoDescription:
      "Divorcio, pensión alimentaria, guarda y crianza, filiación, liquidación de gananciales y violencia doméstica conforme al Código de Familia (Ley N.° 5476) y Ley de Pensiones Alimentarias (N.° 7654).",
    ogShortTitle: "Derecho de familia · {{em}} y pensiones",
    ogEmphasis: "divorcio",
  },
  "derecho-laboral": {
    title: "Derecho laboral",
    description:
      "Despido, prestaciones, riesgos del trabajo y litigio oral laboral.",
    seoTitle: "Derecho Laboral · Despido y Prestaciones | CR",
    seoDescription:
      "Despido injustificado, cobro de prestaciones, riesgos del trabajo, discriminación y litigio oral laboral conforme al Código de Trabajo y la Reforma Procesal Laboral (Ley N.° 9343). Asesoría experta.",
    ogShortTitle: "Derecho {{em}} · Despido y prestaciones",
    ogEmphasis: "laboral",
  },
  "derecho-notarial": {
    title: "Derecho notarial",
    description:
      "Escrituras públicas, sociedades, compraventas, hipotecas y fideicomisos.",
    seoTitle: "Notario Público · Escrituras y Sociedades | CR",
    seoDescription:
      "Servicios notariales completos: escrituras públicas, protocolizaciones, constitución de sociedades, compraventas, hipotecas, fideicomisos y gestión registral conforme al Código Notarial (N.° 7764).",
    ogShortTitle: "Notario público · escrituras y {{em}}",
    ogEmphasis: "sociedades",
  },
};

// =============================================================
// ABOGADOS
// =============================================================
export interface AttorneySeo {
  name: string;
  initials: string;
  role: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  ogImageAlt: string;
  /** Frase fuerte en el panel de la imagen OG (≤180 chars). */
  credential: string;
  /** Path en /public para la foto editorial del retrato (ej. "/images/oscar.png"). */
  photo?: string;
  /** CSS object-position para encuadrar la foto (ej. "50% 0%"). Y bajo favorece la cabeza. */
  photoFocus?: string;
  /** Pre-procesa la foto antes de renderizar (extiende canvas arriba o recorta abajo). */
  photoTransform?: {
    extendTopRatio?: number;
    cropBottomRatio?: number;
  };
}

export const ATTORNEYS: Record<string, AttorneySeo> = {
  "oscar-gonzalez": {
    name: "Dr. Óscar Eduardo González Camacho",
    initials: "OG",
    role: "Fundador y Director",
    seoTitle: "Dr. Óscar González Camacho · Fundador y Director",
    seoDescription:
      "Ex-Magistrado de la Sala Primera, co-redactor del CPCA. Dr. en Derecho por la Universidad de Alcalá. 38+ años de trayectoria en Derecho Público en Costa Rica.",
    ogTitle: "Dr. Óscar González Camacho — Fundador, Corporación GC",
    ogDescription:
      "Ex-Magistrado de la Corte Suprema (2002-2014), co-redactor del Código Procesal Contencioso Administrativo. Doctor en Derecho por Alcalá, Cum Laude. Litigante de mayor calado en lo contencioso CR.",
    twitterTitle: "Dr. Óscar González Camacho · Corporación GC",
    ogImageAlt:
      "Retrato profesional del Dr. Óscar Eduardo González Camacho, Fundador y Director de Corporación GC.",
    credential:
      "Ex-Magistrado de la Sala Primera (2002–2014). Co-redactor del CPCA. Doctor en Derecho por la Universidad de Alcalá, Cum Laude.",
    photo: "/images/oscar-gonzalez-solo.png",
    photoFocus: "60% 50%",
  },
  "khevin-sanchez": {
    name: "Lic. Khevin Sánchez Zamora",
    initials: "KS",
    role: "Abogado Asociado",
    seoTitle: "Lic. Khevin Sánchez Zamora · Abogado Asociado",
    seoDescription:
      "Abogado asociado de Corporación GC. Especialista en medidas cautelares y litigio contencioso. 3er mejor promedio del Examen de Excelencia, Colegio de Abogados 2025.",
    ogTitle: "Lic. Khevin Sánchez Zamora — Corporación GC, CR",
    ogDescription:
      "Litigio contencioso-administrativo, medidas cautelares y Derecho Constitucional. Investigador en IA aplicada a la justicia. 3er mejor promedio del Examen de Excelencia del Colegio de Abogados 2025.",
    twitterTitle: "Lic. Khevin Sánchez Zamora · Corporación GC",
    ogImageAlt:
      "Retrato profesional del Lic. Khevin Sánchez Zamora, Abogado Asociado en Corporación GC.",
    credential:
      "Especialista en medidas cautelares y litigio contencioso. 3.er mejor promedio del Examen de Excelencia, Colegio de Abogados 2025.",
    photo: "/images/foto-perfil.png",
    photoFocus: "50% 0%",
    photoTransform: { cropBottomRatio: 0.25 },
  },
  "katherine-gonzalez": {
    name: "MSc. Katherine González Coto",
    initials: "KG",
    role: "Abogada Asociada",
    seoTitle: "MSc. Katherine González Coto · Abogada Asociada",
    seoDescription:
      "Abogada asociada de Corporación GC. Máster en Derecho Público (UCR), Notaria. Especialista en responsabilidad patrimonial del Estado y derecho expropiatorio.",
    ogTitle: "MSc. Katherine González Coto — Corporación GC, CR",
    ogDescription:
      "Máster en Derecho Público por la UCR, Licenciada en Derecho y Notaria por la UELD. Investigadora en responsabilidad patrimonial de la Administración y derecho expropiatorio. Cuatro idiomas.",
    twitterTitle: "MSc. Katherine González Coto · Corporación GC",
    ogImageAlt:
      "Retrato profesional de la MSc. Katherine González Coto, Abogada Asociada en Corporación GC.",
    credential:
      "Máster en Derecho Público (UCR), Notaria. Especialista en responsabilidad patrimonial del Estado y derecho expropiatorio.",
    photo: "/images/katherine-gonzalez.png",
    photoFocus: "50% 5%",
  },
  "mariana-montero": {
    name: "Licda. Mariana Montero Acuña",
    initials: "MM",
    role: "Abogada Asociada",
    seoTitle: "Licda. Mariana Montero · Abogada Asociada",
    seoDescription:
      "Abogada asociada de Corporación GC. Licenciada en Derecho con mención en Derechos Humanos por la UCR. Especialista en malpraxis médica y responsabilidad del Estado.",
    ogTitle: "Licda. Mariana Montero Acuña — Corporación GC, CR",
    ogDescription:
      "Licenciada en Derecho con mención en Derechos Humanos (UCR, con distinción). Egresada de la Maestría en Derecho Público. Especialista en malpraxis médica, iatrogenia y responsabilidad patrimonial.",
    twitterTitle: "Licda. Mariana Montero Acuña · Corporación GC",
    ogImageAlt:
      "Retrato profesional de la Licda. Mariana Montero Acuña, Abogada Asociada en Corporación GC.",
    credential:
      "Licenciada en Derecho con mención en Derechos Humanos (UCR). Especialista en malpraxis médica y responsabilidad del Estado.",
    photo: "/images/mariana-montero.png",
    photoFocus: "50% 5%",
  },
  "esteban-perez": {
    name: "Lic. Esteban Pérez Herrera",
    initials: "EP",
    role: "Abogado Asociado",
    seoTitle: "Lic. Esteban Pérez Herrera · Abogado Asociado",
    seoDescription:
      "Abogado asociado de Corporación GC. Más de 9 años de experiencia en litigio contencioso-administrativo. Notario Público. Maestrando en Derecho Público (UCR).",
    ogTitle: "Lic. Esteban Pérez Herrera — Corporación GC, CR",
    ogDescription:
      "Abogado litigante y Notario Público con 9+ años en litigio contencioso-administrativo, contratación pública y derecho constitucional. Maestrando en Derecho Público en la UCR. Corporación GC.",
    twitterTitle: "Lic. Esteban Pérez Herrera · Corporación GC",
    ogImageAlt:
      "Retrato profesional del Lic. Esteban Pérez Herrera, Abogado Asociado en Corporación GC.",
    credential:
      "Más de 9 años en litigio contencioso-administrativo. Notario Público. Maestrando en Derecho Público (UCR).",
    photo: "/images/esteban-perez.jpg",
    photoFocus: "50% 0%",
    photoTransform: { extendTopRatio: 0.15 },
  },
  "jose-carlos-solano": {
    name: "Lic. José Carlos Solano Salas",
    initials: "JS",
    role: "Abogado Asociado",
    seoTitle: "Lic. José Carlos Solano · Abogado Asociado",
    seoDescription:
      "Abogado asociado de Corporación GC. Excelencia Académica UCR. Especialista en Derecho Notarial y Registral, ZMT y procedimientos ante la Contraloría (CGR).",
    ogTitle: "Lic. José Carlos Solano Salas — Corporación GC",
    ogDescription:
      "Licenciado en Derecho con Excelencia Académica (UCR). Especialista en Derecho Notarial y Registral, Zona Marítimo Terrestre y procedimientos ante la CGR. Aceptado en la Goethe-Universität Frankfurt.",
    twitterTitle: "Lic. José Carlos Solano Salas · Corporación GC",
    ogImageAlt:
      "Retrato profesional del Lic. José Carlos Solano Salas, Abogado Asociado en Corporación GC.",
    credential:
      "Excelencia Académica UCR. Especialista en Derecho Notarial y Registral, ZMT y procedimientos ante la CGR.",
    photo: "/images/jose-carlos-solano.jpeg",
    photoFocus: "50% 0%",
    photoTransform: { extendTopRatio: 0.15 },
  },
};

/**
 * Helper para derivar las iniciales del nombre de un autor (artículos)
 * cuando no están explícitas. Quita honoríficos comunes y toma las iniciales
 * de las dos primeras palabras restantes.
 */
export function authorInitials(name: string): string {
  const HONORIFICS = /^(dr\.?|dra\.?|lic\.?|licda\.?|msc\.?|mtro\.?|mtra\.?|ing\.?)$/i;
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((p) => !HONORIFICS.test(p));
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
