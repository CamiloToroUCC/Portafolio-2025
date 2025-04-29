import VerticalSlider from "./components/VerticalSlider";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      {/* Sección: Placeholder de la imagen de la persona */}
      <section className="w-full">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded shadow">
          <span className="text-gray-700 text-2xl">Foto de Persona (Placeholder)</span>
        </div>
      </section>

      {/* Sección: Texto de bienvenida */}
      <section className="w-full text-center">
        <h1 className="text-5xl font-bold text-white">¡Hola! Soy Camilo Toro</h1>
        <p className="mt-4 text-2xl text-white">I&apos;m a Software Engineer.</p>
        <p className="mt-2 text-xl text-white">
          Actualmente soy un estudiante de Ingeniería de Software
        </p>
      </section>

      {/* Sección: Slider de Contenido */}
      <section className="w-full">
        <VerticalSlider />
      </section>

      {/* Sección: Placeholder para el mapa */}
      <section className="w-full">
        <div className="w-full h-64 border-4 border-dashed border-yellow-500 flex items-center justify-center rounded shadow">
          <span className="text-gray-700 text-xl">
            Mapa: ¿De dónde soy? (Placeholder)
          </span>
        </div>
      </section>
    </main>
  );
}
