/* Asistentes legales de Corporación GC: estudiantes de Derecho que trabajan
   con el equipo. Todo sale de sus currículos (31-10-2026) y de lo que
   confirmó cada uno, sin sus datos personales de contacto. Sus perfiles viven en /equipo/<slug>, aparte de
   /abogados, porque todavía no son abogados, y tienen el mismo formato que
   los de los abogados. */

export type Asistente = {
  slug: string;
  name: string;
  /* Nombre para el titular: la última parte va en el color de acento. */
  nameLines: [string, string, string];
  short: string;
  role: string;
  study: string;
  since: string;
  portrait: string;
  actualizado: string;
  heroDescription: string;
  bio: string[];
  credentials: { metric: string; label: string; detail: string }[];
  career: { role: string; org: string; period: string; place?: string; description?: string[]; highlight?: boolean }[];
  education: { degree: string; institution: string; period: string; note?: string }[];
  activities?: { title: string; detail: string }[];
  awards?: { title: string; detail: string }[];
  languages: string[];
  skills?: string[];
  extras?: string[];
};

export const ASISTENTES: Asistente[] = [
  {
    slug: "adriel-delangton",
    name: "Adriel Esteban Delangton Barquero",
    nameLines: ["Adriel Esteban", "Delangton", "Barquero"],
    short: "Adriel Delangton Barquero",
    role: "Asistente legal",
    study: "Estudiante de Derecho, Universidad de Costa Rica",
    since: "Julio de 2026",
    portrait: "/images/equipo/adriel-delangton.jpg",
    actualizado: "2026-10-31",
    heroDescription: "Estudiante de Derecho de la Universidad de Costa Rica y asistente legal de Corporación GC.",
    bio: [
      "Asistente legal de Corporación GC desde julio de 2026. Estudia Derecho en la Universidad de Costa Rica desde 2023.",
      "En 2025 fue horas asistente de la Orquesta de Humanidades de la Universidad, donde sirvió de enlace entre el proyecto de acción social y el órgano administrativo al que pertenece, redactó escritos y organizó actividades ante la Escuela de Estudios Generales y la Vicerrectoría de Vida Estudiantil.",
      "En el primer semestre de 2026 se formó en el agotamiento de la vía administrativa en el ámbito municipal, en un seminario web del Colegio de Abogados y Abogadas de Costa Rica, y participó en el grupo de litigio en favor del Parque Nacional Marino Las Baulas del programa de voluntariado de la Universidad.",
    ],
    credentials: [
      { metric: "UCR", label: "Facultad de Derecho", detail: "Estudiante desde 2023" },
      { metric: "IB", label: "Programa del Bachillerato Internacional", detail: "Liceo de Costa Rica" },
      { metric: "C1", label: "Inglés", detail: "Español nativo" },
    ],
    career: [
      { role: "Asistente legal", org: "Corporación GC", period: "Jul. 2026 – Presente", place: "San José, Costa Rica", highlight: true },
      {
        role: "Horas asistente",
        org: "Orquesta Humanidades, Universidad de Costa Rica",
        period: "2025",
        description: [
          "Contacto entre el proyecto de acción social y el órgano administrativo al que pertenece.",
          "Redacción de escritos.",
          "Organización de actividades ante la Escuela de Estudios Generales y la Vicerrectoría de Vida Estudiantil.",
        ],
      },
    ],
    education: [
      { degree: "Derecho", institution: "Facultad de Derecho, Universidad de Costa Rica", period: "2023 – en curso" },
      { degree: "Programa del Bachillerato Internacional (IB)", institution: "Liceo de Costa Rica", period: "Secundaria" },
      { degree: "Educación secundaria", institution: "Liceo de Costa Rica", period: "Secundaria" },
      { degree: "Habilidades blandas y comunicación", institution: "Joven 360", period: "2020 – 2021" },
    ],
    activities: [
      { title: "Agotamiento de la vía administrativa a nivel municipal", detail: "Seminario web · Colegio de Abogados y Abogadas de Costa Rica · I semestre de 2026" },
      { title: "Grupo de litigio en favor del Parque Nacional Marino Las Baulas", detail: "Programa de voluntariado de la Universidad de Costa Rica · I semestre de 2026" },
    ],
    languages: ["Español: nativo", "Inglés: C1"],
  },
  {
    slug: "mathias-freiwald",
    name: "Mathias Freiwald Navarro",
    nameLines: ["Mathias", "Freiwald", "Navarro"],
    short: "Mathias Freiwald Navarro",
    role: "Asistente legal",
    study: "Estudiante de Derecho, Universidad de Costa Rica",
    since: "Junio de 2026",
    portrait: "/images/equipo/mathias-freiwald.jpg",
    actualizado: "2026-10-31",
    heroDescription: "Estudiante de cuarto año de Derecho en la Universidad de Costa Rica y asistente legal de Corporación GC.",
    bio: [
      "Asistente legal de Corporación GC desde junio de 2026: análisis jurídico en materia jurídico-administrativa, asesoría y acompañamiento legal a clientes, y redacción de demandas, contestaciones, recursos y otros escritos.",
      "Cursa el cuarto año de la Licenciatura en Derecho en la Universidad de Costa Rica, con un promedio ponderado de 9,22, después de un primer año de Economía con promedio de 9,01. En 2026 ganó, como investigador y líder de su equipo, el primer lugar de la XXIV edición de la Competencia VCGM de Procedimiento ante la Corte Penal Internacional, en Ciudad de México.",
      "Es asistente científico de la Revista Digital de Ciencias Penales de la Universidad de Costa Rica y fue asistente del Instituto de Investigaciones Jurídicas. Habla español, inglés y alemán.",
    ],
    credentials: [
      { metric: "1.er", label: "Lugar, Competencia VCGM ante la Corte Penal Internacional", detail: "XXIV edición · Ciudad de México, 2026" },
      { metric: "9,22", label: "Promedio ponderado en Derecho", detail: "Universidad de Costa Rica" },
      { metric: "3", label: "Idiomas", detail: "Español, inglés y alemán (C1)" },
    ],
    career: [
      {
        role: "Asistente legal",
        org: "Corporación GC",
        period: "Jun. 2026 – Presente",
        place: "San José, Costa Rica",
        highlight: true,
        description: [
          "Análisis jurídico en materia jurídico-administrativa.",
          "Asesoría y acompañamiento legal a clientes.",
          "Redacción de demandas, contestaciones, recursos y otros escritos.",
        ],
      },
      { role: "Asistente científico", org: "Revista Digital de Ciencias Penales, Universidad de Costa Rica", period: "Mar. 2026 – Presente", place: "San José, Costa Rica", description: ["Revisión de artículos académicos profesionales."] },
      { role: "Asistente", org: "Instituto de Investigaciones Jurídicas, Universidad de Costa Rica", period: "Mar. 2025 – Mar. 2026", place: "San José, Costa Rica", description: ["Coordinación de proyectos académicos."] },
      { role: "Pasantía como asistente legal", org: "Bufete Legal NCC Parajeles", period: "Jul. – Ago. 2023", place: "San José, Costa Rica" },
    ],
    education: [
      { degree: "Licenciatura en Derecho", institution: "Universidad de Costa Rica", period: "2023 – en curso", note: "Cuarto año de la carrera · promedio ponderado 9,22" },
      { degree: "Bachillerato en Economía", institution: "Universidad de Costa Rica", period: "2022", note: "Primer año de estudios · promedio ponderado 9,01" },
      { degree: "International Baccalaureate Bilingual Diploma", institution: "Colegio Británico de Costa Rica", period: "2020 – 2021", note: "Diploma bilingüe inglés y español · 36 de 45 puntos, entre los tres mejores de su generación" },
    ],
    awards: [
      { title: "Primer lugar, Competencia VCGM de Procedimiento ante la Corte Penal Internacional, XXIV edición", detail: "Ciudad de México, 2026 · Investigador y líder del equipo" },
    ],
    languages: ["Español: lengua materna", "Inglés: bilingüe (IB Diploma en inglés; dos años de colegio en Estados Unidos)", "Alemán: C1 (Deutsches Sprachdiplom DSD II)"],
  },
];
