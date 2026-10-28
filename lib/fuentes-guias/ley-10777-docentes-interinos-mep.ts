import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S2 = "Sala Segunda";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley para mejorar la efectividad del proceso de nombramiento en el Ministerio de Educación Pública",
      detalle: "Ley N.° 10777 de 29-10-2025, Alcance 148 a La Gaceta N.° 216 de 17-11-2025; rige desde su publicación; sin reformas (arts. 1 y 2, Transitorios I y II)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=105711&param2=148454&param3=1",
    },
    {
      titulo: "Estatuto de Servicio Civil",
      detalle: "Ley N.° 1581 de 30-05-1953, Título II (Carrera Docente) adicionado por la Ley N.° 4565 de 04-05-1970; arts. 81, 100, 101, 101 bis y 104 bis",
    },
    {
      titulo: "Ley Marco de Empleo Público",
      detalle: "Ley N.° 10159 de 08-03-2022, Alcance 50 a La Gaceta N.° 46 de 09-03-2022; arts. 5 b) y 26 y Transitorio IX",
    },
    {
      titulo: "Reglamento a la Ley Marco de Empleo Público",
      detalle: "Decreto Ejecutivo N.° 43952-PLAN, Alcance 39 a La Gaceta N.° 45 de 10-03-2023; arts. 5.4 y 5.9",
    },
    {
      titulo: "Reglamento del Estatuto de Servicio Civil",
      detalle: "Decreto Ejecutivo N.° 21 de 1954, art. 11 (reformado por el Decreto N.° 39066 de 2015)",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2025-023913", organo: SC, fecha: "30-07-2025", tema: "Transitorio IX en el MEP", criterio: "Rechazó de plano una acción contra la interpretación del MEP sobre el Transitorio IX de la Ley 10159: su interpretación y aplicación es un conflicto de legalidad ordinaria.", href: NEXUS("sen-1-0007-1324489") },
    { numero: "Voto 2026-008917", organo: SC, fecha: "11-03-2026", tema: "Falta de aplicación de la ley", criterio: "Rechazó de plano un amparo por falta de aplicación de la Ley 10777 y las coadyuvancias de 24 funcionarios del MEP con gestiones sin resolver.", href: NEXUS("sen-1-0007-1377244") },
    { numero: "Voto 2026-009584", organo: SC, fecha: "17-03-2026", tema: "Estabilidad impropia", criterio: "El interino no tiene derecho a ser nombrado en propiedad por el transcurso del tiempo; su estabilidad no se lesiona cuando lo desplaza un propietario, y no corresponde a la Sala decidir desde cuándo se aplica el art. 104 bis.", href: NEXUS("sen-1-0007-1378609") },
    { numero: "Voto 2026-010839", organo: SC, fecha: "24-03-2026", tema: "Legalidad ordinaria", criterio: "Decidir si un docente interino debe ser nombrado en propiedad es un conflicto de mera legalidad; la demora en resolver la gestión se remite a lo contencioso (con voto salvado).", href: NEXUS("sen-1-0007-1375421") },
    { numero: "Voto 2026-014868", organo: SC, fecha: "24-04-2026", tema: "Estudio del art. 104 bis", criterio: "Si procede el estudio y la apertura del procedimiento del art. 104 bis se dirime en la vía común, administrativa o jurisdiccional (con voto salvado).", href: NEXUS("sen-1-0007-1384755") },
    { numero: "Voto 2026-021752", organo: SC, fecha: "12-06-2026", tema: "Respuesta genérica del MEP", criterio: "El amparo no sirve para obligar a resolver el fondo cuando depende de procesos normativos, técnicos o administrativos en desarrollo.", href: NEXUS("sen-1-0007-1406014") },
    { numero: "Voto 2026-022943", organo: SC, fecha: "19-06-2026", tema: "Traslados y nombramientos", criterio: "No corresponde a la Sala valorar el orden de prioridad del MEP entre los nombramientos en propiedad y los traslados.", href: NEXUS("sen-1-0007-1407125") },
    { numero: "Voto 2026-024676", organo: SC, fecha: "01-07-2026", tema: "Acción contra el art. 104 bis", criterio: "Rechazó de plano la acción contra el art. 104 bis y el Transitorio IX de la Ley 10159: el amparo que servía de asunto previo ya había sido rechazado.", href: NEXUS("sen-1-0007-1408869") },
    { numero: "Voto 2026-025606", organo: SC, fecha: "08-07-2026", tema: "Acción contra la Ley 10777", criterio: "Rechazó de plano la acción por falta de autenticación, timbre, legitimación y determinación de las normas impugnadas (con votos salvados).", href: NEXUS("sen-1-0007-1408875") },
    { numero: "Voto 2026-032988", organo: SC, fecha: "27-08-2026", tema: "Situación familiar", criterio: "Declaró sin lugar el amparo: la Sala no puede ordenar el nombramiento en propiedad por la situación particular ni analizar si se cumplen los requisitos.", href: NEXUS("sen-1-0007-1422765") },
    { numero: "Voto 2026-033093", organo: SC, fecha: "27-08-2026", tema: "Traslado por enfermedad grave", criterio: "Declaró con lugar el amparo de una supervisora en propiedad a quien se negó un traslado por enfermedad grave porque los puestos estaban reservados para la Ley 10777; ordenó el nombramiento conforme al dictamen médico en 15 días.", href: NEXUS("sen-1-0007-1422846") },
    { numero: "Voto 2026-034612", organo: SC, fecha: "09-09-2026", tema: "Acción contra el art. 104 bis", criterio: "Rechazó de plano la acción porque el asunto base no estaba en fase de agotamiento de la vía administrativa.", href: NEXUS("sen-1-0007-1425907") },
    { numero: "Voto 2026-035525", organo: SC, fecha: "16-09-2026", tema: "Denegatoria sin razones", criterio: "No corresponde a la Sala determinar si la persona cumple los requisitos para el nombramiento en propiedad ni qué norma se aplica al caso.", href: NEXUS("sen-1-0007-1428430") },
    { numero: "Voto 2013-000385", organo: S2, fecha: "12-04-2013", tema: "Interinato y propiedad", criterio: "El nombramiento interino no es un mecanismo legítimo para acceder a la propiedad de un puesto, sin perjuicio de la estabilidad impropia.", href: NEXUS("sen-1-0034-569011") },
    { numero: "Voto 2025-001956", organo: S2, fecha: "20-06-2025", tema: "Interinato prolongado", criterio: "El interinato prolongado no obliga a nombrar en propiedad, aunque quien ha demostrado idoneidad y cumple los requisitos debe ser tomado en cuenta.", href: NEXUS("sen-1-0034-1334913") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-152-2024", detalle: "22-07-2024, a la Municipalidad de Tibás: naturaleza del Transitorio IX de la Ley 10159 como norma de procesos selectivos excepcionales" },
    { titulo: "Dictamen C-075-2025", detalle: "07-04-2025, al Ministro de Educación Pública: el Tribunal de la Carrera Docente conoce las apelaciones contra lo resuelto por la Dirección de Gestión del Talento Humano sobre el Transitorio IX" },
  ],
  otros: [
    {
      titulo: "Resoluciones de la Dirección General de Servicio Civil",
      items: [
        { titulo: "RES-DGSC-DG-0239-2026", detalle: "12:00 h de 17-07-2026, Alcance 91 a La Gaceta N.° 133 de 17-07-2026: plan institucional del Transitorio I" },
        { titulo: "RES-DGSC-DG-0363-2026", detalle: "11:00 h de 09-10-2026, La Gaceta N.° 195 de 15-10-2026, pp. 60-62: aplicación del art. 104 bis" },
      ],
    },
    {
      titulo: "Otras resoluciones citadas (sin identificador de Nexus localizado)",
      items: [
        { titulo: "Voto 867-91 de la Sala Constitucional", detalle: "03-05-1991: la prolongación indefinida de interinatos lesiona la garantía de inamovilidad" },
        { titulo: "Voto 1275-96 de la Sala Constitucional", detalle: "15-03-1996: causas de remoción del servidor interino" },
        { titulo: "Voto 2010-003153 de la Sala Constitucional", detalle: "12-02-2010: amparo de una docente contra la DGSC y el MEP; el transcurso del tiempo no da la propiedad sin concurso (voto 5025-93)" },
        { titulo: "Voto 2024-010967 de la Sala Constitucional", detalle: "26-04-2024: plan del Transitorio IX de la Ley 10159; voto salvado sobre la participación de terceros en los concursos" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente legislativo n.º 23.592", detalle: "Presentado el 01-03-2023; primer debate 07-10-2025 (39 votos) y segundo debate 09-10-2025 (41 votos) (Sistema de Información Legislativa)" },
        {
          titulo: "Proyecto «Ley para mejorar la efectividad del proceso de nombramientos en el Ministerio de Educación Pública»",
          detalle: "La Gaceta N.° 60 de 31-03-2023, pp. 3-5, con la exposición de motivos",
          href: "https://www.imprentanacional.go.cr/pub/2023/03/31/COMP_31_03_2023.pdf",
        },
        { titulo: "Comisión Permanente Ordinaria de Asuntos Jurídicos", detalle: "Dictamen afirmativo de mayoría con texto sustitutivo, sesión n.º 52 de 23-04-2024; mociones vía art. 137 en las sesiones n.º 40 (30-10-2024) y n.º 66 (11-03-2025)" },
        { titulo: "Departamento de Servicios Técnicos", detalle: "Informe AL-DEST-IJU-359-2024, 31-10-2024" },
        {
          titulo: "Moción de texto sustitutivo del segundo informe de mociones 137",
          detalle: "Aprobada el 11-03-2025: reincorpora el art. 104 bis con el plazo de 3 meses",
          href: "https://www.asamblea.go.cr/glcp/mociones_total/23.592-2-0001.pdf",
        },
        {
          titulo: "Publicación de la Ley 10777",
          detalle: "Alcance 148 a La Gaceta N.° 216 de 17-11-2025",
          href: "https://www.imprentanacional.go.cr/pub/2025/11/17/ALCA148_17_11_2025.pdf",
        },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y La Gaceta, consultados el 28 de octubre de 2026. Antecedentes: Sistema de Información Legislativa e Imprenta Nacional. Jurisprudencia: Nexus del Poder Judicial, con los identificadores de la base de jurisprudencia de la firma; dictámenes de la Procuraduría General de la República. Cotejo al 28 de octubre de 2026.",
};
