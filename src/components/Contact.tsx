"use client";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#150a2e]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/placeholder-mail.png" alt="Mail Icon" className="w-5 h-5" />
                <span>camilotoro0521@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/placeholder-phone.png" alt="Phone Icon" className="w-5 h-5" />
                <span>(+57)3127579345</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/placeholder-mappin.png" alt="Map Pin Icon" className="w-5 h-5" />
                <span>Pasto (Nariño) - Colombia</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <img src="/placeholder-github.png" alt="GitHub Icon" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <img src="/placeholder-linkedin.png" alt="LinkedIn Icon" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <img src="/placeholder-instagram.png" alt="Instagram Icon" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-glass p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Envíame un mensaje</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
