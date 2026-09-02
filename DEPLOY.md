# Guía de Deploy - XCAIL Technologies

Instrucciones paso a paso para desplegar el sitio web de XCAIL en producción.

## 📦 Pre-requisitos Completados

Antes de deployar, asegurate de tener:

- ✅ Cuenta de GitHub con repo `xcail-technologies/XCAIL-WEB`
- ✅ Cuenta de Vercel (gratis en vercel.com)
- ✅ Cuenta de Supabase con tabla `contacts` creada (registro best-effort, no crítico)
- ✅ Cuenta de Resend con el subdominio `mail.xcail.com` verificado (DKIM + CNAMEs)
- ✅ DNS configurado correctamente para Resend (ver Paso 3)

> **Nota (2026-09):** el backend de notificaciones ya NO vive en Render.
> `xcail-notifications.onrender.com` fue dado de baja / dejó de responder y
> rompió el formulario de contacto en producción. El envío de mail ahora es
> una Vercel Serverless Function (`api/notify.js`) que se despliega junto con
> el resto del sitio — sin servicios externos que puedan "dormirse" o
> desaparecer. Las secciones de Render de este documento quedan como
> referencia histórica y NO deben seguirse.

---

## 🚀 Paso 1: Subir Código a GitHub

### Desde PowerShell en F:\2026\XCAIL-NEXT:

```powershell
# Inicializar repo git (si no está inicializado)
git init

# Agregar el remote
git remote add origin https://github.com/xcail-technologies/XCAIL-WEB.git

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: XCAIL Technologies website"

# Subir a GitHub
git branch -M main
git push -u origin main
```

**Importante:** El archivo `.env` NO se sube porque está en `.gitignore`. Esto es correcto y esperado.

---

## 🌐 Paso 2: Deploy Frontend en Vercel

### 2.1 Crear Proyecto en Vercel

