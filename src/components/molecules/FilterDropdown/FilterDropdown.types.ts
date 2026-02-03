export interface FilterDropdownOption {
  value: string;
  label: string;
}

export interface FilterDropdownProps {
  label: string;
  value: string;
  options: FilterDropdownOption[];
  onChange?: (value: string) => void;
  id?: string;
  className?: string;
  "aria-label"?: string;
}
