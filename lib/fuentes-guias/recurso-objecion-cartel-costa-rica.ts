import type { FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const DCA = "CGR, División de Contratación Administrativa";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

const LGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1";
const RLGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle:
        "Arts. 28 (prohibiciones), 40 (contenido y modificación del pliego), 60.d y 63.n (CCSS y licitación reducida), 86 a 90 (tipos de recurso, presentación, fundamentación, allanamiento y preclusión), 93 y 94 (multas) y 95 y 96 (objeción). Texto vigente, versión 15 del SINALEVI, con reformas hasta la Ley 10971 de 2026",
      href: LGCP,
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle:
        "Arts. 44 (razonabilidad del precio), 56 (estudio de mercado para criterios estratégicos), 90 (contenido del pliego), 241 a 250 (disposiciones generales de los recursos) y 253 a 258 (objeción). Texto vigente con la reforma del Decreto 45782",
      href: RLGCP,
    },
    {
      titulo: "Decreto Ejecutivo 45782-H-MIDEPLAN-MICITT",
      detalle: "Reforma 31 artículos del Reglamento, entre ellos el 44, el 56 y el 90. Dado el 08-04-2026 y publicado el 26-05-2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107160&param2=151215&param3=1",
    },
    {
      titulo: "Ley 10472, reforma del artículo 93 de la Ley General de Contratación Pública",
      detalle: "19-04-2024: las multas en concursos municipales quedan en la municipalidad o concejo municipal de distrito",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=101888&param2=140660&param3=1",
    },
  ],
  jurisprudencia: [],
  contraloria: [
    {
      numero: "R-DCA-SICOP-01621-2023",
      organo: DCA,
      fecha: "21-12-2023",
      tema: "Legitimación y expediente completo",
      criterio:
        "Rechaza por falta de legitimación la objeción de una empresa alcanzada por la prohibición del art. 28 y declara parcialmente con lugar otra: el estudio de mercado y el sustento presupuestario deben constar en el expediente, que «debe bastarse a sí mismo».",
      href: CGR(2023, "2023022768"),
    },
    {
      numero: "R-DCP-SICOP-00061-2024",
      organo: DCP,
      fecha: "17-01-2024",
      tema: "Objeción técnica sin prueba",
      criterio:
        "Rechaza de plano por falta de fundamentación la objeción que pedía cambiar las dimensiones de un catéter de la CCSS sin evidencia técnica o científica que la respaldara.",
      href: CGR(2024, "2024000587"),
    },
    {
      numero: "R-DCP-SICOP-00015-2026",
      organo: DCP,
      fecha: "06-01-2026",
      tema: "Segunda ronda y criterios estratégicos",
      criterio:
        "En una segunda ronda limitada a las modificaciones del pliego, declara con lugar la objeción contra el sistema de evaluación por allanamiento de la CCSS y ordena de oficio incorporar el estudio de mercado que respalde los criterios de compra estratégica (art. 56 del Reglamento).",
      href: CGR(2026, "2026000173"),
    },
    {
      numero: "R-DCP-SICOP-00966-2026",
      organo: DCP,
      fecha: "05-06-2026",
      tema: "Multa por objeción temeraria",
      criterio:
        "Rechaza la multa que pidió el INA: la recurrente objetaba cláusulas modificadas y la Administración no acreditó ninguno de los supuestos del art. 93 (preclusión, falta de vinculación o temeridad).",
      href: CGR(2026, "2026008697"),
    },
    {
      numero: "R-DCP-SICOP-01085-2026",
      organo: DCP,
      fecha: "19-06-2026",
      tema: "Legitimación presunta",
      criterio:
        "La interposición del recurso hace presumir el interés en participar; si la Administración niega la legitimación del objetante, debe probar que no tiene el perfil requerido por el objeto licitado.",
      href: CGR(2026, "2026009889"),
    },
    {
      numero: "R-DCP-SICOP-01831-2026",
      organo: DCP,
      fecha: "09-10-2026",
      tema: "Carga de la prueba del objetante",
      criterio:
        "Rechaza de plano la objeción que tachaba el pliego de ambiguo y dirigido sin individualizar cláusulas ni aportar prueba: no basta con afirmar que la motivación es insuficiente; hay que demostrar que la especificación es ilegal o innecesaria.",
      href: CGR(2026, "2026017150"),
    },
    {
      numero: "R-DCP-SICOP-01908-2026",
      organo: DCP,
      fecha: "20-10-2026",
      tema: "Objeción al precio de referencia",
      criterio:
        "Con el art. 44 reformado, rechaza de plano el reclamo contra el precio de referencia y las bandas: el objetante debía aportar su propio estudio de mercado o prueba idónea.",
      href: CGR(2026, "2026018471"),
    },
    {
      numero: "R-DCP-SICOP-01954-2026",
      organo: DCP,
      fecha: "27-10-2026",
      tema: "Objeción extemporánea",
      criterio:
        "Rechaza de plano por extemporánea la objeción presentada después de vencidos los ocho días hábiles desde la publicación del pliego, sin modificaciones nuevas que objetar (arts. 87 de la ley y 244.b del Reglamento).",
      href: CGR(2026, "2026018792"),
    },
  ],
  pie: "Textos de la Ley 9986 y de su Reglamento cotejados con la versión vigente del SINALEVI (versión 15 de la ley, de setiembre de 2026, y versión del Reglamento con el Decreto 45782). Resoluciones de la Contraloría leídas íntegras en su repositorio de documentos; la fecha es la de la resolución en SICOP. Corte: 24 de noviembre de 2026.",
};
