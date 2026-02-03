import type { InputHTMLAttributes } from "react";

export interface SearchInputGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  /** Texto a la derecha (ej. "24 resultados") */
  rightLabel?: string;
}
