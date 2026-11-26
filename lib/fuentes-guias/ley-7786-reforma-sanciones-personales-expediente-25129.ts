import { type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GACETA = (ruta: string) => `https://www.imprentanacional.go.cr/pub/${ruta}`;
const SIL = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Expediente legislativo 25.129 (redacción final)",
      detalle:
        "«Reforma de los artículos 15 bis, 15 ter y 81 y adición del artículo 15 quinquies a la Ley 7786». Comisión de Redacción, 19-11-2026: arts. 1 y 2, transitorios I y II y cláusula de vigencia. Texto aprobado y pendiente de sanción",
      href: SIL,
    },
    {
      titulo: "Expediente 25.129 en el Sistema de Información Legislativa",
      detalle:
        "Presentado por el Poder Ejecutivo el 05-08-2025 (Alcance 101 a La Gaceta 147 del 08-08-2025); primer debate el 17-11-2026; segundo debate el 19-11-2026; remitido a Casa Presidencial el 24-11-2026. Sin número de ley al 26-11-2026",
      href: SIL,
    },
    {
      titulo: "Ley 7786, sobre estupefacientes, sustancias psicotrópicas, drogas de uso no autorizado, actividades conexas, legitimación de capitales y financiamiento al terrorismo",
      detalle: "Arts. 14, 15, 15 bis, 15 ter, 15 quater y 81. Versión 14 de 14 de SINALEVI, con la reforma de la Ley 10961",
      href: SINALEVI(29254, 152427),
    },
    {
      titulo: "Ley 10961",
      detalle:
        "Sancionada el 09-06-2026; Alcance 78 a La Gaceta 113 del 19-06-2026. Adiciona el art. 15 quater a la Ley 7786 y da su texto actual al art. 81",
      href: GACETA("2026/06/19/ALCA78_19_06_2026.pdf"),
    },
    {
      titulo: "Reforma del Acuerdo SUGEF 11-18 (inscripción de sujetos obligados y registro de OSFL): resolución motivada y matriz de observaciones",
      detalle:
        "CONASSIF, sección I del artículo 8 del acta de la sesión 2062-2026, del 02-11-2026; Alcance 149 a La Gaceta 214 del 11-11-2026, págs. 427 a 468",
      href: GACETA("2026/11/11/ALCA149_11_11_2026.pdf"),
    },
    {
      titulo: "Acuerdo SUGEF 11-18 (texto vigente)",
      detalle: "Versión 12, con fecha 02-11-2026, en el portal de normativa vigente de la SUGEF",
      href: "https://www.sugef.fi.cr/normativa/normativa_vigente.aspx",
    },
    {
      titulo: "Constitución Política",
      detalle: "Arts. 126 (diez días hábiles para objetar un proyecto aprobado) y 129 (eficacia de las leyes desde el día que ellas designen)",
      href: SINALEVI(871, 147492),
    },
  ],
  jurisprudencia: [],
  otros: [
    {
      titulo: "Trámite legislativo",
      items: [
        {
          titulo: "Informe jurídico AL-DEST-IJU-321-2026",
          detalle:
            "Departamento de Estudios, Referencias y Servicios Técnicos de la Asamblea Legislativa, 02-11-2026: conexidad, supresión de la cláusula de imprescriptibilidad, votación calificada y consultas preceptivas",
          href: SIL,
        },
        {
          titulo: "Dictamen afirmativo unánime",
          detalle: "Comisión Permanente Especial de Seguridad y Narcotráfico, 08-04-2026, con el resumen de las consultas institucionales",
          href: SIL,
        },
        {
          titulo: "Votación en segundo debate",
          detalle: "Sesión del Plenario del 19-11-2026: 50 votos a favor, según el registro de votaciones de Delfino.cr",
          href: "https://delfino.cr/asamblea/votaciones/proyecto/20261119004",
        },
      ],
    },
  ],
  pie: "Textos normativos: SIL de la Asamblea Legislativa, SINALEVI, La Gaceta (Imprenta Nacional) y portal de normativa de la SUGEF. Estado del expediente verificado en el SIL el 26 de noviembre de 2026.",
};
