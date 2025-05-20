"use client";

import React from "react";
import Certificate3D from "./Certificate3D";

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
        {/* Encabezado de la sección */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img
            src="/placeholder-certificate.png"
            alt="Certificado Icon"
            className="w-8 h-8"
          />
          <h2 className="text-4xl font-bold text-white">
            Certificados y Cursos Online
          </h2>
        </div>
        {/* Renderizado de cada certificado en una tarjeta */}
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="card-glass p-8 rounded-xl animate-fade-in max-w-3xl mx-auto text-center"
            >
              {/* Componente 3D interactivo dentro del card */}
              <div className="mb-6">
                <Certificate3D />
              </div>
              <h3 className="text-4xl font-bold text-purple-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-3xl text-white font-medium mb-2">
                {cert.institution}
              </p>
              <p className="text-2xl text-gray-300 mb-4">{cert.date}</p>
              <p className="text-3xl text-gray-300 mb-6">
                {cert.description}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  className="text-3xl text-purple-400 hover:text-purple-300"
                >
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
