import { cn } from "@/lib/utils";
import { ProgressBar, Text } from "@/components/atoms";
import type { BullScoreIndicatorProps } from "./BullScoreIndicator.types";

export function BullScoreIndicator({
  value,
  max = 1,
  description,
  className,
}: BullScoreIndicatorProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <Text variant="label" className="text-xs uppercase tracking-wide text-foreground">
        BULL SCORE
      </Text>
      <ProgressBar value={value} max={max} />
      {description && (
        <Text variant="caption" color="muted">
          {description}
        </Text>
      )}
    </div>
  );
}
