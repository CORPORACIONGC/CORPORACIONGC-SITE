// ─── Firma (Homepage) ───

export const FIRM = {
  name: "Corporación GC",
  title: "Abogados Derecho Administrativo y Contencioso Administrativo · Costa Rica | Corporación GC",
  description:
    "Bufete líder en litigio contencioso-administrativo en Costa Rica. Fundado por el Dr. Óscar González Camacho, ex-Magistrado y co-redactor del CPCA. Especialistas en Derecho Público.",
  url: "https://www.corporaciongc.com",
  locale: "es_CR",
} as const;

export const FIRM_CONTACT = {
  email: "info@corporaciongc.com",
  phone: "+506 8317-9564",
  phoneRaw: "50683179564",
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
] as const;

export const OSCAR_PROFILE = {
  name: "Dr. Óscar Eduardo González Camacho",
  role: "Fundador y Director",
  photo: "/images/oscar-gonzalez-solo.png",
  heroDescription: "Ex-Magistrado de la Corte Suprema de Justicia. Co-redactor del Código Procesal Contencioso Administrativo. Uno de los litigantes de mayor calado en la jurisdicción contencioso-administrativa costarricense.",
  heroBio: "Doctor en Derecho por la Universidad de Alcalá de Henares con la calificación Sobresaliente Cum Laude. Con más de 38 años de trayectoria ininterrumpida en el Derecho Público, el Dr. Eduardo González Camacho forjó la jurisdicción contenciosa moderna desde la judicatura y hoy la domina desde el litigio. Desde 2015 dirige Corporación GC como uno de los abogados litigantes de mayor calado en la materia administrativa del país.",
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
  { slug: "khevin-sanchez", name: "Lic. Khevin Sánchez Zamora", role: "Abogado Asociado", photo: "/images/foto-perfil.png", shortBio: "Especialista en medidas cautelares y litigio contencioso-administrativo. Investigador en IA aplicada a la justicia. 3er mejor promedio, Examen de Excelencia del Colegio de Abogados, 2025.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional", "Contratación Pública"], languages: ["Español"], featured: true },
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
  },
  {
    slug: "medidas-cautelares",
    title: "Medidas Cautelares",
    subtitle: "Protección jurisdiccional urgente: provisionalísimas, ante causam y definitivas",
    description: "Especialistas en tutela cautelar contencioso-administrativa: medidas provisionalísimas de urgencia extrema, cautelares ante causam y definitivas conforme a los artículos 19 a 30 del CPCA.",
    icon: "ShieldCheck" as const,
    priority: "primary" as const,
  },
  {
    slug: "casacion-sala-primera",
    title: "Recursos de Casación ante Sala Primera",
    subtitle: "Impugnación de sentencias del Tribunal Contencioso Administrativo ante la Corte Suprema de Justicia",
    description: "Interposición y sustanciación de recursos de casación contencioso-administrativa ante la Sala Primera de la Corte Suprema de Justicia conforme a los artículos 134 a 148 del CPCA.",
    icon: "Scales" as const,
    priority: "primary" as const,
  },
  {
    slug: "contratacion-publica",
    title: "Contratación Pública",
    subtitle: "Objeciones al cartel, impugnación de adjudicaciones y litigio en licitaciones públicas",
    description: "Asesoría y litigio en todas las fases de la contratación administrativa: objeciones al cartel, recursos contra adjudicaciones y demandas ante el TCA conforme a la Ley General de Contratación Pública (Ley N.° 9986).",
    icon: "Handshake" as const,
    priority: "primary" as const,
  },
  {
    slug: "recursos-de-amparo",
    title: "Recursos de Amparo",
    subtitle: "Protección de derechos fundamentales ante la Sala Constitucional",
    description: "Interposición de recursos de amparo ante la Sala IV contra actos u omisiones de autoridades públicas y sujetos privados en posición de poder que vulneren derechos fundamentales, conforme a la Ley de la Jurisdicción Constitucional (Ley N.° 7135, arts. 29 a 56).",
    icon: "Shield" as const,
    priority: "primary" as const,
  },
  {
    slug: "acciones-de-inconstitucionalidad",
    title: "Acciones de Inconstitucionalidad",
    subtitle: "Impugnación de leyes, decretos y disposiciones generales contrarias a la Constitución",
    description: "Promoción de acciones de inconstitucionalidad ante la Sala Constitucional contra leyes, decretos ejecutivos, reglamentos y disposiciones de alcance general que infrinjan normas o principios constitucionales, conforme a la Ley N.° 7135 (arts. 73 a 95).",
    icon: "Bank" as const,
    priority: "primary" as const,
  },
  {
    slug: "asesoria-regulatoria",
    title: "Normativa y Reglamentos",
    subtitle: "Redacción de reglamentos, decretos ejecutivos y normativa administrativa para entes y órganos públicos",
    description: "Corporación GC asesora a entes y órganos de la Administración Pública en la redacción de reglamentos, decretos ejecutivos y normativa de alcance general, conforme a la potestad reglamentaria del artículo 140.3 de la Constitución Política y los artículos 6 y 121 a 129 de la LGAP.",
    icon: "BookOpen" as const,
    priority: "primary" as const,
  },
  {
    slug: "informes-juridicos-dictamenes",
    title: "Dictámenes de Legalidad Administrativa",
    subtitle: "Opiniones técnicas sobre la legalidad de actuaciones administrativas para instituciones públicas",
    description: "Corporación GC emite informes jurídicos y dictámenes especializados para entes y órganos de la Administración Pública sobre la legalidad de sus actuaciones, contratos, procedimientos y proyectos normativos, conforme al marco de la LGAP y la jurisprudencia contencioso-administrativa.",
    icon: "FileText" as const,
    priority: "primary" as const,
  },
  {
    slug: "derecho-administrativo",
    title: "Vía Administrativa y Recursos",
    homepageTitle: "Vía Administrativa y Recursos",
    subtitle: "Procedimientos ordinarios, recursos de revocatoria y apelación ante la Administración Pública",
    description: "Representación en procedimientos administrativos ordinarios, interposición de recursos de revocatoria con apelación en subsidio y agotamiento de vía administrativa conforme a la LGAP (Ley N.° 6227, arts. 308 a 352).",
    icon: "Briefcase" as const,
    priority: "primary" as const,
  },
  {
    slug: "procedimientos-sancionatorios",
    title: "Defensa en Procedimientos Sancionatorios",
    subtitle: "Defensa en procedimientos disciplinarios y sancionatorios ante la Administración Pública",
    description: "Defensa del administrado en procedimientos sancionatorios de la Administración Pública: garantías del debido proceso, audiencia oral, acceso al expediente y recursos administrativos conforme a los artículos 308 a 319 de la LGAP y los artículos 39 y 41 de la Constitución Política.",
    icon: "Warning" as const,
    priority: "primary" as const,
  },
  {
    slug: "empleo-publico",
    title: "Empleo Público y Servicio Civil",
    subtitle: "Defensa de servidores públicos en procedimientos disciplinarios, sanciones y despidos",
    description: "Defensa de servidores públicos en procedimientos disciplinarios: amonestaciones, suspensiones y despidos conforme al Estatuto de Servicio Civil (Ley N.° 1581), la Ley Marco de Empleo Público (Ley N.° 10159) y el procedimiento ordinario de la LGAP (arts. 308 a 319).",
    icon: "IdentificationBadge" as const,
    priority: "primary" as const,
  },
  // ─── Áreas Especializadas ───
  {
    slug: "servicio-publico",
    title: "Regulación Tarifaria y Servicios Regulados",
    subtitle: "Fijación tarifaria, concesiones y litigio ante ARESEP y SUTEL",
    description: "Representación en procedimientos de fijación tarifaria, impugnación de resoluciones de ARESEP y SUTEL, defensa de concesiones de servicios públicos y litigio en materia regulatoria conforme a la Ley N.° 7593.",
    icon: "Lightning" as const,
    priority: "specialized" as const,
  },
  {
    slug: "materia-municipal",
    title: "Derecho Municipal",
    subtitle: "Litigio contra actos municipales, patentes, tributos locales y acuerdos del Concejo",
    description: "Impugnación de actos municipales, defensa en materia de patentes y tributos locales, recursos contra acuerdos del Concejo Municipal y litigio contencioso-administrativo contra gobiernos locales conforme al Código Municipal (Ley N.° 7794).",
    icon: "Buildings" as const,
    priority: "specialized" as const,
  },
  {
    slug: "dominio-publico",
    title: "Dominio Público y Concesiones Demaniales",
    subtitle: "Concesiones de uso, permisos sobre bienes del Estado y litigio demanial",
    description: "Solicitud y defensa de concesiones sobre bienes de dominio público, impugnación de revocatorias y caducidades, defensa frente a desalojos administrativos y protección de derechos derivados de permisos de uso.",
    icon: "MapPin" as const,
    priority: "specialized" as const,
  },
  {
    slug: "zona-maritimo-terrestre",
    title: "Zona Marítimo Terrestre",
    subtitle: "Concesiones costeras, litigio en ZMT y planificación reguladora costera",
    description: "Trámite y defensa de concesiones en zona restringida, impugnación de revocatorias y caducidades, litigio contra ocupaciones ilegales y recursos contra planes reguladores costeros conforme a la Ley N.° 6043.",
    icon: "Waves" as const,
    priority: "specialized" as const,
  },
  {
    slug: "derecho-urbanistico",
    title: "Derecho Urbanístico",
    subtitle: "Permisos de construcción, planes reguladores y uso del suelo",
    description: "Impugnación de denegatorias de permisos de construcción, recursos contra acuerdos de zonificación, litigio en materia de planes reguladores cantonales y defensa de propietarios frente a restricciones urbanísticas conforme a la Ley de Planificación Urbana (Ley N.° 4240).",
    icon: "HouseSimple" as const,
    priority: "specialized" as const,
  },
  {
    slug: "materia-presupuestaria",
    title: "Derecho Presupuestario y Hacienda Pública",
    subtitle: "Litigio contra la Contraloría, aprobación presupuestaria y responsabilidad fiscal",
    description: "Impugnación de resoluciones de la Contraloría General de la República, defensa en procedimientos de responsabilidad fiscal, litigio sobre aprobación presupuestaria y asesoría en administración financiera conforme a la Ley N.° 8131 y la Ley N.° 7428.",
    icon: "CurrencyCircleDollar" as const,
    priority: "specialized" as const,
  },
  {
    slug: "comercio-internacional",
    title: "Comercio Internacional y Derecho Aduanero",
    subtitle: "Antidumping, salvaguardias, TLCs y solución de controversias comerciales",
    description: "Representación en investigaciones antidumping y de salvaguardias ante COMEX, defensa frente a derechos compensatorios, litigio ante mecanismos de solución de controversias de la OMC y TLCs, y asesoría en cumplimiento arancelario conforme a la Ley N.° 7638 y acuerdos multilaterales.",
    icon: "Globe" as const,
    priority: "specialized" as const,
  },
  // ─── Cobertura Complementaria ───
  {
    slug: "derecho-civil",
    title: "Derecho Civil",
    subtitle: "Litigio entre particulares: responsabilidad civil, cobros, contratos y propiedad",
    description: "Litigio civil entre particulares: responsabilidad contractual y extracontractual, procesos de cobro judicial, desahucio, reivindicatorios, sucesiones y nulidades conforme al Código Civil (Ley N.° 63) y al Código Procesal Civil (Ley N.° 9342).",
    icon: "UsersThree" as const,
    priority: "complementary" as const,
  },
  {
    slug: "derecho-de-familia",
    title: "Derecho de Familia",
    subtitle: "Divorcio, pensión alimentaria, guarda y patria potestad",
    description: "Procesos de divorcio, pensión alimentaria, guarda y crianza, filiación, liquidación de bienes gananciales y violencia doméstica conforme al Código de Familia (Ley N.° 5476), la Ley de Pensiones Alimentarias (Ley N.° 7654) y legislación conexa.",
    icon: "Heart" as const,
    priority: "complementary" as const,
  },
  {
    slug: "derecho-laboral",
    title: "Derecho Laboral",
    subtitle: "Despido injustificado, prestaciones, riesgos del trabajo y litigio laboral oral",
    description: "Demandas por despido injustificado, cobro de prestaciones laborales, procesos por riesgos del trabajo, discriminación laboral y litigio oral laboral conforme al Código de Trabajo reformado por la Ley N.° 9343 (Reforma Procesal Laboral).",
    icon: "Wrench" as const,
    priority: "complementary" as const,
  },
  {
    slug: "derecho-notarial",
    title: "Derecho Notarial y Registral",
    subtitle: "Escrituras públicas, protocolizaciones, constitución de sociedades, trámites registrales y fe pública",
    description: "Servicios notariales completos: otorgamiento de escrituras públicas, protocolización de actas, constitución de sociedades, compraventas, hipotecas, fideicomisos, certificaciones notariales y gestión registral conforme al Código Notarial (Ley N.° 7764).",
    icon: "Stamp" as const,
    priority: "complementary" as const,
  },
] as const;

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

