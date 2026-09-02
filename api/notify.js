// api/notify.js
// Vercel Serverless Function — envía por mail cada mensaje del formulario de
// contacto de xcail.com usando Resend. Reemplaza al viejo backend en Render
// (server.cjs / xcail-notifications.onrender.com), que dejó de estar
// desplegado y rompía el formulario en producción.
//
// Variables de entorno requeridas en Vercel (Project Settings → Environment
// Variables, NO exponer con prefijo VITE_ porque esto corre solo en el
// servidor):
//   RESEND_API_KEY   — la key "xcail-notificaciones" de resend.com/api-keys
//   ADMIN_URL         (opcional) — default https://xcail.com/admin/contactos

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = "contacto@xcail.com";
const ADMIN_URL = process.env.ADMIN_URL || "https://xcail.com/admin/contactos";
const FROM_EMAIL = "noreply@mail.xcail.com";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(404).json({ ok: false, error: "not_found" });
    return;
  }

  if (!RESEND_API_KEY) {
    console.error("notify: falta RESEND_API_KEY en las variables de entorno de Vercel");
    res.status(500).json({ ok: false, error: "missing_config" });
    return;
  }

  try {
    const { name, email, institution, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      res.status(400).json({ ok: false, error: "incomplete_fields" });
      return;
    }

    const institutionRow = institution
      ? `<tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:6px 12px;color:#888;width:120px;">Institución</td><td style="padding:6px 12px;color:#fff;">${escapeHtml(institution)}</td></tr>`
      : "";

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="background:#111;color:#fff;font-family:Inter,sans-serif;padding:32px;">
        <div style="max-width:600px;margin:0 auto;">

          <div style="border-bottom:2px solid #D4AF37;padding-bottom:16px;margin-bottom:24px;">
            <h2 style="margin:0;color:#D4AF37;font-size:18px;">XCAIL Technologies</h2>
            <p style="margin:4px 0 0;color:#888;font-size:13px;">Nuevo mensaje de contacto</p>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr style="border-bottom:1px solid #2a2a2a;">
              <td style="padding:6px 12px;color:#888;width:120px;">Nombre</td>
              <td style="padding:6px 12px;color:#fff;">${escapeHtml(name)}</td>
            </tr>
            <tr style="border-bottom:1px solid #2a2a2a;">
              <td style="padding:6px 12px;color:#888;">Correo</td>
              <td style="padding:6px 12px;color:#00BFFF;">${escapeHtml(email)}</td>
            </tr>
            ${institutionRow}
            <tr style="border-bottom:1px solid #2a2a2a;">
              <td style="padding:6px 12px;color:#888;">Asunto</td>
              <td style="padding:6px 12px;color:#fca311;">${escapeHtml(subject)}</td>
            </tr>
          </table>

          <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px;margin-bottom:24px;">
            <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
            <p style="margin:0;color:#ccc;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <div style="text-align:center;">
            <a href="${ADMIN_URL}" style="display:inline-block;background:#D4AF37;color:#000;padding:10px 24px;border-radius:6px;font-weight:600;text-decoration:none;font-size:14px;">
              Ver en Panel Admin
            </a>
          </div>

          <p style="margin-top:32px;color:#555;font-size:12px;text-align:center;">
            Este email fue enviado automáticamente por XCAIL Technologies.<br>
            No respondas a este mensaje — usá "Responder" para escribirle directo a quien consultó.
          </p>
        </div>
      </body>
      </html>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `XCAIL Technologies <${FROM_EMAIL}>`,
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `[XCAIL] Nuevo contacto: ${subject}`,
        html,
      }),
    });

    const resendBody = await resendRes.text();

    if (!resendRes.ok) {
      console.error("notify: error de Resend:", resendBody);
      res.status(502).json({ ok: false, error: resendBody });
      return;
    }

    console.log(`notify: email enviado por ${name} (${email})`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("notify: error interno:", err);
    res.status(500).json({ ok: false, error: "internal_error" });
  }
}
