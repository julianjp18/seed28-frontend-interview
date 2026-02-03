import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "filterSelected"
  | "iconToggle";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Para variant iconToggle: activo = fondo oscuro e ícono claro */
  active?: boolean;
  /** Ícono a la izquierda (nombre para Icon) */
  iconLeft?: string;
  /** Ícono a la derecha */
  iconRight?: string;
  className?: string;
}
