"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon/Icon";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  shape = "square",
  label,
  checked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  className,
  id,
  ...rest
}: CheckboxProps) {
  const inputId = id ?? (label ? `checkbox-${label.replace(/\s/g, "-")}` : undefined);
  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const displayChecked = isControlled ? checked : uncontrolledChecked;
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setUncontrolledChecked(e.target.checked);
      onChange?.(e);
    },
    [isControlled, onChange]
  );

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 select-none",
        className
      )}
    >
      <span className="relative inline-flex shrink-0">
        <input
          type="checkbox"
          id={inputId}
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          onChange={handleChange}
          className="peer sr-only"
          {...rest}
        />
        <span
          className={cn(
            "flex items-center justify-center border-2 border-primary bg-transparent text-primary-foreground transition-colors",
            "peer-checked:bg-primary peer-checked:border-primary",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
            shape === "square" && "size-5 rounded",
            shape === "circle" && "size-5 rounded-full border-2"
          )}
        >
          {displayChecked && shape === "square" && <Icon name="checkmark" className="size-3" />}
          {displayChecked && shape === "circle" && (
            <span className="size-2 rounded-full bg-primary" />
          )}
          {indeterminate && shape === "square" && (
            <span className="h-0.5 w-3 rounded-full bg-primary-foreground" />
          )}
        </span>
      </span>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  );
}
