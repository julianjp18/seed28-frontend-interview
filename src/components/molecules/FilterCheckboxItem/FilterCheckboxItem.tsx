"use client";

import { Checkbox } from "@/components/atoms";
import type { FilterCheckboxItemProps } from "./FilterCheckboxItem.types";

export function FilterCheckboxItem({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  className,
}: FilterCheckboxItemProps) {
  return (
    <Checkbox
      shape="square"
      label={label}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
      id={id}
      className={className}
    />
  );
}
