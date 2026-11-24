import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";
const TCA3 = "Tribunal Contencioso Administrativo, Sección III";
const TCA_JI = "Tribunal Contencioso Administrativo (jerarquía impropia municipal)";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Código Municipal (Ley 7794)",
      detalle: "Arts. 79, 88 (reformado por las Leyes 10421 de 2023 y 10594 de 2024), 89, 90, 90 bis, 91, 92, 162 a 172 y 192; numeración corrida por la Ley 9542 de 2018",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=40197&param2=152716&param3=1",
    },
    {
      titulo: "Ley de Regulación y Comercialización de Bebidas con Contenido Alcohólico (Ley 9047)",
      detalle: "Arts. 3, 6, 10, 14 y 25",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=73058&param2=128922&param3=1",
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)",
      detalle: "Arts. 31.1 y 189 a 192: agotamiento preceptivo en materia municipal y apelación ante el Tribunal como jerarca impropio",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
    {
      titulo: "Constitución Política",
      detalle: "Art. 173: recursos contra los acuerdos municipales",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley General de la Administración Pública (Ley 6227)",
      detalle: "Art. 308: procedimiento ordinario cuando el acto final puede suprimir derechos subjetivos",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Ley de Planificación Urbana (Ley 4240)",
      detalle: "Arts. 28 y 29 (reformado por la Ley 10594 de 2024): certificado de uso de suelo y clausura del local",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=35669&param2=143656&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)",
      detalle: "Art. 35: plazo del recurso de amparo",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Ley de Impuestos Municipales del Cantón de El Guarco (Ley 9237)",
      detalle: "Art. 12: procedimiento sancionatorio y simple constatación; ejemplo de ley cantonal",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=77424&param2=97004&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2002-004727", organo: SC, fecha: "17-05-2002", tema: "Patente arrendada", criterio: "Quien explota una patente de licores arrendada sin comunicarlo a la municipalidad no tiene derecho subjetivo que oponerle; su reclamo es contra la titular.", href: NEXUS("ext-1-0007-19479") },
    { numero: "Voto 2003-004446", organo: SC, fecha: "23-05-2003", tema: "Cierre por mera constatación", criterio: "La municipalidad puede cerrar un negocio que opera sin licencia o sin permiso sanitario por la mera constatación de su falta, sin procedimiento previo.", href: NEXUS("ext-1-0007-41781") },
    { numero: "Voto 2006-000609", organo: SC, fecha: "27-01-2006", tema: "Recursos y actividad sin licencia", criterio: "Interponer recursos administrativos contra la clausura no habilita a ejercer una actividad que carece de licencia municipal.", href: NEXUS("ext-1-0007-108483") },
    { numero: "Voto 2016-012018", organo: SC, fecha: "26-08-2016", tema: "Revocatoria sin debido proceso", criterio: "Anula la revocatoria de la licencia de licores de un bar dispuesta sin intimación de cargos ni audiencia; la municipalidad puede iniciar un procedimiento con debido proceso.", href: NEXUS("ext-1-0007-247469") },
    { numero: "Voto 2024-025646", organo: SC, fecha: "06-09-2024", tema: "Bufete sin patente", criterio: "Si una actividad requiere patente o puede ejercerse en el inmueble son aspectos de mera legalidad, ajenos al amparo.", href: NEXUS("sen-1-0007-1248806") },
    { numero: "Voto 2024-028655", organo: SC, fecha: "01-10-2024", tema: "Cierre inmediato", criterio: "Ante una actividad no autorizada, la municipalidad puede cerrar en el acto; el acta de cierre y su notificación son el acto que inicia el procedimiento.", href: NEXUS("ext-1-0007-366450") },
    { numero: "Voto 2025-020613", organo: SC, fecha: "04-07-2025", tema: "Clasificación de la patente", criterio: "Rechaza de plano el amparo: la clasificación de la licencia es de legalidad y los cierres reclamados excedían el plazo de dos meses.", href: NEXUS("sen-1-0007-1331245") },
    { numero: "Voto 2025-031107", organo: SC, fecha: "26-09-2025", tema: "Cierre por falta de pago", criterio: "La municipalidad puede cerrar por mora en la patente sin audiencia previa, porque la clausura es el primer acto del procedimiento.", href: NEXUS("sen-1-0007-1343497") },
    { numero: "Voto 417-2015", organo: TCA3, fecha: "20-08-2015", tema: "Traspaso de la patente", criterio: "Todo traspaso de una patente de licores requiere autorización municipal previa para ser eficaz; la escritura de venta no sustituye el trámite.", href: NEXUS("ext-1-0034-156113") },
    { numero: "Voto 214-2020", organo: TCA3, fecha: "20-04-2020", tema: "Restaurante sin licencia", criterio: "Quien opera sin licencia no tiene derecho subjetivo y puede ser clausurado de inmediato; la apelación ante la alcaldía suspendía los efectos, lo resuelto por esta no.", href: NEXUS("ext-1-0034-284257") },
    { numero: "Voto 5139-2025", organo: TCA_JI, fecha: "29-05-2025", tema: "Clausura de un negocio con licencia", criterio: "Confirma la clausura de un minisúper por incumplir requisitos de funcionamiento; las sanciones se imponen con respeto del debido proceso.", href: NEXUS("sen-1-0034-1296638") },
    { numero: "Resolución 3268-2026", organo: TCA, fecha: "21-05-2026", tema: "Agotamiento preceptivo", criterio: "Declara inadmisible una demanda contra una municipalidad por no agotar la vía administrativa, obligatoria contra sus conductas formales (art. 31.1 del CPCA).", href: NEXUS("sen-1-0034-1402083") },
  ],
  pie: "Textos del Código Municipal, la Ley 9047, el CPCA, la Ley General de la Administración Pública y la Ley de Planificación Urbana cotejados con la versión vigente del SINALEVI (Código Municipal, versión 70, de 7 de octubre de 2026). Resoluciones leídas en Nexus del Poder Judicial. Corte: 24 de noviembre de 2026.",
};
