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
    { numero: "Sentencia 1310-2026", organo: "Tribunal de Apelación de Sentencia Penal, III Circuito de Alajuela (San Ramón)", fecha: "27-10-2026", tema: "Recursos escritos con IA", criterio: "Usa Copilot para valorar si el recurso se hizo con IA; no hay norma procesal que limite su empleo como apoyo, pero pide recursos «sintéticos y puntuales».", href: NEXUS("sen-1-0034-1437497") },
    { numero: "Sentencia 1330-2026", organo: "Juzgado de Apelaciones de Pensiones Alimentarias", fecha: "28-07-2026", tema: "Honorarios", criterio: "Incluye entre los criterios para fijar honorarios «si se litigó mediante el uso de inteligencia artificial o no».", href: NEXUS("sen-1-0034-1417969") },
    { numero: "Sentencia 1127-2026", organo: "Tribunal de Apelación de Sentencia Penal, II Circuito de San José", fecha: "29-06-2026", tema: "Respuestas de un chat como prueba", criterio: "Las respuestas de un chat de IA aportadas con el recurso son «material no sometido al contradictorio».", href: NEXUS("sen-1-0034-1409925") },
    { numero: "Sentencia 774-2026", organo: "Tribunal Agrario", fecha: "06-08-2026", tema: "Peritaje con IA", criterio: "Reprocha aceptar un peritaje hecho con herramientas de IA sin que explique cómo se validaron los resultados.", href: NEXUS("sen-1-0034-1425154") },
    { numero: "Voto 000396-2026", organo: "Sala Tercera", fecha: "09-04-2026", tema: "Prueba supuestamente alterada", criterio: "Constata que la sentencia rechazó la alegación de un video alterado con IA «por tratarse de una mera suposición sin sustento».", href: NEXUS("sen-1-0006-1381240") },
    { numero: "Resolución 69-2026", organo: "Tribunal de Apelación de lo Contencioso Administrativo, Sección IV", fecha: "13-02-2026", tema: "Valoración humana", criterio: "El derecho no puede verse como una actividad mecánica, «lo que obliga a la presencia humana para realizar valoraciones»; pasaje repetido en al menos cinco resoluciones de 2026.", href: NEXUS("sen-1-0034-1368232") },
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
        { titulo: "Consejo Superior, sesión 63-2026, art. II", detalle: "Adjudica 270 licencias anuales de Gemini Enterprise por US$104.055,15 (28-07-2026)", href: NEXUS("act-1-0003-9078-2") },
        { titulo: "Consejo Superior, sesión 68-2026, art. XXVII", detalle: "La Auditoría constata que solo existen los lineamientos y se ordena formalizar la política (13-08-2026)", href: NEXUS("act-1-0003-9079-27") },
        { titulo: "Consejo Superior, sesión 74-2026, art. LIV", detalle: "Advertencia sobre el uso de plataformas de terceros con documentos institucionales (03-09-2026)", href: NEXUS("act-1-0003-9133-54") },
        { titulo: "Consejo Superior, sesión 7-2026, art. XXV", detalle: "Auditoría: resúmenes de fallos con apoyo de IA generativa en el análisis jurisprudencial de la Sala Segunda (27-01-2026)", href: NEXUS("act-1-0003-8905-25") },
      ],
    },
  ],
  procuraduria: [
    { titulo: "Opinión jurídica OJ-131-2025", detalle: "22-08-2025; en su nota 1 declara que el análisis comparativo se hizo con ayuda de herramientas de inteligencia artificial" },
  ],
  pie: "Constancias de uso leídas en el texto íntegro de cada resolución publicada en Nexus del Poder Judicial (sentencias hasta fines de octubre de 2026; actas del Consejo Superior hasta la sesión 77-2026). Circular 31-2026 cotejada con SINALEVI. Los conteos por mes, tribunal y herramienta y la mediana de días entre el uso y el fallo son cálculos propios sobre esas resoluciones y representan un mínimo.",
};
