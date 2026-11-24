import { type FuentesDeGuia } from "./tipos";

const CGR = (ruta: string) => `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${ruta}`;
const DCP = "Contraloría General de la República, División de Contratación";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley para la mejora tecnológica y metodológica de las contrataciones en materia de obra pública (Ley 10654)",
      detalle: "Arts. 1 y 2 y Transitorios I a III; 10-03-2025, Alcance 47 a La Gaceta 67 del 8 de abril de 2025; sin reformas",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=104194&param2=145520&param3=1",
    },
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle: "Arts. 2 c), 8 f), g) e i), 21, 22, 22 bis, 23, 36, 37, 40, 88, 95 a), 128 e) y 129; texto vigente (versión 15 del SINALEVI)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1",
    },
    {
      titulo: "Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 43808-H)",
      detalle: "Art. 59 ter: selección motivada de las tecnologías del listado en la licitación mayor",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=98344&param2=151216&param3=1",
    },
    {
      titulo: "Reforma al Reglamento a la Ley General de Contratación Pública (Decreto Ejecutivo 45782-H-MIDEPLAN-MICITT)",
      detalle: "Considerando 30 y art. 3, que adiciona el art. 59 ter; 08-04-2026, Alcance 62 a La Gaceta 95 del 26 de mayo de 2026",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107160&param2=151215&param3=1",
    },
    {
      titulo: "Reglamento de compra pública innovadora (Decreto Ejecutivo 45763-H-MIDEPLAN-MICITT)",
      detalle: "Art. 1: objeto y soluciones que no existen en el mercado",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107143&param2=151163&param3=1",
    },
    {
      titulo: "Ley de la Administración Financiera de la República y Presupuestos Públicos (Ley 8131)",
      detalle: "Art. 5 b): principios de economía, eficacia y eficiencia",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=47258&param2=142574&param3=1",
    },
    {
      titulo: "Constitución Política",
      detalle: "Art. 129: vigencia de las leyes a falta de designación expresa",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
  ],
  jurisprudencia: [],
  contraloria: [
    { numero: "R-DCA-0645-2018", organo: DCP, fecha: "03-07-2018", tema: "Modelo BIM en la Ruta 1 (Barranca-San Gerardo)", criterio: "Rechaza de plano la objeción contra el plazo para ofertar con BIM por falta de sustento técnico y ordena de oficio ajustar el cartel: lo que se entregaba eran planos y no un modelo BIM para revisar y completar.", href: CGR("2018/SIGYD_D_2018010965.pdf") },
    { numero: "R-DCP-00025-2024", organo: DCP, fecha: "05-06-2024", tema: "Puntaje BIM en la Ruta 35 (Bernardo Soto-Florencia)", criterio: "Mantiene el factor de evaluación por uso de BIM (LOD 300 o superior) porque la recurrente no demostró que fuera ilegítimo, contrario a la técnica o a las políticas del banco financiador (art. 88 de la Ley 9986).", href: CGR("2024/SIGYD_D/SIGYD_D_2024011285.pdf") },
    { numero: "R-DCP-SICOP-01093-2025", organo: DCP, fecha: "19-06-2025", tema: "Licencias BIM del AyA", criterio: "Acoge parcialmente la objeción contra la colegiatura en el CFIA de los capacitadores, que podría limitar la participación internacional, e insta a revisarla conforme al principio de igualdad y libre concurrencia.", href: CGR("2025/SIGYD_D/SIGYD_D_2025013484.pdf") },
    { numero: "Oficio 12267-2025 (DFOE-CIU-0288)", organo: "Contraloría General de la República, Área de Fiscalización para el Desarrollo de las Ciudades", fecha: "10-07-2025", tema: "Proyecto de ley marco BIM (expediente 24.587)", criterio: "Valora el impulso al BIM y recomienda definir la gobernanza, asegurar la publicidad de la información, estudiar la gradualidad y los recursos, resguardar la neutralidad tecnológica y fijar la propiedad estatal de los datos.", href: CGR("2025/SIGYD_D/SIGYD_D_2025014836.pdf") },
  ],
  otros: [
    {
      titulo: "Aplicación administrativa y referencias técnicas",
      items: [
        { titulo: "SUTEL, acta de la sesión ordinaria 049-2025", detalle: "04-09-2025: recibe la circular MH-DCoP-CIR-0045-2025 de Hacienda, que somete a consulta el listado preliminar de tecnologías y metodologías", href: "https://www.sutel.go.cr/sites/default/files/actas/049-2025-ord.-04-09-2025-publica.pdf" },
        { titulo: "CFIA, Estándar BIM para proyectos en Costa Rica (versión 1)", detalle: "Noviembre de 2025; estándar de referencia basado en INTE/ISO 19650-1:2020, 19650-2:2020 y 19650-5:2021", href: "https://cfia.or.cr/site/wp-content/uploads/2025/pdf/bim/anexos/estandar-bim.pdf" },
      ],
    },
    {
      titulo: "Referencias extranjeras",
      items: [
        { titulo: "ISO 19650-1:2018", detalle: "Gestión de la información con el uso del modelado de la información de la construcción: conceptos y principios", href: "https://www.iso.org/standard/68078.html" },
        { titulo: "NEC4 (Reino Unido)", detalle: "Familia de contratos de NEC Contracts: Engineering and Construction Contract y Alliance Contract, entre otros", href: "https://www.neccontract.com/why-choose-nec/which-nec4-contract" },
      ],
    },
  ],
  pie: "Textos de la Ley 10654, de la Ley 9986 y del artículo 59 ter del Reglamento cotejados con la versión vigente del SINALEVI; resoluciones y oficio de la Contraloría leídos en su repositorio de documentos; acta de la SUTEL y estándar del CFIA en sus sitios oficiales. Corte: 24 de noviembre de 2026.",
};
