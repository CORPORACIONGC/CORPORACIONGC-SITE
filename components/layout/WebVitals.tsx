"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackWebVital } from "@/lib/analytics";

/* Envía a GA4 las métricas de cada visita (véase trackWebVital). */
export function WebVitals() {
  useReportWebVitals(trackWebVital);
  return null;
}
