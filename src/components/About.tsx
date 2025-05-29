"use client";

import { useState } from "react";
import {
  AboutUserIcon,
  LikeIcon,
  AboutMusicIcon,
  AboutMovieIcon,
} from "./Icons";

const tabs = [
  {
    id: "hobbies",
    label: "Que me Gusta Hacer",
    icon: <LikeIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          Me apasionan los{" "}
          <span className="text-[var(--primary)] font-semibold">
            videojuegos
          </span>{" "}
          y, sobre todo, el{" "}
          <span className="text-[var(--primary)] font-semibold">
            montaje de componentes de PC
          </span>{" "}
          para correr los juegos que me interesan, aunque también utilizo su
          potencia para modelar objetos en 3D.
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          En deportes, me apasiona el{" "}
          <span className="text-[var(--primary)] font-semibold">
            baloncesto
          </span>
          . Hace años, en el colegio, participé en escuelas de formación y
          torneos pequeños en la ciudad.
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          También me gustan las{" "}
          <span className="text-[var(--primary)] font-semibold">
            motocicletas
          </span>
          : las he manejado desde los 13 años y mi primera motocicleta fue una{" "}
          <span className="text-[var(--primary)] font-semibold">
            Honda Enduro 125cc
          </span>
          .
        </p>
      </div>
    ),
  },
  {
    id: "music",
    label: "Música Favorita",
    icon: <AboutMusicIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          El <span className="text-[var(--primary)] font-semibold">Rock y Metal anglosajón</span> es siempre lo que más escucho, aunque también el rap y las vibras West Coast son de mi agrado.
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          El concierto más grande al que asistí fue el de{" "}
          <span className="text-[var(--primary)] font-semibold">
            Roger Waters
          </span>{" "}
          en Quito, en diciembre de 2023.
        </p>
      </div>
    ),
  },
  {
    id: "movies",
    label: "Películas Favoritas",
    icon: <AboutMovieIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          Soy fan de las películas espaciales antiguas, sobre todo de cómo se
          realizan los montajes de las naves y de las tripulaciones en aquella
          época.
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          Por ello, películas clásicas sobre el espacio como{" "}
          <span className="text-[var(--primary)] font-semibold">
            2001: A Space Odyssey
          </span>
          , <span className="text-[var(--primary)] font-semibold">Alien</span> y{" "}
          <span className="text-[var(--primary)] font-semibold">Star Wars</span>{" "}
          son de mis favoritas.
        </p>
      </div>
    ),
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <section id="about" className="relative text-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <AboutUserIcon size={24} />
          <h2 className="text-3xl font-bold">¿Quién soy?</h2>
        </div>
        <div className="border-b border-white/20 mb-6">
          <nav className="flex justify-center space-x-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-4 group transition-all duration-500"
              >
                <div
                  className={`flex items-center gap-2 text-lg transition-colors duration-500 transform ${
                    activeTab === tab.id ? "scale-105 text-[var(--primary)] font-semibold" : "text-white/90 hover:text-white"
                  } group-hover:scale-105`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--primary)] transition-all duration-500 ${
                    activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
        <div
          key={activeTab}
          className="card-glass p-10 animate-fade-in animate-scale-up transform transition-transform duration-500 hover:scale-105"
        >
          {tabs.find((t) => t.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
}
