import { sendGAEvent } from "@next/third-parties/google";

export type ContactKind = "whatsapp" | "phone" | "email";

type EventParams = Record<string, string | number | boolean | undefined>;

function safeSend(name: string, params: EventParams) {
  if (typeof window === "undefined") return;
  try {
    sendGAEvent("event", name, {
      page_path: window.location.pathname,
      ...params,
    });
  } catch {
    // Never let analytics break the UI.
  }
}

export function trackContactClick(kind: ContactKind, target?: string) {
  safeSend(`${kind}_click`, { contact_target: target ?? "unknown" });
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

export function trackFormSubmit(formName: string) {
  safeSend("form_submit", { form_name: formName });
}
