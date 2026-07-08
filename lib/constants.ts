// ─── Firma (Homepage) ───

export const FIRM = {
  name: "Corporación GC",
  title: "Corporación GC · Abogados en Derecho Público | Costa Rica",
  description:
    "Bufete líder en litigio contencioso-administrativo en Costa Rica. Fundado por el Dr. Óscar González Camacho, ex-Magistrado y co-redactor del CPCA. Especialistas en Derecho Público.",
  url: "https://www.corporaciongc.com",
  locale: "es_CR",
} as const;

export const FIRM_CONTACT = {
  email: "info@corporaciongc.com",
  phone: "+506 8317-9564",
  phoneRaw: "50683179564",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
  hours: "Lunes a Viernes, 9:00 am – 6:00 pm",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ofident,+Barrio+Dent,+Montes+de+Oca,+San+Jos%C3%A9,+Costa+Rica&t=&z=17&ie=UTF8&iwloc=B&output=embed",
  whatsappMessage:
    "Hola, me gustaría coordinar una consulta jurídica con Corporación GC.",
} as const;

export const FIRM_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "La Firma", href: "#la-firma" },
  { label: "Equipo", href: "#equipo" },
  { label: "Áreas", href: "/areas" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const FIRM_CREDENTIALS = [
  { metric: "5", label: "Abogados especializados en Derecho Público", detail: "Formados bajo la dirección del fundador" },
  { metric: "CPCA", label: "Co-redactado por nuestro Director", detail: "Ley N.° 8508" },
  { metric: "11", label: "Años litigando en lo Contencioso Administrativo", detail: "Desde 2015" },
] as const;

export const CLIENT_LOGOS = [
  { name: "SUTEL", src: "/images/clients/sutel-white.png", scale: 1.95, offsetY: -4 },
  { name: "INS", src: "/images/clients/ins-white.png", scale: 1.15, offsetY: -6 },
  { name: "Banco Mundial", src: "/images/clients/world-bank-white.png", scale: 2.15, offsetY: 3 },
  { name: "CFIA", src: "/images/clients/cfia-white.png", scale: 1.55, offsetY: 0 },
  { name: "Colegio de Abogados", src: "/images/clients/cab-white.png", scale: 1.35, offsetY: 0 },
  { name: "Colegio de Médicos", src: "/images/clients/colegio-medicos-white.png", scale: 1.5, offsetY: 0 },
  { name: "El Viejo", src: "/images/clients/el-viejo-white.png", scale: 1.1, offsetY: 0 },
  { name: "Taboga", src: "/images/clients/taboga-white.png", scale: 1.55, offsetY: 0 },
  { name: "Municipalidad de San Carlos", src: "/images/clients/san-carlos-white.png", scale: 1.2, offsetY: 0 },
  { name: "ELEINMSA", src: "/images/clients/eleinmsa-white.png", scale: 1.3, offsetY: 0 },
  { name: "Gas Z", src: "/images/clients/gasz-white.png", scale: 1.3, offsetY: 0 },
  { name: "Grupo Orosí", src: "/images/clients/grupo-orosi-white.png", scale: 1.3, offsetY: 6 },
  { name: "Mercasa", src: "/images/clients/mercasa-white.png", scale: 1.3, offsetY: 0 },
  { name: "UNA", src: "/images/clients/una-white.png", scale: 1.3, offsetY: 0 },
  { name: "ICE", src: "/images/clients/ice-white.png", scale: 1.4, offsetY: -3 },
  { name: "Taxis Unidos", src: "/images/clients/taxis-unidos-white.png", scale: 1.5, offsetY: 0 },
  { name: "Colegio de Terapeutas", src: "/images/clients/colegio-terapeutas-white.png", scale: 1.3, offsetY: 0 },
  { name: "Coocafé", src: "/images/clients/coocafe-white.png", scale: 1.3, offsetY: 0 },
] as const;

export const OSCAR_PROFILE = {
  name: "Dr. Óscar Eduardo González Camacho",
  role: "Fundador y Director",
  photo: "/images/oscar-gonzalez-oficina.png",
  heroDescription: "Ex-Magistrado de la Corte Suprema de Justicia. Co-redactor del Código Procesal Contencioso Administrativo. Uno de los litigantes de mayor calado en la jurisdicción contencioso-administrativa costarricense.",
  heroBio: "Doctor en Derecho por la Universidad de Alcalá de Henares con la calificación Sobresaliente Cum Laude. Con más de 38 años de trayectoria ininterrumpida en el Derecho Público, el Dr. Óscar Eduardo González Camacho forjó la jurisdicción contenciosa moderna desde la judicatura y hoy la domina desde el litigio. Desde 2015 dirige Corporación GC como uno de los abogados litigantes de mayor calado en la materia administrativa del país.",
  education: [
    { degree: "Doctor en Derecho", institution: "Universidad de Alcalá de Henares, España", period: "1995 – 1998", distinction: "Sobresaliente Cum Laude" },
    { degree: "Especialista en Derecho Constitucional y Ciencia Política", institution: "Centro de Estudios Políticos y Constitucionales, España", period: "1995 – 1998" },
    { degree: "Especialista en Derecho Público", institution: "Universidad de Costa Rica", period: "1990 – 1992", distinction: "Graduación de Honor" },
    { degree: "Licenciado en Derecho y Notario Público", institution: "Universidad de Costa Rica", period: "1980 – 1986" },
  ],
  career: [
    { role: "Fundador y Director — Litigante", org: "Corporación GC", period: "2015 – Presente", description: "Uno de los litigantes de mayor calado en la jurisdicción contencioso-administrativa costarricense. Litigio de alto nivel ante el TCA, Sala Primera, Sala Constitucional y diversas instancias administrativas. Dirección estratégica del bufete y formación de un equipo de abogados especializados en Derecho Público.", highlight: true },
    { role: "Magistrado", org: "Sala Primera, Corte Suprema de Justicia", period: "2002 – 2014", description: "Magistrado de la Sala Primera de la Corte Suprema de Justicia durante 12 años. Co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508). Coordinador de la Jurisdicción Contencioso-Administrativa (2003-2010, 2012) y de la Comisión de Asuntos Ambientales del Poder Judicial (2008-2014).", highlight: false },
    { role: "Juez Superior", org: "Tribunal Contencioso Administrativo", period: "1996 – 2002", description: "Juez Superior del Tribunal de lo Contencioso Administrativo y Magistrado Suplente de la Corte Suprema (1999-2002). Contribución directa al desarrollo de la jurisprudencia administrativa costarricense.", highlight: false },
    { role: "Juez de Primera Instancia", org: "Juzgado Contencioso Administrativo", period: "1986 – 1992", description: "Inicio de la carrera judicial en materia contencioso-administrativa. Funcionario del Juzgado Primero Contencioso Administrativo desde 1984.", highlight: false },
  ],
  teaching: [
    { role: "Catedrático Universitario", institution: "Universidad Escuela Libre de Derecho", detail: "Máxima distinción académica otorgada por trayectoria docente" },
    { role: "Profesor Asociado", institution: "Universidad de Costa Rica", detail: "N.° 1 en Centroamérica — QS Latin America University Ranking" },
    { role: "Coordinador de la Maestría en Derecho Público", institution: "Universidad de Costa Rica", detail: "Profesor del posgrado desde 2000" },
    { role: "Profesor de Doctorado, Maestría y Licenciatura", institution: "UCR y Escuela Libre de Derecho", detail: "Derecho Público, Constitucional y Administrativo" },
    { role: "Instructor", institution: "Escuela Judicial del Poder Judicial", detail: "Formación de jueces y operadores jurídicos" },
  ],
  publications: [
    { type: "law" as const, title: "Co-redactor del Código Procesal Contencioso Administrativo", detail: "Ley N.° 8508, 28 de abril de 2006. Pieza fundamental de la jurisdicción contenciosa moderna." },
    { type: "book" as const, title: "La Justicia Administrativa frente a la Inactividad Material de la Administración Pública", detail: "Tesis Doctoral — Universidad de Alcalá, 1998. Publicada como Justicia Administrativa (Tomos I, II y III), Editorial Investigaciones Jurídicas, 2002.", slug: "libro-justicia-administrativa" },
    { type: "book" as const, title: "El Nuevo Proceso Contencioso Administrativo", detail: "Editorial Jurídica Continental / Escuela Judicial, 2006. Obra colectiva sobre la implementación del CPCA.", slug: "libro-nuevo-proceso-contencioso" },
    { type: "book" as const, title: "Consideraciones Prácticas en torno al Proceso Ejecutivo", detail: "Escuela Judicial, 1995. Tratado sobre el proceso ejecutivo en materia civil de hacienda.", slug: "libro-proceso-ejecutivo" },
  ],
  conferences: "Conferencista internacional en Colombia, Bolivia, Ecuador, Argentina, Alemania, Portugal, España y Estados Unidos.",
  languages: ["Español", "Francés"],
} as const;

export const TEAM = [
  { slug: "oscar-gonzalez", name: "Dr. Óscar Eduardo González Camacho", role: "Fundador y Director", photo: "/images/oscar-gonzalez-solo.png", shortBio: "Ex-Magistrado de la Corte Suprema de Justicia. Co-redactor del CPCA. Más de 38 años de trayectoria en Derecho Público.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional"], languages: ["Español", "Francés"], featured: true },
  { slug: "khevin-sanchez", name: "Lic. Khevin Sánchez Zamora", role: "Abogado Asociado", photo: "/images/khevin-sanchez.jpg", shortBio: "Licenciado en Derecho por la UCR, con mención en Derecho Tributario. Litigio contra el Estado: medidas cautelares, demandas contencioso-administrativas y casación. 3er mejor promedio, Examen de Excelencia del Colegio de Abogados, 2025.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional", "Contratación Pública"], languages: ["Español"], featured: true },
  { slug: "katherine-gonzalez", name: "MSc. Katherine González Coto", role: "Abogada Asociada", photo: "/images/katherine-gonzalez.png", shortBio: "Máster en Derecho Público por la UCR. Licenciada en Derecho y Notaria Pública por la UELD. Investigadora en responsabilidad patrimonial de la Administración y derecho expropiatorio.", areas: ["Derecho Administrativo", "Derecho Público", "Derecho Notarial", "Derecho Expropiatorio"], languages: ["Español", "Inglés", "Francés", "Italiano"], featured: true },
  { slug: "mariana-montero", name: "Licda. Mariana Montero Acuña", role: "Abogada Asociada", photo: "/images/mariana-montero.png", shortBio: "Licenciada en Derecho con mención en Derechos Humanos por la UCR, aprobada con distinción. Egresada de la Maestría en Derecho Público, UCR. Especialista en malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado.", areas: ["Malpraxis Médica e Iatrogenia", "Derecho a la Salud", "Contencioso Administrativo", "Responsabilidad Patrimonial"], languages: ["Español", "Inglés", "Francés"], featured: true },
  { slug: "esteban-perez", name: "Lic. Esteban Pérez Herrera", role: "Abogado Asociado", photo: "/images/esteban-perez.jpg", shortBio: "Abogado litigante y Notario Público. Más de 9 años de experiencia en litigio contencioso-administrativo. Maestrando en Derecho Público, UCR.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional", "Contratación Pública", "Derecho Urbanístico"], languages: ["Español", "Inglés"], featured: true },
  { slug: "jose-carlos-solano", name: "Lic. José Carlos Solano Salas", role: "Abogado Asociado", photo: "/images/jose-carlos-solano.jpeg", shortBio: "Licenciado en Derecho con Excelencia Académica por la UCR. Especialista en Derecho Notarial y Registral. Aceptado en la Maestría en Teoría del Derecho de la Goethe-Universität Frankfurt.", areas: ["Contencioso Administrativo", "Acciones de Inconstitucionalidad", "Zona Marítimo Terrestre", "Procedimientos CGR", "Transporte y Concesiones"], languages: ["Español", "Inglés", "Alemán"], featured: true },
] as const;


