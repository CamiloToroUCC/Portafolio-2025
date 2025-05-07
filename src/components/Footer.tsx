export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-white/10 py-4">
      <div className="container flex flex-col md:flex-row justify-between items-center px-4">
        <a href="#home" className="text-2xl font-bold">
          <img src="/placeholder-logo.png" alt="Logo" className="w-8 h-8" />
        </a>
        <nav className="flex gap-4">
          <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Inicio</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">Acerca</a>
          <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Habilidades</a>
        </nav>
        <p className="mt-4 text-center text-sm text-gray-400 md:mt-0">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
