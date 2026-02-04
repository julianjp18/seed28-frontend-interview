import { cn } from "@/lib/utils";
import { ProgressBar, Text } from "@/components/atoms";
import { ScoreNumber } from "../ScoreNumber/ScoreNumber";
import type { BullScoreIndicatorProps } from "./BullScoreIndicator.types";

export function BullScoreIndicator({
  value,
  max = 1,
  description,
  showScoreNumber = false,
  className,
}: BullScoreIndicatorProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1 flex-1", className)}>
      <div className="flex items-center justify-between gap-2">
        <Text
          variant="label"
          className="text-xs font-medium uppercase tracking-wide text-[#2D2D2D]"
        >
          BULL SCORE
        </Text>
        {showScoreNumber && (
          <ScoreNumber
            value={value}
            className="shrink-0 font-inter text-2xl font-bold text-[#2D2D2D]"
          />
        )}
      </div>
      <ProgressBar
        value={value}
        max={max}
        className="w-full"
      />
      {description && (
        <Text variant="caption" className="text-[#2D2D2D]!">
          {description}
        </Text>
      )}
    </div>
  );
}
