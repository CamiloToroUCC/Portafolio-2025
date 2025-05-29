"use client";

import { DiplomaIcon } from "./Icons";

export default function AcademicExperience() {
  const academicExperiences = [
    {
      id: 1,
      title: "Estudiante de Ingeniería de Software",
      institution: "Universidad",
      date: "Agosto 2020 - Diciembre 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum nisl vel magna congue, ac tincidunt nisl feugiat.",
    },
    {
      id: 2,
      title: "Estudiante de Física",
      institution: "Universidad",
      date: "Agosto 2016 - Junio 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed justo vel nulla blandit varius.",
    },
  ];

  return (
    <section id="academic-experience" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <DiplomaIcon size={24} />
          <h2 className="text-3xl font-bold text-white">Experiencia Académica</h2>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {academicExperiences.map((exp) => (
            <div
              key={exp.id}
              className="card-glass p-6 rounded-xl animate-fade-in animate-scale-up transform transition-transform duration-500 hover:scale-105 w-full md:w-1/2"
            >
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-2">
                {exp.institution}
              </p>
              <p className="text-gray-300 text-xl leading-relaxed mb-2">
                {exp.date}
              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
