"use client";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Certificado de Python",
      institution: "Udemy",
      date: "Marzo 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "#",
    },
    {
      id: 2,
      title: "Curso Online de React",
      institution: "Platzi",
      date: "Febrero 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-certificate.png" alt="Certificado Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold text-white">Certificados y Cursos Online</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert) => (
            <div key={cert.id} className="card-glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{cert.title}</h3>
              <p className="text-sm text-white font-medium">{cert.institution}</p>
              <p className="text-xs text-gray-300 mb-2">{cert.date}</p>
              <p className="text-sm text-gray-300">{cert.description}</p>
              {cert.link && (
                <a href={cert.link} className="text-sm text-purple-400 hover:text-purple-300">
                  Ver Certificado &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
