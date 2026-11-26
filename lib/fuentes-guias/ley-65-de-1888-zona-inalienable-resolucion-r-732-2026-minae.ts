import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Resolución R-732-2026-MINAE",
      detalle: "Ministerio de Ambiente y Energía, 18-11-2026; Alcance N.° 154 a La Gaceta N.° 220, 19 de noviembre de 2026 (Imprenta Nacional). Considerandos y por tanto, apartados primero a décimo quinto",
      href: "https://www.imprentanacional.go.cr/pub/2026/11/19/ALCA154_19_11_2026.pdf",
    },
    {
      titulo: "Declara inalienables las montañas en que tienen su origen las aguas que abastecen a Heredia y Alajuela",
      detalle: "Ley N.° 65 (Decreto N.° LXV) de 30-07-1888, arts. 1 y 2; nota de SINALEVI sobre el Decreto Ejecutivo N.° 39259-MINAE de 15-10-2015",
      href: SINALEVI(6647, 102582),
    },
    {
      titulo: "Ley Forestal",
      detalle: "Ley N.° 7575, arts. 13 y 14 (patrimonio natural del Estado)",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 173 (nulidad absoluta, evidente y manifiesta) y 183 (revisión de oficio y lesividad)",
      href: SINALEVI(13231, 150737),
    },
    {
      titulo: "Constitución Política",
      detalle: "Arts. 34 y 45, citados en el apartado primero de la resolución",
      href: SINALEVI(871, 147492),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2008-012109", organo: SC, fecha: "05-08-2008", tema: "Zona de la Ley 65 de 1888", criterio: "La ley sigue vigente; ordenó al MINAE delimitar físicamente la zona y luego iniciar la recuperación de los terrenos ocupados por particulares, y a las municipalidades de la zona abstenerse de otorgar permisos dentro de ella.", href: NEXUS("sen-1-0007-416834") },
    { numero: "Voto 2011-003731", organo: SC, fecha: "22-03-2011", tema: "Delimitación y debido proceso", criterio: "La sola delimitación no afecta la propiedad; si una finca resulta afectada, la Administración debe seguir los procedimientos legales y garantizar el debido proceso, y la discusión sobre la propiedad frente a la inalienabilidad es de legalidad ordinaria.", href: NEXUS("sen-1-0007-509749") },
    { numero: "Voto 2023-017109", organo: SC, fecha: "14-07-2023", tema: "Identificación y recuperación", criterio: "Con la zona ya amojonada, ordenó al MINAE identificar en seis meses todos los terrenos, coordinar en los seis siguientes las acciones de recuperación e iniciar, cuando corresponda, los procesos necesarios, con informes trimestrales.", href: NEXUS("sen-1-0007-1170912") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-480-2014", detalle: "19-12-2014, al Ministerio del Ambiente y Energía: plano de la zona, cerro Concordia (Guararí), facultad del art. 2 y terrenos inscritos antes y después de la ley", href: PGR(18660) },
    { titulo: "Opinión jurídica OJ-020-2009", detalle: "20-02-2009, a la Asamblea Legislativa: vigencia de la Ley 65 de 1888, modificación de límites y propiedades inscritas", href: PGR(15731) },
    { titulo: "Opinión jurídica OJ-118-2004", detalle: "27-09-2004: vigencia de la Ley 65 de 1888 (citada en la OJ-020-2009)", href: PGR(12775) },
    { titulo: "Dictamen C-128-1999", detalle: "24-06-1999, zona marítimo terrestre: efectos de la inscripción registral sobre las potestades de autotutela demanial", href: PGR(7135) },
  ],
  pie: "Resolución: texto publicado en el Alcance N.° 154 a La Gaceta N.° 220 de 19-11-2026. Normas: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Pronunciamientos de la Procuraduría: SINALEVI. Cotejo al 26 de noviembre de 2026.",
};
