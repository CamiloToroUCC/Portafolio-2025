"use client";

type Reference = {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
};

export default function References() {
  const references: Reference[] = [
    {
      id: 1,
      name: "Referencia 1 (Placeholder)",
      position: "Cargo (Placeholder)",
      company: "Empresa (Placeholder)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
    },
    {
      id: 2,
      name: "Referencia 2 (Placeholder)",
      position: "Cargo (Placeholder)",
      company: "Empresa (Placeholder)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
    },
    {
      id: 3,
      name: "Referencia 3 (Placeholder)",
      position: "Cargo (Placeholder)",
      company: "Empresa (Placeholder)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Placeholder)",
    },
  ];

  return (
    <section
      id="references"
      className="py-16 px-4"
      style={{ background: "radial-gradient(ellipse at bottom, #281254, #150a2e)" }}
    >
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <img
            src="/placeholder-star.png"
            alt="Star Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h2 className="text-3xl font-bold text-white">Referencias</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {references.map((ref) => (
            <div key={ref.id} className="card-glass p-6 rounded-xl animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/placeholder-star.png"
                      alt="Star Icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">5.0</span>
              </div>
              <p className="mb-6 text-sm italic text-gray-300">
                &quot;{ref.text}&quot;
              </p>
              <div>
                <h4 className="font-semibold text-white">{ref.name}</h4>
                <p className="text-sm text-purple-300">
                  {ref.position} &middot; {ref.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
