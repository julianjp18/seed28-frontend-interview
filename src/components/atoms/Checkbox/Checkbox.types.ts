import type { InputHTMLAttributes } from "react";

export type CheckboxShape = "square" | "circle";

export type CheckboxVariant = "default" | "filter" | "card";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** square = filtros sidebar, circle = bulls list */
  shape?: CheckboxShape;
  /** filter = active filter item in sidebar; card = checkbox in BullCard (blue, 24px) */
  variant?: CheckboxVariant;
  /** Optional label (renders together with the checkbox) */
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  className?: string;
}