export const FIRM_PRACTICE_AREAS = [
  { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.", icon: "Scales" as const },
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado y entes públicos.", icon: "Gavel" as const },
  { title: "Derecho Constitucional", description: "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.", icon: "ShieldCheck" as const },
  { title: "Contratación Pública", description: "Asesoría y litigio en licitaciones, concursos públicos, contratos administrativos y recursos de objeción.", icon: "FileText" as const },
  { title: "Derecho Inmobiliario", description: "Asesoría en concesiones, desarrollo inmobiliario y regulación de la propiedad.", icon: "Buildings" as const },
  { title: "Derecho Notarial y Registral", description: "Servicios notariales y gestión registral de instrumentos públicos y privados.", icon: "Stamp" as const },
  { title: "Derecho Corporativo", description: "Constitución de sociedades, gobierno corporativo, fusiones y reestructuraciones empresariales.", icon: "Briefcase" as const },
  { title: "Derecho Tributario", description: "Planificación fiscal, defensa en procedimientos tributarios y consultoría impositiva.", icon: "Bank" as const },
  { title: "Propiedad Intelectual", description: "Protección de marcas, patentes, datos personales y derechos de autor.", icon: "Lightbulb" as const },
  { title: "Derecho Laboral", description: "Asesoría y litigio en relaciones laborales públicas y privadas, despidos y prestaciones.", icon: "UsersThree" as const },
  { title: "Derecho Ambiental", description: "Consultoría y litigio en materia de regulación ambiental, permisos y estudios de impacto.", icon: "Leaf" as const },
  { title: "Derecho Civil", description: "Contratos, obligaciones, responsabilidad civil y resolución de conflictos patrimoniales.", icon: "Handshake" as const },
] as const;

// ─── Páginas de Áreas de Práctica ───

export const PRACTICE_AREA_PAGES = [
  // ─── Áreas Principales ───
  {
    slug: "litigio-contencioso-administrativo",
    title: "Litigio Contencioso Administrativo",
    subtitle: "Demandas contra el Estado y entes públicos ante el Tribunal Contencioso Administrativo",
    description: "Corporación GC litiga ante el Tribunal Contencioso Administrativo demandas de nulidad, plena jurisdicción y responsabilidad patrimonial del Estado. Fundamentación en el CPCA (Ley N.° 8508).",
    icon: "Gavel" as const,
    priority: "primary" as const,
    seoTitle: "Abogados Contencioso-Administrativo en Costa Rica 2026",
    seoDescription: "Bufete líder en litigio contencioso-administrativo en Costa Rica, dirigido por el ex-Magistrado co-redactor del CPCA. Demandas contra el Estado y casación.",
    ogShortTitle: "Demandas contra el {{em}}",
    ogEmphasis: "Estado",
  },
  {
    slug: "medidas-cautelares",
    title: "Medidas Cautelares",
    subtitle: "Protección jurisdiccional urgente: provisionalísimas, ante causam y definitivas",
    description: "Especialistas en tutela cautelar contencioso-administrativa: medidas provisionalísimas de urgencia extrema, cautelares ante causam y definitivas conforme a los artículos 19 a 30 del CPCA.",
    icon: "ShieldCheck" as const,
    priority: "primary" as const,
    seoTitle: "Medidas Cautelares contra el Estado Costa Rica 2026",
    seoDescription: "¿Necesita suspender un acto administrativo urgente? Medidas cautelares provisionalísimas y ante causam ante el TCA. CPCA arts. 19-30. Asesoría inmediata.",
    ogShortTitle: "{{em}} contra el Estado",
    ogEmphasis: "Medidas Cautelares",
  },
  {
    slug: "casacion-sala-primera",
    title: "Recursos de Casación ante Sala Primera",
    subtitle: "Impugnación de sentencias del Tribunal Contencioso Administrativo ante la Corte Suprema de Justicia",
    description: "Interposición y sustanciación de recursos de casación contencioso-administrativa ante la Sala Primera de la Corte Suprema de Justicia conforme a los artículos 134 a 148 del CPCA.",
    icon: "Scales" as const,
    priority: "primary" as const,
    seoTitle: "Casación ante Sala Primera Costa Rica 2026 · Abogados",
    seoDescription: "¿Perdió en el TCA y necesita casación? Recurso ante la Sala Primera, dirigido por un ex-Magistrado de la propia Sala y co-redactor del CPCA. Arts. 134-148.",
    ogShortTitle: "Casación ante la {{em}}",
    ogEmphasis: "Sala Primera",
  },
  {
    slug: "contratacion-publica",
    title: "Contratación Pública",
    subtitle: "Objeciones al cartel, impugnación de adjudicaciones y litigio en licitaciones públicas",
    description: "Asesoría y litigio en todas las fases de la contratación administrativa: objeciones al cartel, recursos contra adjudicaciones y demandas ante el TCA conforme a la Ley General de Contratación Pública (Ley N.° 9986).",
    icon: "Handshake" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Contratación Pública en Costa Rica",
    seoDescription: "¿Necesita impugnar una licitación o adjudicación? Abogados en contratación pública en Costa Rica: objeción al cartel y apelación ante la CGR (Ley 9986).",
    ogShortTitle: "{{em}} y licitaciones",
    ogEmphasis: "Contratación pública",
  },
  {
    slug: "recursos-de-amparo",
    title: "Recursos de Amparo",
    subtitle: "Protección de derechos fundamentales ante la Sala Constitucional",
    description: "Interposición de recursos de amparo ante la Sala IV contra actos u omisiones de autoridades públicas y sujetos privados en posición de poder que vulneren derechos fundamentales, conforme a la Ley de la Jurisdicción Constitucional (Ley N.° 7135, arts. 29 a 56).",
    icon: "Shield" as const,
    priority: "primary" as const,
    seoTitle: "Abogado para Recurso de Amparo en Costa Rica",
    seoDescription: "¿Le vulneraron un derecho fundamental? Abogados para interponer su recurso de amparo en Costa Rica ante la Sala Constitucional (Sala IV). Asesoría urgente.",
    ogShortTitle: "Recurso de {{em}}",
    ogEmphasis: "Amparo",
  },
  {
    slug: "acciones-de-inconstitucionalidad",
    title: "Acciones de Inconstitucionalidad",
    subtitle: "Impugnación de leyes, decretos y disposiciones generales contrarias a la Constitución",
    description: "Promoción de acciones de inconstitucionalidad ante la Sala Constitucional contra leyes, decretos ejecutivos, reglamentos y disposiciones de alcance general que infrinjan normas o principios constitucionales, conforme a la Ley N.° 7135 (arts. 73 a 95).",
    icon: "Bank" as const,
    priority: "primary" as const,
    seoTitle: "Acción de Inconstitucionalidad · Sala IV, Costa Rica",
    seoDescription: "Impugnación de leyes, decretos y reglamentos contrarios a la Constitución ante la Sala Constitucional. Bufete dirigido por especialista en Derecho Constitucional formado en España. Ley N.° 7135.",
    ogShortTitle: "Acción de {{em}}",
    ogEmphasis: "Inconstitucionalidad",
  },
  {
    slug: "asesoria-regulatoria",
    title: "Asesoría Regulatoria y Redacción de Reglamentos",
    subtitle: "Drafting normativo, dictámenes y acompañamiento del proceso de aprobación para municipalidades, colegios profesionales e instituciones del Estado",
    description: "Corporación GC redacta reglamentos completos —ejecutivos, autónomos, municipales y de colegios profesionales—, asesora el proceso de aprobación y defiende la norma frente a impugnaciones posteriores. Trabajamos con la potestad reglamentaria del artículo 140.3 de la Constitución, la autonomía municipal de los artículos 169 y 170, la jerarquía de fuentes del artículo 6 de la LGAP, los límites de los artículos 19.2 (reserva de ley en materia de derechos fundamentales) y 124 (prohibición de imponer penas, exacciones, tasas o multas por vía reglamentaria), y el procedimiento especial de elaboración de disposiciones de carácter general de los artículos 361 a 363 de la LGAP. Conocemos qué hace caer un reglamento ante la jurisdicción contencioso-administrativa y ante la Sala Constitucional, y por eso podemos diseñar normativa que resista ese escrutinio.",
    icon: "BookOpen" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Redacción de Reglamentos en Costa Rica",
    seoDescription: "Abogados en redacción de reglamentos y asesoría regulatoria en Costa Rica: drafting normativo para municipalidades y colegios profesionales, dictámenes, consulta pública (LGAP 361) y defensa del reglamento ante impugnaciones.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Redacción de Reglamentos",
  },
  {
    slug: "informes-juridicos-dictamenes",
    title: "Dictámenes de Legalidad Administrativa",
    subtitle: "Dictámenes jurídicos externos para municipalidades, instituciones autónomas, empresas públicas y ministerios sobre la legalidad de actos, contratos, reglamentos y procedimientos",
    description: "Dictámenes jurídicos externos para el sector público costarricense: análisis técnicos sobre la legalidad de actos administrativos, contratos, procedimientos sancionatorios, proyectos de reglamento y decisiones de alto impacto. Trabajamos para municipalidades, instituciones autónomas, empresas públicas, ministerios y colegios profesionales que necesitan una segunda opinión técnica frente a su asesoría jurídica interna o un complemento ágil frente a la consulta de la Procuraduría General de la República. Anclamos los dictámenes en la LGAP (Ley 6227), la Ley Orgánica de la CGR (Ley 7428), la Ley General de Contratación Pública (Ley 9986), el CPCA (Ley 8508) y la jurisprudencia administrativa, constitucional y contencioso-administrativa actualizada.",
    icon: "FileText" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Dictámenes de Derecho Público en CR",
    seoDescription: "Abogados en dictámenes de derecho público en Costa Rica: análisis de legalidad de actos administrativos, contratos, reglamentos y procedimientos para municipalidades, instituciones autónomas, empresas públicas y ministerios.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Dictámenes de Derecho Público",
  },
  {
    slug: "derecho-administrativo",
    title: "Vía Administrativa y Recursos",
    homepageTitle: "Vía Administrativa y Recursos",
    subtitle: "Procedimientos ordinarios, recursos de revocatoria y apelación ante la Administración Pública",
    description: "Representación en procedimientos administrativos ordinarios, interposición de recursos de revocatoria con apelación en subsidio y agotamiento de vía administrativa conforme a la LGAP (Ley N.° 6227, arts. 308 a 352).",
    icon: "Briefcase" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Derecho Administrativo en Costa Rica",
    seoDescription: "¿Tiene un conflicto con una institución pública? Abogados en derecho administrativo en Costa Rica: nulidad de actos, recursos de revocatoria y apelación (LGAP).",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Derecho Administrativo",
  },
  {
    slug: "procedimientos-sancionatorios",
    title: "Defensa en Procedimientos Sancionatorios",
    subtitle: "Defensa en procedimientos disciplinarios y sancionatorios ante la Administración Pública",
    description: "Defensa del administrado en procedimientos sancionatorios de la Administración Pública: garantías del debido proceso, audiencia oral, acceso al expediente y recursos administrativos conforme a los artículos 308 a 319 de la LGAP y los artículos 39 y 41 de la Constitución Política.",
    icon: "Warning" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Procedimiento Sancionatorio en Costa Rica",
    seoDescription: "¿Le abrieron un procedimiento administrativo sancionatorio? Abogados en Costa Rica para su defensa: debido proceso, comparecencia oral y recursos (LGAP).",
    ogShortTitle: "Defensa en {{em}}",
    ogEmphasis: "Procedimientos Sancionatorios",
  },
  {
    slug: "empleo-publico",
    title: "Empleo Público y Servicio Civil",
    subtitle: "Defensa de servidores públicos ante despidos, suspensiones y sanciones disciplinarias",
    description: "Defensa de servidores públicos ante despidos, suspensiones y sanciones disciplinarias conforme al Estatuto de Servicio Civil (Ley N.° 1581) y la Ley Marco de Empleo Público (Ley N.° 10159, arts. 20 a 22), con apelación ante el Tribunal de Servicio Civil e impugnación en la vía laboral o contencioso-administrativa.",
    icon: "IdentificationBadge" as const,
    priority: "primary" as const,
    seoTitle: "Abogados en Empleo Público en Costa Rica",
    seoDescription: "Abogados en empleo público en Costa Rica. Defendemos a servidores ante despidos y sanciones (Ley 10159) y apelamos ante el Tribunal de Servicio Civil.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Empleo Público",
  },
  // ─── Áreas Especializadas ───
  {
    slug: "servicio-publico",
    title: "Regulación Tarifaria y Servicios Regulados",
    subtitle: "Fijación tarifaria, concesiones y litigio ante ARESEP y SUTEL",
    description: "Representación en procedimientos de fijación tarifaria, impugnación de resoluciones de ARESEP y SUTEL, defensa de concesiones de servicios públicos y litigio en materia regulatoria conforme a la Ley N.° 7593.",
    icon: "Lightning" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados ante ARESEP y SUTEL en Costa Rica",
    seoDescription: "Abogados ante ARESEP y SUTEL en Costa Rica: solicitudes tarifarias, audiencias públicas, recursos y litigio regulatorio en defensa de prestadores de servicios públicos.",
    ogShortTitle: "Abogados ante {{em}}",
    ogEmphasis: "ARESEP y SUTEL",
  },
  {
    slug: "materia-municipal",
    title: "Derecho Municipal",
    subtitle: "Litigio contra actos municipales, patentes, tributos locales y acuerdos del Concejo",
    description: "Impugnación de actos municipales, defensa en materia de patentes y tributos locales, recursos contra acuerdos del Concejo Municipal y litigio contencioso-administrativo contra gobiernos locales conforme al Código Municipal (Ley N.° 7794).",
    icon: "Buildings" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados en Derecho Municipal en Costa Rica",
    seoDescription: "Abogados en derecho municipal en Costa Rica: impugnamos patentes denegadas, tributos y acuerdos del Concejo con los recursos del Código Municipal y el litigio contra la municipalidad.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Derecho Municipal",
  },
  {
    slug: "dominio-publico",
    title: "Dominio Público y Concesiones Demaniales",
    subtitle: "Concesiones de uso, permisos sobre bienes del Estado y litigio demanial",
    description: "Solicitud y defensa de concesiones sobre bienes de dominio público, impugnación de revocatorias y caducidades, defensa frente a desalojos administrativos y protección de derechos derivados de permisos de uso.",
    icon: "MapPin" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados en Dominio Público en Costa Rica",
    seoDescription: "Abogados en dominio público en Costa Rica: defensa de concesiones y permisos de uso, frente a revocatorias, caducidades y desalojos administrativos de bienes del Estado.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Dominio Público",
  },
  {
    slug: "zona-maritimo-terrestre",
    title: "Zona Marítimo Terrestre",
    subtitle: "Concesiones costeras, litigio en ZMT y planificación reguladora costera",
    description: "Trámite y defensa de concesiones en zona restringida, impugnación de revocatorias y caducidades, litigio contra ocupaciones ilegales y recursos contra planes reguladores costeros conforme a la Ley N.° 6043.",
    icon: "Waves" as const,
    priority: "specialized" as const,
    seoTitle: "Zona Marítimo Terrestre y Ley 6043 en Costa Rica (ZMT)",
    seoDescription: "Abogados en zona marítimo terrestre (ZMT) y Ley N.° 6043 en Costa Rica: defensa de concesiones, revocatorias, caducidades y demoliciones costeras.",
    ogShortTitle: "{{em}} y Concesiones Costeras",
    ogEmphasis: "Zona Marítimo Terrestre",
  },
  {
    slug: "derecho-urbanistico",
    title: "Derecho Urbanístico",
    subtitle: "Permisos de construcción, planes reguladores y uso del suelo",
    description: "Impugnación de denegatorias de permisos de construcción, recursos contra acuerdos de zonificación, litigio en materia de planes reguladores cantonales y defensa de propietarios frente a restricciones urbanísticas conforme a la Ley de Planificación Urbana (Ley N.° 4240).",
    icon: "HouseSimple" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados en Derecho Urbanístico en Costa Rica",
    seoDescription: "Abogados en derecho urbanístico en Costa Rica: permisos de construcción, uso de suelo, planes reguladores y fraccionamientos. Defensa ante denegatorias, clausuras y demoliciones.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Derecho Urbanístico",
  },
  {
    slug: "materia-presupuestaria",
    title: "Derecho Presupuestario y Hacienda Pública",
    subtitle: "Litigio contra la Contraloría, aprobación presupuestaria y responsabilidad fiscal",
    description: "Impugnación de resoluciones de la Contraloría General de la República, defensa en procedimientos de responsabilidad fiscal, litigio sobre aprobación presupuestaria y asesoría en administración financiera conforme a la Ley N.° 8131 y la Ley N.° 7428.",
    icon: "CurrencyCircleDollar" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados ante la Contraloría en Costa Rica",
    seoDescription: "Abogados ante la Contraloría en Costa Rica: defensa en procedimientos sancionatorios, refrendos, presupuestos y litigio directo en contencioso conforme a la Ley 7428 y la Ley 8131.",
    ogShortTitle: "Abogados ante la {{em}}",
    ogEmphasis: "Contraloría",
  },
  {
    slug: "comercio-internacional",
    title: "Comercio Internacional y Derecho Aduanero",
    subtitle: "Antidumping, salvaguardias, TLCs y solución de controversias comerciales",
    description: "Representación en investigaciones antidumping y de salvaguardias ante COMEX, defensa frente a derechos compensatorios, litigio ante mecanismos de solución de controversias de la OMC y TLCs, y asesoría en cumplimiento arancelario conforme a la Ley N.° 7638 y acuerdos multilaterales.",
    icon: "Globe" as const,
    priority: "specialized" as const,
    seoTitle: "Antidumping y Comercio Internacional · CR",
    seoDescription: "Investigaciones antidumping y de salvaguardias ante COMEX, defensa frente a derechos compensatorios y solución de controversias bajo TLCs y OMC. Cumplimiento arancelario conforme a la Ley N.° 7638.",
    ogShortTitle: "Antidumping y {{em}}",
    ogEmphasis: "Comercio Internacional",
  },
  // ─── Áreas Emergentes y Regulatorias ───
  {
    slug: "compliance-publico-anticorrupcion",
    title: "Compliance Público y Anticorrupción",
    subtitle: "Defensa ante la Contraloría y el Ministerio Público, declaración jurada patrimonial y programas de cumplimiento bajo la Ley 8422",
    description: "Asesoría y defensa bajo la Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública (Ley N.° 8422), con sus reformas recientes: Ley N.° 10437 (protección de personas denunciantes y testigos contra represalias laborales), Ley N.° 10523 (que reforzó la verificación de las declaraciones juradas con información del Banco Central sobre beneficiarios finales), Ley N.° 10691 (que reforzó el régimen de prescripción de los delitos de corrupción) y Ley N.° 10373 (reformas para atender las recomendaciones del Grupo de Trabajo contra el Cohecho de la OCDE, que incorporó al texto el régimen de medidas cautelares inmediatas, decomiso y destino del dinero decomisado). Atendemos declaraciones juradas patrimoniales, régimen de incompatibilidades y de obsequios, procedimientos de responsabilidad administrativa ante la CGR y defensa penal por delitos contra los deberes de la función pública.",
    icon: "Certificate" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados Anticorrupción en Costa Rica",
    seoDescription: "Abogados en compliance público y anticorrupción en Costa Rica: declaración jurada patrimonial, régimen de incompatibilidades, defensa ante la CGR y el Ministerio Público bajo la Ley 8422 y sus reformas (10437, 10523, 10691, 10373).",
    ogShortTitle: "Abogados {{em}}",
    ogEmphasis: "Anticorrupción",
  },
  {
    slug: "gobierno-digital-inteligencia-artificial-datos",
    title: "Gobierno Digital, Inteligencia Artificial y Protección de Datos",
    subtitle: "Regulación de IA en la administración pública, cumplimiento de PRODHAB y transparencia algorítmica",
    description: "Corporación GC asesora a instituciones públicas y empresas en el cumplimiento del marco regulatorio de protección de datos personales (Ley N.° 8968 y su Reglamento, Decreto N.° 37554-JP), gobierno digital (Ley N.° 9943 — Agencia Nacional de Gobierno Digital) y la Estrategia Nacional de Inteligencia Artificial 2024-2027 (ENIA). Brindamos asesoría regulatoria sobre los tres proyectos de ley de IA en trámite legislativo (Expedientes N.° 23.771, 23.919 y 24.484), diseñamos marcos de gobernanza algorítmica para decisiones administrativas automatizadas conforme a los principios de legalidad (art. 11 CP), debido proceso (art. 39 CP) y rendición de cuentas (art. 11 LGAP), y litigamos impugnaciones constitucionales contra decisiones algorítmicas que vulneren derechos fundamentales. Representamos ante PRODHAB en procedimientos sancionatorios por incumplimiento de protección de datos y asesoramos en la alineación con el Proyecto N.° 23.097 de reforma integral a la Ley N.° 8968 conforme al estándar RGPD europeo.",
    icon: "Robot" as const,
    priority: "specialized" as const,
    seoTitle: "IA, Gobierno Digital y Protección de Datos · Costa Rica",
    seoDescription: "Cumplimiento de PRODHAB (Ley N.° 8968), gobierno digital (Ley N.° 9943) y regulación de IA en la Administración. Gobernanza algorítmica, transparencia y defensa en sanciones. Corporación GC.",
    ogShortTitle: "IA y Protección de {{em}}",
    ogEmphasis: "Datos",
  },
  {
    slug: "defensa-regulatoria-sectorial",
    title: "Defensa Regulatoria ante Órganos Sectoriales",
    subtitle: "Defensa de empresas en procedimientos sancionatorios ante COPROCOM, SUGEF, SUGEVAL, SUGESE, SUPEN, Ministerio de Salud, SENASA y otros reguladores sectoriales",
    description: "Defensa de empresas y de sus directivos en procedimientos sancionatorios ante los reguladores económicos costarricenses: la Comisión para Promover la Competencia (Coprocom, órgano de máxima desconcentración adscrito al MEIC, Ley 7472 reformada por la Ley 9736 de Fortalecimiento de las Autoridades de Competencia), las superintendencias financieras del CONASSIF (SUGEF bajo la Ley 7558, SUGEVAL bajo la Ley 7732, SUGESE bajo la Ley 8653 y SUPEN bajo la Ley 7983), el Ministerio de Salud bajo la Ley General de Salud (Ley 5395), el Servicio Nacional de Salud Animal (SENASA, Ley 8495) y el Servicio Fitosanitario del Estado (Ley 7664). Atendemos toda la línea: respuesta al traslado de cargos, defensa en sede administrativa, recursos verticales, litigio contencioso contra las resoluciones firmes (CPCA art. 42) y amparo ante medidas cautelares desproporcionadas.",
    icon: "ShieldWarning" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados en Defensa Regulatoria Sectorial en CR",
    seoDescription: "Abogados en defensa ante COPROCOM, SUGEF, SUGEVAL, SUGESE, SUPEN, Ministerio de Salud, SENASA y SFE en Costa Rica: procedimientos sancionatorios, recursos administrativos, litigio contencioso y amparo constitucional.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Defensa Regulatoria Sectorial",
  },
  {
    slug: "regulacion-ambiental-mercados-carbono",
    title: "Regulación Ambiental y Mercados de Carbono",
    subtitle: "Litigio ambiental, evaluación de impacto, créditos de carbono y defensa ante SETENA y Sala IV",
    description: "Corporación GC asesora y litiga en materia de derecho ambiental administrativo, con fundamento en el derecho constitucional a un ambiente sano (art. 50 CP), la Ley Orgánica del Ambiente (Ley N.° 7554), la Ley Forestal (Ley N.° 7575) y el Plan Nacional de Descarbonización 2019-2050. Representamos a empresas y desarrolladores inmobiliarios en procedimientos de evaluación de impacto ambiental ante SETENA, impugnamos resoluciones de MINAE y SINAC en vía administrativa y contencioso-administrativa, y litigamos ante la Sala Constitucional en materia de protección ambiental. En el ámbito de mercados de carbono, asesoramos en la estructuración de créditos de carbono bajo las Unidades Costarricenses de Compensación (UCC) administradas por FONAFIFO conforme al Programa de Pago por Servicios Ambientales (PSA), la negociación de contratos PSA, el cumplimiento del Mecanismo de Ajuste en Frontera por Carbono (CBAM) de la Unión Europea para empresas exportadoras, y la participación en proyectos REDD+ conforme a la NDC actualizada 2020 (meta: 9.11 millones tCO2e para 2030).",
    icon: "Recycle" as const,
    priority: "specialized" as const,
    seoTitle: "Litigio Ambiental y Mercados de Carbono · CR",
    seoDescription: "Defensa ante SETENA, MINAE y SINAC, evaluación de impacto ambiental y estructuración de créditos de carbono (UCC, FONAFIFO). Cumplimiento del CBAM europeo. Litigio ambiental ante TCA y Sala IV.",
    ogShortTitle: "Litigio Ambiental y {{em}}",
    ogEmphasis: "Mercados de Carbono",
  },
  {
    slug: "alianzas-publico-privadas-infraestructura",
    title: "Alianzas Público-Privadas e Infraestructura",
    subtitle: "Concesiones de obra pública y litigio ante CGR, MOPT y el Consejo Nacional de Concesiones",
    description: "Asesoría en proyectos de concesión e infraestructura pública bajo el régimen vigente de la Ley General de Concesión de Obras Públicas con Servicios Públicos (Ley N.° 7762, reformada por las leyes N.° 8643 y N.° 9701) y bajo el régimen entrante del expediente N.° 24.009 (Ley Marco de las Asociaciones Público-Privadas, aprobado en primer debate el 19 de mayo de 2026 y suspendido por consulta facultativa de constitucionalidad ante la Sala Constitucional). Estructuración de proyectos, refrendo de contratos, objeción de carteles y apelación de adjudicaciones ante la Contraloría, y litigio contencioso-administrativo contra los actos del CNC, MOPT y CGR que afecten el contrato.",
    icon: "Factory" as const,
    priority: "specialized" as const,
    seoTitle: "Abogados en Concesiones y APP en Costa Rica",
    seoDescription: "Abogados en concesiones y APP en Costa Rica: estructuración, refrendo CGR, objeción de carteles, apelación de adjudicaciones y litigio contencioso. Régimen vigente (Ley 7762) y nuevo expediente 24.009.",
    ogShortTitle: "Abogados en {{em}}",
    ogEmphasis: "Concesiones y APP",
  },
  {
    slug: "regulacion-fintech-criptoactivos",
    title: "Regulación Fintech y Criptoactivos",
    subtitle: "Asesoría regulatoria ante SUGEF/CONASSIF, registro VASP y cumplimiento AML/CFT",
    description: "Corporación GC asesora a fintechs, proveedores de servicios de activos virtuales (VASP), billeteras digitales, exchanges y plataformas de pago en el cumplimiento del marco regulatorio financiero costarricense. La SUGEF supervisa estas actividades bajo la Ley N.° 7558 (art. 15 Bis), complementada por la Ley N.° 8204 y los Acuerdos SUGEF 13-19 en materia de prevención de legitimación de capitales (AML/CFT). El Proyecto de Ley N.° 22.837 (Registro de VASP), aprobado en primer debate, establecerá registro obligatorio ante SUGEF con debida diligencia reforzada y multas de 2 a 100 salarios base. Nuestros servicios incluyen asesoría de preparación para el registro VASP obligatorio, estructuración regulatoria de plataformas fintech conforme a los límites definidos por la Opinión PGR C-196-2024, defensa en procedimientos sancionatorios de SUGEF y CONASSIF (que constituyen procedimientos administrativos conforme a la LGAP), impugnación constitucional de regulaciones desproporcionadas, y asesoría en cumplimiento de los estándares CARF de la OCDE para intercambio fiscal de criptoactivos (implementación proyectada para 2028).",
    icon: "Wallet" as const,
    priority: "specialized" as const,
    seoTitle: "Regulación Fintech y Cripto · Costa Rica",
    seoDescription: "Asesoría a fintechs, exchanges y VASPs ante SUGEF y CONASSIF. Registro VASP (Proyecto N.° 22.837), AML/CFT (Ley N.° 8204) y cumplimiento de estándares CARF/OCDE para criptoactivos.",
    ogShortTitle: "Regulación {{em}}",
    ogEmphasis: "Fintech y Cripto",
  },
  {
    slug: "derecho-electoral-financiamiento-politico",
    title: "Derecho Electoral y Financiamiento Político",
    subtitle: "Cumplimiento electoral, liquidación de deuda política y disputas ante el TSE",
    description: "Corporación GC es la primera firma en Costa Rica con práctica dedicada a derecho electoral desde la perspectiva del derecho público. Asesoramos a partidos políticos, candidatos y organizaciones en cumplimiento electoral, financiamiento político y disputas ante el Tribunal Supremo de Elecciones (TSE) conforme al Código Electoral (Ley N.° 8765) y la nueva Ley de Fortalecimiento del Financiamiento Político (Ley N.° 10755, septiembre 2025). Nuestros servicios incluyen asesoría en cumplimiento de las obligaciones de transparencia y rendición de cuentas del financiamiento político conforme al artículo 96 constitucional (contribución estatal: 0.19% PIB para partidos que superen el 4%), asistencia en procesos de liquidación de deuda política, defensa en procedimientos sancionatorios del TSE por irregularidades en el financiamiento, representación en disputas electorales ante la jurisdicción exclusiva e independiente del TSE, y asesoría integral a candidatos a alcaldías para el ciclo electoral municipal 2028. La experiencia constitucional de nuestro fundador es directamente transferible a la comprensión de la jurisdicción TSE vs. Sala IV.",
    icon: "Flag" as const,
    priority: "specialized" as const,
    seoTitle: "Derecho Electoral y Financiamiento Político · CR",
    seoDescription: "Primera firma costarricense con práctica en derecho electoral desde el Derecho Público. Cumplimiento, liquidación de deuda política y disputas ante el TSE. Código Electoral y Ley N.° 10755 (2025).",
    ogShortTitle: "Derecho {{em}}",
    ogEmphasis: "Electoral",
  },
  {
    slug: "telecomunicaciones-espectro-5g",
    title: "Telecomunicaciones, Espectro y 5G",
    subtitle: "Disputas de espectro, permisos de infraestructura 5G y regulación ante SUTEL y MICITT",
    description: "Corporación GC asesora a operadores de telecomunicaciones, empresas de torres, operadores satelitales y concesionarios de espectro en el cumplimiento regulatorio y la resolución de disputas ante SUTEL y MICITT, conforme a la Ley General de Telecomunicaciones (Ley N.° 8642) y la regulación tarifaria de ARESEP (Ley N.° 7593). Tras la subasta 5G histórica de enero 2025 (bandas 700, 2300, 3500, 26 y 28 GHz con 7 concesionarios adjudicatarios y $310M en inversión comprometida), asesoramos a los concesionarios en el cumplimiento de obligaciones de cobertura y despliegue de infraestructura (3,373 torres en 134 distritos), navegación de permisos municipales para construcción de torres conforme a la autonomía municipal (art. 170 CP) y la Ley N.° 8642, negociación de compartición de infraestructura, y defensa en procedimientos administrativos de SUTEL por incumplimiento de condiciones de concesión. También representamos a operadores satelitales (Starlink, OneWeb) en trámites de concesión y asesoramos sobre extensiones de espectro y renegociación de condiciones conforme al Reglamento de Radiocomunicaciones de la UIT.",
    icon: "WifiHigh" as const,
    priority: "specialized" as const,
    seoTitle: "Telecomunicaciones, Espectro y 5G · Costa Rica",
    seoDescription: "Asesoría a concesionarios de espectro, operadores de torres y satelitales tras la subasta 5G de 2025. Cumplimiento ante SUTEL y MICITT, permisos municipales y compartición de infraestructura.",
    ogShortTitle: "Telecomunicaciones, {{em}} y 5G",
    ogEmphasis: "Espectro",
  },
  {
    slug: "energia-renovable-transicion-energetica",
    title: "Energía Renovable y Transición Energética",
    subtitle: "Permisos de generación, regulación tarifaria ante ARESEP, contratos PPA e hidrógeno verde",
    description: "Corporación GC asesora a generadores privados, desarrolladores de proyectos solares y eólicos, y empresas de almacenamiento energético en el marco regulatorio de la generación y comercialización de energía renovable en Costa Rica. Nuestro fundamento normativo comprende la Ley de Generación Autónoma o Paralela (Ley N.° 7200), la Ley de Uso Racional de la Energía (Ley N.° 7447), el Plan Nacional de Energía 2025-2035 y el Plan Nacional de Descarbonización 2050, con ICE como rector del sistema eléctrico nacional. Asesoramos en la obtención de permisos de generación privada conforme a los límites de capacidad de la Ley N.° 7200, la negociación y estructuración de contratos de compra de energía (PPA) con ICE y distribuidoras, la regulación tarifaria ante ARESEP, la resolución de disputas con el ICE sobre despacho y acceso a la red de transmisión, y la defensa administrativa y contencioso-administrativa contra denegatorias de permisos ambientales de SETENA para proyectos renovables. También asesoramos sobre el marco emergente de hidrógeno verde, almacenamiento en baterías y la participación en el Mercado Eléctrico Regional (MER) vía SIEPAC conforme al Tratado Marco del Mercado Eléctrico de América Central.",
    icon: "SolarPanel" as const,
    priority: "specialized" as const,
    seoTitle: "Energía Renovable y PPA con ICE · Costa Rica",
    seoDescription: "Asesoría a generadores privados en permisos, contratos PPA con ICE, regulación tarifaria ante ARESEP y disputas de despacho. Hidrógeno verde, almacenamiento y Mercado Eléctrico Regional (SIEPAC).",
    ogShortTitle: "Energía Renovable y {{em}}",
    ogEmphasis: "Transición Energética",
  },
  // ─── Cobertura Complementaria ───
  {
    slug: "derecho-civil",
    title: "Derecho Civil",
    subtitle: "Litigio entre particulares: responsabilidad civil, cobros, contratos y propiedad",
    description: "Litigio civil entre particulares: responsabilidad contractual y extracontractual, procesos de cobro judicial, desahucio, reivindicatorios, sucesiones y nulidades conforme al Código Civil (Ley N.° 63) y al Código Procesal Civil (Ley N.° 9342).",
    icon: "UsersThree" as const,
    priority: "complementary" as const,
    seoTitle: "Derecho Civil · Litigio Privado | Costa Rica",
    seoDescription: "Responsabilidad civil contractual y extracontractual, cobro judicial, desahucio, reivindicatorios, sucesiones y nulidades conforme al Código Civil (N.° 63) y al Código Procesal Civil (Ley N.° 9342).",
    ogShortTitle: "Derecho {{em}}",
    ogEmphasis: "Civil",
  },
  {
    slug: "derecho-de-familia",
    title: "Derecho de Familia",
    subtitle: "Divorcio, pensión alimentaria, guarda y patria potestad",
    description: "Procesos de divorcio, pensión alimentaria, guarda y crianza, filiación, liquidación de bienes gananciales y violencia doméstica conforme al Código de Familia (Ley N.° 5476), la Ley de Pensiones Alimentarias (Ley N.° 7654) y legislación conexa.",
    icon: "Heart" as const,
    priority: "complementary" as const,
    seoTitle: "Derecho de Familia · Divorcio y Pensiones | CR",
    seoDescription: "Divorcio, pensión alimentaria, guarda y crianza, filiación, liquidación de gananciales y violencia doméstica conforme al Código de Familia (Ley N.° 5476) y Ley de Pensiones Alimentarias (N.° 7654).",
    ogShortTitle: "Derecho de {{em}}",
    ogEmphasis: "Familia",
  },
  {
    slug: "derecho-laboral",
    title: "Derecho Laboral",
    subtitle: "Despido injustificado, prestaciones, riesgos del trabajo y litigio laboral oral",
    description: "Demandas por despido injustificado, cobro de prestaciones laborales, procesos por riesgos del trabajo, discriminación laboral y litigio oral laboral conforme al Código de Trabajo reformado por la Ley N.° 9343 (Reforma Procesal Laboral).",
    icon: "Wrench" as const,
    priority: "complementary" as const,
    seoTitle: "Derecho Laboral · Despido y Prestaciones | CR",
    seoDescription: "Despido injustificado, cobro de prestaciones, riesgos del trabajo, discriminación y litigio oral laboral conforme al Código de Trabajo y la Reforma Procesal Laboral (Ley N.° 9343). Asesoría experta.",
    ogShortTitle: "Derecho {{em}}",
    ogEmphasis: "Laboral",
  },
  {
    slug: "derecho-notarial",
    title: "Derecho Notarial y Registral",
    subtitle: "Escrituras públicas, protocolizaciones, constitución de sociedades, trámites registrales y fe pública",
    description: "Servicios notariales completos: otorgamiento de escrituras públicas, protocolización de actas, constitución de sociedades, compraventas, hipotecas, fideicomisos, certificaciones notariales y gestión registral conforme al Código Notarial (Ley N.° 7764).",
    icon: "Stamp" as const,
    priority: "complementary" as const,
    seoTitle: "Notario Público · Escrituras y Sociedades | CR",
    seoDescription: "Servicios notariales completos: escrituras públicas, protocolizaciones, constitución de sociedades, compraventas, hipotecas, fideicomisos y gestión registral conforme al Código Notarial (N.° 7764).",
    ogShortTitle: "Derecho Notarial y {{em}}",
    ogEmphasis: "Registral",
  },
  {
    slug: "expropiaciones",
    title: "Expropiaciones",
    subtitle: "Defensa del propietario frente a la expropiación forzosa: oposición al avalúo, justo precio e indemnización",
    description: "Asesoría y litigio en expropiaciones forzosas: oposición al avalúo administrativo, determinación del justo precio, lucro cesante, daño al remanente, intereses e indemnización ante el Juzgado Contencioso-Administrativo y Civil de Hacienda, conforme a la Ley de Expropiaciones (Ley N.° 7495).",
    icon: "MapPin" as const,
    priority: "primary" as const,
    seoTitle: "Abogado Especialista en Expropiaciones en Costa Rica",
    seoDescription: "¿Le notificaron una expropiación? Abogados especialistas en expropiaciones en Costa Rica: oposición al avalúo, justo precio, lucro cesante e indemnización (Ley 7495).",
    ogShortTitle: "Abogado especialista en {{em}}",
    ogEmphasis: "Expropiaciones",
  },
] as const;

/* Mapa de áreas afines para enlazado cruzado interno. Cada área enlaza a 4
   áreas relacionadas para sacar a estas páginas del estado "orfanato" frente
   a los crawlers, crear señales semánticas de cluster temático y mejorar la
   navegación del usuario hacia materias adyacentes. Curado manualmente por
   afinidad procesal (litigio, recursos), sustantiva (sector regulado) y
   sectorial (mismo regulador o régimen). */
export const AREA_RELATED_MAP: Record<string, readonly string[]> = {
  // ─── Núcleo litigioso ───
  "litigio-contencioso-administrativo": ["medidas-cautelares", "casacion-sala-primera", "derecho-administrativo", "procedimientos-sancionatorios"],
  "medidas-cautelares": ["litigio-contencioso-administrativo", "recursos-de-amparo", "acciones-de-inconstitucionalidad", "procedimientos-sancionatorios"],
  "casacion-sala-primera": ["litigio-contencioso-administrativo", "medidas-cautelares", "derecho-administrativo", "informes-juridicos-dictamenes"],
  "recursos-de-amparo": ["acciones-de-inconstitucionalidad", "medidas-cautelares", "litigio-contencioso-administrativo", "procedimientos-sancionatorios"],
  "acciones-de-inconstitucionalidad": ["recursos-de-amparo", "litigio-contencioso-administrativo", "medidas-cautelares", "asesoria-regulatoria"],

  // ─── Contratación y compliance ───
  "contratacion-publica": ["compliance-publico-anticorrupcion", "alianzas-publico-privadas-infraestructura", "litigio-contencioso-administrativo", "materia-presupuestaria"],
  "compliance-publico-anticorrupcion": ["contratacion-publica", "procedimientos-sancionatorios", "materia-presupuestaria", "defensa-regulatoria-sectorial"],
  "asesoria-regulatoria": ["informes-juridicos-dictamenes", "derecho-administrativo", "compliance-publico-anticorrupcion", "litigio-contencioso-administrativo"],
  "informes-juridicos-dictamenes": ["asesoria-regulatoria", "derecho-administrativo", "litigio-contencioso-administrativo", "casacion-sala-primera"],

  // ─── Procedimiento administrativo y empleo ───
  "derecho-administrativo": ["litigio-contencioso-administrativo", "procedimientos-sancionatorios", "empleo-publico", "recursos-de-amparo"],
  "procedimientos-sancionatorios": ["derecho-administrativo", "empleo-publico", "defensa-regulatoria-sectorial", "litigio-contencioso-administrativo"],
  "empleo-publico": ["procedimientos-sancionatorios", "derecho-administrativo", "litigio-contencioso-administrativo", "recursos-de-amparo"],

  // ─── Especializadas ───
  "servicio-publico": ["defensa-regulatoria-sectorial", "telecomunicaciones-espectro-5g", "energia-renovable-transicion-energetica", "litigio-contencioso-administrativo"],
  "materia-municipal": ["derecho-urbanistico", "dominio-publico", "litigio-contencioso-administrativo", "materia-presupuestaria"],
  "dominio-publico": ["zona-maritimo-terrestre", "materia-municipal", "derecho-urbanistico", "litigio-contencioso-administrativo"],
  "zona-maritimo-terrestre": ["dominio-publico", "derecho-urbanistico", "materia-municipal", "regulacion-ambiental-mercados-carbono"],
  "derecho-urbanistico": ["materia-municipal", "dominio-publico", "litigio-contencioso-administrativo", "expropiaciones"],
  "expropiaciones": ["litigio-contencioso-administrativo", "dominio-publico", "derecho-urbanistico", "medidas-cautelares"],
  "materia-presupuestaria": ["contratacion-publica", "compliance-publico-anticorrupcion", "litigio-contencioso-administrativo", "informes-juridicos-dictamenes"],
  "comercio-internacional": ["defensa-regulatoria-sectorial", "regulacion-fintech-criptoactivos", "asesoria-regulatoria", "litigio-contencioso-administrativo"],
  "defensa-regulatoria-sectorial": ["procedimientos-sancionatorios", "servicio-publico", "compliance-publico-anticorrupcion", "litigio-contencioso-administrativo"],
  "alianzas-publico-privadas-infraestructura": ["contratacion-publica", "materia-presupuestaria", "litigio-contencioso-administrativo", "asesoria-regulatoria"],

  // ─── Emergentes y sectoriales ───
  "gobierno-digital-inteligencia-artificial-datos": ["asesoria-regulatoria", "telecomunicaciones-espectro-5g", "defensa-regulatoria-sectorial", "compliance-publico-anticorrupcion"],
  "regulacion-ambiental-mercados-carbono": ["energia-renovable-transicion-energetica", "derecho-urbanistico", "litigio-contencioso-administrativo", "recursos-de-amparo"],
  "regulacion-fintech-criptoactivos": ["defensa-regulatoria-sectorial", "compliance-publico-anticorrupcion", "comercio-internacional", "asesoria-regulatoria"],
  "derecho-electoral-financiamiento-politico": ["acciones-de-inconstitucionalidad", "compliance-publico-anticorrupcion", "informes-juridicos-dictamenes", "asesoria-regulatoria"],
  "telecomunicaciones-espectro-5g": ["servicio-publico", "defensa-regulatoria-sectorial", "gobierno-digital-inteligencia-artificial-datos", "litigio-contencioso-administrativo"],
  "energia-renovable-transicion-energetica": ["regulacion-ambiental-mercados-carbono", "servicio-publico", "alianzas-publico-privadas-infraestructura", "asesoria-regulatoria"],

  // ─── Cobertura complementaria ───
  "derecho-civil": ["derecho-de-familia", "derecho-notarial", "derecho-laboral", "litigio-contencioso-administrativo"],
  "derecho-de-familia": ["derecho-civil", "derecho-notarial", "derecho-laboral", "recursos-de-amparo"],
  "derecho-laboral": ["empleo-publico", "derecho-civil", "procedimientos-sancionatorios", "recursos-de-amparo"],
  "derecho-notarial": ["derecho-civil", "derecho-urbanistico", "derecho-de-familia", "informes-juridicos-dictamenes"],
};

export type RelatedArea = {
  slug: string;
  title: string;
  subtitle: string;
};

export function getRelatedAreas(slug: string): RelatedArea[] {
  const slugs = AREA_RELATED_MAP[slug] ?? [];
  return slugs
    .map((s) => PRACTICE_AREA_PAGES.find((a) => a.slug === s))
    .filter((a): a is (typeof PRACTICE_AREA_PAGES)[number] => Boolean(a))
    .map((a) => ({ slug: a.slug, title: a.title, subtitle: a.subtitle }));
}

// ─── Perfil Individual: Esteban Pérez ───

export const ESTEBAN_PROFILE = {
  name: "Lic. Esteban Pérez Herrera",
  role: "Abogado Asociado",
  photo: "/images/esteban-perez.jpg",
  heroDescription: "Abogado litigante y Notario Público, especializado en Derecho Administrativo, Contencioso Administrativo, Contratación Pública y Derecho Constitucional.",
  heroBio: "Más de 9 años de experiencia en litigio de alta complejidad contra el Estado. Colaboración directa con el Dr. Óscar Eduardo González Camacho, co-redactor del Código Procesal Contencioso Administrativo.",
  education: [
    { degree: "Maestría en Derecho Público", institution: "Universidad de Costa Rica", status: "Egresado — Tesis en desarrollo" },
    { degree: "Licenciatura en Derecho", institution: "Universidad de Costa Rica" },
    { degree: "Especialidad en Derecho Notarial y Registral", institution: "Universidad Fidélitas" },
  ],
  career: [
    { role: "Abogado Asociado", org: "Corporación GC", period: "2023 – Presente", description: "Ejercicio profesional en litigio contencioso-administrativo, procesos constitucionales y procedimientos administrativos. Participación en audiencias orales, redacción de demandas, recursos de casación, asuntos de contratación pública y materia urbanística. Colaboración directa con el Dr. Óscar Eduardo González Camacho.", highlight: true },
    { role: "Asistente Jurídico", org: "Corporación GC", period: "2018 – 2023", description: "Apoyo en derecho público, procedimientos administrativos y litigio contencioso-administrativo. Elaboración de escritos procesales, investigaciones jurídicas y análisis de expedientes.", highlight: false },
    { role: "Asistente Jurídico", org: "Sala Constitucional — Corte Suprema de Justicia", period: "2017 – 2018", description: "Apoyo directo a letradas en la redacción y revisión de proyectos de sentencia.", highlight: false },
  ],
  practiceAreas: [
    { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios." },
    { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado." },
    { title: "Derecho Constitucional", description: "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional." },
    { title: "Contratación Pública", description: "Asesoría y litigio en materia de licitaciones, concursos públicos y contratos administrativos." },
    { title: "Derecho Urbanístico", description: "Asesoría y litigio en regulación del uso del suelo, permisos de construcción y planificación urbana." },
  ],
  research: {
    title: "La potestad discrecional de la administración municipal en materia urbanística",
    description: "Trabajo Final de Graduación para la obtención de la Licenciatura en Derecho (UCR) que analiza los alcances y límites de la discrecionalidad administrativa de los gobiernos locales en la regulación urbanística costarricense.",
    tags: ["Derecho Urbanístico", "Derecho Municipal", "Discrecionalidad Administrativa", "Trabajo Final de Graduación"],
  },
  credentials: [
    { metric: "9+", label: "Años de experiencia en litigio", detail: "Desde diciembre de 2017" },
    { metric: "UCR", label: "Egresado de la #1 en Centroamérica", detail: "QS Latin America University Ranking 2026" },
    { metric: "Maestría", label: "Derecho Público — UCR", detail: "Tesis en desarrollo" },
  ],
  languages: ["Español", "Inglés"],
} as const;

// ─── Perfil Individual: Khevin Sánchez ───

export const SITE = { name: "Lic. Khevin Sánchez Zamora", title: "Lic. Khevin Sánchez Zamora | Abogado Asociado · Corporación GC", description: "Licenciado en Derecho por la UCR, con mención en Derecho Tributario. Medidas cautelares, litigio contencioso-administrativo y casación ante la Sala Primera. Investigador y panelista internacional en inteligencia artificial aplicada a la justicia.", url: "https://www.corporaciongc.com", locale: "es_CR", carnet: "37920" } as const;

export const CONTACT = { email: "ksanchez@corporaciongc.com", phone: "+506 8451-4002", phoneRaw: "50684514002", linkedin: "https://www.linkedin.com/in/khevin-s%C3%A1nchez-16b047205/", instagram: "https://www.instagram.com/lic.sanchezzamora", instagramHandle: "@lic.sanchezzamora", location: "Cartago, Costa Rica" } as const;

export const CREDENTIALS = [
  { metric: "8+", label: "Años de experiencia en Derecho Público", detail: "Desde diciembre de 2017, Sala Constitucional" },
  { metric: "UCR", label: "Egresado de la #1 en Centroamérica", detail: "QS Latin America University Ranking 2026" },
  { metric: "3er", label: "Mejor promedio — Examen de Excelencia", detail: "Colegio de Abogados y Abogadas de CR, 2025" },
] as const;

export const PRACTICE_AREAS = [
  { title: "Medidas cautelares", description: "Provisionalísimas, ante causam y definitivas en sede contencioso-administrativa. Suspensión de decretos ejecutivos, actos administrativos y procedimientos de licitación.", icon: "Shield" as const },
  { title: "Litigio contencioso-administrativo", description: "Demandas de nulidad y de responsabilidad patrimonial ante el Tribunal Contencioso Administrativo. Audiencias orales y gestión integral del proceso contencioso.", icon: "Gavel" as const },
  { title: "Casación ante Sala Primera", description: "Recursos de casación por vicios procesales, violación directa e indirecta de ley y errores de hecho y de derecho en la valoración probatoria.", icon: "Scales" as const },
  { title: "Contratación pública y regulación sectorial", description: "Objeciones a carteles, impugnación de adjudicaciones y litigio en sectores regulados: telecomunicaciones, energía, mercado de valores, banca, salud y turismo, entre otros.", icon: "FileText" as const },
  { title: "Expropiaciones y responsabilidad del Estado", description: "Defensa del justo precio, medidas cautelares en procesos expropiatorios y reclamaciones de responsabilidad patrimonial y daño moral contra la Administración.", icon: "Bank" as const },
  { title: "Procedimientos administrativos", description: "Recursos de revocatoria y apelación ante la Administración Pública. Procedimientos sancionatorios. Informes jurídicos a colegios profesionales.", icon: "Stamp" as const },
  { title: "Derecho Constitucional", description: "Acciones de inconstitucionalidad y recursos de amparo ante la Sala Constitucional.", icon: "ShieldCheck" as const },
  { title: "Inteligencia artificial aplicada al derecho", description: "Integración de técnicas de vanguardia en IA al ejercicio profesional del litigio. Investigación y publicación en la intersección entre derecho público y tecnología.", icon: "Brain" as const },
] as const;

export const EXPERIENCE = [
  { role: "Abogado Asociado", org: "Corporación GC", period: "Nov. 2025 - Presente", description: "Litigio y asesoría jurídica en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Colaboración directa con el Dr. Óscar Eduardo González Camacho en casos de alta complejidad ante el TCA, Sala Constitucional, Sala Primera y diversas instancias administrativas, con una cartera activa de más de 25 procesos simultáneos.", highlight: true },
  { role: "Paralegal Senior", org: "Corporación GC", period: "2021 - 2025", description: "Investigación jurídica exhaustiva, redacción de demandas, recursos de casación, amparos, acciones de inconstitucionalidad y medidas cautelares. Preparación integral de audiencias orales y elaboración de guías de interrogatorio.", highlight: false },
  { role: "Paralegal Junior", org: "Corporación GC", period: "2019 - 2021", description: "Asistencia en investigación de normativa, jurisprudencia y doctrina aplicable. Apoyo en la gestión de expedientes y redacción de escritos procesales bajo supervisión directa.", highlight: false },
  { role: "Representante Estudiantil", org: "Facultad de Derecho, UCR", period: "Ago. 2020 - Ago. 2022", description: "Representante ante Asamblea Plebiscitaria y Asamblea de Facultad. Participación en decisiones institucionales y propuesta de mejoras curriculares.", highlight: false },
  { role: "Procurador Estudiantil Universitario", org: "FEUCR", period: "Ene. 2018 - Ene. 2019", description: "Defensa de derechos estudiantiles ante autoridades universitarias. Asesoría legal y organización de talleres sobre normativa universitaria.", highlight: false },
  { role: "Meritorio — Sala Constitucional", org: "Corte Suprema de Justicia", period: "Dic. 2017 - Dic. 2018", description: "Asistencia en investigación y análisis de casos constitucionales en el despacho del Magistrado Paul Rueda Leal. Redacción de borradores de resoluciones.", highlight: false },
] as const;

export const EDUCATION = [
  { degree: "Licenciatura en Derecho con mención en Derecho Tributario", institution: "Universidad de Costa Rica", status: "completed" },
  { degree: "Bachillerato en Historia", institution: "Universidad de Costa Rica", status: "in_progress" },
] as const;

export const CONFERENCES = [
  {
    title: "Global Summit Legal Hackers — Bogotá 2025",
    role: "Panelista",
    panel: "IA en el Derecho: Más allá de la Eficiencia, la Urgencia de un Marco Ético",
    organizers: "Legal Hackers Bogotá",
    location: "Universidad Javeriana, Bogotá, Colombia",
    date: "23 de octubre de 2025",
    copanelists: ["Ángela Villate — VillateLab", "Jimena Mora — Microsoft", "Nicolás Castañeda — Keralty"],
  },
  {
    title: "Global Summit Legal Hackers — Costa Rica 2024",
    role: "Panelista",
    panel: "¿Cómo llevar el cumplimiento ético de inteligencia artificial a la práctica y la automatización? Perspectiva de riesgos y ciencia de datos",
    organizers: "Colegio de Abogados y Abogadas de Costa Rica, Babaluum, Legal Hackers Costa Rica",
    location: "Colegio de Abogados, San José, Costa Rica",
    date: "6 de diciembre de 2024",
    copanelists: ["Katherine Romero C.", "Raúl Trejos"],
  },
] as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ─── Oscar González — Landing Page Constants ───

export const OSCAR_CREDENTIALS = [
  { metric: "38+", label: "Años de trayectoria jurídica", detail: "Desde 1986" },
  { metric: "12", label: "Años como Magistrado", detail: "Sala Primera, Corte Suprema · 2002 – 2014" },
  { metric: "CPCA", label: "Co-redactor del Código Procesal", detail: "Contencioso Administrativo · Ley N.° 8508" },
] as const;

export const OSCAR_CONTACT = {
  email: "ogonzalez@corporaciongc.com",
  phone: "+506 8317-9564",
  phoneRaw: "50683179564",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
} as const;

export const OSCAR_PRACTICE_AREAS = [
  { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.", icon: "Scales" as const },
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado y entes públicos.", icon: "Gavel" as const },
  { title: "Derecho Constitucional", description: "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.", icon: "ShieldCheck" as const },
] as const;

export const OSCAR_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ─── Esteban Pérez — Landing Page Constants ───

export const ESTEBAN_CONTACT = {
  email: "eperez@corporaciongc.com",
  phone: "+506 8317-9564",
  phoneRaw: "50683179564",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
} as const;

export const ESTEBAN_PRACTICE_AREAS = [
  { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.", icon: "Scales" as const },
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.", icon: "Gavel" as const },
  { title: "Derecho Constitucional", description: "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.", icon: "ShieldCheck" as const },
  { title: "Contratación Pública", description: "Asesoría y litigio en materia de licitaciones, concursos públicos y contratos administrativos.", icon: "FileText" as const },
  { title: "Derecho Urbanístico", description: "Asesoría y litigio en regulación del uso del suelo, permisos de construcción y planificación urbana.", icon: "Buildings" as const },
] as const;

export const ESTEBAN_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ─── Perfil Individual: José Carlos Solano ───

export const JOSE_CARLOS_PROFILE = {
  name: "Lic. José Carlos Solano Salas",
  role: "Abogado Asociado",
  photo: "/images/jose-carlos-solano.jpeg",
  heroDescription: "Abogado y Notario Público, especializado en Derecho Público, Derecho Constitucional, Litigio Contencioso-Administrativo y Derecho Notarial y Registral.",
  heroBio: "Licenciado en Derecho con mención en Derecho Tributario por la Universidad de Costa Rica, graduado con honores. Especialista en Derecho Notarial y Registral. Más de 8 años de experiencia en Corporación GC en litigio judicial y administrativo de alta complejidad. Aceptado en la Maestría en Teoría del Derecho de la Johann Wolfgang Goethe-Universität Frankfurt am Main, Alemania.",
  education: [
    { degree: "Maestría en Teoría del Derecho", institution: "Goethe-Universität Frankfurt am Main, Alemania", status: "Aceptado — Inicio octubre 2026" },
    { degree: "Especialista en Derecho Notarial y Registral", institution: "Universidad La Salle de Costa Rica", distinction: "Con honores" },
    { degree: "Licenciado en Derecho (énfasis en Derecho Tributario)", institution: "Universidad de Costa Rica", distinction: "Con honores — Promedio superior a 9/10" },
    { degree: "Estudios parciales en Filosofía", institution: "Universidad de Costa Rica" },
  ],
  career: [
    { role: "Abogado Asociado", org: "Corporación GC", period: "Jul. 2022 – Presente", description: "Litigio judicial contencioso-administrativo, procesos ordinarios civiles, procedimientos administrativos, acciones de inconstitucionalidad y recursos de amparo. Elaboración de dictámenes jurídicos especializados para administraciones públicas y sujetos privados. Colaboración directa con el Dr. Óscar Eduardo González Camacho.", highlight: true },
    { role: "Asistente Legal", org: "Corporación GC", period: "Mar. 2018 – Jul. 2022", description: "Apoyo en litigio contencioso-administrativo, procedimientos ante la Contraloría General de la República, procedimientos sancionatorios, procesos de Hacienda relacionados con Zona Marítimo Terrestre, e impugnación de actos administrativos.", highlight: false },
    { role: "Asistente Jurídico", org: "BSA Consultores", period: "Ago. 2017 – Ene. 2018", description: "Redacción y preparación de escritos judiciales y presentaciones ante tribunales. Apoyo en asesoría municipal. Investigación jurídica en Derecho Público y Administrativo.", highlight: false },
  ],
  practiceAreas: [
    { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.", icon: "Gavel" as const },
    { title: "Acciones de Inconstitucionalidad", description: "Planteamiento y defensa de acciones ante la Sala Constitucional para la impugnación de normas contrarias a la Constitución.", icon: "ShieldCheck" as const },
    { title: "Zona Marítimo Terrestre", description: "Asesoría y litigio en concesiones, permisos de uso y regulación de la zona pública y restringida del litoral.", icon: "Scales" as const },
    { title: "Procedimientos Disciplinarios CGR", description: "Defensa en procedimientos administrativos sancionatorios ante la Contraloría General de la República.", icon: "Bank" as const },
    { title: "Transporte Público y Concesiones", description: "Asesoría en régimen concesional de servicios públicos, transporte y permisos de operación.", icon: "Buildings" as const },
    { title: "Derecho Notarial y Registral", description: "Servicios notariales y gestión registral de instrumentos públicos y privados.", icon: "Stamp" as const },
  ],
  research: {
    title: "El control jurisdiccional de los actos de gobierno",
    description: "Trabajo Final de Graduación para la Licenciatura en Derecho (UCR) que analiza el concepto del Acto de Gobierno como especie del acto administrativo, su evolución histórica desde la jurisprudencia del Consejo de Estado francés, y la viabilidad de su control jurisdiccional a la luz de los principios garantistas del Derecho Público contemporáneo.",
    tags: ["Acto de Gobierno", "Derecho Administrativo", "Control Jurisdiccional", "Trabajo Final de Graduación"],
  },
  credentials: [
    { metric: "8+", label: "Años de experiencia en litigio", detail: "Desde agosto de 2017" },
    { metric: "UCR", label: "Egresado con honores", detail: "Promedio superior a 9/10" },
    { metric: "Frankfurt", label: "Maestría en Teoría del Derecho", detail: "Goethe-Universität · 2026" },
  ],
  languages: ["Español", "Inglés", "Alemán"],
} as const;

export const JOSE_CARLOS_CONTACT = {
  email: "jsolano@corporaciongc.com",
  phone: "+506 8202-6959",
  phoneRaw: "50682026959",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
} as const;

export const JOSE_CARLOS_PRACTICE_AREAS = [
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.", icon: "Gavel" as const },
  { title: "Acciones de Inconstitucionalidad", description: "Planteamiento y defensa de acciones ante la Sala Constitucional para la impugnación de normas contrarias a la Constitución.", icon: "ShieldCheck" as const },
  { title: "Zona Marítimo Terrestre", description: "Asesoría y litigio en concesiones, permisos de uso y regulación de la zona pública y restringida del litoral.", icon: "Scales" as const },
  { title: "Procedimientos Disciplinarios CGR", description: "Defensa en procedimientos administrativos sancionatorios ante la Contraloría General de la República.", icon: "Bank" as const },
  { title: "Transporte Público y Concesiones", description: "Asesoría en régimen concesional de servicios públicos, transporte y permisos de operación.", icon: "Buildings" as const },
  { title: "Derecho Notarial y Registral", description: "Servicios notariales y gestión registral de instrumentos públicos y privados.", icon: "Stamp" as const },
] as const;

export const JOSE_CARLOS_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ─── Katherine González — Landing Page Constants ───

export const KATHERINE_PROFILE = {
  name: "MSc. Katherine González Coto",
  role: "Abogada Asociada",
  photo: "/images/katherine-gonzalez.png",
  heroDescription: "Abogada y Notaria Pública especializada en Derecho Administrativo, Derecho Público y Derecho Expropiatorio.",
  heroBio: "Máster en Derecho Público por la Universidad de Costa Rica. Investigadora en responsabilidad patrimonial de la Administración y procedimiento expropiatorio costarricense.",
  education: [
    { degree: "Maestría Profesional en Derecho Público", institution: "Universidad de Costa Rica", period: "2020 – 2024" },
    { degree: "Licenciatura en Derecho", institution: "Universidad Escuela Libre de Derecho", period: "2015 – 2019" },
    { degree: "Notariado Público", institution: "Universidad Escuela Libre de Derecho", period: "2017 – 2020" },
    { degree: "Bachillerato en Derecho", institution: "Universidad Escuela Libre de Derecho", period: "2013 – 2016" },
  ],
  career: [
    { role: "Abogada Asociada", org: "Corporación GC", period: "2019 – Presente", description: "Ejercicio profesional en litigio contencioso-administrativo, procedimientos administrativos y asesoría en Derecho Público. Colaboración directa con el Dr. Óscar Eduardo González Camacho.", highlight: true },
    { role: "Asistente Legal", org: "Corporación GC", period: "Ene. 2016 – Mar. 2019", description: "Apoyo en investigación jurídica, redacción de escritos procesales y gestión de expedientes en materia de Derecho Público.", highlight: false },
    { role: "Asistente Académica", org: "Universidad de Costa Rica / Universidad Escuela Libre de Derecho", period: "2014 – Presente", description: "Asistencia en docencia e investigación académica en materias de Derecho Público.", highlight: false },
    { role: "Asistente de Mercadeo y Vida Estudiantil", org: "Universidad Escuela Libre de Derecho", period: "2013 – 2017", description: "Apoyo al Departamento de Mercadeo y Vida Estudiantil en actividades de extensión y comunicación institucional.", highlight: false },
  ],
  research: [
    {
      title: "El daño moral indirecto familiar y social como responsabilidad patrimonial de la Administración",
      description: "Trabajo Final de Investigación Aplicada para optar por el grado de Maestría Profesional en Derecho Público (UCR, 2024). Analiza la responsabilidad patrimonial del Estado por daño moral indirecto a familiares y la sociedad.",
      tags: ["Responsabilidad Patrimonial", "Daño Moral", "Derecho Administrativo", "Maestría UCR"],
      pdf: "/pdfs/tesis-katherine-gonzalez-maestria.pdf",
      slug: "tesis-dano-moral-indirecto",
    },
    {
      title: "Transformación y perspectivas del procedimiento expropiatorio en Costa Rica",
      description: "Tesis de grado para optar por el título de Licenciatura en Derecho (UELD, 2019). Estudio integral del procedimiento expropiatorio en sede administrativa y judicial.",
      tags: ["Derecho Expropiatorio", "Procedimiento Administrativo", "Licenciatura UELD"],
      pdf: "/pdfs/tesis-katherine-gonzalez-licenciatura.pdf",
      slug: "tesis-procedimiento-expropiatorio-cr",
    },
  ],
  credentials: [
    { metric: "UCR", label: "Máster en Derecho Público", detail: "Universidad de Costa Rica · 2024" },
    { metric: "UELD", label: "Notaria Pública", detail: "Universidad Escuela Libre de Derecho" },
    { metric: "4", label: "Idiomas", detail: "Español · Inglés · Francés · Italiano" },
  ],
  languages: ["Español", "Inglés", "Francés", "Italiano"],
} as const;

export const KATHERINE_CONTACT = {
  email: "kgonzalez@corporaciongc.com",
  phone: "+506 8317-9564",
  phoneRaw: "50683179564",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
} as const;

export const KATHERINE_PRACTICE_AREAS = [
  { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.", icon: "Scales" as const },
  { title: "Derecho Público", description: "Asesoría integral en materias de Derecho Público, incluyendo responsabilidad patrimonial del Estado.", icon: "ShieldCheck" as const },
  { title: "Derecho Notarial", description: "Asesoría notarial, autenticaciones, protocolizaciones y constitución de sociedades.", icon: "FileText" as const },
  { title: "Derecho Expropiatorio", description: "Asesoría y litigio en procedimientos expropiatorios, avalúos y determinación del justo precio.", icon: "Buildings" as const },
] as const;

export const KATHERINE_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

// ─── Mariana Montero — Landing Page Constants ───

export const MARIANA_PROFILE = {
  name: "Licda. Mariana Montero Acuña",
  role: "Abogada Asociada",
  photo: "/images/mariana-montero.png",
  heroDescription: "Abogada especializada en malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado. Licenciada en Derecho con mención en Derechos Humanos por la UCR, aprobada con distinción.",
  heroBio: "Egresada de la Maestría Profesional en Derecho Público de la Universidad de Costa Rica con Diploma de Excelencia Académica (mejor promedio del posgrado). Su práctica se concentra en el litigio contencioso-administrativo por daños derivados de la actividad sanitaria pública y privada.",
  education: [
    { degree: "Maestría Profesional en Derecho Público", institution: "Universidad de Costa Rica", period: "Egresada — Tesis en proceso", distinction: "Diploma de Excelencia Académica · Mejor promedio del posgrado" },
    { degree: "Licenciatura en Derecho — Mención en Derechos Humanos", institution: "Universidad de Costa Rica", period: "2019 – 2022", distinction: "Aprobada con distinción" },
    { degree: "Bachillerato en Derecho", institution: "Universidad de Costa Rica", period: "2015 – 2019" },
  ],
  career: [
    { role: "Abogada Asociada", org: "Corporación GC · Derecho Público", period: "2019 – Presente", description: "Ejercicio profesional en litigio contencioso-administrativo, procedimientos administrativos y asesoría en Derecho Público. Especialización en malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado. Colaboración directa con el Dr. Óscar Eduardo González Camacho.", highlight: true },
    { role: "Asistente Jurídica en Derecho Público", org: "Corporación GC", period: "Ago. 2018 – 2019", description: "Asistencia en litigio en sede Contencioso Administrativa y Constitucional. Redacción de escritos y manejo de expedientes.", highlight: false },
    { role: "Asistente Meritoria en Derecho Público", org: "Procuraduría General de la República", period: "Mar. 2017 – Jun. 2018", description: "Redacción de escritos y manejo de expedientes en sede contencioso-administrativa.", highlight: false },
    { role: "Consultora — Violencia Patrimonial", org: "Asociación Gerontológica Costarricense (AGECO)", period: "Ene. 2021 – Dic. 2021", description: "Consultoría jurídica especializada en violencia patrimonial contra personas adultas mayores.", highlight: false },
  ],
  practiceAreas: [
    { title: "Malpraxis Médica e Iatrogenia", description: "Litigio especializado en responsabilidad médica e iatrogenia. Procesos contencioso-administrativos por daños derivados de la actividad sanitaria pública y privada.", icon: "FirstAid" as const },
    { title: "Derecho a la Salud", description: "Asesoría y litigio en la protección del derecho fundamental a la salud frente a la Administración Pública y prestadores de servicios sanitarios.", icon: "ShieldCheck" as const },
    { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado y entes públicos.", icon: "Gavel" as const },
    { title: "Responsabilidad Patrimonial del Estado", description: "Asesoría y litigio en responsabilidad patrimonial derivada de la actividad administrativa, con énfasis en daños en el ámbito sanitario.", icon: "Scales" as const },
  ],
  research: [
    {
      title: "La iatrogenia en la responsabilidad administrativa: una aproximación a los verdaderos criterios de aplicación en el ordenamiento jurídico costarricense",
      description: "Tesis de Licenciatura (UCR, 2022) aprobada con distinción. Determina si la iatrogenia puede categorizarse como conducta lícita y normal con resultado anormal, descartándola como eximente de responsabilidad para la Administración Pública.",
      tags: ["Iatrogenia", "Responsabilidad Administrativa", "Malpraxis Médica", "Derecho a la Salud"],
      pdf: "/pdfs/tesis-mariana-montero-iatrogenia.pdf",
      slug: "tesis-iatrogenia-responsabilidad-administrativa",
    },
  ],
  mediaAppearances: [
    { type: "tv", title: "Programa Buen Día", description: "Panelista y experta invitada en múltiples segmentos sobre malpraxis médica, iatrogenia y derecho a la salud." },
    { type: "conference", title: "I Jornada Jurídica Internacional Juvenil", description: "Ponente — CIIJUS, Chiapas, México · Mayo 2020" },
    { type: "conference", title: "Competencia Internacional de Arbitraje XI Edición", description: "Oradora — Universidad del Rosario, Bogotá, Colombia · 2018" },
  ],
  credentials: [
    { metric: "UCR", label: "Mejor promedio del posgrado", detail: "Diploma de Excelencia Académica · 2024" },
    { metric: "7+", label: "Años en Corporación GC", detail: "Desde agosto de 2018" },
    { metric: "3", label: "Idiomas", detail: "Español · Inglés · Francés" },
  ],
  languages: ["Español", "Inglés", "Francés"],
} as const;

export const MARIANA_CONTACT = {
  email: "mmontero@corporaciongc.com",
  phone: "+506 7201-7710",
  phoneRaw: "50672017710",
  location: "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent, San José, Costa Rica",
} as const;

export const MARIANA_PRACTICE_AREAS = [
  { title: "Malpraxis Médica e Iatrogenia", description: "Litigio especializado en responsabilidad médica e iatrogenia. Procesos contencioso-administrativos por daños derivados de la actividad sanitaria.", icon: "FirstAid" as const },
  { title: "Derecho a la Salud", description: "Protección del derecho fundamental a la salud frente a la Administración Pública y prestadores de servicios sanitarios.", icon: "ShieldCheck" as const },
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.", icon: "Gavel" as const },
  { title: "Responsabilidad Patrimonial", description: "Responsabilidad patrimonial derivada de la actividad administrativa, con énfasis en daños sanitarios.", icon: "Scales" as const },
] as const;

export const MARIANA_NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;
