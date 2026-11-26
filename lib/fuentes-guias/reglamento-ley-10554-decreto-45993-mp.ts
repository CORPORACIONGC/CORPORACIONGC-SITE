import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Reglamento a la Ley N.° 10554, «Ley Marco de Acceso a la Información Pública»",
      detalle: "Decreto Ejecutivo N.° 45993-MP de 26-10-2026; 41 artículos y un transitorio; rige desde su publicación (art. 41)",
      href: SINALEVI(108273, 153046),
    },
    {
      titulo: "Decreto N.° 45993-MP en La Gaceta",
      detalle: "Alcance N.° 151 a La Gaceta N.° 216, 13 de noviembre de 2026 (Imprenta Nacional)",
      href: "https://www.imprentanacional.go.cr/pub/2026/11/13/ALCA151_13_11_2026.pdf",
    },
    {
      titulo: "Ley Marco de Acceso a la Información Pública",
      detalle: "Ley N.° 10554 de 23-10-2024, Alcance N.° 178 a La Gaceta N.° 205 de 01-11-2024; arts. 5, 6, 9, 10, 15, 16 y 19",
      href: SINALEVI(103157, 143061),
    },
    {
      titulo: "Transparencia y Acceso a la Información Pública",
      detalle: "Decreto Ejecutivo N.° 40200-MP-MEIC-MC de 27-04-2017; arts. 3, 5, 6, 8, 10 y 12 (comparación). Derogado por el art. 40 del Decreto 45993-MP",
      href: SINALEVI(84166, 108486),
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 199 y 201 (responsabilidad del servidor y de la Administración), 264 (trámites a cargo del interesado) y 346 (plazo de los recursos ordinarios)",
      href: SINALEVI(13231, 150737),
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, art. 31 (el amparo no exige agotar los recursos administrativos)",
      href: SINALEVI(38533, 127124),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2026-011637", organo: SC, fecha: "27-03-2026", tema: "Falta de reglamento", criterio: "La omisión de reglamentar la Ley 10554 lesiona el derecho de acceso a la información en relación con el ambiente sano; ordenó al ministro de la Presidencia emitir el reglamento en dos meses desde la notificación.", href: NEXUS("sen-1-0007-1386823") },
    { numero: "Resolución 2026-025496", organo: SC, fecha: "08-07-2026", tema: "Falta de reglamento", criterio: "A petición del ministro, amplió por dos meses, contados desde el 14-07-2026, el plazo para emitir el reglamento.", href: NEXUS("sen-1-0007-1412437") },
    { numero: "Resolución 2026-037010", organo: SC, fecha: "29-09-2026", tema: "Falta de reglamento", criterio: "Concedió una segunda ampliación de dos meses, contados desde el 14-09-2026, a la vista del cronograma presentado por el ministro.", href: NEXUS("sen-1-0007-1432752") },
  ],
  pie: "Reglamento: texto publicado en el Alcance N.° 151 a La Gaceta N.° 216 de 13-11-2026. Demás normas: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 25 de noviembre de 2026.",
};
