import type { InputHTMLAttributes } from "react";

export type CheckboxShape = "square" | "circle";

export type CheckboxVariant = "default" | "filter" | "card";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** square = filtros sidebar, circle = lista de toros */
  shape?: CheckboxShape;
  /** filter = ítem del sidebar de filtros activos; card = checkbox en BullCard (azul, 24px) */
  variant?: CheckboxVariant;
  /** Etiqueta opcional (se renderiza junto al checkbox) */
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  className?: string;
}
