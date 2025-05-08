export default function LocationMap() {
  return (
    <section id="map" className="bg-[#150a2e] py-8">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden">
          <div className="bg-gray-200 h-64 rounded-xl">
            {/* Placeholder para mapa real – reemplaza la URL o usa tu API Key */}
            <div className="w-full h-full flex items-center justify-center bg-portfolio-purple-medium/50 relative">
              <div className="absolute inset-0">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=MexicoCity,Mexico&zoom=13&size=800x400&key=YOUR_API_KEY"
                  alt="Map location"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative z-10 text-center">
                <span className="bg-[#150a2e]/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-medium">¿De dónde soy?</span>
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-[#150a2e]/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                Ciudad de Pasto, Colombia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
