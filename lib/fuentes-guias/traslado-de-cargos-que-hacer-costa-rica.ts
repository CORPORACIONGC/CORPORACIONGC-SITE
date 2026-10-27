import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 39, 41 y 192", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
    { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 214, 221, 272, 308 a 319, 345 y 346", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1" },
    { titulo: "Ley Marco de Empleo Público", detalle: "Ley N.° 10159, art. 21", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=96521&param2=145804&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Voto 15-90", organo: SC, fecha: "05-01-1990", tema: "Debido proceso", criterio: "Los arts. 39 y 41 de la Constitución rigen en todo procedimiento administrativo, empezando por la notificación al interesado del carácter y fines del procedimiento.", href: NEXUS("sen-1-0007-84812") },
    { numero: "Voto 2020-004541", organo: SC, fecha: "06-03-2020", tema: "Intimación e imputación", criterio: "Anula un traslado de cargos con imputación genérica, sin la situación, modo, lugar y tiempo de los hechos y sin las posibles sanciones; la intimación garantiza la congruencia entre lo intimado y lo resuelto.", href: NEXUS("sen-1-0007-965340") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
