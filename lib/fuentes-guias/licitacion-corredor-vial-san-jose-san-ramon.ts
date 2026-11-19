import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GLOBALEX = (id: number) => `https://www.globalexweb.com/new/controller/juris_controller.php?function=getContent&idFile=${id}`;
const ALCANCE_37 = "https://www.imprentanacional.go.cr/pub/2026/04/15/ALCA37_15_04_2026.pdf";
const PORTAL = "https://portal.conavi.go.cr/licitaciones/carteles";
const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";
const CGR = "Contraloría General de la República";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Ley 10899, aprobación de los contratos de préstamo con el BCIE y el Fondo OPEP para el corredor vial San José–San Ramón", detalle: "09-04-2026, Alcance 37 a La Gaceta 68 del 15-04-2026: arts. 3 a 18, en especial 7 (régimen de adquisiciones del BCIE y portal de transparencia), 11 (expropiaciones), 13 (exenciones) y 18 (evaluación); contrato 2341 (secciones 9.10, 9.13, 14.01 y anexos E, F y H) y contrato 16603P (CG 7.03)", href: SINALEVI(106786, 150600) },
    { titulo: "Publicación oficial de la Ley 10899 con los contratos de préstamo", detalle: "Alcance 37 a La Gaceta 68, 15-04-2026", href: ALCANCE_37 },
    { titulo: "Ley General de Contratación Pública (Ley 9986)", detalle: "Arts. 2 c) (exclusión de los empréstitos), 3 a), 8, 92 (régimen recursivo con normativa de sujetos de derecho público internacional), 95 a 98 (objeción y apelación) y 118", href: SINALEVI(94469, 152662) },
    { titulo: "Ley 9292, Desarrollo de obra pública Corredor Vial San José–San Ramón y sus radiales mediante fideicomiso", detalle: "23-02-2015", href: SINALEVI(79249, 100148) },
    { titulo: "Código de Comercio (Ley 3284)", detalle: "Arts. 226, 232 y 233 (sucursales y apoderados de empresas extranjeras)", href: SINALEVI(6239, 151293) },
    { titulo: "Ley Orgánica del Colegio Federado de Ingenieros y de Arquitectos (Ley 3663)", detalle: "Arts. 5 g), 12, 13, 52 y 54 d)", href: SINALEVI(12689, 148453) },
    { titulo: "Reglamento de Empresas del CFIA", detalle: "14-01-2020: arts. 3, 4, 6, 8 (inscripción temporal para licitar) y 9", href: SINALEVI(90458, 119175) },
    { titulo: "Ley Constitutiva de la Caja Costarricense de Seguro Social", detalle: "Art. 74 (estar al día para contratar con quien administra fondos públicos)", href: SINALEVI(2340, 127333) },
  ],
  jurisprudencia: [
    { numero: "Voto 1027-90", organo: SC, fecha: "29-08-1990", tema: "Préstamos y ley nacional", criterio: "Un contrato de préstamo aprobado por ley puede excepcionar normas nacionales en su materia; las normas de licitación del banco rigen primero y la ley nacional es supletoria, con el límite de las normas de orden público.", href: GLOBALEX(46412) },
    { numero: "Sentencia 627-2018", organo: TCA, fecha: "05-11-2018", tema: "Revisión judicial", criterio: "La adjudicación de una licitación financiada por el BID y la resolución de la Contraloría que la confirmó pueden impugnarse en la vía contencioso-administrativa; deniega la medida cautelar por el interés público de la obra.", href: NEXUS("sen-1-0034-898111") },
    { numero: "Resolución 441-2024", organo: TCA, fecha: "24-01-2024", tema: "Fondos públicos", criterio: "En un programa del AyA financiado por el BCIE y ejecutado con UNOPS, el juez contencioso es competente porque se comprometen fondos públicos.", href: GLOBALEX(1144196) },
  ],
  contraloria: [
    { numero: "R-DCP-00030-2024", organo: CGR, fecha: "27-06-2024", tema: "Régimen recursivo", criterio: "Criterio de la Contraloría sobre el régimen recursivo de las licitaciones financiadas con préstamos de organismos internacionales.", href: GLOBALEX(1151605) },
    { numero: "R-DCA-0058-2019", organo: CGR, fecha: "21-01-2019", tema: "Fideicomiso del corredor", criterio: "Pese al reglamento propio del fideicomiso San José–San Ramón, la Contraloría se declara competente para conocer las objeciones contra la precalificación de las obras impostergables, por el principio de control.", href: GLOBALEX(823653) },
    { numero: "R-DCA-0813-2019", organo: CGR, fecha: "21-08-2019", tema: "Barranca–Limonal (BID)", criterio: "La Ley 9283 asignó a la Contraloría las objeciones y apelaciones de la licitación PIT-115 del BID para la Ruta 1, sección Barranca–Limonal, con plazos de licitación abreviada.", href: GLOBALEX(839041) },
  ],
  procuraduria: [
    { titulo: "Dictamen C-150-1993", detalle: "08-11-1993: las exoneraciones de una ley de préstamo evitan que sus recursos se destinen a tributos", href: PGR(1083) },
    { titulo: "Dictamen C-034-2006", detalle: "03-02-2006: la exención a contratistas del préstamo BCIE 1605 es objetiva y alcanza lo que se financia con el préstamo y se incorpora a la obra", href: PGR(13637) },
    { titulo: "Opinión legal PGR-OL-002-2026", detalle: "25-05-2026: contrato de préstamo BCIE 2341; la Ley 10899 rige desde el 15-04-2026", href: PGR(25406) },
  ],
  otros: [
    {
      titulo: "Procedimiento CRI-2026-2341-34907-O",
      items: [
        { titulo: "CONAVI, Solicitud de Ofertas, versión 1.0", detalle: "21-10-2026, 694 págs.: IAO 5, 6, 8, 41, 47 a 50; DDL 2.1, 5, 8, 11, 12, 15 a 17, 20 a 25, 35, 36, 42, 44, 48, 50 a 52; CPC 6, 8.1, 33, 41 y 61.2", href: PORTAL },
        { titulo: "Comunicado de No Objeción del BCIE GERCR-PSD0221-2026", detalle: "12-10-2026", href: PORTAL },
        { titulo: "CONAVI, aviso sobre el Data Room", detalle: "Acceso «temporalmente limitado» al 19-11-2026", href: PORTAL },
        { titulo: "SICOP: licitaciones 2025LY-000001-0006000001 (Barranca–Limonal), 2019PR-000001-0021200244 y 2018PP-000002-0021200244 (fideicomiso)", detalle: "Aperturas, recomendaciones y actos finales consultados el 19-11-2026", href: "https://www.sicop.go.cr" },
      ],
    },
  ],
  pie: "Normas cotejadas con SINALEVI y La Gaceta el 19-11-2026; resoluciones de la Contraloría y votos leídos en su texto íntegro; pliego y documentos del procedimiento descargados del portal de licitaciones de CONAVI el 19-11-2026; políticas del BCIE (DI-52/2020, PRE-18/2024, DI-15/2025 y PRE-35/2025) consultadas en copia archivada del sitio de adquisiciones del Banco, que no respondía en esa fecha.",
};
