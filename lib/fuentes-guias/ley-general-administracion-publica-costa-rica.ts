import { NEXUS, type FuentesDeGuia } from "./tipos";

const SP = "Sala Primera";
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227 de 02-05-1978, Alcance 90 a La Gaceta N.° 102 de 30-05-1978; texto vigente, versión 21 de 21",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, art. 91 (efecto declarativo y retroactivo, tomado del art. 171 LGAP)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 3309-94", organo: SC, fecha: "05-07-1994", tema: "Directrices", criterio: "El Poder Ejecutivo puede dirigir a los entes autónomos con directrices sobre metas y medios, sin darles órdenes concretas ni impedir que actúen.", href: NEXUS("ext-1-0007-264597") },
    { numero: "Voto 2003-08875", organo: SC, fecha: "26-08-2003", tema: "Interés público", criterio: "El interés público no es una cláusula abierta que habilite a sacrificar los derechos fundamentales.", href: NEXUS("ext-1-0007-54893") },
    { numero: "Sentencia 523-F-2005", organo: SP, fecha: "20-07-2005", tema: "Legalidad", criterio: "El control de legalidad confronta la conducta con el ordenamiento en su plenitud, fuentes escritas y no escritas (arts. 11 y 13).", href: NEXUS("ext-1-0034-87802"), gc: true },
    { numero: "Sentencia 884-F-2005", organo: SP, fecha: "17-11-2005", tema: "Eficacia", criterio: "La aprobación que condiciona la eficacia no toca la validez; sin ella el acto no produce efectos y los actos de aplicación son nulos.", href: NEXUS("ext-1-0034-94036"), gc: true },
    { numero: "Sentencia 376-F-2006", organo: SP, fecha: "21-06-2006", tema: "Prescripción", criterio: "Los cuatro años del art. 198 corren desde que la víctima puede ejercer su derecho, y el reclamo administrativo interrumpe la prescripción.", href: NEXUS("ext-1-0034-123585"), gc: true },
    { numero: "Sentencia 907-F-2006", organo: SP, fecha: "17-11-2006", tema: "Traslado de cargos", criterio: "El traslado pone en conocimiento los hechos investigados; sancionar por otros hechos exige ampliar la intimación.", href: NEXUS("ext-1-0034-120399"), gc: true },
    { numero: "Sentencia 1007-F-2006", organo: SP, fecha: "21-12-2006", tema: "Dirección", criterio: "Las directrices no son normas: su infracción genera responsabilidad disciplinaria y deja válido el acto concreto.", href: NEXUS("ext-1-0034-120836") },
    { numero: "Sentencia 952-F-S1-2009", organo: SP, fecha: "10-09-2009", tema: "Funcionamiento normal", criterio: "El funcionamiento normal con resultado lesivo se indemniza cuando el daño es especial por su intensidad o por la pequeña proporción de afectados (art. 194).", href: NEXUS("ext-1-0004-249856"), gc: true },
    { numero: "Sentencia 1051-F-S1-2009", organo: SP, fecha: "08-10-2009", tema: "Congruencia", criterio: "La Administración no puede variar al resolver el cuadro fáctico que intimó, sin violar el debido proceso.", href: NEXUS("ext-1-0034-130706"), gc: true },
    { numero: "Sentencia 116-F-S1-2010", organo: SP, fecha: "22-01-2010", tema: "Discrecionalidad", criterio: "La discrecionalidad recae sobre elementos del acto y está limitada por la arbitrariedad y las reglas técnicas; con su reducción a cero, el juez puede sustituir la decisión.", href: NEXUS("ext-1-0034-143070"), gc: true },
    { numero: "Sentencia 875-F-S1-2010", organo: SP, fecha: "22-07-2010", tema: "Responsabilidad del servidor", criterio: "La responsabilidad personal del servidor es subjetiva y exige dolo o culpa grave demostrados (art. 199).", href: NEXUS("ext-1-0034-135898"), gc: true },
    { numero: "Sentencia 1282-F-S1-2010", organo: SP, fecha: "22-10-2010", tema: "Motivo y motivación", criterio: "Distingue el motivo, elemento material, de la motivación; una supresión de plaza con razones genéricas carece de motivo válido.", href: NEXUS("ext-1-0004-241381"), gc: true },
    { numero: "Sentencia 608-F-S1-2012", organo: SP, fecha: "16-05-2012", tema: "Plazo del procedimiento", criterio: "Superar los dos meses del art. 261 no anula por sí solo lo actuado; la caducidad no extingue la potestad.", href: NEXUS("ext-1-0034-159096"), gc: true },
    { numero: "Sentencia 655-F-S1-2012", organo: SP, fecha: "31-05-2012", tema: "Inderogabilidad singular", criterio: "La ARESEP no puede apartarse en un caso concreto del modelo tarifario que adoptó y publicó.", href: NEXUS("ext-1-0034-144610"), gc: true },
    { numero: "Sentencia 1022-F-S1-2012", organo: SP, fecha: "23-08-2012", tema: "Inderogabilidad singular", criterio: "La autoridad no puede excepcionar mediante un acto singular la aplicación de un reglamento a un caso concreto.", href: NEXUS("ext-1-0034-144224") },
    { numero: "Sentencia 1035-F-S1-2012", organo: SP, fecha: "24-08-2012", tema: "Responsabilidad objetiva", criterio: "En el régimen objetivo del art. 190 el caso fortuito no exime; rechazó la culpa de la víctima, el hecho de un tercero y la fuerza mayor.", href: NEXUS("ext-1-0034-146265"), gc: true },
    { numero: "Sentencia 1525-F-S1-2012", organo: SP, fecha: "20-11-2012", tema: "Plazos de la Administración", criterio: "Los plazos de la Administración son ordenatorios, y el acto final dictado fuera de plazo es válido (art. 329).", href: NEXUS("ext-1-0034-145551"), gc: true },
    { numero: "Sentencia 1692-F-S1-2012", organo: SP, fecha: "13-12-2012", tema: "Efecto de la nulidad", criterio: "El restablecimiento retroactivo que sigue a la nulidad absoluta exige examinar la buena fe del titular (art. 171).", href: NEXUS("ext-1-0034-145850"), gc: true },
    { numero: "Sentencia 994-F-S1-2016", organo: SP, fecha: "22-09-2016", tema: "Grados de nulidad", criterio: "La incompetencia relativa admite convalidación por el órgano competente (arts. 165 y 187).", href: NEXUS("ext-1-0034-158735") },
    { numero: "Sentencia 910-F-S1-2017", organo: SP, fecha: "03-08-2017", tema: "Inicio del procedimiento", criterio: "El procedimiento comienza cuando se notifica al administrado, momento en que el acto adquiere eficacia (art. 140).", href: NEXUS("ext-1-0034-163943") },
    { numero: "Sentencia 925-F-S1-2017", organo: SP, fecha: "03-08-2017", tema: "Silencio positivo", criterio: "El silencio positivo no suple decisiones discrecionales de oportunidad y conveniencia.", href: NEXUS("ext-1-0034-163304") },
    { numero: "Voto 2017-017497", organo: SC, fecha: "03-11-2017", tema: "Nulidad evidente y manifiesta", criterio: "La anulación de oficio exige nulidad evidente y manifiesta, dictamen vinculante y procedimiento ordinario; el año de caducidad es rígido.", href: NEXUS("ext-1-0007-275472") },
    { numero: "Sentencia 557-F-S1-2021", organo: SP, fecha: "11-03-2021", tema: "Silencio positivo y ambiente", criterio: "El silencio positivo exige solicitud completa y no opera en materia ambiental.", href: NEXUS("ext-1-0004-342799") },
    { numero: "Sentencia 1556-F-S1-2022", organo: SP, fecha: "07-07-2022", tema: "Desconcentración", criterio: "La desconcentración protege solo la materia desconcentrada; la organización del ministerio de adscripción no la invade.", href: NEXUS("sen-1-0004-1105394") },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente Digital 1001016 de la Asamblea Legislativa", detalle: "Ley 6227: expedientes 4118, 5716 y 7571, 1.776 páginas escaneadas, cotejadas contra la imagen" },
        { titulo: "Exposición de motivos", detalle: "Oficio 340-69-DM del Ministro de la Presidencia, 27-11-1969 (págs. 2 a 60)" },
        { titulo: "Comisión Permanente de Gobierno y Administración", detalle: "Actas de 1970: n.º 93 (06-03), subcomisión (10-03), n.º 94 (12-03), n.º 98 (18-03), n.º 99, n.º 101, n.º 103 (02-04), n.º 104 (03-04), n.º 105 (07-04), n.º 107 (10-04) y n.º 108 (13-04)" },
        { titulo: "Plenario", detalle: "Autos de 30-04-1970 y 06-05-1970; debates de 24, 25 y 26-04-1978; sanción de 02-05-1978" },
      ],
    },
  ],
  pie: "Texto normativo: SINALEVI, versión vigente al 28 de octubre de 2026. Antecedentes: Expediente Digital 1001016 de la Asamblea Legislativa. Jurisprudencia: Nexus del Poder Judicial, con los identificadores de la base de jurisprudencia de la firma. Cotejo al 28 de octubre de 2026.",
};
