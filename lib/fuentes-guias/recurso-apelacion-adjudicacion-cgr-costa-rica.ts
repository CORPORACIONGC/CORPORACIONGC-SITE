import { NEXUS, type FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const TCA = "Tribunal Contencioso Administrativo";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

const LGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1";
const RLGCP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle:
        "Arts. 50 (subsanación), 86 a 94 (disposiciones generales de los recursos y multas), 97 y 98 (apelación), 100 (perfeccionamiento) y 119 (causales de sanción). Texto vigente, versión 15 del SINALEVI, con reformas hasta la Ley 10971 de 2026",
      href: LGCP,
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle:
        "Arts. 106 (precio inaceptable), 134 (subsanación), 241 a 252 (disposiciones generales) y 259 a 269 (apelación). Texto vigente con la reforma del Decreto 45782",
      href: RLGCP,
    },
    {
      titulo: "Decreto Ejecutivo 45782-H-MIDEPLAN-MICITT",
      detalle: "Reformó, entre otros, los arts. 106 y 134 del Reglamento. Dado el 08-04-2026 y publicado el 26-05-2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107160&param2=151215&param3=1",
    },
    {
      titulo: "Ley de responsabilidad laboral de los contratistas con el Estado (Ley 10971)",
      detalle: "16-09-2026: reforma los arts. 14 y 119 de la Ley 9986; el incumplimiento laboral acreditado excluye la oferta",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=108035&param2=152661&param3=1",
    },
  ],
  jurisprudencia: [
    {
      numero: "Resolución 1199-2020",
      organo: TCA,
      fecha: "17-07-2020",
      tema: "Contrato ya ejecutado: solo daños y perjuicios",
      criterio:
        "Rechaza integrar a la adjudicataria de una licitación de RECOPE ya ejecutada, porque la sentencia favorable solo podría reconocer daños y perjuicios (art. 90 de la Ley 7494, hoy art. 98 de la Ley 9986).",
      href: NEXUS("sen-1-0034-987313"),
    },
  ],
  contraloria: [
    {
      numero: "R-DCP-00030-2024",
      organo: DCP,
      fecha: "27-06-2024",
      tema: "Concursos con normas de organismos internacionales",
      criterio:
        "El art. 92 no equipara todo procedimiento de un crédito a licitación mayor: la competencia de la Contraloría depende de que el concurso alcance su umbral, y debe cumplirse antes la protesta que prevea la normativa del organismo.",
      href: CGR(2024, "2024012855"),
    },
    {
      numero: "R-DCP-SICOP-00211-2025",
      organo: DCP,
      fecha: "05-02-2025",
      tema: "Subcontratación no declarada",
      criterio:
        "Declara con lugar la apelación, declara inelegible la oferta adjudicada por la CCSS y anula la adjudicación: el subcontrato con el socio logístico no se declaró en la oferta y no podía subsanarse en la fase recursiva.",
      href: CGR(2025, "2025002416"),
    },
    {
      numero: "R-DCP-SICOP-00466-2025",
      organo: DCP,
      fecha: "18-03-2025",
      tema: "Fundamentación y carga de la prueba",
      criterio:
        "Rechaza de plano por improcedencia manifiesta la apelación que no rebatió con argumentos ni prueba los incumplimientos atribuidos a la oferta; la carga de la prueba corresponde al apelante.",
      href: CGR(2025, "2025007965"),
    },
    {
      numero: "R-DCP-SICOP-00755-2025",
      organo: DCP,
      fecha: "06-05-2025",
      tema: "Precio inaceptable y preclusión",
      criterio:
        "Sin lugar: lo que el oferente no justificó en la indagatoria del art. 106 no puede introducirlo en la apelación; con la oferta inelegible no hay legitimación.",
      href: CGR(2025, "2025010700"),
    },
    {
      numero: "R-DCP-SICOP-01041-2025",
      organo: DCP,
      fecha: "11-06-2025",
      tema: "Multa por temeridad",
      criterio:
        "Rechaza la multa del art. 93 que pidió el adjudicatario: quien alega la temeridad debe desarrollarla y probarla.",
      href: CGR(2025, "2025013054"),
    },
    {
      numero: "R-DCP-SICOP-01447-2026",
      organo: DCP,
      fecha: "18-08-2026",
      tema: "Mejor derecho",
      criterio:
        "Rechaza de plano la apelación que solo defendía la oferta excluida: el apelante debe demostrar además, con su propio ejercicio de evaluación, que resultaría adjudicatario.",
      href: CGR(2026, "2026013729"),
    },
    {
      numero: "R-DCP-SICOP-01473-2026",
      organo: DCP,
      fecha: "20-08-2026",
      tema: "Precio fuera de las bandas",
      criterio:
        "La oportunidad para acreditar la razonabilidad del precio precluyó con el vencimiento del plazo de la indagatoria; los documentos aportados en la apelación no subsanan la omisión.",
      href: CGR(2026, "2026013944"),
    },
    {
      numero: "R-DCP-SICOP-01938-2026",
      organo: DCP,
      fecha: "26-10-2026",
      tema: "Prevención insuficiente y readjudicación",
      criterio:
        "Declara parcialmente con lugar la apelación contra una compra del INA, anula la adjudicación de una partida y ordena readjudicarla a la apelante, excluida por defectos que la Administración no le señaló con claridad al prevenir.",
      href: CGR(2026, "2026018773"),
    },
  ],
  pie: "Textos de la Ley 9986 y de su Reglamento cotejados con la versión vigente del SINALEVI (versión 15 de la ley, de setiembre de 2026, y versión del Reglamento con el Decreto 45782). Resoluciones de la Contraloría leídas íntegras en su repositorio de documentos, con la fecha de la resolución en SICOP; resolución del Tribunal en Nexus del Poder Judicial. Corte: 24 de noviembre de 2026.",
};
