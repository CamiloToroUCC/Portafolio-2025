"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { CertificateIcon } from "./Icons";
import Image from "next/image";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Lógica de programación con JavaScript",
      institution: "Alura",
      date: "18 de marzo de 2024",
      description:
        "Camilo Alejandro Toro Sánchez ha completado 3 cursos de capacitación con una carga de trabajo estimada de 24 horas.",
      link: "https://www.aluracursos.com/",
      textureUrl: "/certificates/certificado1.jpg",
    },
    {
      id: 2,
      title: "Java Web: crea aplicaciones utilizando Spring Boot",
      institution: "Alura",
      date: "16 de julio de 2024",
      description:
        "Camilo Alejandro Toro Sánchez ha completado 3 cursos de capacitación con una carga de trabajo estimada de 34 horas.",
      link: "https://www.aluracursos.com/",
      textureUrl: "/certificates/certificado2.jpg",
    },
    {
      id: 3,
      title: "Aprende a programar en Java con Orientación a Objetos",
      institution: "Alura",
      date: "14 de julio de 2024",
      description:
        "Camilo Alejandro Toro Sánchez ha completado 4 cursos de capacitación con una carga de trabajo estimada de 36 horas.",
      link: "https://www.aluracursos.com/",
      textureUrl: "/certificates/certificado3.jpg",
    },
    {
      id: 4,
      title: "Java y Spring Boot G6 - ONE",
      institution: "Alura",
      date: "16 de julio de 2024",
      description:
        "Camilo Alejandro Toro Sánchez ha completado 8 cursos de capacitación con una carga de trabajo estimada de 104 horas.",
      link: "https://www.aluracursos.com/",
      textureUrl: "/certificates/certificado4.jpg",
    },
    {
      id: 5,
      title: "Certificado de Finalización del Programa",
      institution: "Alura",
      date: "20 de julio de 2024",
      description:
        "Camilo Alejandro Toro Sánchez ha completado 6 formaciones con una carga de trabajo estimada de 286 horas.",
      link: "https://www.aluracursos.com/",
      textureUrl: "/certificates/certificado5.jpg",
    },
  ];

  return (
    <section id="certificates" className="py-16 px-4">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="flex items-center gap-3 mb-8 animate-fade-in">
          <CertificateIcon size={32} />
          <h2 className="text-4xl font-bold text-white">
            Certificados y Cursos Online
          </h2>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} className="!w-80">
              <div className="card-glass p-4 rounded-xl animate-fade-in text-center flex flex-col items-center">
                <div className="w-full h-52 mb-4 relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <Image
                    src={cert.textureUrl}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  {cert.title}
                </h3>
                <p className="text-xl text-white font-medium mb-2">
                  {cert.institution}
                </p>
                <p className="text-lg text-gray-300 mb-2">{cert.date}</p>
                <p className="text-lg text-gray-300 mb-4">{cert.description}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="text-lg text-purple-400 hover:text-purple-300"
                  >
                    {cert.id === 1 ? "Ir al bootcamp" : "Ver Certificado →"}
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
