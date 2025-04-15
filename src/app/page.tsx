import VerticalSlider from "./components/VerticalSlider";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section className="w-full">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded shadow">
          <span className="text-gray-700 text-2xl">Foto de Persona (Placeholder)</span>
        </div>
      </section>
      <section className="w-full">
        <VerticalSlider />
      </section>
      <section className="w-full">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded shadow">
          <span className="text-gray-700 text-xl">
            Mapa: ¿De dónde soy? (Placeholder)
          </span>
        </div>
      </section>
    </main>
  );
}
