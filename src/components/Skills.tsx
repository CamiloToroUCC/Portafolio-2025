export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PHP"] },
    { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
    { category: "DevOps", items: ["Docker", "Git", "CI/CD", "AWS", "Azure"] },
  ];

  return (
    <section id="skills" className="py-16 px-4" style={{ background: "radial-gradient(ellipse at bottom, #281254, #150a2e)" }}>
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-code-icon.png" alt="Code Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold text-white">¿Qué tecnologías he Utilizado ?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, idx) => (
            <div key={idx} className="card-glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-white text-sm">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
