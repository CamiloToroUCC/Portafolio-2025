"use client";

import {
  ContactMailIcon,
  ContactPhoneIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MapPinIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-white">
              Contact
            </h2>
            <p data-aos="fade-up" className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="space-y-4">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <ContactMailIcon size={20} />
                <span className="text-white">camilotoro0521@gmail.com</span>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                <ContactPhoneIcon size={20} />
                <span className="text-white">(+57)3127579345</span>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                <MapPinIcon size={20} />
                <span className="text-white">Pasto (Nariño) - Colombia</span>
              </div>
            </div>
            <div data-aos="fade-up" className="mt-8">
              <h3 className="text-xl font-medium mb-4 text-white">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <LinkedinIcon size={20} />
                </a>
                <a href="#" className="bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="card-glass p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6 text-white">Envíame un mensaje</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
