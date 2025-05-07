import VerticalSlider from "../components/VerticalSlider";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section className="w-full">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-2xl shadow">
          <span className="text-gray-700 text-2xl">Foto (Placeholder)</span>
        </div>
      </section>
      <section className="w-full text-center">
        <h1 className="text-5xl font-bold text-white">¡Hola! Soy Camilo Toro</h1>
        <p className="mt-4 text-2xl text-white">I&apos;m a Software Engineer.</p>
        <p className="mt-2 text-xl text-white">
          Actualmente soy un estudiante de Ingeniería de Software
        </p>
      </section>
      <section className="w-full">
        <VerticalSlider />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Skills />
      </section>
      <section className="w-full">
        <Contact />
      </section>
      <section className="w-full">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-2xl shadow">
          <span className="text-gray-700 text-2xl">Mapa (Placeholder)</span>
        </div>
      </section>
    </main>
  );
}
