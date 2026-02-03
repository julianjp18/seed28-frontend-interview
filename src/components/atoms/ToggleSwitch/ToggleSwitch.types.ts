export type ToggleSwitchVariant = "default" | "sidebar";

export interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
  variant?: ToggleSwitchVariant;
  className?: string;
}