1. Entrá a [vercel.com/new](https://vercel.com/new)
2. Seleccioná **Import Git Repository**
3. Buscá y seleccioná `xcail-technologies/XCAIL-WEB`
4. Hacé clic en **Import**

### 2.2 Configurar Build Settings

En la pantalla de configuración:

- **Framework Preset:** `Vite`
- **Root Directory:** (dejar vacío)
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

### 2.3 Agregar Variables de Entorno

Hacé clic en **Environment Variables** y agregá:

| Name | Value | Expuesta al cliente |
|------|-------|----------------------|
| `RESEND_API_KEY` | la key "xcail-notificaciones" de resend.com/api-keys | No — solo la usa `api/notify.js` en el servidor |
| `ADMIN_URL` (opcional) | `https://xcail.com/admin/contactos` | No |

**Importante:** `RESEND_API_KEY` va **sin** prefijo `VITE_` — las variables `VITE_*`
quedan embebidas en el bundle del navegador (públicas), y esta key debe
quedar solo del lado del servidor.

Las credenciales de Supabase (URL + anon key) están hardcodeadas en
`src/lib/supabase.ts` — es la key pública "anon", diseñada para exponerse en
el cliente, así que no hace falta declararla como variable de entorno acá.

### 2.4 Deploy

Hacé clic en **Deploy** y esperá 2-3 minutos.

Vercel te va a dar una URL temporal tipo: `https://xcail-web-xxx.vercel.app`

### 2.5 Configurar Dominio Personalizado

1. En Vercel → Settings → Domains
2. Add Domain: `xcail.com`
3. Seguí las instrucciones para configurar DNS

Vercel te va a pedir agregar estos registros en Hostinger:

| Tipo | Nombre | Contenido |
|------|--------|-----------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

**Importante:** Ya tenés un CNAME para `www` apuntando a Vercel, así que podés usar ese.

---

## 📧 Paso 3: Verificar el dominio de envío en Resend

El mail sale desde `noreply@mail.xcail.com` (un subdominio dedicado, para no
tocar el SPF/DKIM del mail real de la empresa en `@xcail.com` vía Hostinger).

1. Entrá a [resend.com/domains](https://resend.com/domains) → **Add domain**
2. Ingresá `mail.xcail.com`
3. Cargá en el DNS Zone Editor de Hostinger (dominio `xcail.com`) los 3
   registros que Resend te muestre: 1 TXT (`resend._domainkey.mail`, la
   clave DKIM) y 2 CNAME (`rsend.mail`, `send.mail`). Dejá "Enable
   Receiving" apagado — solo se necesita enviar.
4. Esperá a que el estado pase a **Verified** (puede tardar minutos u horas).

No hace falta backend propio para esto — la función de Vercel del Paso 4 le
pega directo a la API de Resend.

---

## 🔗 Paso 4: Función de notificación por mail (Vercel)

El archivo `api/notify.js` en la raíz del repo ya implementa el envío — Vercel
lo detecta solo como Serverless Function en cuanto ve la carpeta `api/`, sin
configuración adicional. No hay "Paso 4.x" de conexión: el frontend le pega a
`/api/notify` (mismo dominio, mismo deploy), así que no hay URL externa que
mantener sincronizada.

Solo asegurate de tener cargada `RESEND_API_KEY` en las Environment
Variables de Vercel (Paso 2.3) — sin eso la función responde 500.

---

## ✅ Paso 5: Verificación Final

### 5.1 Testear el Sitio

1. Entrá a `https://xcail.com`
2. Navegá a la sección **Contacto**
3. Completá el formulario con datos de prueba
4. Hacé clic en **Enviar mensaje**

### 5.2 Verificar que Funcione

**Debe suceder:**

✅ Mensaje "Tu mensaje fue enviado correctamente" en el frontend  
✅ Email recibido en `contacto@xcail.com` (verificá inbox y spam)  
✅ Contacto visible en el panel admin: `https://xcail.com/admin/login`

**Si algo falla, revisá:**

- Logs de la función: Vercel Dashboard → `XCAIL-WEB` → Deployments → Latest → Functions → `api/notify`
- Logs generales: Vercel Dashboard → `XCAIL-WEB` → Deployments → Latest → Logs
- `RESEND_API_KEY` configurada correctamente en Vercel → Settings → Environment Variables

---

## 🐛 Troubleshooting

### El email no llega

1. **Verificá Resend Logs:**
   - Resend Dashboard → Logs
   - Buscá el email reciente y revisá el status

2. **Verificá DNS:**
   - Los registros SPF y DKIM deben estar verificados en Resend
   - Puede tardar hasta 48 horas en propagarse

3. **Verificá la carpeta de Spam** en `contacto@xcail.com`

### La función responde 500 con `missing_config`

Falta `RESEND_API_KEY` en las Environment Variables de Vercel — agregala y
hacé un redeploy (Deployments → ⋯ → Redeploy).

### Error CORS en producción

`api/notify.js` responde con `Access-Control-Allow-Origin: *`, así que no
debería pasar. Si igual ves errores de CORS en la consola, revisá que la
función esté realmente desplegada (Vercel → Deployments → Latest →
Functions debe listar `api/notify`).

---

## 🔄 Flujo de Actualizaciones Futuras

Cuando necesites hacer cambios:

```powershell
# 1. Hacer cambios en el código
# 2. Commitear
git add .
git commit -m "Descripción del cambio"

# 3. Pushear
git push origin main
```

**Vercel** detecta automáticamente el push y redespliega sin intervención
manual — frontend y `api/notify.js` se despliegan juntos, en el mismo build.

---

## 📊 Monitoreo y Mantenimiento

### Vercel

- **Analytics:** Dashboard → Analytics (gratis hasta 100k pageviews/mes)
- **Logs:** Dashboard → Deployments → Logs
- **Logs de la función de mail:** Dashboard → Deployments → Latest → Functions → `api/notify`
- **Performance:** Dashboard → Speed Insights

### Supabase

- **Database:** Table Editor → contacts
- **Logs:** Dashboard → Logs → Select API logs

---

## 💰 Costos Mensuales Estimados

| Servicio | Plan | Costo |
|----------|------|-------|
| **Vercel** | Hobby | **$0** (incluye la función `api/notify`) |
| **Supabase** | Free | **$0** |
| **Resend** | Free | **$0** (hasta 3k emails/mes) |
| **Hostinger** | Hosting existente | Ya pagado |

**Total:** $0/mes.

---

## 📞 Soporte

Para problemas técnicos:

- **Email:** tech@xcail.com
- **GitHub Issues:** [github.com/xcail-technologies/XCAIL-WEB/issues](https://github.com/xcail-technologies/XCAIL-WEB/issues)

---

**Última actualización:** Febrero 2025  
**Versión:** 1.0
