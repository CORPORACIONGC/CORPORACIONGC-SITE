import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const S2 = "Sala Segunda";
const TCA = "Tribunal Contencioso Administrativo";
const CGR = "Contraloría General de la República";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley de Responsabilidad Laboral de los Contratistas con el Estado",
      detalle:
        "Ley N.° 10971 de 16-09-2026, Alcance 136 a La Gaceta N.° 190 de 08-10-2026; artículo único (reforma los arts. 14 inciso f) y 119 de la Ley 9986) y transitorio único; rige desde su publicación",
      href: SINALEVI(108035, 152661),
    },
    {
      titulo: "Ley General de Contratación Pública",
      detalle:
        "Ley N.° 9986, versión 15 de SINALEVI; arts. 3 a), 14 f) y g), 29, 113, 114, 118, 119, 120, 121, 122 y 123. El art. 118 no registra reformas",
      href: SINALEVI(94469, 152662),
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública",
      detalle:
        "Decreto Ejecutivo N.° 43808-H, con reformas hasta el Decreto 45782 de 08-04-2026; arts. 32 c), 122, 135 a), 293 y 313. No ha sido ajustado a la Ley 10971",
      href: SINALEVI(98344, 151216),
    },
    {
      titulo: "Ley Constitutiva de la Caja Costarricense de Seguro Social",
      detalle:
        "Ley N.° 17, arts. 74 (requisito para contratar, retención de pagos, incumplimiento contractual y subcontratistas) y 74 bis (arreglo de pago)",
      href: SINALEVI(2340, 127333),
    },
    {
      titulo: "Ley de Desarrollo Social y Asignaciones Familiares",
      detalle: "Ley N.° 5662, arts. 15 (contribución patronal) y 22 (estar al día para contratar)",
      href: SINALEVI(2687, 150444),
    },
    {
      titulo: "Ley Orgánica del Instituto Nacional de Aprendizaje",
      detalle: "Ley N.° 6868, arts. 15 y 16 (contribución patronal y recaudación por la CCSS)",
      href: SINALEVI(11208, 142854),
    },
    {
      titulo: "Ley de Creación del Instituto Mixto de Ayuda Social",
      detalle: "Ley N.° 4760, arts. 14 a 16 (contribución patronal y recaudación por la CCSS)",
      href: SINALEVI(7060, 143291),
    },
    {
      titulo: "Código de Trabajo",
      detalle:
        "Ley N.° 2; arts. 3 (intermediario), 136 y siguientes (jornada), 193, 201 y 202 (seguro de riesgos del trabajo) y 413 (prescripción)",
      href: SINALEVI(8045, 150791),
    },
    {
      titulo: "Constitución Política",
      detalle: "Arts. 34 (irretroactividad) y 73 (seguros sociales)",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Convenio N.° 94 de la OIT, sobre las cláusulas de trabajo en los contratos celebrados por las autoridades públicas",
      detalle: "Aprobado por la Ley N.° 2561 de 11-05-1960; art. 5 (sanciones por inobservancia de las cláusulas de trabajo)",
      href: SINALEVI(27403, 28987),
    },
    {
      titulo: "Decreto Ejecutivo N.° 11430-TSS",
      detalle:
        "30-04-1980; cláusulas especiales de protección al trabajo en los contratos del Estado, retenciones y subcontratación. Antecedente; SINALEVI lo registra sin reformas",
      href: SINALEVI(62502, 71423),
    },
    {
      titulo: "Directriz N.° 34 del Poder Ejecutivo",
      detalle:
        "08-02-2002; cláusula obligatoria de cumplimiento de las obligaciones laborales y de seguridad social en carteles y contratos. Antecedente, dictado al amparo de la ley anterior",
      href: SINALEVI(48010, 51041),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 787-94", organo: SC, fecha: "08-02-1994", tema: "Estar al día con la Caja para licitar", criterio: "Anuló la frase del art. 74 de la Ley 17 que exigía estar al día para participar en licitaciones, por considerarla un mecanismo ajeno a los fines de la contratación. Criterio superado en 2002.", href: NEXUS("sen-1-0007-80904") },
    { numero: "Voto 2002-04888", organo: SC, fecha: "22-05-2002", tema: "Cambio de criterio", criterio: "Acepta como legítimo que el legislador dote a la Caja de mecanismos de coerción para asegurar sus recursos; el voto 787-94 deja de controlar la materia.", href: NEXUS("sen-1-0007-217116") },
    { numero: "Voto 2002-08583", organo: SC, fecha: "04-09-2002", tema: "Seguridad social frente a contratación", criterio: "Pondera ambos regímenes y da prioridad al sistema universal de seguridad social: exigir estar al día para contratar no viola los derechos de las empresas ni el principio de razonabilidad.", href: NEXUS("sen-1-0007-220606") },
    { numero: "Voto 2008-14750", organo: SC, fecha: "03-10-2008", tema: "Límite de las medidas de compulsión", criterio: "La Administración puede compeler al pago de las deudas con la Caja dentro de la razonabilidad y sin afectar el núcleo esencial de otros derechos.", href: NEXUS("sen-1-0007-424763") },
    { numero: "Voto 2017-007225", organo: SC, fecha: "19-05-2017", tema: "Traslado de cargos y sanción", criterio: "Anula la resolución de un contrato por morosidad con la CCSS porque el traslado de cargos advertía una multa: el investigado debe conocer de antemano la consecuencia a la que se expone.", href: NEXUS("sen-1-0007-712219") },
    { numero: "Voto 2019-010642", organo: SC, fecha: "12-06-2019", tema: "Validez de la inhabilitación", criterio: "La inhabilitación es una limitación válida a la libre concurrencia; el exceso de una sanción concreta lo analizan las autoridades competentes en cada caso. Dictado sobre la Ley 7494.", href: NEXUS("sen-1-0007-921419") },
    { numero: "Resolución 2026-092625", organo: SC, fecha: "05-10-2026", tema: "Acción contra el art. 114 de la Ley 9986", criterio: "Da curso a la acción de inconstitucionalidad contra el procedimiento de resolución contractual (exp. 26-034910-0007-CO); la publicación no suspende la vigencia general de la norma.", href: NEXUS("sen-1-0007-1431107") },
    { numero: "Sentencia 001702-F-S1-2021", organo: S1, fecha: "12-10-2021", tema: "Tipicidad en las sanciones a contratistas", criterio: "La sanción exige una conducta predeterminada en la ley y adecuación entre el hecho y el tipo, bajo pena de nulidad. Dictada sobre la Ley 7494.", href: NEXUS("sen-1-0004-1075213") },
    { numero: "Sentencia 000796-F-S1-2023", organo: S1, fecha: "31-05-2023", tema: "Morosidad con el Fodesaf", criterio: "Estar al día «para participar» es un requisito formal subsanable, exigible para adjudicar; el oferente puede corregirlo de oficio o a pedido de la Administración. Dictada sobre la Ley 7494.", href: NEXUS("sen-1-0004-1167150") },
    { numero: "Sentencia 001519-F-S1-2026", organo: S1, fecha: "09-10-2026", tema: "Morosidad durante la ejecución", criterio: "El deber de estar al día con la CCSS acompaña toda la ejecución del contrato; es válido suspender el pago de facturas mientras dure la morosidad si el cartel lo previó. Hechos regidos por la Ley 7494.", href: NEXUS("sen-1-0004-1432072") },
    { numero: "Sentencia 001438-F-S1-2012", organo: S1, fecha: "30-10-2012", tema: "Riesgos del trabajo y subcontratación", criterio: "El contratista general responde por las primas del seguro de riesgos del trabajo del subcontratista solo si este es un intermediario; si emplea capital propio, es el único obligado.", href: NEXUS("sen-1-0004-767514") },
    { numero: "Sentencia 2025-002537", organo: S2, fecha: "20-08-2025", tema: "Solidaridad de la institución contratante", criterio: "La institución no responde solidariamente por los trabajadores de la empresa de vigilancia adjudicataria: es contratista con capital propio y ejerce la subordinación, no intermediario del art. 3 del Código de Trabajo.", href: NEXUS("sen-1-0034-1335479") },
    { numero: "Sentencia 2025-002476", organo: TCA, fecha: "12-03-2025", tema: "Sanción por incumplir cargas sociales", criterio: "Confirma un apercibimiento impuesto bajo la Ley 7494 a una contratista que incumplió sus obligaciones con la CCSS y el Fodesaf durante la ejecución.", href: NEXUS("sen-1-0034-1287028") },
  ],
  contraloria: [
    { numero: "R-DCP-SICOP-01801-2025", organo: CGR, fecha: "29-09-2025", tema: "Subsanación de la morosidad", criterio: "Bajo la Ley 9986 la morosidad con la CCSS en la apertura es subsanable (art. 135 a) del Reglamento); se excluye al oferente que no se pone al día tras la prevención.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2025/SIGYD_D/SIGYD_D_2025020834.pdf" },
    { numero: "R-DCP-SICOP-01999-2025", organo: CGR, fecha: "24-10-2025", tema: "Violación «debidamente acreditada» (art. 29)", criterio: "La fórmula debe leerse con los principios de eficacia, eficiencia y conservación de ofertas: hay que analizar la trascendencia del vicio. Dictada sobre el régimen de prohibiciones.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2025/SIGYD_D/SIGYD_D_2025025333.pdf" },
    { numero: "R-DCP-SICOP-01348-2025", organo: CGR, fecha: "22-07-2025", tema: "Póliza de riesgos del trabajo", criterio: "Si el pliego exige la póliza al contratista al inicio y durante la ejecución, una póliza vencida en la apertura no excluye la oferta. Anterior a la Ley 10971.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2025/SIGYD_D/SIGYD_D_2025015937.pdf" },
    { numero: "R-DCP-SICOP-01285-2026", organo: CGR, fecha: "20-07-2026", tema: "Subcontratistas", criterio: "El oferente y el contratista deben velar por que sus subcontratistas estén al día con la CCSS en la admisibilidad, la formalización y la ejecución.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2026/SIGYD_D/SIGYD_D_2026011631.pdf" },
    { numero: "R-DCP-SICOP-01853-2026", organo: CGR, fecha: "14-10-2026", tema: "Síntesis de la regla", criterio: "La morosidad en la apertura no excluye de forma automática; estar al día es condición para resultar adjudicatario y la exclusión procede si la prevención queda sin atender. No menciona la Ley 10971.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2026/SIGYD_D/SIGYD_D_2026017415.pdf" },
  ],
  procuraduria: [
    { titulo: "Opinión jurídica OJ-065-2019", detalle: "12-06-2019: la mora con la seguridad social obliga a la Administración a abrir el procedimiento de resolución contractual (no vinculante)", href: PGR(21584) },
    { titulo: "Dictamen PGR-C-029-2025", detalle: "10-02-2025: toda Administración debe verificar el cumplimiento del art. 74 de la Ley Constitutiva de la CCSS en los trámites que ese artículo enumera", href: PGR(24823) },
    { titulo: "Informe a la Sala Constitucional, exp. 26-034910-0007-CO", detalle: "27-10-2026: sugiere declarar sin lugar la acción contra el art. 114 de la Ley 9986", href: "https://sinalevi.go.cr/ResultadosAsuntos/Informacion?param1=14613&param2=1&param3=1" },
  ],
  otros: [
    {
      titulo: "Expediente legislativo N.° 24.547 (Ley 10971)",
      items: [
        { titulo: "Proyecto de ley y exposición de motivos", detalle: "La Gaceta N.° 178 de 25-09-2024, pp. 28 a 30", href: "https://www.imprentanacional.go.cr/pub/2024/09/25/COMP_25_09_2024.pdf" },
        { titulo: "Dictamen afirmativo de mayoría", detalle: "Comisión Permanente Ordinaria de Asuntos Jurídicos, 09-04-2025" },
        { titulo: "Primer informe de mociones del art. 137", detalle: "Comisión de Asuntos Jurídicos, sesión N.° 30 de 14-10-2025: lenguaje inclusivo y transitorio único" },
        { titulo: "Segundo informe de mociones del art. 137", detalle: "Comisión de Asuntos Jurídicos, sesión N.° 62 de 07-04-2026: cinco mociones rechazadas" },
        { titulo: "Acta de la sesión plenaria N.° 132", detalle: "21-04-2026: aprobación en primer debate, 47 votos a favor" },
        { titulo: "Acta de la sesión plenaria extraordinaria N.° 19", detalle: "27-08-2026, pp. 16 a 40: discusión y aprobación en segundo debate, 51 votos a favor" },
        { titulo: "Instituto Nacional de Seguros, oficio PE-00447-2025", detalle: "07-04-2025, respuesta a la consulta de la comisión" },
        { titulo: "Ministerio de Trabajo y Seguridad Social, Dirección Nacional de Inspección del Trabajo", detalle: "Oficio MTSS-DMT-DVAL-DNI-DAL-131-2025 de 07-03-2025, remitido con la carta MTSS-DMT-632-2025 de 22-04-2025" },
        { titulo: "Ley publicada", detalle: "Alcance 136 a La Gaceta N.° 190 de 08-10-2026", href: "https://www.imprentanacional.go.cr/pub/2026/10/08/ALCA136_08_10_2026.pdf" },
      ],
    },
    {
      titulo: "Expediente legislativo N.° 21.546 (Ley 9986)",
      items: [
        { titulo: "Acta de la sesión extraordinaria N.° 14 de la Comisión Especial", detalle: "02-11-2020: moción 137-96, que incorporó la resolución contractual en sede jurisdiccional como causal y la llevó a la inhabilitación calificada, aprobada por seis votos" },
        { titulo: "Acta de la sesión plenaria ordinaria N.° 6", detalle: "18-05-2021: explicación del inciso f) del art. 14 y de la mención de los organismos internacionales" },
      ],
    },
    {
      titulo: "Doctrina",
      items: [
        { titulo: "Mauricio Castro Méndez, Karen Carvajal Loaiza y Esteban Chacón Rojas, «Tipología de las relaciones de trabajo»", detalle: "Investigación de base del Informe Estado de la Nación 2019 (CONARE), pp. 29 y 30: Convenio 94 de la OIT y Decreto 11430 en la contratación administrativa", href: "https://hdl.handle.net/20.500.12337/7824" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y La Gaceta (Imprenta Nacional). Jurisprudencia: Nexus del Poder Judicial. Resoluciones de la Contraloría: sitio de la CGR. Expedientes legislativos: Sistema de Información Legislativa y Expediente Digital de la Asamblea Legislativa. No se localizó resolución que aplique la Ley 10971 al cierre del cotejo. Cotejo al 10 de noviembre de 2026.",
};
