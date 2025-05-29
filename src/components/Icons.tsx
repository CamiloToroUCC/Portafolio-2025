import React from "react";

export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export function CommonLogoIcon({ size = 64, className = "", ...props }: IconProps) {
  return (
    <img
      className={`no-filter ${className}`}
      src="/icons/placeholder-logo.png"
      alt="Logo"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Los demás íconos se mantienen iguales y seguirán aplicándoles el filtro global
export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-menu.png"
      alt="Menu Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function XIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-x.png"
      alt="Close Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para la sección About
export function AboutUserIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-user.png"
      alt="User Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function CodeIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-code.png"
      alt="Code Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AboutMusicIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-music.png"
      alt="Music Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AboutMovieIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-movie.png"
      alt="Movie Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Ícono para Experiencia Académica
export function DiplomaIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-diploma.png"
      alt="Diploma Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// (Opcional) Ícono para Certificados
export function CertificateIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-certificate.png"
      alt="Certificate Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Ícono para References
export function StarIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-star.png"
      alt="Star Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Ícono para Works
export function WorksBriefcaseIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-briefcase.png"
      alt="Briefcase Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para Contact
export function ContactMailIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-mail.png"
      alt="Mail Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function ContactPhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-phone.png"
      alt="Phone Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para Redes Sociales
export function GithubIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-github.png"
      alt="GitHub Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function LinkedinIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-linkedin.png"
      alt="LinkedIn Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-instagram.png"
      alt="Instagram Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para Skills (Frontend, Backend, Database, DevOps)
export function HtmlIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-html.png"
      alt="HTML Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function CssIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-css.png"
      alt="CSS Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function JavascriptIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-javascript.png"
      alt="JavaScript Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function ReactIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-react.png"
      alt="React Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function TypescriptIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-typescript.png"
      alt="TypeScript Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para Backend
export function NodeIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-node.png"
      alt="Node.js Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function ExpressIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-express.png"
      alt="Express Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PythonIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-python.png"
      alt="Python Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function DjangoIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-django.png"
      alt="Django Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PhpIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-php.png"
      alt="PHP Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para Database
export function MongoDbIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-mongodb.png"
      alt="MongoDB Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MysqlIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-mysql.png"
      alt="MySQL Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PostgreSqlIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-postgresql.png"
      alt="PostgreSQL Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function FirebaseIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-firebase.png"
      alt="Firebase Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

// Íconos para DevOps
export function DockerIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-docker.png"
      alt="Docker Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function GitIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-git.png"
      alt="Git Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function CiCdIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-cicd.png"
      alt="CI/CD Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AwsIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-aws.png"
      alt="AWS Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function AzureIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-azure.png"
      alt="Azure Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MapPinIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-mappin.png"
      alt="Map Pin Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function LikeIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/icons/placeholder-like.png"
      alt="Azure Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

