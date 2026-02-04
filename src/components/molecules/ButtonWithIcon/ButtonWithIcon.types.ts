import type { ButtonVariant } from "@/components/atoms/Button/Button.types";
import type { IconName } from "@/components/atoms/Icon/Icon.types";

export interface ButtonWithIconProps {
  children: string;
  onClick?: () => void;
  /** Ícono a la izquierda (por defecto arrowLeft) */
  iconLeft?: IconName;
  variant?: ButtonVariant;
  className?: string;
}
