import { CommonLogoIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-portfolio-purple-dark border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">
          <CommonLogoIcon size={24} />
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Camilo Toro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
