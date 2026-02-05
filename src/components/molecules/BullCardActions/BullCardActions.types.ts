export interface BullCardActionsProps {
  variant?: "list" | "grid";
  onViewDetails?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  /** Shows loading state in the favorite button (disabled) */
  favoriteLoading?: boolean;
  className?: string;
}
