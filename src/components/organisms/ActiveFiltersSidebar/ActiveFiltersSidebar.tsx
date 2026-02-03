"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { FilterCheckboxItem } from "@/components/molecules";
import type { ActiveFiltersSidebarProps } from "./ActiveFiltersSidebar.types";

export function ActiveFiltersSidebar({
  title = "ACTIVE FILTERS",
  subtitle = "Origin",
  options,
  onOptionChange,
  className,
}: ActiveFiltersSidebarProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <Text variant="heading4" className="block text-foreground">
        {title}
      </Text>
      <Text variant="label" className="block text-muted-foreground">
        {subtitle}
      </Text>
      <div className="space-y-2">
        {options.map((opt) => (
          <FilterCheckboxItem
            key={opt.value}
            label={opt.label}
            checked={opt.checked}
            onChange={(checked) => onOptionChange?.(opt.value, checked)}
          />
        ))}
      </div>
    </div>
  );
}
