import { type FuentesDeGuia, NEXUS, PGR } from "./tipos";

const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 9, 39, 41, 169, 183 y 184, invocados en la acción",
      href: SINALEVI(871, 147492),
    },
    {
      titulo: "Código Municipal (Ley 7794)",
      detalle: "Arts. 13 o) (el concejo comunica al TSE las faltas que justifican la remoción), 14 (sustitución por la vicealcaldía), 18 (causas automáticas de pérdida de credencial) y 19 (plebiscito revocatorio)",
      href: SINALEVI(40197, 152716),
    },
    {
      titulo: "Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública (Ley 8422)",
      detalle: "Arts. 38 a 40 (faltas, sanciones y órgano competente) y 43 (funcionarios de los Supremos Poderes, alcaldes y regidores)",
      href: SINALEVI(53738, 151776),
    },
    {
      titulo: "Código Electoral (Ley 8765)",
      detalle: "Art. 253: el TSE cancela las credenciales de los funcionarios municipales de elección popular en los supuestos expresamente previstos en la ley",
    },
    {
      titulo: "Ley contra el Hostigamiento o Acoso Sexual en el Empleo y la Docencia (Ley 7476)",
      detalle: "Art. 26 b), adicionado por la Ley 8805: sanciones a alcaldes tras el procedimiento ordenado por el concejo",
    },
    {
      titulo: "Ley para Prevenir, Atender, Sancionar y Erradicar la Violencia contra las Mujeres en la Política (Ley 10235)",
      detalle: "Art. 27 b): sanciones a alcaldes y traslado al TSE cuando se recomienda la pérdida de credencial",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)",
      detalle: "Arts. 75 (legitimación), 81 a 83 (aviso, efectos y coadyuvancia) y 91 (dimensionamiento)",
      href: SINALEVI(38533, 127124),
    },
  ],
  jurisprudencia: [
    { numero: "Resolución 2026-092627", organo: SC, fecha: "08-10-2026", tema: "Curso de la acción de la ANAI", criterio: "Da curso a la acción contra la doctrina del TSE (resoluciones 3509-M-2007, 713-M-2008, 1114-M-2009 y 4375-E8-2022) que atribuye al concejo la potestad sancionadora sobre los alcaldes por faltas a la probidad; aclara que no suspende el criterio impugnado ni ningún procedimiento o proceso.", href: NEXUS("sen-1-0007-1431109") },
    { numero: "Resolución 2026-002549", organo: "Tribunal Contencioso Administrativo", fecha: "24-04-2026", tema: "Suspensión del alcalde de San José", criterio: "Acoge la medida cautelar y suspende el acuerdo del concejo que suspendió al alcalde quince días sin goce de salario, hasta la sentencia firme del proceso 26-001031-1027-CA; ve apariencia de buen derecho en el alegato de extralimitación de competencias.", href: NEXUS("sen-1-0034-1387419") },
    { numero: "Voto 2026-022577", organo: SC, fecha: "19-06-2026", tema: "Acoso laboral atribuido a un alcalde", criterio: "Declara sin lugar el amparo de una denunciante cuyo caso se archivó porque el concejo carecía de potestad disciplinaria en materia laboral ordinaria sobre el alcalde; la competencia es legalidad ordinaria.", href: NEXUS("sen-1-0007-1406771") },
    { numero: "Voto 2024-006308", organo: SC, fecha: "08-03-2024", tema: "Suspensión recomendada por la Contraloría", criterio: "Rechaza de plano el amparo de un alcalde: determinar el órgano competente para ejecutar la recomendación de la Contraloría es labor de la vía común.", href: NEXUS("sen-1-0007-1251528") },
    { numero: "Voto 2024-001479", organo: SC, fecha: "19-01-2024", tema: "Ejecución de suspensiones por el TSE", criterio: "Rechaza de plano el amparo contra la orden del TSE de ejecutar la suspensión de alcaldes recomendada por la Contraloría.", href: NEXUS("sen-1-0007-1242041") },
  ],
  procuraduria: [
    {
      titulo: "Informe en la acción 26-034453-0007-CO",
      detalle: "29-10-2026, procurador general adjunto: admisibilidad, infracción del art. 23.2 de la Convención Americana, salidas (TSE o ley) y dimensionamiento",
      href: "https://sinalevi.go.cr/ResultadosAsuntos/Informacion?param1=14612&param2=1&param3=1",
    },
    {
      titulo: "Dictamen C-249-2021",
      detalle: "30-08-2021, Municipalidad de Atenas: no hay jerarquía entre concejo y alcalde; la suspensión o cancelación por faltas a la probidad y al control interno la ejecuta el TSE",
      href: PGR(22954),
    },
    {
      titulo: "Dictamen C-212-2019",
      detalle: "23-07-2019: a partir de la Casación 44-F-TC-2019, el TSE es competente para cancelar credenciales e imponer sanciones de menor grado al alcalde",
      href: PGR(21479),
    },
    {
      titulo: "Dictamen C-195-2023",
      detalle: "30-10-2023, Concejo de Abangares (inadmisible): describe la tensión entre la Casación 44-F-TC-2019 y la posición del TSE",
      href: PGR(24122),
    },
  ],
  otros: [
    {
      titulo: "Tribunal Supremo de Elecciones y otros tribunales",
      items: [
        { titulo: "TSE, resoluciones 3509-M-2007, 713-M-2008 y 4375-E8-2022", detalle: "Doctrina impugnada, según su descripción en la resolución de curso y en el informe de la PGR" },
        { titulo: "TSE, resolución 1114-M-2009", detalle: "05-03-2009: las municipalidades instruyen e imponen las sanciones por faltas a la probidad; el TSE interviene si procede la pérdida de credencial", href: "https://www.tse.go.cr/juris/municipales/1114-M-2009.htm" },
        { titulo: "Tribunal de Casación de lo Contencioso Administrativo, sentencia 44-F-TC-2019", detalle: "26-03-2019, exp. 12-004746-1027-CA: el concejo no puede imponer al alcalde la sanción recomendada por la Contraloría; el órgano sancionador es el TSE" },
        { titulo: "Sala Constitucional, votos 2006-15958, 2014-17833, 2015-01780 y 2015-14973", detalle: "Potestad sancionadora de la Contraloría frente a alcaldes, ausencia de jerarquía entre concejo y alcalde y compatibilidad de la suspensión con el art. 23 de la Convención" },
        { titulo: "Boletín Judicial 196, 197 y 198 de 2026", detalle: "Aviso de la acción, primera publicación el 16-10-2026" },
        { titulo: "Corte Interamericana de Derechos Humanos, caso Petro Urrego vs. Colombia", detalle: "Sentencia de 8 de julio de 2020 y resolución de supervisión de 25 de noviembre de 2021, según el informe de la PGR" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Resoluciones judiciales en Nexus PJ cuando están enlazadas; las demás se leyeron en su texto íntegro en las bases de la firma. Informe de la PGR en SINALEVI. Estado de la acción al 26 de noviembre de 2026.",
};
