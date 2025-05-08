import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import References from "../components/References";
import LocationMap from "../components/LocationMap";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section className="w-full text-center">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-2xl shadow mb-8">
          <span className="text-gray-700 text-2xl">Foto (Placeholder)</span>
        </div>
        <h1 className="text-5xl font-bold text-white">¡Hola! Soy Camilo Toro</h1>
        <p className="mt-4 text-2xl text-white">I'm a Software Engineer.</p>
        <p className="mt-2 text-xl text-white">
          Actualmente soy un estudiante de Ingeniería de Software.
        </p>
      </section>
      {/* ¿Quién soy? */}
      <section className="w-full">
        <About />
      </section>
      {/* ¿Qué tecnologías? */}
      <section className="w-full">
        <Skills />
      </section>
      {/* Mis Trabajos */}
      <section className="w-full">
        <Works />
      </section>
      {/* Referencias */}
      <section className="w-full">
        <References />
      </section>
      {/* ¿De dónde soy? */}
      <section className="w-full">
        <LocationMap />
      </section>
      {/* Contact */}
      <section className="w-full">
        <Contact />
      </section>
    </main>
  );
}
