"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "../components/Icons";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Área Personal", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Mis Trabajos", href: "#works" },
  { name: "Referencias", href: "#references" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-1 bg-portfolio-purple-dark/90 backdrop-blur-md shadow-lg"
          : "py-2 bg-portfolio-purple-dark"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <img src="/placeholder-logo.png" alt="Logo" className="w-6 h-6" />
        </a>
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link font-medium py-1 px-2 text-xs"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-purple-dark/90 text-white backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-1">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 px-2 hover:bg-white/10 rounded transition-colors text-xs"
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
