import { type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GACETA = (ruta: string) => `https://www.imprentanacional.go.cr/pub/${ruta}`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley de Planificación Urbana (Ley 4240)",
      detalle: "Art. 17: audiencia pública, aprobación de la Dirección de Urbanismo, adopción y publicación",
      href: SINALEVI(35669, 143656),
    },
    {
      titulo: "Plan Regulador del Cantón de Montes de Oca (vigente)",
      detalle: "Publicado en el Alcance 51 a La Gaceta 165 del 29-08-2006; adoptado en la sesión ordinaria 53-2007 del 30-04-2007; rige desde el 21-05-2007",
      href: SINALEVI(60002, 67308),
    },
    {
      titulo: "Reglamento para la audiencia pública del proceso de actualización y modificación del Plan Regulador del Cantón de Montes de Oca",
      detalle: "Concejo Municipal, sesión ordinaria 126-2026 del 28-09-2026: arts. 3 a 8, 12, 13 y 16",
      href: SINALEVI(107994, 152601),
    },
    {
      titulo: "Reglamento para la incorporación de la variable ambiental en planes de ordenamiento territorial (Decreto 44710-MINAE)",
      detalle: "Alcance 21 a La Gaceta 31 del 17-02-2025: arts. 13 a 15 (revisión y viabilidad), 19 (vigencia), 20 (modificaciones) y 26 a 29 (participación ante SETENA)",
      href: GACETA("2025/02/17/ALCA21_17_02_2025.pdf"),
    },
    {
      titulo: "Reglamento de Audiencias Públicas para el proyecto de actualización del Plan Regulador del Cantón de Belén",
      detalle: "Sesión ordinaria 64-2026 del 27-10-2026; La Gaceta 215 del 12-11-2026, págs. 89 a 91",
      href: GACETA("2026/11/12/COMP_12_11_2026.pdf"),
    },
    {
      titulo: "Reglamento de Audiencias Públicas Presencial y Virtual para el Plan Regulador del Casco Urbano de Quepos",
      detalle: "Texto definitivo en La Gaceta 210 del 05-11-2026, págs. 63 y 64",
      href: GACETA("2026/11/05/COMP_05_11_2026.pdf"),
    },
    {
      titulo: "Expediente legislativo 25.871, «Ley para garantizar la participación ciudadana en los planes reguladores»",
      detalle: "Presentado el 27-10-2026; Alcance 147 a La Gaceta 209 del 04-11-2026",
      href: GACETA("2026/11/04/ALCA147_04_11_2026.pdf"),
    },
  ],
  jurisprudencia: [],
  otros: [
    {
      titulo: "Sala Constitucional",
      items: [
        { titulo: "Voto 2009-18358", detalle: "02-12-2009, exp. 08-015928-0007-CO: anula la convocatoria, las audiencias y el acuerdo de aprobación del Plan Regulador de La Fortuna de San Carlos por falta de publicación en La Gaceta y antelación insuficiente; transcribe el voto 2004-12242" },
        { titulo: "Voto 2005-02589", detalle: "09-03-2005, exp. 03-009943-0007-CO: ordena a la Municipalidad de Palmares someter a audiencia pública el proyecto final del plan con sus estudios, especialmente el ambiental" },
        { titulo: "Voto 2022-25374", detalle: "28-10-2022, exp. 22-018256-0007-CO: la sede natural para vigilar la participación en la audiencia de un plan regulador es la justicia ordinaria (Plan Regulador Costero de Sámara)" },
      ],
    },
    {
      titulo: "Municipalidad de Montes de Oca y prensa",
      items: [
        {
          titulo: "«Aclaración pública solicitada por la Municipalidad de Montes de Oca»",
          detalle: "Semanario Universidad, 26-11-2026: condición de la viabilidad ambiental y notificación de SETENA del 24-11-2026",
          href: "https://semanariouniversidad.com/opinion/aclaracion-publica-solicitada-por-la-municipalidad-de-montes-de-oca/",
        },
        {
          titulo: "«Aclaración pública de la Municipalidad de Montes de Oca»",
          detalle: "Semanario Universidad, 09-09-2026: zona T6, altura base de 12 pisos y máxima de 24",
          href: "https://semanariouniversidad.com/opinion/aclaracion-publica-de-la-municipalidad-de-montes-de-oca/",
        },
        {
          titulo: "Proyecto de actualización del plan regulador",
          detalle: "Sitio web de la Municipalidad: contratación, borradores de reglamentos y formulario de observaciones",
          href: "https://www.montesdeoca.go.cr/la_municipalidad/transparencia/Proyecto_actualizacion_plan_regulador.aspx",
        },
        {
          titulo: "«Vecinos de Montes de Oca protestaron contra plan regulador y exigieron acceso a la información»",
          detalle: "Semanario Universidad, 23-11-2026",
          href: "https://semanariouniversidad.com/pais/vecinos-de-montes-de-oca-protestaron-contra-plan-regulador-y-exigieron-acceso-a-la-informacion/",
        },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y La Gaceta (Imprenta Nacional). Votos de la Sala Constitucional leídos en su texto íntegro en las bases de la firma. La convocatoria de la audiencia no se localizó en las ediciones de La Gaceta de octubre y noviembre de 2026 revisadas. Estado al 26 de noviembre de 2026.",
};
