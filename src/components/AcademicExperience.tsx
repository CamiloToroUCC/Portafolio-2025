"use client";

import { DiplomaIcon } from "./Icons";

export default function AcademicExperience() {
  const academicExperiences = [
    {
      id: 1,
      title: "Estudiante de Ingeniería de Software",
      institution: "Universidad Cooperativa",
      date: "Julio 2024 - Actual 2025",
      description:
        "Empecé esta carrera porque me sorprendió que la ciudad de Pasto ofreciera esta opción, y no se limitara únicamente a la carrera de Ingeniería de Sistemas, como ocurría en otras universidades.",
    },
    {
      id: 2,
      title: "Estudiante de Física",
      institution: "Universidad del Nariño",
      date: "Agosto 2019 - Actual 2025",
      description:
        "Desistí por la pandemia y, tras haber finalizado, retomé mis estudios. Actualmente, estoy en quinto semestre de Física y compagino mis conocimientos con la carrera de Ingeniería de Software.",
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
