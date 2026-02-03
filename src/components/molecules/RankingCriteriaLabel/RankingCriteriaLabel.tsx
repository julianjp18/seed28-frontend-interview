"use client";

import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { RankingCriteriaLabelProps } from "./RankingCriteriaLabel.types";

export function RankingCriteriaLabel({
  expanded = false,
  onToggle,
  className,
}: RankingCriteriaLabelProps) {
  const iconClassName = "shrink-0 text-[#2D2D2D] [&_svg]:stroke-[1.5]";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex h-14 w-full items-center justify-between gap-2 rounded-lg bg-[#F1F1F1] px-3 py-2 text-left transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      aria-expanded={expanded}
    >
      <div className="flex items-center gap-2">
        <Icon name="info" className={cn("size-5", iconClassName)} />
        <Text
          as="span"
          variant="label"
          className="font-inter text-base font-bold! leading-5 text-[#2D2D2D]"
        >
          Criterios del ranking
        </Text>
      </div>
      <Icon
        name={expanded ? "chevronUp" : "chevronDown"}
        className={cn("size-4", iconClassName)}
      />
    </button>
  );
}
