import { NEXUS, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const TA = "Tribunal de Apelación de lo Contencioso Administrativo y Civil de Hacienda";

export const fuentes: FuentesDeGuia = {
  normas: [
    { titulo: "Constitución Política", detalle: "Art. 45", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
    { titulo: "Ley de Expropiaciones", detalle: "Ley N.° 7495, arts. 17, 18, 22, 25, 35 y 39" },
    { titulo: "Reforma de la Ley de Expropiaciones y de la Ley de Notificaciones Judiciales", detalle: "Ley N.° 9462, de 11 de julio de 2017 (arts. 18 y 22)", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=84458&param2=108957&param3=1" },
  ],
  jurisprudencia: [
    { numero: "Sentencia 550-F-2007", organo: S1, fecha: "03-08-2007", tema: "Indemnización integral", criterio: "La expropiación es una técnica de conversión de derechos: la indemnización comprende el valor real del bien y el daño consecuente, emergente y lucro cesante, para mantener incólume el patrimonio del expropiado. El enlace lleva al extracto del CEIJ.", href: NEXUS("ext-1-0034-115700"), gc: true },
    { numero: "Voto 133-2014", organo: TA, fecha: "27-03-2014", tema: "Peritaje", criterio: "Hace suya la doctrina de la Sala Primera sobre la reparación integral y comparte el descarte del peritaje judicial que no explicaba cómo fijó el valor del metro cuadrado ni aportaba memoria de cálculo.", href: NEXUS("sen-1-0034-623621") },
    { numero: "Voto 212-2015", organo: `${TA}, Sección II`, fecha: "12-05-2015", tema: "Peritaje", criterio: "Descarta el peritaje que usó referencias fuera de la zona del inmueble y un ajuste del 30 % sin sustento técnico, y fija el justiprecio en el monto del avalúo administrativo. El enlace lleva a la adición 212-2015-BIS del 19-05-2015, que lo reitera.", href: NEXUS("sen-1-0034-640569") },
    { numero: "Voto 498-2020", organo: `${TA}, Sección II`, fecha: "15-10-2020", tema: "Derechos comerciales", criterio: "Confirma el rechazo de la nulidad contra la puesta en posesión, dispuesta mientras la indemnización por derechos comerciales se tramitaba en paralelo y en expediente separado. El enlace lleva al extracto del CEIJ.", href: NEXUS("ext-1-0034-294342") },
    { numero: "Voto 546-2020", organo: `${TA}, Sección I`, fecha: "02-12-2020", tema: "Lucro cesante", criterio: "Confirma diez meses de alquiler cesante: el tiempo de reponer la fuente de ingresos, desde la compra del terreno, los planos y los permisos hasta la construcción y la ocupación; descarta un dictamen sin metodología.", href: NEXUS("sen-1-0034-1010931") },
    { numero: "Voto 42-2022", organo: `${TA}, Sección I`, fecha: "07-02-2022", tema: "Daño al remanente", criterio: "Deniega el daño al remanente: el avalúo y el peritaje coincidían en que no existía, y las solas manifestaciones del abogado del expropiado no bastan para enervarlos.", href: NEXUS("sen-1-0034-1075340") },
    { numero: "Voto 59-2022", organo: `${TA}, Sección I`, fecha: "18-02-2022", tema: "Daño al remanente", criterio: "Confirma que no procede indemnizar el daño al remanente fundado en hechos futuros: los daños deben ser reales y permanentes (art. 22 in fine).", href: NEXUS("sen-1-0034-1075352") },
  ],
  pie: "Textos normativos: SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
