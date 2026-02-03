import type { InputHTMLAttributes } from "react";

export type CheckboxShape = "square" | "circle";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** square = filtros sidebar, circle = lista de toros */
  shape?: CheckboxShape;
  /** Etiqueta opcional (se renderiza junto al checkbox) */
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  className?: string;
}
