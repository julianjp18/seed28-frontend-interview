"use client";

import { cn } from "@/lib/utils";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

export function ToggleSwitch({
  checked = false,
  onChange,
  disabled = false,
  "aria-label": ariaLabel,
  variant = "default",
  className,
}: ToggleSwitchProps) {
  const isSidebar = variant === "sidebar";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative z-10 inline-flex shrink-0 cursor-pointer border-2 border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        isSidebar && "h-6 w-11 rounded-[12px]",
        isSidebar && (checked ? "bg-[#36E27B]/30" : "bg-[#000000]"),
        !isSidebar && "h-6 w-11 rounded-full",
        !isSidebar && (checked ? "bg-primary" : "bg-muted"),
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block rounded-full ring-0 shadow transition-transform",
          isSidebar && "size-5 bg-[#36E27B]",
          isSidebar && (checked ? "translate-x-[22px]" : "translate-x-0.5"),
          !isSidebar && "size-5 bg-white",
          !isSidebar && (checked ? "translate-x-5" : "translate-x-0.5")
        )}
      />
    </button>
  );
}
