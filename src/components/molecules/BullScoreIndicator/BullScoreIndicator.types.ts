export interface BullScoreIndicatorProps {
  /** Valor 0–1 o 0–100 según max */
  value: number;
  max?: number;
  /** Texto descriptivo (ej. "Top 1% de facilidad de parto") */
  description?: string;
  /** Mostrar número del score a la derecha de la barra */
  showScoreNumber?: boolean;
  className?: string;
}
