import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { GlobalWhatsAppFloat } from "@/components/layout/GlobalWhatsAppFloat";
import "./globals.css";

const GA_ID = "G-EL3CCTV95K";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.corporaciongc.com";

/* DM Sans variable con su eje de tamaño óptico (opsz 9–40): el navegador
   elige el diseño según el tamaño, más abierto en el texto pequeño y más
   cerrado y fino en los titulares. Cubre todos los pesos en un solo archivo.

   Desde el 25-11-2026 se precarga un solo archivo, la redonda en `latin`,
   que es la que pinta la primera pantalla de todas las páginas (antes eran
   cuatro, 212 KB en la ventana crítica). `subsets` solo decide qué se
   precarga: el subconjunto `latin-ext` sigue declarado y el navegador lo
   baja si una página trae un carácter suyo.

   La cursiva es la real de la familia (pasajes literales y énfasis en los
   artículos); sin ella el navegador inclinaría la redonda. Va en una
   segunda llamada, sin precarga: se baja cuando aparece texto en cursiva.
   Las dos declaran la misma familia, de modo que `font-style: italic`
   toma la cursiva sin cambiar nada en el CSS. */
const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSansCursiva = DM_Sans({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz"],
  variable: "--font-dm-sans-cursiva",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Corporación GC · Abogados en Derecho Público | Costa Rica",
    template: "%s · Corporación GC",
  },
  description:
    "Litigio contencioso-administrativo en Costa Rica. Lo dirige el Dr. Óscar González Camacho, ex-Magistrado y coordinador de la comisión redactora del CPCA.",
  applicationName: "Corporación GC",
  authors: [{ name: "Corporación GC" }],
  creator: "Corporación GC",
  publisher: "Corporación GC",
  openGraph: {
    type: "website",
    siteName: "Corporación GC",
    locale: "es_CR",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/logo-gc.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Corporación GC",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B1D3A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${dmSansCursiva.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="Corporación GC · Guías y análisis" href="/feed.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");return}if(t==="light")return;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}else{var h=new Date().getHours();if(h>=18||h<6)document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <GlobalWhatsAppFloat />
        {/* Google Analytics (25-11-2026): la cola `dataLayer` y la
            configuración se definen enseguida, y `gtag.js` (179 KB) se baja
            cuando la página ya terminó de cargar, sin precarga en el
            <head>: así no compite con el CSS ni con la imagen principal.
            Lo que se registre antes queda en la cola y se envía al
            llegar el guion. */}
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Script id="ga" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      </body>
    </html>
  );
}
