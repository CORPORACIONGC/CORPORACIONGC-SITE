import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera";
const TA = "Tribunal de Apelación de lo Contencioso Administrativo y Civil de Hacienda";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Art. 45", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
    { titulo: "Ley de Expropiaciones", detalle: "Ley N.° 7495, arts. 1, 4, 11, 16, 17, 18, 20 a 25, 27 a 30, 35 y 39" },
    { titulo: "Reforma integral de la Ley de Expropiaciones", detalle: "Ley N.° 9286, de 11 de noviembre de 2014", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=78853&param2=143151&param3=1" },
    { titulo: "Reforma de la Ley de Expropiaciones y de la Ley de Notificaciones Judiciales", detalle: "Ley N.° 9462, de 11 de julio de 2017 (arts. 18, 22, 25 y 30)", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=84458&param2=108957&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Sentencia 1016-F-2004", organo: S1, fecha: "26-11-2004", tema: "Indexación", criterio: "Admite la indexación extraconvencional de las obligaciones dinerarias, cuando la parte la pide, por aplicación directa de la Constitución Política.", href: NEXUS("sen-1-0034-292363"), gc: true },
    { numero: "Sentencia 550-F-2007", organo: S1, fecha: "03-08-2007", tema: "Justo precio", criterio: "La indemnización es la piedra angular de la expropiación: reparación integral del valor real del bien y del daño consecuente, emergente y lucro cesante, para dejar indemne el patrimonio del expropiado. El enlace lleva al extracto del CEIJ.", href: NEXUS("ext-1-0034-115700"), gc: true },
    { numero: "Voto 61-2014", organo: TA, fecha: "12-02-2014", tema: "Daño al remanente", criterio: "Anula la sentencia porque el avalúo no fundamentó la inexistencia de daño al remanente y el peritaje omitió el tema; ordena determinar si el resto es un sobrante inadecuado del art. 17.", href: NEXUS("sen-1-0034-623668") },
    { numero: "Voto 133-2014", organo: TA, fecha: "27-03-2014", tema: "Intereses", criterio: "Fija el justiprecio y condena a intereses a la tasa legal desde la desposesión y hasta el pago, calculados sobre la diferencia entre el depósito y el justiprecio.", href: NEXUS("sen-1-0034-623621") },
    { numero: "Voto 2021-27046", organo: SC, fecha: "01-12-2021", tema: "Desalojo y posesión", criterio: "Declara sin lugar la acción contra los arts. 30 y 32: los plazos de desalojo y la entrada en posesión tras el depósito son razonables, y el monto de los derechos comerciales se discute en el proceso judicial.", href: NEXUS("sen-1-0007-1062912") },
    { numero: "Voto 52-2023", organo: TA, fecha: "03-02-2023", tema: "Intereses", criterio: "Modifica el justiprecio y adiciona la condena a intereses legales sobre la diferencia entre el avalúo administrativo y la suma fijada en sentencia.", href: NEXUS("sen-1-0034-1142467") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
