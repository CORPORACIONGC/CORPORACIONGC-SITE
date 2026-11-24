import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const CGR = (ruta: string) => `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${ruta}`;
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley 10987: adición de un inciso k) al artículo 79 de la Ley General de Policía (póliza de responsabilidad patrimonial y representación legal de los funcionarios policiales)",
      detalle: "Artículo único; expediente legislativo 25.311; sancionada el 09-11-2026; publicada y vigente desde el 17-11-2026 (Alcance 153 a La Gaceta 218)",
      href: SINALEVI(108311, 153101),
    },
    {
      titulo: "Ley General de Policía (Ley 7410)",
      detalle: "Arts. 6, 47, 48 (incisos g y h), 54 y 79 (incisos h y k)",
      href: SINALEVI(66525, 150661),
    },
    {
      titulo: "Ley General de la Administración Pública (Ley 6227)",
      detalle: "Arts. 190, 198, 199, 201 a 205, 207, 208, 210 y 211",
      href: SINALEVI(13231, 150737),
    },
    {
      titulo: "Constitución Política",
      detalle: "Art. 11: responsabilidad personal de los funcionarios",
      href: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=871",
    },
    {
      titulo: "Ley Orgánica de la Procuraduría General de la República (Ley 6815)",
      detalle: "Art. 3, inciso g): defensa penal de los servidores del Estado y sus exclusiones",
      href: SINALEVI(38915, 150680),
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)",
      detalle: "Art. 12, inciso 4: el funcionario como parte demandada",
      href: SINALEVI(57436, 146091),
    },
    {
      titulo: "Ley de la Administración Financiera de la República y Presupuestos Públicos (Ley 8131)",
      detalle: "Arts. 13 (caución) y 108 (responsabilidad administrativa y civil del servidor)",
      href: SINALEVI(47258, 142574),
    },
    {
      titulo: "Ley Reguladora del Contrato de Seguros (Ley 8956)",
      detalle: "Art. 83: el seguro de responsabilidad civil no cubre dolo o culpa grave, multas ni penas",
      href: SINALEVI(71064, 131138),
    },
    {
      titulo: "Ley Reguladora del Mercado de Seguros (Ley 8653)",
      detalle: "Art. 7: contratación de seguros por el Estado con el INS",
      href: SINALEVI(63749, 128066),
    },
    {
      titulo: "Ley que crea el concepto de salario base (Ley 7337)",
      detalle: "Art. 2: definición del salario base al que remite la Ley 10987",
      href: SINALEVI(20026, 21317),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 000168-F-TC-2025", organo: "Tribunal de Casación de lo Contencioso Administrativo", fecha: "26-11-2025", tema: "Demanda solo contra los funcionarios", criterio: "La víctima puede demandar únicamente a los servidores públicos por daños causados en el ejercicio de sus funciones; la defensa de los funcionarios codemandados corresponde al abogado que cada uno designe, porque la Procuraduría representa al Estado.", href: NEXUS("sen-1-1011-1362448") },
    { numero: "Voto 2026-019822", organo: "Sala Constitucional", fecha: "03-06-2026", tema: "Convención colectiva con asesoría legal gratuita", criterio: "Rechaza de plano, por falta de fundamentación, la acción contra varias cláusulas de la convención colectiva de la Municipalidad de Acosta, entre ellas la de asesoría legal gratuita a choferes procesados penalmente; no examina el fondo.", href: NEXUS("sen-1-0007-1400419") },
  ],
  contraloria: [
    { numero: "Oficio 08991-2025 (DFOE-CAP-0885)", organo: "Contraloría General de la República", fecha: "07-05-2025", tema: "Póliza para jerarcas", criterio: "Financiar con fondos públicos un seguro de responsabilidad civil que beneficie directamente a jerarcas carece de base legal; solo la Hacienda Pública puede ser beneficiaria de un seguro contratado por el Estado.", href: CGR("2025/SIGYD_D/SIGYD_D_2025010652.pdf") },
    { numero: "Oficio 22113-2025 (DJ-2275, DFOE-CAP-2078)", organo: "Contraloría General de la República", fecha: "12-11-2025", tema: "Oficio preventivo sobre pólizas", criterio: "Reitera a toda la Administración que una póliza financiada con fondos públicos cuyo beneficiario directo sea el funcionario carece de sustento legal.", href: CGR("2025/SIGYD_D/SIGYD_D_2025026379.pdf") },
    { numero: "Oficio 02534-2026 (DFOE-GOB-0092)", organo: "Contraloría General de la República", fecha: "02-03-2026", tema: "Proyecto de ley 25.311", criterio: "El proyecto es inconsistente con el régimen de responsabilidad; los policías ya cuentan con la Defensa Pública y la Dirección Policial de Apoyo Legal; falta información estadística y financiera.", href: CGR("2026/SIGYD_D/SIGYD_D_2026003257.pdf") },
    { numero: "Oficio 8501-2026 (DJ-1209)", organo: "Contraloría General de la República", fecha: "03-07-2026", tema: "Texto dictaminado del proyecto 25.311", criterio: "Remite al criterio anterior y advierte que el texto exime a la Procuraduría sin integrar las facultades de la Defensa Pública y de la Dirección Policial de Apoyo Legal.", href: CGR("2026/SIGYD_D/SIGYD_D_2026010661.pdf") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-196-2008", detalle: "09-06-2008: sin norma que lo autorice, la institución no puede pagar la defensa de funcionarios procesados por actos del cargo, en ningún tipo de proceso; la defensa penal del art. 3.g se limita a la Administración central", href: PGR(15213) },
    { titulo: "Dictamen C-203-2014", detalle: "25-06-2014: la asesoría jurídica ministerial no puede representar en juicio a funcionarios a quienes se exige responsabilidad personal, pero sí asistirlos en los recursos de amparo", href: PGR(18314) },
    { titulo: "Dictamen C-115-2018", detalle: "25-05-2018: las asesorías jurídicas no están habilitadas para representar a funcionarios demandados en lo personal en la vía contencioso-administrativa", href: PGR(20456) },
    { titulo: "Dictamen C-030-2025", detalle: "12-02-2025: el art. 7 de la Ley 8653 habilita al Estado a contratar los seguros que requieran sus necesidades institucionales; la caución del art. 13 de la Ley 8131 la paga el funcionario", href: PGR(24836) },
    { titulo: "Opinión jurídica OJ-049-2026", detalle: "13-04-2026: observaciones al proyecto 25.311 sobre funciones policiales propiamente dichas, exclusiones por dolo o culpa grave y financiamiento", href: PGR(25357) },
  ],
  otros: [
    {
      titulo: "Publicación y trámite legislativo",
      items: [
        { titulo: "Ley 10987 en La Gaceta", detalle: "Alcance 153 a La Gaceta 218, 17-11-2026 (Imprenta Nacional)", href: "https://www.imprentanacional.go.cr/pub/2026/11/17/ALCA153_17_11_2026.pdf" },
        { titulo: "Expediente legislativo 25.311", detalle: "Presentado por el Poder Ejecutivo el 19-11-2025; dictamen de la Comisión de Asuntos Jurídicos el 24-06-2026; segundo debate el 15-10-2026 (Sistema de Información Legislativa)" },
      ],
    },
  ],
  pie: "Texto de la Ley 10987 cotejado con el texto aprobado del Sistema de Información Legislativa y con su publicación en el Alcance 153 a La Gaceta 218; demás normas cotejadas con la versión vigente del SINALEVI. Resoluciones leídas en Nexus del Poder Judicial, oficios de la Contraloría en su repositorio de documentos y pronunciamientos de la Procuraduría en el SINALEVI. Corte: 24 de noviembre de 2026.",
};
