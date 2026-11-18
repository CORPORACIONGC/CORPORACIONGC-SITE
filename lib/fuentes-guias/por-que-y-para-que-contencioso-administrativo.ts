import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle:
        "Arts. 41, 49 (texto dado por la Ley N.° 3124 de 25-06-1963), 173 y 182. Versión 28 de 28 de SINALEVI",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Constitución Política, texto original de 1949",
      detalle: "Art. 49 en su redacción original («en uso de facultades regladas»). Versión 1 de 28 de SINALEVI, vigente desde 08-11-1949",
      href: SINALEVI(871, 928),
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle:
        "Ley N.° 8508 de 28-04-2006, rige desde 01-01-2008 (art. 222); arts. 1 a 3, 9, 10, 12, 16, 17, 19, 31, 34 a 42, 58, 60, 63, 70, 72, 76, 90, 98, 99, 111, 122, 139, 155, 156, 159, 193, 194, 198, 220, 222 y Transitorio IV. Versión 8 de 8 de SINALEVI; el art. 3 a) fue anulado por el voto 9928-2010 y el art. 111 lo reformaron las Leyes 9212 y 9784",
      href: SINALEVI(57436, 146091),
    },
    {
      titulo: "Código Procesal Civil",
      detalle: "Ley N.° 9342, art. 20.1 (patrocinio letrado), aplicado en lo contencioso por el art. 220 del CPCA",
      href: SINALEVI(81360, 150778),
    },
    {
      titulo: "Ley Orgánica del Poder Judicial",
      detalle:
        "Ley N.° 8 de 29-11-1937, arts. 54 (Sala Primera), 102 (Tribunal Contencioso Administrativo) y 115 (juzgados), según la numeración que les dio la Ley N.° 10866 de 04-03-2026",
      href: SINALEVI(33635, 151490),
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 342 y siguientes (recursos administrativos)",
      href: SINALEVI(13231, 150737),
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 29 y siguientes (recurso de amparo)",
      href: SINALEVI(38533, 127124),
    },
    {
      titulo: "Ley Reguladora de la Jurisdicción Contencioso-Administrativa",
      detalle:
        "Ley N.° 3667 de 12-03-1966, derogada por el art. 198 del CPCA; sigue rigiendo los procesos iniciados antes de 2008 (Transitorio IV)",
      href: SINALEVI(7331, 75210),
    },
    {
      titulo: "Ley sobre el Juicio Contencioso Administrativo",
      detalle: "Ley N.° 1226 de 15-11-1950, primera ley de desarrollo del art. 49; derogada por el art. 105 de la Ley 3667",
      href: SINALEVI(37912, 39975),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 3905-1994", organo: SC, fecha: "03-08-1994", tema: "Sentido del art. 49", criterio: "La reforma de 1963 permitió impugnar también los actos discrecionales; el art. 49 da al individuo una herramienta efectiva contra los actos administrativos ilegales.", href: NEXUS("sen-1-0007-83698") },
    { numero: "Voto 3669-2006", organo: SC, fecha: "15-03-2006", tema: "Agotamiento de la vía administrativa", criterio: "Declara inconstitucional el agotamiento obligatorio de la ley de 1966: queda a elección de la persona, salvo en materia municipal y de contratación administrativa. Con voto salvado de dos magistrados.", href: NEXUS("sen-1-0007-337671") },
    { numero: "Voto 2545-2008", organo: SC, fecha: "22-02-2008", tema: "Deslinde con el amparo", criterio: "Con el CPCA existe una jurisdicción contencioso-administrativa plenaria, universal y célere, cauce idóneo para los reclamos de legalidad ordinaria, incluida la falta de respuesta de la Administración.", href: NEXUS("sen-1-0007-411228") },
    { numero: "Voto 9928-2010", organo: SC, fecha: "09-06-2010", tema: "Justicia administrativa plenaria y universal", criterio: "El art. 49 no deja ámbitos de la función administrativa exentos de control. Anula el art. 3 a) del CPCA: en el empleo público la vía depende del contenido de la pretensión y del régimen jurídico aplicable.", href: NEXUS("sen-1-0007-473953") },
    { numero: "Voto 28193-2026", organo: SC, fecha: "23-07-2026", tema: "Amparo y vía ordinaria", criterio: "Cuando el reclamo exige apoyarse en leyes o reglamentos, corresponde a la vía ordinaria y no al amparo. Reitera la sentencia 2016-11412.", href: NEXUS("sen-1-0007-1410984") },
    { numero: "Sentencia 584-F-2005", organo: S1, fecha: "11-08-2005", tema: "Omisiones y responsabilidad", criterio: "La conducta administrativa incluye la inactividad formal y material; la Administración responde por los daños que causa su inactividad (puente peatonal no construido).", href: NEXUS("sen-1-0034-315154"), gc: true },
    { numero: "Sentencia 380-F-S1-2009", organo: S1, fecha: "20-04-2009", tema: "Naturaleza del proceso", criterio: "El CPCA pasa de un sistema preeminentemente objetivo a un proceso de naturaleza mixta, que controla el funcionamiento administrativo en todas sus formas y se tramita por audiencias orales.", href: NEXUS("sen-1-0004-765006"), gc: true },
    { numero: "Sentencia 1360-F-S1-2010", organo: S1, fecha: "11-11-2010", tema: "Oralidad", criterio: "El proceso por etapas orales da al juez contacto directo con la prueba; por eso la deliberación debe seguir de inmediato al juicio.", href: NEXUS("sen-1-0004-765789"), gc: true },
    { numero: "Sentencia 1097-F-S1-2011", organo: S1, fecha: "08-09-2011", tema: "Legitimación", criterio: "La legitimación nace de la afectación de un derecho subjetivo o de un interés legítimo por una conducta administrativa; sin ella, el juicio sería una revisión abstracta de legalidad.", href: NEXUS("sen-1-0004-766520"), gc: true },
    { numero: "Sentencia 896-F-S1-2012", organo: S1, fecha: "26-07-2012", tema: "Derecho subjetivo, interés legítimo e intereses difusos", criterio: "Define el derecho subjetivo y reconoce que los intereses difusos y colectivos integran la categoría de los legítimos.", href: NEXUS("sen-1-0004-767783"), gc: true },
    { numero: "Sentencia 165-F-S1-2020", organo: S1, fecha: "14-01-2020", tema: "Lesividad", criterio: "Si la nulidad absoluta del acto favorable no es evidente y manifiesta, la Administración debe acudir al proceso de lesividad de los arts. 10.5 y 34 del CPCA. Con voto salvado sobre otro punto.", href: NEXUS("sen-1-0004-980879") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-066-2008", detalle: "06-03-2008: el recurso de alzada dejó de ser preceptivo; el plazo de ocho días del art. 31 busca que la Administración corrija sin ser llevada a los tribunales", href: PGR(15063) },
    { titulo: "Opinión jurídica OJ-111-2016", detalle: "21-09-2016: legitimación por derechos subjetivos e intereses legítimos y tutela de los intereses colectivos y difusos en lo contencioso (no vinculante)", href: PGR(19569) },
    { titulo: "Dictamen C-202-2017", detalle: "11-09-2017: el agotamiento de la vía administrativa es facultativo, salvo en contratación administrativa y materia municipal", href: PGR(20132) },
  ],
  otros: [
    {
      titulo: "Asamblea Nacional Constituyente de 1949",
      items: [
        { titulo: "Acta N.° 46", detalle: "31-03-1949, intervención del representante Fournier sobre la falta de remedio judicial" },
        { titulo: "Acta N.° 109", detalle: "14-07-1949, moción de Jiménez Ortiz y debate sobre la ubicación de la norma" },
        { titulo: "Acta N.° 112", detalle: "19-07-1949, Baudrit Solera pide establecerla como función del Poder Judicial" },
        { titulo: "Acta N.° 113", detalle: "20-07-1949, moción de fondo de Baudrit Solera y su descripción de la práctica anterior" },
        { titulo: "Acta N.° 179", detalle: "01-11-1949, texto definitivo del art. 49" },
      ],
    },
    {
      titulo: "Expediente legislativo N.° 15.134 (Ley 8508)",
      items: [
        { titulo: "Proyecto de ley y exposición de motivos", detalle: "Comisión redactora nombrada por la Corte en enero de 1998; págs. 1 a 4" },
        { titulo: "Acta N.° 02 de la Subcomisión de Asuntos Jurídicos", detalle: "13-10-2004, exposición del magistrado Óscar González Camacho, folios 469 a 477" },
        { titulo: "Dictamen afirmativo unánime", detalle: "Comisión Permanente de Asuntos Jurídicos, 14-09-2005" },
        { titulo: "Un nuevo modelo de justicia administrativa", detalle: "Observatorio Judicial, vol. 35, 30-11-2005: la comisión redactora fue coordinada por el magistrado González Camacho", href: "https://actualidadjudicial.poder-judicial.go.cr/vol35/noticias_judiciales/notjud01.htm" },
      ],
    },
    {
      titulo: "Estadística judicial",
      items: [
        { titulo: "Programa Estado de la Nación, Tercer Informe Estado de la Justicia (2020), cap. 4", detalle: "Duración antes y después de la reforma, cuellos de botella y amparos de legalidad, págs. 123 a 131", href: "https://hdl.handle.net/20.500.12337/7906" },
        { titulo: "Emilio Solana Rio, «Administración de la justicia»", detalle: "Ponencia para el Decimotercer Informe Estado de la Nación (2007), pág. 21: duración de los ordinarios en 2006", href: "https://hdl.handle.net/20.500.12337/520" },
        { titulo: "Consejo Superior del Poder Judicial, acta N.° 87-2018", detalle: "04-10-2018, art. XXXIX: informe de la Sección de Estadística sobre la materia contenciosa en 2017" },
      ],
    },
    {
      titulo: "Resoluciones y doctrina",
      items: [
        { titulo: "Tribunal Contencioso Administrativo, resolución 6050-2023", detalle: "30-11-2023, exp. 23-004439-1027-CA: la demanda debe venir autenticada por un abogado (art. 20.1 del CPC)" },
        { titulo: "Óscar Eduardo González Camacho, «El por qué y para qué del contencioso administrativo»", detalle: "En CPCA, 20 años después, dir. Alex Rojas Ortega (Tirant lo Blanch, 2026). Reproducido íntegro en esta guía", href: "#capitulo" },
        { titulo: "Eduardo Ortiz Ortiz, «Espíritu y perspectivas de una reforma de la justicia administrativa en Costa Rica»", detalle: "Revista de Administración Pública, n.° 111, 1986, págs. 393 a 422" },
        { titulo: "Agustín Gordillo, Introducción al derecho administrativo (1962)", detalle: "En Tratado de derecho administrativo y obras selectas, t. 5, Primeras obras" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Actas de 1949: Actas de la Asamblea Nacional Constituyente. Expediente 15.134: antecedentes legislativos del CPCA en la Asamblea Legislativa. Jurisprudencia: Nexus del Poder Judicial. Pronunciamientos: Procuraduría General de la República. Cotejo al 18 de noviembre de 2026.",
};
