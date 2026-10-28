import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 24 (intimidad), 27 (petición) y 30 (acceso a la información y secretos de Estado)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley Marco de Acceso a la Información Pública",
      detalle: "Ley N.° 10554 de 23-10-2024, Alcance N.° 178 a La Gaceta N.° 205 de 01-11-2024; 19 artículos y un transitorio, sin reformas (versión 1 de 1)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=103157&param2=143061&param3=1",
    },
    {
      titulo: "Ley N.° 10554 en La Gaceta",
      detalle: "Alcance N.° 178 a La Gaceta N.° 205, 1 de noviembre de 2024 (Imprenta Nacional)",
      href: "https://www.imprentanacional.go.cr/pub/2024/11/01/ALCA178_01_11_2024.pdf",
    },
    {
      titulo: "Ley de Regulación del Derecho de Petición",
      detalle: "Ley N.° 9097, arts. 3, 4, 6 y 11 (comparación con la Ley 10554)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=74427&param2=91901&param3=1",
    },
    {
      titulo: "Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales",
      detalle: "Ley N.° 8968 de 07-07-2011, La Gaceta N.° 170 de 05-09-2011, art. 9 (categorías de datos)",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 272 a 274 (acceso de las partes al expediente)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Declaratoria de Secreto de Estado",
      detalle: "Decreto Ejecutivo N.° 45870-MSP de 27-07-2026, Alcance N.° 104 a La Gaceta N.° 149 de 10-08-2026",
    },
    {
      titulo: "Reforma de la Declaratoria de Secreto de Estado",
      detalle: "Decreto Ejecutivo N.° 45962-MSP de 09-10-2026, La Gaceta N.° 197 de 19-10-2026 (reforma los arts. 2 y 3 del Decreto 45870-MSP)",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2024-004616", organo: SC, fecha: "20-02-2024", tema: "Secreto de Estado", criterio: "Por mayoría, acogió el amparo contra el Ministerio de Relaciones Exteriores y Culto: el secreto de Estado está sujeto a reserva de ley y a interpretación restrictiva, y la información debe analizarse para clasificar qué datos se reservan.", href: NEXUS("sen-1-0007-1237881") },
    { numero: "Voto 2025-026704", organo: SC, fecha: "22-08-2025", tema: "Firma digital", criterio: "Exigir la firma digital o el formato físico contraría el principio de informalidad del art. 11 de la Ley 10554 y es una traba innecesaria.", href: NEXUS("sen-1-0007-1327059") },
    { numero: "Voto 2025-033907", organo: SC, fecha: "17-10-2025", tema: "Prórroga sin fecha", criterio: "Avisar que el trámite requiere más tiempo sin precisar el nuevo plazo incumple el art. 10; la carga de trabajo no justifica la demora.", href: NEXUS("sen-1-0007-1342275") },
    { numero: "Voto 2025-035691", organo: SC, fecha: "31-10-2025", tema: "Prestadores privados de servicio público", criterio: "Acogió el amparo contra una ASADA: la información sobre la esfera operativa del servicio delegado es exigible según el art. 5.", href: NEXUS("sen-1-0007-1353222") },
    { numero: "Voto 2025-041184", organo: SC, fecha: "11-12-2025", tema: "Presencialidad", criterio: "Exigir presentarse en persona carece de sustento legal; ordenó al Registro Civil habilitar una dirección electrónica para recibir solicitudes.", href: NEXUS("sen-1-0007-1359643") },
    { numero: "Voto 2026-001767", organo: SC, fecha: "16-01-2026", tema: "Firma digital", criterio: "Acogió el amparo contra una municipalidad que condicionó la atención de la solicitud a la firma digital.", href: NEXUS("sen-1-0007-1365389") },
    { numero: "Voto 2026-010108", organo: SC, fecha: "20-03-2026", tema: "Prórroga razonable", criterio: "Declaró sin lugar el amparo: la ampliación de hasta un mes, comunicada antes del recurso para anonimizar información sensible, se ajusta a la ley.", href: NEXUS("sen-1-0007-1378268") },
    { numero: "Voto 2026-011637", organo: SC, fecha: "27-03-2026", tema: "Falta de reglamento", criterio: "La omisión de reglamentar la Ley 10554 lesiona el derecho de acceso; ordenó al ministro de la Presidencia emitir el reglamento en dos meses.", href: NEXUS("sen-1-0007-1386823") },
    { numero: "Resolución 2026-025496", organo: SC, fecha: "08-07-2026", tema: "Falta de reglamento", criterio: "A petición del ministro, amplió por dos meses, contados desde el 14-07-2026, el plazo para emitir el reglamento.", href: NEXUS("sen-1-0007-1412437") },
    { numero: "Voto 2026-014483", organo: SC, fecha: "24-04-2026", tema: "Canal oficial", criterio: "Declaró sin lugar el amparo: la solicitud se envió a correos que no eran el canal oficial de recepción.", href: NEXUS("sen-1-0007-1384385") },
    { numero: "Voto 2026-022460", organo: SC, fecha: "19-06-2026", tema: "Plazo ampliado vencido", criterio: "Vencido el plazo ampliado sin entregar la información, hay lesión de los arts. 27 y 30 de la Constitución.", href: NEXUS("sen-1-0007-1406657") },
    { numero: "Voto 2026-022685", organo: SC, fecha: "19-06-2026", tema: "Firma digital", criterio: "La solicitud electrónica no puede supeditarse, como regla general, a la firma digital cuando es posible identificar razonablemente a la persona.", href: NEXUS("sen-1-0007-1406876") },
    { numero: "Voto 2026-023557", organo: SC, fecha: "26-06-2026", tema: "Prestadores privados de servicio público", criterio: "Acogió el amparo contra una ASADA aunque el solicitante no era asociado ni usuario, por su interés legítimo en la prestación del servicio.", href: NEXUS("sen-1-0007-1411044") },
    { numero: "Voto 2026-029979", organo: SC, fecha: "06-08-2026", tema: "Contenido de la respuesta y datos personales", criterio: "La respuesta ambigua o parcial sin justificación equivale a negativa; el acceso se armoniza con la Ley 8968 sin volver reservada toda la información; se refiere a información preexistente.", href: NEXUS("sen-1-0007-1419442") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-078-2026", detalle: "28-05-2026, a la Municipalidad de Vásquez de Coronado: las grabaciones de cámaras de seguridad no son de acceso irrestricto y su entrega exige un acto motivado de ponderación", href: PGR(25409) },
  ],
  otros: [
    {
      titulo: "Otra jurisprudencia citada",
      items: [
        { titulo: "Voto 2003-00136", detalle: "Sala Constitucional, 15-01-2003, exp. 02-002774-0007-CO: contenido del art. 30 de la Constitución (acceso ad extra) e interpretación restrictiva del secreto de Estado" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 23.113", detalle: "Proyecto de Ley Marco de Acceso a la Información Pública, Alcance N.° 105 a La Gaceta N.° 96 de 25-05-2022", href: "https://www.imprentanacional.go.cr/pub/2022/05/25/ALCA105_25_05_2022.pdf" },
        { titulo: "Comisión Permanente Ordinaria de Asuntos Jurídicos", detalle: "Sesión ordinaria N.° 18 y dictamen afirmativo de mayoría, 04-10-2023" },
        { titulo: "Departamento de Servicios Técnicos", detalle: "Informe AL-DEST-IJU-099-2024, 20-03-2024" },
        { titulo: "Plenario", detalle: "Primer debate 23-09-2024; segundo debate 08-10-2024" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026, y La Gaceta. Jurisprudencia: Nexus del Poder Judicial. Antecedentes: Sistema de Información Legislativa. Cotejo al 28 de octubre de 2026.",
};
