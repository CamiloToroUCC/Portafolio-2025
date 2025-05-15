import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import References from "../components/References";
import LocationMap from "../components/LocationMap";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section id="home" className="w-full text-center pt-24">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-2xl shadow mb-8">
          <span className="text-gray-700 text-2xl">Foto (Placeholder)</span>
        </div>
        <h1 className="text-5xl font-bold text-white">¡Hola! Soy Camilo Toro</h1>
        <p className="mt-4 text-2xl text-white">I'm a Software Engineer.</p>
        <p className="mt-2 text-xl text-white">Actualmente soy un estudiante de Ingeniería de Software.</p>
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
