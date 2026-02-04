"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { RankingCriteriaLabelProps } from "./RankingCriteriaLabel.types";

const CRITERIA_DESCRIPTION =
  "El ranking ordena los toros según los criterios productivos y de pedigree que definiste. Se tienen en cuenta filtros como origen, condición productiva y pelaje, junto con el peso asignado a cada criterio en tu objetivo de selección. Así puedes comparar y elegir los ejemplares que mejor se ajustan a tu cabaña.";

export function RankingCriteriaLabel({
  expanded: expandedProp = false,
  onToggle,
  className,
}: RankingCriteriaLabelProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = onToggle !== undefined;
  const expanded = isControlled ? expandedProp : internalExpanded;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  const iconClassName = "shrink-0 text-[#2D2D2D] [&_svg]:stroke-[1.5]";

  return (
    <div className={cn("flex flex-col gap-0", className)}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex h-14 w-full items-center justify-between gap-2 rounded-lg bg-[#F1F1F1] px-3 py-2 text-left transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          expanded && "rounded-b-none"
        )}
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-2">
          <Icon name="info" className={cn("size-5", iconClassName)} />
          <Text
            as="span"
            variant="body"
            color="dark"
            className="font-inter text-base font-bold leading-5"
            style={{ fontSize: 16, lineHeight: 20, fontWeight: 700 }}
          >
            Criterios del ranking
          </Text>
        </div>
        <Icon
          name={expanded ? "chevronUp" : "chevronDown"}
          className={cn("size-4", iconClassName)}
        />
      </button>
      {expanded && (
        <div className="rounded-b-lg border border-t-0 border-[#E5E5E5] bg-[#FAFAFA] px-3 py-4">
          <Text
            variant="body"
            color="dark"
            as="p"
            className="font-inter text-sm font-normal leading-5"
          >
            {CRITERIA_DESCRIPTION}
          </Text>
        </div>
      )}
    </div>
  );
}
