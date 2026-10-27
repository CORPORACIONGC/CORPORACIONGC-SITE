import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Constitución Política",
      detalle: "Arts. 21 (vida humana), 48 (amparo) y 73 (seguros sociales y CCSS)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional",
      detalle: "Ley N.° 7135, arts. 29 a 56 (amparo) y 71 (desobediencia)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Ley General de Salud",
      detalle: "Ley N.° 5395, arts. 1 y 3",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=6581&param2=146939&param3=1",
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
      numero: "Voto 5130-94",
      organo: SC,
      fecha: "07-09-1994",
      tema: "Razones económicas",
      criterio:
        "Ordenó a la CCSS proveer a una paciente con leucemia los medicamentos para uso domiciliario: el criterio económico que pretenda hacer nugatorio el derecho a la vida y a la salud debe ceder.",
      href: NEXUS("sen-1-0007-97797"),
    },
    {
      numero: "Voto 5934-97",
      organo: SC,
      fecha: "23-09-1997",
      tema: "Medicamento fuera de la Lista Oficial",
      criterio:
        "Ordenó a la CCSS iniciar de inmediato el suministro de antirretrovirales, que no figuraban en la Lista Oficial de Medicamentos, y calificó la atención médica de los enfermos de sida como deber del Estado.",
      href: NEXUS("sen-1-0007-159805"),
    },
    {
      numero: "Voto 2009-004967",
      organo: SC,
      fecha: "25-03-2009",
      tema: "Desabastecimiento",
      criterio:
        "Acogió el amparo de un paciente con leucemia mieloide crónica que dejó de recibir el Glivec y ordenó planificar y programar la compra de medicamentos LOM y no LOM con antelación suficiente para evitar el desabastecimiento.",
      href: NEXUS("sen-1-0007-449734"),
    },
    {
      numero: "Voto 2017-008661",
      organo: SC,
      fecha: "13-06-2017",
      tema: "Criterio del médico tratante",
      criterio:
        "El criterio del médico tratante no tiene carácter de dogma ni valor de prueba tasada; ante el conflicto con el Comité Central de Farmacoterapia, la Sala recurre a un tercer criterio. Ordenó entregar la Sertralina.",
      href: NEXUS("sen-1-0007-712508"),
    },
    {
      numero: "Voto 2018-001346",
      organo: SC,
      fecha: "30-01-2018",
      tema: "Sin respaldo científico",
      criterio:
        "Declaró sin lugar el amparo por el Pazopanib porque la Sección Clínica Médico Forense del OIJ concluyó que, para el caso de la paciente, el fármaco carecía de justificación científica.",
      href: NEXUS("sen-1-0007-735974"),
    },
    {
      numero: "Voto 2019-015241",
      organo: SC,
      fecha: "16-08-2019",
      tema: "Tercero imparcial",
      criterio:
        "Con el criterio de un neumólogo designado por el Colegio de Médicos y Cirujanos, ordenó a la CCSS entregar el Riociguat, fármaco fuera de la Lista Oficial; la Sala precisó que actúa en sede jurisdiccional-constitucional y no técnico-médica.",
      href: NEXUS("sen-1-0007-932090"),
    },
    {
      numero: "Voto 2021-028421",
      organo: SC,
      fecha: "28-12-2021",
      tema: "Lista de espera de cirugía",
      criterio:
        "Mantener en lista de espera a un paciente sin fecha cierta para el procedimiento viola su derecho a la salud. Ordenó operar de cataratas a una adulta mayor de 87 años en el plazo de un mes.",
      href: NEXUS("sen-1-0007-1067008"),
    },
  ],
  otros: [
    {
      titulo: "Comunicados de la Sala Constitucional",
      items: [
        {
          titulo: "Sentencia 2019-015241 (Riociguat)",
          detalle: "Comunicado de prensa de la Sala Constitucional, agosto de 2019",
          href: "https://salaconstitucional.poder-judicial.go.cr/index.php/sala-de-prensa/comunicados/sala-constitucional-resguarda-derecho-a-la-salud-de-asegurado-y-ordena-a-ccss-entregar-farmaco-que-esta-fuera-de-lista-oficial-de-medicamentos",
        },
        {
          titulo: "Sentencia 2021-028421 (cirugía de cataratas)",
          detalle: "Comunicado de prensa de la Sala Constitucional, diciembre de 2021",
          href: "https://salaconstitucional.poder-judicial.go.cr/index.php/sala-de-prensa/comunicados/sala-constitucional-ordena-a-la-ccss-operar-a-senora-de-87-anos-con-mas-de-8-meses-de-estar-en-lista-de-espera",
        },
      ],
    },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
