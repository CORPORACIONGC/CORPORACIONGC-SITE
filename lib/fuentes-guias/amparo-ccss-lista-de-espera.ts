import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 21 (vida humana), 27 (petición), 48 (amparo) y 73 (seguros sociales y CCSS)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 9, 29 a 56 (amparo), 71 y 72 (sanciones)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Ley General de la Administración Pública",
      detalle: "Ley N.° 6227, art. 199 (responsabilidad del servidor, por remisión del art. 51 de la Ley N.° 7135)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
  ],
  jurisprudencia: [
    {
      numero: "Voto 1915-92",
      organo: SC,
      fecha: "22-07-1992",
      tema: "Derecho a la salud",
      criterio:
        "Aunque la Constitución no lo contempla en forma expresa, el derecho a la salud existe como derivado directo del derecho a la vida del artículo 21. Declaró con lugar el amparo y condenó a la CCSS.",
      href: NEXUS("sen-1-0007-88764"),
    },
    {
      numero: "Voto 2008-002545",
      organo: SC,
      fecha: "22-02-2008",
      tema: "Legalidad ordinaria",
      criterio:
        "Verificar si la Administración cumple los plazos para resolver un procedimiento es una evidente cuestión de legalidad ordinaria: rechazó de plano el amparo y remitió al interesado a la jurisdicción contencioso-administrativa.",
      href: NEXUS("sen-1-0007-411228"),
    },
    {
      numero: "Voto 2019-005560",
      organo: SC,
      fecha: "29-03-2019",
      tema: "Listas de espera",
      criterio:
        "Declaró la vulneración sistemática y reiterada del derecho a la salud de las personas aseguradas y ordenó a la CCSS elaborar, en seis meses, un sistema de gestión integrado para las listas de espera, con plazos razonables por patología. El magistrado Rueda Leal salvó parcialmente el voto.",
      href: NEXUS("sen-1-0007-917187"),
    },
    {
      numero: "Voto 2021-028421",
      organo: SC,
      fecha: "28-12-2021",
      tema: "Plazo de un mes",
      criterio:
        "Mantener en lista de espera a un paciente sin fecha cierta para el procedimiento viola su derecho a la salud; según la reiterada jurisprudencia constitucional, el plazo apropiado para ordenar la cirugía es de un mes. Lo aplicó a una adulta mayor de 87 años que esperaba una operación de cataratas.",
      href: NEXUS("sen-1-0007-1067008"),
    },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
