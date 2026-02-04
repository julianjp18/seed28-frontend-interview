import { cn } from "@/lib/utils";
import type { TextProps } from "./Text.types";

const variantClasses: Record<TextProps["variant"] & string, string> = {
  heading1: "text-2xl font-bold tracking-tight",
  heading2: "text-xl font-semibold",
  heading4: "text-sm font-semibold uppercase tracking-wide",
  label: "text-sm font-medium",
  body: "text-base font-normal",
  caption: "text-sm font-normal text-muted-foreground",
  button: "text-sm font-medium",
};

const colorClasses: Record<TextProps["color"] & string, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  inverse: "text-primary-foreground",
  primary: "text-primary",
  accent: "text-[#36E27B]",
  dark: "text-[#2D2D2D]",
  white: "text-white",
};

export function Text({
  children,
  variant = "body",
  color = "default",
  uppercase = false,
  className,
  style,
  as: Component = "span",
}: TextProps) {
  return (
    <Component
      className={cn(
        variantClasses[variant],
        colorClasses[color],
        uppercase && "uppercase",
        className
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
