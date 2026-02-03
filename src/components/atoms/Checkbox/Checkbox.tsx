"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon/Icon";
import type { CheckboxProps } from "./Checkbox.types";

const filterBoxClasses =
  "size-6 rounded-lg border-[1.5px] border-[#36E27B] bg-transparent text-white transition-colors peer-checked:bg-[#36E27B] peer-checked:border-[#36E27B] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed";

const cardBoxClasses =
  "size-6 rounded-lg border-[1.5px] border-[#4E61F6] bg-transparent text-white transition-colors peer-checked:bg-[#4E61F6] peer-checked:border-[#4E61F6] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed";

export function Checkbox({
  shape = "square",
  variant = "default",
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

  const isFilter = variant === "filter";
  const isCard = variant === "card";

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex cursor-pointer select-none items-center gap-2",
        isFilter && "w-full flex-row-reverse justify-between",
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
            "flex items-center justify-center transition-colors",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
            variant === "filter" && shape === "square" && filterBoxClasses,
            variant === "card" && shape === "square" && cardBoxClasses,
            variant === "default" && "border-2 border-primary bg-transparent text-primary-foreground",
            variant === "default" && "peer-checked:bg-primary peer-checked:border-primary",
            variant === "default" && "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
            variant === "default" && shape === "square" && "size-5 rounded",
            variant === "default" && shape === "circle" && "size-5 rounded-full border-2"
          )}
        >
          {displayChecked && shape === "square" && (
            <Icon name="checkmark" className={cn("size-3", (isFilter || isCard) && "text-white")} />
          )}
          {displayChecked && shape === "circle" && (
            <span className="size-2 rounded-full bg-primary" />
          )}
          {indeterminate && shape === "square" && (
            <span className="h-0.5 w-3 rounded-full bg-primary-foreground" />
          )}
        </span>
      </span>
      {label && (
        <span
          className={cn(
            "text-sm",
            isFilter
              ? "font-inter text-sm font-normal leading-6 text-white align-middle"
              : "text-foreground"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
