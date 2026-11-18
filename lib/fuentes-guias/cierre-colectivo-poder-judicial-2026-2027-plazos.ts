import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const S1 = "Sala Primera";
const S2 = "Sala Segunda";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Ley Orgánica del Poder Judicial (Ley 8, texto dado por la Ley 7333)", detalle: "Arts. 38.2 (días inhábiles), 40 (plan de vacaciones) y 86, inciso 20 (antes 81.20, renumerado por la Ley 10866)", href: SINALEVI(33635, 151490) },
    { titulo: "Código Procesal Civil (Ley 9342)", detalle: "Arts. 26.2 (días y horas hábiles) y 30.5 (conteo de plazos, día final inhábil y gestiones electrónicas hasta el final del día)", href: SINALEVI(81360, 150778) },
    { titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)", detalle: "Arts. 19, 23, 25 y 26.2 (medidas cautelares), 39 (plazo para demandar) y 220 (integración)", href: SINALEVI(57436, 146091) },
    { titulo: "Ley de Notificaciones Judiciales (Ley 8687)", detalle: "Arts. 17 (todos los días y horas son hábiles para notificar) y 38 (cómputo del plazo)", href: SINALEVI(64786, 143667) },
    { titulo: "Código Civil (Ley 30)", detalle: "Arts. 16 (cómputo civil de los plazos), 880 (casos en que no corre la prescripción) y 881", href: SINALEVI(15437, 148770) },
    { titulo: "Código de Trabajo (Ley 2)", detalle: "Arts. 148 (feriados) y 466 (plazos en días ordinariamente hábiles)", href: SINALEVI(8045, 150791) },
    { titulo: "Código Procesal Penal (Ley 7594)", detalle: "Arts. 167 (plazos por día sin los inhábiles) y 168 (plazos en protección de la libertad del imputado, en días naturales)", href: SINALEVI(41297, 151404) },
    { titulo: "Código Procesal de Familia (Ley 9747)", detalle: "Art. 73 (cómputo de los plazos y gestiones electrónicas hasta las veinticuatro horas)", href: SINALEVI(90569, 143180) },
    { titulo: "Código Procesal Agrario (Ley 9609)", detalle: "Arts. 66 y 90 (días hábiles y conteo de plazos)", href: SINALEVI(88308, 149710) },
    { titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)", detalle: "Arts. 4 (la Sala no está sometida al plan de vacaciones), 5 (magistrado de turno) y 35 (plazo del amparo)", href: SINALEVI(38533, 127124) },
    { titulo: "Ley General de la Administración Pública (Ley 6227)", detalle: "Arts. 256 (plazos por días) y 259 (suspensión por fuerza mayor)", href: SINALEVI(13231, 150737) },
  ],
  jurisprudencia: [
    { numero: "Voto 1415-2026", organo: S1, fecha: "10-09-2026", tema: "Notificación antes del cierre", criterio: "Sentencia transmitida el 18-12-2025 y notificada el 19-12-2025, último día hábil del año; los quince días de la casación corrieron desde el 05-01-2026, primer día hábil luego del cierre, y vencieron el 23-01-2026.", href: NEXUS("sen-1-0004-1426286") },
    { numero: "Voto 436-2022", organo: S1, fecha: "24-02-2022", tema: "Cierre de fin de año", criterio: "Cuenta el plazo recursivo excluyendo los días inhábiles y el cierre colectivo de fin de año.", href: NEXUS("sen-1-0004-1078595") },
    { numero: "Voto 2193-2020", organo: S1, fecha: "13-08-2020", tema: "Notificación durante el cierre", criterio: "Resolución notificada el 26-12-2016, durante el cierre colectivo; el plazo de quince días de la casación vencía el 27-01-2017.", href: NEXUS("sen-1-0004-997464") },
    { numero: "Voto 3859-2019", organo: S1, fecha: "14-11-2019", tema: "Plazo que atraviesa el cierre", criterio: "El plazo de la casación se suspendió el 24-12-2018 por las vacaciones colectivas y se reanudó el 07-01-2019.", href: NEXUS("sen-1-0004-952529") },
    { numero: "Voto 1089-2011", organo: S1, fecha: "08-09-2011", tema: "Cierre de medio período", criterio: "Los días del cierre colectivo de julio de 2010 son inhábiles para el conteo del plazo del artículo 139.1 del CPCA.", href: NEXUS("sen-1-0004-766570") },
    { numero: "Voto 738-2023", organo: S2, fecha: "31-03-2023", tema: "Prescripción que vence en el cierre", criterio: "El año de prescripción se cumplía el 03-01-2018, durante el cierre; la demanda presentada el primer día hábil siguiente estaba en plazo (Código Civil, art. 16).", href: NEXUS("sen-1-0005-1157219") },
    { numero: "Voto 115-2025", organo: "Tribunal de Casación Contencioso-Administrativo", fecha: "18-09-2025", tema: "Año del artículo 39 CPCA", criterio: "El año para demandar se cuenta de fecha a fecha; si vence en día inhábil, se prorroga al día hábil siguiente.", href: NEXUS("sen-1-1011-1342971") },
    { numero: "Voto 283-2020", organo: "Tribunal de Apelación Contencioso Administrativo", fecha: "22-05-2020", tema: "Plazo semestral", criterio: "No se suman al plazo semestral de la caducidad del proceso un feriado ni los días del cierre 2019-2020: se cuenta de fecha a fecha.", href: NEXUS("sen-1-0034-1051083") },
    { numero: "Resolución 24-2025", organo: "Tribunal Contencioso Administrativo (juez tramitador)", fecha: "07-01-2025", tema: "Acto notificado en el cierre", criterio: "Un acto notificado el 26-12-2019, durante el cierre, se tuvo por notificado el día hábil siguiente al cierre (Ley 8687, art. 38) y el año del art. 39 CPCA corrió desde el día posterior.", href: NEXUS("sen-1-0034-1277420") },
    { numero: "Voto 6009-2026", organo: "Tribunal Contencioso Administrativo", fecha: "28-08-2026", tema: "Cierre del Gobierno", criterio: "Excluye de la caducidad de un procedimiento administrativo los días del cierre colectivo del Gobierno del 23-12-2019 al 06-01-2020.", href: NEXUS("sen-1-0034-1424302") },
    { numero: "Voto 147-2024", organo: "Tribunal Segundo de Apelación Civil, Sección Primera", fecha: "14-03-2024", tema: "Día hábil previo al cierre", criterio: "El 22-12-2023 contó como primer día del plazo de apelación y el 08-01-2024 como segundo; el cierre inhabilitó del 25-12-2023 al 07-01-2024.", href: NEXUS("sen-1-0034-1232057") },
    { numero: "Voto 379-2024", organo: "Tribunal de Apelación de Trabajo", fecha: "31-05-2024", tema: "Límite de la prórroga", criterio: "Si el último día del plazo anual de prescripción es hábil, no se prorroga.", href: NEXUS("sen-1-0034-1248325") },
    { numero: "Voto 348-2024", organo: "Tribunal de Apelación Civil y Trabajo de Heredia", fecha: "13-09-2024", tema: "Caducidad de fondo en días", criterio: "La caducidad de treinta días del art. 32 del Código de Trabajo incluye los días inhábiles, también los del cierre colectivo.", href: NEXUS("sen-1-0034-1250268") },
    { numero: "Voto 516-2022", organo: "Tribunal de Apelación Civil y Trabajo de Alajuela", fecha: "21-06-2022", tema: "La prescripción no se suspende", criterio: "Rechaza que la prescripción se suspendiera por el cierre de fin de año: el acreedor pudo interrumpirla con requerimientos extrajudiciales.", href: NEXUS("sen-1-0034-1101650") },
    { numero: "Voto 459-2025", organo: "Tribunal de Familia (violencia doméstica)", fecha: "13-08-2025", tema: "Apertura efectiva", criterio: "En los juzgados que laboran en apertura efectiva durante el cierre sí corren los plazos para apelar.", href: NEXUS("sen-1-0034-1323403") },
    { numero: "Voto 159-2026", organo: "Tribunal de Familia (violencia doméstica)", fecha: "08-04-2026", tema: "Apertura efectiva", criterio: "El 1 y el 2 de enero de 2026 fueron hábiles en materia de violencia doméstica, porque esos despachos trabajaron en apertura efectiva.", href: NEXUS("sen-1-0034-1380470") },
    { numero: "Voto 1449-2026", organo: "Juzgado Especializado de Apelación de Pensiones Alimentarias", fecha: "14-08-2026", tema: "Apertura efectiva", criterio: "Al hacerse apertura efectiva, los plazos judiciales no se suspenden durante el cierre.", href: NEXUS("sen-1-0034-1424804") },
    { numero: "Voto 16-2024", organo: "Tribunal de Apelación de Sentencia Penal Juvenil", fecha: "01-02-2024", tema: "Apertura efectiva", criterio: "Por mayoría, los días del cierre no se excluyen respecto de los despachos penales juveniles que trabajaron; con voto salvado.", href: NEXUS("sen-1-0034-1211342") },
    { numero: "Voto 1537-2015", organo: "Sala Tercera", fecha: "27-11-2015", tema: "Flagrancia", criterio: "Unifica el plazo para recurrir en flagrancia: quince días hábiles, excluidos sábados, domingos, asuetos, feriados y cierres colectivos.", href: NEXUS("sen-1-0034-654908") },
    { numero: "Voto 764-2019", organo: "Tribunal de Apelación de Sentencia Penal de San Ramón", fecha: "03-10-2019", tema: "Flagrancia", criterio: "Los días del cierre no se computan para impugnar aunque el Tribunal de Flagrancia haya trabajado.", href: NEXUS("sen-1-0034-939854") },
  ],
  otros: [
    {
      titulo: "Poder Judicial: acuerdos, circulares y avisos",
      items: [
        { titulo: "Consejo Superior, sesión 70-2026, artículo XXII", detalle: "20-08-2026: períodos de cierre colectivo 2026/2027, con exclusión del cierre de julio de 2027", href: NEXUS("act-1-0003-9128-22") },
        { titulo: "Circular 159-2026 de la Secretaría General de la Corte", detalle: "08-09-2026: cierre del 21-12-2026 al 01-01-2027 y en Semana Santa 2027", href: NEXUS("avi-1-0003-15783") },
        { titulo: "Boletín Judicial 179 y 180", detalle: "23 y 24-09-2026: publicación de la Circular 159-2026 y su reproducción por error en el original", href: NEXUS("avi-1-0155-15798") },
        { titulo: "Aviso 17-2026 de la Secretaría General de la Corte", detalle: "09-11-2026: lineamientos de apertura efectiva para el cierre 2026/2027 y Semana Santa 2027 (Consejo Superior, sesión 93-2026, artículo LII)", href: NEXUS("avi-1-0003-15894") },
        { titulo: "Oficinas que atenderán la apertura efectiva 2026-2027", detalle: "Listas oficiales de la Dirección de Planificación, ámbito jurisdiccional y auxiliar de justicia", href: "https://secretariacorte.poder-judicial.go.cr/index.php/oficinas-que-atenderan-la-apertura-efectiva" },
        { titulo: "Consejo Superior, sesión 92-2019, artículo XXXVIII", detalle: "22-10-2019: ante una consulta sobre plazos en el cierre, remite a los lineamientos de apertura efectiva", href: NEXUS("act-1-0003-3894-38") },
        { titulo: "Consejo Superior, sesión 32-2020, artículo XXVIII", detalle: "02-04-2020: misma remisión para una consulta sobre Semana Santa", href: NEXUS("act-1-0003-3998-28") },
      ],
    },
    {
      titulo: "Administración Pública",
      items: [
        { titulo: "Contraloría General de la República, R-DCA-986-2016", detalle: "09-12-2016: los días de asueto son inhábiles para el cómputo de los plazos de los particulares (art. 256 LGAP)" },
        { titulo: "Directriz 053-PLAN-MTSS", detalle: "Alcance 154 a La Gaceta 226 del 02-12-2025: vacaciones colectivas de fin de año 2025 en la Administración Central y Descentralizada", href: "https://www.imprentanacional.go.cr/pub/2025/12/02/ALCA154_02_12_2025.pdf" },
        { titulo: "Contraloría General de la República, notificación de un procedimiento administrativo", detalle: "Alcance 150 a La Gaceta del 12-11-2026: documentos electrónicos presentados en vacaciones colectivas se tienen por recibidos el día hábil siguiente", href: "https://www.imprentanacional.go.cr/pub/2026/11/12/ALCA150_12_11_2026.pdf" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia, acuerdos, circulares y avisos: Nexus del Poder Judicial. Listas de apertura efectiva: Secretaría General de la Corte. Directrices: La Gaceta (Imprenta Nacional). Cotejo de fechas y de la directriz del Poder Ejecutivo para diciembre de 2026, todavía sin publicar, al 18 de noviembre de 2026.",
};
