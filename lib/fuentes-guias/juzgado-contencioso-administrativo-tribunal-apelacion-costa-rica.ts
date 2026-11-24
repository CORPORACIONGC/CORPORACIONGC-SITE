import { NEXUS, type FuentesDeGuia } from "./tipos";

const TA = "Tribunal de Apelación de lo Contencioso Administrativo";
const S1 = "Sala Primera";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)",
      detalle: "Arts. 2, 6, 28, 30, 61, 71, 102, 112 bis (Ley 9762), 132, 133, 155, 179 (Ley 10702), 181, 183, 189, 190, 215 y Transitorio I",
      href: "/articulos/que-es-el-cpca-costa-rica",
    },
    {
      titulo: "Ley Orgánica del Poder Judicial (Ley 8)",
      detalle: "Arts. 102 (antes 97) y 115 (antes 110), renumerados por la Ley 10866 de 4 de marzo de 2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=33635&param2=151490&param3=1",
    },
    {
      titulo: "Ley de Expropiaciones (Ley 7495)",
      detalle: "Arts. 28, 30, 34, 35, 38 y 39; régimen de apelación del art. 215 del CPCA",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=24321&param2=119048&param3=1",
    },
    {
      titulo: "Reglamento Autónomo de Organización y Servicio de la Jurisdicción Contencioso Administrativa",
      detalle: "Corte Plena, sesión 02-08 del 21-01-2008, art. IX: arts. 7 y 87",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2018-013705", organo: "Sala Constitucional", fecha: "23-08-2018", tema: "Apelación en la expropiación", criterio: "La reforma de 2014 a los arts. 40 a 43 de la Ley de Expropiaciones es inconstitucional por su trámite; recupera vigencia el art. 215 del CPCA.", href: NEXUS("ext-1-0007-259344") },
    { numero: "Voto 2017-000640", organo: "Sala Constitucional", fecha: "19-01-2017", tema: "Capitales emergentes", criterio: "No es inconstitucional que el Juzgado Contencioso conozca los procesos de capitales emergentes de la Ley 8754.", href: NEXUS("ext-1-0007-262051") },
    { numero: "Voto 730-A-S1-2018", organo: S1, fecha: "16-08-2018", tema: "Autos apelables", criterio: "Cinco autos admiten apelación: caución, medida cautelar, archivo por demanda defectuosa, integración de la litis y embargo; el plazo corre desde la notificación a todas las partes.", href: NEXUS("sen-1-0004-892979") },
    { numero: "Voto 1860-C-S1-2022", organo: S1, fecha: "04-08-2022", tema: "Desahucio con el Estado", criterio: "El arrendamiento de un bien en zona pública es materia civil, excluida de la jurisdicción contencioso-administrativa.", href: NEXUS("sen-1-0004-1105559") },
    { numero: "Voto 1510-C-S1-2026", organo: S1, fecha: "09-10-2026", tema: "Información posesoria", criterio: "La sola colindancia con una propiedad del Estado no da interés público: la información posesoria es civil.", href: NEXUS("sen-1-0004-1432063") },
    { numero: "Voto 502-2024-I", organo: TA, fecha: "19-12-2024", tema: "Juzgado y procesos ordinarios", criterio: "El Juzgado no conoce procesos ordinarios presentados después de la derogación de la ley anterior; la acción publiciana va al Tribunal Contencioso.", href: NEXUS("sen-1-0034-1267942") },
    { numero: "Voto 231-2025-II", organo: TA, fecha: "11-06-2025", tema: "Catálogo de apelaciones", criterio: "Recoge los supuestos legales y jurisprudenciales de apelación; la inadmisibilidad por caducidad de la acción va a casación.", href: NEXUS("sen-1-0034-1303320") },
    { numero: "Voto 430-2021-II", organo: TA, fecha: "11-11-2021", tema: "Procesos especiales del Juzgado", criterio: "En las ejecuciones de tránsito, la apelación la autoriza el CPC y se tramita con el art. 133 del CPCA.", href: NEXUS("sen-1-0034-1061997") },
    { numero: "Voto 232-2022-II", organo: TA, fecha: "07-07-2022", tema: "Plazo en la expropiación", criterio: "La sentencia de expropiación se apela en cinco días hábiles ante el Tribunal.", href: NEXUS("sen-1-0034-1103850") },
    { numero: "Voto 309-2026-II", organo: TA, fecha: "03-08-2026", tema: "Autos inapelables en la expropiación", criterio: "El auto que liquida costas personales no es apelable; contra la entrada en posesión no procede recurso (art. 30).", href: NEXUS("sen-1-0034-1419868") },
  ],
  otros: [
    {
      titulo: "Actas de la Corte Plena y del Consejo Superior",
      items: [
        { titulo: "Corte Plena, sesión 29-2009, art. XXVI", detalle: "Autoriza al Tribunal de Casación a funcionar solo como Tribunal de Apelaciones (17-08-2009)", href: NEXUS("act-1-0003-2014-26") },
        { titulo: "Consejo Superior, sesión 114-2009, art. XCVIII", detalle: "El Tribunal de Apelaciones funciona desde el 4 de enero de 2010 (17-12-2009)", href: NEXUS("act-1-0003-2064-98") },
        { titulo: "Corte Plena, sesión 04-2026, art. XII", detalle: "Resoluciones unipersonales (Circular 67-2026), plan de puro derecho y volumen de trabajo (02-02-2026)", href: NEXUS("act-1-0003-8892-12") },
        { titulo: "Corte Plena, sesión 42-2026, art. XXXV", detalle: "Prórroga por un año del plan de descongestionamiento (28-09-2026)", href: NEXUS("act-1-0003-9140-35") },
        { titulo: "Consejo Superior, sesión 64-2026, art. XXX", detalle: "Áreas de expropiaciones y de ejecución del Juzgado (30-07-2026)", href: NEXUS("act-1-0003-9077-30") },
      ],
    },
  ],
  pie: "Textos del CPCA, de la Ley Orgánica del Poder Judicial y de la Ley de Expropiaciones cotejados con el SINALEVI; resoluciones y actas leídas en Nexus del Poder Judicial. Corte: 24 de noviembre de 2026.",
};
