import React from "react";

export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export function UserIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-user.png"
      alt="User Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-menu.png"
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
      src="/placeholder-x.png"
      alt="Close Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MailIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-mail.png"
      alt="Mail Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function PhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-phone.png"
      alt="Phone Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function GithubIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-github.png"
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
      src="/placeholder-linkedin.png"
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
      src="/placeholder-instagram.png"
      alt="Instagram Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function Code2Icon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-code.png"
      alt="Code Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function BriefcaseIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-briefcase.png"
      alt="Briefcase Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function StarIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-star.png"
      alt="Star Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}

export function MapPinIcon({ size = 24, ...props }: IconProps) {
  return (
    <img
      src="/placeholder-mappin.png"
      alt="Map Pin Icon"
      width={size}
      height={size}
      {...props}
    />
  );
}
