import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GLOBALEX = (id: number) => `https://www.globalexweb.com/new/controller/juris_controller.php?function=getContent&idFile=${id}`;
const ALCANCE_37 = "https://www.imprentanacional.go.cr/pub/2026/04/15/ALCA37_15_04_2026.pdf";
const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";
const TA = "Tribunal de Apelación de lo Contencioso Administrativo y Civil de Hacienda";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Art. 45", href: SINALEVI(871, 147492) },
    { titulo: "Ley de Expropiaciones (Ley 7495)", detalle: "Arts. 3, 4, 7, 11, 16 a 18, 20 a 30, 32, 33, 35, 38, 39, 41, 45, 49, 57 y 61; texto reformado por las leyes 9286 (2014) y 9462 (2017)", href: SINALEVI(24321, 119048) },
    { titulo: "Ley 10899, aprobación de los contratos de préstamo con el BCIE y el Fondo OPEP para el corredor vial San José–San Ramón", detalle: "Arts. 6, 9, 11 y 17; contrato de préstamo 2341 con el BCIE, secciones 9.03 y 9.09 y condiciones especiales (no pagar expropiaciones con el préstamo)", href: SINALEVI(106786, 150600) },
    { titulo: "Publicación oficial de la Ley 10899 con los contratos de préstamo", detalle: "Alcance 37 a La Gaceta 68, 15-04-2026", href: ALCANCE_37 },
  ],
  jurisprudencia: [
    { numero: "Voto 2026-020297", organo: SC, fecha: "05-06-2026", tema: "Corredor San José–San Ramón", criterio: "Declara sin lugar un amparo contra una expropiación del MOPT en Naranjo para el corredor: la procedencia de la expropiación total o parcial, la declaratoria, la anotación registral y el precio se discuten en sede administrativa o en la jurisdicción ordinaria.", href: NEXUS("sen-1-0007-1400412") },
    { numero: "Voto 437-2010", organo: `${TCA}, Sección I`, fecha: "17-08-2010", tema: "Plusvalía del proyecto", criterio: "En una expropiación para el corredor San José–San Ramón, resta mérito al peritaje que consideró la oferta y la demanda generadas por el propio proyecto vial.", href: GLOBALEX(408985) },
    { numero: "Voto 2018-013705", organo: SC, fecha: "23-08-2018", tema: "Reforma de 2014", criterio: "Declara inconstitucional, por falta de consulta a la Corte, la reforma de la Ley 9286 a los arts. 40 a 43 de la Ley de Expropiaciones y devuelve su vigencia al texto que les dio el Código Procesal Contencioso-Administrativo.", href: GLOBALEX(1033530) },
    { numero: "Voto 2021-027046", organo: SC, fecha: "01-12-2021", tema: "Desalojo y posesión", criterio: "Declara sin lugar la acción contra los arts. 30 y 32: los plazos de desalojo y la entrada en posesión tras el depósito son razonables.", href: NEXUS("sen-1-0007-1062912") },
    { numero: "Voto 61-2014", organo: TA, fecha: "12-02-2014", tema: "Daño al remanente", criterio: "Anula la sentencia porque ni el avalúo ni el peritaje fundamentaron la inexistencia de daño al remanente; ordena determinar si el resto es un sobrante inadecuado del art. 17.", href: NEXUS("sen-1-0034-623668") },
    { numero: "Voto 133-2014", organo: TA, fecha: "27-03-2014", tema: "Intereses", criterio: "Condena a intereses a la tasa legal desde la desposesión y hasta el pago, sobre la diferencia entre el depósito y el justiprecio.", href: NEXUS("sen-1-0034-623621") },
  ],
  otros: [
    {
      titulo: "BCIE",
      items: [
        { titulo: "Guías de Aplicación de las Normas de Desempeño Ambiental y Social – ND 5: Adquisición de tierras y reasentamiento involuntario", detalle: "Versión 1.0, Oficina de Sostenibilidad Ambiental y Social: objetivos, ámbito (incluida la expropiación), categorías de personas afectadas, costo de reposición y mecanismo de quejas", href: "https://www.bcie.org/api/documents/30364/Gu%C3%ADas%20de%20Aplicaci%C3%B3n%20de%20las%20Norma%20de%20Desempe%C3%B1o%20Ambiental%20y%20Social%20%20%20ND5.pdf" },
      ],
    },
    {
      titulo: "Cifras de predios y presupuesto",
      items: [
        { titulo: "La Nación, «Conavi busca empresa para agilizar más de 500 expropiaciones pendientes en vía a San Ramón»", detalle: "29-06-2025: 503 predios por tramo, según la licitación 2025LY-000013-0006000001 de CONAVI", href: "https://www.nacion.com/el-pais/conavi-busca-empresa-para-agilizar-mas-de-500/VAJN4I3KVRCRBGFKKQKZXIRHLM/story/" },
        { titulo: "CRHoy, «MOPT promete acabar expropiaciones de ruta a San Ramón en 6 años con presupuesto propio; diputados dudan de plan»", detalle: "23-02-2026: 503 expropiaciones según el Mideplán, US$113 millones y compromisos presupuestarios del MOPT", href: "https://crhoy.com/nacionales/mopt-promete-acabar-expropiaciones-de-ruta-a-san-ramon-en-6-anos-con-presupuesto-propio-diputados-dudan-de-plan/" },
        { titulo: "CONAVI, Solicitud de Ofertas CRI-2026-2341-34907-O", detalle: "21-10-2026: derecho de vía disponible, terreno adicional por excepción y custodia del derecho de vía a cargo del contratista", href: "https://portal.conavi.go.cr/licitaciones/carteles" },
      ],
    },
  ],
  pie: "Ley de Expropiaciones cotejada con el texto de SINALEVI (versión 6 de 6); Ley 10899 y contratos de préstamo leídos en el Alcance 37 a La Gaceta 68; votos leídos en su texto íntegro en las bases de Nexus y Globalex; guía de la ND 5 descargada del sitio del BCIE el 19-11-2026. Las cifras de predios y presupuesto son las informadas por CONAVI y el Mideplán según la prensa citada.",
};
