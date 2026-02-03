export type ToggleFilterVariant = "default" | "sidebar";

export interface ToggleFilterProps {
  label: string;
  /** Subtexto opcional (ej. "Facilidad de parto") */
  subLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  "aria-label"?: string;
  variant?: ToggleFilterVariant;
  className?: string;
}
