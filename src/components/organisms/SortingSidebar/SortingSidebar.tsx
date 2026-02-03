import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { FilterDropdown } from "@/components/molecules";
import type { SortingSidebarProps } from "./SortingSidebar.types";

export function SortingSidebar({
  title = "ORDENAMIENTO",
  value,
  options,
  onChange,
  className,
}: SortingSidebarProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <FilterDropdown
        variant="sidebar"
        label="ORDENAMIENTO"
        value={value}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
