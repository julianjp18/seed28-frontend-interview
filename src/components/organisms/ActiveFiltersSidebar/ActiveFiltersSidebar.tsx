"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { FilterCheckboxItem } from "@/components/molecules";
import type { ActiveFiltersSidebarProps } from "./ActiveFiltersSidebar.types";

export function ActiveFiltersSidebar({
  title = "FILTROS ACTIVOS",
  subtitle = "Origen",
  options,
  onOptionChange,
  className,
}: ActiveFiltersSidebarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Text
        variant="heading4"
        className="mb-[26px] block font-inter text-sm font-medium uppercase leading-5 tracking-[0.04em] text-white"
      >
        {title}
      </Text>
      <Text
        variant="label"
        className="block font-inter text-sm font-normal leading-5 text-white"
      >
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
