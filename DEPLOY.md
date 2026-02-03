# Guía de Deploy - XCAIL Technologies

Instrucciones paso a paso para desplegar el sitio web de XCAIL en producción.

## 📦 Pre-requisitos Completados

Antes de deployar, asegurate de tener:

- ✅ Cuenta de GitHub con repo `xcail-technologies/XCAIL-WEB`
- ✅ Cuenta de Vercel (gratis en vercel.com)
- ✅ Cuenta de Render (gratis en render.com)
- ✅ Cuenta de Supabase con tabla `contacts` creada
- ✅ Cuenta de Resend con dominio verificado
- ✅ DNS configurado correctamente para Resend

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

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | `https://frxcfvvxkxymwzkeskcu.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `VITE_RESEND_API_KEY` | `re_fFhQVMiA_MbtNsEHVrET3JY1tdnN1od3g` |

**Nota:** Usá las credenciales reales de tu proyecto.

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

## 🔧 Paso 3: Deploy Backend en Render

### 3.1 Crear Web Service

1. Entrá a [render.com/dashboard](https://dashboard.render.com)
2. Hacé clic en **New → Web Service**
3. Conectá GitHub y seleccioná `xcail-technologies/XCAIL-WEB`

### 3.2 Configurar el Servicio

| Campo | Valor |
|-------|-------|
| **Name** | `xcail-notifications` |
| **Region** | `Oregon (US West)` o el más cercano |
| **Branch** | `main` |
| **Root Directory** | (vacío) |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.cjs` |
| **Instance Type** | `Free` |

### 3.3 Variables de Entorno

En la sección **Environment Variables**, agregá:

| Key | Value |
|-----|-------|
| `VITE_RESEND_API_KEY` | `re_fFhQVMiA_MbtNsEHVrET3JY1tdnN1od3g` |

### 3.4 Deploy

Hacé clic en **Create Web Service**.

Render va a:
1. Clonar el repo
2. Instalar dependencias
3. Iniciar `server.cjs`

Después de 2-3 minutos, vas a tener una URL tipo:
```
https://xcail-notifications.onrender.com
```

**⚠️ Copiá esta URL, la vas a necesitar en el siguiente paso.**

---

## 🔗 Paso 4: Conectar Frontend con Backend

### 4.1 Actualizar Contact.tsx

En tu proyecto local, editá `src/components/Contact.tsx`:

**Buscar esta línea:**
```typescript
const response = await fetch("http://localhost:3001/api/notify", {
```

**Reemplazar por:**
```typescript
const response = await fetch("https://xcail-notifications.onrender.com/api/notify", {
```

### 4.2 Actualizar server.cjs

Editá `server.cjs` en la raíz:

**Buscar:**
```javascript
const ADMIN_URL = "http://localhost:5173/admin/contactos";
```

**Reemplazar por:**
```javascript
const ADMIN_URL = "https://xcail.com/admin/contactos";
```

### 4.3 Commitear y Pushear

```powershell
git add .
git commit -m "Update: production URLs for Render and Vercel"
git push origin main
```

Vercel va a detectar el push automáticamente y hacer redeploy en ~2 minutos.

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

- Logs en Render: Dashboard → `xcail-notifications` → Logs
- Logs en Vercel: Dashboard → `XCAIL-WEB` → Deployments → Latest → Logs
- Variables de entorno configuradas correctamente en ambos servicios

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

### El servidor Render está "sleeping"

- En el plan Free, Render duerme después de 15 minutos sin uso
- El primer request después del sleep puede tardar 30-60 segundos
- Solución: Upgrade a Starter ($7/mes) o usar un servicio de ping como [cron-job.org](https://cron-job.org)

### Error CORS en producción

Si ves errores de CORS en la consola del navegador:

En `server.cjs`, cambiá:
```javascript
res.setHeader("Access-Control-Allow-Origin", "*");
```

Por:
```javascript
res.setHeader("Access-Control-Allow-Origin", "https://xcail.com");
```

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

**Vercel y Render** detectan automáticamente el push y redesplegan sin intervención manual.

---

## 📊 Monitoreo y Mantenimiento

### Vercel

- **Analytics:** Dashboard → Analytics (gratis hasta 100k pageviews/mes)
- **Logs:** Dashboard → Deployments → Logs
- **Performance:** Dashboard → Speed Insights

### Render

- **Logs:** Dashboard → xcail-notifications → Logs (últimas 7 días en Free)
- **Metrics:** Dashboard → Metrics (CPU, memoria)

### Supabase

- **Database:** Table Editor → contacts
- **Logs:** Dashboard → Logs → Select API logs

---

## 💰 Costos Mensuales Estimados

| Servicio | Plan | Costo |
|----------|------|-------|
| **Vercel** | Hobby | **$0** |
| **Render** | Free | **$0** (con sleep) |
| **Render** | Starter | $7 (sin sleep) |
| **Supabase** | Free | **$0** |
| **Resend** | Free | **$0** (hasta 3k emails/mes) |
| **Hostinger** | Hosting existente | Ya pagado |

**Total mínimo:** $0/mes (con sleep en Render)  
**Total recomendado:** $7/mes (sin sleep en Render)

---

## 📞 Soporte

Para problemas técnicos:

- **Email:** tech@xcail.com
- **GitHub Issues:** [github.com/xcail-technologies/XCAIL-WEB/issues](https://github.com/xcail-technologies/XCAIL-WEB/issues)

---

**Última actualización:** Febrero 2025  
**Versión:** 1.0
