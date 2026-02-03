export interface OriginFilterOption {
  value: string;
  label: string;
  checked?: boolean;
}

export interface ActiveFiltersSidebarProps {
  /** Section title (e.g. "ACTIVE FILTERS") */
  title?: string;
  /** Subtitle (e.g. "Origin") */
  subtitle?: string;
  /** Options for origin filter (e.g. Own, Catalog, Favorites) */
  options: OriginFilterOption[];
  onOptionChange?: (value: string, checked: boolean) => void;
  className?: string;
}
