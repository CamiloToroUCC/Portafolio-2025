"use client";

export default function AcademicExperience() {
  const academicExperiences = [
    {
      id: 1,
      title: "Estudiante de Ingeniería de Software",
      institution: "Universidad",
      date: "Agosto 2020 - Diciembre 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      title: "Estudiante Fisica",
      institution: "Universidad",
      date: "Agosto 2016 - Junio 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    },
  ];

  return (
    <section id="academic-experience" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-diploma.png" alt="Diploma Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold text-white">Experiencia Académica</h2>
        </div>
        <div className="space-y-6">
          {academicExperiences.map((exp) => (
            <div key={exp.id} className="card-glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{exp.title}</h3>
              <p className="text-sm text-white font-medium">{exp.institution}</p>
              <p className="text-xs text-gray-300 mb-2">{exp.date}</p>
              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
