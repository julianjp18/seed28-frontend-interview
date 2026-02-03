"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { FilterDropdown, ToggleFilter } from "@/components/molecules";
import type { ProductiveFiltersSidebarProps } from "./ProductiveFiltersSidebar.types";

export function ProductiveFiltersSidebar({
  title = "FILTROS PRODUCTIVOS",
  toggleLabel,
  toggleSubLabel,
  toggleChecked = false,
  onToggleChange,
  dropdownLabel,
  dropdownValue,
  dropdownOptions,
  onDropdownChange,
  className,
}: ProductiveFiltersSidebarProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Text variant="heading4" className="block text-foreground">
        {title}
      </Text>
      <ToggleFilter
        variant="sidebar"
        label={toggleLabel}
        subLabel={toggleSubLabel}
        checked={toggleChecked}
        onChange={onToggleChange}
      />
      <FilterDropdown
        variant="sidebar"
        label={dropdownLabel}
        value={dropdownValue}
        options={dropdownOptions}
        onChange={onDropdownChange}
      />
    </div>
  );
}
