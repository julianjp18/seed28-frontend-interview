import type { InputHTMLAttributes } from "react";
import type { ReactNode } from "react";

export interface SearchInputGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  /** Texto o nodo a la derecha (ej. "24 resultados" o <><strong>24</strong> resultados</>) */
  rightLabel?: ReactNode;
}
