import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const ALCANCE_153 = "https://www.imprentanacional.go.cr/pub/2026/11/17/ALCA153_17_11_2026.pdf";
const GACETA_179 = "https://www.imprentanacional.go.cr/pub/2026/09/23/COMP_23_09_2026.pdf";
const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const S2 = "Sala Segunda";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Art. 192 (remoción por despido justificado o por reducción forzosa de servicios)", href: SINALEVI(871, 147492) },
    { titulo: "Ley Marco de Empleo Público (Ley 10159)", detalle: "Arts. 2 (ámbito) y 20 e) (cese por reducción forzosa: 50 %, justificación técnica y pago previo)", href: SINALEVI(96521, 145804) },
    { titulo: "Reglamento a la Ley Marco de Empleo Público (Decreto 43952-PLAN)", detalle: "Art. 24 (indemnización en la reducción forzosa y emisión de procedimientos por MIDEPLAN y la DGSC)", href: SINALEVI(99014, 148331) },
    { titulo: "Circular MIDEPLAN-DM-CIRC-0016-2026", detalle: "28-08-2026, publicada en La Gaceta 179 del 23-09-2026, págs. 5 a 7: disposiciones generales para aplicar el inciso e) del art. 20 de la Ley 10159", href: SINALEVI(107893, 152440) },
    { titulo: "Estatuto de Servicio Civil (Ley 1581)", detalle: "Arts. 37 a), 37 f) (derogado por la Ley 9635) y 47 (falta absoluta de fondos, 60 % y consulta al Tribunal de Servicio Civil)", href: SINALEVI(32708, 148455) },
    { titulo: "Reglamento del Estatuto de Servicio Civil (Decreto 21)", detalle: "Arts. 13 (interinos), 14 (reingreso sin concurso) y 27 b) y c) (terminación con responsabilidad por reducción forzosa)", href: SINALEVI(8975, 135133) },
    { titulo: "Ley de Salarios de la Administración Pública (Ley 2166)", detalle: "Arts. 26 (ámbito), 39 (cesantía con tope de 8 años, con la nota de la Sala Constitucional 8201-2025) y 58 b) (deroga el art. 37 f) del Estatuto); adicionados por la Ley 9635", href: SINALEVI(3672, 147114) },
    { titulo: "Código de Trabajo (Ley 2)", detalle: "Arts. 28 (preaviso), 29 (auxilio de cesantía), 94 (fuero de maternidad), 413 (prescripción), 566 (salarios caídos) y 686 (prohibición de ocupar cargos públicos tras recibir cesantía)", href: SINALEVI(8045, 150791) },
    { titulo: "Código Municipal (Ley 7794)", detalle: "Art. 155 b) (cese con responsabilidad por estudios técnicos y año sin regresar a la municipalidad)", href: SINALEVI(40197, 152716) },
    { titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)", detalle: "Art. 39 (plazo de un año para demandar)", href: SINALEVI(57436, 146091) },
    { titulo: "Ley 10983, Cierre del Ministerio de Gobernación y Policía", detalle: "Alcance 153 a La Gaceta 218 del 17-11-2026; rige desde el 01-05-2027; transitorios I, II, VIII y IX (traslado de plazas y extremos laborales)", href: ALCANCE_153 },
    { titulo: "Ley 10981, Creación del Ministerio de Vivienda y Asentamientos Humanos", detalle: "Alcance 153 a La Gaceta 218 del 17-11-2026; transitorio I (el personal conserva sus puestos)", href: ALCANCE_153 },
  ],
  jurisprudencia: [
    { numero: "Voto 4951-2000", organo: SC, fecha: "27-06-2000", tema: "Estudios técnicos", criterio: "La reducción forzosa es una excepción a la estabilidad que exige estudios técnicos calificados; el cese es legítimo si la nueva estructura no puede dar cabida al funcionario.", href: NEXUS("sen-1-0007-134802") },
    { numero: "Voto 4209-2025", organo: S2, fecha: "19-12-2025", tema: "Puesto dispensable", criterio: "Recoge los votos constitucionales de 2000: el puesto debe ser dispensable e imposible de integrar en la nueva organización, y la reestructuración debe responder a una necesidad real y comprobada.", href: NEXUS("sen-1-0034-1363941") },
    { numero: "Voto 1701-2025", organo: S2, fecha: "04-06-2025", tema: "Sin procedimiento sancionatorio", criterio: "En una reestructuración por situación económica no se aplican las normas del procedimiento sancionatorio, porque no existe sanción.", href: NEXUS("sen-1-0034-1334665") },
    { numero: "Voto 15-1998", organo: S2, fecha: "21-01-1998", tema: "Porcentaje del art. 47", criterio: "El 60 % exige que la reorganización altere al menos esa proporción de puestos; no exige eliminar el 60 % de las plazas.", href: NEXUS("sen-1-0034-24853") },
    { numero: "Voto 8158-2024", organo: TCA, fecha: "12-11-2024", tema: "Porcentaje convencional", criterio: "En la reorganización de la Municipalidad de San José, el 60 % de la convención se cumple si el proceso involucra a ese porcentaje del personal; no se mide sobre las plazas suprimidas.", href: NEXUS("sen-1-0034-1266149") },
    { numero: "Voto 1900-2026", organo: TCA, fecha: "24-03-2026", tema: "Porcentaje convencional", criterio: "El porcentaje exige una afectación directa de las plazas; no cabe equiparar trabajadores afectados con dependencias afectadas. Anula el cese y ordena la reinstalación con salarios caídos con el tope del art. 566 CT.", href: NEXUS("sen-1-0034-1387184") },
    { numero: "Voto 2481-2023", organo: S2, fecha: "14-09-2023", tema: "Falta de fondos", criterio: "Los estudios que evidencian la ausencia de fondos sustentan la reducción; su eventual falsedad se discute en el proceso ordinario.", href: NEXUS("sen-1-0005-1213126") },
    { numero: "Voto 1079-2026", organo: S2, fecha: "26-03-2026", tema: "Falta de fondos", criterio: "Un informe técnico sobre ingresos, gastos y proyecciones de una municipalidad basta como sustento de la supresión del puesto.", href: NEXUS("sen-1-0034-1380203") },
    { numero: "Voto 52-2010", organo: S1, fecha: "06-01-2010", tema: "Consulta al Tribunal de Servicio Civil", criterio: "Confirma la nulidad del cese porque el ministerio debió consultar al Tribunal de Servicio Civil la eliminación del departamento que suprimió la plaza.", href: NEXUS("sen-1-0034-461532") },
    { numero: "Voto 1373-2026", organo: S1, fecha: "10-09-2026", tema: "Debido proceso y estudios", criterio: "La reestructuración exige debido proceso, sin el procedimiento ordinario de la LGAP por servidor; confirma la nulidad porque no se entregaron al servidor los estudios técnicos que pidió.", href: NEXUS("sen-1-0004-1426246") },
    { numero: "Voto 4713-2026", organo: TCA, fecha: "15-07-2026", tema: "Audiencia previa", criterio: "Anula el cese de un servidor de RECOPE por no informarle antes la supresión de la plaza, como exigen los lineamientos de reorganización de MIDEPLAN.", href: NEXUS("sen-1-0034-1410791") },
    { numero: "Voto 1244-2021", organo: SC, fecha: "22-01-2021", tema: "Acceso a los estudios", criterio: "Ampara a un servidor al que no se entregaron los estudios técnicos y financieros de la reestructuración; remite a la legalidad ordinaria la discusión de fondo.", href: NEXUS("sen-1-0007-1016281") },
    { numero: "Voto 28711-2023", organo: SC, fecha: "03-11-2023", tema: "Interinos y supresión", criterio: "El cese de una interina por eliminación de la plaza no lesiona la estabilidad; la objeción a la supresión se plantea en la vía de legalidad.", href: NEXUS("sen-1-0007-1196305") },
    { numero: "Voto 2021-17098", organo: SC, fecha: "31-07-2021", tema: "Consulta del proyecto", criterio: "Consulta legislativa del proyecto de Ley Marco de Empleo Público; no analiza el inciso e) del art. 20.", href: NEXUS("sen-1-0007-1049802") },
    { numero: "Voto 3611-2024", organo: S2, fecha: "13-12-2024", tema: "Art. 37 f) del Estatuto", criterio: "La derogación del art. 37 f) del Estatuto por la Ley 9635 tornó improcedente la indemnización que ese inciso preveía.", href: NEXUS("sen-1-0005-1270884") },
    { numero: "Voto 8201-2025", organo: SC, fecha: "17-03-2025", tema: "Tope de la cesantía", criterio: "Interpreta el art. 39 de la Ley 2166 en el sentido de que la restricción para negociar no se aplica a quienes válidamente pueden celebrar convenciones colectivas.", href: NEXUS("ext-1-0007-380646") },
    { numero: "Voto 1285-2010", organo: S2, fecha: "09-09-2010", tema: "Pago de las prestaciones", criterio: "Cita los votos constitucionales 8232-2000 y 4868-2009: el Estado debe pagar las prestaciones al separar al servidor y liquidar dentro de los dos meses posteriores al cese.", href: NEXUS("sen-1-0034-485692") },
    { numero: "Voto 15256-2012", organo: SC, fecha: "31-10-2012", tema: "Interinos", criterio: "El art. 13 del Reglamento del Estatuto es constitucional si el interino con más de un año ininterrumpido cesado sin causa se equipara al contrato indefinido para la indemnización.", href: NEXUS("sen-1-0007-569834") },
    { numero: "Voto 1333-2015", organo: S2, fecha: "02-12-2015", tema: "Interinos", criterio: "Reconoce preaviso y cesantía a una interina municipal con más de un año, aunque el cese tuvo causa objetiva.", href: NEXUS("sen-1-0034-654775") },
    { numero: "Voto 115-2019", organo: S2, fecha: "06-02-2019", tema: "Fuero sindical", criterio: "La reestructuración debe respetar la libertad sindical; la Administración debe justificar por qué es ineludible suprimir el puesto de una persona sindicalizada.", href: NEXUS("sen-1-0005-910142") },
    { numero: "Voto 867-2026", organo: S2, fecha: "13-03-2026", tema: "Embarazo", criterio: "El cese de una docente interina embarazada por inexistencia de necesidad de servicio no requería gestión ante el Ministerio de Trabajo, por tratarse de una causa objetiva.", href: NEXUS("sen-1-0034-1380141") },
    { numero: "Voto 20385-2026", organo: SC, fecha: "05-06-2026", tema: "Discapacidad", criterio: "Un cese con responsabilidad patronal no exime de informar si se evaluaron los protocolos de protección de las personas con discapacidad.", href: NEXUS("sen-1-0007-1404713") },
    { numero: "Voto 1724-2022", organo: S1, fecha: "26-07-2022", tema: "Competencia", criterio: "La competencia entre la vía laboral y la contenciosa se define por el régimen jurídico aplicable y el contenido de la pretensión.", href: NEXUS("sen-1-0004-1105469") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-022-1991", detalle: "13-02-1991: para el art. 47 del Estatuto basta que la reorganización afecte el 60 % de un departamento, sección u oficina", href: PGR(4229) },
    { titulo: "Dictamen C-086-2019", detalle: "03-04-2019: desde la Ley 9635, cesantía con tope de 8 años (hasta 12 con convención vigente), que prevalece sobre el art. 27 c) del Reglamento del Estatuto", href: PGR(21130) },
    { titulo: "Dictamen C-054-2021", detalle: "25-02-2021: reitera el tope de 8 años para los cesados por reorganización", href: PGR(22597) },
    { titulo: "Dictamen C-097-2024", detalle: "29-05-2024: reitera el C-164-2015; la reorganización sin autorización de MIDEPLAN es absolutamente nula", href: PGR(24421) },
    { titulo: "Dictamen C-229-2024", detalle: "07-10-2024: reitera el tope de 8 años", href: PGR(24655) },
    { titulo: "Dictamen C-158-2026", detalle: "18-09-2026: art. 686 del Código de Trabajo y art. 155 b) del Código Municipal", href: "http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Pronunciamiento/pro_ficha.aspx?Param1=PRD&nDictamen=25573&strTipM=T" },
  ],
  otros: [
    {
      titulo: "Otros documentos",
      items: [
        { titulo: "La Gaceta N.° 179", detalle: "23-09-2026, págs. 5 a 7: publicación de la circular MIDEPLAN-DM-CIRC-0016-2026", href: GACETA_179 },
        { titulo: "Dirección General de Servicio Civil, Asesoría Jurídica, oficio AJ-OF-270-2024", detalle: "21-06-2024: los arts. 47 del Estatuto y 20 de la Ley Marco coexisten (Revista de Jurisprudencia Administrativa N.° 46, págs. 104-106)", href: "https://www.dgsc.go.cr/documentos/resoluciones/Revista%20Jurisprudencia/REVISTA%20JURISPRUDENCIA%20N%2046%20I%20SEM%202024.pdf" },
      ],
    },
  ],
  pie: "Normas cotejadas con SINALEVI y La Gaceta el 18-11-2026; votos leídos en su texto íntegro o en el pasaje citado y enlazados a Nexus. Los votos 8232-2000 y 4868-2009 se citan según su transcripción en el voto 1285-2010 de la Sala Segunda.",
};
