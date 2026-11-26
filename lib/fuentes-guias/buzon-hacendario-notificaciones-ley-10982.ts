import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const SIL = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Reformas legales para la implementación del proyecto de Hacienda Digital (Sistema TRIBU-CR)",
      detalle: "Ley N.° 10982, aprobada el 12-10-2026 y sancionada el 22-10-2026; reforma los arts. 134 y 137 del Código Tributario, le adiciona el Transitorio XII, deroga el art. 137 bis y reforma las Leyes 7092 y 7509. Rige desde el 1 de enero siguiente a su publicación",
      href: SINALEVI(108307, 153096),
    },
    {
      titulo: "Ley N.° 10982 en La Gaceta",
      detalle: "Alcance N.° 153 a La Gaceta N.° 218, 17 de noviembre de 2026, págs. 13 a 18 (Imprenta Nacional)",
      href: "https://www.imprentanacional.go.cr/pub/2026/11/17/ALCA153_17_11_2026.pdf",
    },
    {
      titulo: "Código de Normas y Procedimientos Tributarios",
      detalle: "Ley N.° 4755; arts. 10 (cómputo de plazos), 43 (pagos en exceso), 134, 137 y 137 bis en el texto de la Ley 9416 de 2016 (comparación), 139 (fecha de notificación), 145 (revocatoria), 146 y 156 (apelación ante el Tribunal Fiscal Administrativo) y 150 (procedimiento sancionador)",
      href: SINALEVI(6530, 148766),
    },
    {
      titulo: "Reglamento de Procedimiento Tributario",
      detalle: "Decreto Ejecutivo N.° 38277-H; arts. 91 (notificación del inicio), 96 (quinto día hábil en el buzón), 97 (medios señalados y tres intentos) y 98 (buzón permanente), según el Decreto 41330 de 2018",
      href: SINALEVI(76926, 152753),
    },
    {
      titulo: "Resolución N.° MH-DGT-RES-0037-2025 de la Dirección General de Tributación",
      detalle: "22-07-2025, trámites del Registro Único Tributario; art. 21 (definición de buzón electrónico) y art. 22 (notificación en el buzón si el obligado lo señaló como medio)",
      href: SINALEVI(105160, 147907),
    },
    {
      titulo: "Ley de Notificaciones Judiciales",
      detalle: "Ley N.° 8687; arts. 11 (notificación automática) y 38 (notificación al día hábil siguiente de la transmisión), por comparación; el Transitorio XII del Código Tributario la aplica a las demás administraciones tributarias durante 36 meses",
      href: SINALEVI(64786, 143667),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2016-015712", organo: SC, fecha: "27-10-2016", tema: "Medios electrónicos obligatorios y brecha digital", criterio: "En la consulta del proyecto que fue la Ley 9416, advierte que la Administración debe considerar la cobertura de la tecnología en el país, de modo que la brecha digital no se convierta en causa de imposible cumplimiento con consecuencias sancionatorias.", href: NEXUS("sen-1-0007-687092") },
    { numero: "Voto 2020-001358", organo: SC, fecha: "24-01-2020", tema: "Trámites presenciales y electrónicos", criterio: "Ordena a la SUGEF admitir gestiones con firma autográfica y en forma física; considera idóneo que convivan la atención presencial y la electrónica, a escogencia de las personas.", href: NEXUS("sen-1-0007-957791") },
    { numero: "Voto 2025-010334", organo: SC, fecha: "04-04-2025", tema: "Notificación en el medio registrado", criterio: "Tuvo por probado que Hacienda notificó un requerimiento de pago en el medio que el contribuyente registró; la procedencia del embargo posterior es un asunto de legalidad ajeno al amparo.", href: NEXUS("sen-1-0007-1303985") },
    { numero: "Voto 2025-034561", organo: SC, fecha: "21-10-2025", tema: "Diseño de TRIBU-CR", criterio: "Rechaza el amparo contra un bloqueo del sistema TRIBU-CR: si existe un mal diseño técnico se discute ante Hacienda o en la vía ordinaria (con voto salvado).", href: NEXUS("sen-1-0007-1342612") },
    { numero: "Voto 2025-042124", organo: SC, fecha: "19-12-2025", tema: "Obligatoriedad de TRIBU-CR", criterio: "Declara sin lugar el amparo contra el uso obligatorio de TRIBU-CR, porque se mantuvieron medios de pago y atención presencial, telefónica y por correo, también para personas adultas mayores.", href: NEXUS("sen-1-0007-1358480") },
    { numero: "Voto 2026-015358", organo: SC, fecha: "30-04-2026", tema: "Notificación en el buzón de TRIBU-CR", criterio: "Declara sin lugar un amparo; tiene por acreditado que una resolución sobre una solicitud hecha en TRIBU-CR se notificó en el buzón electrónico de la gestionante.", href: NEXUS("sen-1-0007-1391709") },
    { numero: "Sentencia 2025-004092", organo: TCA, fecha: "30-04-2025", tema: "Notificaciones en el procedimiento tributario", criterio: "Con el texto anterior del art. 134, la Ley de Notificaciones Judiciales solo se aplica en caso de laguna; sin medio señalado, valen las notificaciones posteriores en el domicilio fiscal, y el correo del contribuyente pidiendo prórroga mostraba que conocía el acto.", href: NEXUS("sen-1-0034-1331458") },
  ],
  procuraduria: [
    { titulo: "Opinión jurídica OJ-018-2016", detalle: "07-03-2016, sobre el proyecto que fue la Ley 9416: el quinto día hábil buscaba no cargar al contribuyente con revisar el buzón a diario; la obligatoriedad quedaba sujeta a un sistema razonable de alertas", href: PGR(19283) },
    { titulo: "Opinión jurídica OJ-139-2020", detalle: "17-09-2020, sobre el proyecto 22.005: por la brecha digital, no procede obligar a las personas a usar un correo electrónico para recibir notificaciones", href: PGR(22318) },
  ],
  otros: [
    {
      titulo: "Asamblea Legislativa: expediente 25.093",
      items: [
        { titulo: "Proyecto de ley del Poder Ejecutivo", detalle: "Presentado el 21-07-2025 y publicado en el Alcance 93 a La Gaceta 137 del 24-07-2025", href: SIL },
        { titulo: "Dictamen de la Comisión Permanente de Asuntos Hacendarios", detalle: "26-11-2025; la moción de fondo 2 agregó la referencia a la Ley 8968 y a los arts. 39 y 41 de la Constitución", href: SIL },
        { titulo: "Departamento de Estudios, Referencias y Servicios Técnicos, informe AL-DEST-IJU-415-2025", detalle: "02-12-2025: recomendó aclarar la regla de la brecha digital e incluirla entre las excepciones del art. 137", href: SIL },
        { titulo: "Ficha de trámite del expediente 25.093", detalle: "Primer debate el 06-10-2026, segundo debate el 12-10-2026 y publicación el 17-11-2026", href: SIL },
      ],
    },
  ],
  pie: "Ley 10982: texto publicado en el Alcance N.° 153 a La Gaceta N.° 218 del 17-11-2026. Texto anterior del Código Tributario, reglamento y resolución de la Dirección General de Tributación: SINALEVI. Expediente legislativo: documentos descargados del SIL. Jurisprudencia: Nexus del Poder Judicial; pronunciamientos de la Procuraduría: SINALEVI. Cotejo al 26 de noviembre de 2026.",
};
