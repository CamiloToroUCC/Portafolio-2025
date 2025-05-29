"use client";

import { useState } from "react";
import {
  AboutUserIcon,
  AboutMusicIcon,
  AboutMovieIcon,
  LikeIcon,
} from "./Icons";

const tabs = [
  {
    id: "hobbies",
    label: "Que me Gusta Hacer",
    icon: <LikeIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          Me apasiona el desarrollo de{" "}
          <span className="text-[var(--primary)] font-semibold">
            aplicaciones web modernas
          </span>
          , donde combino creatividad e innovación para transformar ideas en experiencias digitales impactantes.
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          <span className="text-[var(--primary)] font-semibold">
            Colaborar en proyectos de código abierto
          </span>{" "}
          me permite aprender de la comunidad y contribuir al crecimiento colectivo, superando constantemente mis propios límites.
        </p>
      </div>
    ),
  },
  {
    id: "music",
    label: "Musica Favorita",
    icon: <AboutMusicIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          Disfruto de la música lo-fi y del jazz instrumental, que me ayudan a concentrarme y a inspirarme mientras trabajo.
        </p>
      </div>
    ),
  },
  {
    id: "movies",
    label: "Peliculas Favoritas",
    icon: <AboutMovieIcon size={22} />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-xl leading-relaxed">
          Películas como <strong className="text-[var(--primary)] font-semibold">Inception</strong> o <strong className="text-[var(--primary)] font-semibold">The Matrix</strong> me fascinan por su narrativa y profundidad filosófica.
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
                    activeTab === tab.id ? "scale-105" : ""
                  } group-hover:scale-105 ${
                    activeTab === tab.id
                      ? "text-[var(--primary)] font-semibold"
                      : "text-white/90 hover:text-white"
                  }`}
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
