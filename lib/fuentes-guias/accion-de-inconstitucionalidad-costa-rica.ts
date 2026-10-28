import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Art. 10, reformado por la Ley N.° 7128 de 18-08-1989 (Sala Constitucional y control de constitucionalidad)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 9 (rechazo de plano), 73 a 95 (acción de inconstitucionalidad) y 96 a 108 (consultas)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Reglamento sobre Expediente Judicial Electrónico ante el Poder Judicial",
      detalle: "Corte Plena, sesión 22-13 de 20-05-2013, art. XXXI (circular 104-2013), arts. 2 y 5",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 305-90", organo: SC, fecha: "22-03-1990", tema: "Medio razonable", criterio: "El hábeas corpus y el amparo pueden servir de asunto previo, pero la razonabilidad se examina con más rigor: el medio debe ser absolutamente necesario en ese momento procesal.", href: NEXUS("sen-1-0007-80019") },
    { numero: "Voto 1668-90", organo: SC, fecha: "20-11-1990", tema: "Medio razonable", criterio: "Invocar la inconstitucionalidad no basta: la eventual anulación debe poder conducir a la estimación del asunto base a favor de quien acciona.", href: NEXUS("sen-1-0007-80151") },
    { numero: "Voto 1617-91", organo: SC, fecha: "21-08-1991", tema: "Efectos del curso", criterio: "La interposición de la acción no suspende la aplicación de la norma impugnada; se suspende el dictado de la resolución final donde se discute su aplicación.", href: NEXUS("sen-1-0007-83914") },
    { numero: "Voto 3615-94", organo: SC, fecha: "19-07-1994", tema: "Actos jurisdiccionales", criterio: "Contra las resoluciones concretas de los tribunales no cabe la acción; sí contra la jurisprudencia reiterada.", href: NEXUS("sen-1-0007-81076") },
    { numero: "Voto 4190-95", organo: SC, fecha: "28-07-1995", tema: "Naturaleza incidental", criterio: "La acción es un proceso incidental y no una acción directa o popular; la Procuraduría actúa como órgano asesor y la acción admitida no se desiste.", href: NEXUS("sen-1-0007-81662") },
    { numero: "Voto 791-96", organo: SC, fecha: "13-02-1996", tema: "Asunto previo concluido", criterio: "Rechazó la acción ya en trámite porque el asunto base se había archivado, por falta de pendencia (con voto salvado).", href: NEXUS("sen-1-0007-81891") },
    { numero: "Voto 2001-008239", organo: SC, fecha: "14-08-2001", tema: "Intereses difusos y actos de gobierno", criterio: "Definió los intereses difusos y los de la colectividad en su conjunto, negó que exista acción popular y sometió los actos de gobierno al control de constitucionalidad.", href: NEXUS("sen-1-0007-162969") },
    { numero: "Voto 2003-010421", organo: SC, fecha: "17-09-2003", tema: "Omisión e interpretación conforme", criterio: "Declaró inconstitucional la omisión de exigir estudio de impacto ambiental en un reglamento minero sin anular sus artículos, por el principio de conservación de la norma.", href: NEXUS("sen-1-0007-259094") },
    { numero: "Voto 2006-011345", organo: SC, fecha: "04-08-2006", tema: "Legitimación", criterio: "Ni siquiera frente a reformas constitucionales existe acción popular: el solo interés en la pureza del orden constitucional no legitima (con voto salvado).", href: NEXUS("sen-1-0007-360360") },
    { numero: "Voto 2006-012015", organo: SC, fecha: "16-08-2006", tema: "Fase de agotamiento", criterio: "La revocatoria ante el órgano que dictó el acto no abre la fase de agotamiento: la acción procede cuando el asunto está ante el jerarca.", href: NEXUS("sen-1-0007-355723") },
    { numero: "Voto 2014-001583", organo: SC, fecha: "05-02-2014", tema: "Interés corporativo", criterio: "Una entidad con personalidad jurídica que tenga por fin defender los intereses de sus miembros puede accionar directamente en su defensa.", href: NEXUS("sen-1-0007-598771") },
    { numero: "Voto 2016-016965", organo: SC, fecha: "16-11-2016", tema: "Graduación de la suspensión", criterio: "La Sala puede graduar el efecto suspensivo del curso cuando causaría graves trastornos (con voto salvado de tres magistrados).", href: NEXUS("sen-1-0007-1001739") },
    { numero: "Voto 2017-006330", organo: SC, fecha: "03-05-2017", tema: "Desistimiento", criterio: "Tuvo por desistida una acción admitida porque el asunto base se archivó por satisfacción extraprocesal de la pretensión (con voto salvado).", href: NEXUS("sen-1-0007-725248") },
    { numero: "Voto 2017-012905", organo: SC, fecha: "16-08-2017", tema: "Vicio de procedimiento y dimensionamiento", criterio: "Anuló el art. 86 de la Ley N.° 9036 por omitirse la consulta obligatoria a la Corte y dimensionó los efectos a la fecha del primer edicto.", href: NEXUS("sen-1-0007-744685") },
    { numero: "Voto 2019-012747", organo: SC, fecha: "10-07-2019", tema: "Cosa juzgada", criterio: "Solo la sentencia estimatoria produce cosa juzgada; la desestimatoria permite nuevas acciones contra la misma norma.", href: NEXUS("sen-1-0007-943513") },
    { numero: "Voto 2023-019489", organo: SC, fecha: "09-08-2023", tema: "Jurisprudencia impugnable", criterio: "La jurisprudencia impugnable es la reiteración de un criterio con alcance normativo, demostrada con resoluciones ajenas al asunto base.", href: NEXUS("sen-1-0007-1178328") },
    { numero: "Voto 2023-022992", organo: SC, fecha: "13-09-2023", tema: "Asunto previo", criterio: "El asunto previo es un requisito sustancial: debe estar pendiente y la norma impugnada debe incidir directamente en su resolución.", href: NEXUS("sen-1-0007-1183634") },
    { numero: "Voto 2024-035448", organo: SC, fecha: "27-11-2024", tema: "Acción directa", criterio: "La inexistencia de lesión individual y directa corresponde a normas de aplicación automática; las excepciones del art. 75 no crean una acción popular.", href: NEXUS("sen-1-0007-1263375") },
    { numero: "Voto 2025-002717", organo: SC, fecha: "29-01-2025", tema: "Omisiones", criterio: "Solo son impugnables las omisiones frente a un deber previsto directa y expresamente en el Derecho de la Constitución o que encierren una discriminación.", href: NEXUS("sen-1-0007-1273539") },
    { numero: "Voto 2025-011867", organo: SC, fecha: "23-04-2025", tema: "Fase de agotamiento", criterio: "El procedimiento administrativo sirve de asunto base desde que se recurre el acto final; antes, la acción es prematura.", href: NEXUS("sen-1-0007-1288622") },
    { numero: "Voto 2025-024826", organo: SC, fecha: "06-08-2025", tema: "Reformas constitucionales", criterio: "Las normas originarias de la Constitución no son impugnables y las reformas parciales solo lo son por vicios de procedimiento.", href: NEXUS("sen-1-0007-1350860") },
    { numero: "Voto 2026-015211", organo: SC, fecha: "29-04-2026", tema: "Invocación en el asunto base", criterio: "La inconstitucionalidad debe invocarse, fundada, antes de interponer la acción; ese defecto no se subsana después.", href: NEXUS("sen-1-0007-1385076") },
    { numero: "Voto 2026-019069", organo: SC, fecha: "27-05-2026", tema: "Denegatoria de trámite", criterio: "La Presidencia denegó el trámite porque no se cumplió en plazo la prevención de pagar el timbre por la autenticación (art. 80).", href: NEXUS("sen-1-0007-1394873") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-314-2007", detalle: "06-09-2007, alcance de la suspensión del art. 82 y observación de Eduardo Ortiz Ortiz (folio 931 del exp. 10.273)" },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Proyecto de Ley de la Jurisdicción Constitucional", detalle: "Expediente 10.273, La Gaceta N.° 129 de 10-07-1986" },
        { titulo: "Ley N.° 7135", detalle: "Alcance 34 a La Gaceta N.° 198 de 19-10-1989" },
        { titulo: "Asamblea Nacional Constituyente", detalle: "Acta n.º 169 (1949), art. 10" },
        { titulo: "Jensen Ghesquiere, David", detalle: "«Una interpretación histórica del dimensionamiento de las sentencias de constitucionalidad», Revista de la Sala Constitucional n.º 3 (2021), que transcribe actas del exp. 10.273 con folio" },
        { titulo: "Expediente 17.743", detalle: "Ley de Reforma de la Jurisdicción Constitucional (2010), Comisión Permanente de Asuntos Jurídicos, actas 36 (19-10-2010) y 46 (23-11-2010)" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 28 de octubre de 2026.",
};
