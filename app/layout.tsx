import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { FIRM } from "@/lib/constants";

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
  metadataBase: new URL(FIRM.url),
  title: {
    default: FIRM.title,
    template: `%s | ${FIRM.name}`,
  },
  description: FIRM.description,
  keywords: [
    "abogados Costa Rica",
    "Derecho P\u00fablico",
    "litigio contencioso-administrativo",
    "Derecho Administrativo",
    "Derecho Constitucional",
    "Contrataci\u00f3n P\u00fablica",
    "bufete abogados San Jos\u00e9",
    "Corporaci\u00f3n GC",
    "\u00d3scar Gonz\u00e1lez Camacho",
    "Sala Primera",
    "Tribunal Contencioso Administrativo",
    "Sala Constitucional",
    "recurso de amparo",
    "acci\u00f3n de inconstitucionalidad",
  ],
  authors: [{ name: "Corporaci\u00f3n GC" }],
  creator: "Corporaci\u00f3n GC",
  publisher: "Corporaci\u00f3n GC",
  openGraph: {
    title: FIRM.title,
    description: FIRM.description,
    url: FIRM.url,
    siteName: FIRM.name,
    locale: FIRM.locale,
    type: "website",
    images: [
      {
        url: "/images/logo-gc.png",
        width: 512,
        height: 512,
        alt: "Corporaci\u00f3n GC \u2014 Abogados Especialistas en Derecho P\u00fablico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: FIRM.title,
    description: FIRM.description,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/images/logo-gc.png",
  },
  other: {
    "theme-color": "#6B1D3A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Corporaci\u00f3n GC",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {},
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
