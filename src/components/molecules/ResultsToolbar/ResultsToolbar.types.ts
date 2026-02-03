export type ViewMode = "list" | "grid";

export interface ResultsToolbarProps {
  /** Texto contador (ej. "24 resultados") */
  resultsCount: string;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  onExport?: () => void;
  className?: string;
}
