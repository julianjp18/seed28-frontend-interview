"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import type { ResultsToolbarProps } from "./ResultsToolbar.types";

const toggleBtnBase =
  "flex h-10 w-[72px] items-center justify-center border-0 transition-colors";

export function ResultsToolbar({
  viewMode = "list",
  onViewModeChange,
  className,
}: ResultsToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-2", className)}>
      {onViewModeChange && (
        <div className="flex">
          <Button
            variant="iconToggle"
            active={viewMode === "list"}
            onClick={() => onViewModeChange("list")}
            iconLeft="list"
            aria-label="Vista lista"
            className={cn(toggleBtnBase, "rounded-l-lg rounded-r-none")}
          />
          <Button
            variant="iconToggle"
            active={viewMode === "grid"}
            onClick={() => onViewModeChange("grid")}
            iconLeft="grid"
            aria-label="Vista cuadrícula"
            className={cn(toggleBtnBase, "rounded-l-none rounded-r-lg")}
          />
        </div>
      )}
    </div>
  );
}
