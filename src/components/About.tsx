export default function About() {
  return (
    <section id="about" className="bg-portfolio-purple-dark text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img src="/placeholder-user.png" alt="User Icon" className="w-6 h-6" />
          <h2 className="text-3xl font-bold">¿Quién soy?</h2>
        </div>
        <div className="card-glass p-8 animate-fade-in">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
