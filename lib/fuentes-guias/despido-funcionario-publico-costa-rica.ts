import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const S2 = "Sala Segunda";
const TCCA = "Tribunal de Casación de lo Contencioso Administrativo y Civil de Hacienda";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Art. 192 (estabilidad y causales de remoción de los servidores públicos)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley Marco de Empleo Público",
      detalle:
        "Ley N.° 10159 de 08-03-2022, Alcance 50 a La Gaceta N.° 46 de 09-03-2022, rige desde marzo de 2023; arts. 2, 3, 4 a), 21, 22, 49 D) y 50, y Transitorio III",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=96521&param2=145804&param3=1",
    },
    {
      titulo: "Estatuto de Servicio Civil",
      detalle: "Ley N.° 1581 de 30-05-1953; arts. 14 a), 41, 47 y 190, y Título II (Carrera Docente); arts. 43 y 44 derogados por la Ley 10159",
    },
    {
      titulo: "Reglamento del Estatuto de Servicio Civil",
      detalle: "Decreto Ejecutivo N.° 21 de 1954; art. 27 a) (causales de despido)",
    },
    {
      titulo: "Reglamento a la Ley Marco de Empleo Público",
      detalle: "Decreto Ejecutivo N.° 43952-PLAN; arts. 4 a) y 61 (evaluación del desempeño inferior al 70 %)",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 211, 213 y 308",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Código de Trabajo",
      detalle: "Ley N.° 2, texto de la Reforma Procesal Laboral (Ley N.° 9343, vigente desde 25-07-2017); arts. 414, 420, 460, 540, 542, 543 y 573",
    },
    {
      titulo: "Código Municipal",
      detalle: "Ley N.° 7794, arts. 158, 159 (reformado por las Leyes N.° 8773 y 9748) y 161",
    },
    {
      titulo: "Ley Orgánica de la Contraloría General de la República",
      detalle: "Ley N.° 7428, art. 71 (prescripción de la responsabilidad administrativa, reformado por la Ley N.° 8292)",
    },
    {
      titulo: "Ley N.° 8777 (Tribunal Administrativo del Servicio Civil)",
      detalle: "Art. 9, reformado por el art. 49 D) de la Ley 10159 (competencia en apelación, con exclusión de la materia de despidos)",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 1148-90", organo: SC, fecha: "21-09-1990", tema: "Naturaleza del Tribunal de Servicio Civil", criterio: "El Tribunal de Servicio Civil es constitucional como órgano administrativo cuyos fallos agotan la vía y quedan sujetos a control judicial, sin autoridad de cosa juzgada.", href: NEXUS("ext-1-0007-263902") },
    { numero: "Voto 927-94", organo: SC, fecha: "15-02-1994", tema: "Suspensión durante el procedimiento", criterio: "Es inconstitucional interpretar el art. 190 ch) del Estatuto en el sentido de que la suspensión acordada durante un procedimiento sancionatorio sea sin goce de salario.", href: NEXUS("ext-1-0007-262513") },
    { numero: "Voto 2017-17948", organo: SC, fecha: "08-11-2017", tema: "Amparo y vía laboral", criterio: "Tras la Reforma Procesal Laboral, los reclamos de debido proceso de los servidores públicos corresponden a la vía sumarísima laboral o a la contenciosa; reiterado en los votos 2025-14269 y 2026-14771, con rechazo de plano del amparo.", href: NEXUS("ext-1-0007-269036") },
    { numero: "Voto 17098-2021", organo: SC, fecha: "31-07-2021", tema: "Consulta sobre la Ley Marco", criterio: "Los arts. 21 y 22 del proyecto eran inconstitucionales en su aplicación al Poder Judicial y al TSE; la causal de las dos evaluaciones inferiores al 70 % y la inhabilitación del art. 4 a) no son inconstitucionales.", href: NEXUS("sen-1-0007-1049802") },
    { numero: "Voto 2026-27946", organo: SC, fecha: "23-07-2026", tema: "Acción pendiente", criterio: "Informa que la acción del expediente 23-003122-0007-CO, que cuestiona entre otros los arts. 21 y 49 de la Ley 10159, sigue en trámite.", href: NEXUS("sen-1-0007-1415784") },
    { numero: "Voto 179-2025", organo: TCCA, fecha: "11-12-2025", tema: "Prescripción en dos momentos", criterio: "El art. 414 del Código de Trabajo rige el empleo público salvo norma especial: 1 mes para abrir el procedimiento y 1 mes para el acto final desde que el jerarca puede resolver.", href: NEXUS("sen-1-1011-1362452") },
    { numero: "Voto 115-2026", organo: TCCA, fecha: "26-06-2026", tema: "Hacienda Pública", criterio: "Cuando la falta se vincula con la Hacienda Pública y el procedimiento nace de una investigación de la Contraloría, rige el plazo de 5 años del art. 71 de la Ley 7428.", href: NEXUS("sen-1-1011-1409756") },
    { numero: "Voto 174-2026", organo: TCCA, fecha: "10-09-2026", tema: "Inicio del plazo de prescripción", criterio: "El mes corre desde que el órgano competente tiene conocimiento suficiente para abrir el procedimiento; la jurisprudencia del antiguo art. 603 sigue vigente para el art. 414.", href: NEXUS("sen-1-1011-1425823") },
    { numero: "Voto 3224-2025", organo: S2, fecha: "24-09-2025", tema: "Notificación por correo institucional", criterio: "Analizó la validez del traslado de cargos notificado al correo electrónico institucional conforme al art. 21 de la Ley 10159 y, sin indefensión, declaró sin lugar la demanda.", href: NEXUS("sen-1-0034-1342340") },
    { numero: "Voto 1062-2026", organo: S2, fecha: "25-03-2026", tema: "Alcance del sumarísimo", criterio: "El proceso del art. 540 del Código de Trabajo se limita a la violación del fuero, del procedimiento o de las formalidades, o a la existencia de un acto discriminatorio.", href: NEXUS("sen-1-0034-1380188") },
    { numero: "Voto 2138-2026", organo: S2, fecha: "03-07-2026", tema: "Alcance del sumarísimo", criterio: "Reitera que cualquier otra cuestión excede la competencia del juzgado en el proceso sumarísimo y el objeto para el que fue creado.", href: NEXUS("sen-1-0034-1409591") },
    { numero: "Voto 3000-2026", organo: S2, fecha: "18-09-2026", tema: "Efecto de la prescripción", criterio: "La prescripción extingue la potestad disciplinaria; no entró a decidir la relación entre el art. 414 y el art. 21 a) de la Ley 10159 por ser un alegato nuevo en casación.", href: NEXUS("sen-1-0034-1426112") },
    { numero: "Voto 357-2026", organo: "Tribunal de Apelación de Trabajo del I Circuito Judicial de San José", fecha: "11-03-2026", tema: "Despido municipal", criterio: "El juzgado que conoce la apelación del art. 159 del Código Municipal actúa como jerarca impropio y agota la vía administrativa; lo demás va a la vía ordinaria.", href: NEXUS("sen-1-0034-1378987") },
    { numero: "Voto 623-2025", organo: S1, fecha: "03-04-2025", tema: "Competencia", criterio: "La demanda de nulidad del despido y reinstalación de un agente de policía corresponde al Tribunal Contencioso Administrativo (por mayoría, con voto salvado).", href: NEXUS("sen-1-0004-1288132") },
    { numero: "Voto 385-2026", organo: S1, fecha: "26-03-2026", tema: "Competencia", criterio: "Los arts. 420 y 430 del Código de Trabajo cubren los regímenes de empleo que corresponden a la jurisdicción laboral; las pretensiones sujetas al derecho público van al Tribunal Contencioso Administrativo.", href: NEXUS("sen-1-0004-1380070") },
    { numero: "Voto 1263-2026", organo: S1, fecha: "26-08-2026", tema: "Competencia", criterio: "No cabe revocatoria contra lo resuelto en un conflicto de competencia que remitió al Tribunal Contencioso Administrativo el despido de un servidor.", href: NEXUS("sen-1-0004-1424938") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-137-2022", detalle: "27-06-2022, a la Dirección General de Servicio Civil: transcribe los derogados arts. 43 y 44 del Estatuto y describe la gestión de despido anterior a 2023" },
    { titulo: "Dictamen C-155-2024", detalle: "22-07-2024, confirmado en el C-184-2024 de 03-09-2024: los arts. 21 y 22 de la Ley 10159 se aplican a todos los servidores del Ministerio de Relaciones Exteriores, y la acción de inconstitucionalidad pendiente no suspende su aplicación" },
    { titulo: "Opinión jurídica OJ-125-2025", detalle: "08-08-2025, sobre el proyecto 24.291: el plazo de 2 meses es ordenatorio y existe una inconsistencia entre los 15 días del art. 21 b) y los 10 del art. 21 g)" },
    { titulo: "Dictamen C-084-2026", detalle: "03-06-2026, a la Municipalidad de Nicoya: la causal del art. 21 prevalece sobre la convención colectiva y el procedimiento se rige por la regulación interna de la municipalidad" },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 21.336", detalle: "Proyecto del Poder Ejecutivo, Alcance 102 a La Gaceta N.° 84 de 08-05-2019" },
        { titulo: "Comisión Permanente Ordinaria de Gobierno y Administración", detalle: "Dictamen afirmativo de mayoría de 10-11-2020, con el resumen del informe del Departamento de Servicios Técnicos" },
        { titulo: "Comisión de Redacción", detalle: "Textos actualizados de 08-02-2021 y 10-03-2021, y redacción final de 23-06-2021" },
        { titulo: "Expediente 24.291", detalle: "Proyecto de reforma a los arts. 21 y 22 de la Ley 10159, archivado el 07-10-2025 con dictamen unánime negativo de la Comisión de Asuntos Sociales" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial. Antecedentes: Sistema de Información Legislativa. Cotejo al 28 de octubre de 2026.",
};
