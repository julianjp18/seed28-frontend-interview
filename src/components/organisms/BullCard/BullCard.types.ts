import type { BullTagItem } from "@/components/molecules/BullTags/BullTags.types";

export interface BullCardProps {
  /** Rank display (e.g. "#1") */
  rank?: string | number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  subtitle: string;
  tags: BullTagItem[];
  /** Score 0–1 or 0–100 (use scoreMax to disambiguate) */
  scoreValue: number;
  scoreMax?: number;
  scoreDescription?: string;
  onViewDetails?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  /** Show radar chart placeholder (no real chart data for now) */
  showRadarPlaceholder?: boolean;
  className?: string;
}
