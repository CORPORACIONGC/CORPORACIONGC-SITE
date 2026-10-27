import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* Sin esto, la 404 heredaba el título de la portada. */
export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
        <h1 className="font-display text-[8rem] font-bold leading-none text-burgundy sm:text-[12rem]">
          404
        </h1>
        <p className="mt-4 font-display text-2xl text-cream sm:text-3xl">
          Página no encontrada
        </p>
        <p className="mt-2 max-w-md text-cream/60">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <div className="mt-10">
          <Link href="/">
            <MagneticButton>Volver al inicio</MagneticButton>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