export const SITE = { name: "Lic. Khevin Sánchez Zamora", title: "Lic. Khevin Sánchez Zamora | Abogado Asociado · Corporación GC", description: "Especialista en medidas cautelares y litigio contra el Estado en materia contencioso-administrativa. Investigador en inteligencia artificial aplicada a la justicia. Licenciado con mención en Derecho Tributario por la UCR.", url: "https://www.corporaciongc.com", locale: "es_CR", carnet: "37920" } as const;

export const CONTACT = { email: "ksanchez@corporaciongc.com", phone: "+506 8451-4002", phoneRaw: "50684514002", linkedin: "https://www.linkedin.com/in/khevin-s%C3%A1nchez-16b047205/", instagram: "https://www.instagram.com/lic.sanchezzamora", instagramHandle: "@lic.sanchezzamora", location: "Cartago, Costa Rica" } as const;

export const CREDENTIALS = [
  { metric: "7+", label: "Años de experiencia en litigio", detail: "Desde mayo 2019" },
  { metric: "3er", label: "Mejor promedio — Examen de Excelencia", detail: "Colegio de Abogados y Abogadas de CR, 2025" },
  { metric: "UCR", label: "Egresado de la #1 en Centroamérica", detail: "QS Latin America University Ranking 2026" },
] as const;

