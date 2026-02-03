import type { ReactNode } from "react";

export type ViewMode = "list" | "grid";

export interface MainContentHeaderProps {
  /** Timestamp text (e.g. "Data updated 2 min ago") */
  updatedAtLabel?: string;
  /** Main title (e.g. "Classification results") */
  title: string;
  /** Subtitle / description */
  description?: ReactNode;
  showInfoIcon?: boolean;
  onInfoClick?: () => void;
  /** Ranking criteria expanded state */
  criteriaExpanded?: boolean;
  onCriteriaToggle?: () => void;
  /** Search placeholder */
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Results count (e.g. "24 results") */
  resultsCount?: string;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  onExport?: () => void;
  className?: string;
}
