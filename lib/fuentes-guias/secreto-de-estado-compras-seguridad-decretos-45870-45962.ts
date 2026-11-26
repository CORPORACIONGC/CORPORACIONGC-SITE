import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 11 (principio de legalidad), 30 (acceso a la información y secretos de Estado) y 183 (Contraloría General de la República)", href: SINALEVI(871, 147492) },
    { titulo: "Decreto Ejecutivo 45870-MSP", detalle: "Declaratoria de Secreto de Estado, 27-07-2026, Alcance N.° 104 a La Gaceta N.° 149 de 10-08-2026; arts. 2 y 3 reformados por el Decreto 45962-MSP (versión 2 de 2)", href: SINALEVI(107581, 152748) },
    { titulo: "Decreto Ejecutivo 45962-MSP", detalle: "Reforma de los arts. 2 y 3 del Decreto 45870-MSP, 09-10-2026, La Gaceta N.° 197 de 19-10-2026", href: SINALEVI(108092, 152741) },
    { titulo: "Ley General de Policía (Ley 7410)", detalle: "Arts. 11 (Consejo Nacional de Seguridad Pública), 13 (Dirección de Inteligencia y Seguridad Nacional) y 16 (documentos confidenciales y secretos de Estado)" },
    { titulo: "Ley General de Contratación Pública (Ley 9986)", detalle: "Arts. 1 (ámbito), 2 (exclusiones), 3 (excepciones), 4 (registro público de las excepciones), 8 c) (transparencia), 15 (excepción a la publicidad) y 16 (sistema digital unificado)", href: SINALEVI(94469, 152662) },
    { titulo: "Ley Orgánica de la Contraloría General de la República (Ley 7428)", detalle: "Arts. 4 (ámbito de competencia) y 13 (garantía de acceso a la información)" },
    { titulo: "Ley Marco de Acceso a la Información Pública (Ley 10554)", detalle: "Arts. 6 (límites del derecho de acceso y reserva de ley) y 14 (protección jurisdiccional)", href: SINALEVI(103157, 143061) },
    { titulo: "Ley General de la Administración Pública (Ley 6227)", detalle: "Arts. 19 (reserva de ley de los derechos constitucionales), 59 (competencia regulada por ley) y 361 (audiencia sobre proyectos de disposiciones generales)", href: SINALEVI(13231, 150737) },
    { titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)", detalle: "Arts. 75 (acción directa por intereses difusos), 81 y 82 (efectos del curso de la acción)", href: SINALEVI(38533, 127124) },
  ],
  jurisprudencia: [
    { numero: "Resolución 2026-092633", organo: SC, fecha: "17-11-2026", tema: "Decreto 45962-MSP", criterio: "Da curso a la acción contra el art. 1 del Decreto 45962-MSP (nuevos arts. 2 y 3 del Decreto 45870-MSP), exp. 26-042187-0007-CO; audiencia por quince días a la Procuraduría, la Presidencia, Seguridad Pública, la Contraloría y la Defensoría; recuerda que la acción directa por intereses difusos en principio no tiene efecto suspensivo.", href: NEXUS("sen-1-0007-1439279") },
    { numero: "Resolución 2026-092622", organo: SC, fecha: "04-09-2026", tema: "Decreto 45870-MSP", criterio: "Da curso a la acción contra el Decreto 45870-MSP, exp. 26-029106-0007-CO, y a tres acciones acumuladas; aclara que la acción no suspende la vigencia de las normas impugnadas.", href: NEXUS("sen-1-0007-1423247") },
    { numero: "Voto 2025-011951", organo: SC, fecha: "23-04-2025", tema: "Dirección de Inteligencia y Seguridad Nacional", criterio: "Declara sin lugar la acción de la Defensoría contra la regulación de la DIS e interpreta que su labor está sometida a los controles jurisdiccionales y administrativos; el art. 16 de la Ley General de Policía cumple la reserva de ley, pero la declaratoria de secreto de Estado debe motivarse y está sujeta a control.", href: NEXUS("sen-1-0007-1372797") },
    { numero: "Voto 2016-016359", organo: SC, fecha: "04-11-2016", tema: "Secreto de Estado", criterio: "El secreto de Estado está sujeto a reserva de ley e interpretación restrictiva; en relaciones exteriores la Constitución lo sostiene directamente y la Sala declaró sin lugar el amparo por la reserva de informes diplomáticos. Razones diferentes del magistrado Rueda Leal sobre el control de los actos políticos.", href: NEXUS("sen-1-0007-687093") },
  ],
  procuraduria: [
    { titulo: "Informe en la acción 26-029106-0007-CO", detalle: "05-10-2026, sobre el texto original del Decreto 45870-MSP: puede tener sustento constitucional si se limita a estrategias e inteligencia en seguridad, pero la restricción absoluta sobre presupuesto, gastos y contratación rebasa los límites constitucionales", href: "https://sinalevi.go.cr/ResultadosAsuntos/Informacion?param1=14592&param2=1&param3=1" },
  ],
  otros: [
    {
      titulo: "Otra jurisprudencia citada",
      items: [
        { titulo: "Voto 2003-00136", detalle: "Sala Constitucional: omisión legislativa de una ley de secretos de Estado e interpretación restrictiva del secreto; citado según los pasajes que reproducen los votos 2016-016359 y 2025-011951" },
      ],
    },
    {
      titulo: "Trámite de las acciones",
      items: [
        { titulo: "Boletín Judicial N.° 175, 16-09-2026", detalle: "Aviso de la acción 26-029106-0007-CO contra el Decreto 45870-MSP" },
      ],
    },
  ],
  pie: "Redactada el 25-11-2026. Resoluciones de curso de los expedientes 26-029106-0007-CO y 26-042187-0007-CO y votos 2016-016359 y 2025-011951 leídos íntegros en Nexus; a esa fecha Nexus no registraba sentencia en ninguno de los dos expedientes. Textos de los Decretos 45870-MSP (versión vigente) y 45962-MSP tomados de SINALEVI; el texto original del art. 2 del Decreto 45870-MSP, del informe de la Procuraduría. Artículos de la Constitución y de las Leyes 6227, 7135, 7410, 7428, 9986 y 10554 cotejados con sus textos vigentes.",
};
