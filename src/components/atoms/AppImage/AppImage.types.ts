import type { ImgHTMLAttributes } from "react";

export interface AppImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  rounded?: "none" | "sm" | "md" | "lg";
  className?: string;
}
