"use client";

import { useState } from "react";

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
      title: "Proyecto (Placeholder)",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Proyecto 2 (Placeholder)",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
      technologies: ["Flutter", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Proyecto 3 (Placeholder)",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      id: 4,
      title: "Proyecto 4 (Placeholder)",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
      technologies: ["React Native", "Node.js", "MQTT"],
      link: "#",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((p) => p.category === selectedCategory)
      : projects;

  return (
    <section id="works" className="section-padding bg-portfolio-purple-dark">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <svg width="24" height="24" fill="#a78bfa" viewBox="0 0 24 24" className="mr-2">
            <path d="M21 7h-4V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v2H3a1 1 0 00-1 1v11a3 3 0 003 3h14a3 3 0 003-3V8a1 1 0 00-1-1zm-10-2a1 1 0 011-1h4a1 1 0 011 1v2h-6zm10 14a1 1 0 01-1 1H4a1 1 0 01-1-1V9h18z" />
          </svg>
          <h2 className="text-3xl font-bold">Mis Trabajos</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${selectedCategory === cat || (!selectedCategory && cat === "All") ? "bg-purple-600 text-white" : "bg-white/10 text-gray-200 hover:bg-white/20"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card-glass overflow-hidden group animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-purple-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="rounded-full bg-purple-600/80 backdrop-blur-sm px-2 py-1 text-xs">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300">
                  Ver Proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
