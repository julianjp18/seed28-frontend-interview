"use client";

import { cn } from "@/lib/utils";
import { Button, Text } from "@/components/atoms";
import type { ResultsToolbarProps } from "./ResultsToolbar.types";

export function ResultsToolbar({
  resultsCount,
  viewMode = "list",
  onViewModeChange,
  className,
}: ResultsToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-2", className)}>
      <Text variant="label" className="text-foreground">
        {resultsCount}
      </Text>
      <div className="flex items-center gap-2">
        {onViewModeChange && (
          <>
            <Button
              variant="iconToggle"
              active={viewMode === "list"}
              onClick={() => onViewModeChange("list")}
              iconLeft="list"
              aria-label="Vista lista"
            />
            <Button
              variant="iconToggle"
              active={viewMode === "grid"}
              onClick={() => onViewModeChange("grid")}
              iconLeft="grid"
              aria-label="Vista cuadrícula"
            />
          </>
        )}
      </div>
    </div>
  );
}
