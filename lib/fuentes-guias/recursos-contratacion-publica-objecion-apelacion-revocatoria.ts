import { NEXUS, type FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const TCA = "Tribunal Contencioso Administrativo";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

const LGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1";
const RLGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle:
        "Arts. 2 (exclusiones), 63.l y 63.n (licitación reducida), 86 a 94 (disposiciones generales y multas), 95 y 96 (objeción), 97 y 98 (apelación), 99 (revocatoria) y 100 (perfeccionamiento). Texto vigente, versión 15 del SINALEVI, con reformas hasta la Ley 10971 de 2026",
      href: LGCP,
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle:
        "Arts. 241 a 252 (disposiciones generales), 253 a 258 (objeción), 259 a 269 (apelación) y 270 y 271 (revocatoria). Texto vigente con la reforma del Decreto 45782, que no modificó estos artículos",
      href: RLGCP,
    },
    {
      titulo: "Ley 10862, reforma de la Ley General de Contratación Pública",
      detalle: "05-03-2026: agrega exclusiones (art. 2.k) y excepciones (art. 3.k) para universidades públicas y el Conare",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=106817&param2=150656&param3=1",
    },
    {
      titulo: "Decreto Ejecutivo 45782-H-MIDEPLAN-MICITT",
      detalle: "Reforma de 31 artículos del Reglamento, publicada el 26-05-2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107160&param2=151215&param3=1",
    },
  ],
  jurisprudencia: [
    {
      numero: "Resolución 5104-2024",
      organo: TCA,
      fecha: "08-08-2024",
      tema: "Régimen recursivo especial",
      criterio:
        "Como jerarca impropio municipal, rechaza el veto contra un acuerdo que acogió un recurso extraordinario de revisión contra una adjudicación: la contratación pública tiene su propio régimen recursivo y queda fuera de esa competencia.",
      href: NEXUS("sen-1-0034-1256763"),
    },
  ],
  contraloria: [
    {
      numero: "R-DCP-SICOP-01041-2025",
      organo: DCP,
      fecha: "11-06-2025",
      tema: "Multa por temeridad",
      criterio: "Deniega la multa del art. 93 porque el adjudicatario no acreditó la temeridad, la mala fe ni el abuso de derechos procedimentales del apelante.",
      href: CGR(2025, "2025013054"),
    },
    {
      numero: "R-DCP-SICOP-01552-2025",
      organo: DCP,
      fecha: "20-08-2025",
      tema: "Recurso equivocado",
      criterio:
        "Rechaza por inadmisible la apelación contra la adjudicación de una licitación menor del MINAE: la Contraloría solo conoce apelaciones contra el acto final de la licitación mayor.",
      href: CGR(2025, "2025018365"),
    },
    {
      numero: "R-DCP-SICOP-00015-2026",
      organo: DCP,
      fecha: "06-01-2026",
      tema: "Carga de la prueba en la objeción",
      criterio:
        "El objetante debe probar que la especificación limita injustificadamente la participación y que su bien o servicio satisface la necesidad de la Administración.",
      href: CGR(2026, "2026000173"),
    },
    {
      numero: "R-DCP-SICOP-00966-2026",
      organo: DCP,
      fecha: "05-06-2026",
      tema: "Multa en la objeción",
      criterio: "Rechaza la multa pedida por el INA: la objeción se dirigía a cláusulas modificadas y no se acreditó ningún supuesto del art. 93.",
      href: CGR(2026, "2026008697"),
    },
    {
      numero: "R-DCP-SICOP-01447-2026",
      organo: DCP,
      fecha: "18-08-2026",
      tema: "Mejor derecho en la apelación",
      criterio: "Rechaza de plano la apelación de quien solo defendió su oferta excluida sin demostrar, con el sistema de evaluación, que resultaría adjudicatario.",
      href: CGR(2026, "2026013729"),
    },
  ],
  pie: "Textos de la Ley 9986 y de su Reglamento cotejados con la versión vigente del SINALEVI (versión 15 de la ley, de setiembre de 2026, y versión del Reglamento con el Decreto 45782). Resoluciones de la Contraloría leídas íntegras en su repositorio de documentos, con la fecha de la resolución en SICOP; resolución del Tribunal en Nexus del Poder Judicial. Corte: 24 de noviembre de 2026.",
};
