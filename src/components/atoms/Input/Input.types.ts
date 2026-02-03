import type { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Mensaje de error (muestra borde/estilo de error) */
  error?: boolean;
  /** Ícono a la izquierda (nombre para Icon) */
  iconLeft?: string;
  className?: string;
}
