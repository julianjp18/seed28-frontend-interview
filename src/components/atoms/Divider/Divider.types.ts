export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps {
  orientation?: DividerOrientation;
  /** Grosor del borde, ej: "0.5px", "1px" */
  width?: string;
  /** Color del borde, ej: "#FFFFFF" */
  color?: string;
  className?: string;
}
