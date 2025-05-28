// src/app/page.tsx

"use client";

import React from "react";
import HeroSuperFlow from "../components/HeroSuperFlow";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import AcademicExperience from "../components/AcademicExperience";
import Certificates from "../components/Certificates";
import References from "../components/References";
import LocationMap from "../components/LocationMap";
import Contact from "../components/Contact";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">

      <section id="home" className="w-full text-center pt-24 relative">
        <HeroSuperFlow />

        <h1 className="text-5xl font-bold text-white">
          ¡Hola! Soy Camilo Toro
        </h1>

        {/* Rotación bilingüe con Typewriter */}
        <div className="mt-4 text-2xl text-white">
          <Typewriter
            onInit={(tw) => {
              tw
                .typeString("I'm a Software Engineer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Soy Ingeniero de Software.")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      <section id="skills" className="w-full">
        <Skills />
      </section>

      <section id="works" className="w-full">
        <Works />
      </section>

      <section id="academic-experience" className="w-full">
        <AcademicExperience />
      </section>

      <section id="certificates" className="w-full">
        <Certificates />
      </section>

      <section id="references" className="w-full">
        <References />
      </section>

      <section id="map" className="w-full">
        <LocationMap />
      </section>

      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}
