/* Los eventos van a la cola `dataLayer` de Google Analytics, que el layout
   define al cargar la página; `gtag.js` la procesa cuando llega, aunque
   llegue después del evento. gtag exige que cada entrada sea el objeto
   `arguments` de una llamada, no un arreglo. */
declare global {
  interface Window {
    dataLayer?: unknown[];
    /** Contexto que declara la página abierta (components/layout/DatosPagina). */
    __gcPagina?: ContextoDeclarado;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- la firma documenta la llamada; se lee con `arguments`
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export type ContactKind = "whatsapp" | "phone" | "email";

type EventParams = Record<string, string | number | boolean | undefined>;

/* Contexto de cada página (25-11-2026). Todo evento sale con el tipo de
   página (content_group, que GA4 muestra como «Grupo de contenido»), el área
   de práctica y, en las guías, el autor y el tipo de publicación. Con eso se
   responde qué área o qué autor trae consultas. El tipo y el área de las
   páginas de área salen de la ruta; el área y el autor de las guías y las
   sentencias los declara la propia página con <DatosPagina>. Las dos guías
   congeladas del experimento no lo declaran y quedan solo con el tipo. */
export type ContextoDeclarado = {
  ruta: string;
  tipo?: string;
  area?: string;
  autor?: string;
  publicacion?: string;
};

const TIPOS_POR_RUTA: [RegExp, string][] = [
  [/^\/$/, "Portada"],
  [/^\/articulos\/[^/]+/, "Guía"],
  [/^\/areas\/[^/]+/, "Área"],
  [/^\/(abogados|equipo)\/[^/]+/, "Perfil"],
  [/^\/jurisprudencia-destacada\/[^/]+/, "Sentencia"],
  [/^\/(articulos|areas|abogados|jurisprudencia-destacada)\/?$/, "Listado"],
  [/^\/contacto\/?$/, "Contacto"],
];

export function contextoPagina(): EventParams {
  if (typeof window === "undefined") return {};
  const ruta = window.location.pathname;
  const d = window.__gcPagina?.ruta === ruta ? window.__gcPagina : undefined;
  const tipo = d?.tipo ?? TIPOS_POR_RUTA.find(([re]) => re.test(ruta))?.[1] ?? "Institucional";
  const area = d?.area ?? ruta.match(/^\/areas\/([^/]+)/)?.[1];
  return {
    content_group: tipo,
    area_practica: area,
    autor_pagina: d?.autor,
    tipo_publicacion: d?.publicacion,
  };
}

function safeSend(name: string, params: EventParams) {
  if (typeof window === "undefined") return;
  try {
    gtag("event", name, {
      page_path: window.location.pathname,
      ...contextoPagina(),
      ...params,
    });
  } catch {
    // Never let analytics break the UI.
  }
}

/* Página vista enviada por el sitio (25-11-2026). La configuración de GA4
   lleva send_page_view: false y la medición mejorada no cuenta los cambios
   de página del historial: así cada vista sale una sola vez y con el
   contexto de la página nueva, también al navegar dentro del sitio. */
export function trackPaginaVista(referente?: string) {
  if (typeof window === "undefined") return;
  try {
    gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
      ...(referente ? { page_referrer: referente } : {}),
      ...contextoPagina(),
    });
  } catch {
    // La medición nunca rompe la página.
  }
}

/** Hasta dónde leyó: 25, 50, 75 o 100 % del cuerpo de la página. */
export function trackLectura(porcentaje: number) {
  safeSend("lectura", { porcentaje_lectura: porcentaje });
}

/** Clic en un enlace a otra página del sitio, con su destino y la zona de
 *  la página donde estaba (cuerpo, menú, pie u otra). */
export function trackEnlaceInterno(destino: string, ubicacion: string) {
  safeSend("enlace_interno", { destino_enlace: destino, ubicacion_enlace: ubicacion });
}

/** Búsqueda en el buscador de una norma navegable, cuando el texto se
 *  asienta: qué se buscó, en qué norma y cuántos artículos devolvió. */
