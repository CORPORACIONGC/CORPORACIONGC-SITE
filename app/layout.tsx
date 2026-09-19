import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GlobalWhatsAppFloat } from "@/components/layout/GlobalWhatsAppFloat";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.corporaciongc.com";

/* DM Sans variable con su eje de tamaño óptico (opsz 9–40): el navegador
   elige el diseño según el tamaño, más abierto en el texto pequeño y más
   cerrado y fino en los titulares. Cubre todos los pesos en un solo archivo.
   La cursiva es la real de la familia (pasajes literales y énfasis en los
   artículos); sin ella el navegador inclinaría la redonda. */
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Corporación GC · Abogados en Derecho Público | Costa Rica",
    template: "%s · Corporación GC",
  },
  description:
    "Bufete líder en litigio contencioso-administrativo en Costa Rica. Dirigido por el Dr. Óscar González Camacho, ex-Magistrado y co-redactor del CPCA.",
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
      className={dmSans.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");return}if(t==="light")return;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}else{var h=new Date().getHours();if(h>=18||h<6)document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <GlobalWhatsAppFloat />
        <GoogleAnalytics gaId="G-EL3CCTV95K" />
      </body>
    </html>
  );
}
