export interface FilterDropdownOption {
  value: string;
  label: string;
}

export type FilterDropdownVariant = "default" | "sidebar";

export interface FilterDropdownProps {
  label: string;
  /** Si no se pasa, el dropdown usa estado interno (modo no controlado) */
  value?: string;
  options: FilterDropdownOption[];
  onChange?: (value: string) => void;
  id?: string;
  variant?: FilterDropdownVariant;
  className?: string;
  "aria-label"?: string;
}
