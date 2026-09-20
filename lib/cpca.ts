/* El Código Procesal Contencioso-Administrativo como dato: el índice de sus
   doce títulos y, para los artículos que deciden los casos, un rótulo corto y
   la sentencia comentada que los interpreta. El texto íntegro de cada
   artículo vive en /datos/cpca.json y se carga cuando se abre. */

export const CPCA_FICHA = {
  ley: "Ley 8508",
  nombre: "Código Procesal Contencioso-Administrativo",
  sancion: "28 de abril de 2006",
  vigencia: "1.° de enero de 2008",
  version: "Texto vigente al 6 de mayo de 2025",
  articulos: 220,
  sinalevi:
    "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1",
} as const;

/** Rótulo breve de un artículo clave: lo que resuelve, en una línea. */
export const CPCA_ROTULOS: Record<string, string> = {
  "1": "Objeto de la jurisdicción",
  "2": "Materias que también conoce",
  "3": "Lo que queda fuera",
  "10": "Quién puede demandar",
  "12": "Contra quién se demanda",
  "19": "Cuándo caben las medidas cautelares",
  "21": "Requisitos de la medida cautelar",
  "22": "Medida provisionalísima",
  "26": "Medida cautelar antes del proceso",
  "31": "Agotamiento de la vía administrativa",
  "34": "Lesividad",
  "36": "Conductas impugnables",
  "39": "Plazo para demandar",
  "40": "Actos de efectos continuados",
  "42": "Pretensiones admisibles",
  "58": "Requisitos de la demanda",
  "60": "Traslado de la demanda",
  "90": "Audiencia preliminar",
  "92": "Inadmisibilidad",
  "107": "Sentencia",
  "122": "Contenido de la sentencia",
  "123": "Condena en abstracto",
  "124": "Actualización de sumas",
  "131": "Recurso de casación",
  "137": "Motivos de casación",
  "138": "Casación por razones procesales",
  "150": "Ejecución de sentencia",
  "193": "Costas",
  "200": "Reformas a la Ley General de la Administración Pública",
};

/** Sentencias comentadas del sitio que interpretan un artículo del Código. */
export const CPCA_JURISPRUDENCIA: Record<string, { slug: string; voto: string; sobre: string }[]> = {
  "34": [{ slug: "caducidad-de-la-accion", voto: "1426-F-S1-2012", sobre: "el plazo de la lesividad cuando los efectos perduran" }],
  "39": [{ slug: "caducidad-de-la-accion", voto: "1426-F-S1-2012", sobre: "desde cuándo corre el año para demandar" }],
  "40": [{ slug: "caducidad-de-la-accion", voto: "1426-F-S1-2012", sobre: "qué es un acto de efectos continuados" }],
  "92": [{ slug: "caducidad-de-la-accion", voto: "1426-F-S1-2012", sobre: "la inadmisibilidad por el plazo vencido" }],
  "123": [{ slug: "indexacion-de-obligaciones-dinerarias", voto: "1016-F-2004", sobre: "la condena que se liquida después" }],
  "124": [{ slug: "indexacion-de-obligaciones-dinerarias", voto: "1016-F-2004", sobre: "actualizar lo debido a su valor presente" }],
  "138": [{ slug: "responsabilidad-bancaria-por-fraude-electronico", voto: "300-F-S1-2009", sobre: "la casación por razones procesales" }],
  "150": [{ slug: "responsabilidad-bancaria-por-fraude-electronico", voto: "300-F-S1-2009", sobre: "la ejecución de lo resuelto" }],
  "193": [{ slug: "caducidad-de-la-accion", voto: "1426-F-S1-2012", sobre: "la condena en costas al vencido" }],
  "200": [{ slug: "caducidad-del-procedimiento-administrativo", voto: "34-F-S1-2011", sobre: "la caducidad del procedimiento, que este artículo reformó" }],
};

export type ArticuloCPCA = {
  art: string;
  titulo: string | null;
  capitulo: string | null;
  seccion: string | null;
  texto: string;
};

