import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de Camilo Toro",
  description:
    "Este es mi portafolio para mostrar mis habilidades, actitudes y aptitudes como ingeniero de Software en formación",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased flex flex-col min-h-screen bg-[var(--color-bg)]">
        {/* HEADER */}
        <header className="bg-header">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            {/* Logo (placeholder) */}
            <Link href="/" className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </Link>
            <nav>
              <ul className="flex space-x-4">
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

        {/* MAIN: Contenido de cada página */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-header">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 footer">
            <div>
              <p>Contacto: brahiamcamilo20@gmail.com</p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="nav-link">Instagram</Link>
              <Link href="#" className="nav-link">GitHub</Link>
              <Link href="#" className="nav-link">LinkedIn</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
