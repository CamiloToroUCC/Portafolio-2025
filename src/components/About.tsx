"use client";

import { useState } from "react";
import { Code2Icon, StarIcon, BriefcaseIcon } from "./Icons";

const tabs = [
  {
    id: "hobbies",
    label: "Que me Gusta Hacer",
    icon: <Code2Icon size={22} />,
    content: (
      <div className="text-gray-300 space-y-2">
        <p>Desarrollar aplicaciones web</p>
        <p>Contribuir en proyectos de código abierto</p>
        <p>Investigar nuevas tecnologías</p>
      </div>
    ),
  },
  {
    id: "music",
    label: "Musica Favorita",
    icon: <StarIcon size={22} />,
    content: (
      <div className="text-gray-300 space-y-2">
        <p>Lo-fi Beats</p>
        <p>Jazz Instrumental</p>
        <p>Rock Clásico</p>
      </div>
    ),
  },
  {
    id: "movies",
    label: "Peliculas Favoritas",
    icon: <BriefcaseIcon size={22} />,
    content: (
      <div className="text-gray-300 space-y-2">
        <p>Inception</p>
        <p>The Matrix</p>
        <p>Interstellar</p>
      </div>
    ),
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="about" className="relative text-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Título centrado */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in justify-center">
          <img src="/placeholder-user.png" alt="User Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold">¿Quién soy?</h2>
        </div>

        {/* Barra de Tabs centrada con efecto personalizado */}
        <div className="border-b border-white/20 mb-6">
          <nav className="flex justify-center space-x-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-4 group"
              >
                <div
                  className={`flex items-center gap-2 text-base transition-colors duration-300
                    ${
                      activeTab === tab.id
                        ? "text-[#a78bfa] font-semibold"
                        : "text-white/90 hover:text-white"
                    }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>

                {/* Subrayado animado */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#a78bfa] transition-all duration-300
                    ${
                      activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Contenido de la pestaña activa */}
        <div className="card-glass p-8 animate-fade-in">
          {tabs.find((t) => t.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
}
