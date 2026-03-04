// ─── Firma (Homepage) ───

export const FIRM = {
  name: "Corporación GC",
  title: "Corporación GC | Abogados Especialistas en Derecho Público · Costa Rica",
  description:
    "Bufete líder en litigio contencioso-administrativo en Costa Rica. Fundado por el Dr. Óscar Eduardo González Camacho, ex-Magistrado de la Corte Suprema y co-redactor del Código Procesal Contencioso Administrativo. Más de 38 años de experiencia en Derecho Público.",
  url: "https://corporaciongc.com",
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
  { label: "Áreas", href: "#areas" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const FIRM_CREDENTIALS = [
  { metric: "38+", label: "Años de trayectoria jurídica", detail: "Desde 1986" },
  { metric: "12", label: "Años como Magistrado de la Corte Suprema", detail: "Sala Primera, 2002 – 2014" },
  { metric: "CPCA", label: "Co-redactor del Código Procesal", detail: "Contencioso Administrativo" },
] as const;

export const OSCAR_PROFILE = {
  name: "Dr. Óscar Eduardo González Camacho",
  role: "Fundador y Director",
  photo: "/images/oscar-gonzalez.png",
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
    "Profesor de Doctorado y Maestría en Derecho Público — Universidad de Costa Rica",
    "Profesor de Derecho Constitucional y Administrativo — UCR",
    "Profesor de Doctorado y Licenciatura — Escuela Libre de Derecho",
    "Instructor — Escuela Judicial del Poder Judicial",
  ],
  publications: [
    { type: "law" as const, title: "Co-redactor del Código Procesal Contencioso Administrativo", detail: "Ley N.° 8508, 28 de abril de 2006. Pieza fundamental de la jurisdicción contenciosa moderna." },
    { type: "book" as const, title: "Justicia Administrativa (Tomos I, II y III)", detail: "Editorial Investigaciones Jurídicas, 2002. Obra de referencia sobre el control judicial pleno de la Administración Pública, la inactividad administrativa y las medidas cautelares positivas." },
    { type: "book" as const, title: "El Nuevo Proceso Contencioso Administrativo", detail: "Editorial Jurídica Continental / Escuela Judicial, 2006. Obra colectiva sobre la implementación del CPCA." },
    { type: "book" as const, title: "Consideraciones Prácticas en torno al Proceso Ejecutivo", detail: "Escuela Judicial, 1995." },
  ],
  conferences: "Conferencista internacional en Colombia, Bolivia, Ecuador, Argentina, Alemania, Portugal, España y Estados Unidos.",
  languages: ["Español", "Francés"],
} as const;

export const TEAM = [
  { slug: "oscar-gonzalez", name: "Dr. Óscar Eduardo González Camacho", role: "Fundador y Director", photo: "/images/oscar-gonzalez.png", shortBio: "Ex-Magistrado de la Corte Suprema de Justicia. Co-redactor del CPCA. Más de 38 años de trayectoria en Derecho Público.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional"], languages: ["Español", "Francés"], featured: true },
  { slug: "khevin-sanchez", name: "Lic. Khevin Sánchez Zamora", role: "Abogado Asociado", photo: "/images/foto-perfil.jpeg", shortBio: "Más de 7 años de experiencia en litigio. 3er mejor promedio en el Examen de Excelencia del Colegio de Abogados, 2025. Egresado UCR.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional", "Contratación Pública"], languages: ["Español"], featured: true },
  { slug: "katherine-gonzalez", name: "Licda. Katherine González", role: "Abogada Asociada", photo: null, shortBio: "Master en Derecho Público por la UCR. Licenciada en Derecho y Notaria Pública. Miembro del Colegio de Abogados desde 2019.", areas: ["Derecho Administrativo", "Derecho Público", "Derecho Notarial"], languages: ["Español", "Inglés", "Italiano", "Francés"], featured: false },
  { slug: "mariana-montero", name: "Licda. Mariana Montero Acuña", role: "Abogada Asociada", photo: null, shortBio: "Licenciada en Derecho con mención en Derechos Humanos, UCR. Maestranda en Derecho Público, UCR.", areas: ["Derecho Administrativo", "Derechos Humanos", "Derecho Público"], languages: ["Español", "Inglés", "Francés"], featured: false },
  { slug: "esteban-perez", name: "Lic. Esteban Pérez Herrera", role: "Abogado Asociado", photo: "/images/esteban-perez.jpg", shortBio: "Abogado litigante y Notario Público. Más de 9 años de experiencia en litigio contencioso-administrativo. Maestrando en Derecho Público, UCR.", areas: ["Derecho Administrativo", "Contencioso Administrativo", "Derecho Constitucional", "Contratación Pública", "Derecho Urbanístico"], languages: ["Español", "Inglés"], featured: true },
  { slug: "jose-carlos-solano", name: "Lic. José Carlos Solano Salas", role: "Abogado Asociado", photo: null, shortBio: "Licenciado en Derecho con Excelencia Académica, UCR. Estudios en Filosofía. Especialidad en Derecho Notarial y Registral.", areas: ["Derecho Ambiental", "Derecho Civil", "Derecho Notarial y Registral"], languages: ["Español", "Inglés", "Alemán"], featured: false },
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

export const SITE = { name: "Lic. Khevin Sánchez Zamora", title: "Lic. Khevin Sánchez Zamora | Abogado Asociado · Corporación GC", description: "Abogado Asociado en Corporación GC. Más de 7 años de experiencia en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Carnet 37920.", url: "https://corporaciongc.com", locale: "es_CR", carnet: "37920" } as const;

export const CONTACT = { email: "ksanchez@corporaciongc.com", phone: "+506 8451-4002", phoneRaw: "50684514002", linkedin: "https://www.linkedin.com/in/khevin-s%C3%A1nchez-16b047205/", instagram: "https://www.instagram.com/lic.sanchezzamora", instagramHandle: "@lic.sanchezzamora", location: "Cartago, Costa Rica" } as const;

export const CREDENTIALS = [
  { metric: "7+", label: "Años de experiencia en litigio", detail: "Desde mayo 2019" },
  { metric: "3er", label: "Mejor promedio — Examen de Excelencia", detail: "Colegio de Abogados y Abogadas de CR, 2025" },
  { metric: "UCR", label: "Egresado de la #1 en Centroamérica", detail: "QS Latin America University Ranking 2026" },
] as const;

export const PRACTICE_AREAS = [
  { title: "Derecho Administrativo", description: "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.", icon: "Scales" as const },
  { title: "Contencioso Administrativo", description: "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.", icon: "Gavel" as const },
  { title: "Derecho Constitucional", description: "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.", icon: "ShieldCheck" as const },
  { title: "Contratación Pública", description: "Asesoría y litigio en materia de licitaciones, concursos públicos y contratos administrativos.", icon: "FileText" as const },
  { title: "Litigio Estratégico", description: "Gestión integral de casos de alta complejidad técnica y relevancia jurídica.", icon: "Strategy" as const },
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
  { degree: "Licenciatura en Derecho", institution: "Universidad de Costa Rica", status: "completed" },
  { degree: "Bachillerato en Historia", institution: "Universidad de Costa Rica", status: "in_progress" },
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
