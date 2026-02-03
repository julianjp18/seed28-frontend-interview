import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { FilterDropdown } from "@/components/molecules";
import type { SortingSidebarProps } from "./SortingSidebar.types";

export function SortingSidebar({
  title = "SORTING",
  value,
  options,
  onChange,
  className,
}: SortingSidebarProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <Text variant="heading4" className="block text-foreground">
        {title}
      </Text>
      <FilterDropdown
        label="Order"
        value={value}
        options={options}
        onChange={onChange}
      />
    </div>
  );
}
