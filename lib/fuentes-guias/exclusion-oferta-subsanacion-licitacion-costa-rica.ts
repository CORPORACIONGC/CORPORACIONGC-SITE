import { NEXUS, type FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle:
        "Versión 15 de SINALEVI, con la reforma de la Ley 10971; arts. 8 e), 14 c) y f), 29, 50, 63 l), 86, 87, 97, 98, 99 y 119 r) y párrafo final",
      href: SINALEVI(94469, 152662),
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle:
        "Arts. 106, 122, 134, 135, 246, 262 y 270, texto vigente con la reforma del Decreto 45782; el texto anterior del art. 134 se cita según su transcripción en la resolución R-DCP-SICOP-01070-2024",
      href: SINALEVI(98344, 151216),
    },
    {
      titulo: "Decreto Ejecutivo 45782-H-MIDEPLAN-MICITT",
      detalle:
        "De 08-04-2026, Alcance 62 a La Gaceta 95 del 26-05-2026; reforma los arts. 134 y 135 a) y g) del Reglamento (considerandos 21 y 22); rige desde su publicación",
      href: SINALEVI(107160, 151215),
    },
    {
      titulo: "Ley de Responsabilidad Laboral de los Contratistas con el Estado (Ley 10971)",
      detalle:
        "De 16-09-2026, vigente desde el 08-10-2026; reforma los arts. 14 f) y 119 de la Ley 9986 y agrega el inciso r) a las causales que generan la exclusión de la oferta",
      href: SINALEVI(108035, 152661),
    },
    {
      titulo: "Ley Constitutiva de la Caja Costarricense de Seguro Social (Ley 17)",
      detalle: "Art. 74, inciso 3: estar inscrito y al día para participar en procesos de contratación",
      href: SINALEVI(2340, 127333),
    },
  ],
  jurisprudencia: [
    {
      numero: "Resolución 000796-F-S1-2023",
      organo: "Sala Primera",
      fecha: "31-05-2023",
      tema: "Estar al día con el Fodesaf",
      criterio:
        "Con la ley anterior, la exigencia de estar al día con el Fodesaf «para participar» es un requisito formal subsanable, necesario solo para adjudicar, que el oferente corrige pagando o a pedido de la Administración.",
      href: NEXUS("sen-1-0004-1167150"),
    },
    {
      numero: "Sentencia 2026-003467",
      organo: "Tribunal Contencioso Administrativo",
      fecha: "28-05-2026",
      tema: "Subsanación de un hecho histórico",
      criterio:
        "Con la Ley de Contratación Administrativa, declara sin lugar la demanda contra la subsanación de una certificación notarial vencida: acreditar una condición preexistente a la apertura no da ventaja indebida.",
      href: NEXUS("sen-1-0034-1402203"),
    },
  ],
  contraloria: [
    {
      numero: "R-DCP-SICOP-01070-2024",
      organo: DCP,
      fecha: "19-07-2024",
      tema: "Texto anterior del art. 134 y nuevo requerimiento",
      criterio:
        "Transcribe el art. 134 anterior (plazo de 3 a 10 días hábiles para el oferente); admite excepcionalmente un nuevo requerimiento sobre aspectos no considerados en la primera prevención y niega la subsanación en el recurso de lo ya prevenido.",
      href: CGR(2024, "2024014196"),
    },
    {
      numero: "R-DCP-SICOP-00989-2026",
      organo: DCP,
      fecha: "08-06-2026",
      tema: "Caducidad y trascendencia",
      criterio:
        "La prevención no atendida hace caducar la subsanación, pero la exclusión exige que la Administración razone la trascendencia del incumplimiento; corregir una referencia que ya constaba en la oferta no da ventaja indebida.",
      href: CGR(2026, "2026008889"),
    },
    {
      numero: "R-DCP-SICOP-01299-2026",
      organo: DCP,
      fecha: "22-07-2026",
      tema: "Desglose del precio sin trazabilidad",
      criterio:
        "El desglose del precio aportado por subsanación debe ser trazable con la oferta; sin trazabilidad da ventaja indebida y, por tocar el precio, descalifica la oferta. Anula la adjudicación.",
      href: CGR(2026, "2026011865"),
    },
    {
      numero: "R-DCP-SICOP-01334-2026",
      organo: DCP,
      fecha: "05-08-2026",
      tema: "Hecho preexistente y segunda prevención",
      criterio:
        "La subsanación procede sobre documentos que prueban hechos anteriores a la apertura; la segunda prevención versa sobre lo no considerado en la primera o derivado de ella, y el vicio solo excluye si es trascendente.",
      href: CGR(2026, "2026012228"),
    },
    {
      numero: "R-DCP-SICOP-01587-2026",
      organo: DCP,
      fecha: "04-09-2026",
      tema: "Factores de evaluación",
      criterio:
        "Los documentos que solo dan puntaje no se previenen; aportarlos de oficio una vez conocida la evaluación y sin trazabilidad anterior a la apertura es una ventaja indebida.",
      href: CGR(2026, "2026014875"),
    },
    {
      numero: "R-DCP-SICOP-01853-2026",
      organo: DCP,
      fecha: "14-10-2026",
      tema: "Morosidad con la CCSS",
      criterio:
        "La morosidad en la apertura es subsanable; la exclusión procede solo si el oferente no atiende la prevención. Declara con lugar la apelación y anula el acto final.",
      href: CGR(2026, "2026017415"),
    },
    {
      numero: "R-DCP-SICOP-01872-2026",
      organo: DCP,
      fecha: "15-10-2026",
      tema: "Rebatir cada motivo de exclusión",
      criterio:
        "Rechaza de plano la apelación de un oferente excluido por dos incumplimientos que solo discutió uno de ellos: sin rebatir el otro no demuestra la elegibilidad de su oferta.",
      href: CGR(2026, "2026017515"),
    },
    {
      numero: "R-DCP-SICOP-01878-2026",
      organo: DCP,
      fecha: "15-10-2026",
      tema: "Caducidad en la fase recursiva",
      criterio:
        "Lo prevenido y no subsanado en plazo no puede corregirse con una aclaración posterior ni con el recurso, porque daría una ventaja indebida.",
      href: CGR(2026, "2026018231"),
    },
    {
      numero: "R-DCP-SICOP-01994-2026",
      organo: DCP,
      fecha: "02-11-2026",
      tema: "Segunda subsanación y vigencia de la reforma",
      criterio:
        "La reforma del art. 134 rige solo para concursos con decisión inicial posterior al 26-05-2026; la segunda subsanación es facultativa y el oferente no tiene derecho a exigirla; en el recurso cabe prueba técnica sobre lo no prevenido, con límites.",
      href: CGR(2026, "2026019158"),
    },
  ],
  pie: "Textos de la Ley 9986, de su Reglamento, del Decreto 45782 y de las leyes 10971 y 17 cotejados con la versión vigente del SINALEVI. Resoluciones de la Contraloría en su repositorio de documentos, con la fecha de la resolución en SICOP; sentencias en Nexus del Poder Judicial. Corte: 24 de noviembre de 2026.",
};
