export type ViewMode = "list" | "grid";

export interface ResultsToolbarProps {
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  className?: string;
}
