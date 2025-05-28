"use client";

interface Technology {
  name: string;
  logo: string;
  description: string;
}

export default function TechBlocks() {
  const technologies: Technology[] = [
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
  ];

  return (
    <div className="flex flex-col gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="rise-block p-4 bg-white/10 rounded-lg shadow-lg"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="flex items-center gap-4">
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="w-10 h-10 object-contain"
            />
            <h4 className="text-xl font-bold text-white">{tech.name}</h4>
          </div>
          <p className="text-sm text-gray-300 mt-2">{tech.description}</p>
        </div>
      ))}
    </div>
  );
}
