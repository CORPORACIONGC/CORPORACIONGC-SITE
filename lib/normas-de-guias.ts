/* Las guías que giran sobre una ley la declaran en `about` como nodo
   `Legislation`, con el mismo @id que lleva la norma donde el sitio la
   reproduce entera (CPCA, LGAP, Ley 6043, Reglamento de Contratación).
   Las tres que el sitio no reproduce llevan aquí su ficha mínima: fecha
   de sanción y enlace de SINALEVI cotejados en la base de normativa
   el 31-10-2026. */

import { CPCA_FICHA } from "@/lib/cpca";
import { LGAP_FICHA } from "@/lib/lgap";
import { LEY6043_FICHA } from "@/lib/ley6043";
import { REGLAMENTO_FICHA } from "@/lib/reglamento-contratacion";
import type { NormaSchema } from "@/lib/normas";

const ASAMBLEA = "Asamblea Legislativa de la República de Costa Rica";

const LGCP: NormaSchema = {
  nombre: "Ley General de Contratación Pública",
  identificador: "Ley 9986",
  tipo: "Ley",
  fecha: "2021-05-27",
  sinalevi: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=94469&param2=150657&param3=1",
  alias: ["LGCP", "Ley 9986"],
  emisor: ASAMBLEA,
};

const LJC: NormaSchema = {
  nombre: "Ley de la Jurisdicción Constitucional",
  identificador: "Ley 7135",
  tipo: "Ley",
  fecha: "1989-10-11",
  sinalevi: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=38533&param2=127124&param3=1",
  alias: ["LJC", "Ley 7135"],
  emisor: ASAMBLEA,
};

const LEY_VASP: NormaSchema = {
  nombre:
    "Reforma Ley sobre estupefacientes, sustancias psicotrópicas, drogas de uso no autorizado, actividades conexas, legitimación de capitales y financiamiento al terrorismo",
  identificador: "Ley 10961",
  tipo: "Ley",
  fecha: "2026-06-09",
  sinalevi: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=107347&param2=151588&param3=1",
  alias: ["Ley 10961", "Ley de proveedores de servicios de activos virtuales"],
  emisor: ASAMBLEA,
};

export const NORMA_DE_GUIA: Record<string, NormaSchema> = {
  "que-es-el-cpca-costa-rica": CPCA_FICHA,
  "cpca-vs-ley-reguladora-contencioso-administrativa": CPCA_FICHA,
  "ley-general-administracion-publica-costa-rica": LGAP_FICHA,
  "recursos-contra-acto-administrativo-revocatoria-apelacion-lgap": LGAP_FICHA,
  "ley-6043-zona-maritimo-terrestre-costa-rica": LEY6043_FICHA,
  "reforma-reglamento-contratacion-publica-2026-proveedores-estado": REGLAMENTO_FICHA,
  "reforma-reglamento-contratacion-publica-decreto-45782": REGLAMENTO_FICHA,
  "sanciones-a-proveedores-contratacion-publica-ley-9986": LGCP,
  "defensa-inhabilitacion-proveedor-estado-costa-rica": LGCP,
  "recursos-contratacion-publica-objecion-apelacion-revocatoria": LGCP,
  "recurso-amparo-costa-rica": LJC,
  "accion-de-inconstitucionalidad-costa-rica": LJC,
  "registro-vasp-sugef-costa-rica": LEY_VASP,
  "costa-rica-vasp-registration-sugef": LEY_VASP,
};
