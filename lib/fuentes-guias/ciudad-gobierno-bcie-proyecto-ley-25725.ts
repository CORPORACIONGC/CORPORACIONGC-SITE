import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const SC = "Sala Constitucional";
const CGR = "Contraloría General de la República";
const SIL = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 116 y 118 (sesiones ordinarias y extraordinarias), 121 incisos 14 (bienes de la Nación) y 15 (empréstitos y crédito público), 124 (delegación) y 182 (licitación)", href: SINALEVI(871, 147492) },
    { titulo: "Ley General de Contratación Pública (Ley 9986)", detalle: "Arts. 2 (exclusiones), 3 (excepciones) y 67 (compra y arrendamiento de inmuebles, incluidos los por construir)", href: SINALEVI(94469, 150657) },
    { titulo: "Convenio Constitutivo del Banco Centroamericano de Integración Económica (Ley 3152)", detalle: "Art. 1 (naturaleza y personalidad jurídica) y capítulo VI, arts. 27 a 33 (inmunidades, exenciones y privilegios)", href: SINALEVI(10333, 103483) },
    { titulo: "Ley 5570 de 30 de agosto de 1974", detalle: "Donación al Liceo de Costa Rica de la manzana de los antiguos talleres del MOPT (art. 1) y de las dos manzanas que ocupa el colegio (art. 2)", href: SINALEVI(3032, 3210) },
  ],
  jurisprudencia: [
    { numero: "Voto 2024-028774", organo: SC, fecha: "01-10-2024", tema: "Ley Jaguar (exp. 24.467)", criterio: "Por unanimidad, declara inconstitucional la reforma al art. 67 de la Ley 9986 que habría permitido incluir el diseño y la construcción de obra pública, también sobre terrenos públicos, en la compra o el arrendamiento de inmuebles sin procedimientos ordinarios.", href: NEXUS("sen-1-0007-1264836") },
    { numero: "Voto 2025-004507", organo: SC, fecha: "14-02-2025", tema: "Finca 1-45513-000", criterio: "Declara sin lugar un amparo sobre el lote de los antiguos talleres del MOPT; recoge el informe del MEP según el cual la finca está inscrita a nombre del Liceo de Costa Rica y la Junta Administrativa debe velar por su conservación.", href: NEXUS("sen-1-0007-1276406") },
    { numero: "Voto 2026-037338", organo: SC, fecha: "29-09-2026", tema: "Liceo de Costa Rica y Ciudad Gobierno", criterio: "Rechaza de plano el amparo del gobierno estudiantil contra el uso del lote para Ciudad Gobierno, porque el reclamo de indemnización corresponde a la jurisdicción contencioso-administrativa, donde el recurrente dijo tener tres procesos pendientes.", href: NEXUS("sen-1-0007-1429822") },
  ],
  contraloria: [
    { numero: "Oficio 13483 (DCP-0205)", organo: CGR, fecha: "06-10-2026", tema: "Criterio sobre el expediente 25.725", criterio: "Califica el contrato como una asociación público-privada de construcción, arrendamiento, operación y transferencia (BLOT); pide justificar la contratación directa con el BCIE y delimitar su alcance; advierte el riesgo de que los sobrecostos pasen a la cuota; sostiene que la figura es un arrendamiento financiero y recomienda incorporar la autorización del art. 121, inciso 15, de la Constitución.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2026/SIGYD_D/SIGYD_D_2026016763.pdf" },
    { numero: "Oficio 11837 (DFOE-FIP-0354)", organo: CGR, fecha: "04-09-2023", tema: "Advertencia sobre el proyecto", criterio: "Advierte a Mideplan y a Hacienda que el art. 67 de la Ley 9986 no permite contratar directamente con el BCIE el diseño, la construcción y el arrendamiento de edificios sobre terrenos del Estado, y que la adquisición a plazos de un inmueble es un arrendamiento financiero y, por tanto, deuda pública.", href: "https://cgrfiles.cgr.go.cr/publico/docsweb/documentos/sala-prensa/boletines/2023/dfoe-fip-0354-2023.pdf" },
  ],
  otros: [
    {
      titulo: "Asamblea Legislativa: expediente 25.725",
      items: [
        { titulo: "Proyecto de ley «Ley para el Desarrollo del Proyecto de Ciudad Gobierno»", detalle: "Texto original y exposición de motivos, Alcance 114 a La Gaceta 163 del 28-08-2026", href: "https://www.imprentanacional.go.cr/pub/2026/08/28/ALCA114_28_08_2026.pdf" },
        { titulo: "Dictamen afirmativo de mayoría de la Comisión de Gobierno y Administración", detalle: "10-11-2026: texto sustitutivo dictaminado, respuestas a las consultas y audiencias", href: SIL },
        { titulo: "Departamento de Servicios Técnicos, informe AL-DEST-IJU-312-2026", detalle: "19-10-2026: análisis jurídico del texto original, votación y delegación", href: SIL },
        { titulo: "Ficha de trámite del expediente 25.725", detalle: "Consultada el 25-11-2026: ingreso al orden del día del Plenario programado para el 03-12-2026", href: SIL },
      ],
    },
    {
      titulo: "Asamblea Legislativa: intentos anteriores",
      items: [
        { titulo: "Expediente 24.099, reforma de los arts. 67 y 77 de la Ley 9986", detalle: "Presentado por el Poder Ejecutivo el 14-12-2023; dictamen negativo de mayoría y afirmativo de minoría en noviembre de 2024; en trámite de mociones en el Plenario", href: SIL },
        { titulo: "Expediente 24.100, interpretación auténtica de los arts. 66 y 77 de la Ley 9986", detalle: "Presentado el 14-12-2023; dictamen negativo de mayoría y afirmativo de minoría en 2024; en el orden del día del Plenario desde el 24-10-2024", href: SIL },
        { titulo: "Expediente 24.467, «Ley Jaguar para el impulso del desarrollo de Costa Rica»", detalle: "Su art. 4, que reformaba el art. 67 de la Ley 9986, fue declarado inconstitucional en el voto 2024-028774", href: SIL },
      ],
    },
    {
      titulo: "Prensa consultada",
      items: [
        { titulo: "CRHoy, «¿Qué pasará con Ciudad Gobierno luego de 30 años de alquiler estatal?»", detalle: "18-11-2026: alternativas al final del alquiler", href: "https://crhoy.com/nacionales/que-pasara-con-ciudad-gobierno-luego-de-30-anos-de-alquiler-estatal/" },
        { titulo: "La Nación, «Ciudad Gobierno requiere 38 votos en la Asamblea»", detalle: "23-11-2026: lectura del criterio de la Contraloría y votación del dictamen", href: "https://www.nacion.com/politica/ciudad-gobierno-requiere-38-votos-en-la-asamblea/5QZCJAGO5NHMDCGNAREPLV4FPA/story/" },
        { titulo: "El Observador, dictamen en la Comisión de Gobierno y Administración", detalle: "10-11-2026: votación de siete votos contra dos", href: "https://observador.cr/oficialismo-y-pln-avalan-proyecto-que-permite-al-bcie-construir-ciudad-gobierno-y-alquilar-edificios-al-estado-por-30-anos/" },
        { titulo: "Delfino.cr, «Ejecutivo presentó proyectos de ley para construir Ciudad Gobierno con el BCIE»", detalle: "Diciembre de 2023: expedientes 24.099 y 24.100", href: "https://delfino.cr/2023/12/ejecutivo-presento-proyectos-de-ley-para-construir-ciudad-gobierno-con-el-bcie" },
      ],
    },
  ],
  pie: "Textos leídos el 25-11-2026: el proyecto original en el Alcance 114 a La Gaceta 163 y el texto dictaminado en el dictamen afirmativo de mayoría del 10-11-2026, descargado del Sistema de Información Legislativa junto con el informe AL-DEST-IJU-312-2026; el trámite de los expedientes 25.725, 24.099 y 24.100 se verificó ese día en el SIL. Normas cotejadas con los textos de SINALEVI; criterios de la Contraloría leídos íntegros en los documentos que publica; votos de la Sala leídos en Nexus. Los hechos que solo constan en la prensa se atribuyen a la nota citada.",
};
