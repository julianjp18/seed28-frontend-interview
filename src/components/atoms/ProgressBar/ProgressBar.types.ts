export interface ProgressBarProps {
  /** Valor actual (0 a max) */
  value: number;
  /** Valor máximo (por defecto 1 para decimales tipo 0.9) */
  max?: number;
  /** Altura de la barra (clase Tailwind o número px) */
  className?: string;
  /** Clase para el track (fondo) */
  trackClassName?: string;
  /** Clase para el fill (progreso) */
  fillClassName?: string;
}
