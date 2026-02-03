import type { ReactNode } from "react";

export type ViewMode = "list" | "grid";

export interface ResultsToolbarProps {
  /** Texto contador (ej. "24 resultados" o <><strong>24</strong> resultados</>) */
  resultsCount: ReactNode;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  className?: string;
}
