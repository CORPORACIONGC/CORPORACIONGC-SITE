/* Los eventos van a la cola `dataLayer` de Google Analytics, que el layout
   define al cargar la página; `gtag.js` la procesa cuando llega, aunque
   llegue después del evento. gtag exige que cada entrada sea el objeto
   `arguments` de una llamada, no un arreglo. */
declare global {
  interface Window {
    dataLayer?: unknown[];
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

function safeSend(name: string, params: EventParams) {
  if (typeof window === "undefined") return;
  try {
    gtag("event", name, {
      page_path: window.location.pathname,
      ...params,
    });
  } catch {
    // Never let analytics break the UI.
  }
}

/* Un solo evento reúne los cuatro caminos por los que alguien escribe:
   WhatsApp, teléfono, correo y formulario. Sin él, la descarga de un PDF
   pesaba lo mismo que una consulta y durante tres meses hizo creer que el
   artículo de la reforma del reglamento convertía, cuando sus 65 «eventos
   clave» eran descargas y sus contactos, ninguno. Los eventos por canal se
   siguen enviando para no partir la serie histórica. */
function trackContacto(canal: ContactKind | "formulario", target?: string) {
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
