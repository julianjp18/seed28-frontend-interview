import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import type { ScoreNumberProps } from "./ScoreNumber.types";

export function ScoreNumber({ value, className }: ScoreNumberProps) {
  const display = typeof value === "number" ? value.toFixed(1) : value;
  return (
    <Text
      variant="heading1"
      as="span"
      className={cn("tabular-nums font-bold text-foreground", className)}
    >
      {display}
    </Text>
  );
}
