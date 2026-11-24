import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const TC = "Tribunal de Casación de lo Contencioso Administrativo y Civil de Hacienda";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 39, 41 y 192", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 214 y 217 a 221 (fines del procedimiento, audiencia, comparecencia, nulidad por omisión y verdad real), 223 (formalidades sustanciales), 245 (contenido de la notificación), 249 a 251 (citación), 256 (cómputo de plazos), 261 (plazo para concluir), 272 a 274 (acceso al expediente), 308 a 319 (procedimiento ordinario y comparecencia), 345 y 346 (recursos)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    { titulo: "Ley Marco de Empleo Público", detalle: "Ley N.° 10159, art. 21 (procedimiento especial de despido)", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=96521&param2=145804&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Voto 15-90", organo: SC, fecha: "05-01-1990", tema: "Debido proceso", criterio: "Los arts. 39 y 41 de la Constitución rigen en todo procedimiento administrativo, empezando por la notificación al interesado del carácter y fines del procedimiento.", href: NEXUS("sen-1-0007-84812") },
    { numero: "Voto 2020-004541", organo: SC, fecha: "06-03-2020", tema: "Intimación e imputación", criterio: "Anula un traslado de cargos con imputación genérica, sin la situación, modo, lugar y tiempo de los hechos y sin las posibles sanciones; la intimación garantiza la congruencia entre lo intimado y lo resuelto.", href: NEXUS("sen-1-0007-965340") },
    { numero: "Sentencia 907-F-2006", organo: S1, fecha: "17-11-2006", tema: "Contenido del traslado de cargos", criterio: "Lo esencial del traslado es la descripción de los hechos; no es necesario indicar la posible sanción, y sancionar por hechos distintos exige ampliar la intimación.", href: NEXUS("ext-1-0034-120399"), gc: true },
    { numero: "Sentencia 206-F-S1-2009", organo: S1, fecha: "26-02-2009", tema: "Nulidad por intimación imprecisa", criterio: "La intimación debe ser expresa, precisa y particularizada; anula el procedimiento del Consejo Técnico de Aviación Civil porque el auto inicial no indicó con claridad los hechos, las conductas y los cargos.", href: NEXUS("ext-1-0034-126354") },
    { numero: "Sentencia 145-2023", organo: TC, fecha: "27-07-2023", tema: "Calificación jurídica en el auto inicial", criterio: "No hay indefensión por omitir en el auto inicial las normas presuntamente infringidas si los hechos se describieron con claridad y hay armonía entre lo intimado y lo resuelto.", href: NEXUS("ext-1-1011-357718") },
    { numero: "Sentencia 7182-2024", organo: TCA, fecha: "18-10-2024", tema: "Notificación irregular del traslado", criterio: "La nulidad procesal exige un perjuicio concreto; no anula la notificación irregular del traslado si la persona lo contestó, ofreció prueba y recurrió sin limitación.", href: NEXUS("ext-1-0034-373002") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 24 de noviembre de 2026.",
};
