export interface ProductiveFiltersSidebarProps {
  /** Section title (e.g. "PRODUCTIVE FILTERS") */
  title?: string;
  /** Toggle label (e.g. "For heifer") */
  toggleLabel: string;
  /** Toggle sublabel (e.g. "Ease of calving") */
  toggleSubLabel?: string;
  toggleChecked?: boolean;
  onToggleChange?: (checked: boolean) => void;
  /** Dropdown label (e.g. "Coat") */
  dropdownLabel: string;
  dropdownValue: string;
  dropdownOptions: { value: string; label: string }[];
  onDropdownChange?: (value: string) => void;
  className?: string;
}
