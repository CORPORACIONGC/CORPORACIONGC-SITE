/* La Ley sobre la Zona Marítimo Terrestre como dato: la ficha de la ley,
   sus nueve capítulos y las disposiciones transitorias, el índice de los 83
   artículos y los 8 transitorios con el rótulo de cada uno, y las reformas
   y leyes conexas que muestra la guía. El texto íntegro vive en
   /datos/ley-6043.json y viaja en el HTML de la página.
   Fuente: SINALEVI, ficha 32006, versión 9 de 9 (131014), del 05-04-2022,
   consultada en vivo el 28 de octubre de 2026 y cotejada con la base de
   normativa de la firma. La investigación está en
   ~/PAGINA GC/guia-zmt-2026-10-28. */

import type { FichaNorma } from "./normas";

export const LEY6043_FICHA: FichaNorma = {
  nombre: "Ley sobre la Zona Marítimo Terrestre",
  identificador: "Ley 6043",
  tipo: "Ley",
  fecha: "1977-03-02",
  version:
    "Más 8 transitorios. Texto vigente, cotejado con SINALEVI el 28 de octubre de 2026 (versión 9 de 9, del 5 de abril de 2022), con la última reforma, la de la Ley 10236",
  articulos: 83,
  datos: "/datos/ley-6043.json",
  sinalevi: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=32006&param2=131014&param3=1",
  etiquetaBusqueda: "Escriba un número de artículo —47— o una palabra —canon—",
  alias: [
    "Ley 6043",
    "Ley sobre la Zona Marítimo Terrestre",
    "Ley de la Zona Marítimo Terrestre de Costa Rica",
    "Ley ZMT",
  ],
  emisor: "Asamblea Legislativa de la República de Costa Rica",
  fechaVersion: "2022-04-05",
  sinonimos: {
    zmt: {
      actual: "zona marítimo terrestre",
      nota: "ZMT es la sigla de zona marítimo terrestre.",
    },
    ida: {
      actual: "Instituto de Tierras y Colonización",
      nota: "La ley nombra al Instituto de Tierras y Colonización, luego IDA y hoy INDER. La Ley 9036 derogó las obligaciones de esta ley en relación con el IDA.",
    },
    inder: {
      actual: "Instituto de Tierras y Colonización",
      nota: "La ley nombra al Instituto de Tierras y Colonización, luego IDA y hoy INDER. La Ley 9036 derogó las obligaciones de esta ley en relación con el IDA.",
    },
    itco: {
      actual: "Instituto de Tierras y Colonización",
      nota: "ITCO es la sigla del Instituto de Tierras y Colonización, luego IDA y hoy INDER.",
    },
  },
};

/** Los capítulos de la ley y las disposiciones transitorias, en su orden.
 *  La ley no tiene títulos: el selector muestra los nombres de sus nueve
 *  capítulos sin el número, que en minúscula se leería «capítulo i». */
export const LEY6043_TITULOS: string[] = [
  "Disposiciones generales",
  "Zona marítimo terrestre",
  "Zona pública",
  "Funciones del Instituto Costarricense de Turismo",
  "Funciones de las municipalidades",
  "De la zona restringida y sus concesiones",
  "Sanciones",
  "Disposiciones especiales",
  "Casos especiales",
  "Disposiciones transitorias",
];

/** La ley no se divide en secciones dentro de sus capítulos. */
export const LEY6043_GRUPOS: string[] = [];

/** Número de artículo, rótulo, y los índices de su capítulo, de su grupo y
 *  de su sección —−1 cuando no los tiene—. */
