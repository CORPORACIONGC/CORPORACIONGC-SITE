import { NEXUS, PGR, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const CGR = (ruta: string) => `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${ruta}`;

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley sobre la Zona Marítimo Terrestre (Ley 6043)",
      detalle: "Arts. 1 a 4, 6, 10, 12, 13, 20 a 23, 25, 34, 53, 58, 62, 63, 65 y 73; texto vigente, versión 9 de 9 (05-04-2022)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=32006&param2=131014&param3=1",
    },
    {
      titulo: "Reglamento a la Ley sobre la Zona Marítimo Terrestre (Decreto Ejecutivo 7841-P)",
      detalle: "Arts. 2 (inciso l), 5, 9, 12, 71 y 72",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=18579&param2=93916&param3=1",
    },
    {
      titulo: "Ley de Incentivos para el Desarrollo Turístico (Ley 6990)",
      detalle: "Arts. 16 y 17: interpretación auténtica de la Ley 6043 sobre el acceso a la zona pública; texto vigente, versión 5 (16-03-2026)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=1388&param2=150697&param3=1",
    },
    {
      titulo: "Ley de Aguas (Ley 276)",
      detalle: "Arts. 3 (las playas son de propiedad nacional) y 10 (uso común de las playas)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=11950&param2=91553&param3=1",
    },
    {
      titulo: "Ley General de Caminos Públicos (Ley 5060)",
      detalle: "Arts. 32 a 34: prohibición de cerrar caminos públicos y procedimiento de reapertura",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38653&param2=138745&param3=1",
    },
    {
      titulo: "Código Penal (Ley 4573)",
      detalle: "Art. 227: usurpación de dominio público",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=5027&param2=151473&param3=1",
    },
    {
      titulo: "Ley de la Jurisdicción Constitucional (Ley 7135)",
      detalle: "Arts. 57 (amparo contra sujetos de derecho privado) y 71 (desobediencia a la orden de amparo)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
    },
    {
      titulo: "Constitución Política",
      detalle: "Art. 22: libertad de tránsito",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1",
    },
    {
      titulo: "Ley de Protección a los Ocupantes de Zonas clasificadas como Especiales (Ley 9073)",
      detalle: "Declarada inconstitucional en su totalidad por el voto 2019-012746",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=73503&param2=131541&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 1997-005210", organo: SC, fecha: "02-09-1997", tema: "Núcleo de la zona pública", criterio: "La franja de cincuenta metros es el núcleo inamovible de la ley: nadie puede apropiársela y está al servicio de todas las personas, sin excepción.", href: NEXUS("ext-1-0007-265128") },
    { numero: "Voto 2001-008223", organo: SC, fecha: "14-08-2001", tema: "Playa sin camino público", criterio: "La Sala no puede ordenar el paso por propiedad privada sin que se haya declarado la demanialidad del acceso; la municipalidad decide si expropia y construye.", href: NEXUS("ext-1-0007-10571") },
    { numero: "Voto 2007-013471", organo: SC, fecha: "14-09-2007", tema: "Camino a Playa Caletas", criterio: "El litigio sobre los terrenos no impide a la municipalidad determinar si el camino cerrado es público y aplicar los arts. 32 y 33 de la Ley General de Caminos Públicos.", href: NEXUS("ext-1-0007-122392") },
    { numero: "Voto 2007-018483", organo: SC, fecha: "19-12-2007", tema: "Vialidad de Papagayo", criterio: "Sin lugar la acción contra el reglamento de vialidad: los caminos internos de la concesión son de uso privativo, pero el concesionario debe facilitar el acceso a la zona pública con restricciones razonables. Voto salvado de Armijo Sancho y Cruz Castro.", href: NEXUS("ext-1-0007-265635") },
    { numero: "Voto 2009-003113", organo: SC, fecha: "25-02-2009", tema: "Intangibilidad de la zona pública", criterio: "Anula la Ley 8464: la zona pública no puede desafectarse porque las playas son de uso común y gratuito de todos los habitantes.", href: NEXUS("ext-1-0007-265166") },
    { numero: "Sentencia 2011-000155", organo: "Tribunal de Casación Penal de San Ramón", fecha: "03-05-2011", tema: "Portones hacia Playa Curú", criterio: "En una causa por usurpación de dominio público, anula por falta de fundamentación la orden de retirar portones impuesta a la absuelta y mantiene la declaratoria de camino público; restringir el ingreso a un refugio no es decisión de un particular.", href: NEXUS("sen-1-0034-513927") },
    { numero: "Voto 2019-012746", organo: SC, fecha: "10-07-2019", tema: "Moratoria de la Ley 9073", criterio: "Declara inconstitucional la Ley 9073 en su totalidad: suspender desalojos y demoliciones impide la autotutela de las zonas especiales.", href: NEXUS("ext-1-0007-300490") },
    { numero: "Voto 2021-006555", organo: SC, fecha: "06-04-2021", tema: "Amparo contra un hotel", criterio: "Admite el amparo contra el hotel por su posición de poder sobre el acceso a la playa (art. 57 LJC); sin lugar porque no se probó que se impidiera el acceso.", href: NEXUS("sen-1-0007-1039532") },
    { numero: "Voto 2022-007351", organo: SC, fecha: "29-03-2022", tema: "Portón hacia Playa Rajadita", criterio: "Rechazo de plano: el recurrente no había planteado la gestión ante las entidades encargadas de los caminos.", href: NEXUS("sen-1-0007-1082214") },
    { numero: "Voto 2024-010056", organo: SC, fecha: "19-04-2024", tema: "Portón en Playa La Leona", criterio: "Con lugar: ordena al Concejo Municipal de Distrito de Paquera garantizar de inmediato el libre paso por los accesos públicos a la zona pública, con condena en costas, daños y perjuicios.", href: NEXUS("ext-1-0007-359776") },
    { numero: "Resolución 2024-008290", organo: "Tribunal Contencioso Administrativo (jerarquía impropia municipal)", fecha: "14-11-2024", tema: "Deber municipal", criterio: "Corresponde a las municipalidades facilitar el acceso a las playas e impedir cualquier acción que limite el libre acceso; confirma el rechazo de una obra privada en la zona pública de Playa Blanca.", href: NEXUS("sen-1-0034-1269552") },
    { numero: "Voto 2026-022284", organo: SC, fecha: "19-06-2026", tema: "Playas sin acceso en La Cruz", criterio: "Con lugar: la falta de presupuesto no justifica dejar cinco playas sin acceso público terrestre; da dieciocho meses a la municipalidad. Sin lugar en cuanto a una playa accesible desde otra y una inaccesible por su topografía.", href: NEXUS("sen-1-0007-1402795") },
    { numero: "Voto 2026-022338", organo: SC, fecha: "19-06-2026", tema: "Calle de Playa Espadilla", criterio: "Remite a lo resuelto en un amparo anterior sobre el cierre vehicular de una calle en Quepos; la demora municipal en resolver es asunto de legalidad.", href: NEXUS("sen-1-0007-1406546") },
  ],
  contraloria: [
    { numero: "Informe DFOE-SM-22-2008", organo: "Contraloría General de la República", fecha: "10-11-2008", tema: "Accesos en Carrillo", criterio: "Constata accesos controlados con seguridad privada en lugar de las vías públicas previstas, como en Playa Azul; dispone estudiar los caminos de acceso a la zona y levantar los obstáculos.", href: CGR("2008/SIGYD_D_2008019852.doc") },
    { numero: "Oficio 19853-2024 (DJ-2212)", organo: "Contraloría General de la República", fecha: "21-11-2024", tema: "Proyecto de ley 24.413", criterio: "Sobre el mínimo de tres accesos por playa: las exoneraciones del canon deben ser excepcionales y hay que delimitar las obligaciones del Estado y de las municipalidades.", href: CGR("2024/SIGYD_D/SIGYD_D_2024023781.pdf") },
  ],
  procuraduria: [
    { titulo: "Opinión jurídica OJ-128-2005", detalle: "31-08-2005, a la Asamblea Legislativa: el carácter público de las playas no depende de los accesos; su número y ubicación se definen en los planes reguladores costeros", href: PGR(13362) },
    { titulo: "Opinión jurídica OJ-176-2024", detalle: "09-12-2024, sobre el proyecto de ley 24.413: valorar si el problema de acceso es de ejecución y si el número de accesos debe sujetarse a criterios técnicos", href: PGR(24756) },
  ],
  pie: "Textos de la Ley 6043, su Reglamento, la Ley 6990, la Ley de Aguas, la Ley General de Caminos Públicos, el Código Penal y la Ley de la Jurisdicción Constitucional cotejados con la base normativa de Corporación GC y su enlace al SINALEVI. Resoluciones leídas en su texto íntegro en Nexus del Poder Judicial; documentos de la Contraloría en su repositorio y opiniones de la Procuraduría en el SINALEVI. Corte: 24 de noviembre de 2026.",
};
