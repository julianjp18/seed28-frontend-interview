import type { BullRadarChartDataPoint } from "@/components/molecules/BullRadarChart/BullRadarChart.types";
import type { BullTagItem } from "@/components/molecules/BullTags/BullTags.types";

export interface BullCardProps {
  /** Checkbox seleccionable (sin label). Si es true, siempre se muestra; si no se pasa, se muestra cuando existe onCheckboxChange. */
  showCheckbox?: boolean;
  checkboxChecked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
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
  /** Estado de carga del botón favorito (deshabilita y muestra "Guardando…") */
  favoriteLoading?: boolean;
  /** Mostrar gráfico radar (Recharts). Si es false no se renderiza. */
  showRadarChart?: boolean;
  /** Datos para el radar (5 criterios). Si no se pasa, el chart usa valores por defecto. */
  radarData?: BullRadarChartDataPoint[];
  className?: string;
}
