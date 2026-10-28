import type { FuentesDeGuia } from "./tipos";

const DCP = "CGR, División de Contratación Pública";
const FIP = "CGR, Área de Fiscalización para el Desarrollo de las Finanzas Públicas";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Decreto Ejecutivo N.° 45763-H-MIDEPLAN-MICITT, Reglamento de compra pública innovadora",
      detalle: "Del 09-03-2026, Alcance 60 a La Gaceta 92 del 21-05-2026, pp. 178 a 197. Arts. 1 a 44 y Transitorio I; los arts. 41 a 43 agregan el 59 bis, reforman el 60 y derogan los arts. 61 a 71 del Reglamento a la Ley 9986",
      href: "https://www.imprentanacional.go.cr/pub/2026/05/21/ALCA60_21_05_2026.pdf",
    },
    {
      titulo: "Decreto Ejecutivo N.° 45763-H-MIDEPLAN-MICITT en SINALEVI",
      detalle: "Ficha 107143, versión 1 de 1, sin reformas al 28-10-2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107143&param2=151163&param3=1",
    },
    {
      titulo: "Ley General de Contratación Pública",
      detalle: "Ley N.° 9986, arts. 3 c) (proveedor único), 20 y 21 (innovación), 22 (compra pública innovadora), 22 bis, 31 (alertas tempranas), 36, 37, 58 (precalificación), 95, 97, 99, 116, 128 y 129. Alcance 109 a La Gaceta 103 del 31-05-2021",
      href: "https://www.imprentanacional.go.cr/pub/2021/05/31/ALCA109_31_05_2021.pdf",
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública",
      detalle: "Decreto Ejecutivo N.° 43808-H, arts. 44, 55 (tope del 25 % y excepción de la compra pública innovadora), 56, 59 bis, 59 ter y 60, texto vigente; arts. 61 a 71 derogados desde el 21-05-2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1",
    },
    {
      titulo: "Decreto Ejecutivo N.° 45782-H-MIDEPLAN-MICITT",
      detalle: "Reforma 31 artículos del Reglamento, entre ellos el 44, y agrega el 59 ter. Alcance 62 a La Gaceta 95 del 26-05-2026",
      href: "https://www.imprentanacional.go.cr/pub/2026/05/26/ALCA62_26_05_2026.pdf",
    },
    {
      titulo: "Ley sobre Derechos de Autor y Derechos Conexos",
      detalle: "Ley N.° 6683 del 14-10-1982, a la que remite el art. 28 del Decreto 45763",
    },
  ],
  jurisprudencia: [],
  contraloria: [
    {
      numero: "DFOE-FIP-IAD-00002-2024",
      organo: FIP,
      fecha: "21-08-2024",
      tema: "Diagnóstico antes del decreto",
      criterio:
        "Informe de auditoría sobre la capacidad de gestión de la Autoridad y la Dirección de Contratación Pública: al primer semestre de 2023, 27 instituciones habían usado criterios de innovación, y la Dirección detectó un desconocimiento generalizado de la compra pública innovadora. Concluye que se requiere revisión normativa.",
      href: CGR(2024, "2024015788"),
    },
    {
      numero: "R-DCP-SICOP-02354-2025",
      organo: DCP,
      fecha: "15-12-2025",
      tema: "Criterios de innovación: motivación previa",
      criterio:
        "Rechaza por falta de fundamentación la objeción que pedía incluir factores de compra pública innovadora: la Administración tiene discrecionalidad para fijar la ponderación, y los criterios estratégicos deben motivarse frente al objeto contractual antes de incorporarse al pliego.",
      href: CGR(2025, "2025028583"),
    },
    {
      numero: "R-DCP-SICOP-01085-2026",
      organo: DCP,
      fecha: "19-06-2026",
      tema: "Tope del 25 % y su excepción",
      criterio:
        "Al repasar el régimen de la compra estratégica, describe que los arts. 55 y 96 del Reglamento fijan un límite del 25 % en la ponderación total, con excepción de la compra pública innovadora. No decide sobre una compra innovadora.",
      href: CGR(2026, "2026009889"),
    },
    {
      numero: "R-DCP-SICOP-01557-2026",
      organo: DCP,
      fecha: "02-09-2026",
      tema: "Criterio de innovación sin parámetros",
      criterio:
        "Declara con lugar por allanamiento el extremo que alegaba que un criterio de innovación del 10 % sin parámetros excedía el tope del art. 55; la Administración lo eliminó. Sin pronunciamiento de fondo.",
      href: CGR(2026, "2026014544"),
    },
  ],
  otros: [
    {
      titulo: "Dirección de Contratación Pública",
      items: [
        {
          titulo: "Aviso de consulta pública del proyecto de Reglamento de Compra Pública Innovadora",
          detalle: "La Gaceta N.º 153 del 19-08-2025, p. 98; plazo de 10 días hábiles",
          href: "https://www.imprentanacional.go.cr/pub/2025/08/19/COMP_19_08_2025.pdf",
        },
        {
          titulo: "Guía de Criterios de Innovación para las Compras Públicas Estratégicas",
          detalle: "Lineamientos para su definición y verificación, versión 1, 2024; desarrolla los arts. 20 y 21 de la Ley 9986 y es anterior al Decreto 45763",
          href: "https://ricg.org/wp-content/uploads/2025/01/Guia-de-criterios-de-Innovacion.pdf",
        },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 21.546", detalle: "Proyecto de Ley General de Contratación Pública, art. 34, Alcance 192 a La Gaceta del 29-08-2019" },
        { titulo: "Texto sustitutivo", detalle: "16-12-2019, la compra pública innovadora pasa al art. 28" },
        { titulo: "Departamento de Servicios Técnicos", detalle: "Informe jurídico AL-DEST-IJU-027-2020, 18-02-2020" },
        { titulo: "Comisión Especial", detalle: "Dictamen afirmativo unánime, 26-06-2020 (art. 22); moción 5-13, sesión extraordinaria N.° 13, 13-08-2020; texto actualizado del 11-11-2020" },
        { titulo: "Redacción final", detalle: "17-05-2021" },
      ],
    },
    {
      titulo: "Antecedentes del reglamento",
      items: [
        { titulo: "Autoridad de Contratación Pública", detalle: "Sesión ordinaria N.º 03-2024 del 22-03-2024 (aprueba elaborar un reglamento específico) y sesión extraordinaria del 13-02-2026 (reitera la aprobación), según los considerandos X y XII del Decreto 45763" },
      ],
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional) y SINALEVI, versión vigente al 28 de octubre de 2026. Resoluciones e informes: cgrfiles.cgr.go.cr. Al 28 de octubre de 2026 no se conoce ninguna resolución de la Contraloría ni sentencia que aplique el Decreto 45763. Cotejo al 28 de octubre de 2026.",
};
