import { NEXUS, type FuentesDeGuia } from "./tipos";

const SP = "Sala Primera";
const TC = "Tribunal de Casación de lo Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, arts. 62.3, 92.6, 134 a 154 y Transitorio I",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
    {
      titulo: "Ley Orgánica del Poder Judicial",
      detalle: "Arts. 54 (Sala Primera) y 99 bis, antes 94 bis (Tribunal de Casación), renumerado por la Ley N.° 10866 de 2026",
    },
  ],
  jurisprudencia: [
    { numero: "Sentencia 932-F-S1-2010", organo: SP, fecha: "05-08-2010", tema: "Indefensión", criterio: "La negativa a reprogramar una audiencia preliminar pese a justa causa, que impidió ofrecer prueba, es indefensión revisable en casación; anuló y reenvió.", href: NEXUS("ext-1-0004-240961"), gc: true },
    { numero: "Sentencia 252-F-S1-2011", organo: SP, fecha: "10-03-2011", tema: "Casación inútil", criterio: "Si el recurso no ataca un fundamento autónomo del fallo, la sentencia se mantiene y la Sala no entra a los cargos.", href: NEXUS("ext-1-0004-166731"), gc: true },
    { numero: "Sentencia 358-F-S1-2011", organo: SP, fecha: "31-03-2011", tema: "Antiformalismo y fundamentación", criterio: "Casación menos rigurosa en la admisibilidad sin abandonar su tecnicismo; la fundamentación excluye el despliegue confuso de normas y alegatos.", href: NEXUS("ext-1-0004-166777"), gc: true },
    { numero: "Sentencia 589-F-S1-2011", organo: SP, fecha: "12-05-2011", tema: "Resoluciones recurribles", criterio: "Los autos comunes y las resoluciones que no definen el fondo ni ponen término al proceso no tienen casación.", href: NEXUS("ext-1-0034-137943"), gc: true },
    { numero: "Sentencia 1257-F-S1-2011", organo: SP, fecha: "26-09-2011", tema: "Motivación y fundamentación", criterio: "Si el juez expresó la razón de su decisión no hay falta de motivación; el reproche de fundamentación insuficiente es sustantivo.", href: NEXUS("ext-1-0004-167263"), gc: true },
    { numero: "Sentencia 396-F-S1-2012", organo: SP, fecha: "22-03-2012", tema: "Prueba: vicio procesal o sustantivo", criterio: "Distinguió el error en los hechos probados (art. 138) del vicio procesal del art. 137 c); casó por el fondo.", href: NEXUS("ext-1-0004-167247"), gc: true },
    { numero: "Sentencia 555-F-S1-2012", organo: SP, fecha: "10-05-2012", tema: "Incongruencia y costas", criterio: "La congruencia se examina contra las pretensiones y defensas de todo el proceso; nota de los magistrados González y Escoto sobre la revisión de las costas en casación.", href: NEXUS("ext-1-0004-167321"), gc: true },
    { numero: "Sentencia 848-F-S1-2014", organo: SP, fecha: "03-07-2014", tema: "Saneamiento sin reenvío", criterio: "Se privilegia el saneamiento sobre la anulación; el reenvío se evita cuando sería un trámite dilatorio sin efecto práctico.", href: NEXUS("ext-1-0004-243571"), gc: true },
    { numero: "Resolución 67-A-TC-2024", organo: TC, fecha: "28-05-2024", tema: "Funcionamiento del Tribunal", criterio: "Las apelaciones van al Tribunal de Apelaciones; la Sala Primera sigue conociendo las casaciones asignadas al Tribunal de Casación.", href: NEXUS("sen-1-1011-1232354") },
    { numero: "Resolución 1668-A-S1-2024", organo: SP, fecha: "28-11-2024", tema: "Alegatos de instancia", criterio: "La casación exige referir los errores del fallo, sin repetir los argumentos del proceso.", href: NEXUS("sen-1-0004-1263449") },
    { numero: "Resolución 1795-A-S1-2025", organo: SP, fecha: "11-12-2025", tema: "Cuestiones nuevas", criterio: "No caben en casación cuestiones no alegadas ni debatidas, salvo normas imperativas o de orden público.", href: NEXUS("sen-1-0004-1361305") },
    { numero: "Resolución 118-A-TC-2026", organo: TC, fecha: "29-06-2026", tema: "Reparto de competencia", criterio: "Las asignaciones de los arts. 62.3 y 92.6 operan antes de sentencia; si la caducidad se acoge en sentencia, rigen los arts. 135 y 136.", href: NEXUS("sen-1-1011-1409759") },
    { numero: "Resolución 128-A-TC-2026", organo: TC, fecha: "17-07-2026", tema: "Pase entre órganos", criterio: "Remitió a la Sala Primera un recurso que le correspondía, para que lo conozca.", href: NEXUS("sen-1-1011-1409781") },
    { numero: "Resolución 272-A-S1-2026", organo: SP, fecha: "19-02-2026", tema: "Resoluciones recurribles", criterio: "El auto que archiva la demanda por no subsanar tiene apelación ante el Tribunal de Apelaciones, no casación.", href: NEXUS("sen-1-0004-1372750") },
    { numero: "Sentencia 1502-S1-2026", organo: SP, fecha: "22-09-2026", tema: "Costas", criterio: "Casó la sentencia en cuanto a las costas y, resolviendo por el fondo, impuso la condena.", href: NEXUS("sen-1-0004-1426348") },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos y de Corte Plena",
      items: [
        { titulo: "Expediente legislativo 15.134", detalle: "Subcomisión, acta 29 de 15-06-2005, folios 1498-1499; texto sustitutivo de 31-08-2005" },
        { titulo: "Comisión Permanente de Asuntos Jurídicos", detalle: "Dictamen afirmativo unánime de 14-09-2005, consideración 10" },
        { titulo: "Corte Plena", detalle: "Sesión 29-2009 de 17-08-2009, art. XXVI (funcionamiento del Tribunal de Casación)" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Antecedentes: expediente legislativo 15.134 y actas de Corte Plena. Jurisprudencia: Nexus del Poder Judicial, con los identificadores de la base de jurisprudencia de la firma. Cotejo al 28 de octubre de 2026.",
};
