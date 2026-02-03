export interface FilterCheckboxItemProps {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}
