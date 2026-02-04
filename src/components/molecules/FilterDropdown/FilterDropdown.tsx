"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { FilterDropdownProps } from "./FilterDropdown.types";

const sidebarLabelClasses =
  "block font-inter text-xs font-medium uppercase leading-5 tracking-[0.04em] text-white";

const sidebarSelectWrapperClasses =
  "flex h-16 max-w-[204px] items-center rounded-lg bg-[#36E27B]/15 px-4 py-1";

export function FilterDropdown({
  label,
  value: controlledValue,
  options,
  onChange,
  id,
  variant = "default",
  className,
  "aria-label": ariaLabel,
}: FilterDropdownProps) {
  const inputId = id ?? `dropdown-${label.replace(/\s/g, "-")}`;
  const isSidebar = variant === "sidebar";

  const [uncontrolledValue, setUncontrolledValue] = useState(
    () => options[0]?.value ?? ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = useCallback(
    (newValue: string) => {
      if (!isControlled) setUncontrolledValue(newValue);
      setIsOpen(false);
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return (
    <div className={cn("space-y-1", isSidebar && "space-y-2", className)}>
      <Text
        as="label"
        variant="label"
        className={cn(isSidebar ? sidebarLabelClasses : "block text-foreground")}
      >
        {label}
      </Text>
      <div
        className={cn(
          "relative",
          isSidebar && sidebarSelectWrapperClasses,
          isSidebar && "items-center"
        )}
      >
        <select
          id={inputId}
          value={value}
          onMouseDown={() => setIsOpen(true)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onChange={(e) => handleChange(e.target.value)}
          aria-label={ariaLabel ?? label}
          aria-expanded={isOpen}
          className={cn(
            "w-full appearance-none bg-transparent pr-6 text-sm",
            isSidebar
              ? "font-inter border-0 border-transparent py-2 text-white outline-none ring-0 [&_option]:bg-[#111714] [&_option]:text-white focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
              : "rounded-lg border border-border px-3 py-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          className={cn(
            "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0",
            isSidebar ? "text-[#36E27B]" : "text-muted-foreground"
          )}
        >
          <Icon name="chevronDown" className="size-4" />
        </span>
      </div>
    </div>
  );
}
