import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de Camilo Toro",
  description: "Portafolio de Camilo Toro - Ingeniero de Software & Diseñador de Interfaces",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-[var(--background)]">
        <header className="bg-gradient-to-r from-[var(--background)] to-[var(--card)] py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
            <Link href="/" className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="nav-link">Inicio</Link>
                </li>
                <li>
                  <Link href="/area-personal" className="nav-link">Área Personal</Link>
                </li>
                <li>
                  <Link href="/habilidades" className="nav-link">Habilidades</Link>
                </li>
                <li>
                  <Link href="/mis-trabajos" className="nav-link">Mis Trabajos</Link>
                </li>
                <li>
                  <Link href="/referencias" className="nav-link">Referencias</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