export const LEY6043_INDICE: [string, string, number, number, number][] = [
  ["1","Patrimonio nacional, inalienable e imprescriptible",0,-1,-1], ["2","Vigilancia superior del ICT",0,-1,-1],
  ["3","Competencia, usufructo y administración municipal",0,-1,-1], ["4","Control jurídico de la Procuraduría",0,-1,-1],
  ["5","Zonas cubiertas por el mar: solo la Asamblea Legislativa",0,-1,-1],
  ["6","Ciudades, zonas urbanas litorales y propiedades inscritas excluidas",0,-1,-1],
  ["7","Prohibición de informaciones posesorias",0,-1,-1], ["8","Utilidad pública para expropiar",0,-1,-1],
  ["9","Qué es la zona: los 200 metros",1,-1,-1], ["10","Zona pública de 50 metros y zona restringida de 150",1,-1,-1],
  ["11","Manglares y esteros son zona pública",1,-1,-1], ["12","Actividades prohibidas sin autorización legal",1,-1,-1],
  ["13","Desalojo de infractores y demolición",1,-1,-1], ["14","Deber de los colindantes de proteger la zona",1,-1,-1],
  ["15","Incorporación de fincas colindantes a la planificación",1,-1,-1], ["16","Exención de impuestos en traspasos al Estado",1,-1,-1],
  ["17","Medidas de conservación",1,-1,-1], ["18","Usos excepcionales junto al mar",1,-1,-1],
  ["19","Sin declaratoria de aptitud turística no hay obras",1,-1,-1],
  ["20","Zona pública: uso público y libre tránsito",2,-1,-1], ["21","Excepción por configuración geográfica o topografía",2,-1,-1],
  ["22","Obras de infraestructura en la zona pública",2,-1,-1], ["23","Vías de acceso a la zona pública",2,-1,-1],
  ["24","Construcciones que quedan en zona pública por causas naturales",2,-1,-1],
  ["25","Fincas inscritas que comprenden zona pública",2,-1,-1],
  ["26","Plan general de uso de la tierra",3,-1,-1], ["27","Declaratoria de zonas turísticas o no turísticas",3,-1,-1],
  ["28","Proyectos de desarrollo turístico integral",3,-1,-1], ["29","Disposiciones del ICT para las zonas turísticas",3,-1,-1],
  ["30","Registro General de Concesiones",3,-1,-1], ["31","Aprobación de planos y participación de extranjeros",3,-1,-1],
  ["32","Crédito bancario para planos y estudios",3,-1,-1], ["33","Garantía de ejecución de proyectos turísticos",3,-1,-1],
  ["34","Cuidado de la zona e inspectores municipales",4,-1,-1], ["35","Custodia municipal y situación existente",4,-1,-1],
  ["36","Coordinación con el ICT",4,-1,-1], ["37","Aprobación de proyectos turísticos por el ICT y el INVU",4,-1,-1],
  ["38","Sin planos de desarrollo aprobados no hay concesiones",4,-1,-1],
  ["39","Concesiones solo en la zona restringida",5,-1,-1], ["40","Solo las municipalidades otorgan concesiones",5,-1,-1],
  ["41","La concesión da uso y disfrute",5,-1,-1], ["42","Aprobación del ICT o del Instituto de Tierras y Colonización",5,-1,-1],
  ["43","Prohibición de variar el destino",5,-1,-1], ["44","Primero en tiempo, primero en derecho",5,-1,-1],
  ["45","Traspaso y gravamen solo con autorización expresa",5,-1,-1], ["46","Regidores, ejecutivo municipal y parientes",5,-1,-1],
  ["47","Extranjeros y sociedades que no pueden ser concesionarios",5,-1,-1], ["48","Plazo de 5 a 20 años y canon",5,-1,-1],
  ["49","Fallecimiento o ausencia del concesionario",5,-1,-1], ["50","Prórroga y prórroga anticipada",5,-1,-1],
  ["51","Denegatoria de la prórroga",5,-1,-1], ["52","Causas de extinción",5,-1,-1],
  ["53","Causas de cancelación",5,-1,-1], ["54","Contrato de concesión",5,-1,-1],
  ["55","Edificaciones y mejoras al extinguirse la concesión",5,-1,-1], ["56","Reversión a la municipalidad",5,-1,-1],
  ["57","Concesiones en zonas turísticas",5,-1,-1], ["58","Concesiones agropecuarias",5,-1,-1],
  ["59","Distribución de lo que se cobra por canon",5,-1,-1], ["60","Concesión por licitación",5,-1,-1],
  ["61","Explotación ilegal de flora y fauna",6,-1,-1], ["62","Construcción o desarrollo contra la ley",6,-1,-1],
  ["63","Delito del funcionario que otorga o tolera",6,-1,-1], ["64","Anulado por la Sala Constitucional (voto 5755-94)",6,-1,-1],
  ["65","Pérdida de la concesión por condena penal",6,-1,-1],
  ["66","Trámite de las expropiaciones",7,-1,-1], ["67","Préstamos con garantía de la concesión",7,-1,-1],
  ["68","Contratos anteriores sobre lotes en zona pública",7,-1,-1], ["69","Zonas con edificaciones no autorizadas",7,-1,-1],
  ["70","Pobladores con más de diez años de residencia",7,-1,-1], ["71","Nulidad de los actos contrarios a la Ley 5602",7,-1,-1],
  ["72","Instituciones que sustituyan a las nombradas",7,-1,-1], ["73","Parques nacionales y reservas equivalentes",7,-1,-1],
  ["73bis","Concejos municipales de distrito",7,-1,-1],
  ["74","Bahía Culebra",8,-1,-1], ["75","Terrenos de JAPDEVA",8,-1,-1],
  ["76","Puntarenas: demasías, alameda y carretera panorámica",8,-1,-1], ["77","Estero de Puntarenas",8,-1,-1],
  ["78","Isla San Lucas",8,-1,-1], ["79","Caldera, Esparza: plan regulador urbano",8,-1,-1],
  ["80","Playa de Tivives",8,-1,-1], ["81","Reglamentación",8,-1,-1],
  ["82","Orden público, derogatoria y vigencia",8,-1,-1],
  ["TI","Transitorio I · Concesiones y arrendamientos anteriores",9,-1,-1],
  ["TII","Transitorio II · Registro de los contratos anteriores en el ICT",9,-1,-1],
  ["TIII","Transitorio III · Instalaciones turísticas existentes",9,-1,-1],
  ["TIV","Transitorio IV · Proyectos turísticos aprobados antes de la ley",9,-1,-1],
  ["TV","Transitorio V · Títulos en trámite",9,-1,-1],
  ["TVI","Transitorio VI · Zona urbana del distrito nueve de Puntarenas",9,-1,-1],
  ["TVII","Transitorio VII · Canon provisional a los ocupantes",9,-1,-1],
  ["TVIII","Transitorio VIII · Exoneración del derecho de arrendamiento",9,-1,-1],
];

