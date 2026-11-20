import { NEXUS, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const CGR_NORMATIVA = "https://cgrfiles.cgr.go.cr/publico/docsweb/documentos/normativa";
const SC = "Sala Constitucional";
const CGR = "Contraloría General de la República";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Ley General de Contratación Pública (Ley 9986)", detalle: "Arts. 1, 33, 34, 35, 36, 55, 56, 60 a 63, 68, 95, 97, 98 y 99", href: SINALEVI(94469, 152662) },
    { titulo: "Reglamento a la Ley General de Contratación Pública (Decreto 43808-H)", detalle: "Arts. 1, 82, 195 y 276, con las reformas de los decretos 44745 y 45782", href: SINALEVI(98344, 151216) },
    { titulo: "Ley de Fortalecimiento y Modernización de las Entidades Públicas del Sector Telecomunicaciones (Ley 8660)", detalle: "Art. 22 (límites de contratación del ICE)" },
    { titulo: "Clasificador Presupuestario Institucional del Sector Público 2025 (Decreto 45079-H)", detalle: "Grupos institucionales que definen el régimen ordinario y el diferenciado desde 2026" },
  ],
  jurisprudencia: [
    { numero: "Voto 2024-022483", organo: SC, fecha: "07-08-2024", tema: "ICE", criterio: "Declara inconstitucionales los arts. 1, 2, 68, 69 y 70 de la Ley 9986 en cuanto a su aplicación al ICE y anula el art. 135 c).", href: NEXUS("sen-1-0007-1253541") },
    { numero: "Voto 2025-005944", organo: SC, fecha: "26-02-2025", tema: "ICE", criterio: "Resuelve gestiones sobre el voto anterior; la Contraloría lo cita como fundamento para emitir los límites de contratación del ICE.", href: NEXUS("sen-1-0007-1277284") },
  ],
  contraloria: [
    { numero: "R-DC-00142-2025", organo: CGR, fecha: "10-12-2025", tema: "Umbrales 2026", criterio: "Umbrales vigentes del 1 de enero al 31 de diciembre de 2026, montos para sujetos privados y grupos del Clasificador 2025 en cada régimen.", href: `${CGR_NORMATIVA}/umbrales-ca-2026.pdf` },
    { numero: "R-DC-00128-2024", organo: CGR, fecha: "11-12-2024", tema: "Umbrales 2025", criterio: "Umbrales vigentes en 2025.", href: `${CGR_NORMATIVA}/umbrales-ca-2025.pdf` },
    { numero: "R-DC-00123-2023", organo: CGR, fecha: "12-12-2023", tema: "Umbrales 2024", criterio: "Umbrales vigentes en 2024.", href: `${CGR_NORMATIVA}/umbrales-ca-2024.pdf` },
    { numero: "R-DC-00132-2022", organo: CGR, fecha: "12-12-2022", tema: "Umbrales 2023", criterio: "Primera actualización con la Ley 9986, conforme a su transitorio IV.", href: `${CGR_NORMATIVA}/umbrales-ca-2023.pdf` },
    { numero: "R-DC-00006-2026", organo: CGR, fecha: "2026", tema: "Límites del ICE", criterio: "Límites de licitación pública, abreviada y contratación directa del ICE para 2026, calculados según el art. 22 de la Ley 8660.", href: "https://cgrfiles.cgr.go.cr/publico/docsweb/documentos/ca/limites-ice/r-dc-00006-2026.pdf" },
  ],
  otros: [
    {
      titulo: "Consultas de la Contraloría",
      items: [
        { titulo: "Umbrales para determinar el procedimiento de contratación", detalle: "Página de consulta con las resoluciones de 2023 a 2026", href: "https://www.cgr.go.cr/02-consulta-umbrales-cp.html" },
        { titulo: "Límites de contratación administrativa aplicables al ICE", detalle: "Resoluciones de 2025 y 2026", href: "https://www.cgr.go.cr/02-consulta-limites-ice.html" },
      ],
    },
  ],
  pie: "Montos tomados de las resoluciones de la Contraloría descargadas de su sitio el 19-11-2026; Ley 9986 y Reglamento cotejados con Globalex y SINALEVI (corte de reformas: Ley 10862 y Decreto 45782); votos de la Sala leídos en Nexus. Los factores de actualización y la observación sobre los montos de 2024 y 2025 son cálculos propios sobre las cifras publicadas.",
};
