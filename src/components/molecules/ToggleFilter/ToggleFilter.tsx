"use client";

import { cn } from "@/lib/utils";
import { Text, ToggleSwitch } from "@/components/atoms";
import type { ToggleFilterProps } from "./ToggleFilter.types";

export function ToggleFilter({
  label,
  subLabel,
  checked = false,
  onChange,
  "aria-label": ariaLabel,
  className,
}: ToggleFilterProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <div>
        <Text variant="label" as="span" className="block text-foreground">
          {label}
        </Text>
        {subLabel && (
          <Text variant="caption" className="block text-muted-foreground">
            {subLabel}
          </Text>
        )}
      </div>
      <ToggleSwitch
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel ?? label}
      />
    </div>
  );
}
