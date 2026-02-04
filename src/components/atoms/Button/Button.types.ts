import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { IconName } from "../Icon/Icon.types";

export type ButtonVariant =
  | "primary"      // #1C2620
  | "secondary"   // #E6E6E6
  | "highlight"   // #36E27B 10% opacidad
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
