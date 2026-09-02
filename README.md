# XCAIL Technologies - Sitio Web Institucional

Sitio web institucional de **XCAIL Technologies** con sistema de contactos, panel administrativo y notificaciones por email.

![XCAIL Technologies](src/assets/img/XCAIL-TECH-LOGO-SF.png)

## 📋 Descripción

Plataforma web institucional desarrollada con React, TypeScript y Tailwind CSS que incluye:

- **Landing page institucional** con secciones: Inicio, Empresa, Producto (AsisTEA), Reconocimientos y Contacto
- **Sistema de contactos** con formulario público y almacenamiento en Supabase
- **Panel administrativo** con autenticación para gestionar mensajes de contacto
- **Notificaciones por email** automáticas vía Resend cuando llega un nuevo contacto
- **Tema claro/oscuro** con detección automática del sistema

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** + **TypeScript**
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes de UI
- **React Router** para navegación
- **Lucide React** para iconos

### Backend & Servicios
- **Supabase** - Base de datos (PostgreSQL), registro best-effort de contactos
- **Resend** - Envío de emails transaccionales
- **Vercel Serverless Function** (`api/notify.js`) - envía el mail del formulario de contacto

### Deploy
- **Vercel** - Frontend (sitio React) y la función de notificación, en el mismo deploy

> `server.cjs` (Node standalone) y su despliegue en Render quedaron
> deprecados — el servicio de Render se cayó y rompió el formulario en
> producción. Ver `DEPLOY.md` para el detalle de la migración a
> `api/notify.js`.

## 📁 Estructura del Proyecto

```
XCAIL-WEB/
├── src/
│   ├── components/          # Componentes de la landing
│   │   ├── About.tsx       # Sección Empresa
│   │   ├── Awards.tsx      # Sección Reconocimientos
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx        # Hero principal
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Solutions.tsx   # Sección Producto
│   │   ├── mode-toggle.tsx # Toggle tema claro/oscuro
│   │   └── ui/             # Componentes shadcn/ui
│   ├── pages/
│   │   ├── AdminLogin.tsx      # Login del panel admin
│   │   └── AdminContactos.tsx  # Dashboard de contactos
│   ├── lib/
│   │   ├── supabase.ts     # Cliente de Supabase
│   │   └── utils.ts
│   ├── assets/             # Imágenes y recursos
│   ├── App.tsx
│   └── main.tsx
├── api/
│   └── notify.js           # Vercel Function — envío de mail (reemplaza a server.cjs)
├── server.cjs              # DEPRECADO — servidor standalone (Render, dado de baja)
├── .env                    # Variables de entorno (no incluido en repo)
├── package.json
└── vite.config.ts
```

## 🚀 Instalación Local

### Requisitos Previos

- **Node.js** 18+ y **pnpm** 9+
- Cuenta en **Supabase** (gratis)
- Cuenta en **Resend** (gratis)

### 1. Clonar el repositorio

```bash
git clone https://github.com/xcail-technologies/XCAIL-WEB.git
cd XCAIL-WEB
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

Creá un archivo `.env` en la raíz del proyecto:

```env
# Supabase
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-anon

# Resend
VITE_RESEND_API_KEY=re_tuclavedeapi
```

### 4. Configurar Supabase

#### a) Crear tabla `contacts`

Ejecutá este SQL en Supabase > SQL Editor:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institution TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new'
);

-- Políticas RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "select_contacts" ON contacts FOR SELECT USING (true);
CREATE POLICY "delete_contacts" ON contacts FOR DELETE USING (true);
CREATE POLICY "update_contacts" ON contacts FOR UPDATE USING (true);
```

### 5. Configurar Resend + DNS

#### a) Agregar dominio en Resend

