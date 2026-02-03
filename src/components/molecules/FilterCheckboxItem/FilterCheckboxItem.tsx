"use client";

import { cn } from "@/lib/utils";
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
    <div
      className={cn(
        "flex h-14 max-w-[204px] items-center rounded-lg border border-transparen bg-[#36E27B]/15 p-4 transition-colors [&:has(input:checked)]:border-[#36E27B]",
        className
      )}
    >
      <Checkbox
        shape="square"
        variant="filter"
        label={label}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        id={id}
        className="h-full w-full border-0 bg-transparent p-0"
      />
    </div>
  );
}
