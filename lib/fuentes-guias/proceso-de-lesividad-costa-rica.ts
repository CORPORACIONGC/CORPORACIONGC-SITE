import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const SC = "Sala Constitucional";
const TC = "Tribunal de Casación Contencioso-Administrativo";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, arts. 10.5, 12.3, 16, 34, 39.1.e, 39.2 y 41.2",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, arts. 89.3, 171, 173 y 183",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Código de Normas y Procedimientos Tributarios",
      detalle: "Ley N.° 4755, art. 165",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=6530&param2=148766&param3=1",
    },
    {
      titulo: "Código Procesal Civil",
      detalle: "Ley N.° 9342, art. 30.5 (cómputo de los plazos por años)",
    },
    {
      titulo: "Ley Reguladora de la Jurisdicción Contencioso-Administrativa",
      detalle: "Ley N.° 3667, arts. 10.4, 35, 36.4 y 37.3, derogada por el CPCA",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 1994-002186", organo: SC, fecha: "04-05-1994", tema: "Intangibilidad", criterio: "La intangibilidad de los actos propios deriva del art. 34 de la Constitución; fuera de los arts. 155 y 173 de la LGAP, el Estado debe acudir a la lesividad.", href: NEXUS("ext-1-0007-323561") },
    { numero: "Voto 2006-008960", organo: SC, fecha: "23-06-2006", tema: "Lesividad y art. 173", criterio: "Si el dictamen de la Procuraduría o de la Contraloría es desfavorable, la Administración no puede anular en sede administrativa y debe ir a la lesividad.", href: NEXUS("ext-1-0007-104993") },
    { numero: "Voto 804-F-S1-2008", organo: S1, fecha: "04-12-2008", tema: "Órgano incompetente", criterio: "La declaratoria emitida por un órgano incompetente es absolutamente nula; como presupuesto procesal, se revisa de oficio y la demanda es inadmisible.", href: NEXUS("ext-1-0034-125764"), gc: true },
    { numero: "Voto 94-F-S1-2011", organo: S1, fecha: "03-02-2011", tema: "Superior jerárquico supremo", criterio: "En la CCSS declara la Junta Directiva; basta declarar lesivo el acto final y no los de trámite.", href: NEXUS("ext-1-0034-136938") },
    { numero: "Sentencia 1-F-TC-2012", organo: TC, fecha: "12-01-2012", tema: "Consejo de Gobierno", criterio: "En un acto complejo de un ministerio y un ente descentralizado declara el Consejo de Gobierno; las declaratorias separadas son inválidas.", href: NEXUS("ext-1-0034-143253"), gc: true },
    { numero: "Voto 1692-F-S1-2012", organo: S1, fecha: "13-12-2012", tema: "Efectos y reintegro", criterio: "La lesividad es garantía del administrado: no cabe condenarlo a indemnizar, pero la nulidad absoluta obliga a reintegrar lo pagado e indexarlo, según su buena fe.", href: NEXUS("ext-1-0034-145850"), gc: true },
    { numero: "Voto 799-F-S1-2013", organo: S1, fecha: "25-06-2013", tema: "Dominio público", criterio: "Un lote con manglar en la zona pública de la ZMT es demanial y su lesividad no tiene plazo; un fundo del IDA no es demanial por el solo hecho de serlo.", href: NEXUS("ext-1-0034-148231") },
    { numero: "Voto 2017-015945", organo: SC, fecha: "04-10-2017", tema: "Constitucionalidad del art. 34.1", criterio: "Declara sin lugar la acción contra el art. 34.1: la lesividad mientras perduren los efectos, con anulación solo hacia el futuro, es una vía intermedia válida.", href: NEXUS("ext-1-0007-264366") },
    { numero: "Voto 165-F-S1-2020", organo: S1, fecha: "14-01-2020", tema: "Materia tributaria", criterio: "Por mayoría: la prescripción del art. 41.2 rige el plazo para demandar, no el año para declarar la lesividad.", href: NEXUS("ext-1-0004-284885") },
    { numero: "Voto 1967-F-S1-2020", organo: S1, fecha: "03-06-2020", tema: "Caducidad", criterio: "Por mayoría: caducó la potestad de declarar lesivo un acto de 2009 declarado así en 2013.", href: NEXUS("sen-1-0004-983215") },
    { numero: "Voto 2401-F-S1-2020", organo: S1, fecha: "08-10-2020", tema: "Objeto de la declaratoria", criterio: "Un acto favorable no comprendido en la declaratoria de lesividad sigue protegido por la intangibilidad de los actos propios.", href: NEXUS("ext-1-0004-305034") },
    { numero: "Sentencia 264-F-TC-2020", organo: TC, fecha: "10-12-2020", tema: "Efecto instantáneo", criterio: "La licencia de construcción produce efecto inmediato; su lesividad declarada después del año caducó.", href: NEXUS("ext-1-1011-297626") },
    { numero: "Sentencia 269-F-TC-2020", organo: TC, fecha: "15-12-2020", tema: "Materia tributaria", criterio: "Por mayoría y en sentido opuesto al de la Sala Primera: el art. 41.2 también alcanza la declaratoria de lesividad.", href: NEXUS("ext-1-1011-297383") },
    { numero: "Voto 361-F-S1-2021", organo: S1, fecha: "18-02-2021", tema: "Contrademanda", criterio: "La pretensión de lesividad no puede deducirse por contrademanda; el demandado que quiere una pretensión propia debe contrademandar.", href: NEXUS("ext-1-0004-323492") },
    { numero: "Voto 788-F-S1-2021", organo: S1, fecha: "08-04-2021", tema: "Efecto continuado", criterio: "El plus salarial es un clásico acto de efecto continuado; el año corre desde que la Administración ordena el cese del pago.", href: NEXUS("ext-1-0004-307301") },
    { numero: "Voto 00004-F-S1-2022", organo: S1, fecha: "13-01-2022", tema: "Nulidad hacia el futuro", criterio: "Declarada la lesividad fuera del año en un acto de efectos continuados, la nulidad vale solo hacia el futuro y la buena fe deja de incidir.", href: NEXUS("ext-1-0004-324729") },
    { numero: "Voto 10-F-S1-2022", organo: S1, fecha: "13-01-2022", tema: "Efecto continuado", criterio: "Distingue el año para declarar (art. 34.1) del plazo para demandar y anula la caducidad declarada de oficio sobre un incentivo salarial.", href: NEXUS("ext-1-0004-311537") },
    { numero: "Voto 591-F-S1-2022", organo: S1, fecha: "10-03-2022", tema: "Lesividad y art. 173", criterio: "La negativa de la Procuraduría a dictaminar no vuelve relativa la nulidad; la suspensión cautelar del pago no hace cesar los efectos del acto.", href: NEXUS("sen-1-0004-1078667") },
    { numero: "Voto 1225-F-S1-2022", organo: S1, fecha: "26-05-2022", tema: "Dos plazos", criterio: "Por mayoría: el art. 41 es excepción al art. 39, no al año del art. 34.1.", href: NEXUS("sen-1-0004-1094816") },
    { numero: "Sentencia 167-F-TC-2022", organo: TC, fecha: "12-08-2022", tema: "Cómputo", criterio: "El año corre de fecha a fecha y, si vence en día inhábil, se prorroga al siguiente hábil.", href: NEXUS("sen-1-1011-1141729") },
    { numero: "Voto 2418-F-S1-2022", organo: S1, fecha: "03-11-2022", tema: "Materia tributaria", criterio: "Por mayoría, reitera que la declaratoria tributaria también está sujeta al año del art. 34.1.", href: NEXUS("sen-1-0004-1123600") },
    { numero: "Voto 211-F-S1-2024", organo: S1, fecha: "07-03-2024", tema: "Materia tributaria", criterio: "Sin voto salvado, aplica el art. 41.2 también a la declaratoria de lesividad y acoge la demanda del Estado.", href: NEXUS("ext-1-0004-362733") },
    { numero: "Voto 911-F-S1-2024", organo: S1, fecha: "10-07-2024", tema: "Materia tributaria", criterio: "Por mayoría, vuelve a sujetar la declaratoria al año del art. 34.1.", href: NEXUS("sen-1-0004-1240019") },
    { numero: "Sentencia 181-F-TC-2024", organo: TC, fecha: "12-12-2024", tema: "Cómputo", criterio: "Los plazos por años se cuentan de fecha a fecha: el año que empieza el 4 de abril vence el 4 de abril siguiente.", href: NEXUS("sen-1-1011-1271250") },
    { numero: "Sentencia 2025-009528", organo: `${TCA}, Sección VIII`, fecha: "30-09-2025", tema: "Audiencia previa", criterio: "La declaratoria de lesividad no requiere audiencia previa; la defensa se ejerce en el proceso judicial.", href: NEXUS("sen-1-0034-1337330") },
    { numero: "Voto 121-F-S1-2026", organo: S1, fecha: "22-01-2026", tema: "Solo actos propios", criterio: "Solo la Administración autora puede declarar lesivo un acto; para anular el de otro ente se usa el proceso ordinario de nulidad.", href: NEXUS("sen-1-0004-1366965") },
    { numero: "Voto 135-F-S1-2026", organo: S1, fecha: "22-01-2026", tema: "Consejo de Gobierno", criterio: "Por mayoría: si intervienen un órgano ministerial y un ente descentralizado, declara el Consejo de Gobierno.", href: NEXUS("sen-1-0004-1363154") },
    { numero: "Sentencia 2026-001527", organo: TCA, fecha: "09-03-2026", tema: "Caducidad", criterio: "Declara inadmisible la demanda por haberse declarado la lesividad fuera del año; la declaratoria no exige audiencia previa.", href: NEXUS("sen-1-0034-1387035") },
    { numero: "Voto 591-F-S1-2026", organo: S1, fecha: "23-04-2026", tema: "Efecto continuado", criterio: "Por mayoría: el plus salarial produce efectos mes a mes; el año del art. 34.1 no corre desde su dictado.", href: NEXUS("sen-1-0004-1386353") },
    { numero: "Voto 1016-F-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Naturaleza", criterio: "La lesividad es una excepción a la intangibilidad de los actos propios, sujeta a los límites del art. 34.", href: NEXUS("sen-1-0004-1416748") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-107-2005", detalle: "09-03-2005 · La Procuraduría se niega a demandar una lesividad caduca y sin motivación", href: PGR(13068) },
    { titulo: "Dictamen C-108-2005", detalle: "11-03-2005 · La declaratoria es un presupuesto procesal: no anula ni suspende el acto", href: PGR(13057) },
    { titulo: "Dictamen C-247-2012", detalle: "18-10-2012 · Declarar la lesividad y demandar compete a la Administración activa", href: PGR(17357) },
    { titulo: "Dictamen C-293-2014", detalle: "2014 · Los dos plazos: un año desde la emisión del acto y un año para demandar", href: PGR(18384) },
    { titulo: "Opinión jurídica OJ-137-2014", detalle: "27-10-2014 · El órgano con personalidad instrumental no declara la lesividad de sus actos", href: PGR(18570) },
    { titulo: "Dictamen C-071-2016", detalle: "12-04-2016 · La competencia es del ministro, no del órgano desconcentrado", href: PGR(19364) },
    { titulo: "Dictamen C-227-2016", detalle: "02-11-2016 · El ente autónomo declara y demanda por sí mismo; no hay dictamen previo de la Procuraduría", href: PGR(19733) },
    { titulo: "Dictamen C-251-2016", detalle: "28-11-2016 · Basta la declaratoria fundamentada, sin procedimiento ordinario previo", href: PGR(19685) },
    { titulo: "Dictamen C-259-2016", detalle: "05-12-2016 · En las municipalidades declara el Concejo, nunca el alcalde", href: PGR(20090) },
    { titulo: "Dictamen C-005-2024", detalle: "25-01-2024 · La competencia del ministro es indelegable; la firma sí puede delegarse", href: PGR(24213) },
  ],
  otros: [
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "LGAP, Comisión de Gobierno y Administración, sesión n.º 103", detalle: "Abril de 1970, expediente 4118, folio 381 · Piza Escalante y la nulidad absoluta no manifiesta" },
        { titulo: "Corte Plena, sesión n.º 28-2002, artículo XXIV", detalle: "24-06-2002 · La prohibición de la lesividad por contrademanda" },
        { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 13", detalle: "30-03-2005, folios 928 a 930 · Origen del art. 39.1.e" },
        { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 14", detalle: "30-03-2005, folio 939 · Origen de la segunda oración del art. 39.2" },
        { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 20", detalle: "30-08-2005 · El plazo de un año para la lesividad" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI y bases GC, versión vigente al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial; dictámenes: SINALEVI. Cotejo al 28 de octubre de 2026.",
};
