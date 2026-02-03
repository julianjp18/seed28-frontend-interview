export interface SortOption {
  value: string;
  label: string;
}

export interface SortingSidebarProps {
  /** Section title (e.g. "SORTING") */
  title?: string;
  value: string;
  options: SortOption[];
  onChange?: (value: string) => void;
  className?: string;
}
