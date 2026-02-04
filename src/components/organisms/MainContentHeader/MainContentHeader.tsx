"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  DataUpdatedAt,
  SectionHeader,
  RankingCriteriaLabel,
  ResultsToolbar,
  SearchInputGroup,
} from "@/components/molecules";
import type { MainContentHeaderProps } from "./MainContentHeader.types";

export function MainContentHeader({
  updatedAtLabel,
  title,
  description,
  showInfoIcon = false,
  onInfoClick,
  criteriaExpanded = false,
  onCriteriaToggle,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  resultsCount,
  resultsCountNumber,
  resultsCountLabel,
  viewMode = "list",
  onViewModeChange,
  onExport,
  className,
}: MainContentHeaderProps) {
  const resultsCountNode =
    resultsCountNumber !== undefined && resultsCountLabel !== undefined ? (
      <span className="font-inter text-[20px] text-[#2D2D2D]">
        <span className="font-bold">{resultsCountNumber}</span>{" "}
        <span className="font-normal">{resultsCountLabel}</span>
      </span>
    ) : (
      resultsCount
    );

  return (
    <div className={cn("space-y-2", className)}>
      {updatedAtLabel && <DataUpdatedAt className="mb-4" label={updatedAtLabel} />}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
        <SectionHeader
          title={title}
          description={description}
          showInfoIcon={showInfoIcon}
          onInfoClick={onInfoClick}
        />
        {onExport && (
          <Button
            variant="primary"
            iconRight="download"
            onClick={onExport}
            className="h-8 w-[115px] shrink-0 rounded-lg py-2 px-3 text-center font-inter text-xs font-semibold"
          >
            Exportar
          </Button>
        )}
      </div>
      <RankingCriteriaLabel
        expanded={criteriaExpanded}
        onToggle={onCriteriaToggle}
      />
      <div className="flex min-h-[72px] sm:h-[88px] w-full flex-col gap-3 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-6 rounded-lg bg-[#F1F1F1] p-3 sm:p-4">
        {(searchPlaceholder !== undefined || (resultsCountNode != null && !onViewModeChange)) && (
          <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:max-w-[514px] justify-start">
            {searchPlaceholder !== undefined && (
              <SearchInputGroup
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={onSearchChange}
                rightLabel={onViewModeChange ? undefined : resultsCountNode}
                className="min-w-0 flex-1"
              />
            )}
            {resultsCountNode != null && (
              <span className="text-sm font-medium text-foreground">
                {resultsCountNode}
              </span>
            )}
          </div>
        )}
        {onViewModeChange && (
          <ResultsToolbar
            viewMode={viewMode}
            onViewModeChange={onViewModeChange}
          />
        )}
      </div>
    </div>
  );
}
