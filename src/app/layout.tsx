import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio de Camilo Toro",
  description: "Este es mi portafolio para mostrar el portafolio de mis habilidades, actitudes y aptitudes como ingeniero de Software en formación",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
