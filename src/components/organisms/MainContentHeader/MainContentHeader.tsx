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
      <>
        <strong>{resultsCountNumber}</strong> {resultsCountLabel}
      </>
    ) : (
      resultsCount
    );

  return (
    <div className={cn("space-y-4", className)}>
      {updatedAtLabel && <DataUpdatedAt label={updatedAtLabel} />}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <SectionHeader
          title={title}
          description={description}
          showInfoIcon={showInfoIcon}
          onInfoClick={onInfoClick}
        />
        {onExport && (
          <Button variant="secondary" iconRight="download" onClick={onExport} className="shrink-0">
            Exportar
          </Button>
        )}
      </div>
      {onCriteriaToggle && (
        <RankingCriteriaLabel
          expanded={criteriaExpanded}
          onToggle={onCriteriaToggle}
        />
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {(searchPlaceholder !== undefined || (resultsCountNode != null && !onViewModeChange)) && (
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            {searchPlaceholder !== undefined && (
              <SearchInputGroup
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={onSearchChange}
                rightLabel={onViewModeChange ? undefined : resultsCountNode}
                className="min-w-0 flex-1"
              />
            )}
            {searchPlaceholder === undefined && resultsCountNode != null && !onViewModeChange && (
              <span className="text-sm font-medium text-foreground">
                {resultsCountNode}
              </span>
            )}
          </div>
        )}
        {onViewModeChange && (
          <ResultsToolbar
            resultsCount={resultsCountNode ?? ""}
            viewMode={viewMode}
            onViewModeChange={onViewModeChange}
          />
        )}
      </div>
    </div>
  );
}
