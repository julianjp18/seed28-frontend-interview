import type { InputHTMLAttributes } from "react";
import type { IconName } from "../Icon/Icon.types";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** error message (shows border/error style) */
  error?: boolean;
  /** Icon on the left (name for Icon) */
  iconLeft?: IconName;
  /** Icon on the right (name for Icon) */
  iconRight?: IconName;
  /** Clase aplicada al contenedor del icono derecho (ej. posicionamiento) */
  iconRightClassName?: string;
  className?: string;
}
