import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const S1 = "Sala Primera";
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Circular 31-2026 del Consejo Superior: reglas y lineamientos éticos para el uso de inteligencia artificial generativa (ChatGPT, Gemini y NotebookLM) por parte de las personas servidoras judiciales", detalle: "Lineamientos 1.1, 1.2, 1.3, 2.1, 2.3, 3.6, 3.8 y 3.9; Boletín Judicial 39 del 26-02-2026", href: SINALEVI(106387, 149838) },
    { titulo: "Código Procesal Contencioso Administrativo (Ley 8508)", detalle: "Art. 137, inciso d (casación por falta de motivación)", href: SINALEVI(57436, 146091) },
    { titulo: "Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968)", detalle: "Art. 6.4 (adecuación al fin), que invoca la circular" },
  ],
  jurisprudencia: [
    { numero: "Voto 001606-F-S1-2026", organo: S1, fecha: "15-10-2026", tema: "Constancia de uso de ChatGPT", criterio: "Casación sin lugar sobre costas; al pie del por tanto declara el uso de ChatGPT 5.2 para un borrador del resumen del recurso y la revisión de redacción, «sin que ello implicara delegación del criterio jurídico».", href: NEXUS("sen-1-0004-1432663") },
    { numero: "Voto 000704-S1-2026", organo: S1, fecha: "04-06-2026", tema: "Primera constancia de la Sala", criterio: "El primer voto de la Sala con constancia de uso de ChatGPT para el resumen del recurso.", href: NEXUS("sen-1-0004-1402657") },
    { numero: "Voto 000856-S1-2026", organo: S1, fecha: "18-06-2026", tema: "Resumen del recurso con IA", criterio: "Casa por falta de fundamentación; la IA se declara solo para el resumen del recurso.", href: NEXUS("sen-1-0004-1402678") },
    { numero: "Voto 001230-S1-2026", organo: S1, fecha: "13-08-2026", tema: "Constancia con NotebookLM", criterio: "Constancia expresa en cumplimiento de la circular 31-2026: síntesis de agravios, revisión de documentos del expediente y de posturas jurídicas.", href: NEXUS("sen-1-0004-1418173") },
    { numero: "Voto 001467-S1-2026", organo: S1, fecha: "17-09-2026", tema: "Constancia con Gemini", criterio: "Resumen de los fundamentos del recurso con apoyo parcial en Gemini gratuito, con la conservación de actividad desactivada.", href: NEXUS("sen-1-0004-1426356") },
    { numero: "Voto 001732-S1-2026", organo: S1, fecha: "29-10-2026", tema: "Constancia con ChatGPT", criterio: "ChatGPT 5.5 para el borrador de la síntesis de agravios y la redacción; sin delegación del análisis ni de la valoración de los agravios.", href: NEXUS("sen-1-0004-1438140") },
    { numero: "Voto 001368-2026", organo: "Sala Tercera", fecha: "29-10-2026", tema: "Copilot institucional", criterio: "Constancia dentro del considerando I: Microsoft 365 Copilot solo para el resumen del recurso de casación.", href: NEXUS("sen-1-0006-1439004") },
    { numero: "Sentencia 378-2026", organo: "Tribunal de Apelación de Trabajo de San José", fecha: "12-03-2026", tema: "Nota estándar del tribunal", criterio: "M365 Copilot para reorganizar y sintetizar los argumentos del apelante, sin datos personales del expediente; fórmula repetida en 57 sentencias.", href: NEXUS("sen-1-0034-1379055") },
    { numero: "Sentencia 1614-2026", organo: "Tribunal de Apelación de Sentencia Penal, II Circuito de San José", fecha: "08-09-2026", tema: "Uso más amplio declarado", criterio: "ChatGPT para derecho comparado, búsqueda de fuentes y apoyo en segmentos dogmáticos; no para hechos, prueba ni fundamentos.", href: NEXUS("sen-1-0034-1431224") },
    { numero: "Sentencia 921-2026", organo: "Tribunal de Apelación de Sentencia Penal, II Circuito de San José", fecha: "27-05-2026", tema: "IA en la audiencia", criterio: "Constata que el juez usó IA y la calculadora del teléfono para calcular la pena en la audiencia; rechaza el motivo de deliberación.", href: NEXUS("sen-1-0034-1400501") },
    { numero: "Sentencia 1311-2025", organo: "Juzgado de Apelaciones de Pensiones Alimentarias", fecha: "23-06-2025", tema: "IA para ampliar un dictamen", criterio: "Reprocha que la instancia ampliara el dictamen médico con información obtenida por IA, sin advertirlo a las partes.", href: NEXUS("sen-1-0034-1309793") },
    { numero: "Sentencia 592-2025", organo: "Tribunal de Apelación de Sentencia Penal de Cartago", fecha: "05-12-2025", tema: "Citas inexistentes", criterio: "Llamado de atención al recurrente por jurisprudencia inexistente o mal atribuida, atribuible a la «alucinación» de la IA.", href: NEXUS("sen-1-0034-1352091") },
    { numero: "Sentencia 377-2026", organo: "Tribunal de Familia", fecha: "04-05-2026", tema: "Remisión al Colegio de Abogados", criterio: "Ordena testimonio a la Fiscalía del Colegio por invocar un texto normativo inexistente.", href: NEXUS("sen-1-0034-1386467") },
    { numero: "Sentencia 485-2026", organo: "Tribunal de Familia", fecha: "02-06-2026", tema: "Qué es una alucinación", criterio: "Explica el término y sostiene que verificar los datos es un deber del abogado; la remisión al Colegio no prejuzga la falta.", href: NEXUS("sen-1-0034-1400945") },
    { numero: "Sentencia 1047-2026", organo: "Juzgado de Apelaciones de Pensiones Alimentarias", fecha: "16-06-2026", tema: "Consentimiento del cliente", criterio: "Sostiene que usar IA para actos procesales exige consentimiento previo del cliente y podría incidir en el cobro de honorarios; remite a la Junta Directiva del Colegio.", href: NEXUS("sen-1-0034-1409451") },
    { numero: "Sentencia 365-2026", organo: "Tribunal Segundo de Apelación Civil de San José", fecha: "29-06-2026", tema: "Normas derogadas", criterio: "Usar IA no está prohibido, pero debe hacerse con responsabilidad y se recomienda indicarlo; el recurso invocaba normas derogadas.", href: NEXUS("sen-1-0034-1410280") },
    { numero: "Voto 2026-011641", organo: SC, fecha: "27-03-2026", tema: "Detectores de IA", criterio: "Anula la expulsión de una estudiante por un porcentaje de IA detectado por un programa, que «es susceptible de falsos positivos».", href: NEXUS("sen-1-0007-1387590") },
  ],
  otros: [
    {
      titulo: "Actas del Poder Judicial",
      items: [
        { titulo: "Consejo Superior, sesión 12-2026, art. LIII", detalle: "Aprueba la circular 31-2026 (12-02-2026)", href: NEXUS("act-1-0003-8913-53") },
        { titulo: "Consejo Superior, sesión 102-2025, art. LX", detalle: "Autoriza el uso regulado de la IA generativa (06-11-2025)", href: NEXUS("act-1-0003-8844-60") },
        { titulo: "Corte Plena, sesión 23-2026, art. XXVI", detalle: "Intervenciones sobre el uso de ChatGPT en la Sala Primera y la política institucional (25-05-2026)", href: NEXUS("act-1-0003-8989-26") },
        { titulo: "Consejo Superior, sesión 63-2026, art. XLI", detalle: "La Dirección de Tecnología defiende el deber de declarar el uso (28-07-2026)", href: NEXUS("act-1-0003-9078-41") },
        { titulo: "Consejo Superior, sesión 68-2026, art. XXVII", detalle: "La Auditoría constata que solo existen los lineamientos y se ordena formalizar la política (13-08-2026)", href: NEXUS("act-1-0003-9079-27") },
      ],
    },
    {
      titulo: "Derecho comparado y estándares internacionales",
      items: [
        { titulo: "Corte Constitucional de Colombia, sentencia T-323 de 2024", detalle: "Uso de ChatGPT por un juez de tutela; doce principios", href: "https://www.corteconstitucional.gov.co/relatoria/2024/T-323-24.htm" },
        { titulo: "Consejo Superior de la Judicatura de Colombia, Acuerdo PCSJA24-12243", detalle: "Lineamientos de uso de IA en la Rama Judicial (16-12-2024)", href: "https://www.ramajudicial.gov.co/documents/164295699/174277484/PCSJA24-12243.-USO-Y-APROVECHAMIENTO-DE-IA-EN-LA-RAMA-JUDICIAL.pdf/fbd6903d-d7b5-f9bd-faff-03f1087d6714?t=1753313841933" },
        { titulo: "Reglamento (UE) 2024/1689 de Inteligencia Artificial", detalle: "Anexo III, punto 8: la IA para la administración de justicia es de alto riesgo", href: "https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32024R1689" },
        { titulo: "Reglamento (UE) 2026/1744", detalle: "Aplaza las obligaciones de alto riesgo al 2 de diciembre de 2027", href: "https://publications.europa.eu/resource/celex/32026R1744" },
        { titulo: "CEPEJ, Carta ética europea sobre el uso de la IA en los sistemas judiciales (2018)", detalle: "Consejo de Europa", href: "https://rm.coe.int/ethical-charter-en-for-publication-4-december-2018/16808f699c" },
        { titulo: "UNESCO, Directrices para el uso de sistemas de IA en cortes y tribunales", detalle: "2025", href: "https://unesdoc.unesco.org/ark:/48223/pf0000396582" },
        { titulo: "Courts and Tribunals Judiciary, guía judicial sobre IA", detalle: "Inglaterra y Gales, octubre de 2025", href: "https://www.judiciary.uk/guidance-and-resources/artificial-intelligence-ai-judicial-guidance-october-2025/" },
        { titulo: "Consejo General del Poder Judicial de España, Instrucción 2/2026", detalle: "BOE-A-2026-2205", href: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2205" },
        { titulo: "Conselho Nacional de Justiça de Brasil, Resolución 615/2025", detalle: "Uso de IA en el Poder Judicial", href: "https://atos.cnj.jus.br/atos/detalhar/6001" },
        { titulo: "Superior Tribunal de Justicia de Chubut (Argentina), resolución sobre la nulidad por uso de IA", detalle: "Reseña de Pensamiento Penal, marzo de 2026", href: "https://www.pensamientopenal.com.ar/index.php/fallos/91880-superior-tribunal-justicia-chubut-incidencia-ia-resoluciones-judiciales" },
        { titulo: "Mata v. Avianca, Inc. (S.D.N.Y. 2023)", detalle: "Sanción a abogados por citas inventadas con ChatGPT", href: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0_1.pdf" },
      ],
    },
  ],
  pie: "Constancias de uso leídas en el texto íntegro de cada resolución publicada en Nexus del Poder Judicial (sentencias hasta fines de octubre de 2026; actas del Consejo Superior hasta la sesión 77-2026). Circular 31-2026 cotejada con SINALEVI. Marco comparado leído en sus fuentes oficiales el 23-11-2026, salvo el caso de Chubut, tomado de una reseña. Los conteos de resoluciones son un mínimo.",
};