export const PRACTICE_AREAS = [
  { title: "Medidas cautelares", description: "Provisionalísimas, ante causam y definitivas en sede contencioso-administrativa. Suspensión de decretos ejecutivos, actos administrativos y procedimientos de licitación.", icon: "Shield" as const },
  { title: "Litigio contencioso-administrativo", description: "Demandas de nulidad y de responsabilidad patrimonial ante el Tribunal Contencioso Administrativo. Audiencias orales y gestión integral del proceso contencioso.", icon: "Gavel" as const },
  { title: "Casación ante Sala Primera", description: "Recursos de casación por vicios procesales, violación directa e indirecta de ley y errores de hecho y de derecho en la valoración probatoria.", icon: "Scales" as const },
  { title: "Contratación pública y regulación sectorial", description: "Objeciones a carteles, impugnación de adjudicaciones y litigio en telecomunicaciones, mercado de valores, salud pública y turismo.", icon: "FileText" as const },
  { title: "Procedimientos administrativos", description: "Recursos de revocatoria y apelación ante la Administración Pública. Procedimientos sancionatorios. Informes jurídicos a colegios profesionales.", icon: "Stamp" as const },
  { title: "Derecho Constitucional", description: "Acciones de inconstitucionalidad y recursos de amparo ante la Sala Constitucional.", icon: "ShieldCheck" as const },
  { title: "Inteligencia artificial aplicada al derecho", description: "Integración de técnicas de vanguardia en IA al ejercicio profesional del litigio. Investigación y publicación en la intersección entre derecho público y tecnología.", icon: "Brain" as const },
] as const;

export const EXPERIENCE = [
  { role: "Abogado Asociado", org: "Corporación GC", period: "Nov. 2025 - Presente", description: "Litigio y asesoría jurídica en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Colaboración directa con el Dr. Óscar Eduardo González Camacho en casos de alta complejidad ante el TCA, Sala Constitucional, Sala Primera y diversas instancias administrativas.", highlight: true },
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
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
  location: "OFIDENT, Barrio Dent, San José, Costa Rica",
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
