import { type FuentesDeGuia, NEXUS } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GACETA = (ruta: string) => `https://www.imprentanacional.go.cr/pub/${ruta}`;
const SIL = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Expediente legislativo 25.692",
      detalle:
        "«Reforma constitucional para modernizar el sistema de control fiscal y transitar hacia un modelo de fiscalización ex post; modificación artículo 184». Presentado el 04-08-2026; Alcance 105 a La Gaceta 151 del 12-08-2026: exposición de motivos, artículo único y disposición transitoria única",
      href: GACETA("2026/08/12/ALCA105_12_08_2026.pdf"),
    },
    {
      titulo: "Expediente legislativo 25.901",
      detalle:
        "«Reforma al artículo 11, 12 y adición de un artículo 32 bis de la Ley Orgánica de la Contraloría General de la República». Presentado el 09-11-2026; Alcance 153 a La Gaceta 218 del 17-11-2026: exposición de motivos y artículos 1 a 3",
      href: GACETA("2026/11/17/ALCA153_17_11_2026.pdf"),
    },
    {
      titulo: "Expedientes 25.692 y 25.901 en el Sistema de Información Legislativa",
      detalle:
        "Fichas de trámite consultadas el 26-11-2026: el 25.692 ingresó en el orden del día del Plenario el 05-08-2026, sin trámite posterior; el 25.901 fue enviado a publicación el 10-11-2026. Ninguno tiene dictámenes, informes técnicos ni textos sustitutivos",
      href: SIL,
    },
    {
      titulo: "Constitución Política",
      detalle:
        "Arts. 116 (períodos de sesiones ordinarias, reformado por la Ley 9850 de 2020), 118 (sesiones extraordinarias), 183 y 184 (Contraloría General de la República) y 195 (reforma parcial)",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Ley Orgánica de la Contraloría General de la República (Ley 7428)",
      detalle: "Arts. 11, 12, 18 (fiscalización presupuestaria), 20 (aprobación de actos y contratos), 26 (reformado por la Ley 10881 de 2026) y 32 (memoria anual)",
      href: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=21629",
    },
    {
      titulo: "Ley General de Control Interno (Ley 8292)",
      detalle: "Art. 2 a): definición de administración activa",
      href: SINALEVI(49185, 150686),
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)",
      detalle: "Art. 96 a): consulta preceptiva de los proyectos de reforma constitucional",
      href: SINALEVI(38533, 127124),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2024-028774", organo: SC, fecha: "01-10-2024", tema: "Segunda «Ley Jaguar» (exp. 24.467)", criterio: "Por mayoría, no encuentra vicio en la reforma del primer párrafo del art. 12 de la Ley 7428 que prohíbe a la Contraloría «sustituir o abarcar» asuntos de la administración activa; un voto particular la condiciona a que se mantengan incólumes sus potestades y tres magistrados la declaran inconstitucional. Declara inconstitucionales los arts. 4 y 5 del proyecto.", href: NEXUS("sen-1-0007-1264836") },
    { numero: "Voto 2024-021375", organo: SC, fecha: "29-07-2024", tema: "Primera «Ley Jaguar» (exp. 24.364)", criterio: "Declara inconstitucionales las reformas de los arts. 11, 12, 17 y 22 de la Ley 7428; en el art. 12, salvo los verbos «sustituir» y «abarcar». El legislador ordinario no puede rebajar, disminuir ni suprimir las competencias constitucionales de la Contraloría, que comprenden el control previo y el posterior.", href: NEXUS("sen-1-0007-1250313") },
    { numero: "Voto 2022-023239", organo: SC, fecha: "05-10-2022", tema: "Universidades y Hacienda Pública", criterio: "Rechaza la acción de las universidades contra la aplicación de la regla fiscal: no existe una Hacienda Universitaria separada de la Hacienda Pública y las universidades están sujetas al control y la fiscalización de la Contraloría.", href: NEXUS("sen-1-0007-1147947") },
    { numero: "Voto 2018-002396", organo: SC, fecha: "14-02-2018", tema: "Refrendo (exp. 20.202)", criterio: "Por mayoría, la delegación del refrendo en las administraciones es inconstitucional: el art. 184 inciso 1 asigna esa competencia a la Contraloría en forma «expresa, inequívoca e indelegable» y cualquier delegación requiere reforma constitucional. Tres magistrados salvan el voto.", href: NEXUS("sen-1-0007-753360") },
  ],
  otros: [
    {
      titulo: "Antecedentes y trámite",
      items: [
        {
          titulo: "Asamblea Nacional Constituyente de 1949",
          detalle: "Acta n.º 165, sesión del 11-10-1949: aprobación del artículo sobre las atribuciones de la Contraloría, con el visado y el refrendo",
        },
        {
          titulo: "Convocatoria a sesiones extraordinarias 2026-2027",
          detalle: "Lista de expedientes convocados por el Poder Ejecutivo desde el 01-11-2026, que incluye el 25.692, según Delfino.cr (29-10-2026)",
          href: "https://delfino.cr/2026/10/gobierno-convoca-112-proyectos-a-sesiones-extraordinarias-incluida-reforma-de-reeleccion-presidencial",
        },
      ],
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional), SIL de la Asamblea Legislativa, SINALEVI y SCIJ. Votos de la Sala Constitucional en Nexus PJ. Estado de los expedientes verificado en el SIL el 26 de noviembre de 2026.",
};
