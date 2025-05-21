"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Certificado de Python",
      institution: "Udemy",
      date: "Marzo 2023",
      description: "Placeholder para certificado de Python.",
      link: "#",
      textureUrl: "/certificates/python.jpg",
    },
    {
      id: 2,
      title: "Curso Online de React",
      institution: "Platzi",
      date: "Febrero 2023",
      description: "Placeholder para certificado de React.",
      link: "#",
      textureUrl: "/certificates/react.jpg",
    },
    {
      id: 3,
      title: "Certificado de Node.js",
      institution: "Udemy",
      date: "Abril 2023",
      description: "Placeholder para certificado de Node.js.",
      link: "#",
      textureUrl: "/certificates/node.jpg",
    },
    {
      id: 4,
      title: "Curso de Three.js",
      institution: "Platzi",
      date: "Enero 2023",
      description: "Placeholder para certificado de Three.js.",
      link: "#",
      textureUrl: "/certificates/three.jpg",
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

        {/* Swiper con efecto Coverflow */}
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
                {/* Imagen del certificado bien centrada */}
                <div className="w-full h-52 mb-4 flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-white">
                  <img
                    src={cert.textureUrl}
                    alt={cert.title}
                    className="max-h-full w-auto object-contain"
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
                    Ver Certificado &rarr;
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
