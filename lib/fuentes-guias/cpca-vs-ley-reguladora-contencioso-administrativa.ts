import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 1, 6, 10, 19 a 30, 31, 34, 36, 39, 42 y 198", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1" },
    { titulo: "Ley Reguladora de la Jurisdicción Contencioso-Administrativa (derogada)", detalle: "Ley N.° 3667, arts. 1, 7, 10, 18, 20, 22, 23, 31, 35, 37, 54 a 56 y 91" },
  ],
  jurisprudencia: [
    { numero: "Voto 2006-3669", organo: SC, fecha: "15-03-2006", tema: "Agotamiento de la vía", criterio: "Declara inconstitucionales y anula los párrafos 1.° y 2.° del art. 31 de la Ley Reguladora, que exigían agotar la vía administrativa para admitir la acción, y las normas conexas.", href: NEXUS("sen-1-0007-337671") },
  ],
  pie: "Textos normativos: SINALEVI y corpus normativo de Corporación GC (texto histórico de la Ley N.° 3667). Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