/** Los doce títulos del Código, en su orden. */
export const CPCA_TITULOS: string[] = [
  "Título I · LA JURISDICCIÓN ADMINISTRATIVA Y CIVIL DE HACIENDA",
  "Título II · PARTES",
  "Título III · MEDIDAS CAUTELARES",
  "Título IV · OBJETO Y PRETENSIONES",
  "Título V · ACTIVIDAD PROCESAL",
  "Título VI · TERMINACIÓN DEL PROCESO",
  "Título VII · RECURSOS",
  "Título VIII · EJECUCIÓN DE SENTENCIAS",
  "Título IX · PROCESOS ESPECIALES",
  "Título X · EFECTOS ECONÓMICOS DEL PROCESO",
  "Título XI · DISPOSICIONES DEROGATORIAS Y DE REFORMA",
  "Título XII · DISPOSICIONES FINALES",
];

/** Índice ligero —número de artículo y título al que pertenece— para que el
 *  Código se pinte con la página; el texto de cada norma llega del JSON. */
export const CPCA_INDICE: [string, number][] = [
  ["1",0], ["2",0], ["3",0], ["4",0], ["5",0], ["6",0], ["7",0], ["8",0], ["9",1], ["10",1], ["11",1], ["12",1], ["13",1], ["14",1], ["15",1], ["16",1], ["17",1], ["18",1], ["19",2], ["20",2], ["21",2], ["22",2], ["23",2], ["24",2], ["25",2], ["26",2], ["27",2], ["28",2], ["29",2], ["30",2], ["31",3], ["32",3], ["33",3], ["34",3], ["35",3], ["36",3], ["37",3], ["38",3], ["39",3], ["40",3], ["41",3], ["42",3], ["43",3], ["44",3], ["45",3], ["46",3], ["47",3], ["48",3], ["49",4], ["50",4], ["51",4], ["52",4], ["53",4], ["54",4], ["55",4], ["56",4], ["57",4], ["58",4], ["59",4], ["60",4], ["61",4], ["62",4], ["63",4], ["64",4], ["65",4], ["66",4], ["67",4], ["68",4], ["69",4], ["70",4], ["71",4], ["72",4], ["73",4], ["74",4], ["75",4], ["76",4], ["77",4], ["78",4], ["79",4], ["80",4], ["81",4], ["82",4], ["83",4], ["84",4], ["85",4], ["86",4], ["87",4], ["88",4], ["89",4], ["90",4], ["91",4], ["92",4], ["93",4], ["94",4], ["95",4], ["96",4], ["97",4], ["98",4], ["99",4], ["100",4], ["101",4], ["102",4], ["103",4], ["104",4], ["105",4], ["106",4], ["107",4], ["108",4], ["109",4], ["110",4], ["111",4], ["112",5], ["112bis",5], ["112ter",5], ["113",5], ["114",5], ["115",5], ["116",5], ["117",5], ["118",5], ["119",5], ["120",5], ["121",5], ["122",5], ["123",5], ["124",5], ["125",5], ["126",5], ["127",5], ["128",5], ["129",5], ["130",5], ["131",5], ["132",6], ["133",6], ["134",6], ["135",6], ["136",6], ["137",6], ["138",6], ["139",6], ["140",6], ["141",6], ["142",6], ["143",6], ["144",6], ["145",6], ["146",6], ["147",6], ["148",6], ["149",6], ["150",6], ["151",6], ["152",6], ["153",6], ["154",6], ["155",7], ["156",7], ["157",7], ["158",7], ["159",7], ["160",7], ["161",7], ["162",7], ["163",7], ["164",7], ["165",7], ["166",7], ["167",7], ["168",7], ["169",7], ["170",7], ["171",7], ["172",7], ["173",7], ["174",7], ["175",7], ["176",7], ["177",7], ["178",7], ["179",7], ["180",7], ["181",7], ["182",7], ["183",7], ["184",7], ["185",8], ["186",8], ["187",8], ["188",8], ["189",8], ["190",8], ["191",8], ["192",8], ["193",9], ["194",9], ["195",9], ["196",9], ["197",9], ["198",10], ["199",10], ["200",10], ["201",10], ["202",10], ["203",10], ["204",10], ["205",10], ["206",10], ["207",10], ["208",10], ["209",10], ["210",10], ["211",10], ["212",10], ["213",10], ["214",10], ["215",10], ["216",10], ["217",10], ["218",10], ["219",10], ["220",11], ["221",11], ["222",11],
];
