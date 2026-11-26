import { type FuentesDeGuia, NEXUS } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 62 (fuerza de ley de las convenciones colectivas) y 63 (indemnización por despido sin justa causa)",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)",
      detalle: "Arts. 75 (legitimación directa), 81 y 82 (audiencia, aviso y efectos de la interposición), 83 (coadyuvancia) y 91 (efectos y dimensionamiento de la sentencia)",
      href: SINALEVI(38533, 127124),
    },
    {
      titulo: "Código de Trabajo (Ley 2)",
      detalle: "Art. 29 (auxilio de cesantía: causas y tope de ocho años)",
      href: SINALEVI(8045, 150791),
    },
    {
      titulo: "Ley de Salarios de la Administración Pública (Ley 2166)",
      detalle: "Art. 39 (cesantía con tope de ocho años, adicionado por la Ley 9635), con la nota de la interpretación del voto 2025-008201",
      href: SINALEVI(3672, 147114),
    },
    {
      titulo: "Ley Marco de Empleo Público (Ley 10159)",
      detalle: "Arts. 44 (verificación previa a la homologación de convenciones), 45 (validez de las convenciones) y transitorio XV (denuncia y renegociación)",
      href: SINALEVI(96521, 145804),
    },
  ],
  jurisprudencia: [
    { numero: "Resolución 2026-092630", organo: SC, fecha: "04-11-2026", tema: "Curso de la acción contra la convención de Desamparados", criterio: "Da curso a la acción de la Contraloría contra los arts. 41, 49 y 103 (cesantía por renuncia) de la convención colectiva de la Municipalidad de Desamparados (exp. 26-039508-0007-CO), confiere audiencia a la Procuraduría, al alcalde y al sindicato, y aclara que la acción no suspende la vigencia de las normas ni ningún procedimiento o proceso.", href: NEXUS("sen-1-0007-1438447") },
    { numero: "Voto 2021-026520", organo: SC, fecha: "24-11-2021", tema: "Convención de Desamparados", criterio: "Anula varias cláusulas de la misma convención y declara inconstitucional, en los arts. 103 y 105, el pago de cesantía por encima de doce años. Efectos retroactivos, sin perjuicio de derechos adquiridos de buena fe.", href: NEXUS("sen-1-0007-1161589") },
    { numero: "Voto 2025-039346", organo: SC, fecha: "26-11-2025", tema: "Convención de Paraíso (acción de la Contraloría)", criterio: "Anula la cesantía por renuncia y por encima de doce años, ayudas y becas para familiares y la ayuda por pérdida de vivienda; dimensiona por el art. 91: no se afecta el beneficio ya recibido.", href: NEXUS("sen-1-0007-1367045") },
    { numero: "Voto 2025-008201", organo: SC, fecha: "17-03-2025", tema: "Negociación colectiva y Ley 9635", criterio: "Las restricciones de los arts. 39, 50, 54 y 55 de la Ley de Salarios no se aplican a quienes válidamente pueden negociar convenciones colectivas, sin perjuicio del control de legalidad y constitucionalidad sobre el resultado de la negociación.", href: NEXUS("sen-1-0007-1316484") },
    { numero: "Voto 2024-037678", organo: SC, fecha: "18-12-2024", tema: "Convención de Garabito (acción de la Contraloría)", criterio: "Anula la cesantía por renuncia y por encima de doce años y los gastos de entierro de familiares; fija el tope convencional en el 50 % sobre el máximo legal y dimensiona por el art. 91.", href: NEXUS("sen-1-0007-1277187") },
    { numero: "Voto 2024-018683", organo: SC, fecha: "03-07-2024", tema: "Convención de Vásquez de Coronado", criterio: "A solicitud del alcalde, anula el art. 30, sobre cesantía por renuncia.", href: NEXUS("sen-1-0007-1239333") },
    { numero: "Voto 2024-017869", organo: SC, fecha: "26-06-2024", tema: "Convención de Turrialba (acción de la Contraloría)", criterio: "Anula, entre otras, la colaboración voluntaria de la Municipalidad a los perjudicados por un evento; mantiene otros artículos impugnados.", href: NEXUS("sen-1-0007-1243387") },
    { numero: "Voto 2023-031748", organo: SC, fecha: "06-12-2023", tema: "Convención de Limón", criterio: "Anula la cesantía por renuncia, el límite de veinte años, las becas para los hijos y otros beneficios; no afecta el beneficio ya recibido.", href: NEXUS("sen-1-0007-1228141") },
    { numero: "Voto 2023-017097", organo: SC, fecha: "12-07-2023", tema: "Convención de Matina", criterio: "Anula la cesantía por renuncia y los topes de veinte años, con dimensionamiento por el art. 91.", href: NEXUS("sen-1-0007-1180689") },
    { numero: "Voto 2023-012087", organo: SC, fecha: "24-05-2023", tema: "Convención de Escazú", criterio: "Anula la cesantía por renuncia y sin tope; dimensiona por el art. 91.", href: NEXUS("sen-1-0007-1260734") },
    { numero: "Voto 2023-001055", organo: SC, fecha: "18-01-2023", tema: "Estatuto de Personal del ICE", criterio: "Anula la cesantía por renuncia e interpreta que el tope no puede exceder doce años.", href: NEXUS("sen-1-0007-1170742") },
    { numero: "Voto 2022-016287", organo: SC, fecha: "13-07-2022", tema: "Convención de Cartago", criterio: "Anula las becas para los hijos, la cesantía por renuncia y otros beneficios; las becas vigentes se mantienen hasta su vencimiento.", href: NEXUS("sen-1-0007-1178343") },
    { numero: "Voto 2021-015419", organo: SC, fecha: "07-07-2021", tema: "Convención de Puntarenas", criterio: "Anula la compensación por renuncia y reduce a doce años el tope de veinte.", href: NEXUS("sen-1-0007-1039739") },
    { numero: "Voto 2019-021859", organo: SC, fecha: "06-11-2019", tema: "Convención de Moravia", criterio: "Anula la cesantía sin tope y por renuncia, los útiles escolares y las becas para los hijos y una partida para actividades.", href: NEXUS("sen-1-0007-1008965") },
    { numero: "Voto 2018-007690", organo: SC, fecha: "15-05-2018", tema: "Convención del SINART", criterio: "Anula el pago de preaviso y cesantía por renuncia.", href: NEXUS("sen-1-0007-746088") },
    { numero: "Voto 2014-005798", organo: SC, fecha: "30-04-2014", tema: "Convención de Santa Ana", criterio: "Anula el pago de preaviso y cesantía por renuncia y la cesantía «sin límite de años».", href: NEXUS("sen-1-0007-614509") },
  ],
  otros: [
    {
      titulo: "Prensa sobre el trámite",
      items: [
        {
          titulo: "«Contraloría impugna tres beneficios de la convención colectiva de la Municipalidad de Desamparados»",
          detalle: "Delfino.cr, 17-11-2026",
          href: "https://delfino.cr/2026/11/contraloria-impugna-tres-beneficios-de-la-convencion-colectiva-de-la-municipalidad-de-desamparados",
        },
        {
          titulo: "«Procuraduría pide anular beneficios de convención colectiva de Desamparados por uso indebido de fondos públicos»",
          detalle: "Delfino.cr, 23-11-2026: resumen del informe de la Procuraduría del 19-11-2026",
          href: "https://delfino.cr/2026/11/procuraduria-pide-anular-beneficios-de-convencion-colectiva-de-desamparados-por-uso-indebido-de-fondos-publicos",
        },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Votos de la Sala Constitucional cotejados en su texto íntegro y enlazados a Nexus PJ; los votos que aparecen sin enlace en las figuras se leyeron en su texto íntegro en las bases de la firma, salvo el de Talamanca, del que solo se dispuso del resumen oficial. Estado de la acción al 26 de noviembre de 2026.",
};
