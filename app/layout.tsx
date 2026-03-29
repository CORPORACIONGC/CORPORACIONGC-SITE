import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  authors: [{ name: "Corporación GC" }],
  creator: "Corporación GC",
  publisher: "Corporación GC",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/logo-gc.png",
  },
  other: {
    "theme-color": "#6B1D3A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Corporación GC",
  },
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
