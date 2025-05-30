"use client";

import { StarIcon } from "./Icons";

type Reference = {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
};

export default function References() {
  const references: Reference[] = [
    {
      id: 1,
      name: "Daniel Fernando Arteaga",
      position: "Docente UCC - Desarrollador Mid-Senior",
      company: "UCC Campus Pasto",
      text: "Excelente estudiante y aplicado.",
    },
    {
      id: 2,
      name: "Christian Ordóñez Anacona",
      position: "Full Stack Developer",
      company: "Indra",
      text: "Amigos desde el colegio, siempre se le vio muy interesado en este tema.",
    },
    {
      id: 3,
      name: "Luis Carlos Revelo",
      position: "Docente UCC - Desarrollador Senior",
      company: "UCC Campus Pasto - Pragma",
      text: "Se esfuerza en avanzar aceleradamente en su carrera.",
    },
  ];

  return (
    <section id="references" className="py-16 px-4">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="flex items-center gap-3 mb-8 animate-fade-in">
          <StarIcon size={24} />
          <h2 className="text-3xl font-bold text-white">Referencias</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {references.map((ref) => (
            <div key={ref.id} data-aos="fade-up" className="card-glass p-6 rounded-xl animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="mr-1" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">5.0</span>
              </div>
              <p className="mb-6 text-sm italic text-gray-300">&quot;{ref.text}&quot;</p>
              <div>
                <h4 className="font-semibold text-white">{ref.name}</h4>
                <p className="text-sm text-purple-300">
                  {ref.position} &middot; {ref.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