1. Entrá a [resend.com/domains](https://resend.com/domains)
2. Agregá tu dominio (ej: `xcail.com`)
3. Copiá los registros DNS que te da Resend

#### b) Configurar DNS en tu proveedor

Agregá estos registros DNS (ejemplo con valores de Resend):

| Tipo | Nombre | Contenido | Prioridad |
|------|--------|-----------|-----------|
| TXT  | `resend._domainkey` | `p=MIGfMA0GCS...` (clave DKIM) | - |
| TXT  | `send` | `v=spf1 include:amazonses.com ~all` | - |
| MX   | `send` | `feedback-smtp.sa-east-1.amazonses.com` | 10 |

Esperá 1-4 horas para propagación DNS y verificá en Resend.

### 6. Iniciar el proyecto

#### Terminal 1: Frontend

```bash
pnpm dev
```

Abrí: `http://localhost:5173`

#### Terminal 2: Servidor de notificaciones

```bash
node server.cjs
```

Corre en: `http://localhost:3001`

## 🔐 Panel Administrativo

-
- 

### Funcionalidades del Admin

- Ver todos los contactos recibidos
- Filtrar por estado: Nuevo / Revisado / Cerrado
- Cambiar estado de mensajes
- Copiar email del contactante
- Eliminar contactos
- Vista expandible de cada mensaje

## 📧 Sistema de Notificaciones

Cuando alguien completa el formulario de contacto:

1. **Se guarda en Supabase** (tabla `contacts`)
2. **Se envía notificación** al servidor Node.js (`server.cjs`)
3. **Resend envía un email** a `contacto@xcail.com` con:
   - Datos del contacto
   - Mensaje completo
   - Botón directo al panel admin

### Configuración del email

En `server.cjs`:

```javascript
const NOTIFY_EMAIL = "contacto@xcail.com";  // Email receptor
const ADMIN_URL = "https://xcail.com/admin/contactos";  // URL del panel
```

## 🌐 Deploy en Producción

### Deploy Frontend en Vercel

1. **Conectar repo a Vercel:**
   - Entrá a [vercel.com](https://vercel.com)
   - New Project → Import `xcail-technologies/XCAIL-WEB`

2. **Configurar variables de entorno:**

   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-clave-anon
   VITE_RESEND_API_KEY=re_tuclavedeapi
   ```

3. **Deploy:**
   - Framework Preset: `Vite`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

4. **Configurar dominio:**
   - Settings → Domains → Add `xcail.com`

### Deploy Backend en Render

1. **Crear Web Service:**
   - Entrá a [render.com](https://render.com)
   - New → Web Service
   - Connect repo: `xcail-technologies/XCAIL-WEB`

2. **Configuración:**
   - **Name:** `xcail-notifications`
   - **Root Directory:** (dejar vacío)
   - **Build Command:** `npm install`
   - **Start Command:** `node server.cjs`
   - **Instance Type:** Free

3. **Variables de entorno:**

   ```
   VITE_RESEND_API_KEY=re_tuclavedeapi
   ```

4. **Obtener URL del servicio:**
   - Render te da una URL tipo: `https://xcail-notifications.onrender.com`

5. **Actualizar frontend:**

   En `src/components/Contact.tsx`, cambiá:

   ```typescript
   // Local
   const response = await fetch("http://localhost:3001/api/notify", ...);

   // Producción
   const response = await fetch("https://xcail-notifications.onrender.com/api/notify", ...);
   ```

   También actualizá `ADMIN_URL` en `server.cjs`:

   ```javascript
   const ADMIN_URL = "https://xcail.com/admin/contactos";
   ```

6. **Redeploy en Vercel** para aplicar los cambios.

## 🔧 Scripts Disponibles

```bash
pnpm dev          # Iniciar desarrollo
pnpm build        # Build para producción
pnpm preview      # Preview del build
pnpm lint         # Ejecutar ESLint
pnpm lint:fix     # Corregir errores de ESLint
```

## 📝 Notas Importantes

### Seguridad

- La contraseña del admin (`xcail2026`) está hardcodeada. Para producción, considerá implementar autenticación real con Supabase Auth.
- Las variables de entorno **NUNCA** deben commitearse. El `.env` está en `.gitignore`.

### Supabase RLS

- Las políticas actuales permiten acceso público. Para mayor seguridad en producción, considerá restringir las políticas.

### Resend Free Tier

- Límite: 100 emails/día, 3,000 emails/mes
- Solo podés enviar desde dominios verificados
- En desarrollo, podés usar `onboarding@resend.dev` temporalmente

### Render Free Tier

- El servicio free entra en sleep después de 15 minutos de inactividad
- Primer request después del sleep puede tardar 30-60 segundos
- Para evitar esto, usá el plan Starter ($7/mes)

## 🤝 Contribuir

Este es un proyecto privado de XCAIL Technologies. Para reportar issues o sugerencias, contactar a:

- **Email:** tech@xcail.com
- **Instagram:** [@xcail.tech](https://instagram.com/xcail.tech)

## 📄 Licencia

© 2025 XCAIL Technologies. Todos los derechos reservados.

---

**Desarrollado con ❤️ por XCAIL Technologies**
