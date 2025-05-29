"use client";

import { useState } from "react";
import { CodeIcon } from "./Icons";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          logo: "/icons/placeholder-html.png",
          description: "El esqueleto de mis páginas web, dando estructura y semántica.",
        },
        {
          name: "CSS",
          logo: "/icons/placeholder-css.png",
          description: "Con lo que intento diseñar interfaces atractivas.",
        },
        {
          name: "JavaScript",
          logo: "/icons/placeholder-javascript.png",
          description: "Me permite darle interactividad y dinamismo a cada sitio.",
        },
        {
          name: "React",
          logo: "/icons/placeholder-react.png",
          description: "La biblioteca que más he usado para construir interfaces modernas y reactivas.",
        },
        {
          name: "TypeScript",
          logo: "/icons/placeholder-typescript.png",
          description: "Superset de JavaScript que añade tipado estático para mayor robustez.",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          logo: "/icons/placeholder-node.png",
          description: "Una plataforma que uso para la ejecución de JavaScript en el servidor.",
        },
        {
          name: "Python",
          logo: "/icons/placeholder-python.png",
          description: "Lenguaje versátil que utilizo sobretodo para scripts y tareas automatizadas.",
        },
        {
          name: "Django",
          logo: "/icons/placeholder-django.png",
          description: "Framework que me permite desarrollar aplicaciones robustas con rapidez.",
        },
        {
          name: "Java",
          logo: "/icons/placeholder-java.png",
          description: "Lenguaje de programación robusto el cual he usado generalmente junto a frameworks como Spring.",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          logo: "/icons/placeholder-mongodb.png",
          description: "La base de datos NoSQL que empleo para proyectos con requisitos flexibles.",
        },
        {
          name: "MySQL",
          logo: "/icons/placeholder-mysql.png",
          description: "Un clásico sistema relacional que conozco lo básico.",
        },
        {
          name: "PostgreSQL",
          logo: "/icons/placeholder-postgresql.png",
          description: "Para proyectos que han solicitado robustez en SQL.",
        },
      ],
    },
    {
      category: "DevOps",
      items: [
        {
          name: "Git",
          logo: "/icons/placeholder-git.png",
          description: "Mi herramienta clave para controlar y versionar el código.",
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = skills.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
          <CodeIcon size={24} />
          <h2 className="text-3xl font-bold text-white">
            ¿Qué tecnologías he Utilizado?
          </h2>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
            aria-label="Diapositiva anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-full">
            <div key={currentSlide} data-aos="fade-up" className="card-glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {skills[currentSlide].category}
              </h3>
              <div className="flex flex-col gap-4">
                {skills[currentSlide].items.map((tech, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    className="tech-card rise-block flex items-center p-4 bg-white/10 rounded-lg transition-colors hover:bg-white/20"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <img src={tech.logo} alt={`${tech.name} logo`} className="w-10 h-10 object-contain" />
                    <div className="flex-1 text-center px-2">
                      <h4 className="font-medium text-white">{tech.name}</h4>
                      <p className="text-xs text-gray-300">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
            aria-label="Diapositiva siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
