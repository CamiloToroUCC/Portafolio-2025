import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de Camilo Toro",
  description: "Este es mi portafolio para mostrar mis habilidades, actitudes y aptitudes como ingeniero de Software en formación",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <body className="antialiased flex flex-col min-h-screen bg-[var(--color-bg)]">
        <header className="bg-header py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
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
        <main className="flex-1">{children}</main>
        <footer className="bg-header py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Contacto</h2>
              <p className="mt-2 text-xl text-gray-300">brahiamcamilo20@gmail.com</p>
              <div className="mt-4 flex items-center justify-center md:justify-start space-x-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H6l-4 4V3z" />
                </svg>
                <span className="text-lg text-white">Chatea conmigo</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Redes Sociales</h2>
              <div className="mt-4 flex flex-col space-y-6 items-center md:items-start">
                <Link href="#">
                  <span className="sr-only">Globe</span>
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zM3.1 12a8.9 8.9 0 0 1 1.63-5.35l11.62 11.62A8.9 8.9 0 0 1 3.1 12zM12 21.9a8.9 8.9 0 0 1-5.35-1.63L18.97 6.65A8.9 8.9 0 0 1 12 21.9z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#">
                  <span className="sr-only">GitHub</span>
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition-colors">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.167 6.839 9.504.5.092.682-.216.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.109-1.463-1.109-1.463-.908-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.528 2.341 1.087 2.91.832.092-.646.35-1.087.637-1.337-2.22-.251-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.5.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.697-4.566 4.943.359.31.678.92.678 1.855 0 1.337-.012 2.416-.012 2.745 0 .269.18.58.688.481A10.018 10.018 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
                <Link href="#">
                  <span className="sr-only">Instagram</span>
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.242 1.287 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.242 1.225-3.608 1.287-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.242-1.287-3.608C2.013 15.747 2 15.367 2 12s.013-3.584.07-4.85c.062-1.366.312-2.633 1.287-3.608C4.295 2.475 5.562 2.225 6.928 2.163 8.194 2.105 8.574 2.093 12 2.093zm0-2.093C8.67 0 8.265.014 7.052.072 5.806.127 4.687.397 3.77 1.315 2.853 2.233 2.583 3.352 2.528 4.598.015 8.265 0 8.67 0 12c0 3.259.015 3.668.072 4.948.057 1.281.343 2.45 1.312 3.418.969.968 2.138 1.254 3.418 1.312C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.281-.057 2.45-.343 3.418-1.312.968-.968 1.254-2.137 1.312-3.418C23.985 15.668 24 15.259 24 12s-.015-3.668-.072-4.948c-.057-1.281-.343-2.45-1.312-3.418C21.398.416 20.229.13 18.948.072 17.668.015 17.259 0 14 0h-2z" />
                      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
