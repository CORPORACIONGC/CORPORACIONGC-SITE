import { NEXUS, type FuentesDeGuia } from "./tipos";

const TCA = "Tribunal Contencioso Administrativo";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública",
      detalle:
        "Ley N.° 9986, Alcance 109 a La Gaceta 103 del 31-05-2021; texto vigente en SINALEVI (versión 15, con la reforma de la Ley 10971). Arts. 14 f), 46 y 47 (multas, cláusula penal, tope del 25 %, retenciones y procedimiento), 118 (inhabilitación simple y calificada), 119 (causales, exclusión de la oferta, resolución del contrato y prescripción de cinco años), 120 (criterios de graduación), 121 (procedimiento sancionatorio), 122 (alcance de la sanción y fraude de ley), 123 (registro único de sanciones) y 124 a 126 (sanciones a funcionarios)",
      href: SINALEVI(94469, 152662),
    },
    {
      titulo: "Ley de Responsabilidad Laboral de los Contratistas con el Estado",
      detalle:
        "Ley N.° 10971 de 16-09-2026, Alcance 136 a La Gaceta 190 del 08-10-2026, vigente desde su publicación; artículo único (reforma los arts. 14 f) y 119 de la Ley 9986: inciso r) nuevo, corrimiento de los incisos siguientes y párrafo final) y transitorio único",
      href: SINALEVI(108035, 152661),
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública",
      detalle:
        "Decreto Ejecutivo N.° 43808-H, arts. 116 (sanciones económicas en el pliego y tope por líneas), 117 (aplicación y cobro de multas y cláusula penal, agotamiento de la vía) y 313 (contenido del módulo de sanciones del sistema digital unificado)",
      href: SINALEVI(98344, 151216),
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, arts. 21 y 22 (presupuestos y ponderación de la medida cautelar)",
      href: SINALEVI(57436, 146091),
    },
    {
      titulo: "Ley de Contratación Administrativa (derogada)",
      detalle: "Ley N.° 7494, art. 99 (sanción de apercibimiento a particulares, que la Ley 9986 no recogió)",
      href: SINALEVI(24284, 149823),
    },
  ],
  jurisprudencia: [
    {
      numero: "Resolución 2026-002769",
      organo: TCA,
      fecha: "04-05-2026",
      tema: "Medida cautelar contra una inhabilitación calificada",
      criterio:
        "Suspende los efectos de una inhabilitación calificada de dos años impuesta por la CNFL con base en los arts. 118 b) y 121 de la Ley 9986 y ordena retirarla temporalmente de SICOP: tuvo por acreditada la gravedad del daño con prueba contable y estimó que la suspensión no lesiona el interés público, porque si la demanda se rechaza la sanción se ejecutará.",
      href: NEXUS("sen-1-0034-1401813"),
    },
  ],
  otros: [
    {
      titulo: "Publicación oficial",
      items: [
        {
          titulo: "Ley General de Contratación Pública, texto original",
          detalle: "Ley N.° 9986, Alcance 109 a La Gaceta 103 del 31-05-2021 (Imprenta Nacional, PDF)",
          href: "https://www.imprentanacional.go.cr/pub/2021/05/31/ALCA109_31_05_2021.pdf",
        },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y La Gaceta (Imprenta Nacional). Jurisprudencia: Nexus del Poder Judicial. Cotejo al 24 de noviembre de 2026.",
};
