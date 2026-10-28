import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const TCA_JIM = "Tribunal Contencioso Administrativo, Jerarquía Impropia Municipal";
const TCA_III = "Tribunal Contencioso Administrativo, Sección III";
const TCA_VI = "Tribunal Contencioso Administrativo, Sección VI";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley de Impuesto sobre Bienes Inmuebles",
      detalle: "Ley N.° 7509 de 09-05-1995, La Gaceta N.° 116 de 19-06-1995, reformada por la Ley N.° 7729 de 15-12-1997; arts. 10, 10 bis, 11, 12, 14 a 17, 19, 21, 23, 27 y 36",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=26598&param2=148757&param3=1",
    },
    {
      titulo: "Reglamento a la Ley de Impuesto sobre Bienes Inmuebles",
      detalle: "Decreto N.° 44414-H de 09-02-2024, Alcance 78 a La Gaceta N.° 73 de 25-04-2024; arts. 2.10, 3, 26, 28, 44, 45, 66 a 69 y 71 a 82",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=101784&param2=140541&param3=1",
    },
    {
      titulo: "Código de Normas y Procedimientos Tributarios",
      detalle: "Ley N.° 4755, arts. 157 (apelación de hecho) y 158 (Tribunal Fiscal Administrativo)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=6530&param2=148766&param3=1",
    },
    {
      titulo: "Regulaciones especiales para terrenos de uso agropecuario",
      detalle: "Ley N.° 9071 de 17-09-2012 (tope del 20 % para fincas agropecuarias)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=73354&param2=89991&param3=1",
    },
    {
      titulo: "Código Municipal",
      detalle: "Ley N.° 7794, art. 165 (régimen general de recursos contra acuerdos del concejo)",
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, art. 39 (plazo para demandar)",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 2005-00548", organo: SC, fecha: "25-01-2005", tema: "Legalidad ordinaria", criterio: "Rechazó de plano el amparo: a la Sala no le corresponde decidir si se aplica el art. 19 de la Ley 7509 ni si el avalúo es procedente.", href: NEXUS("ext-1-0007-76699") },
    { numero: "Voto 2011-003075", organo: SC, fecha: "09-03-2011", tema: "ONT y autonomía municipal", criterio: "Declaró sin lugar la acción contra la expresión «asesor obligado» del art. 12: los criterios técnicos uniformes del ONT expresan intereses nacionales y no lesionan la autonomía municipal.", href: NEXUS("ext-1-0007-262142") },
    { numero: "Voto 2026-004915", organo: SC, fecha: "11-02-2026", tema: "Modificación automática por hipoteca", criterio: "Rechazó de plano la acción contra el art. 14 b) de la Ley 7509 por defecto de invocación en el asunto base, sin pronunciamiento de fondo.", href: NEXUS("sen-1-0007-1366441") },
    { numero: "Voto 2026-035593", organo: SC, fecha: "16-09-2026", tema: "Demora en remitir la apelación", criterio: "Rechazó de plano el amparo por la demora de un concejo en remitir una apelación de avalúo al Tribunal Fiscal Administrativo: la dilación es materia del art. 41 de la Constitución (con voto salvado).", href: NEXUS("sen-1-0007-1428489") },
    { numero: "Sentencia 1695-F-S1-2012", organo: S1, fecha: "13-12-2012", tema: "Plataforma de valores", criterio: "El impuesto tiene carácter objetivo; los informes del ONT son un parámetro y la Administración debe individualizar el valor según las particularidades del inmueble. Integró la Sala el magistrado González Camacho, con nota separada solo sobre costas.", href: NEXUS("ext-1-0004-242740") },
    { numero: "Sentencia 2012-F-S1-2020", organo: S1, fecha: "18-06-2020", tema: "Fincas agropecuarias", criterio: "Rechazó la casación: los expedientes acreditaban la inspección de campo y la demanda no combatió el uso ni la validez de la plataforma.", href: NEXUS("ext-1-0004-303109") },
    { numero: "Voto 1565-2009", organo: TCA_VI, fecha: "11-08-2009", tema: "Control judicial del TFA", criterio: "A demanda de una municipalidad, anuló por vicios en el motivo y el contenido una resolución del Tribunal Fiscal Administrativo que había anulado un avalúo.", href: NEXUS("ext-1-0034-130105") },
    { numero: "Voto 420-2019", organo: TCA_III, fecha: "30-08-2019", tema: "Modificaciones automáticas", criterio: "Contra la modificación automática del art. 14 la Ley 7509 no prevé procedimiento recursivo; el recurso ante el Tribunal es inadmisible.", href: NEXUS("ext-1-0034-275346") },
    { numero: "Voto 2024-003612", organo: TCA_JIM, fecha: "06-06-2024", tema: "Vía especial del art. 19", criterio: "La impugnación del avalúo sigue el procedimiento especial del art. 19 de la Ley 7509; el Tribunal se declaró incompetente y remitió el expediente al Tribunal Fiscal Administrativo.", href: NEXUS("sen-1-0034-1244634") },
    { numero: "Voto 2025-003518", organo: TCA_JIM, fecha: "08-04-2025", tema: "Avalúo, multa y medida cautelar", criterio: "Impugnados juntos el avalúo y la multa del art. 17, se declaró incompetente y remitió al Tribunal Fiscal Administrativo el expediente y el legajo cautelar.", href: NEXUS("sen-1-0034-1287772") },
    { numero: "Voto 2025-004294", organo: TCA_JIM, fecha: "07-05-2025", tema: "Valor declarado", criterio: "La impugnación de actos que contienen el valor registrado, incluido el declarado, sigue el art. 19 y la agota el Tribunal Fiscal Administrativo.", href: NEXUS("sen-1-0034-1296142") },
  ],
  procuraduria: [
    { titulo: "Dictamen C-339-2003", detalle: "31-10-2003, los criterios del ONT son de uso obligatorio para las municipalidades en los avalúos" },
    { titulo: "Dictamen C-208-2016", detalle: "07-10-2016, el plazo de cinco años se computa desde la última declaración, aunque cambie el propietario registral" },
    { titulo: "Dictamen C-242-2016", detalle: "10-11-2016, reitera la obligatoriedad de los criterios del ONT y la vía del art. 19" },
    { titulo: "Dictamen C-078-2022", detalle: "07-04-2022, el Tribunal Fiscal Administrativo conoce la apelación contra la multa del art. 17" },
  ],
  otros: [
    {
      titulo: "Resoluciones citadas sin enlace a Nexus",
      items: [
        { titulo: "Sala Constitucional, voto 2000-10297", detalle: "21-11-2000, cobro con el avalúo anterior mientras resuelve el Tribunal Fiscal Administrativo" },
        { titulo: "Sala Constitucional, voto 2009-010706", detalle: "07-07-2009, anuló el rechazo de una revocatoria contra una modificación automática por hipoteca" },
        { titulo: "Tribunal Contencioso Administrativo, Sección III, voto 388-2018", detalle: "31-08-2018, citado en el voto 420-2019" },
        { titulo: "Tribunal Contencioso Administrativo, Sección III, voto 409-2018", detalle: "31-08-2018, citado en el voto 167-2020" },
        { titulo: "Tribunal Contencioso Administrativo, Sección III, votos 419-2019 y 430-2019", detalle: "30-08-2019, inadmisibilidad de recursos contra modificaciones automáticas" },
        { titulo: "Tribunal Contencioso Administrativo, Sección III, voto 167-2020", detalle: "27-03-2020, multa del art. 17 y línea sobre modificaciones automáticas" },
        { titulo: "Tribunal Contencioso Administrativo, Sección III, voto 491-2020", detalle: "27-08-2020, avalúo del canon en la zona marítimo terrestre" },
      ],
    },
    {
      titulo: "Antecedentes legislativos",
      items: [
        { titulo: "Expediente 11.661", detalle: "Ley sobre el impuesto territorial, Alcance 11 a La Gaceta N.° 67 de 07-04-1993" },
        { titulo: "Ley N.° 7509", detalle: "La Gaceta N.° 116 de 19-06-1995" },
        { titulo: "Expediente 12.597", detalle: "Modificación a la Ley N.° 7509, La Gaceta N.° 138 de 19-07-1996" },
        { titulo: "Ley N.° 7729", detalle: "Alcance 50 a La Gaceta N.° 245 de 19-12-1997" },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI, versión vigente al 28 de octubre de 2026. Jurisprudencia: Nexus del Poder Judicial; las resoluciones sin enlace se consultaron en la copia local. Cotejo al 28 de octubre de 2026.",
};
