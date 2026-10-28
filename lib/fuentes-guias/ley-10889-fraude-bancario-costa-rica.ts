import { NEXUS, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Protección a las personas consumidoras en la custodia de su dinero que administra cualquier entidad financiera en Costa Rica, ya sea pública o privada, autorizada para este fin",
      detalle: "Ley N.° 10889 de 23-03-2026, Alcance 40 a La Gaceta N.° 73 de 22-04-2026, arts. 1 a 15 y transitorios I a III",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=106861&param2=150731&param3=1",
    },
    {
      titulo: "Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor",
      detalle: "Ley N.° 7472, arts. 35 (reformado por el art. 1 de la Ley 10889), 46, 47, 53 y 56",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, art. 298, inciso adicionado por el art. 6 de la Ley 10889 (inversión de la carga de la prueba)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Código Procesal Civil",
      detalle: "Ley N.° 9342, art. 41.1, inciso 3 adicionado por el art. 7 de la Ley 10889",
    },
    {
      titulo: "Reglamento sobre aspectos mínimos de control para prevenir y mitigar estafas informáticas en perjuicio de los usuarios financieros",
      detalle: "Acuerdo SUGEF 5-26, resolución SGF-RES-0036-2026 de 11-08-2026, Alcance 122 a La Gaceta N.° 172 de 11-09-2026, arts. 6 a 18 y Anexo 1",
      href: "https://www.imprentanacional.go.cr/pub/2026/09/11/ALCA122_11_09_2026.pdf",
    },
  ],
  jurisprudencia: [
    { numero: "Sentencia 300-F-S1-2009", organo: S1, fecha: "26-03-2009", tema: "Banca por internet y responsabilidad objetiva", criterio: "Encuadró la relación entre el banco y su cliente como relación de consumo, aplicó el riesgo creado del art. 35 de la Ley 7472 con la prueba de la eximente a cargo del banco y trató el mecanismo de identificación como parte del servicio.", href: NEXUS("sen-1-0034-442609"), gc: true },
    { numero: "Sentencia 225-F-S1-2023", organo: S1, fecha: "16-02-2023", tema: "Riesgo interno y factor externo", criterio: "La responsabilidad objetiva opera frente a un riesgo interno de la empresa y queda excluida ante un factor externo, salvo que la entidad no tome las medidas adecuadas frente a una amenaza conocida.", href: NEXUS("ext-1-0004-330159") },
    { numero: "Sentencia 893-F-S1-2024", organo: S1, fecha: "04-07-2024", tema: "Culpa de la víctima en el consumo", criterio: "La culpa de la víctima opera en las relaciones de consumo porque la Ley 7472 remite a la LGAP; sin lugar el recurso del cliente en un caso de phishing telefónico.", href: NEXUS("sen-1-0004-1239936") },
    { numero: "Sentencia 1538-F-S1-2024", organo: S1, fecha: "24-10-2024", tema: "Seguridad de cada transacción", criterio: "El banco debía demostrar las comprobaciones de seguridad de cada una de las transacciones; confirma la condena y la anulación del oficio que rechazó el reclamo.", href: NEXUS("sen-1-0004-1258806") },
    { numero: "Sentencia 781-F-S1-2025", organo: S1, fecha: "02-05-2025", tema: "Examen del caso concreto", criterio: "La Sala reconoce que, con su cambio de integración, atiende al análisis del caso concreto y no aplica de forma tajante la responsabilidad objetiva en los contratos de consumo.", href: NEXUS("ext-1-0004-390815") },
    { numero: "Sentencia 1299-F-S1-2025", organo: S1, fecha: "18-09-2025", tema: "Métodos de autenticación", criterio: "Las formas de autenticación pactadas en contratos de adhesión conllevan riesgos que asume la entidad; rechazo de plano del recurso del banco.", href: NEXUS("sen-1-0004-1341557") },
    { numero: "Sentencia 1701-F-S1-2025", organo: S1, fecha: "18-11-2025", tema: "Bitácoras y contraseñas de un solo uso", criterio: "Sin registros que reconstruyan la sesión y el uso de las contraseñas de un solo uso no puede concluirse que el acceso fue legítimo; el tercero que usa el canal del banco no es ajeno al servicio.", href: NEXUS("sen-1-0004-1360738") },
    { numero: "Sentencia 789-F-S1-2026", organo: S1, fecha: "04-06-2026", tema: "Alertas y culpa de la víctima", criterio: "Acoge la culpa de la víctima contactada por WhatsApp, y reprocha al banco enviar alertas de transacciones solo a los clientes inscritos.", href: NEXUS("sen-1-0004-1401525") },
    { numero: "Sentencia 1055-F-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Ingeniería social, hechos de 2020", criterio: "Casa el reparto del daño al 50 % y declara sin lugar la demanda por culpa de la víctima, que digitó su clave en un enlace y no llamó al banco tras el aviso de matrícula de cuentas.", href: NEXUS("sen-1-0004-1416787") },
    { numero: "Sentencia 4198-2026", organo: TCA, fecha: "24-06-2026", tema: "Falta de bloqueo", criterio: "Condena al banco al reintegro y anula las resoluciones que rechazaron el reclamo: supo del fraude en la sucursal y dejó abierto el canal digital. Primera resolución que invoca la Ley 10889; sin firmeza que conste.", href: NEXUS("sen-1-0034-1410450") },
    { numero: "Resolución 2026-092609", organo: SC, fecha: "28-05-2026", tema: "Curso de la acción contra la Ley 10889", criterio: "Da curso a la acción de la Asociación Bancaria Costarricense contra los arts. 3, 5 y 8 (exp. 26-017324-0007-CO); en la acción directa por intereses corporativos no opera el efecto suspensivo de la interposición.", href: NEXUS("sen-1-0007-1398616") },
    { numero: "Voto 2026-023067", organo: SC, fecha: "24-06-2026", tema: "Gestión de la Sugef", criterio: "Declara no ha lugar la gestión de la Sugef: la resolución de curso no suspende la vigencia de la normativa impugnada, y qué actuaciones se ven alcanzadas corresponde a la legalidad ordinaria.", href: NEXUS("sen-1-0007-1403931") },
    { numero: "Voto 2026-023171", organo: SC, fecha: "24-06-2026", tema: "Acumulación", criterio: "Acumula la acción de la Federación de Cooperativas de Ahorro y Crédito, que alega que el art. 3 b) elimina la culpa de la víctima como eximente y que el art. 5 es una indemnización punitiva.", href: NEXUS("sen-1-0007-1403933") },
    { numero: "Voto 2026-024647", organo: SC, fecha: "01-07-2026", tema: "Acumulación", criterio: "Acumula la acción de la Cámara de Bancos e Instituciones Financieras contra la totalidad de la ley por vicio de procedimiento.", href: NEXUS("sen-1-0007-1408867") },
    { numero: "Voto 2026-022861", organo: SC, fecha: "19-06-2026", tema: "Amparo improcedente", criterio: "Rechazo de plano: el conflicto con el banco por un reclamo pendiente es de legalidad ordinaria.", href: NEXUS("sen-1-0007-1407045") },
    { numero: "Voto 2026-022981", organo: SC, fecha: "19-06-2026", tema: "Amparo improcedente", criterio: "Rechazo de plano: los cargos de tarjeta discutidos son un diferendo contractual de legalidad ordinaria.", href: NEXUS("sen-1-0007-1407151") },
    { numero: "Voto 2026-024623", organo: SC, fecha: "30-06-2026", tema: "Amparo improcedente", criterio: "Rechazo de plano de un amparo por un fraude de abril de 2026 y la negativa del banco a remitir el expediente a la Sugef; lo mismo respecto de lo resuelto por la Sugef.", href: NEXUS("sen-1-0007-1411663") },
    { numero: "Voto 2026-034533", organo: SC, fecha: "08-09-2026", tema: "Amparo improcedente", criterio: "Rechazo de plano de un amparo por una sustracción por SINPE y un reclamo cerrado sin investigación interna.", href: NEXUS("sen-1-0007-1427520") },
  ],
  procuraduria: [
    { titulo: "Informe a la Sala Constitucional, exp. 26-017324-0007-CO", detalle: "15-06-2026, recomienda declarar sin lugar por el fondo la acción de la Asociación Bancaria Costarricense" },
  ],
  otros: [
    {
      titulo: "Sugef",
      items: [
        { titulo: "Circular SGF-OFC-0740-2026", detalle: "Sistema TSA como único canal para recibir las resoluciones denegatorias de la Ley 10889" },
        { titulo: "Circular SGF-OFC-0831-2026", detalle: "04-06-2026, suspensión del acto razonado de validación de las denegatorias" },
        { titulo: "Circular SGF-OFC-1146-2026", detalle: "04-09-2026, alcance de la suspensión; la Ley 10889 sigue vigente" },
      ],
    },
    {
      titulo: "Salario base",
      items: [
        { titulo: "Consejo Superior del Poder Judicial", detalle: "Sesión 113-2025 de 16-12-2025, art. LXV: salario base de ¢462.200 a partir del 1 de enero de 2026 (Ley N.° 7337)" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 23.908", detalle: "Proyecto de ley, La Gaceta N.° 186 de 10-10-2023, pp. 2-7 (exposición de motivos)" },
        { titulo: "Comisión Permanente Ordinaria de Asuntos Jurídicos", detalle: "Dictamen afirmativo de mayoría con texto sustitutivo, 29-10-2024" },
        { titulo: "Departamento de Servicios Técnicos", detalle: "Informe AL-DEST-IJU-097-2025, 13-03-2025" },
        { titulo: "Comisión Legislativa Plena Tercera", detalle: "Sesiones n.º 7 (22-10-2025, moción de texto sustitutivo 27-7), n.º 15 (25-02-2026, mociones 5-15 y 6-15 y primer debate) y n.º 16 (04-03-2026, segundo debate)" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026; Acuerdo SUGEF 5-26 cotejado con el Alcance 122 a La Gaceta. Jurisprudencia: Nexus del Poder Judicial. Expediente legislativo: SIL de la Asamblea Legislativa. Cotejo al 28 de octubre de 2026.",
};
