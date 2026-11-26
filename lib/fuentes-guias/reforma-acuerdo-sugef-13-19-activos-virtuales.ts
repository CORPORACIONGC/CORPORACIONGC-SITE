import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const GACETA = (ruta: string) => `https://www.imprentanacional.go.cr/pub/${ruta}`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Reforma del Acuerdo SUGEF 13-19 (texto aprobado)",
      detalle:
        "CONASSIF, artículo 12 del acta de la sesión 2064-2026, del 09-11-2026; Alcance 149 a La Gaceta 214 del 11-11-2026, págs. 545 a 555. Rige desde su publicación; disposición transitoria única de seis meses",
      href: GACETA("2026/11/11/ALCA149_11_11_2026.pdf"),
    },
    {
      titulo: "Reforma del Acuerdo SUGEF 13-19 (texto sometido a consulta)",
      detalle:
        "CONASSIF, artículo 9 del acta de la sesión 2053-2026, del 28-09-2026; Alcance 134 a La Gaceta 187 del 05-10-2026, pág. 106; diez días hábiles para observaciones",
      href: GACETA("2026/10/05/ALCA134_05_10_2026.pdf"),
    },
    {
      titulo: "Ley 7786, sobre estupefacientes, sustancias psicotrópicas, drogas de uso no autorizado, actividades conexas, legitimación de capitales y financiamiento al terrorismo",
      detalle: "Arts. 15, 15 bis, 15 quater, 16, 33 bis y 81. Versión 14 de 14 de SINALEVI, con la reforma de la Ley 10961",
      href: SINALEVI(29254, 152427),
    },
    {
      titulo: "Ley 10961",
      detalle:
        "Sancionada el 09-06-2026; Alcance 78 a La Gaceta 113 del 19-06-2026. Adiciona el art. 15 quater a la Ley 7786 y reforma sus arts. 16, 16 bis, 25, 33, 33 bis, 81, 86 y 123; art. 4: reglamentación y vigencia",
      href: GACETA("2026/06/19/ALCA78_19_06_2026.pdf"),
    },
    {
      titulo: "Constitución Política",
      detalle: "Art. 129: las leyes surten efectos desde el día que ellas designen",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Acuerdo SUGEF 13-19 (texto integrado con la reforma)",
      detalle: "Versión 7, del 11-11-2026, publicada en el portal de normativa vigente de la SUGEF, que retiró la versión 6",
      href: "https://www.sugef.fi.cr/normativa/normativa_vigente/SUGEF%2013-19%20(v7%2011%20de%20noviembre%20de%202026).pdf",
    },
    {
      titulo: "Reforma del Acuerdo SUGEF 11-18 (inscripción y registro de OSFL)",
      detalle:
        "CONASSIF, artículo 8 del acta de la sesión 2062-2026, del 02-11-2026; Alcance 148 a La Gaceta 212 del 09-11-2026, pág. 349. Su resolución motivada, con la matriz de observaciones, se publicó en el Alcance 149 a La Gaceta 214 del 11-11-2026 (págs. 427 y siguientes) y responde en la pág. 468 que el art. 15 quater «será considerado en otra reforma». La SUGEF publica el texto integrado como versión 12, del 02-11-2026",
      href: GACETA("2026/11/09/ALCA148_09_11_2026.pdf"),
    },
  ],
  jurisprudencia: [
    { numero: "Voto 15543-2020", organo: SC, fecha: "19-08-2020", tema: "Inscripción ante la SUGEF", criterio: "Rechaza la acción de la Cámara de Corredores de Bienes Raíces: la inscripción ante la SUGEF del art. 15 bis no es una regulación desproporcionada ni impide ejercer la actividad.", href: NEXUS("ext-1-0007-314687") },
    { numero: "Voto 3008-2024", organo: SC, fecha: "06-02-2024", tema: "Cuentas y venta de criptoactivos", criterio: "Rechazo de plano: si las cuentas congeladas por fondos de una venta de bitcoins tienen procedencia lícita es un conflicto de legalidad que corresponde a la vía común.", href: NEXUS("sen-1-0007-1212702") },
    { numero: "Voto 16596-2024", organo: SC, fecha: "14-06-2024", tema: "Denegatoria de cuenta", criterio: "Parcialmente con lugar solo por falta de motivación: el banco puede denegar la apertura, pero con causa legítima, objetiva y razonable que debe comunicar al solicitante.", href: NEXUS("sen-1-0007-1297998") },
    { numero: "Voto 16616-2025", organo: SC, fecha: "30-05-2025", tema: "Justificación de fondos", criterio: "Rechazo de plano: la Sala no funge como contralora de las relaciones contractuales entre banco y cliente; el reclamo va a la vía ordinaria.", href: NEXUS("sen-1-0007-1300352") },
    { numero: "Voto 17459-2026", organo: SC, fecha: "15-05-2026", tema: "Bloqueo por venta P2P", criterio: "Rechazo de plano: el bloqueo y la justificación de fondos se enmarcan en la relación comercial y no son materia de amparo.", href: NEXUS("sen-1-0007-1393376") },
    { numero: "Voto 38722-2026", organo: SC, fecha: "08-10-2026", tema: "Bloqueo tras venta de activos virtuales", criterio: "Sin lugar: el banco restringió la cuenta que recibió fondos de una estafa informática como pago de una venta de activos virtuales; el bloqueo mientras se investiga el origen ilícito no exige el aviso motivado que sí requiere el cierre.", href: NEXUS("sen-1-0007-1434066") },
  ],
  procuraduria: [
    { titulo: "Opinión jurídica OJ-090-2025", detalle: "05-06-2025: proyecto que incorporó el art. 15 quater a la Ley 7786 para atender la Recomendación 15 del GAFI; lo estima viable (no vinculante)", href: PGR(24995) },
    { titulo: "Dictamen C-196-2024", detalle: "05-09-2024: la supervisión de la SUGEF sobre los sujetos de la Ley 7786 no es financiera, sino en materia de prevención de la legitimación de capitales", href: PGR(24581) },
  ],
  otros: [
    {
      titulo: "Estándares internacionales",
      items: [
        { titulo: "GAFI, Recomendaciones 15 y 16 y nota interpretativa de la Recomendación 15", detalle: "Traducción oficial del GAFILAT, actualización a agosto de 2025: registro o licencia, supervisión basada en riesgo, umbral de USD/EUR 1.000 y regla de viaje", href: "https://biblioteca.gafilat.org/wp-content/uploads/2025/10/RecomendacionesyMetodologiaAgosto2025.pdf" },
        { titulo: "GAFI, séptima actualización focalizada sobre activos virtuales", detalle: "Comunicado del 16-07-2026: el 83 % de las jurisdicciones encuestadas ha legislado la regla de viaje", href: "https://www.fatf-gafi.org/en/news/targeted-updated-va-vasps-2026.html" },
        { titulo: "GAFI, revisión focalizada de la Recomendación 15", detalle: "Anuncio del 30-10-2026; primeros resultados en junio de 2027", href: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/launch-targeted-review-strengthen-standards-virtual-assets.html" },
        { titulo: "GAFILAT, Decimocuarto Informe de Seguimiento Intensificado y Cuarto Informe de Recalificación de Cumplimiento Técnico de Costa Rica", detalle: "Enero de 2023: la Recomendación 15 se recalifica como «No Cumplida»", href: "https://biblioteca.gafilat.org/wp-content/uploads/2024/07/Cuarto-informe-de-recalific-Costa-Rica.pdf" },
        { titulo: "GAFILAT, último informe de seguimiento intensificado de Costa Rica para la cuarta ronda", detalle: "Enero de 2024: la Recomendación 15 se mantiene en «No Cumplida»", href: "https://biblioteca.gafilat.org/wp-content/uploads/2024/07/Informe-de-seguimiento-intensificado-recali-de-Costa-Rica.pdf" },
      ],
    },
    {
      titulo: "Riesgo nacional",
      items: [
        { titulo: "Instituto Costarricense sobre Drogas, Evaluación Nacional de Riesgos de Legitimación de Capitales", detalle: "Actualización 2025, publicada en 2026: el uso ilícito de activos virtuales figura como riesgo de nivel medio", href: "https://www.icd.go.cr/PORTALICD/images/docs/uif/2026/EVALUACION_NACIONAL_DE_RIESGOS_V_III_2026-Final-28052026.pdf" },
      ],
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional), SINALEVI y portal de normativa de la SUGEF. Jurisprudencia: Nexus del Poder Judicial. Pronunciamientos: Procuraduría General de la República. Estándares: GAFI y GAFILAT. Verificación del estado de la inscripción (La Gaceta y sus alcances del 11 al 26 de noviembre; normativa vigente, normativa en consulta, comunicados y circulares de la SUGEF) al 26 de noviembre de 2026. Las fechas de vencimiento de la adecuación y del plazo del art. 4 de la Ley 10961 son cálculo propio.",
};
