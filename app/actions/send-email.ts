"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Agregar "info@corporaciongc.com" después de verificar dominio en resend.com/domains
const RECIPIENTS = [
  "okabogados@gmail.com",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 200, email: 254, phone: 30, message: 5000 };
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;
const recentSends: number[] = [];

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
};

export async function sendContactEmail(data: ContactFormData) {
  // Honeypot: si el campo oculto tiene valor, es un bot
  if (data.honeypot) {
    return { success: true };
  }

  // Rate limiting básico (en memoria del servidor)
  const now = Date.now();
  while (recentSends.length > 0 && now - recentSends[0] > RATE_WINDOW_MS) {
    recentSends.shift();
  }
  if (recentSends.length >= RATE_MAX) {
    return { success: false, error: "Demasiados envíos. Intente de nuevo en un minuto." };
  }

  const { name, email, phone, message } = data;

  // Validación server-side
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { success: false, error: "El nombre es obligatorio." };
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return { success: false, error: "Ingrese un correo electrónico válido." };
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { success: false, error: "El mensaje es obligatorio." };
  }
  if (name.length > MAX_LEN.name || email.length > MAX_LEN.email || (phone && phone.length > MAX_LEN.phone) || message.length > MAX_LEN.message) {
    return { success: false, error: "Uno o más campos exceden la longitud permitida." };
  }

  // Sanitizar para inyección segura en HTML
  const safeName = esc(name.trim());
  const safeEmail = esc(email.trim());
  const safePhone = esc((phone || "").trim()) || "No proporcionado";
  const safeMessage = esc(message.trim());

  try {
    recentSends.push(now);

    const { error } = await resend.emails.send({
      from: "Corporación GC <onboarding@resend.dev>",
      to: RECIPIENTS,
      replyTo: email.trim(),
      subject: `Nueva consulta jurídica — ${safeName}`,
      html: `
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr style="background:#2d0a16;color:#fff;">
            <td colspan="2" style="padding:16px 20px;font-size:18px;">
              Nueva consulta jurídica — Corporación GC
            </td>
          </tr>
          <tr>
            <td style="padding:12px 20px;font-weight:bold;border-bottom:1px solid #eee;width:140px;">Nombre</td>
            <td style="padding:12px 20px;border-bottom:1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:12px 20px;font-weight:bold;border-bottom:1px solid #eee;">Correo</td>
            <td style="padding:12px 20px;border-bottom:1px solid #eee;">
              <a href="mailto:${safeEmail}">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 20px;font-weight:bold;border-bottom:1px solid #eee;">Teléfono</td>
            <td style="padding:12px 20px;border-bottom:1px solid #eee;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding:12px 20px;font-weight:bold;vertical-align:top;">Mensaje</td>
            <td style="padding:12px 20px;white-space:pre-wrap;">${safeMessage}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Error al enviar el mensaje." };
  }
}