export function trackBusquedaNorma(norma: string, termino: string, resultados: number) {
  safeSend("busqueda_norma", { norma, termino_busqueda: termino.slice(0, 100), resultados });
}

/** Resultado de la calculadora de umbrales de contratación. */
export function trackCalculadora(regimen: string, objeto: string, procedimiento: string) {
  safeSend("calculadora_umbral", { regimen, objeto_contratacion: objeto, procedimiento });
}

/* Un solo evento reúne los cuatro caminos por los que alguien escribe:
   WhatsApp, teléfono, correo y formulario. Sin él, la descarga de un PDF
   pesaba lo mismo que una consulta y durante tres meses hizo creer que el
   artículo de la reforma del reglamento convertía, cuando sus 65 «eventos
   clave» eran descargas y sus contactos, ninguno. Los eventos por canal se
   siguen enviando para no partir la serie histórica. */
let ultimoContacto = 0;

/** Si un componente acaba de medir un contacto (en este mismo clic). Lo usa
 *  la red de seguridad de <Analitica> para no contar dos veces. */
export function contactoRecienMedido(): boolean {
  return Date.now() - ultimoContacto < 400;
}

function trackContacto(canal: ContactKind | "formulario", target?: string) {
  ultimoContacto = Date.now();
  safeSend("contacto", {
    canal,
    contact_target: target ?? "unknown",
  });
}

export function trackContactClick(kind: ContactKind, target?: string) {
  safeSend(`${kind}_click`, { contact_target: target ?? "unknown" });
  trackContacto(kind, target);
}

export function trackContactFromHref(href: string, target?: string) {
  if (!href) return;
  if (href.startsWith("https://wa.me/") || href.includes("api.whatsapp.com")) {
    trackContactClick("whatsapp", target);
  } else if (href.startsWith("mailto:")) {
    trackContactClick("email", target);
  } else if (href.startsWith("tel:")) {
    trackContactClick("phone", target);
  }
}

/** Quien empieza a escribir en el formulario ya manifestó intención, aunque
 *  no llegue a enviarlo. Se envía una sola vez por formulario y sesión. */
const formulariosIniciados = new Set<string>();

export function trackFormStart(formName: string) {
  if (formulariosIniciados.has(formName)) return;
  formulariosIniciados.add(formName);
  safeSend("form_start", { form_name: formName });
  trackContacto("formulario", formName);
}

export function trackFormSubmit(formName: string) {
  safeSend("form_submit", { form_name: formName });
}

/* Métricas de carga y respuesta medidas en el navegador de cada visitante
   (25-11-2026). CrUX solo publica datos del dominio entero; con esto GA4
   tiene LCP, INP, CLS y FCP por página. Se envía un evento por métrica con
   el nombre de la métrica: «value» en milisegundos (CLS multiplicado por
   mil, la convención de Google), y «metric_rating» con la calificación de
   Google (good, needs-improvement o poor). No cuenta como interacción, para
   no alterar la tasa de interacción de las sesiones. */
export type MetricaWeb = {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating?: string;
};

const METRICAS = new Set(["LCP", "INP", "CLS", "FCP"]);

export function trackWebVital(m: MetricaWeb) {
  if (typeof window === "undefined" || !METRICAS.has(m.name)) return;
  /* Solo el sitio publicado: las cifras de la vista previa local (con la
     compilación en desarrollo) falsearían los promedios. */
  if (!/(^|\.)corporaciongc\.com$/.test(window.location.hostname)) return;
  try {
    gtag("event", m.name, {
      value: Math.round(m.name === "CLS" ? m.delta * 1000 : m.delta),
      metric_id: m.id,
      metric_value: m.value,
      metric_delta: m.delta,
      metric_rating: m.rating ?? "unknown",
      page_path: window.location.pathname,
      ...contextoPagina(),
      non_interaction: true,
    });
  } catch {
    // La medición nunca rompe la página.
  }
}