/** La ficha del área de la firma, en los artículos de las concesiones. */
const AREA_ZMT = {
  href: "/areas/zona-maritimo-terrestre",
  texto: "Área: zona marítimo terrestre",
};

export const LEY6043_GUIAS: Record<string, { href: string; texto: string }> = Object.fromEntries(
  ["39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"].map(
    (a) => [a, AREA_ZMT],
  ),
);

/** Una ley que reformó, adicionó o interpretó la Ley 6043, o una sentencia
 *  de la Sala Constitucional que tocó su texto. */
export type Reforma6043 = {
  /** «Ley 9974» o «Voto 5755-94». */
  norma: string;
  /** Fecha de sanción o del voto, como la da la fuente: «09-04-2021» o «1988». */
  fecha: string;
  /** Dónde cayó: «art. 50», «capítulo VI», «toda la ley». */
  donde: string;
  cambio: string;
  href?: string;
};

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;

/** Las reformas, adiciones, interpretaciones y anulaciones que registran
 *  SINALEVI y el Sistema de Información Legislativa, en orden cronológico. */
export const LEY6043_REFORMAS: Reforma6043[] = [
  { norma: "Ley 6515", fecha: "25-09-1980", donde: "Transitorio VI", cambio: "Adicionó el Transitorio VI, que exceptúa de la ley los predios de la zona urbana del distrito nueve del cantón central de Puntarenas adquiridos legítimamente." },
  { norma: "Ley 6890", fecha: "04-09-1983", donde: "Transitorio VII", cambio: "Adicionó el Transitorio VII: las municipalidades cobran canon a los ocupantes, en forma provisional y sin que eso les dé derecho alguno a una concesión." },
  { norma: "Ley 6951", fecha: "29-02-1984", donde: "art. 18", cambio: "Reformó el artículo 18. La Ley 7210 de Zonas Francas derogó después esa reforma, y SINALEVI advierte que el texto no se restituyó al estado anterior." },
  { norma: "Ley 6975", fecha: "30-11-1984", donde: "Transitorio VIII", cambio: "Ley de Presupuesto Extraordinario: adicionó el Transitorio VIII, que exonera del derecho de arrendamiento a ciertas instituciones." },
  { norma: "Ley 6990", fecha: "15-07-1985", donde: "capítulo VI", cambio: "Ley de Incentivos para el Desarrollo Turístico: su artículo 17 interpretó auténticamente la Ley 6043. Las concesiones de la zona restringida no pueden impedir el acceso del público a la zona de cincuenta metros, salvo que exista una vía destinada a ese efecto." },
  { norma: "Ley 7108", fecha: "1988", donde: "art. 76", cambio: "Ley de presupuesto: adicionó tres párrafos al artículo 76, que la Sala Constitucional anuló en el voto 5-95 del 01-02-1995, según el Sistema de Información Legislativa." },
  { norma: "Voto 5755-94", fecha: "04-10-1994", donde: "art. 64", cambio: "La Sala Constitucional anuló el artículo 64, que sancionaba la violación de «cualquiera de las prohibiciones» de la ley o su reglamento, por ser un tipo penal abierto.", href: NEXUS("ext-1-0007-265982") },
  { norma: "Voto 5756-96", fecha: "30-10-1996", donde: "art. 13", cambio: "La Sala Constitucional interpretó el artículo 13 sin anularlo: antes de ordenar la demolición en un proceso pendiente, el juez debe constatar que las obras están en la zona y se hicieron al margen de la ley.", href: NEXUS("ext-1-0007-265686") },
  { norma: "Ley 7915", fecha: "1999", donde: "art. 59", cambio: "Amplió el artículo 59, según el registro de SINALEVI." },
  { norma: "Ley 8506", fecha: "28-04-2006", donde: "art. 73 bis", cambio: "Adicionó el artículo 73 bis: las competencias municipales corresponden a los concejos municipales de distrito con territorio en la costa." },
  { norma: "Ley 9036", fecha: "11-05-2012", donde: "toda la ley", cambio: "Al transformar el IDA en el INDER, derogó «las obligaciones contempladas en la Ley Nº 6043» en relación con el Instituto de Desarrollo Agrario (art. 82)." },
  { norma: "Ley 9221", fecha: "27-03-2014", donde: "art. 6", cambio: "Reformó el artículo 6 para excluir de la ley, además, las zonas urbanas litorales (art. 25 de la Ley 9221)." },
  { norma: "Ley 9780", fecha: "19-12-2019", donde: "art. 59", cambio: "Reformó el inciso b) del artículo 59: ese 40 % también puede cubrir las unidades de guardavidas." },
  { norma: "Ley 9946", fecha: "15-02-2021", donde: "art. 76", cambio: "Adicionó un párrafo al artículo 76: reserva de cincuenta metros para la carretera panorámica de Puntarenas." },
  { norma: "Ley 9974", fecha: "09-04-2021", donde: "art. 50", cambio: "Adicionó el párrafo final del artículo 50, la prórroga anticipada. Rige desde el 23-04-2021." },
  { norma: "Ley 10236", fecha: "05-04-2022", donde: "art. 79", cambio: "Reformó el artículo 79: las zonas litorales del distrito de Caldera, en Esparza, se ordenan con un plan regulador urbano. Es la última reforma." },
];

