"use client";

import { useState } from "react";

export default function Skills() {
  // Datos estructurados para cada grupo de tecnologías con logo, nombre y descripción
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          logo: "/placeholder-html.png",
          description: "Lenguaje de marcado esencial para estructurar el contenido web.",
        },
        {
          name: "CSS",
          logo: "/placeholder-css.png",
          description: "Hojas de estilo que definen diseño visual y estética.",
        },
        {
          name: "JavaScript",
          logo: "/placeholder-js.png",
          description: "Lenguaje de scripting para dar interactividad en la web.",
        },
        {
          name: "React",
          logo: "/placeholder-react.png",
          description: "Biblioteca para construir interfaces de usuario de forma declarativa.",
        },
        {
          name: "TypeScript",
          logo: "/placeholder-ts.png",
          description: "Superset de JavaScript que añade tipado estático para mayor robustez.",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          logo: "/placeholder-node.png",
          description: "Entorno de ejecución para JavaScript en el servidor.",
        },
        {
          name: "Express",
          logo: "/placeholder-express.png",
          description: "Framework minimalista para Node.js y construcción de APIs.",
        },
        {
          name: "Python",
          logo: "/placeholder-python.png",
          description: "Lenguaje de programación versátil y fácil de aprender.",
        },
        {
          name: "Django",
          logo: "/placeholder-django.png",
          description: "Framework de alto nivel para Python que impulsa un desarrollo rápido.",
        },
        {
          name: "PHP",
          logo: "/placeholder-php.png",
          description: "Lenguaje de scripting ampliamente usado en el desarrollo web.",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          logo: "/placeholder-mongodb.png",
          description: "Base de datos NoSQL orientada a documentos y gran flexibilidad.",
        },
        {
          name: "MySQL",
          logo: "/placeholder-mysql.png",
          description: "Sistema de gestión de bases de datos relacional muy popular.",
        },
        {
          name: "PostgreSQL",
          logo: "/placeholder-postgresql.png",
          description: "Base de datos relacional avanzada con potentes características.",
        },
        {
          name: "Firebase",
          logo: "/placeholder-firebase.png",
          description: "Plataforma de Google que ofrece un backend listo para aplicaciones.",
        },
      ],
    },
    {
      category: "DevOps",
      items: [
        {
          name: "Docker",
          logo: "/placeholder-docker.png",
          description: "Plataforma para desarrollar y ejecutar aplicaciones en contenedores.",
        },
        {
          name: "Git",
          logo: "/placeholder-git.png",
          description: "Sistema de control de versiones distribuido.",
        },
        {
          name: "CI/CD",
          logo: "/placeholder-cicd.png",
          description: "Automatización de procesos de integración y despliegue continuos.",
        },
        {
          name: "AWS",
          logo: "/placeholder-aws.png",
          description: "Plataforma en la nube con múltiples servicios para aplicaciones.",
        },
        {
          name: "Azure",
          logo: "/placeholder-azure.png",
          description: "Servicios en la nube de Microsoft para construir y desplegar aplicaciones.",
        },
      ],
    },
  ];

  // Estado para la diapositiva actual
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = skills.length;

  // Funciones para avanzar o retroceder la diapositiva
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section id="academic-experience" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-code-icon.png" alt="Code Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold text-white">
            ¿Qué tecnologías he Utilizado?
          </h2>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* Botón Flecha Izquierda */}
          <button
            onClick={handlePrev}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
            aria-label="Diapositiva anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Contenedor de la diapositiva */}
          <div className="w-full max-w-3xl">
            <div className="card-glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {skills[currentSlide].category}
              </h3>
              <div className="flex flex-col gap-4">
                {skills[currentSlide].items.map((tech, i) => (
                  <div
                    key={i}
                    className={`flex items-center p-4 bg-white/10 rounded-lg transition-colors hover:bg-white/20 ${
                      i % 2 === 0
                        ? "flex-row justify-between"
                        : "flex-row-reverse justify-between"
                    }`}
                  >
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                    <div className="flex-1 text-center px-2">
                      <h4 className="font-medium text-white">{tech.name}</h4>
                      <p className="text-xs text-gray-300">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Botón Flecha Derecha */}
          <button
            onClick={handleNext}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
            aria-label="Diapositiva siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
