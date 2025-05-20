"use client";

export default function WorkExperience() {
  const workExperiences = [
    {
      id: 1,
      title: "Ingeniero de Software Interno",
      company: "Empresa XYZ",
      date: "Enero 2024 - Presente",
      description:
        "Desarrollo y mantenimiento de aplicaciones web utilizando Next.js y TypeScript. Colaboro en equipos ágiles y en proyectos de integración y automatización.",
    },
    {
      id: 2,
      title: "Desarrollador Web Freelance",
      company: "Proyectos Variados",
      date: "Marzo 2023 - Diciembre 2023",
      description:
        "Implementé soluciones web responsivas para diversos clientes usando React, Node.js y Tailwind CSS.",
    },
  ];

  return (
    <section id="work-experience" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-briefcase.png" alt="Briefcase Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold text-white">Experiencia Laboral</h2>
        </div>
        <div className="space-y-6">
          {workExperiences.map((exp) => (
            <div key={exp.id} className="card-glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{exp.title}</h3>
              <p className="text-sm text-white font-medium">{exp.company}</p>
              <p className="text-xs text-gray-300 mb-2">{exp.date}</p>
              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
