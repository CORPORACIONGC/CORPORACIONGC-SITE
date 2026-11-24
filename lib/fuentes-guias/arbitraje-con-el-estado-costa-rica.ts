import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const SC = "Sala Constitucional";
const CGR = "Contraloría General de la República";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 43 (arbitraje como derecho fundamental) y 49 (jurisdicción contencioso-administrativa)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de Arbitraje (Ley 8937, antes Ley sobre Arbitraje Comercial Internacional)",
      detalle: "Arts. 1, 6, 7, 7 A, 16, 20, 22, 28, 34, 35, 36, 37 y 38; texto vigente con la reforma de la Ley 10535",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=70344&param2=145434&param3=1",
    },
    {
      titulo: "Ley para armonizar la normativa del Arbitraje Costarricense (Ley 10535)",
      detalle: "18-09-2024, La Gaceta 182 de 01-10-2024; rige seis meses después de su publicación (2 de abril de 2025, según la Sala Primera). Arts. 1 a 8 y transitorio único",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=102924&param2=142588&param3=1",
    },
    {
      titulo: "Ley sobre Resolución Alterna de Conflictos y Promoción de la Paz Social (Ley 7727)",
      detalle: "Arts. 2, 71 bis, 72 y 73 vigentes; arts. 18, 64 a 67 del capítulo III, derogado por la Ley 10535 (texto anterior en la versión de 2022)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=26393&param2=145436&param3=1",
    },
    {
      titulo: "Ley General de la Administración Pública (Ley 6227)",
      detalle: "Arts. 27.3 (transar y comprometer en árbitros) y 66 (irrenunciabilidad de las potestades de imperio)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Ley Orgánica de la Procuraduría General de la República (Ley 6815)",
      detalle: "Art. 20: autorización del procurador general para someter juicios a árbitros",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38915&param2=150680&param3=1",
    },
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle: "Art. 117: comité de expertos y sede arbitral si así se acordó en el contrato",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1",
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle: "Arts. 294 a 305 (resolución de controversias y comité de expertos) y 327 (deroga el Reglamento a la Ley de Contratación Administrativa)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1",
    },
    {
      titulo: "Reglamento a la Ley de Contratación Administrativa (Decreto Ejecutivo 33411-H), derogado",
      detalle: "Art. 219: arbitraje de derecho, sin potestades de imperio, en español",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=58314&param2=133696&param3=1",
    },
    {
      titulo: "Ley General de Concesión de Obras Públicas con Servicios Públicos (Ley 7762)",
      detalle: "Arts. 4.2 y 39 (reformado por la Ley 8643): arbitraje necesariamente de derecho y materias excluidas",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=30464&param2=117575&param3=1",
    },
    {
      titulo: "Convención sobre el Reconocimiento y la Ejecución de las Sentencias Arbitrales Extranjeras (Ley 6157)",
      detalle: "Aprobación legislativa de la Convención de Nueva York de 1958",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=7445&param2=7981&param3=1",
    },
    {
      titulo: "Decreto Ejecutivo 45017-MOPT",
      detalle: "12-05-2025: encomienda a la Procuraduría la defensa del Estado en el arbitraje 790-2025/AR-CICA de Autopistas del Sol",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=104646&param2=146299&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2007-011153", organo: SC, fecha: "01-08-2007", tema: "El artículo 43", criterio: "El arbitraje es un derecho fundamental autónomo: la facultad de elegir entre la jurisdicción y el arbitraje para un conflicto patrimonial o disponible.", href: NEXUS("ext-1-0007-259703") },
    { numero: "Voto 718-F-2006", organo: S1, fecha: "27-09-2006", tema: "Multas no arbitrables", criterio: "Anula parcialmente un laudo del CICA contra el CETAC y el Estado en cuanto ordenó devolver una multa: las potestades de imperio no son objeto de compromiso arbitral.", href: NEXUS("ext-1-0034-107464") },
    { numero: "Voto 1363-C-S1-2013", organo: S1, fecha: "09-10-2013", tema: "Quién compromete en árbitros", criterio: "El art. 43 incluye al Estado y a los entes públicos; los órganos con personalidad instrumental, como el CONAVI, necesitan habilitación legal expresa, y si no la tienen decide el ministro con el Presidente.", href: NEXUS("ext-1-0034-148907"), gc: true },
    { numero: "Voto 1605-F-S1-2021", organo: S1, fecha: "23-09-2021", tema: "Multas en un contrato con el Estado", criterio: "Declara incompetente al tribunal arbitral para conocer la nulidad de los actos que impusieron multas: es materia patrimonial no disponible.", href: NEXUS("ext-1-0004-308952") },
    { numero: "Voto 501-S1-2026", organo: S1, fecha: "09-04-2026", tema: "Entrada en vigor y efectos de la nulidad", criterio: "La Ley 10535 rige desde el 2 de abril de 2025; la competencia de la Sala es tasada y la petición de nulidad no suspende el cumplimiento del laudo (art. 35.3).", href: NEXUS("sen-1-0004-1380125") },
    { numero: "Voto 805-F-S1-2026", organo: S1, fecha: "04-06-2026", tema: "Régimen transitorio", criterio: "Aplica las causales del art. 67 de la Ley 7727 a un arbitraje requerido en julio de 2024; el control del laudo es externo y no revisa el fondo.", href: NEXUS("sen-1-0004-1401541") },
    { numero: "Voto 1059-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Autorización del jerarca", criterio: "Excluye al INS de un arbitraje como tercero no signatario: comprometer a una institución del Estado exige la voluntad de su jerarca o de quien lo representa (art. 27.3 LGAP).", href: NEXUS("sen-1-0004-1416791") },
    { numero: "Voto 1436-S1-2026", organo: S1, fecha: "10-09-2026", tema: "Unificación del régimen", criterio: "La Ley 10535 unificó la Ley RAC y la Ley 8937 en la Ley de Arbitraje, en vigor desde el 2 de abril de 2025; explica el transitorio único.", href: NEXUS("sen-1-0004-1426307") },
    { numero: "Voto 1534-F-S1-2026", organo: S1, fecha: "09-10-2026", tema: "Causales del artículo 34", criterio: "Sobre un laudo del CICA de junio de 2026 impugnado por orden público: tras la Ley 10535, el art. 34 mantiene la literalidad de esa causal, por lo que sigue aplicando la jurisprudencia anterior.", href: NEXUS("sen-1-0004-1432087") },
  ],
  contraloria: [
    { numero: "Oficio 07346-2018", organo: CGR, fecha: "29-05-2018", tema: "Cláusula arbitral en el refrendo", criterio: "Al refrendar un contrato del INVU advierte que la cláusula de arbitraje se rige por el art. 219 del Reglamento a la Ley de Contratación Administrativa.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2018/SIGYD_D_2018008608.pdf" },
    { numero: "R-DCA-SICOP-00606-2023", organo: CGR, fecha: "30-05-2023", tema: "Arbitraje en la Ley 9986", criterio: "La legislación de contratación pública admite el arbitraje si se acordó en el contrato; la cláusula debe decidirse de forma motivada y redactarse para el objeto concreto.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2023/SIGYD_D/SIGYD_D_2023008352.pdf" },
  ],
  procuraduria: [
    { titulo: "Dictamen C-111-2001", detalle: "16-04-2001: la Administración central y descentralizada y las municipalidades pueden ir a arbitraje; decide el jerarca; las potestades públicas no pueden dejarse en manos de un árbitro", href: PGR(10371) },
    { titulo: "Dictamen C-128-2017", detalle: "12-06-2017: con base en el art. 27.3 LGAP, los entes públicos menores pueden transar, salvo ley especial; la decisión corresponde a su jerarca", href: PGR(20142) },
    { titulo: "Dictamen C-110-2025", detalle: "05-06-2025: inadmite una consulta del MOPT sobre dos arbitrajes ante el CFIA; la Procuraduría no se pronuncia sobre asuntos pendientes ante tribunales arbitrales", href: PGR(25000) },
  ],
  otros: [
    {
      titulo: "Instrumentos y centros de arbitraje",
      items: [
        { titulo: "Ley Modelo de la CNUDMI sobre Arbitraje Comercial Internacional", detalle: "Base de la Ley 8937", href: "https://uncitral.un.org/es/texts/arbitration/modellaw/commercial_arbitration" },
        { titulo: "Convención de Nueva York de 1958", detalle: "Reconocimiento y ejecución de laudos extranjeros", href: "https://uncitral.un.org/es/texts/arbitration/conventions/foreign_arbitral_awards" },
        { titulo: "Reglamento de Arbitraje de la Cámara de Comercio Internacional", detalle: "Vigente desde el 1 de junio de 2026 (edición en español)", href: "https://iccwbo.org/wp-content/uploads/sites/3/2026/07/ICC_2026_Arbitration_Rules_2014_Mediation_Rules_ES.pdf" },
        { titulo: "Centro Internacional de Conciliación y Arbitraje (CICA)", detalle: "Presentación en la página de la Cámara Costarricense-Norteamericana de Comercio; el reglamento de arbitraje vigente no está publicado en línea", href: "https://amcham.cr/concilacion-y-arbitraje/" },
      ],
    },
  ],
  pie: "Textos de la Ley 8937, la Ley 10535, la Ley 7727, la LGAP, la Ley 9986 y su Reglamento cotejados con la versión vigente del SINALEVI. Resoluciones leídas en Nexus del Poder Judicial; documentos de la Contraloría en su repositorio y dictámenes de la Procuraduría en el SINALEVI. La base consultada solo contiene una versión antigua del reglamento de arbitraje del CICA (actualizada con la resolución 028-2005-DNRAC). Corte: 24 de noviembre de 2026.",
};
