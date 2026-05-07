import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");return}if(t==="light")return;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}else{var h=new Date().getHours();if(h>=18||h<6)document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId="G-EL3CCTV95K" />
      </body>
    </html>
  );
}
