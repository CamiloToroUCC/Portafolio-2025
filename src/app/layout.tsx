import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOSInitializer from "../components/AOSInitializer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de Camilo Toro",
  description:
    "Portafolio de Camilo Toro - Ingeniero de Software & Diseñador de Interfaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-[var(--background)]">
        <Navbar />
        {/* Inicializa AOS */}
        <AOSInitializer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
