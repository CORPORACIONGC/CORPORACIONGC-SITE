import { NEXUS, type FuentesDeGuia } from "./tipos";

const S1 = "Sala Primera";
const TCASACION = "Tribunal de Casación de lo Contencioso Administrativo";
const TCA = "Tribunal Contencioso Administrativo";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de la Administración Pública (Ley 6227)",
      detalle: "Arts. 190 (cláusula general de responsabilidad), 194.2 (sin lucro cesante en la responsabilidad por conducta lícita), 196 (daño efectivo, evaluable e individualizable) y 198 (prescripción de cuatro años)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1",
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo (Ley 8508)",
      detalle: "Arts. 122, inciso m) (condena en abstracto) y 163 (liquidación en ejecución de sentencia)",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
    },
    {
      titulo: "Ley General de Contratación Pública (Ley 9986)",
      detalle: "Art. 98, inciso b), apartado iv): si la contratación ya se ejecutó o está en ejecución, la sentencia solo reconoce daños y perjuicios",
      href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=152662&param3=1",
    },
  ],
  jurisprudencia: [
    { numero: "Voto 000371-F-S1-2009", organo: S1, fecha: "16-04-2009", tema: "Concepto de pérdida de chance", criterio: "Define la figura: una posibilidad real y seria de obtener una ventaja futura, con un umbral de probabilidad mayor que el de la mera expectativa; la niega porque no se probó la oportunidad de futuras contrataciones con el ICE.", href: NEXUS("ext-1-0034-127010"), gc: true },
    { numero: "Voto 000478-F-S1-2012", organo: S1, fecha: "12-04-2012", tema: "Contrato de energía frustrado", criterio: "Indemniza la oportunidad perdida por una generadora elegible desplazada de la lista del ICE: 10 % de la ganancia neta de los 15 años del contrato, ponderada por la capacidad real de compra; el beneficio pleno sería enriquecimiento injusto.", href: NEXUS("ext-1-0034-144730"), gc: true },
    { numero: "Voto 000823-F-S1-2013", organo: S1, fecha: "04-07-2013", tema: "Concesión de transporte no adjudicada", criterio: "Fija la indemnización en el 7 % de la remuneración del capital del período original de la concesión; la prórroga era una expectativa y las inversiones para participar no se indemnizan.", href: NEXUS("ext-1-0034-152382") },
    { numero: "Voto 001095-F-S1-2016", organo: S1, fecha: "20-10-2016", tema: "Oferente mejor calificado", criterio: "La constructora mejor calificada y no adjudicada tenía una posibilidad real y seria de ser adjudicada; se le reconoce el 10 % de la ganancia neta del contrato, con tope en lo pedido.", href: NEXUS("ext-1-0034-158520") },
    { numero: "Voto 000626-F-S1-2017", organo: S1, fecha: "07-06-2017", tema: "Capacidad y diligencia del contratista", criterio: "Aunque el INS incumplió, niega la pérdida de chance porque la contratista no tenía capacidad para procesar el resto del encargo ni gestionó su entrega.", href: NEXUS("ext-1-0004-170479") },
    { numero: "Voto 000271-F-S1-2019", organo: S1, fecha: "26-03-2019", tema: "Adjudicación frustrada: 50 %", criterio: "Lo indemnizable es la oportunidad de resultar adjudicatario; reduce a la mitad la condena que equivalía al valor pagado a la adjudicataria por el factor aleatorio y para evitar enriquecimiento sin causa.", href: NEXUS("ext-1-0004-284056") },
    { numero: "Voto 000477-F-S1-2019", organo: S1, fecha: "30-05-2019", tema: "Oportunidad electoral", criterio: "La pérdida de la oportunidad de participar en una elección está comprendida en la condena del amparo electoral y no se confunde con el éxito o fracaso final de la candidatura.", href: NEXUS("ext-1-0004-270230") },
    { numero: "Voto 003415-F-S1-2019", organo: S1, fecha: "24-10-2019", tema: "Hipoteca cancelada por error registral", criterio: "La pérdida del privilegio hipotecario es una frustrada oportunidad indemnizable; condena en abstracto a la Junta Administrativa del Registro Nacional, sin equipararla al capital garantizado.", href: NEXUS("ext-1-0004-277972") },
    { numero: "Voto 002610-F-S1-2020", organo: S1, fecha: "12-11-2020", tema: "Venta frustrada por falta de acceso", criterio: "Confirma ¢2.000.000 por la oportunidad de vender una finca, acreditada con una opción de compra y otros interesados; la propietaria conserva el bien.", href: NEXUS("ext-1-0004-306662") },
    { numero: "Voto 001716-F-S1-2021", organo: S1, fecha: "12-10-2021", tema: "Mera expectativa", criterio: "Anula la indemnización por una carrera universitaria no iniciada: el deseo de estudiar no es una probabilidad real, y este perjuicio no se presume in re ipsa.", href: NEXUS("sen-1-0004-1076747") },
    { numero: "Voto 000157-F-S1-2026", organo: S1, fecha: "29-01-2026", tema: "Chance sin anular el acto", criterio: "Mantiene el rechazo de la demanda que solo pedía la pérdida de oportunidad en una licitación, porque la actora desistió de anular los actos que la excluyeron.", href: NEXUS("sen-1-0004-1363195") },
    { numero: "Voto 000913-F-S1-2026", organo: S1, fecha: "26-06-2026", tema: "Chance frustrado y daño material", criterio: "La devolución de los gastos de estudio y el chance frustrado de ejercer la profesión no se contraponen; extiende el período indemnizado a los estudiantes de Marina Civil de la UCR.", href: NEXUS("sen-1-0004-1403879") },
    { numero: "Voto 001548-F-S1-2026", organo: S1, fecha: "30-09-2026", tema: "Casación del caso del ITCR", criterio: "Declara sin lugar el recurso de casación contra la sentencia 085-2022 de la Sección IV del Tribunal Contencioso Administrativo.", href: NEXUS("sen-1-0004-1432092") },
    { numero: "Voto 060-2023", organo: TCASACION, fecha: "20-04-2023", tema: "Licitaciones futuras", criterio: "La simple posibilidad de participar en contrataciones posteriores no es indemnizable; debía probarse en cuáles había una posibilidad real y calificada.", href: NEXUS("ext-1-1011-344731") },
    { numero: "Sentencia 085-2022-IV", organo: TCA, fecha: "30-08-2022", tema: "Chance perdido por el propio oferente", criterio: "No hubo oportunidad seria y real porque la constructora consintió modificar su oferta y la Contraloría negó el refrendo del contrato.", href: NEXUS("sen-1-0034-1136637") },
    { numero: "Sentencia 6825-2025", organo: TCA, fecha: "09-07-2025", tema: "Exclusión ilegítima de una oferta", criterio: "Reconoce al oferente excluido la utilidad del 5 % declarada en su oferta, solo por el primer año del contrato y sin las prórrogas facultativas, a liquidar en ejecución.", href: NEXUS("sen-1-0034-1331600") },
  ],
  pie: "Textos de la LGAP, del CPCA y de la Ley General de Contratación Pública cotejados en la base de normativa con enlace al SINALEVI. Resoluciones leídas íntegras en la base local y enlazadas a Nexus del Poder Judicial; en los votos sin copia íntegra en Nexus, el enlace lleva a su ficha. Corte: 24 de noviembre de 2026.",
};
