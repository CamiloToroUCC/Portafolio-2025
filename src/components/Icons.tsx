import React from "react";
import Image from "next/image";

export interface IconProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  size?: number;
}

// --- Íconos Comunes ---
export function CommonLogoIcon({ size = 64, className = "", ...props }: IconProps) {
  // El logo se muestra sin filtro, usando la clase "no-filter"
  return (
    <Image
      className={`no-filter ${className}`}
      src="/icons/placeholder-logo.png"
      alt="Logo"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Íconos de Navegación ---
export function MenuIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-menu.png"
      alt="Menu Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function XIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-x.png"
      alt="Close Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Íconos para la sección About ---
export function AboutUserIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-user.png"
      alt="User Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function LikeIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-like.png"
      alt="Like Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AboutMusicIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-music.png"
      alt="Music Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AboutMovieIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-movie.png"
      alt="Movie Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para "Qué tecnologías he Utilizado" (Skills) ---
export function CodeIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-code.png"
      alt="Code Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para Backend adicional: Java ---
export function JavaIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-java.png"
      alt="Java Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para Experiencia Académica ---
export function DiplomaIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-diploma.png"
      alt="Diploma Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para Certificados y Cursos Online ---
export function CertificateIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-certificate.png"
      alt="Certificate Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para References ---
export function StarIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-star.png"
      alt="Star Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para Works ---
export function WorksBriefcaseIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-briefcase.png"
      alt="Briefcase Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Íconos para Contact ---
export function ContactMailIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-mail.png"
      alt="Mail Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function ContactPhoneIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-phone.png"
      alt="Phone Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Ícono para Mapa (localización) ---
export function MapPinIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-mappin.png"
      alt="Map Pin Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Íconos para Redes Sociales ---
export function GithubIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-github.png"
      alt="GitHub Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function LinkedinIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-linkedin.png"
      alt="LinkedIn Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function InstagramIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-instagram.png"
      alt="Instagram Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// --- Íconos para Skills adicionales (Frontend y DevOps) ---
export function HtmlIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-html.png"
      alt="HTML Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function CssIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-css.png"
      alt="CSS Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function JavascriptIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-javascript.png"
      alt="JavaScript Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function ReactIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-react.png"
      alt="React Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function TypescriptIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-typescript.png"
      alt="TypeScript Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function NodeIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-node.png"
      alt="Node.js Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PythonIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-python.png"
      alt="Python Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function DjangoIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-django.png"
      alt="Django Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MongoDbIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-mongodb.png"
      alt="MongoDB Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MysqlIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-mysql.png"
      alt="MySQL Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PostgreSqlIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-postgresql.png"
      alt="PostgreSQL Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function GitIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Image
      className={`icon-filter ${className}`}
      src="/icons/placeholder-git.png"
      alt="Git Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}
