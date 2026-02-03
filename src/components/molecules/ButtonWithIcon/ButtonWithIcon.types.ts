export interface ButtonWithIconProps {
  children: string;
  onClick?: () => void;
  /** Ícono a la izquierda (por defecto arrowLeft) */
  iconLeft?: "arrowLeft" | "chevronDown" | string;
  variant?: "outline" | "secondary";
  className?: string;
}
