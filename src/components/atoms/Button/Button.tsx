"use client";

import { cn } from "@/lib/utils";
import { Icon } from "../Icon/Icon";
import type { ButtonProps } from "./Button.types";

const variantClasses: Record<ButtonProps["variant"] & string, string> = {
  primary:
    "bg-[#1C2620] text-white hover:bg-[#1C2620]/90 border border-transparent",
  secondary:
    "bg-[#E6E6E6] text-[#1C2620] hover:bg-[#E6E6E6]/80 border border-transparent",
  highlight:
    "bg-[#36E27B]/10 text-[#1C2620] hover:bg-[#36E27B]/20 border border-[#36E27B]/30 [&_svg]:text-[#36E27B]",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
  filterSelected:
    "bg-primary text-primary-foreground border border-primary",
  iconToggle:
    "p-2 border border-border rounded-lg transition-colors",
  objective:
    "border border-[#36E27B] bg-[#36E27B]/5 text-[#36E27B] hover:bg-[#36E27B]/40 [&_svg]:text-[#36E27B]",
};

const sizeClasses: Record<ButtonProps["size"] & string, string> = {
  sm: "px-3 py-1.5 text-xs rounded-md",
  md: "px-4 py-2 text-sm rounded-md",
  lg: "px-6 py-3 text-base rounded-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  active = false,
  iconLeft,
  iconRight,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const isIconOnly = variant === "iconToggle" || (!children && (iconLeft || iconRight));
  const sizeClass = isIconOnly ? "p-2 rounded-lg" : sizeClasses[size];

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClass,
        variant === "iconToggle" && active && "bg-[#1C2620] text-white border-[#1C2620] [&_svg]:text-white",
        variant === "iconToggle" && !active && "bg-[#E6E6E6] text-[#1C2620] hover:bg-[#E6E6E6]/80 [&_svg]:text-[#1C2620]",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} className="size-4 shrink-0" />}
      {children}
      {iconRight && <Icon name={iconRight} className="size-4 shrink-0" />}
    </button>
  );
}
