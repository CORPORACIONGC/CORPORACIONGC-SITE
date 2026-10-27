import type { FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const DJ = "CGR, División Jurídica";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Decreto Ejecutivo N.° 45782-H-MIDEPLAN-MICITT",
      detalle: "Reforma 31 artículos del Reglamento, entre ellos el 44 (razonabilidad del precio), 72 a 74 (PYMES y cooperativas), 97 (desempate), 106 (precio inaceptable), 133 (subcontratación), 134 y 135 (subsanación) y 309 (materia consultiva). Alcance 62 a La Gaceta 95 del 26-05-2026",
      href: "https://www.imprentanacional.go.cr/pub/2026/05/26/ALCA62_26_05_2026.pdf",
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública",
      detalle: "Decreto Ejecutivo N.° 43808-H, texto vigente con la reforma",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1",
    },
    {
      titulo: "Ley General de Contratación Pública",
      detalle: "Ley N.° 9986, arts. 34 (estudio de mercado), 40 (puntaje adicional a pymes y cooperativas en caso de empate), 49 (subcontratación hasta el 50 %), 50 (subsanación) y 129 (Dirección de Contratación Pública). Alcance 109 a La Gaceta 103 del 31-05-2021",
      href: "https://www.imprentanacional.go.cr/pub/2021/05/31/ALCA109_31_05_2021.pdf",
    },
    {
      titulo: "Ley N.° 10659, Reforma Ley General de Contratación Pública",
      detalle: "10-03-2025: equipara a las cooperativas con características PYME (considerando 15 del Decreto 45782)",
    },
  ],
  jurisprudencia: [],
  contraloria: [
    {
      numero: "R-DCP-SICOP-01070-2024",
      organo: DCP,
      fecha: "19-07-2024",
      tema: "Subsanación: segundo requerimiento",
      criterio:
        "Con el texto original del art. 134, admite excepcionalmente un nuevo requerimiento cuando la Administración omitió prevenir un aspecto en la primera solicitud, y advierte que lo ya prevenido y no atendido no puede subsanarse en la fase recursiva. La reforma de 2026 llevó esa excepción al texto del art. 134.",
      href: CGR(2024, "2024014196"),
    },
    {
      numero: "R-DCP-SICOP-01501-2025",
      organo: DCP,
      fecha: "11-08-2025",
      tema: "Desempate: la condición PYME va primero",
      criterio:
        "Con el texto anterior del art. 97, declara con lugar la objeción en este extremo: el puntaje PYME es el primer criterio de desempate cuando la empresa demostró su condición. El art. 97 reformado lo dice ahora de forma expresa.",
      href: CGR(2025, "2025017811"),
    },
    {
      numero: "R-DCP-SICOP-00989-2026",
      organo: DCP,
      fecha: "08-06-2026",
      tema: "Subsanación: caducidad y ventaja indebida",
      criterio:
        "La prevención no atendida en tiempo hace caducar la posibilidad de subsanar; la exclusión exige que la Administración explique la trascendencia del incumplimiento, y aclarar un dato que ya constaba en la oferta no da ventaja indebida. Transcribe el art. 134 reformado en un concurso de 2025, pero aplica pasajes que la reforma no cambió.",
      href: CGR(2026, "2026008889"),
    },
    {
      numero: "R-DCP-SICOP-01319-2026",
      organo: DCP,
      fecha: "24-07-2026",
      tema: "A qué concursos se aplica la reforma; subcontratista compartido",
      criterio:
        "La reforma rige solo para los procedimientos cuya decisión inicial sea posterior a su publicación; los anteriores siguen con el texto previo. Con el art. 133 anterior, la duplicidad de subcontratista se resolvía con la manifestación del subcontratista sobre la oferta con la que continuaba; anula la adjudicación.",
      href: CGR(2026, "2026011970"),
    },
    {
      numero: "R-DCP-SICOP-01473-2026",
      organo: DCP,
      fecha: "20-08-2026",
      tema: "Precio fuera de las bandas de tolerancia",
      criterio:
        "Con el texto anterior del art. 106, el precio que excede la banda se presume excesivo y obliga a indagar; el oferente debe acreditar su precio con prueba, y en la impugnación del acto final no puede traer información que no aportó al atender la indagatoria. El art. 106 reformado recoge esa regla de la única oportunidad.",
      href: CGR(2026, "2026013944"),
    },
    {
      numero: "R-DCP-SICOP-01501-2026",
      organo: DCP,
      fecha: "25-08-2026",
      tema: "Servicios instrumentales y subcontratación",
      criterio:
        "Con el texto anterior del art. 133, distingue la prestación principal de los servicios complementarios: si el tercero no asume la ejecución sustantiva, es un medio instrumental y no una subcontratación. La reforma excluyó expresamente los contratos de aprovisionamiento.",
      href: CGR(2026, "2026014268"),
    },
    {
      numero: "R-DCP-SICOP-01518-2026",
      organo: DCP,
      fecha: "27-08-2026",
      tema: "Orden del desempate con el art. 97 reformado",
      criterio:
        "Aplica el texto reformado: el pliego debe acudir primero al desempate PYME, luego a los mecanismos que defina, como la preferencia cooperativa, y por último al sorteo. Declara con lugar ese extremo de la objeción.",
      href: CGR(2026, "2026014386"),
    },
    {
      numero: "R-DCP-SICOP-01587-2026",
      organo: DCP,
      fecha: "04-09-2026",
      tema: "Subsanación sin ventaja indebida",
      criterio:
        "Incorporar, después de la calificación y sin trazabilidad que pruebe su existencia antes de la apertura, documentos para ganar puntaje es una actuación extemporánea que viola la igualdad; la prevención opera frente a defectos formales de los requisitos de admisibilidad.",
      href: CGR(2026, "2026014875"),
    },
    {
      numero: "Oficio 13624 (DJ-1803)",
      organo: DJ,
      fecha: "08-10-2026",
      tema: "Consultas sobre la aplicación de la Ley 9986",
      criterio:
        "Rechaza una consulta sobre las bandas de tolerancia: desde la Ley 9986 la Contraloría no atiende la aplicación técnica u orientación normativa en contratación pública, materia consultiva de la Dirección de Contratación Pública (art. 129 de la ley y 309 del Reglamento).",
      href: CGR(2026, "2026016859"),
    },
    {
      numero: "R-DCP-SICOP-01908-2026",
      organo: DCP,
      fecha: "20-10-2026",
      tema: "Primer pliego con el art. 44 reformado",
      criterio:
        "En la objeción a un pliego cuyo estudio de mercado se hizo con el art. 44 reformado, rechaza de plano el reclamo contra el precio de referencia: impugnarlo exige aportar un estudio de mercado propio o prueba idónea, y la mera inconformidad no basta.",
      href: CGR(2026, "2026018471"),
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional) y SINALEVI. Resoluciones y oficios: cgrfiles.cgr.go.cr, fecha de la resolución en SICOP. Todas aplican la Ley 9986 y su Reglamento. Cotejo al 26 de octubre de 2026.",
};
