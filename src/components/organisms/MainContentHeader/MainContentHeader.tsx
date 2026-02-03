"use client";

import { cn } from "@/lib/utils";
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
  viewMode = "list",
  onViewModeChange,
  onExport,
  className,
}: MainContentHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {updatedAtLabel && <DataUpdatedAt label={updatedAtLabel} />}
      <SectionHeader
        title={title}
        description={description}
        showInfoIcon={showInfoIcon}
        onInfoClick={onInfoClick}
      />
      {onCriteriaToggle && (
        <RankingCriteriaLabel
          expanded={criteriaExpanded}
          onToggle={onCriteriaToggle}
        />
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {(searchPlaceholder !== undefined || resultsCount !== undefined) && (
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            {searchPlaceholder !== undefined && (
              <SearchInputGroup
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={onSearchChange}
                rightLabel={resultsCount}
                className="min-w-0 flex-1"
              />
            )}
            {searchPlaceholder === undefined && resultsCount && (
              <span className="text-sm font-medium text-foreground">{resultsCount}</span>
            )}
          </div>
        )}
        {(onViewModeChange || onExport) && (
          <ResultsToolbar
            resultsCount={resultsCount ?? ""}
            viewMode={viewMode}
            onViewModeChange={onViewModeChange}
            onExport={onExport}
          />
        )}
      </div>
    </div>
  );
}
