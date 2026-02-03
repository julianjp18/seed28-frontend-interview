export interface ToggleFilterProps {
  label: string;
  /** Subtexto opcional (ej. "Facilidad de parto") */
  subLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  "aria-label"?: string;
  className?: string;
}
