"use client";

import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { FilterDropdownProps } from "./FilterDropdown.types";

export function FilterDropdown({
  label,
  value,
  options,
  onChange,
  id,
  className,
  "aria-label": ariaLabel,
}: FilterDropdownProps) {
  const inputId = id ?? `dropdown-${label.replace(/\s/g, "-")}`;

  return (
    <div className={cn("space-y-1", className)}>
      <Text as="label" variant="label" className="block text-foreground">
        {label}
      </Text>
      <div className="relative">
        <select
          id={inputId}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-label={ariaLabel ?? label}
          className={cn(
            "w-full appearance-none rounded-lg border border-border bg-muted px-3 py-2 pr-8 text-sm text-foreground",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Icon name="chevronDown" className="size-4" />
        </span>
      </div>
    </div>
  );
}
