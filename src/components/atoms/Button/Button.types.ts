import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { IconName } from "../Icon/Icon.types";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "filterSelected"
  | "iconToggle"
  | "objective";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Para variant iconToggle: activo = fondo oscuro e ícono claro */
  active?: boolean;
  /** Ícono a la izquierda (nombre para Icon) */
  iconLeft?: IconName;
  /** Ícono a la derecha */
  iconRight?: IconName;
  className?: string;
}
