"use client";

import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { RankingCriteriaLabelProps } from "./RankingCriteriaLabel.types";

export function RankingCriteriaLabel({
  expanded = false,
  onToggle,
  className,
}: RankingCriteriaLabelProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2 text-left transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      aria-expanded={expanded}
    >
      <div className="flex items-center gap-2">
        <Icon name="info" className="size-4 shrink-0 text-muted-foreground" />
        <Text variant="label" className="text-foreground">
          Criterios del ranking
        </Text>
      </div>
      <Icon
        name={expanded ? "chevronUp" : "chevronDown"}
        className="size-4 shrink-0 text-muted-foreground"
      />
    </button>
  );
}
