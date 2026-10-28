import { NEXUS, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const TC = "Tribunal de Casación de lo Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 190, 194, 196, 197, 198 (reformado por las Leyes N.° 7611 de 12-07-1996 y N.° 9057), 199, 201, 202 y 203",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Reforma de varias leyes sobre la prescripción de daños causados a personas menores de edad",
      detalle: "Ley N.° 9057 de 23-07-2012, Alcance 154 a La Gaceta N.° 199 de 16-10-2012, art. 3 (tercer párrafo del art. 198 LGAP)",
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, arts. 31, 39, 41, 82, 83, 93, 94, 103 y 179 (reformado por la Ley N.° 10702 de 06-05-2025)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
    {
      titulo: "Ley de Derechos y Deberes de las Personas Usuarias de los Servicios de Salud Públicos y Privados",
      detalle: "Ley N.° 8239 de 02-04-2002, arts. 2 (incisos c, k y ñ), 4 (inciso c), 14 y 15",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=48278&param2=51401&param3=1",
    },
    {
      titulo: "Ley General de Salud",
      detalle: "Ley N.° 5395 de 30-10-1973, art. 22 (consentimiento)",
    },
    {
      titulo: "Ley Orgánica del Organismo de Investigación Judicial",
      detalle: "Ley N.° 5524, arts. 31 (Medicina Legal), 34 (Consejo Médico Forense, reformado por la Ley N.° 7355 de 1993) y 55 (peritos oficiales)",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 51 y 56 (condena en abstracto en el amparo y su liquidación)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Sentencia 211-F-2005", organo: S1, fecha: "07-04-2005", tema: "Régimen objetivo", criterio: "Hay responsabilidad siempre que la víctima no tenga el deber de soportar el daño; la anormalidad puede ser un mal funcionamiento, un funcionamiento tardío o la ausencia de funcionamiento.", href: NEXUS("ext-1-0034-78678"), gc: true },
    { numero: "Sentencia 875-F-2007", organo: S1, fecha: "14-12-2007", tema: "Lex artis e iatrogenia", criterio: "La medicina es una obligación de medios regida por la lex artis; distingue la iatrogenia de la mala praxis, que es el daño producido por negligencia, imprudencia o impericia.", href: NEXUS("ext-1-0034-120502") },
    { numero: "Sentencia 858-F-2007", organo: S1, fecha: "23-11-2007", tema: "Interrupción", criterio: "La acción civil resarcitoria notificada a la CCSS en el proceso penal interrumpe la prescripción y la deja en suspenso mientras dura ese proceso.", href: NEXUS("ext-1-0034-118262") },
    { numero: "Sentencia 733-F-S1-2008", organo: S1, fecha: "31-10-2008", tema: "Prescripción y caducidad", criterio: "En la materia civil de Hacienda rige la prescripción del derecho de fondo (art. 41 CPCA), con exclusión de la caducidad de la acción.", href: NEXUS("ext-1-0034-125702"), gc: true },
    { numero: "Sentencia 952-F-S1-2009", organo: S1, fecha: "10-09-2009", tema: "Iatrogenia negativa necesaria", criterio: "La muerte por un riesgo previsible de un legrado correctamente ejecutado queda fuera de la fuerza mayor; la paciente no tenía el deber de soportarla y la CCSS responde por funcionamiento normal con resultado anormal.", href: NEXUS("ext-1-0004-249856"), gc: true },
    { numero: "Sentencia 1049-F-S1-2009", organo: S1, fecha: "08-10-2009", tema: "Funcionamiento anormal", criterio: "Basta acreditar un funcionamiento anormal del servicio de salud, sin necesidad de probar negligencia; el diagnóstico diferencial no vuelve imprevisible el daño.", href: NEXUS("ext-1-0034-130275"), gc: true },
    { numero: "Sentencia 687-F-S1-2010", organo: S1, fecha: "09-06-2010", tema: "Resultado anormal", criterio: "Cabe responsabilidad por funcionamiento normal con resultado anormal, si se acredita el nexo causal, en un daño posvacunal.", href: NEXUS("ext-1-0034-138804"), gc: true },
    { numero: "Sentencia 875-F-S1-2010", organo: S1, fecha: "22-07-2010", tema: "Servicio público de salud", criterio: "El daño en el servicio de salud se rige por la LGAP: objetivo frente a la CCSS (art. 190) y con dolo o culpa grave individualizada frente al funcionario (art. 199).", href: NEXUS("ext-1-0034-135898"), gc: true },
    { numero: "Sentencia 976-F-S1-2010", organo: S1, fecha: "17-08-2010", tema: "Demora en autorizar una cirugía", criterio: "La tardanza de 6 meses en autorizar una cirugía urgente es funcionamiento anormal por inactividad material; se confirmó la condena del Juzgado.", href: NEXUS("ext-1-0034-133039"), gc: true },
    { numero: "Sentencia 1102-F-S1-2010", organo: S1, fecha: "14-09-2010", tema: "Consentimiento informado", criterio: "La prueba de haber informado corresponde al profesional; una exoneración general firmada no basta, y la omisión genera daño moral aunque la técnica haya sido correcta.", href: NEXUS("ext-1-0034-133973") },
    { numero: "Sentencia 396-F-S1-2012", organo: S1, fecha: "22-03-2012", tema: "Carga de la prueba", criterio: "El actor prueba el daño y que es consecuencia de una conducta pública; la Administración, las eximentes o la falta de nexo causal.", href: NEXUS("ext-1-0004-167247"), gc: true },
    { numero: "Sentencia 609-F-S1-2012", organo: S1, fecha: "16-05-2012", tema: "Prueba técnica", criterio: "En conductas con un importante componente técnico, probar el funcionamiento anormal corresponde al actor y exige prueba técnica; sin ella se rechazó la demanda.", href: NEXUS("ext-1-0004-242277"), gc: true },
    { numero: "Sentencia 8-F-S1-2013", organo: S1, fecha: "17-01-2013", tema: "Inicio de la prescripción", criterio: "El plazo del art. 198 es de prescripción e interrumpible, y corre desde que el damnificado conoce con certeza la conducta lesiva y a su autor.", href: NEXUS("ext-1-0034-145827"), gc: true },
    { numero: "Sentencia 447-F-S1-2013", organo: S1, fecha: "10-04-2013", tema: "Consentimiento informado", criterio: "Reitera que la prueba del consentimiento corresponde al prestador; en el caso lo tuvo por cumplido en una cirugía de urgencia.", href: NEXUS("ext-1-0004-242974") },
    { numero: "Sentencia 685-F-S1-2014", organo: S1, fecha: "28-05-2014", tema: "Ejecución de amparo", criterio: "En la ejecución de un amparo por espera de cirugía, el daño moral debe ser proporcional a la espera real.", href: NEXUS("ext-1-0004-243549"), gc: true },
    { numero: "Sentencia 4151-F-S1-2019", organo: S1, fecha: "26-11-2019", tema: "Plazo e interrupción", criterio: "Casó la sentencia que declaró la caducidad: el plazo del art. 41 CPCA es de prescripción; el reclamo administrativo ante la CCSS lo interrumpe durante toda su tramitación.", href: NEXUS("ext-1-0004-281541") },
    { numero: "Sentencia 518-F-S1-2024", organo: S1, fecha: "17-05-2024", tema: "Nexo causal", criterio: "Sin nexo causal entre la esterilización y el embarazo posterior, con riesgo informado; costas a la actora que demandó sin base técnica.", href: NEXUS("ext-1-0004-363186") },
    { numero: "Sentencia 1438-F-S1-2024", organo: S1, fecha: "17-10-2024", tema: "Consejo Médico Forense", criterio: "Prevaleció el dictamen del Consejo Médico Forense que descartó el nexo causal; la actora no aportó otros elementos técnicos.", href: NEXUS("sen-1-0004-1258736") },
    { numero: "Sentencia 1255-F-S1-2025", organo: S1, fecha: "04-09-2025", tema: "Prueba pericial", criterio: "El régimen objetivo no exime de probar hecho, daño y nexo; sin prueba pericial médica idónea se rechazó el recurso del actor.", href: NEXUS("ext-1-0004-379875") },
    { numero: "Sentencia 1370-F-S1-2025", organo: S1, fecha: "30-09-2025", tema: "Ejecución de amparo", criterio: "Aplica el plazo de 4 años del art. 179 CPCA, reformado por la Ley 10702, a la ejecución de un amparo por espera en la CCSS.", href: NEXUS("ext-1-0004-379019") },
    { numero: "Sentencia 8-F-S1-2026", organo: S1, fecha: "15-01-2026", tema: "Agotamiento facultativo", criterio: "En una pretensión puramente indemnizatoria contra la CCSS, el agotamiento de la vía administrativa solo se exige cuando se discute la validez de un acto.", href: NEXUS("sen-1-0004-1363077") },
    { numero: "Sentencia 79-F-TC-2026", organo: TC, fecha: "07-05-2026", tema: "Plazo de prescripción", criterio: "El plazo para reclamar la responsabilidad administrativa es de 4 años, salvo norma especial que disponga otro término.", href: NEXUS("sen-1-1011-1388546") },
    { numero: "Sentencia 742-F-S1-2026", organo: S1, fecha: "04-06-2026", tema: "Valor de la pericia", criterio: "Los peritajes que descansan en premisas no probadas carecen de fuerza de convicción; los testigos familiares sirven para acreditar el daño moral; lo clínico exige prueba técnica.", href: NEXUS("sen-1-0004-1401478") },
    { numero: "Sentencia 1297-F-S1-2026", organo: S1, fecha: "26-08-2026", tema: "Consentimiento informado", criterio: "Confirmó la condena por daño moral por una gastrostomía practicada a un adulto capaz que se había opuesto, con un formulario firmado bajo presión familiar.", href: NEXUS("sen-1-0004-1423178") },
    { numero: "Sentencia 1308-F-S1-2026", organo: S1, fecha: "26-08-2026", tema: "Inicio de la prescripción", criterio: "La prescripción parte del hecho generador; los controles y tratamientos posteriores no prolongan el plazo, y la demanda contra la CCSS estaba prescrita.", href: NEXUS("sen-1-0004-1423188") },
    { numero: "Sentencia 1560-F-S1-2026", organo: S1, fecha: "30-09-2026", tema: "Plazo contra la CCSS", criterio: "Contra la CCSS rige el art. 198 LGAP como norma especial; descartó los 10 años del art. 56 de su Ley Constitutiva. La demanda interrumpe con su notificación.", href: NEXUS("sen-1-0004-1431085") },
  ],
  otros: [
    {
      titulo: "Otras resoluciones de la Sala Primera (sin identificador de Nexus en la copia consultada)",
      items: [
        { titulo: "Sentencia 116-F-S1-2015", detalle: "29-01-2015. Prescripción: la familia conocía los hechos desde la denuncia penal; un dictamen forense posterior no reinicia el cómputo, y la denuncia sin la CCSS como parte no interrumpe" },
        { titulo: "Sentencia 2373-F-S1-2023", detalle: "14-12-2023. La iatrogenia es un criterio de imputación distinto de la mala praxis; los riesgos en extremo raros no tienen que incluirse en el consentimiento informado" },
        { titulo: "Sentencia 559-F-S1-2024", detalle: "30-05-2024. El consentimiento informado es un proceso de comunicación predominantemente oral que se documenta en el expediente y, en cirugías y procedimientos de riesgo, en el formulario escrito" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 4118 (Ley General de la Administración Pública)", detalle: "Exposición de motivos del proyecto del Poder Ejecutivo, Expediente Digital 1001016, pág. 38" },
        { titulo: "Expediente 5716 (Ley General de la Administración Pública)", detalle: "Observaciones de la Procuraduría General al título de responsabilidad, remitidas el 22-11-1974, Expediente Digital 1001016, págs. 1013 a 1030" },
        { titulo: "Expediente 17.927 (Ley N.° 9057)", detalle: "Exposición de motivos, La Gaceta N.° 101 de 26-05-2011; dictamen afirmativo de mayoría de la Comisión Permanente Especial de Juventud, Niñez y Adolescencia, 02-11-2011; informe del Departamento de Servicios Técnicos" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y copia local de la normativa GC, cotejados al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial, con los identificadores de la copia local de la base. Cotejo al 28 de octubre de 2026.",
};
