import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const CGR = (ruta: string) => `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${ruta}`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública (Ley 8422)",
      detalle: "Arts. 2, 3, 4, 8, 14 a 24, 26, 28, 31, 34, 36, 38 a 46, 48, 49, 52, 54, 55, 57 a 59 y 62; texto vigente con reformas hasta la Ley 10949 de 2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=53738&param2=151776&param3=1",
    },
    {
      titulo: "Reglamento a la Ley contra la Corrupción y el Enriquecimiento Ilícito (Decreto Ejecutivo 32333-MP-J)",
      detalle: "Arts. 1 (incisos 14 y 47), 8, 9, 31, 40, 43, 54 a 57, 61, 63 y 72",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=54710&param2=112387&param3=1",
    },
    {
      titulo: "Ley Orgánica de la Contraloría General de la República (Ley 7428)",
      detalle: "Art. 71: prescripción de la responsabilidad administrativa",
      href: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=21629",
    },
    {
      titulo: "Ley de Protección de Personas Denunciantes y Testigos de Actos de Corrupción (Ley 10437)",
      detalle: "Arts. 1, 4, 10, 11 y 21",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=101377&param2=139760&param3=1",
    },
    {
      titulo: "Leyes 10373 (2023), 10523 (2024), 10691 (2025) y 10949 (2026)",
      detalle: "Reformas a la Ley 8422 sobre comiso, beneficiarios finales, prescripción penal de treinta años y declarantes policiales y judiciales",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2008-007689", organo: SC, fecha: "07-05-2008", tema: "Confidencialidad y menaje de casa", criterio: "Avala el acceso de las comisiones legislativas a las declaraciones juradas y la prescripción penal especial del art. 62; anula una frase del art. 29 sobre el menaje de casa.", href: NEXUS("ext-1-0007-263227") },
    { numero: "Voto 2012-007212", organo: SC, fecha: "30-05-2012", tema: "Probidad e incompatibilidades", criterio: "El deber de probidad del art. 3 y la incompatibilidad del art. 18 son constitucionales; la segunda es «una restricción idónea y proporcionada al fin de la ley».", href: NEXUS("ext-1-0007-260616") },
    { numero: "Voto 2025-008201", organo: SC, fecha: "17-03-2025", tema: "Compensación por prohibición", criterio: "Mantiene el art. 15 reformado por la Ley 9635 (15 % y 30 %) y anula dos frases de la Ley de Salarios sobre el régimen de prohibición.", href: NEXUS("sen-1-0007-1316484") },
    { numero: "Resolución 2026-092627", organo: SC, fecha: "08-10-2026", tema: "Sanción a los alcaldes", criterio: "Da curso a la acción contra la jurisprudencia del TSE que atribuye al concejo municipal la potestad de sancionar al alcalde por faltas a la probidad; sin sentencia.", href: NEXUS("sen-1-0007-1431109") },
    { numero: "Voto 000763-F-S1-2018", organo: "Sala Primera", fecha: "22-08-2018", tema: "Despido por violar la prohibición", criterio: "Confirma el despido de una funcionaria que ejerció la abogacía pese a la prohibición; la responsabilidad no exige perjuicio patrimonial.", href: NEXUS("ext-1-0004-273329") },
    { numero: "Voto 000946-F-S1-2018", organo: "Sala Primera", fecha: "01-11-2018", tema: "Cinco años y no un mes", criterio: "La potestad sancionadora por infracciones a la Ley 8422 se rige por el plazo de cinco años del art. 71 de la Ley Orgánica de la Contraloría y no por el mes del Código de Trabajo.", href: NEXUS("ext-1-0004-274061") },
    { numero: "Voto 117-2018", organo: "Tribunal de Casación de lo Contencioso Administrativo", fecha: "12-09-2018", tema: "Interrupción con efectos continuados", criterio: "Régimen especial de prescripción que se sobrepone al general del empleo público; la notificación del inicio del procedimiento interrumpe el plazo hasta el acto final.", href: NEXUS("ext-1-0034-250905") },
    { numero: "Voto 877-2011", organo: "Sala Tercera", fecha: "22-07-2011", tema: "Enriquecimiento ilícito", criterio: "Mantiene la condena de un exalcalde por enriquecimiento ilícito y falsedad en la declaración jurada; la probidad incluye rendir cuentas ajustadas a la verdad.", href: NEXUS("sen-1-0034-521447") },
  ],
  contraloria: [
    { numero: "Oficio 12961-2026 (DFOE-DEC-3456)", organo: "Contraloría General de la República", fecha: "24-09-2026", tema: "Quién declara", criterio: "Recursos humanos de cada institución identifica los cargos que deben declarar; los interinos declaran desde los seis meses efectivos y continuos.", href: CGR("2026/SIGYD_D/SIGYD_D_2026016085.pdf") },
    { numero: "Oficio 5301-2026 (DJ-0827)", organo: "Contraloría General de la República", fecha: "30-04-2026", tema: "Confidencialidad del denunciante", criterio: "Los arts. 6 de la Ley General de Control Interno y 8 de la Ley 8422 resguardan la identidad del denunciante y la información de las investigaciones.", href: CGR("2026/SIGYD_D/SIGYD_D_2026006646.pdf") },
    { numero: "Oficio 18274-2025 (DJ-2050)", organo: "Contraloría General de la República", fecha: "16-10-2025", tema: "Prohibición y reserva de ley", criterio: "La prohibición y su compensación requieren norma legal expresa; no caben interpretaciones extensivas ni supuestos reglamentarios.", href: CGR("2025/SIGYD_D/SIGYD_D_2025022204.pdf") },
    { numero: "Levantamiento SIGYD-2024001592", organo: "Contraloría General de la República", fecha: "06-02-2024", tema: "Levantamiento de incompatibilidad", criterio: "Deniega el levantamiento del art. 19 porque la empresa del funcionario había contratado con el Estado.", href: CGR("2024/SIGYD_D/SIGYD_D_2024001592.pdf") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-150-2026", detalle: "16-09-2026: la Contraloría decide con carácter vinculante si un cargo está sujeto a la prohibición del art. 14", href: "http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Pronunciamiento/pro_ficha.aspx?Param1=PRD&nDictamen=25566&strTipM=T" },
  ],
  pie: "Textos de la Ley 8422 y de su reglamento cotejados con la versión vigente del SINALEVI (versión 19 de la ley, de mayo de 2026). Resoluciones leídas en Nexus del Poder Judicial; oficios de la Contraloría en su repositorio de documentos y dictamen de la Procuraduría en el SCIJ. Corte: 24 de noviembre de 2026.",
};
