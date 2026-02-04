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
      className={cn("w-full overflow-hidden rounded-lg bg-[#F1F1F1]", trackClassName, className)}
    >
      <div
        className={cn(
          "h-[8.5px] rounded-lg bg-[#36E27B] transition-[width]",
          fillClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
