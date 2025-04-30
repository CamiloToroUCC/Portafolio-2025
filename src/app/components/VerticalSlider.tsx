"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: 1, title: "¿Quién soy?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor." },
  { id: 2, title: "¿Qué hago?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor." },
  { id: 3, title: "¿Qué estudio?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor." },
  { id: 4, title: "¿Área Profesional?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor." },
];

export default function VerticalSlider() {
  const [activeSection, setActiveSection] = useState(1);
  const gapValue = "32px";
  const cardHeight = "600px";
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const totalHeight = `calc(${sections.length} * ${cardHeight} + ${sections.length - 1} * ${gapValue})`;

  return (
    <div ref={containerRef} className="relative" style={{ height: totalHeight }}>
      <div className="flex">
        <div className="flex-1 flex flex-col" style={{ gap: gapValue }}>
          {sections.map((section, i) => (
            <div
              key={section.id}
              data-index={section.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className="h-[600px] snap-center p-6 bg-slider rounded-3xl shadow-lg transition-all duration-300 flex items-center justify-center text-center"
            >
              <p className="text-xl text-white">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-48 ml-4 relative" style={{ height: totalHeight }}>
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "300px",
              width: "2px",
              backgroundColor: "var(--color-highlight)",
              height: `calc(${sections.length - 1} * (600px + ${gapValue}))`,
            }}
          />
          {sections.map((section, i) => (
            <div
              key={section.id}
              style={{
                position: "absolute",
                top: `calc(${i} * (600px + ${gapValue}) + 300px)`,
                left: "calc(50% + 1rem)",
                transform: "translateY(-50%)",
                whiteSpace: "nowrap",
              }}
              className={`font-semibold text-lg transition-colors duration-300 ${activeSection === section.id ? "text-white" : "text-gray-300"}`}
            >
              {section.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
