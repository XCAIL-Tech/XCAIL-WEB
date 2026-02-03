// server.cjs
// Servidor de notificaciones por email cuando llega un nuevo contacto.
// Producción: desplegado en Render
// Local: node server.cjs

const http = require("http");
const https = require("https");
require("dotenv").config();

const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
const NOTIFY_EMAIL = "contacto@xcail.com";
const ADMIN_URL = process.env.ADMIN_URL || "http://localhost:5173/admin/contactos";
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  // CORS - permite llamadas desde el frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check para Render
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "xcail-notifications" }));
    return;
  }

  // Solo acepta POST en /api/notify
  if (req.method === "POST" && req.url === "/api/notify") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { name, email, institution, subject, message } = JSON.parse(body);

        const institutionLine = institution
          ? `<tr><td style="padding:6px 12px;color:#888;width:120px;">Institución</td><td style="padding:6px 12px;color:#fff;">${institution}</td></tr>`
          : "";

        const html = `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"></head>
          <body style="background:#111;color:#fff;font-family:Inter,sans-serif;padding:32px;">
            <div style="max-width:600px;margin:0 auto;">

              <!-- Header -->
              <div style="border-bottom:2px solid #D4AF37;padding-bottom:16px;margin-bottom:24px;">
                <h2 style="margin:0;color:#D4AF37;font-size:18px;">XCAIL Technologies</h2>
                <p style="margin:4px 0 0;color:#888;font-size:13px;">Nuevo mensaje de contacto</p>
              </div>

              <!-- Datos tabla -->
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr style="border-bottom:1px solid #2a2a2a;">
                  <td style="padding:6px 12px;color:#888;width:120px;">Nombre</td>
                  <td style="padding:6px 12px;color:#fff;">${name}</td>
                </tr>
                <tr style="border-bottom:1px solid #2a2a2a;">
                  <td style="padding:6px 12px;color:#888;">Correo</td>
                  <td style="padding:6px 12px;color:#00BFFF;">${email}</td>
                </tr>
                ${institutionLine ? `<tr style="border-bottom:1px solid #2a2a2a;">${institutionLine.replace(/<tr>|<\/tr>/g, "")}</tr>` : ""}
                <tr style="border-bottom:1px solid #2a2a2a;">
                  <td style="padding:6px 12px;color:#888;">Asunto</td>
                  <td style="padding:6px 12px;color:#fca311;">${subject}</td>
                </tr>
              </table>

              <!-- Mensaje -->
              <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px;margin-bottom:24px;">
                <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
                <p style="margin:0;color:#ccc;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Botón al panel -->
              <div style="text-align:center;">
                <a href="${ADMIN_URL}" style="display:inline-block;background:#D4AF37;color:#000;padding:10px 24px;border-radius:6px;font-weight:600;text-decoration:none;font-size:14px;">
                  Ver en Panel Admin
                </a>
              </div>

              <!-- Footer -->
              <p style="margin-top:32px;color:#555;font-size:12px;text-align:center;">
                Este email fue enviado automáticamente por XCAIL Technologies.<br>
                No respondas a este mensaje.
              </p>
            </div>
          </body>
          </html>
        `;

        // Llamada a Resend API
        const postData = JSON.stringify({
          from: "noreply@xcail.com",
          to: [NOTIFY_EMAIL],
          subject: `[XCAIL] Nuevo contacto: ${subject}`,
          html: html,
        });

        const options = {
          hostname: "api.resend.com",
          path: "/emails",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Length": Buffer.byteLength(postData),
          },
        };

        const resendReq = https.request(options, (resendRes) => {
          let resendBody = "";
          resendRes.on("data", (chunk) => (resendBody += chunk));
          resendRes.on("end", () => {
            if (resendRes.statusCode === 200) {
              console.log(`✅ Email enviado por: ${name} (${email})`);
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ ok: true }));
            } else {
              console.error("❌ Error Resend:", resendBody);
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ ok: false, error: resendBody }));
            }
          });
        });

        resendReq.on("error", (err) => {
          console.error("❌ Error de conexión con Resend:", err);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false, error: err.message }));
        });

        resendReq.write(postData);
        resendReq.end();
      } catch (err) {
        console.error("❌ Error al parsear body:", err);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: "Bad request" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor de notificaciones XCAIL corriendo en http://localhost:${PORT}`);
  console.log(`   Endpoint: POST http://localhost:${PORT}/api/notify`);
  console.log(`   Admin URL: ${ADMIN_URL}`);
});
