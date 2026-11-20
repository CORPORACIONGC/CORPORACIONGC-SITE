import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GLOBALEX = (id: number) => `https://www.globalexweb.com/new/controller/juris_controller.php?function=getContent&idFile=${id}`;
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 85 (FEES), 121 inciso 11, 124, 167 (consulta a la Corte), 176, 177, 178 (plazo del presupuesto), 179 y 180", href: SINALEVI(871, 147492) },
    { titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)", detalle: "Arts. 96 a 101 (consulta legislativa de constitucionalidad)", href: SINALEVI(38533, 127124) },
    { titulo: "Reglamento de la Asamblea Legislativa", detalle: "Arts. 146 (trámite de la opinión consultiva), 204 y 205 (trámite del presupuesto ordinario)", href: SINALEVI(46479, 145323) },
  ],
  jurisprudencia: [
    { numero: "Voto 2025-000380", organo: SC, fecha: "07-01-2025", tema: "Presupuesto 2025", criterio: "Consulta de la Defensoría resuelta después de aprobada la ley: el presupuesto 2025 era inconstitucional por omisión al no asignar el 8 % del PIB a la educación. El expediente legislativo llegó a la Sala el 22 de noviembre de 2024 y el plazo se corrió por el receso de fin de año.", href: NEXUS("sen-1-0007-1277162") },
    { numero: "Voto 2025-000470", organo: SC, fecha: "08-01-2025", tema: "Presupuesto 2025", criterio: "La opinión en una consulta facultativa versa solo sobre lo consultado y no avala el resto del proyecto; para lo no consultado queda la acción de inconstitucionalidad.", href: NEXUS("sen-1-0007-1282692") },
    { numero: "Voto 2024-001729", organo: SC, fecha: "24-01-2024", tema: "Artículo 167", criterio: "Por unanimidad, declara inconstitucional el art. 7 inciso 12 de la Ley de Presupuesto 2021 (Ley 9926) en cuanto restringía las plazas vacantes del Poder Judicial, por omitirse la consulta a la Corte; aclara que no todo cambio en el presupuesto debe consultarse.", href: GLOBALEX(1140521) },
    { numero: "Voto 2024-035952", organo: SC, fecha: "29-11-2024", tema: "Artículo 167", criterio: "Descarta que un proyecto requiriera la consulta a la Corte; la nota de dos magistrados recuerda que la Sala ha estado dividida sobre el alcance de «organización o funcionamiento» del Poder Judicial.", href: NEXUS("sen-1-0007-1282577") },
    { numero: "Voto 2019-024746", organo: SC, fecha: "12-12-2019", tema: "Presupuesto 2020", criterio: "Consulta evacuada con la ley ya aprobada: el presupuesto 2020 era inconstitucional por no respetar el porcentaje para la educación pública y los fondos del PANI.", href: GLOBALEX(848197) },
    { numero: "Voto 2016-018351", organo: SC, fecha: "14-12-2016", tema: "Presupuesto 2017", criterio: "Declara inconstitucionales, por atípicas, normas de ejecución del presupuesto 2017 y la reducción de fondos legalmente asignados al PANI.", href: GLOBALEX(744073) },
    { numero: "Voto 2015-001240", organo: SC, fecha: "28-01-2015", tema: "Presupuesto 2015", criterio: "La consulta no impide la aprobación definitiva, la sanción ni la publicación del presupuesto; si la ley ya está vigente, los vicios de procedimiento que se constaten no afectan su vigencia. Recoge que la Constituyente descartó prorrogar el presupuesto anterior.", href: GLOBALEX(620029) },
    { numero: "Voto 2006-014895", organo: SC, fecha: "10-10-2006", tema: "Presupuesto 2007", criterio: "La consulta sobre el presupuesto puede presentarse antes del primer debate, pero no antes de que el proyecto esté dictaminado.", href: GLOBALEX(194756) },
    { numero: "Voto 2005-006854", organo: SC, fecha: "01-06-2005", tema: "Normas atípicas", criterio: "Reitera que la ley de presupuesto no puede contener normas de carácter general ajenas a la materia presupuestaria.", href: GLOBALEX(171463) },
    { numero: "Voto 1989-000121", organo: SC, fecha: "23-11-1989", tema: "Presupuesto 1990", criterio: "La ley de presupuesto es formal y material pero especial; bajo la potestad presupuestaria la Asamblea no puede regular materias de otra naturaleza. Base de la doctrina de las normas atípicas.", href: GLOBALEX(45368) },
  ],
  otros: [
    {
      titulo: "Antecedentes y doctrina",
      items: [
        { titulo: "Asamblea Nacional Constituyente de 1949, acta n.º 163", detalle: "Sesión del 7 de octubre de 1949: se desechan la moción Social Demócrata, la del diputado Arroyo y la segunda parte de la del diputado Chacón Jinesta, y se aprueba el texto del actual art. 178" },
        { titulo: "Eduardo Sancho G., «La consulta en la jurisdicción constitucional»", detalle: "Revista Judicial n.º 52, diciembre de 1990: el proyecto con plazo se vota sin el criterio de la Sala para que la competencia no se extinga por el tiempo" },
      ],
    },
    {
      titulo: "Asamblea Legislativa",
      items: [
        { titulo: "Expediente 25.754, Ley de Presupuesto Ordinario y Extraordinario de la República para el Ejercicio Económico 2027", detalle: "Ficha de trámite en el Sistema de Información Legislativa", href: "https://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/SitePages/ConsultaProyectos.aspx" },
      ],
    },
    {
      titulo: "Prensa consultada para los hechos de noviembre de 2026",
      items: [
        { titulo: "CRHoy, «¿Qué está pasando con el Presupuesto Nacional para 2027?»", detalle: "10-11-2026: consultas, medidas cautelares y trámite del expediente", href: "https://crhoy.com/nacionales/que-esta-pasando-con-el-presupuesto-nacional-para-2027/" },
        { titulo: "Surcos Digital, las cuatro normas cuestionadas por la Corte", detalle: "Contenido de la consulta y número del expediente de la Sala", href: "https://surcosdigital.com/presupuesto-2027-las-cuatro-normas-que-segun-la-corte-pondrian-al-poder-judicial-bajo-control-politico-legislativo" },
        { titulo: "Infobae, posición del Poder Ejecutivo", detalle: "19-11-2026: la presidenta de la República espera la resolución de la Sala", href: "https://www.infobae.com/costa-rica/2026/11/20/presidenta-de-costa-rica-defiende-restricciones-sobre-usd-67-millones-del-poder-judicial-y-descarta-negociar-por-buena-voluntad/" },
      ],
    },
  ],
  pie: "Normas cotejadas el 19-11-2026 con la base local de normativa (textos de SINALEVI): Constitución, Ley 7135 y Reglamento de la Asamblea con su numeración posterior a la reforma de 2019. Votos de la Sala leídos íntegros en Nexus y Globalex; acta 163 de la Constituyente y artículo de Sancho leídos en las bases locales de antecedentes y doctrina. Los hechos de octubre y noviembre de 2026 provienen del SIL y de la prensa citada; las resoluciones del 9 de noviembre no estaban publicadas en Nexus a esa fecha.",
};
