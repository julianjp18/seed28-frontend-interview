import type { ButtonVariant } from "@/components/atoms/Button/Button.types";

export interface ButtonWithIconProps {
  children: string;
  onClick?: () => void;
  /** Ícono a la izquierda (por defecto arrowLeft) */
  iconLeft?: "arrowLeft" | "chevronDown" | string;
  variant?: ButtonVariant;
  className?: string;
}
