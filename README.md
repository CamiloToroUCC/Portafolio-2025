# Mi Portfolio

Este proyecto es mi portfolio personal, diseñado para mostrar mis habilidades, proyectos, experiencia académica, certificados, referencias y ubicación. Combina un diseño moderno y dinámico con una navegación fluida e interactiva, demostrando mi pasión y competencias en ingeniería de software.

---

## Tecnologías y Herramientas

### Framework y Librerías Frontend

- **Next.js & React**  
  - Renderizado híbrido (SSR/SSG)  
  - Nueva estructura de directorio `/app`  
  - Componentes reutilizables

- **Tailwind CSS v4 (CSS-First)**  
  - Clases utilitarias para un diseño moderno y responsivo  
  - Variables CSS definidas en `globals.css` (por ejemplo `--background`, `--card`, etc.)

- **AOS (Animate On Scroll)**  
  - Animaciones al hacer scroll mediante atributos `data-aos="fade-up"` o `data-aos="fade-in"`

- **Swiper**  
  - Sliders y carruseles interactivos en componentes como `HeroSuperFlow.tsx` y `Certificates.tsx`

- **EffectCreative / EffectCoverflow**  
  - Efectos 3D y transiciones creativas en las diapositivas

- **Autoplay y Pagination**  
  - Reproducción automática de sliders  
  - Indicadores (bullets) para navegación rápida

---

## Otros Servicios y APIs

- **Google Maps Static API**  
  Integrado en `LocationMap.tsx` para mostrar un mapa estático de mi ubicación.

---

## Otras Herramientas y Conceptos

- **Icons**  
  Componentes en `Icons.tsx` para iconos de mail, teléfono, GitHub, LinkedIn, etc.

- **Animaciones Personalizadas**  
  Definidas en `globals.css`, incluyendo clases como `.fadeIn` y `.riseUp`

- **Directiva `"use client"`**  
  Indicada en los componentes que deben renderizarse en el cliente bajo Next.js 13

---

## Estructura del Proyecto

```
mi-portfolio/
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── components/
        ├── AOSInitializer.tsx
        ├── Navbar.tsx
        ├── About.tsx
        ├── AcademicExperience.tsx
        ├── Certificates.tsx
        ├── TechBlocks.tsx
        ├── Skills.tsx
        ├── Works.tsx
        ├── References.tsx
        ├── LocationMap.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        ├── HeroSuperFlow.tsx
        └── Icons.tsx
```

Cada componente cubre una sección distinta y, al combinarse, ofrecen una experiencia completa y profesional.

---

## Instalación y Ejecución

1. **Clonar repositorio y moverse a la carpeta raíz**  
   ```bash
   git clone https://github.com/CamiloToroUCC/Portafolio-2025.git
   ```
2. **Instalar dependencias**  
   ```bash
   npm install
   ```
3. **Iniciar en modo desarrollo**  
   ```bash
   npm run dev
   ```
   La aplicación quedará disponible en `http://localhost:3000`.

4. **Construir para producción**  
   ```bash
   npm run build
   npm start
   ```
   La aplicación se servirá en `http://localhost:3000`.

---

## Resumen

Este portfolio está construido con Next.js y React, usando Tailwind CSS v4 en un enfoque CSS-First para estilos, AOS para animaciones al scroll, Swiper con efectos 3D para sliders, y Google Maps Static API para mostrar mi ubicación. La estructura modular y la directiva `"use client"` garantizan un proyecto escalable y moderno.  
