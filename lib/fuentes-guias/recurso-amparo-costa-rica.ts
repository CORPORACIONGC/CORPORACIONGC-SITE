import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 27 (petición), 30 (información pública) y 48 (hábeas corpus y amparo)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 9 (rechazo de plano), 15 a 28 (hábeas corpus), 29 a 65 (amparo) y 71 (desobediencia)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
  ],
  jurisprudencia: [
    {
      numero: "Voto 2008-002545",
      organo: SC,
      fecha: "22-02-2008",
      tema: "Legalidad ordinaria",
      criterio:
        "Con la entrada en vigor del Código Procesal Contencioso Administrativo, verificar si la Administración cumple los plazos para resolver un procedimiento es una evidente cuestión de legalidad ordinaria: rechazó de plano el amparo y remitió al interesado a la jurisdicción contencioso-administrativa.",
      href: NEXUS("sen-1-0007-411228"),
    },
    {
      numero: "Voto 2017-017948",
      organo: SC,
      fecha: "08-11-2017",
      tema: "Empleo público",
      criterio:
        "Tras la Reforma Procesal Laboral (Ley N.° 9343, vigente desde el 25 de julio de 2017), los reclamos laborales con fuero especial y los disciplinarios del sector público tienen cauce en el proceso sumarísimo laboral o, en su caso, en lo contencioso: rechazó de plano el amparo y remitió a la jurisdicción competente.",
      href: NEXUS("sen-1-0007-728425"),
    },
    {
      numero: "Voto 2019-005560",
      organo: SC,
      fecha: "29-03-2019",
      tema: "Omisión sistemática",
      criterio:
        "Declaró con lugar el amparo por la vulneración sistemática y reiterada del derecho a la salud de las personas aseguradas y ordenó a la CCSS elaborar, en seis meses, un sistema de gestión integrado para solventar las listas de espera. El magistrado Rueda Leal salvó parcialmente el voto.",
      href: NEXUS("sen-1-0007-917187"),
    },
    {
      numero: "Voto 2020-017262",
      organo: SC,
      fecha: "11-09-2020",
      tema: "Informalidad y legitimación",
      criterio:
        "La regla en la tramitación del amparo es la informalidad y, por la legitimación vicaria del artículo 33 de la Ley de la Jurisdicción Constitucional, el recurso puede tenerse por planteado a favor de quien resulta afectado.",
      href: NEXUS("sen-1-0007-993947"),
    },
    {
      numero: "Voto 2026-001080",
      organo: SC,
      fecha: "09-01-2026",
      tema: "Empleo público",
      criterio:
        "Reitera el criterio del voto 2017-017948 y remite a la vía común el reclamo de debido proceso de una persona servidora del Ministerio de Educación Pública. El magistrado Rueda Leal salvó el voto y dispuso cursar el amparo.",
      href: NEXUS("sen-1-0007-1364801"),
    },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
