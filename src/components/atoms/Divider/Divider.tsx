import { cn } from "@/lib/utils";
import type { DividerProps } from "./Divider.types";

export function Divider({
  orientation = "horizontal",
  className,
}: DividerProps) {
  return (
    <hr
      role="separator"
      className={cn(
        "border-border shrink-0",
        orientation === "horizontal" && "w-full border-t",
        orientation === "vertical" && "h-full border-l border-t-0",
        className
      )}
    />
  );
}
