import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S2 = "Sala Segunda";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley Marco de Empleo Público (Ley 10159)",
      detalle: "Art. 21, incisos a), d), h) e i): procedimiento de despido, sanciones menores hasta un mes y recursos en cinco días",
      href: SINALEVI(96521, 145804),
    },
    {
      titulo: "Reglamento a la Ley Marco de Empleo Público (Decreto Ejecutivo 43952-PLAN)",
      detalle: "Revisado: no desarrolla la amonestación ni la suspensión del art. 21 h) de la ley",
      href: SINALEVI(99014, 148331),
    },
    {
      titulo: "Estatuto de Servicio Civil (Ley 1581)",
      detalle: "Arts. 41 y 42 (correcciones disciplinarias de la carrera administrativa); 59, 63, 64 y 66 (faltas, sanciones y recursos de la carrera docente)",
      href: SINALEVI(32708, 148455),
    },
    {
      titulo: "Reglamento del Estatuto de Servicio Civil (Decreto Ejecutivo 21)",
      detalle: "Art. 99, inciso c): un mes para imponer las correcciones disciplinarias",
      href: SINALEVI(8975, 135133),
    },
    {
      titulo: "Código de Trabajo (Ley 2)",
      detalle: "Arts. 68 e) (suspensión de hasta ocho días y audiencia previa), 71, 72, 81 i) y l), 414 (prescripción de un mes), 540 y 542 (proceso sumarísimo)",
      href: SINALEVI(8045, 150791),
    },
    {
      titulo: "Código Municipal (Ley 7794)",
      detalle: "Arts. 157, 158 (escala de sanciones y competencia de jefaturas y alcalde), 159 (apelación ante el tribunal de trabajo, aplicable a las suspensiones) y 160",
      href: SINALEVI(40197, 152716),
    },
    {
      titulo: "Ley General de la Administración Pública (Ley 6227)",
      detalle: "Arts. 211 (responsabilidad disciplinaria y audiencia previa), 213, 308 (procedimiento ordinario para la suspensión), 320 (procedimiento sumario) y 346 (plazo de los recursos)",
      href: SINALEVI(13231, 150737),
    },
    {
      titulo: "Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública (Ley 8422)",
      detalle: "Arts. 39 (suspensión de 15 a 30 días) y 41 (criterios de graduación)",
      href: SINALEVI(53738, 151776),
    },
    {
      titulo: "Ley General de Control Interno (Ley 8292)",
      detalle: "Art. 41: suspensión de ocho a quince días hábiles",
      href: SINALEVI(49185, 150686),
    },
    {
      titulo: "Régimen sancionador de personas servidoras e integrantes de listas de suplentes, elegibles y meritorias del Poder Judicial (Ley 10905)",
      detalle: "Arts. 26, 28, 29 y 231; transitorio VI",
      href: SINALEVI(107272, 151488),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 1997-000563", organo: SC, fecha: "29-01-1997", tema: "Tipicidad disciplinaria", criterio: "El inciso l) del art. 81 del Código de Trabajo es constitucional; en la potestad disciplinaria la tipicidad se respeta, pero no con el rigor de la materia penal.", href: NEXUS("sen-1-0007-82253") },
    { numero: "Voto 2010-011926", organo: SC, fecha: "09-07-2010", tema: "Amonestación escrita sin audiencia", criterio: "La llamada de atención simple no exige procedimiento; la que se envía al expediente personal sí, y la anuló por haberse impuesto tras una audiencia verbal sin antelación.", href: NEXUS("ext-1-0007-134732") },
    { numero: "Voto 2024-016483", organo: SC, fecha: "14-06-2024", tema: "Amparo contra una amonestación", criterio: "Rechaza de plano el amparo contra una amonestación verbal consignada por escrito y remite a la vía laboral o contenciosa; voto salvado del magistrado Rueda Leal.", href: NEXUS("sen-1-0007-1297975") },
    { numero: "Voto 2021-017098", organo: SC, fecha: "31-07-2021", tema: "Ley Marco y Poder Judicial", criterio: "En la consulta del proyecto, los arts. 21 y 22 son inconstitucionales respecto de su aplicación al Poder Judicial y al TSE, por la independencia judicial.", href: NEXUS("sen-1-0007-1049802") },
    { numero: "Voto 2024-003542", organo: S2, fecha: "13-12-2024", tema: "Faltas de mera constatación", criterio: "Aplica el criterio de la Sala Constitucional (voto 14378-2012): para suspensiones de hasta ocho días por faltas de mera constatación no se exige el procedimiento; nota de la magistrada Varela Araya.", href: NEXUS("sen-1-0005-1267232") },
    { numero: "Voto 2019-000492", organo: S2, fecha: "10-04-2019", tema: "Sanción no prevista en el reglamento", criterio: "Confirma la nulidad de una suspensión de quince días hábiles cuando el reglamento autónomo del AyA solo permitía ocho: viola la legalidad y la tipicidad.", href: NEXUS("sen-1-0005-922852") },
    { numero: "Voto 2016-000608", organo: S2, fecha: "15-06-2016", tema: "Proporcionalidad", criterio: "Entre la infracción y la medida disciplinaria debe haber una correlación de entidad o equilibrio.", href: NEXUS("sen-1-0034-669886") },
    { numero: "Voto 2016-001396", organo: S2, fecha: "14-12-2016", tema: "Suspensión desproporcionada", criterio: "Confirma la eliminación de una suspensión de quince días a un policía penitenciario por no avisar a tiempo una ausencia justificada por enfermedad, con reintegro indexado del salario.", href: NEXUS("sen-1-0034-689786") },
    { numero: "Voto 2020-000164", organo: "Tribunal de Casación de lo Contencioso Administrativo", fecha: "17-09-2020", tema: "Tope de la suspensión fijado por reglamento", criterio: "Valida la suspensión de hasta treinta días de la normativa laboral de la CCSS por hostigamiento sexual; el límite de ocho días del art. 68 del Código de Trabajo no se aplica.", href: NEXUS("ext-1-1011-307194") },
    { numero: "Voto 2024-001036", organo: "Tribunal Contencioso Administrativo", fecha: "21-02-2024", tema: "Escala de la carrera docente", criterio: "El tope de quince días del art. 41 del Estatuto no se aplica a los docentes, que se rigen por el Título II (art. 63: suspensión de hasta un mes por falta leve).", href: NEXUS("sen-1-0034-1222988") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-184-2024", detalle: "03-09-2024: la derogación producida por los arts. 21 y 22 de la Ley Marco alcanza solo el procedimiento de despido; para las sanciones menores subsiste el procedimiento especial del Estatuto del Servicio Exterior", href: PGR(24576) },
  ],
  pie: "Textos de la Ley 10159, del Estatuto de Servicio Civil y su reglamento, del Código de Trabajo, del Código Municipal, de la LGAP y de las Leyes 8422, 8292 y 10905 cotejados con sus versiones del SINALEVI. Resoluciones leídas en Nexus del Poder Judicial y dictamen de la Procuraduría en el SINALEVI. Corte: 24 de noviembre de 2026.",
};
