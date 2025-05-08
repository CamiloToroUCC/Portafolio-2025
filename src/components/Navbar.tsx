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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-[#150a2e]/90 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"}`}>
      <div className="container flex justify-between items-center px-4">
        <a href="#home" className="text-2xl font-bold">
          <img src="/placeholder-logo.png" alt="Logo" className="w-8 h-8" />
        </a>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link font-medium">
              {item.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#150a2e] text-white backdrop-blur-md shadow-lg">
          <div className="container px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 hover:bg-white/10 rounded transition-colors">
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
