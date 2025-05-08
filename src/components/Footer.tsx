export default function Footer() {
  return (
    <footer className="bg-[#150a2e] border-t border-white/10 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">
          <img src="/placeholder-logo.png" alt="Logo" className="w-8 h-8" />
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Camilo Toro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
