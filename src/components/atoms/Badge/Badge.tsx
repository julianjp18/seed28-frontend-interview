import { cn } from "@/lib/utils";
import type { BadgeProps } from "./Badge.types";

const baseClasses =
  "h-6 w-auto inline-flex items-center justify-center rounded-lg border-[1.5px] py-1.5 px-2 text-xs font-medium";

const variantClasses: Record<BadgeProps["variant"] & string, string> = {
  default: "bg-[#EDEFFF] border-[#8A96F4] text-[#8A96F4]",
  success: "bg-[#ECF8EF] border-[#36E27B] text-[#36E27B]",
  secondary: "bg-muted border-border text-muted-foreground",
  outline: "bg-transparent border-border text-foreground",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </span>
  );
}
