import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera de la Corte";
const DCP = "CGR, División de Contratación Pública";

const CGR = (anio: number, sigyd: string) =>
  `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${anio}/SIGYD_D/SIGYD_D_${sigyd}.pdf`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública",
      detalle: "Ley N.° 9986, arts. 41 (precio), 43 (equilibrio económico, reajuste y revisión de precios) y 107 (prescripción de cinco años). Alcance 109 a La Gaceta 103 del 31-05-2021",
      href: "https://www.imprentanacional.go.cr/pub/2021/05/31/ALCA109_31_05_2021.pdf",
    },
    {
      titulo: "Reglamento para el Reajuste de Precios en los Contratos de Obra Pública y la Revisión de Precios en los Contratos de Bienes y Servicios",
      detalle: "Decreto Ejecutivo N.° 44937-H-MICITT-MIDEPLAN, arts. 9 a 11 (índices oficiales), 25 (fórmula), 64 (prescripción) y 65 (deroga el Decreto 33114). Alcance 46 a La Gaceta 64 del 03-04-2025; rige cuatro meses después de su publicación (art. 66)",
      href: "https://www.imprentanacional.go.cr/pub/2025/04/03/ALCA46_03_04_2025.pdf",
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, art. 123 (actualización de las obligaciones dinerarias en sentencia)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
  ],
  jurisprudencia: [
    {
      numero: "Voto 1998-06432",
      organo: SC,
      fecha: "04-09-1998",
      tema: "El reajuste de precios como derecho del contratista",
      criterio:
        "Declara con lugar la acción y anula normas que recortaban el reajuste: los reajustes no son materia que las partes puedan pactar o excluir, están reconocidos en todo contrato con el Estado y ni la ley ni el reglamento pueden vaciarlos de contenido; solo cabe fijarles límites razonables y proporcionados.",
      href: NEXUS("sen-1-0007-82618"),
    },
    {
      numero: "Sentencia 1577-F-S1-2013",
      organo: S1,
      fecha: "18-11-2013",
      tema: "El reajuste se pide y se prueba",
      criterio:
        "Declara sin lugar la casación de una contratista del ICE: el reajuste no procede de oficio, es un derecho disponible que el contratista debe solicitar acreditando la variación de sus costos. Se resolvió con la Ley 7494, hoy derogada.",
      href: NEXUS("sen-1-0004-888390"),
      gc: true,
    },
  ],
  contraloria: [
    {
      numero: "R-DCP-SICOP-01010-2025",
      organo: DCP,
      fecha: "09-06-2025",
      tema: "Pliego sin cláusula de reajuste",
      criterio:
        "Objeción a una licitación mayor de la CCSS. Con base en el art. 43 de la Ley 9986, declara con lugar el extremo y ordena incorporar al pliego la cláusula de reajuste o revisión de precios que omitía.",
      href: CGR(2025, "2025012841"),
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional) y SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Resoluciones de la Contraloría: cgrfiles.cgr.go.cr. Cotejo al 26 de octubre de 2026.",
};
