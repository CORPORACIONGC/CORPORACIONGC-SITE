import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 173, 330 y 331",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Ley de Protección al Ciudadano del Exceso de Requisitos y Trámites Administrativos",
      detalle: "Ley N.° 8220, arts. 1, 6 y 7",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=48116&param2=136305&param3=1",
    },
    {
      titulo: "Ley de Construcciones",
      detalle: "Ley N.° 833, art. 74",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=36307&param2=143894&param3=1",
    },
    {
      titulo: "Ley de Planificación Urbana",
      detalle: "Ley N.° 4240, art. 57",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=35669&param2=143656&param3=1",
    },
    {
      titulo: "Ley Forestal",
      detalle: "Ley N.° 7575, art. 4",
    },
  ],
  jurisprudencia: [
    {
      numero: "Voto 2004-13142",
      organo: SC,
      fecha: "23-11-2004",
      tema: "Licencia de construcción",
      criterio:
        "Con cita del artículo 74 de la Ley de Construcciones, la clausura de una obra sin licencia y la multa impuesta por la Municipalidad de San José no lesionan derechos fundamentales. Declaró sin lugar el amparo.",
      href: NEXUS("sen-1-0007-295836"),
    },
    {
      numero: "Voto 2005-00489",
      organo: SC,
      fecha: "25-01-2005",
      tema: "Vía para discutir el silencio",
      criterio:
        "Con cita del voto 2001-12041, si el silencio positivo operó o no es un problema de legalidad que se discute ante el juez contencioso administrativo. Rechazó de plano el amparo.",
      href: NEXUS("sen-1-0007-300592"),
    },
    {
      numero: "Voto 2006-14479",
      organo: SC,
      fecha: "29-09-2006",
      tema: "Urbanizaciones y ambiente",
      criterio:
        "En materia ambiental no opera el silencio positivo; las autoridades municipales de Oreamuno deben pronunciarse negativamente sobre los proyectos si hay razones para hacerlo. Declaró sin lugar el amparo.",
      href: NEXUS("sen-1-0007-360088"),
    },
    {
      numero: "Voto 2012-001283",
      organo: SC,
      fecha: "03-02-2012",
      tema: "Materia ambiental",
      criterio:
        "El silencio positivo no opera de pleno derecho en procedimientos donde esté en juego la protección del ambiente; la falta de pronunciamiento de los entes consultados sobre perforación de pozos no significa criterio favorable.",
      href: NEXUS("sen-1-0007-535968"),
    },
    {
      numero: "Resolución 413-2014",
      organo: "Tribunal Contencioso Administrativo, Sección III",
      fecha: "29-08-2014",
      tema: "Licencia de licores",
      criterio:
        "Como jerarca impropio, tuvo por operado el silencio positivo en una licencia de expendio de bebidas alcohólicas: no es materia urbanística ni ambiental y la solicitante completó los requisitos tras la prevención municipal.",
      href: NEXUS("sen-1-0034-615104"),
    },
    {
      numero: "Sentencia 129-F-S1-2018",
      organo: "Sala Primera",
      fecha: "15-02-2018",
      tema: "Reserva de ley",
      criterio:
        "El silencio positivo es excepcional y solo se produce donde el legislador lo reconoce de forma expresa y taxativa; un reglamento no puede crearlo.",
      href: NEXUS("sen-1-0004-892545"),
    },
  ],
  procuraduria: [
    {
      titulo: "Dictamen C-198-2002",
      detalle: "09-08-2002 · El silencio positivo es inaplicable a permisos, autorizaciones o licencias sobre bienes de dominio público sujetos a regímenes especiales. Transcribe el voto 6836-93 de la Sala Constitucional (24-12-1993) sobre la materia forestal.",
      href: PGR(11320),
    },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Dictámenes: SINALEVI (Procuraduría General de la República). Cotejo al 26 de octubre de 2026.",
};
