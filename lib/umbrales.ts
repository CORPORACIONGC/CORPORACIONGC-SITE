/* Umbrales de contratación pública (Ley 9986, art. 36) por año, tal como los
   fija la Contraloría General en su resolución anual. Fuente única para las
   figuras y la calculadora de la guía /articulos/umbrales-contratacion-publica-costa-rica.

   Cuando la Contraloría publique un año nuevo: agregar la entrada en UMBRALES,
   cambiar VIGENTE y PROXIMO, y actualizar la guía (título, texto y fecha). */

export type Regimen = "ordinario" | "diferenciado";
export type Objeto = "bienesServicios" | "obras";

/** mayor = monto desde el cual es licitación mayor («igual o más de»);
    reducida = monto bajo el cual es licitación reducida («menos de»). */
export type Par = { mayor: number; reducida: number };

export type AnioUmbrales = {
  anio: number;
  resolucion: string;
  fecha: string; // DD-MM-AAAA de la resolución
  publicacion?: string;
  href: string;
  ordinario: Record<Objeto, Par>;
  diferenciado: Record<Objeto, Par>;
  /** Art. 1: sujetos privados con fondos públicos aplican la ley por encima de estos montos. */
  privados: Record<Objeto, number>;
};

const CGR = "https://cgrfiles.cgr.go.cr/publico/docsweb/documentos/normativa";

/** Montos del texto original del art. 36 (27-05-2021). */
export const LEY_9986: Pick<AnioUmbrales, "ordinario" | "diferenciado"> = {
  ordinario: { bienesServicios: { mayor: 238223960, reducida: 59555990 }, obras: { mayor: 641372200, reducida: 160343050 } },
  diferenciado: { bienesServicios: { mayor: 285868752, reducida: 71467188 }, obras: { mayor: 1026195520, reducida: 256548880 } },
};

export const UMBRALES: Record<number, AnioUmbrales> = {
  2023: {
    anio: 2023,
    resolucion: "R-DC-00132-2022",
    fecha: "12-12-2022",
    href: `${CGR}/umbrales-ca-2023.pdf`,
    ordinario: { bienesServicios: { mayor: 264519083, reducida: 66129771 }, obras: { mayor: 712166540, reducida: 178041690 } },
    diferenciado: { bienesServicios: { mayor: 317422900, reducida: 79355725 }, obras: { mayor: 1139466819, reducida: 284866705 } },
    privados: { bienesServicios: 33064885.37, obras: 89020845.22 },
  },
  2024: {
    anio: 2024,
    resolucion: "R-DC-00123-2023",
    fecha: "12-12-2023",
    href: `${CGR}/umbrales-ca-2024.pdf`,
    ordinario: { bienesServicios: { mayor: 235035033, reducida: 65244541 }, obras: { mayor: 702633295, reducida: 175658379 } },
    diferenciado: { bienesServicios: { mayor: 313173795, reducida: 78293449 }, obras: { mayor: 1124213623, reducida: 281053406 } },
    privados: { bienesServicios: 32622270.31, obras: 87829189.29 },
  },
  2025: {
    anio: 2025,
    resolucion: "R-DC-00128-2024",
    fecha: "11-12-2024",
    publicacion: "La Gaceta 237 del 17-12-2024",
    href: `${CGR}/umbrales-ca-2025.pdf`,
    ordinario: { bienesServicios: { mayor: 233449258, reducida: 64804338 }, obras: { mayor: 697892648, reducida: 174473216 } },
    diferenciado: { bienesServicios: { mayor: 311060820, reducida: 77765205 }, obras: { mayor: 1116628585, reducida: 279157146 } },
    privados: { bienesServicios: 32402168.77, obras: 87236608.23 },
  },
  2026: {
    anio: 2026,
    resolucion: "R-DC-00142-2025",
    fecha: "10-12-2025",
    publicacion: "La Gaceta 237 del 17-12-2025",
    href: `${CGR}/umbrales-ca-2026.pdf`,
    ordinario: { bienesServicios: { mayor: 258239178, reducida: 64559795 }, obras: { mayor: 695259109, reducida: 173814832 } },
    diferenciado: { bienesServicios: { mayor: 309887014, reducida: 77471753 }, obras: { mayor: 1112414922, reducida: 278103730 } },
    privados: { bienesServicios: 32279897.28, obras: 86907415.76 },
  },
};

/** Año cuyos umbrales rigen hoy y año que la Contraloría todavía no ha fijado. */
export const VIGENTE = 2026;
export const PROXIMO = 2027;

/** ¢258.239.178 o ¢32.279.897,28: punto de miles y coma decimal, como en las resoluciones. */
export function colones(n: number, decimales = false): string {
  const [ent, dec] = n.toFixed(decimales ? 2 : 0).split(".");
  const miles = ent.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return "¢" + miles + (decimales ? "," + dec : "");
}

export const NOMBRE_OBJETO: Record<Objeto, string> = { bienesServicios: "Bienes y servicios", obras: "Obra pública" };
export const NOMBRE_REGIMEN: Record<Regimen, string> = { ordinario: "Régimen ordinario", diferenciado: "Régimen diferenciado" };
