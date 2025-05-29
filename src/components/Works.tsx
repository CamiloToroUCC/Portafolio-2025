"use client";

import { useState } from "react";
import { WorksBriefcaseIcon } from "./Icons";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Conversor de Moneda",
      category: "Consola Java",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description:
        "Este proyecto es una aplicación de consola en Java que permite convertir entre diferentes monedas utilizando la API de Exchange Rate. La aplicación soporta las siguientes monedas: USD, ARS, BRL, BOB, CLP y COP, y registra cada conversión en un archivo de texto.",
      technologies: ["Java", "org.json", "Exchange Rate API", "CLI"],
      link: "https://github.com/CamiloToroSan/Conversor-de-Moneda---Challenge-ONE---Java---Back-end.git",
    },
    {
      id: 2,
      title: "LiterAlura - Catálogo de Libros",
      category: "Consola Java",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description:
        "Este proyecto es una aplicación de consola en Java que permite buscar y filtrar libros utilizando la API de Gutendex. Los libros se almacenan en una base de datos PostgreSQL y la aplicación ofrece diversas opciones de interacción para el usuario.",
      technologies: ["Java", "Maven", "PostgreSQL", "Gutendex API"],
      link: "https://github.com/CamiloToroSan/Literalura-Challenge-ONE---Java---Back-end", // 
    },
    {
      id: 3,
      title: "Reloj Interactivo",
      category: "Aplicación Python",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      description:
        "Este proyecto es una aplicación interactiva desarrollada en Python. Muestra la hora en formato analógico y digital, sincronizándose con la hora del sistema, y permite ajustar manualmente la hora mediante la interacción del usuario. Se compone de dos módulos: uno para gestionar una lista circular doble y otro para crear la interfaz gráfica con Pygame.",
      technologies: ["Python", "Pygame"],
      link: "https://github.com/CamiloToroUCC/taller-Listas-Circulares-Dobles-", 
    },
    {
      id: 4,
      title: "Calculadora de IMC con Recomendaciones",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      description:
        "Esta herramienta web interactiva calcula el Índice de Masa Corporal (IMC) y ofrece recomendaciones personalizadas de dieta y ejercicio. Utiliza Next.js, React y Tailwind CSS para construir una interfaz responsive y dinámica, y clasifica el resultado en tres categorías: Bajo peso, Normal y Sobrepeso, se resaltan con un sistema de colores.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/CamiloToroUCC/Taller-Ui-2025.git", 
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((p) => p.category === selectedCategory)
      : projects;

  return (
    <section id="works" className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <WorksBriefcaseIcon size={24} />
          <h2 className="text-3xl font-bold">Mis Trabajos</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                selectedCategory === cat ||
                (!selectedCategory && cat === "All")
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="overflow-hidden group animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-purple-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="rounded-full bg-purple-600/80 backdrop-blur-sm px-2 py-1 text-xs">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/10 px-2 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  Ver Proyecto &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