/** Las leyes que hoy completan o condicionan la Ley 6043. */
export const LEY6043_CONEXAS: { norma: string; nombre: string; estado: string; href?: string }[] = [
  {
    norma: "Decreto Ejecutivo 7841-P",
    nombre: "Reglamento a la Ley sobre la Zona Marítimo Terrestre (16-12-1977)",
    estado: "Vigente, versión 7 de 7; última reforma por el Decreto 37882 de 2013. Regula el trámite de la concesión, el canon (art. 49), el avalúo (art. 50) y la prórroga (art. 53).",
    href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=18579&param2=93916&param3=1",
  },
  {
    norma: "Ley 9221",
    nombre: "Ley Marco para la Declaratoria de Zona Urbana Litoral (27-03-2014)",
    estado: "Vigente. La Sala Constitucional declaró sin lugar la acción contra su artículo 8 (voto 2016-000811). La Ley 10735 dio ocho años, desde el 30-07-2025, para tramitar la declaratoria.",
  },
  {
    norma: "Ley 9242",
    nombre: "Construcciones existentes en la zona restringida (06-05-2014)",
    estado: "Vigente. Su artículo 4, reformado por la Ley 10735, da a las municipalidades ocho años, desde el 30-07-2025, para aprobar el plan regulador costero; entretanto, uso a título precario que no genera derecho.",
  },
  {
    norma: "Ley 9073",
    nombre: "Moratoria de desalojos y demoliciones por 24 meses (19-09-2012)",
    estado: "Anulada en su totalidad por la Sala Constitucional (voto 2019-012746).",
  },
  {
    norma: "Ley 9373",
    nombre: "Nueva moratoria de 24 meses (28-06-2016)",
    estado: "Anulada por la Sala Constitucional (voto 2021-024147).",
  },
  {
    norma: "Ley 9577",
    nombre: "Moratoria de 36 meses, salvo daño ambiental (27-06-2018)",
    estado: "Vigente. La prolongaron la Ley 10000 (01-07-2021) y la Ley 10489 (13-05-2024), cada una «por un período de tiempo igual». La única acción localizada se rechazó de plano (voto 2023-018293).",
  },
  {
    norma: "Ley Forestal 7575",
    nombre: "Patrimonio natural del Estado (arts. 13 a 15)",
    estado: "Vigente. Los bosques y terrenos forestales estatales de la zona son patrimonio natural del Estado y los administra el SINAC (dictamen C-297-2004).",
  },
];
