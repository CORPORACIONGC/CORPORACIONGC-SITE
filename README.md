# Corporacion GC — Sitio Web Institucional

Sitio web profesional del bufete **Corporacion GC**, especializado en Derecho Administrativo y Contencioso-Administrativo en Costa Rica. Construido con Next.js 16 (App Router), React 19, Tailwind CSS v4 y TypeScript.

**URL de produccion:** [www.corporaciongc.com](https://www.corporaciongc.com)

---

## Stack Tecnologico

| Tecnologia | Version | Proposito |
|---|---|---|
| Next.js | 16.1.6 | Framework full-stack (App Router) |
| React | 19.2.3 | UI rendering |
| TypeScript | 5.9.3 | Tipado estatico |
| Tailwind CSS | v4 | Estilos utilitarios |
| Phosphor Icons | 2.1.10 | Iconografia |
| MDX Remote | 6.0.0 | Renderizado de articulos en Markdown |
| Resend | 6.9.4 | Envio de correos (formulario de contacto) |
| Google Analytics | via @next/third-parties | Analitica web |

---

## Estructura del Proyecto

```
site/
├── app/                          # Rutas y paginas (App Router)
│   ├── layout.tsx                # Layout raiz (fuentes, GA, tema, JSON-LD)
│   ├── page.tsx                  # Pagina de inicio (/)
│   ├── globals.css               # Estilos globales + sistema de temas
│   ├── manifest.ts               # PWA manifest
│   ├── robots.ts                 # Generacion de robots.txt
│   ├── sitemap.ts                # Generacion de sitemap XML
│   ├── opengraph-image.tsx       # Imagen OG dinamica del home
│   ├── error.tsx                 # Error boundary global
│   ├── loading.tsx               # Skeleton de carga
│   ├── not-found.tsx             # Pagina 404 personalizada
│   │
│   ├── abogados/[slug]/          # Perfiles individuales de abogados
│   │   ├── page.tsx
│   │   └── opengraph-image.tsx
│   │
│   ├── areas/                    # Areas de practica
│   │   ├── page.tsx              # Listado de todas las areas
│   │   └── [slug]/
│   │       ├── page.tsx          # Detalle de cada area
│   │       └── opengraph-image.tsx
│   │
│   ├── articulos/                # Publicaciones / Articulos
│   │   ├── page.tsx              # Listado de articulos
│   │   └── [slug]/
│   │       ├── page.tsx          # Articulo individual (MDX)
│   │       └── opengraph-image.tsx
│   │
│   ├── sobre-nosotros/           # Pagina "Sobre Nosotros"
│   ├── politica-de-privacidad/   # Politica de privacidad
│   │
│   ├── actions/
│   │   └── send-email.ts         # Server Action: envio de correos
│   │
│   └── api/
│       └── indexnow/
│           └── route.ts          # API Route: IndexNow (envio de URLs a motores)
│
├── components/                   # Componentes React (~50 archivos)
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Secciones de pagina (hero, about, contact, etc.)
│   ├── ui/                       # Componentes reutilizables (ThemeToggle, AnimatedEntry, etc.)
│   └── article/                  # PDFViewer
│
├── lib/
│   ├── constants.ts              # Datos centralizados del bufete (~18,000 lineas)
│   └── articles.ts               # Utilidades para cargar articulos MDX
│
├── content/
│   └── articles/                 # Articulos en Markdown con frontmatter YAML
│
├── public/
│   ├── images/                   # Fotos de abogados, logos de clientes
│   ├── pdfs/                     # Documentos PDF descargables
│   ├── fonts/                    # Cormorant Garamond, DM Sans
│   └── llms.txt                  # Reglas para crawlers de IA
│
├── next.config.ts                # Config: redirects, headers CSP, seguridad
├── tsconfig.json                 # Config TypeScript (strict, alias @/*)
└── package.json                  # Dependencias y scripts
```

---

## Paginas y Rutas

### Rutas Estaticas

| Ruta | Archivo | Descripcion |
|---|---|---|
| `/` | `app/page.tsx` | Landing page principal con todas las secciones |
| `/areas` | `app/areas/page.tsx` | Listado de las 22 areas de practica |
| `/articulos` | `app/articulos/page.tsx` | Listado de publicaciones y articulos |
| `/sobre-nosotros` | `app/sobre-nosotros/page.tsx` | Historia y descripcion del bufete |
| `/politica-de-privacidad` | `app/politica-de-privacidad/page.tsx` | Politica de privacidad |

### Rutas Dinamicas

| Ruta | Archivo | Datos |
|---|---|---|
| `/abogados/[slug]` | `app/abogados/[slug]/page.tsx` | Perfiles de 6 abogados desde `TEAM` en constants |
| `/areas/[slug]` | `app/areas/[slug]/page.tsx` | 22 areas de practica desde `PRACTICE_AREA_PAGES` |
| `/articulos/[slug]` | `app/articulos/[slug]/page.tsx` | Articulos MDX desde `content/articles/` |

### API y Server Actions

| Endpoint | Tipo | Proposito |
|---|---|---|
| `/api/indexnow` | API Route (POST) | Envio de URLs a IndexNow para indexacion rapida |
| `actions/send-email.ts` | Server Action | Envio de formulario de contacto via Resend |

---

## Arquitectura de Cada Pagina

### `/` — Pagina de Inicio

La landing page completa del bufete. Compuesta por secciones modulares renderizadas en secuencia:

```
layout.tsx (Root Layout)
└── page.tsx
    ├── FirmHero             # Banner principal con CTA
    ├── FirmAbout            # Descripcion del bufete
    ├── Credentials          # Metricas y estadisticas (anos, casos, etc.)
    ├── FirmPracticeAreas    # Grid de areas de practica con enlaces
    ├── TeamSection          # Equipo de abogados con fotos y enlaces
    ├── Publications         # Articulos recientes
    ├── ClientLogos          # Carrusel/marquee de logos de clientes
    ├── FirmContact          # Formulario de contacto
    ├── GoogleMap            # Mapa de ubicacion
    └── LeadForm             # Formulario alternativo de captacion
```

**Datos:** Todo proviene de `lib/constants.ts` (FIRM, FIRM_CREDENTIALS, CLIENT_LOGOS, TEAM, FIRM_PRACTICE_AREAS).

### `/abogados/[slug]` — Perfil de Abogado

Cada abogado tiene su propia pagina con secciones personalizadas. El slug se mapea al array `TEAM` en constants.

```
page.tsx
├── [Nombre]Hero             # Hero con foto, titulo y especialidad
├── [Nombre]About            # Biografia y formacion academica
├── [Nombre]Experience       # Experiencia profesional, publicaciones, cargos
├── [Nombre]Conferencias     # (solo Oscar) Conferencias y eventos
├── [Nombre]EventoDestacado  # (solo Oscar/Khevin) Evento destacado
└── [Nombre]Contact          # Info de contacto del abogado
```

**Abogados con pagina:** Oscar Gonzalez, Katherine Gonzalez, Mariana Montero, Esteban Perez, Jose Carlos Solano, Khevin Sanchez.

Cada abogado tiene componentes dedicados (ej: `OscarHero.tsx`, `KatherineAbout.tsx`). Esto permite personalizar el contenido visual de cada perfil sin abstracciones genericas.

### `/areas` — Listado de Areas de Practica

Grid de tarjetas con las 22 areas de practica. Cada tarjeta enlaza a `/areas/[slug]`.

**Datos:** `FIRM_PRACTICE_AREAS` (resumen) y `PRACTICE_AREA_PAGES` (detalle completo).

### `/areas/[slug]` — Detalle de Area de Practica

Pagina individual de cada area con:
- Descripcion extendida
- Servicios incluidos
- Casos de exito o contexto relevante
- CTA de contacto

**22 areas incluyen:** Litigio Contencioso Administrativo, Medidas Cautelares, Recursos de Casacion, Contratacion Publica, Recursos de Amparo, Acciones de Inconstitucionalidad, entre otras.

### `/articulos` — Listado de Publicaciones

Pagina que lista todos los articulos y publicaciones del bufete, ordenados por fecha (mas reciente primero).

**Datos:** Cargados desde archivos `.md` en `content/articles/` usando `lib/articles.ts`.

### `/articulos/[slug]` — Articulo Individual

Renderizado de articulos en MDX con soporte para:
- GitHub Flavored Markdown (tablas, notas al pie)
- Syntax highlighting en bloques de codigo
- PDFs embebidos via `PDFViewer`
- Metadatos de autor, fecha, tipo de publicacion

**Frontmatter de ejemplo:**
```yaml
title: "Como Demandar al Estado en Costa Rica"
date: "2024-03-15"
excerpt: "Guia completa sobre procedimientos..."
tags: ["contencioso", "administrativo", "tca"]
type: "article"
author: "Dr. Oscar Gonzalez Camacho"
publicationType: "articulo"
```

### `/sobre-nosotros` — Sobre el Bufete

Pagina informativa con la historia, mision y equipo del bufete.

### `/politica-de-privacidad` — Politica de Privacidad

Texto legal requerido para cumplimiento normativo.

---

## Componentes

### Layout (`components/layout/`)

| Componente | Descripcion |
|---|---|
| `Navbar.tsx` | Navegacion sticky con glass-morphism, menu hamburguesa movil, toggle de tema, deteccion de seccion activa via IntersectionObserver |
| `Footer.tsx` | Pie de pagina con info de contacto, enlaces y branding |

### Secciones (`components/sections/`)

42 componentes de seccion organizados por pagina:

**Secciones del Home:**
- `FirmHero`, `FirmAbout`, `FirmContact`, `FirmPracticeAreas`
- `Credentials`, `TeamSection`, `Publications`
- `ClientLogos`, `LeadForm`, `GoogleMap`

**Secciones de Abogados (por persona):**
- `Oscar*` — Hero, About, Experience, Contact, Conferencias, EventoDestacado
- `Katherine*` — Hero, About, Experience, Contact
- `Mariana*` — Hero, About, Experience, Contact
- `Esteban*` — Hero, About, Experience, Contact
- `JoseCarlos*` — Hero, About, Experience, Contact
- `Khevin*` — EventoDestacado

### UI (`components/ui/`)

| Componente | Descripcion |
|---|---|
| `ThemeToggle.tsx` | Boton de cambio entre modo claro/oscuro. Persiste en localStorage |
| `AnimatedEntry.tsx` | Wrapper que anima la entrada de elementos al hacer scroll (IntersectionObserver) |
| `MagneticButton.tsx` | Boton interactivo que sigue el cursor del mouse |
| `Logo.tsx` | Logo del bufete |

### Articulos (`components/article/`)

| Componente | Descripcion |
|---|---|
| `PDFViewer.tsx` | Visor de documentos PDF embebido |

---

## Datos Centralizados (`lib/constants.ts`)

**Archivo critico.** Contiene ~18,000 lineas con toda la informacion del bufete. Cualquier cambio en datos del sitio se hace aqui.

### Constantes Principales

| Constante | Contenido |
|---|---|
| `FIRM` | Nombre, titulo, descripcion, URL, locale |
| `FIRM_CONTACT` | Email, telefono, direccion, enlaces de Google Maps |
| `FIRM_NAV_LINKS` | Enlaces de navegacion |
| `FIRM_CREDENTIALS` | Metricas (anos de experiencia, casos, etc.) |
| `CLIENT_LOGOS` | 18 clientes con imagenes y estilos de posicionamiento |
| `TEAM` | Array de 6 abogados con perfiles completos |
| `OSCAR_PROFILE` | Perfil extendido del director (biografia, conferencias, publicaciones) |
| `FIRM_PRACTICE_AREAS` | 12 areas principales (resumen para el home) |
| `PRACTICE_AREA_PAGES` | 22 paginas de areas con contenido completo |

### Como Agregar/Modificar Datos

- **Nuevo abogado:** Agregar al array `TEAM`, crear componentes en `components/sections/[Nombre]*.tsx`, agregar ruta en `abogados/[slug]/page.tsx`
- **Nueva area de practica:** Agregar a `PRACTICE_AREA_PAGES` (se genera automaticamente la ruta)
- **Nuevo articulo:** Crear archivo `.md` en `content/articles/` con el frontmatter requerido
- **Nuevo cliente:** Agregar al array `CLIENT_LOGOS` con imagen en `public/images/clients/`

---

## Sistema de Temas (Dark/Light Mode)

El sitio soporta modo claro y oscuro con cambio automatico y manual.

- **Automatico:** Modo oscuro entre 6 PM y 6 AM (script en `layout.tsx`)
- **Manual:** Toggle en la Navbar, persiste en `localStorage`
- **Implementacion:** CSS custom properties en `globals.css`, clase `.dark` en `<html>`

**Paleta de colores:**
- Primary: Burgundy (`#6B1D3A`)
- Accent: Gold (`#C4A265`)
- Light mode: Fondos blancos/crema
- Dark mode: Fondos negros/burgundy oscuro

**Tipografia:**
- Display/Titulos: **Cormorant Garamond** (serif)
- Body/Texto: **DM Sans** (sans-serif)

---

## SEO y Metadatos

### Metadata Dinamica
Cada pagina genera sus propios metadatos (titulo, descripcion, Open Graph, Twitter Cards) usando la API de metadata de Next.js.

### Imagenes Open Graph
Paginas dinamicas (`abogados`, `areas`, `articulos`) generan imagenes OG al vuelo via `opengraph-image.tsx`.

### Datos Estructurados (JSON-LD)
Inyectados en `layout.tsx`:
- `LegalService` (Organization)
- `WebSite` con SearchAction
- `BreadcrumbList`
- `SiteNavigationElement`
- `Person` (perfiles de abogados)

### Sitemap y Robots
- `sitemap.ts` — Genera sitemap XML con todas las rutas estaticas y dinamicas
- `robots.ts` — Genera robots.txt programaticamente

### IndexNow
API route en `/api/indexnow` para notificar a motores de busqueda (Bing, Yandex) cuando se publica contenido nuevo.

### AI Crawlers
Archivo `public/llms.txt` con reglas para crawlers de IA (GPTBot, ClaudeBot, PerplexityBot).

---

## Formulario de Contacto

Implementado con **Server Actions** de Next.js + **Resend** para envio de emails.

**Flujo:**
1. Usuario llena formulario (`FirmContact.tsx` o `LeadForm.tsx`)
2. Se ejecuta el Server Action `sendContactEmail()`
3. Validacion: nombre, email, telefono, mensaje
4. Proteccion anti-bot: campo honeypot
5. Rate limiting: maximo 3 emails por minuto (in-memory)
6. Envio via Resend con plantilla HTML
7. Destinatario: `okabogados@gmail.com`

**Variable de entorno requerida:**
```
RESEND_API_KEY=re_xxxxx
```

---

## Seguridad

Configurado en `next.config.ts`:

| Header | Valor |
|---|---|
| Content-Security-Policy | Scripts self + GA; Frames YouTube + Maps; Estilos unsafe-inline (Tailwind v4) |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| Referrer-Policy | strict-origin-when-cross-origin |

**Redirect permanente:** `corporaciongc.com` → `www.corporaciongc.com`

---

## Desarrollo Local

### Requisitos

- Node.js 18+
- npm

### Instalacion

```bash
cd "LANDING PAGE (GC)/site"
npm install
```

### Variables de Entorno

Crear `.env.local`:
```
RESEND_API_KEY=re_xxxxx
```

### Comandos

| Comando | Descripcion |
|---|---|
| `npm run dev` | Servidor de desarrollo (localhost:3000) |
| `npm run build` | Build de produccion |
| `npm run start` | Servidor de produccion |
| `npm run lint` | Linter (ESLint) |

---

## Guia de Mantenimiento Rapido

| Tarea | Que modificar |
|---|---|
| Cambiar datos del bufete | `lib/constants.ts` → `FIRM`, `FIRM_CONTACT` |
| Editar perfil de abogado | `lib/constants.ts` → `TEAM` + componentes en `components/sections/` |
| Agregar area de practica | `lib/constants.ts` → `PRACTICE_AREA_PAGES` |
| Publicar nuevo articulo | Crear `.md` en `content/articles/` con frontmatter |
| Cambiar colores/tema | `app/globals.css` (CSS custom properties) |
| Modificar navegacion | `lib/constants.ts` → `FIRM_NAV_LINKS` + `Navbar.tsx` |
| Agregar cliente al carrusel | `lib/constants.ts` → `CLIENT_LOGOS` + imagen en `public/images/clients/` |
| Cambiar email de contacto | `app/actions/send-email.ts` (destinatario) |
| Modificar headers de seguridad | `next.config.ts` |
| Editar robots.txt / sitemap | `app/robots.ts` / `app/sitemap.ts` |

---

## Arquitectura de Componentes (Diagrama)

```
app/layout.tsx (Server Component)
│   ├── Fuentes: Cormorant Garamond + DM Sans
│   ├── Google Analytics (GA4)
│   ├── JSON-LD (Organization, Website, Breadcrumb)
│   └── Script de tema automatico
│
├── components/layout/Navbar.tsx (Client Component)
│   ├── Logo
│   ├── Links de navegacion
│   ├── ThemeToggle
│   └── Menu movil (hamburguesa)
│
├── [Contenido de cada pagina — Server Components por defecto]
│   └── Secciones importadas de components/sections/
│
└── components/layout/Footer.tsx (Server Component)
    ├── Info de contacto
    ├── Links de navegacion
    └── Branding
```

---

## Notas para Desarrolladores

1. **constants.ts es el archivo mas importante.** Contiene toda la data del bufete. Es largo (~18K lineas) pero esta bien organizado por secciones con constantes nombradas.

2. **Componentes de abogados son dedicados, no genericos.** Cada abogado tiene sus propios componentes (`OscarHero`, `KatherineAbout`, etc.) en vez de un componente generico con props. Esto permite disenar cada perfil de forma unica.

3. **No hay state management externo.** Se usa React hooks nativos (`useState`, `useEffect`) y Server Components. No hay Redux, Zustand ni Context API global.

4. **Articulos son archivos Markdown.** Se guardan en `content/articles/` y se renderizan con `next-mdx-remote`. Para agregar uno nuevo solo se necesita crear el `.md` con el frontmatter correcto.

5. **El tema oscuro tiene doble mecanismo:** automatico por hora (6 PM - 6 AM) y manual por toggle. El manual sobreescribe el automatico via localStorage.

6. **Las imagenes OG se generan al vuelo.** Cada ruta dinamica tiene su propio `opengraph-image.tsx` que genera la imagen on-demand.

7. **CSP permite `unsafe-inline` para estilos.** Esto es un requisito de Tailwind CSS v4, no un descuido de seguridad.
