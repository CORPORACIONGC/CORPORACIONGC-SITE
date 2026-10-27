import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Arts. 49, 173 y 182", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
    { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 1, 23, 26, 31, 39 a 42, 58, 61, 63, 90, 98, 99, 111, 122 a 128, 134 a 140 y 155 a 178", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1" },
    { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, art. 198", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Voto 2006-3669", organo: SC, fecha: "15-03-2006", tema: "Agotamiento de la vía", criterio: "Anula los párrafos 1.° y 2.° del art. 31 de la Ley Reguladora de 1966, que hacían del agotamiento de la vía administrativa un requisito para admitir la demanda.", href: NEXUS("sen-1-0007-337671") },
    { numero: "Voto 1426-F-S1-2012", organo: S1, fecha: "23-10-2012", tema: "Efectos continuados", criterio: "El supuesto del art. 40 es propio de las relaciones jurídicas de duración y opera cuando el acto incide reiteradamente en la esfera jurídica del particular.", href: NEXUS("sen-1-0004-767786"), gc: true },
    { numero: "Resolución 1778-A-S1-2021", organo: S1, fecha: "12-10-2021", tema: "Pretensión indemnizatoria", criterio: "A la demanda solo resarcitoria no se le aplica la caducidad, sino la prescripción de cuatro años del art. 198 LGAP, por remisión del art. 41 CPCA.", href: NEXUS("sen-1-0004-1060850") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
