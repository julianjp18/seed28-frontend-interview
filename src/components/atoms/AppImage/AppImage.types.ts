import type { ImgHTMLAttributes } from "react";

export interface AppImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  /** Esquinas redondeadas (ej. tarjeta de toro) */
  rounded?: "none" | "sm" | "md" | "lg";
  className?: string;
}
