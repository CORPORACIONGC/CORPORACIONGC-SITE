import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const ALCANCE_135 = "https://www.imprentanacional.go.cr/pub/2026/10/07/ALCA135_07_10_2026.pdf";
const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const TC = "Tribunal de Casación de lo Contencioso Administrativo";
const TCA = "Tribunal Contencioso Administrativo";
const TAP = "Tribunal de Apelación de lo Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 41 (justicia pronta y cumplida) y 167 (consulta a la Corte de los proyectos sobre organización o funcionamiento del Poder Judicial)", href: SINALEVI(871, 147492) },
    { titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)", detalle: "Arts. 60 (trámite preferente), 69 (fallo directo), 82.5, 90, 93, 98 (puro derecho), 111 (plazo de la sentencia tras el juicio), 132 (revocatoria), 134 a 137 (casación)", href: SINALEVI(57436, 146091) },
    { titulo: "Ley 9784, reforma del art. 111 del CPCA", detalle: "12-11-2019: sentencia oral, plazos de 5 y 15 días hábiles y falta grave de servicio en lugar de la nulidad", href: SINALEVI(90249, 118782) },
    { titulo: "Reglamento Autónomo de Organización y Servicio de la Jurisdicción Contencioso Administrativa y Civil de Hacienda", detalle: "Corte Plena, sesión 02-2008 del 21-01-2008: arts. 58, 62.10, 70, 72, 75 y 82.4 (quince días hábiles para sentenciar los asuntos de puro derecho)", href: SINALEVI(62642, 92890) },
    { titulo: "Ley Orgánica del Poder Judicial (Ley 8)", detalle: "Art. 5 (pronto despacho y denuncia por retardo de justicia), en el texto de la Ley 10905", href: SINALEVI(33635, 151490) },
    { titulo: "Ley 10905, Régimen sancionador de las personas servidoras del Poder Judicial", detalle: "12-05-2026: arts. 23.31 (retardo grave e injustificado, falta grave) y 24.7 (retraso injustificado, falta leve); Tribunal Administrativo Sancionador", href: SINALEVI(107272, 151488) },
    { titulo: "Proyecto de ley 25.815, «Ley para agilizar los contenciosos de puro derecho»", detalle: "Reforma del art. 98.2 del CPCA: sentencia en un mes y remisión al art. 5 de la LOPJ; transitorio para los procesos pendientes. Alcance 135 a La Gaceta 189 del 07-10-2026", href: ALCANCE_135 },
  ],
  jurisprudencia: [
    { numero: "Sentencia 1360-F-S1-2010", organo: S1, fecha: "11-11-2010", tema: "Concepto", criterio: "En el puro derecho se discute la interpretación y aplicación de normas a hechos no discutidos; no se reciben declaraciones, lo que no supone que no exista prueba: es documental y no requiere inmediación.", href: NEXUS("sen-1-0004-765789"), gc: true },
    { numero: "Sentencia 231-2011-VI", organo: TCA, fecha: "28-10-2011", tema: "Concepto y conclusiones", criterio: "Sin prueba que evacuar el expediente pasa a sentencia sin juicio; las defensas previas rechazadas deben reiterarse en las conclusiones.", href: NEXUS("sen-1-0034-527688") },
    { numero: "Sentencia 164-2025", organo: TC, fecha: "18-11-2025", tema: "Frontera con el juicio", criterio: "Si en la audiencia preliminar se admite prueba testimonial, procede el juicio oral del art. 98.1 y no el trámite del inciso 2.", href: NEXUS("sen-1-1011-1351703") },
    { numero: "Resolución 274-2023-I", organo: TAP, fecha: "12-07-2023", tema: "Recurso", criterio: "Contra el auto escrito que declara el puro derecho y da plazo para conclusiones solo cabe revocatoria; rechaza de plano la apelación.", href: NEXUS("sen-1-0034-1177382") },
    { numero: "Sentencia 2567-F-S1-2019", organo: S1, fecha: "12-09-2019", tema: "Rectificación previa", criterio: "La parte que no recurrió el rechazo de su prueba no puede alegar en casación la violación del debido proceso por la declaratoria de puro derecho.", href: NEXUS("sen-1-0004-942811") },
    { numero: "Sentencia 821-F-S1-2023", organo: S1, fecha: "31-05-2023", tema: "Rectificación previa", criterio: "Quien se mostró conforme con el rechazo de su testimonial no puede alegar indefensión por la declaratoria de puro derecho (art. 137.2).", href: NEXUS("sen-1-0004-1158658") },
    { numero: "Sentencia 1437-F-S1-2024", organo: S1, fecha: "17-10-2024", tema: "Revocatoria oral", criterio: "El rechazo de la testimonial debía combatirse con revocatoria oral en la audiencia (art. 132.3); admitida solo prueba documental, corresponde concluir y remitir.", href: NEXUS("sen-1-0004-1258735") },
    { numero: "Sentencia 2006-F-S1-2020", organo: S1, fecha: "18-06-2020", tema: "Nulidad", criterio: "Viola el debido proceso reservar al Tribunal la admisibilidad de una prueba ofrecida por ambas partes y, a la vez, declarar el puro derecho; casa y reenvía.", href: NEXUS("sen-1-0004-986864") },
    { numero: "Sentencia 1734-F-S1-2021", organo: S1, fecha: "12-10-2021", tema: "Indefensión", criterio: "No hay indefensión si la prueba rechazada no habría modificado la decisión final.", href: NEXUS("sen-1-0004-1063192") },
    { numero: "Sentencia 231-F-TC-2021", organo: TC, fecha: "11-11-2021", tema: "Indefensión", criterio: "El rechazo de prueba solo anula si se demuestra cómo habría cambiado lo resuelto; lo contrario sería la nulidad por la nulidad misma.", href: NEXUS("sen-1-1011-1073408") },
    { numero: "Resolución 35-2015-VI", organo: TCA, fecha: "27-02-2015", tema: "Conclusiones", criterio: "Las conclusiones son presupuesto necesario para que el Tribunal falle un asunto de puro derecho; reenvía a trámite.", href: NEXUS("sen-1-0034-626983") },
    { numero: "Resolución 2024-008515", organo: TCA, fecha: "19-11-2024", tema: "Parte ausente", criterio: "La inasistencia a la audiencia preliminar no implica renunciar a la prueba ni a las conclusiones; anula parcialmente la audiencia y reenvía a trámite.", href: NEXUS("sen-1-0034-1269718") },
    { numero: "Resolución 2026-004063", organo: TCA, fecha: "18-06-2026", tema: "Devolución a trámite", criterio: "El Tribunal no falla porque nunca se rindieron conclusiones ni se saneó el proceso; devuelve el expediente al juez tramitador.", href: NEXUS("sen-1-0034-1410367") },
    { numero: "Sentencia 239-F-S1-2012", organo: S1, fecha: "16-02-2012", tema: "Inmediación", criterio: "Las conclusiones grabadas ante el tramitador, a las que tuvo acceso el Tribunal, no lesionan la inmediación ni la concentración.", href: NEXUS("sen-1-0004-767474") },
    { numero: "Sentencia 2024-008884", organo: TCA, fecha: "28-11-2024", tema: "Conclusiones escritas", criterio: "Declarado el puro derecho, el tramitador dio siete días hábiles para conclusiones escritas; describe la redistribución del circulante pendiente de fallo.", href: NEXUS("sen-1-0034-1266252") },
    { numero: "Sentencia 293-F-S1-2014", organo: S1, fecha: "06-03-2014", tema: "Parte ausente", criterio: "El momento de concluir es el cierre de la audiencia preliminar; la parte que faltó por no actualizar su medio de notificaciones perdió esa oportunidad por su desidia.", href: NEXUS("sen-1-0004-768581"), gc: true },
    { numero: "Resolución 40-2023-VII", organo: TCA, fecha: "12-07-2023", tema: "Fallo directo", criterio: "El trámite del art. 69 exige la aceptación expresa de la contraria; el silencio no vale como conformidad.", href: NEXUS("sen-1-0034-1188243") },
    { numero: "Sentencia 1368-F-S1-2012", organo: S1, fecha: "18-10-2012", tema: "Plazo ordenatorio", criterio: "En los asuntos de puro derecho no hay juicio ni rigen las reglas de la oralidad; el plazo para sentenciar es ordenatorio.", href: NEXUS("sen-1-0004-767740") },
    { numero: "Sentencia 144-F-TC-2018", organo: TC, fecha: "18-10-2018", tema: "Plazo", criterio: "En el puro derecho no existe legalmente un plazo para la resolución final ni nulidad por su incumplimiento.", href: NEXUS("sen-1-1011-909660") },
    { numero: "Sentencia 239-F-TC-2021", organo: TC, fecha: "30-11-2021", tema: "Plazo", criterio: "Al puro derecho no se aplica el art. 111 sino el art. 82.4 del Reglamento, cuyo plazo es ordenatorio.", href: NEXUS("sen-1-1011-1073413") },
    { numero: "Sentencia 125-F-TC-2023", organo: TC, fecha: "13-07-2023", tema: "Plazo", criterio: "Reitera el criterio anterior tras la reforma del art. 111 de 2019.", href: NEXUS("sen-1-1011-1207345") },
    { numero: "Sentencia 51-F-TC-2024", organo: TC, fecha: "03-05-2024", tema: "Plazo y razonabilidad", criterio: "Desde la Ley 9784 el plazo es ordenatorio en todo proceso; la demora no viola el debido proceso si es razonable y proporcionada.", href: NEXUS("sen-1-1011-1232346") },
    { numero: "Sentencia 2024-002803", organo: TCA, fecha: "29-04-2024", tema: "Duración", criterio: "Explica que el expediente le llegó en la redistribución del circulante de puro derecho acordada en julio de 2023.", href: NEXUS("sen-1-0034-1232608") },
    { numero: "Sentencia 323-2026-II", organo: TAP, fecha: "18-08-2026", tema: "Plan de la Corte", criterio: "Sentencia de fondo de puro derecho dictada por el Tribunal de Apelación con base en los acuerdos de Corte Plena 04-2026 y 06-2026.", href: NEXUS("sen-1-0034-1419892") },
    { numero: "Voto 2026-006742", organo: SC, fecha: "24-02-2026", tema: "Mora judicial", criterio: "Rechaza de plano el amparo por la demora en sentenciar un proceso de puro derecho; remite al pronto despacho y a la queja por retardo.", href: NEXUS("sen-1-0007-1373768") },
    { numero: "Resolución 139-2026-I", organo: TAP, fecha: "05-05-2026", tema: "Recurso", criterio: "Contra la sentencia de fondo del Tribunal Contencioso solo cabe casación; rechaza de plano la apelación.", href: NEXUS("sen-1-0034-1396433") },
  ],
  otros: [
    {
      titulo: "Corte Plena, Consejo Superior y Dirección de Planificación",
      items: [
        { titulo: "Corte Plena, sesión 04-2026, artículo XII", detalle: "02-02-2026: amplía la competencia del Tribunal de Apelación para sentenciar asuntos de puro derecho; plan de seis meses", href: NEXUS("act-1-0003-8892-12") },
        { titulo: "Corte Plena, sesión 06-2026, artículo XXII", detalle: "16-02-2026: criterios de vulnerabilidad, antigüedad y especialidad para escoger los expedientes", href: NEXUS("act-1-0003-8903-22") },
        { titulo: "Circular 67-2026", detalle: "Comunica el acuerdo de la sesión 04-2026", href: NEXUS("avi-1-0003-15502") },
        { titulo: "Corte Plena, sesión 42-2026, artículo XXXV", detalle: "28-09-2026: informe 1093-PLA-MNP-2026 (38 sentencias, 970 asuntos pendientes) y prórroga por un año desde el 01-10-2026", href: NEXUS("act-1-0003-9140-35") },
        { titulo: "Circular 177-2026", detalle: "06-10-2026: competencia «de manera indefinida, siempre y cuando la capacidad operativa del Tribunal de Apelaciones así lo permita»", href: NEXUS("avi-1-0003-15815") },
        { titulo: "Consejo Superior, sesión 19-2026, artículo XXXVII", detalle: "Sección Novena dedicada al puro derecho desde el 20-11-2025; circulante de 1.013 asuntos al 03-11-2025", href: NEXUS("act-1-0003-8952-37") },
        { titulo: "Dirección de Planificación, oficio 609-PLA-MNP-2025", detalle: "05-06-2025: 1.097 asuntos de puro derecho listos para sentencia y cuotas de los jueces", href: "https://sistemaplanificacion.poder-judicial.go.cr/php/reforma_rediseno/609-PLA-MNP-20252025-08-19_07-59-28.docx" },
        { titulo: "Dirección de Planificación, «Materia Contenciosa Administrativa 2024»", detalle: "Duración promedio de las sentencias del Tribunal Contencioso Administrativo", href: "https://sistemaplanificacion.poder-judicial.go.cr/php/estadistica_ju_po/Materia_Contenciosa_Administrativa_2024_-_An%C3%A1lisis2025-08-19_09-12-07.pdf" },
      ],
    },
    {
      titulo: "Asamblea Legislativa",
      items: [
        { titulo: "Expediente 15.134, subcomisión de Asuntos Jurídicos, acta N.° 22", detalle: "18-05-2005, folios 1266 y 1267: discusión y aprobación del art. 98 del proyecto de CPCA" },
        { titulo: "Expediente 25.815, oficio AL-DEST-CO-416-2026", detalle: "04-11-2026: Servicios Técnicos señala como consulta obligatoria la del Poder Judicial" },
      ],
    },
  ],
  pie: "Normas cotejadas con SINALEVI y La Gaceta el 18-11-2026; votos y actas leídos en su texto íntegro y enlazados a Nexus; acta de la subcomisión del expediente 15.134 leída en la copia digitalizada del expediente; datos del proyecto 25.815 consultados en el SIL de la Asamblea Legislativa el 18-11-2026.",
};
