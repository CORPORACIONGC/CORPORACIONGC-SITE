import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GLOBALEX = (id: number) => `https://www.globalexweb.com/new/controller/juris_controller.php?function=getContent&idFile=${id}`;
const ALCANCE_133 = "https://www.imprentanacional.go.cr/pub/2026/10/05/ALCA133_05_10_2026.pdf";
const SC = "Sala Constitucional";
const SP = "Sala Primera";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Plan Regulador del cantón de Santa Ana", detalle: "Acuerdo del Concejo Municipal, sesión ordinaria 121 del 25-08-2026, artículo IV, acuerdo 16; Alcance 133 a La Gaceta 187 del 05-10-2026, págs. 2 a 551", href: ALCANCE_133 },
    { titulo: "Reglamento de Generalidades y Sanciones del Plan Regulador de Santa Ana", detalle: "Arts. 2, 6, 7, 9, 16, 24 a 39 y transitorios", href: SINALEVI(107995, 152603) },
    { titulo: "Reglamento de Zonificación y Uso del Suelo", detalle: "Arts. 44 a 61, 97 a 140 y Cuadro 6", href: SINALEVI(108009, 152626) },
    { titulo: "Reglamento de Vialidad", detalle: "Clasificación vial, derechos de vía y estacionamientos", href: SINALEVI(108012, 152632) },
    { titulo: "Reglamento de Fraccionamientos, Urbanizaciones y Condominios", detalle: "Arts. 7, 25 a 29 y 54", href: SINALEVI(108015, 152636) },
    { titulo: "Reglamento de Construcciones", detalle: "Arts. 9 y 671 a 677; transitorios I y II", href: SINALEVI(108018, 152792) },
    { titulo: "Reglamento de Renovación Urbana", detalle: "Arts. 5, 49 a 52 y anexos", href: SINALEVI(108050, 152690) },
    { titulo: "Reglamento de Mapa Oficial", detalle: "Arts. 1 a 6 e inventario de propiedades municipales", href: SINALEVI(108127, 152808) },
    { titulo: "Ley de Planificación Urbana (Ley 4240)", detalle: "Arts. 10, 13, 15, 17, 18, 21, 28 a 30 y 44", href: SINALEVI(35669, 143656) },
    { titulo: "Código Municipal (Ley 7794)", detalle: "Arts. 162, 163 d) y 165; Título VI", href: SINALEVI(40197, 152716) },
    { titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)", detalle: "Arts. 10.2, 37, 39.1 b), 130.3 y 131", href: SINALEVI(57436, 146091) },
    { titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)", detalle: "Arts. 73 a) y 75", href: SINALEVI(38533, 127124) },
    { titulo: "Plan Regulador de Santa Ana de 1991 (derogado)", detalle: "Sesión extraordinaria 11 del 25-03-1991, La Gaceta 74 del 19-04-1991", href: SINALEVI(54038, 59072) },
  ],
  jurisprudencia: [
    { numero: "Voto 2026-000419", organo: TCA, fecha: "21-01-2026", tema: "Plan de Santa Ana", criterio: "Los actos del procedimiento de reforma del plan de Santa Ana son de mero trámite y el acuerdo que lo aprueba es reglamentario: no admite apelación municipal y se controla ante la jurisdicción contencioso-administrativa.", href: NEXUS("sen-1-0034-1363313") },
    { numero: "Sentencia 1514-F-S1-2021", organo: SP, fecha: "16-09-2021", tema: "Impugnación de reglamentos", criterio: "La impugnación directa de una norma reglamentaria debe presentarse dentro del año siguiente a su publicación; vencido ese plazo, puede atacarse junto con el acto que la aplica.", href: NEXUS("sen-1-0004-1068154") },
    { numero: "Voto 2025-007757", organo: SC, fecha: "14-03-2025", tema: "Plan de Santa Ana", criterio: "La zona asignada a una propiedad y los reclamos sobre la audiencia pública del plan de Santa Ana son asuntos de legalidad ordinaria, ajenos al amparo.", href: NEXUS("sen-1-0007-1283323") },
    { numero: "Voto 2025-030544", organo: SC, fecha: "19-09-2025", tema: "Plan de Santa Ana", criterio: "Rechaza de plano el amparo contra la clasificación de una finca en el plan entonces en trámite: no compete a la Sala definir si la nueva zona es conforme a derecho.", href: NEXUS("sen-1-0007-1340510") },
    { numero: "Voto 1999-05445", organo: SC, fecha: "14-07-1999", tema: "Aprobación del INVU", criterio: "La revisión y aprobación de los planes reguladores por la Dirección de Urbanismo es constitucional en tanto se ejerza por motivos legales o técnicos de absoluto interés nacional o regional.", href: GLOBALEX(95237) },
    { numero: "Voto 1993-06706", organo: SC, fecha: "21-12-1993", tema: "Usos no conformes", criterio: "La planificación urbana es competencia municipal; las limitaciones urbanísticas son indemnizables según su gravedad y la eliminación de usos no conformes debe ir acompañada de indemnización.", href: NEXUS("ext-1-0007-265415") },
    { numero: "Voto 1999-04336", organo: SC, fecha: "04-06-1999", tema: "Certificado de uso de suelo", criterio: "El certificado expedido válidamente rige mientras el plan no se modifique; lo construido con licencia conserva el uso definido.", href: GLOBALEX(94578) },
    { numero: "Sentencia 866-F-S1-2013", organo: SP, fecha: "11-07-2013", tema: "Certificado de uso de suelo", criterio: "Recoge la línea constitucional que trata el certificado conforme como acto favorable, que la Administración solo anula por los procedimientos del art. 173 de la LGAP.", href: GLOBALEX(335181) },
    { numero: "Voto 2010-021258", organo: SC, fecha: "22-12-2010", tema: "Zona Protectora Cerros de Escazú", criterio: "Anula normas del plan regulador de Mora que flexibilizaban los usos en la zona protectora y protege las construcciones terminadas y las licencias otorgadas.", href: NEXUS("ext-1-0007-260271") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-042-2016", detalle: "25-02-2016, a consulta del Concejo de Santa Ana: el plan de 1991 solo tenía reglamento y mapa de zonificación; cualquier cambio de uso exige el procedimiento del art. 17 de la Ley 4240", href: PGR(19378) },
    { titulo: "Dictamen C-245-2020", detalle: "26-06-2020: naturaleza reglamentaria de los planes reguladores; transcribe el C-116-1999 sobre los mapas no publicados de Santa Ana", href: PGR(22098) },
    { titulo: "Dictamen C-341-2007", detalle: "26-09-2007: el certificado de uso del suelo es declarativo y no genera por sí solo un derecho adquirido (transcribe C-327-2001 y C-357-2003)", href: PGR(14810) },
    { titulo: "Dictamen C-341-2020", detalle: "27-08-2020: la denegatoria del INVU debe basarse en criterios técnicos o jurídicos y está sujeta a recursos", href: PGR(22338) },
  ],
  otros: [
    {
      titulo: "Municipalidad de Santa Ana",
      items: [
        { titulo: "Repositorio de documentos del Plan Regulador", detalle: "Versiones de 2021, 2022 y 2023 y documentos de la aprobación de 2026", href: "https://www.santaana.go.cr/repositorio-documentos/" },
        { titulo: "Geoportal municipal", detalle: "Visor cartográfico del cantón", href: "https://ide.santaana.go.cr" },
      ],
    },
  ],
  pie: "Texto del plan leído en el Alcance 133 a La Gaceta 187 del 05-10-2026; normas cotejadas con SINALEVI el 19-11-2026; votos leídos en su texto íntegro en las bases de Nexus y Globalex; dictámenes en el sistema de la Procuraduría. El oficio CDU-373-08-2026 del INVU no se publicó y no pudo consultarse.",
};
