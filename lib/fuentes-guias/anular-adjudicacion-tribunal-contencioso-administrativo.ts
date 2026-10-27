import { NEXUS, type FuentesDeGuia } from "./tipos";

const SC = "Sala Constitucional";
const S1 = "Sala Primera de la Corte";
const TCA = "Tribunal Contencioso Administrativo";

const LGCP_GACETA = "https://www.imprentanacional.go.cr/pub/2021/05/31/ALCA109_31_05_2021.pdf";
const CPCA_TEXTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";

export const fuentes: FuentesDeGuia = {
  normas: [
    {
      titulo: "Ley General de Contratación Pública",
      detalle: "Ley N.° 9986, arts. 96 y 98 (efectos de la resolución de la objeción y de la apelación; contrato ejecutado). Alcance 109 a La Gaceta 103 del 31-05-2021",
      href: LGCP_GACETA,
    },
    {
      titulo: "Código Procesal Contencioso-Administrativo",
      detalle: "Ley N.° 8508, arts. 19 a 26 (medidas cautelares), 31.1 (agotamiento de la vía), 36 (conductas impugnables), 39.1 (plazo de un año), 40 (actos absolutamente nulos) y 42 y 43 (pretensiones)",
      href: CPCA_TEXTO,
    },
  ],
  jurisprudencia: [
    {
      numero: "Voto 1998-00998",
      organo: SC,
      fecha: "16-02-1998",
      tema: "Principios constitucionales de la contratación administrativa",
      criterio:
        "Fija los principios constitucionales de la contratación administrativa y, retomando su voto 5119-95, describe a la Contraloría como órgano de relevancia constitucional, auxiliar de la Asamblea Legislativa, encargado del control superior de la Hacienda Pública.",
      href: NEXUS("sen-1-0007-114246"),
    },
    {
      numero: "Sentencia 1096-F-S1-2011",
      organo: S1,
      fecha: "08-09-2011",
      tema: "Nulidad de la adjudicación por el régimen de prohibiciones",
      criterio:
        "Confirma el fallo del Tribunal: la empresa estaba impedida de ofertar porque la hermana de su representante, funcionaria del INA, intervino en el acuerdo que aprobó contratarla, y esa infracción vició de nulidad absoluta la adjudicación. Se resolvió con la Ley 7494, hoy derogada.",
      href: NEXUS("sen-1-0004-766755"),
      gc: true,
    },
    {
      numero: "Resolución 1199-2020",
      organo: TCA,
      fecha: "17-07-2020",
      tema: "Contrato ya ejecutado: solo daños y perjuicios",
      criterio:
        "En una demanda contra RECOPE rechaza integrar a la adjudicataria como litisconsorte, porque la licitación ya se ejecutó y, conforme al art. 90 de la Ley 7494 (hoy art. 98 de la Ley 9986), la sentencia favorable solo podría reconocer daños y perjuicios.",
      href: NEXUS("sen-1-0034-987313"),
    },
  ],
  pie: "Textos normativos: La Gaceta (Imprenta Nacional) y SINALEVI. Jurisprudencia: Nexus del Poder Judicial. Cotejo al 26 de octubre de 2026.",
};
