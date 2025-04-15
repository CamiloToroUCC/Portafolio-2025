"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: 1, title: "¿Quién soy?", content: "Contenido sobre quién soy." },
  { id: 2, title: "¿Qué hago?", content: "Contenido sobre qué hago." },
  { id: 3, title: "¿Qué estudio?", content: "Contenido sobre qué estudio." },
  { id: 4, title: "Área Profesional", content: "Contenido sobre mi área profesional." },
  { id: 5, title: "Perfil Profesional", content: "Contenido sobre mi perfil profesional." },
];

export default function VerticalSlider() {
  const [activeSection, setActiveSection] = useState(1);
  const [gapValue, setGapValue] = useState("2rem");
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGapValue("1rem");
      } else {
        setGapValue("2rem");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveSection(index);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const totalHeight = `calc(${sections.length} * 100vh + ${sections.length - 1} * ${gapValue})`;

  return (
    <div ref={containerRef} className="relative" style={{ height: totalHeight }}>
      <div className="flex">
        <div className="flex-1 flex flex-col" style={{ gap: gapValue }}>
          {sections.map((section, index) => (
            <div
              key={section.id}
              data-index={section.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="h-screen snap-start p-6 bg-gray-100 rounded shadow"
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-48 ml-4 relative" style={{ height: totalHeight }}>
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "50vh",
              height: `calc((${sections.length} - 1) * (100vh + ${gapValue}))`,
              width: "2px",
              backgroundColor: "#D1D5DB",
            }}
          />
          {sections.map((section, index) => (
            <div
              key={section.id}
              style={{
                position: "absolute",
                top: `calc(${index} * (100vh + ${gapValue}) + 50vh)`,
                left: "calc(50% + 1rem)",
                transform: "translateY(-50%)",
                whiteSpace: "nowrap",
              }}
              className={`font-semibold text-lg transition-colors duration-300 ${
                activeSection === section.id ? "text-primary" : "text-gray-500"
              }`}
            >
              {section.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
