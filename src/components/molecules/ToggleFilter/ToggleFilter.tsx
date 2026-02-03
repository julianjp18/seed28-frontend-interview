"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Text, ToggleSwitch } from "@/components/atoms";
import type { ToggleFilterProps } from "./ToggleFilter.types";

const sidebarContainerClasses =
  "flex h-16 max-w-[204px] items-center justify-between gap-3 rounded-lg bg-[#36E27B]/15 px-4 py-1";

export function ToggleFilter({
  label,
  subLabel,
  checked: controlledChecked,
  onChange,
  "aria-label": ariaLabel,
  variant = "default",
  className,
}: ToggleFilterProps) {
  const isSidebar = variant === "sidebar";
  const [uncontrolledChecked, setUncontrolledChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleChange = useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledChecked(value);
      onChange?.(value);
    },
    [isControlled, onChange]
  );

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3",
        isSidebar && sidebarContainerClasses,
        className
      )}
    >
      <div className={cn(isSidebar && "min-w-0 flex-1")}>
        <Text
          variant="label"
          as="span"
          className={cn(
            "block",
            isSidebar
              ? "font-inter text-sm font-normal leading-6 text-white align-middle"
              : "text-foreground"
          )}
        >
          {label}
        </Text>
        {subLabel && (
          <Text
            variant="caption"
            as="span"
            className={cn(
              "block",
              isSidebar
                ? "font-inter text-xs font-normal leading-6 text-white align-middle"
                : "text-muted-foreground"
            )}
          >
            {subLabel}
          </Text>
        )}
      </div>
      <ToggleSwitch
        checked={checked}
        onChange={handleChange}
        aria-label={ariaLabel ?? label}
        variant={isSidebar ? "sidebar" : "default"}
      />
    </div>
  );
}
