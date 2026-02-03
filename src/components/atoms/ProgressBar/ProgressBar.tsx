import { cn } from "@/lib/utils";
import type { ProgressBarProps } from "./ProgressBar.types";

export function ProgressBar({
  value,
  max = 1,
  className,
  trackClassName,
  fillClassName,
}: ProgressBarProps) {
  const percentage = max <= 0 ? 0 : Math.min(100, (value / max) * 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn("w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <div
        className={cn(
          "h-2 rounded-full bg-green-600 transition-[width]",
          fillClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
