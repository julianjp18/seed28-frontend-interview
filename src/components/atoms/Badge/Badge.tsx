import { cn } from "@/lib/utils";
import type { BadgeProps } from "./Badge.types";

const variantClasses: Record<BadgeProps["variant"] & string, string> = {
  default: "bg-primary text-primary-foreground",
  success: "bg-green-600 text-white",
  secondary: "bg-muted text-muted-foreground",
  outline: "border border-border bg-transparent text-foreground",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
