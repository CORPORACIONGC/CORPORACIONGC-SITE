import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 27 (petición y pronta resolución), 30 (información pública) y 41 (justicia pronta)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de Regulación del Derecho de Petición",
      detalle: "Ley N.° 9097 de 26-10-2012, Alcance 49 a La Gaceta N.° 52 de 14-03-2013, arts. 1 a 13",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=74427&param2=91901&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 31, 32, 35, 49, 51, 52, 57 y 71",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 261, 330 y 331 (plazo del procedimiento y silencio)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 1998-008349", organo: SC, fecha: "24-11-1998", tema: "Petición y reclamo", criterio: "La petición pura y simple se rige por el art. 27 y los diez días; los reclamos y recursos, por el art. 41 y el plazo del procedimiento. El acuse de recibo y el traslado no satisfacen el deber de responder.", href: NEXUS("sen-1-0007-117630") },
    { numero: "Voto 2000-000163", organo: SC, fecha: "07-01-2000", tema: "Contenido del derecho", criterio: "El derecho exige una respuesta formal, en plazo y notificada al peticionario, aunque no sea favorable; el silencio negativo no es respuesta.", href: NEXUS("sen-1-0007-138647") },
    { numero: "Voto 2008-002545", organo: SC, fecha: "22-02-2008", tema: "Legalidad ordinaria", criterio: "Con la entrada en vigor del CPCA, la demora en resolver un procedimiento o un recurso es una cuestión de legalidad ordinaria que se discute en lo contencioso.", href: NEXUS("sen-1-0007-411228") },
    { numero: "Voto 2008-009670", organo: SC, fecha: "13-06-2008", tema: "Petición por correo electrónico", criterio: "La petición electrónica vale cuando se dirige al correo institucional dispuesto para recibir solicitudes.", href: NEXUS("sen-1-0007-417033") },
    { numero: "Voto 2018-014645", organo: SC, fecha: "05-09-2018", tema: "Requisitos de la petición", criterio: "Declaró sin lugar la acción contra el art. 4 de la Ley 9097: exigir objeto y destinatario es razonable, y el objeto es lo que se pide.", href: NEXUS("sen-1-0007-900365") },
    { numero: "Voto 2018-020343", organo: SC, fecha: "07-12-2018", tema: "Sujetos privados", criterio: "Acogió el amparo contra una fundación que administra fondos públicos: está en los supuestos del art. 57 LJC.", href: NEXUS("sen-1-0007-895515") },
    { numero: "Voto 2019-023244", organo: SC, fecha: "22-11-2019", tema: "Explicación dentro del plazo", criterio: "Si la Administración explica dentro de los diez días por qué no puede responder y fija un plazo, el amparo presentado antes de su vencimiento es prematuro.", href: NEXUS("sen-1-0007-951933") },
    { numero: "Voto 2022-003969", organo: SC, fecha: "18-02-2022", tema: "Materia tributaria", criterio: "Una gestión tributaria con plazo propio de dos meses se rige por el art. 41 y queda para lo contencioso; la Ley 9097 no cambió esa línea.", href: NEXUS("sen-1-0007-1074258") },
    { numero: "Voto 2022-027730", organo: SC, fecha: "18-11-2022", tema: "Sujetos privados", criterio: "Rechazó el amparo contra una cooperativa de ahorro en su giro privado: no está en los supuestos del art. 2 de la Ley 9097.", href: NEXUS("sen-1-0007-1127160") },
    { numero: "Voto 2024-023399", organo: SC, fecha: "16-08-2024", tema: "Tres categorías", criterio: "Distinguió la petición pura y simple, los reclamos y recursos del art. 41 y las consultas jurídicas, que no se amparan por ninguna de las dos vías.", href: NEXUS("sen-1-0007-1244487") },
    { numero: "Voto 2024-026301", organo: SC, fecha: "11-09-2024", tema: "Desobediencia", criterio: "Acogió una gestión de desobediencia contra un hogar de ancianos que recibe fondos públicos y ordenó testimoniar piezas al Ministerio Público.", href: NEXUS("sen-1-0007-1388093") },
    { numero: "Voto 2025-012278", organo: SC, fecha: "25-04-2025", tema: "Plazo y congruencia", criterio: "Diez días hábiles, salvo plazo especial; la respuesta no tiene que ser favorable, pero sí congruente con lo pedido.", href: NEXUS("sen-1-0007-1290028") },
    { numero: "Voto 2025-027481", organo: SC, fecha: "29-08-2025", tema: "Respuesta durante el amparo", criterio: "Si la Administración responde al ser notificada del amparo, la mayoría lo declara con lugar sin condena en costas, daños ni perjuicios (con votos salvados).", href: NEXUS("sen-1-0007-1330803") },
    { numero: "Voto 2025-036175", organo: SC, fecha: "31-10-2025", tema: "Materia municipal", criterio: "Una denuncia con solicitud de investigación ante una municipalidad cae en el art. 41 y se remite a lo contencioso.", href: NEXUS("sen-1-0007-1351998") },
    { numero: "Voto 2026-016184", organo: SC, fecha: "07-05-2026", tema: "Concesionaria de obra pública", criterio: "Acogió el amparo contra una concesionaria que no entregó información sobre la prestación del servicio público concesionado.", href: NEXUS("sen-1-0007-1392201") },
    { numero: "Voto 2026-018254", organo: SC, fecha: "22-05-2026", tema: "Respuesta efectivamente comunicada", criterio: "La respuesta debe ser oportuna, congruente y llegar al peticionario; las descoordinaciones internas no se trasladan al administrado.", href: NEXUS("sen-1-0007-1394095") },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 17.961", detalle: "Proyecto de ley sobre regulación del derecho de petición, Alcance 32 a La Gaceta N.° 117 de 17-06-2011" },
        { titulo: "Departamento de Servicios Técnicos", detalle: "Informe ST.220-2011 J, 26-10-2011" },
        { titulo: "Comisión Permanente Ordinaria de Asuntos Jurídicos", detalle: "Sesión ordinaria n.º 14 y dictamen afirmativo unánime, 31-07-2012" },
        { titulo: "Comisión Legislativa Plena Segunda", detalle: "Sesiones n.º 9 (26-09-2012) y n.º 11 (10-10-2012)" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 28 de octubre de 2026.",
};
