import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const ALCANCE_153 = "https://www.imprentanacional.go.cr/pub/2026/11/17/ALCA153_17_11_2026.pdf";
const CGR = "Contraloría General de la República";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley 10983, Cierre del Ministerio de Gobernación y Policía de Costa Rica y reordenamiento de sus competencias desconcentradas",
      detalle: "Expediente 24.719; aprobada el 12-10-2026, sancionada el 09-11-2026 y publicada en el Alcance 153 a La Gaceta 218 del 17-11-2026; rige desde el 01-05-2027. Arts. 1, 2, 3 a 34 (reformas), 35 a 38 y transitorios I a IX. Texto cotejado en La Gaceta; aún no figura en la base normativa",
      href: ALCANCE_153,
    },
    {
      titulo: "Ley 10981, Ley de creación del Ministerio de Vivienda y Asentamientos Humanos",
      detalle: "Expediente 24.410; aprobada el 06-10-2026, sancionada el 10-11-2026 y publicada en el mismo Alcance 153; rige desde su publicación. Arts. 1, 3, 6, 8, 9 y 10 y transitorios I a III",
      href: SINALEVI(108304, 153089),
    },
    { titulo: "Constitución Política", detalle: "Art. 141 (los ministros que determine la ley; recargo de carteras)", href: SINALEVI(871, 147492) },
    { titulo: "Ley General de la Administración Pública (Ley 6227)", detalle: "Arts. 23 (carteras ministeriales), 24 (creación y supresión de ministerios por ley distinta a la de presupuesto) y 47", href: SINALEVI(13231, 150737) },
    { titulo: "Ley de Reestructuración del Poder Ejecutivo (Ley 6812)", detalle: "Art. 9, reformado por el art. 26 de la Ley 10983", href: SINALEVI(33153, 34973) },
    { titulo: "Ley General de Migración y Extranjería (Ley 8764)", detalle: "Arts. 9, 10, 12, 14, 25, 186, 246 y 247, reformados por el art. 4 de la Ley 10983", href: SINALEVI(66139, 145230) },
    { titulo: "Ley de Creación de la Junta Administrativa de la Imprenta Nacional (Ley 5394)", detalle: "Arts. 1, 3, 4, 5, 9 y 10, reformados por el art. 3 de la Ley 10983", href: SINALEVI(6544, 128591) },
    { titulo: "Ley sobre el Desarrollo de la Comunidad (Ley 3859)", detalle: "Arts. 1, 8, 11, 14 ter y 40, reformados por el art. 5 de la Ley 10983; texto anterior del art. 1", href: SINALEVI(38715, 143175) },
    { titulo: "Ley de Asociaciones (Ley 218)", detalle: "Arts. 5 y 19; texto anterior del art. 5 (Registro de Asociaciones del Ministerio de Gobernación)", href: SINALEVI(32764, 146082) },
    { titulo: "Ley para Garantizar al País Mayor Seguridad y Orden (Ley 6122)", detalle: "Arts. 7, 9 y 25, reformados por el art. 31 de la Ley 10983", href: SINALEVI(14358, 15425) },
    { titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)", detalle: "Art. 12 (parte demandada; órganos con personalidad jurídica instrumental)", href: SINALEVI(57436, 146091) },
    { titulo: "Ley de Salarios de la Administración Pública (Ley 2166)", detalle: "Art. 39 (auxilio de cesantía con tope de ocho años)", href: SINALEVI(3672, 147114) },
    { titulo: "Código de Trabajo (Ley 2)", detalle: "Art. 686 (prohibición de ocupar cargos públicos tras recibir cesantía y reintegro)", href: SINALEVI(8045, 150791) },
    { titulo: "Ley 9903 (cierre del Fondo Nacional de Becas)", detalle: "Transitorio VIII, antecedente de la cláusula de traslado o liquidación del personal", href: SINALEVI(92572, 122592) },
    { titulo: "Ley Orgánica del INVU (Ley 1788)", detalle: "Art. 5, inciso f), derogado por el art. 8 de la Ley 10981", href: SINALEVI(32164, 85968) },
    { titulo: "Ley del Sistema Financiero Nacional para la Vivienda (Ley 7052)", detalle: "Art. 6, inciso ñ), adicionado por el art. 9 de la Ley 10981", href: SINALEVI(12391, 151218) },
    { titulo: "Ley Marco para la Declaratoria de Zona Urbana Litoral (Ley 9221)", detalle: "Arts. 3, 4 y 6, reformados por el art. 13 de la Ley 10983 (competencia al MIVAH)", href: SINALEVI(77069, 146952) },
    {
      titulo: "Otras leyes reformadas por la Ley 10983",
      detalle: "Leyes 276 (Aguas), 5811 y 10267 (propaganda), 6123 (radioaficionados), 6725 (asuetos), 7440 (espectáculos públicos), 7768 (Correos) y Código de Comercio, arts. 340 y 343, entre otras",
      href: ALCANCE_153,
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2026-041713", organo: "Sala Constitucional", fecha: "28-10-2026", tema: "Competencia del MIVAH", criterio: "Rechaza de plano, por falta de fundamentación, la acción contra el Decreto 25902-MIVAH-MP-MINAE que alegaba que el MIVAH carecía de ley que le diera competencia en planificación urbana.", href: NEXUS("sen-1-0007-1436952") },
  ],
  contraloria: [
    { numero: "Oficio 18181-2025 (DFOE-GOB-0433)", organo: CGR, fecha: "20-10-2025", tema: "Imprenta Nacional en el expediente 24.719", criterio: "Criterio no vinculante a la Asamblea: la Imprenta Nacional y la Procuraduría tienen naturaleza y funciones distintas, ejecutivas las de la primera y consultivas las de la segunda.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2025/SIGYD_D/SIGYD_D_2025022080.pdf" },
    { numero: "Informe DFOE-SOC-38-2007", organo: CGR, fecha: "19-07-2007", tema: "Rectoría del MIVAH", criterio: "El MIVAH, incluido en la Ley de Presupuesto desde 1986, carecía de una ley orgánica que definiera sus competencias.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2007/SIGYD_D_2007012700.doc" },
  ],
  procuraduria: [
    { titulo: "Dictamen C-212-1992", detalle: "22-12-1992: sin ley que prevea el Ministerio de Vivienda, su titular es un ministro sin cartera y no puede firmar decretos", href: PGR(421) },
    { titulo: "Dictamen C-226-2007", detalle: "09-07-2007: Estado como patrono único; el traslado dentro del Estado mantiene la relación de empleo y la cesantía es una expectativa de derecho", href: PGR(14636) },
    { titulo: "Dictamen C-027-2010", detalle: "17-02-2010: al regir la Ley 8764, el Tribunal Administrativo Migratorio asumió aun las apelaciones presentadas antes y no resueltas por la ministra de Gobernación", href: PGR(16202) },
    { titulo: "Dictamen C-476-2020", detalle: "15-12-2020: cierre de FONABE por la Ley 9903; el funcionario decide si continúa, no elige destino; traslado con las reglas del traslado forzoso; cesantía según el art. 39 de la Ley de Salarios", href: PGR(22480) },
  ],
  pie: "Textos de las Leyes 10983 y 10981 cotejados con el Alcance 153 a La Gaceta 218 del 17 de noviembre de 2026; la Ley 10981 también con su versión del SINALEVI. Las demás normas, con el SINALEVI. Voto leído en Nexus del Poder Judicial; dictámenes de la Procuraduría en el SINALEVI y documentos de la Contraloría en su repositorio. Corte: 24 de noviembre de 2026.",
};
