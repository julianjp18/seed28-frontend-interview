import { cn } from "@/lib/utils";
import type { DividerProps } from "./Divider.types";

export function Divider({
  orientation = "horizontal",
  width,
  color,
  className,
}: DividerProps) {
  const style =
    width || color
      ? {
          ...(width &&
            (orientation === "horizontal"
              ? { borderTopWidth: width }
              : { borderLeftWidth: width })),
          ...(color && { borderColor: color }),
        }
      : undefined;

  return (
    <hr
      role="separator"
      className={cn(
        "shrink-0 border-transparent",
        orientation === "horizontal" && "w-full border-t",
        orientation === "vertical" && "h-full border-l border-t-0",
        !width && !color && "border-border",
        className
      )}
      style={style}
    />
  );
}
