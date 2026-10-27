import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 214, 217 a 221, 223, 230, 261, 272, 274, 308, 309, 311, 312, 315, 317, 319, 340, 343, 345, 346, 348, 350 y 352", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1" },
    { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 19 a 30, 31 y 39", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Voto 15-90", organo: SC, fecha: "05-01-1990", tema: "Debido proceso", criterio: "El derecho de defensa del art. 39 rige en todo procedimiento administrativo: notificación del carácter y fines del procedimiento, audiencia y prueba, acceso a los antecedentes, asistencia de abogado, decisión motivada y derecho a recurrir.", href: NEXUS("sen-1-0007-84812") },
    { numero: "Voto 34-F-S1-2011", organo: S1, fecha: "20-01-2011", tema: "Caducidad del procedimiento", criterio: "La caducidad del art. 340 LGAP se extiende por integración a los procedimientos iniciados de oficio y opera de pleno derecho; confirma la anulación de una multa de la SUPEN.", href: NEXUS("sen-1-0004-766063"), gc: true },
    { numero: "Voto 2020-004541", organo: SC, fecha: "06-03-2020", tema: "Intimación e imputación", criterio: "El traslado debe comunicar una relación precisa y circunstanciada de los hechos y sus consecuencias, y garantiza la congruencia entre lo intimado y lo resuelto; anula un traslado con imputación genérica.", href: NEXUS("sen-1-0007-965340") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
