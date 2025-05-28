"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./Icons";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Area Personal", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Mis Trabajos", href: "#works" },
  { name: "Experiencia Académica", href: "#academic-experience" },
  { name: "Certificados", href: "#certificates" },
  { name: "Referencias", href: "#references" },
  { name: "Mapa", href: "#map" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Escucha los cambios en el scroll para agregar efectos en el header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-portfolio-purple-dark/90 backdrop-blur-md shadow-lg"
          : "py-4 bg-portfolio-purple-dark/90"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <img
            src="/placeholder-logo.png"
            alt="Logo"
            className="w-6 h-6"
          />
        </a>
        {/* Menú Desktop (oculto en móviles) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Botón del menú móvil (visible solo en móviles) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-purple-dark/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
