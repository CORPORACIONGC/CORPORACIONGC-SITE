import type { FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle: "Arts. 48 (ofertas en consorcio y grupos de interés económico), 49 (subcontratación y participación única), 88 y 119, incisos d), h) y q); texto vigente con reformas hasta la Ley 10971 de 2026",
      href: SINALEVI(94469, 152662),
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle: "Arts. 77, 94, 110, 125 a 135; arts. 133 a 135 reformados por el Decreto 45782 de 2026",
      href: SINALEVI(98344, 151216),
    },
    {
      titulo: "Reglamento sobre límites a las operaciones activas directas e indirectas de una entidad supervisada (Acuerdo SUGEF 4-22)",
      detalle: "Arts. 18 a 20: relaciones financiera, administrativa y patrimonial significativas, que la Contraloría aplica para identificar el grupo de interés económico; cotejado con la versión 5 de la SUGEF (25-06-2026)",
      href: SINALEVI(98600, 134170),
    },
    {
      titulo: "Ley para el fomento de la competitividad de la PYME mediante el desarrollo de consorcios (Ley 9576)",
      detalle: "Consorcios PYME, a los que remite el art. 77 del Reglamento",
      href: SINALEVI(86880, 112937),
    },
  ],
  jurisprudencia: [],
  contraloria: [
    { numero: "R-DCP-SICOP-00378-2024", organo: DCP, fecha: "14-03-2024", tema: "Dos ofertas del mismo grupo", criterio: "Basta una relación significativa del Acuerdo SUGEF 4-22 para configurar el grupo; si dos empresas del grupo ofertan en el mismo concurso, se excluyen ambas, aunque una ya estuviera excluida. Anula la adjudicación.", href: CGR(2024, "2024006198") },
    { numero: "R-DCP-SICOP-00414-2024", organo: DCP, fecha: "21-03-2024", tema: "Experiencia de sociedades hermanas", criterio: "Acepta como propia del oferente la experiencia de sociedades de su grupo, probado con prueba accionaria y dictamen de auditoría; rechaza que un consorcio cambie después de ofertar qué miembro acredita la capacidad financiera.", href: CGR(2024, "2024006556") },
    { numero: "R-DCP-SICOP-00716-2024", organo: DCP, fecha: "23-05-2024", tema: "Prueba registral del grupo", criterio: "Un apoderado generalísimo común configura relación administrativa significativa; el cambio de representantes no inscrito a la apertura de ofertas no surte efecto frente a terceros.", href: CGR(2024, "2024010288") },
    { numero: "R-DCP-SICOP-00722-2024", organo: DCP, fecha: "24-05-2024", tema: "Casa matriz y experiencia del grupo", criterio: "No es necesario que la casa matriz o la holding oferte directamente o en consorcio si se acredita el grupo; ordena eliminar la restricción del pliego por falta de justificación.", href: CGR(2024, "2024010292") },
    { numero: "R-DCP-SICOP-01017-2024", organo: DCP, fecha: "11-07-2024", tema: "Título habilitante intransferible", criterio: "El grupo no requiere declaratoria de otra entidad, pero el título habilitante de SUTEL de una empresa no se atribuye al grupo; la oferente sería una mera colocadora de la oferta.", href: CGR(2024, "2024013675") },
    { numero: "R-DCP-SICOP-01415-2024", organo: DCP, fecha: "12-09-2024", tema: "Experiencia en consorcio", criterio: "Si el pliego no regula la experiencia consorcial, basta que uno de los miembros la tenga (art. 127 del Reglamento).", href: CGR(2024, "2024017489") },
    { numero: "R-DCP-SICOP-00295-2025", organo: DCP, fecha: "19-02-2025", tema: "Experiencia del subcontratista", criterio: "El oferente no cumple un requisito de experiencia con la del subcontratista; si la Administración quiere que un tercero ejecute labores especializadas, debe fijar requisitos para el subcontratista.", href: CGR(2025, "2025003318") },
    { numero: "R-DCP-SICOP-00437-2025", organo: DCP, fecha: "13-03-2025", tema: "Retiro de una oferta", criterio: "Retirar la oferta de una de las empresas del grupo después de evaluadas las ofertas no subsana la infracción a la participación única.", href: CGR(2025, "2025007991") },
    { numero: "R-DCP-SICOP-00930-2025", organo: DCP, fecha: "29-05-2025", tema: "Finalidad de la oferta única", criterio: "La restricción busca impedir la evasión de sanciones, la corrupción y las conductas desleales o colusorias entre empresas del grupo.", href: CGR(2025, "2025012267") },
    { numero: "R-DCP-SICOP-00932-2025", organo: DCP, fecha: "29-05-2025", tema: "Acuerdo consorcial vinculante", criterio: "Si el acuerdo asigna la experiencia a un integrante, no vale la experiencia de otro; anula la adjudicación en las partidas afectadas.", href: CGR(2025, "2025012268") },
    { numero: "R-DCP-SICOP-01252-2025", organo: DCP, fecha: "08-07-2025", tema: "Partidas distintas", criterio: "No infringe el art. 126 del Reglamento que empresas del mismo grupo oferten en partidas diferentes.", href: CGR(2025, "2025014774") },
    { numero: "R-DCP-SICOP-01737-2025", organo: DCP, fecha: "17-09-2025", tema: "Líneas distintas", criterio: "Una persona física y su sociedad que ofertan en líneas distintas no violan la participación única; sí lo harían en las mismas líneas.", href: CGR(2025, "2025020165") },
    { numero: "R-DCP-SICOP-02155-2025", organo: DCP, fecha: "14-11-2025", tema: "Prueba insuficiente del grupo", criterio: "Una presidencia común es un indicio; sin prueba de control accionario o de dirección no se tiene por acreditado el grupo ni la experiencia invocada.", href: CGR(2025, "2025026605") },
    { numero: "R-DCP-SICOP-00414-2026", organo: DCP, fecha: "09-03-2026", tema: "Subsanación del acuerdo consorcial", criterio: "Procede subsanar el acuerdo consorcial si no transgrede la igualdad ni manipula la voluntad plasmada con la oferta.", href: CGR(2026, "2026003629") },
    { numero: "R-DCP-SICOP-00966-2026", organo: DCP, fecha: "05-06-2026", tema: "Pliego que exige consorcio", criterio: "Con motivación técnica en el expediente, el pliego puede aceptar la experiencia de subsidiarias o casas matrices solo si participan en consorcio.", href: CGR(2026, "2026008697") },
    { numero: "R-DCA-SICOP-01182-2023", organo: "CGR, División de Contratación Administrativa", fecha: "03-10-2023", tema: "Regular la experiencia del grupo en el pliego", criterio: "Rechaza la objeción por falta de fundamentación, pero pide a la Administración valorar incluir en el pliego reglas sobre la experiencia de empresas del mismo grupo.", href: CGR(2023, "2023016336") },
  ],
  pie: "Textos de la Ley 9986 (versión 15 del SINALEVI, de setiembre de 2026) y de su Reglamento (versión 5, con el Decreto 45782) cotejados con la base normativa local y el SINALEVI; Acuerdo SUGEF 4-22 cotejado con su versión 5. Resoluciones de la Contraloría leídas en su repositorio cgrfiles.cgr.go.cr; la fecha es la de la resolución en SICOP. Corte: 24 de noviembre de 2026.",
};
