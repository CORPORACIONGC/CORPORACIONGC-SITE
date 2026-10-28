import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const SP = "Sala Primera";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley sobre la Zona Marítimo Terrestre",
      detalle: "Ley N.° 6043 de 02-03-1977, La Gaceta N.° 52, Alcance N.° 36, de 16-03-1977; texto vigente, versión 9 de 9 (05-04-2022)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=32006&param2=131014&param3=1",
    },
    {
      titulo: "Reglamento a la Ley sobre la Zona Marítimo Terrestre",
      detalle: "Decreto Ejecutivo N.° 7841-P de 16-12-1977, La Gaceta N.° 20, Alcance 16, de 27-01-1978; versión 7 de 7 (arts. 15, 17, 25, 27 a 53, 58 a 62 y 80)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=18579&param2=93916&param3=1",
    },
    {
      titulo: "Ley Marco para la Declaratoria de Zona Urbana Litoral",
      detalle: "Ley N.° 9221 de 27-03-2014, La Gaceta 79 de 25-04-2014; versión 4 de 4 (arts. 1, 5, 8, 14, 19 y 25; Transitorio I reformado por la Ley N.° 10735)",
    },
    {
      titulo: "Construcciones existentes en la zona restringida",
      detalle: "Ley N.° 9242 de 06-05-2014; versión 4 de 4 (arts. 3, 4 y 6; art. 4 reformado por la Ley N.° 10735 de 01-07-2025, vigente desde el 30-07-2025)",
    },
    {
      titulo: "Protección a los ocupantes de zonas clasificadas como especiales",
      detalle: "Ley N.° 9577 de 27-06-2018, prolongada por las Leyes N.° 10000 de 01-07-2021 y N.° 10489 de 13-05-2024",
    },
    {
      titulo: "Fomentar la inversión y atracción turística en las concesiones de la zona marítimo terrestre",
      detalle: "Ley N.° 9974 de 09-04-2021, vigente desde el 23-04-2021 (prórroga anticipada del art. 50)",
    },
    {
      titulo: "Ley Forestal",
      detalle: "Ley N.° 7575, arts. 13 a 15 (patrimonio natural del Estado)",
    },
  ],
  jurisprudencia: [
    { numero: "Sentencia 539-F-91", organo: "Sala Tercera", fecha: "11-10-1991", tema: "Delito del art. 62", criterio: "El delito de construir en la zona contra la ley es continuo mientras se mantenga lo construido, y la prescripción no corre desde la fecha de la obra.", href: NEXUS("sen-1-0034-50738") },
    { numero: "Voto 2130-94", organo: SC, fecha: "03-05-1994", tema: "Cancelación", criterio: "El art. 53 no es inconstitucional: la cancelación de una concesión válidamente otorgada exige el procedimiento ordinario de la LGAP.", href: NEXUS("ext-1-0007-266012") },
    { numero: "Voto 5755-94", organo: SC, fecha: "04-10-1994", tema: "Art. 64 anulado", criterio: "Anuló el art. 64: sancionar la violación de «cualquiera de las prohibiciones» de la ley o su reglamento era un tipo penal abierto.", href: NEXUS("ext-1-0007-265982") },
    { numero: "Voto 5756-96", organo: SC, fecha: "30-10-1996", tema: "Demanio y demolición", criterio: "La zona es un régimen especial de propiedad del Estado; antes de ordenar la demolición en un proceso pendiente, el juez constata que la obra está en la zona y se hizo al margen de la ley (art. 13).", href: NEXUS("ext-1-0007-265686") },
    { numero: "Voto 1999-00023", organo: SC, fecha: "05-01-1999", tema: "Desalojo", criterio: "La municipalidad es competente para desalojar y demoler en la zona, pero no puede actuar unilateralmente: debe instaurar el procedimiento administrativo.", href: NEXUS("ext-1-0007-368511") },
    { numero: "Sentencia 2003-000394", organo: "Tribunal de Casación Penal de San José", fecha: "08-05-2003", tema: "Prescripción penal", criterio: "El delito del art. 62 es de efectos permanentes: la prescripción corre desde que cesa la permanencia de la construcción.", href: NEXUS("ext-1-0034-38660") },
    { numero: "Voto 2004-01475", organo: SC, fecha: "13-02-2004", tema: "Plan regulador", criterio: "Sin plan de desarrollo en la zona, la municipalidad no puede otorgar concesiones en áreas turísticas (art. 38); el solicitante solo tiene una expectativa.", href: NEXUS("ext-1-0007-64561") },
    { numero: "Sentencia 771-F-S1-2008", organo: SP, fecha: "18-11-2008", tema: "Concesiones en islas", criterio: "Sin la aprobación legislativa del art. 42 la concesión en una isla carece de eficacia; su falta no genera responsabilidad del Estado.", href: NEXUS("ext-1-0034-125733") },
    { numero: "Sentencia 495-F-S1-2010", organo: SP, fecha: "22-04-2010", tema: "Extinción por vencimiento", criterio: "Vencido el plazo sin solicitud de prórroga, la concesión se extingue de pleno derecho, aunque la municipalidad no haya dado el aviso del art. 50.", href: NEXUS("ext-1-0034-131744") },
    { numero: "Resolución 3522-2010", organo: "Tribunal Contencioso Administrativo, Sección III", fecha: "17-09-2010", tema: "Plan regulador", criterio: "La existencia del plan regulador es requisito sine qua non para tramitar una solicitud de concesión; distingue pobladores de ocupantes.", href: NEXUS("ext-1-0034-133445") },
    { numero: "Sentencia 406-2014", organo: SP, fecha: "20-03-2014", tema: "Canon", criterio: "Aplica como vinculante el criterio de la Sala Constitucional sobre la naturaleza del canon.", href: NEXUS("ext-1-0034-151180") },
    { numero: "Voto 2014-007453", organo: SC, fecha: "28-05-2014", tema: "Canon", criterio: "El canon es la contraprestación por usar un bien demanial y no un tributo; calcularlo sobre el valor de mercado no es irrazonable.", href: NEXUS("ext-1-0007-265104") },
    { numero: "Voto 2016-000811", organo: SC, fecha: "20-01-2016", tema: "Ley 9221 y vivienda", criterio: "Sin lugar la acción contra el art. 8 de la Ley 9221: el derecho a la vivienda justifica regularizar situaciones pasadas con requisitos técnicos y ambientales.", href: NEXUS("ext-1-0007-265188") },
    { numero: "Voto 2019-012746", organo: SC, fecha: "10-07-2019", tema: "Moratoria anulada", criterio: "Anuló la Ley 9073: suspender desalojos y demoliciones impide la autotutela del demanio y desprotege el ambiente.", href: NEXUS("ext-1-0007-300490") },
    { numero: "Voto 2021-024147", organo: SC, fecha: "27-10-2021", tema: "Moratoria anulada", criterio: "Anuló la Ley 9373 por aplicación del precedente de 2019.", href: NEXUS("sen-1-0007-1056839") },
    { numero: "Voto 2026-010043", organo: SC, fecha: "20-03-2026", tema: "Desalojo y vulnerabilidad", criterio: "Para recuperar el demanio basta, en principio, aviso previo y plazo razonable, con coordinación previa si hay personas vulnerables; no reconoce derecho de permanencia.", href: NEXUS("sen-1-0007-1374113") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-297-2004", detalle: "19-10-2004, al Ministerio del Ambiente y Energía: bosques y terrenos forestales de la zona como patrimonio natural del Estado", href: PGR(12805) },
    { titulo: "Dictamen C-170-2013", detalle: "26-08-2013: planes reguladores costeros y fincas inscritas en la franja de 150 metros", href: PGR(17704) },
    { titulo: "Dictamen C-132-2019", detalle: "14-05-2019: inscripciones registrales anteriores a la Ley 6043 y nulidad ante el Tribunal Contencioso Administrativo", href: PGR(21194) },
    { titulo: "Dictamen PGR-C-156-2025", detalle: "16-07-2025, al Ministerio de Turismo: el plan regulador costero como requisito de toda concesión", href: PGR(25041) },
  ],
  otros: [
    {
      titulo: "Otra resolución citada",
      items: [
        { titulo: "Voto 2023-018293 de la Sala Constitucional", detalle: "26-07-2023, exp. 23-016406-0007-CO: rechazo de plano de la acción contra las Leyes 9577 y 10000, por defectos formales (sin identificador de Nexus localizado)" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente legislativo n.º 7.371", detalle: "Presentado el 29-09-1975; aprobado el 27-01-1977 (Sistema de Información Legislativa)" },
        {
          titulo: "Proyecto «Declaratoria, planeamiento y desarrollo de las zonas marítimo-terrestre y terrenos insulares»",
          detalle: "Alcance n.º 170 a La Gaceta n.º 196 de 16-10-1975, con la exposición de motivos del Instituto Costarricense de Turismo",
          href: "https://museodegacetas.imprentanacional.go.cr/pub/1975/10/16/ALCA170_16_10_1975.pdf",
        },
        { titulo: "Expediente Digital de la Asamblea Legislativa, documento 1002381", detalle: "1.533 páginas escaneadas; intervención del diputado Odio Madrigal en el plenario (pág. 101, folio 0180)" },
      ],
    },
  ],
  pie: "Texto normativo: SINALEVI, versiones vigentes al 28 de octubre de 2026. Antecedentes: Sistema de Información Legislativa, Museo de Gacetas de la Imprenta Nacional y Expediente Digital de la Asamblea Legislativa. Jurisprudencia: Nexus del Poder Judicial, con los identificadores de la base de jurisprudencia de la firma; dictámenes de la Procuraduría en SINALEVI. Cotejo al 28 de octubre de 2026.",
};
