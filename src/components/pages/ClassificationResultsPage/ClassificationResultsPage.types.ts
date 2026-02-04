import type { ReactNode } from "react";
import type { OriginFilterOption } from "@/components/organisms/ActiveFiltersSidebar/ActiveFiltersSidebar.types";
import type { SortOption } from "@/components/organisms/SortingSidebar/SortingSidebar.types";
import type { ViewMode } from "@/components/organisms/MainContentHeader/MainContentHeader.types";

export interface ClassificationResultsPageProps {
  // Top bar
  headerTitle?: string;
  locationLabel: string;
  locationAvatarSrc?: string | null;
  onLocationClick?: () => void;
  locationOpen?: boolean;
  onLogout?: () => void;

  // Sidebar: active filters (origin)
  originOptions: OriginFilterOption[];
  onOriginOptionChange?: (value: string, checked: boolean) => void;

  // Sidebar: productive filters
  productiveToggleLabel: string;
  productiveToggleSubLabel?: string;
  productiveToggleChecked?: boolean;
  onProductiveToggleChange?: (checked: boolean) => void;
  coatDropdownLabel: string;
  coatDropdownValue: string;
  coatDropdownOptions: { value: string; label: string }[];
  onCoatDropdownChange?: (value: string) => void;

  // Sidebar: sorting
  sortValue: string;
  sortOptions: SortOption[];
  onSortChange?: (value: string) => void;

  // Sidebar: objective
  objectiveDescription: string;
  onEditObjectiveClick?: () => void;
  editObjectiveButtonLabel?: string;

  // Main header
  updatedAtLabel?: string;
  mainTitle: string;
  mainDescription?: ReactNode;
  mainShowInfoIcon?: boolean;
  onMainInfoClick?: () => void;
  criteriaExpanded?: boolean;
  onCriteriaToggle?: () => void;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Contador en formato texto (ej. "24 resultados"). Si usas resultsCountNumber + resultsCountLabel se ignora. */
  resultsCount?: string;
  /** Número del contador (se muestra en negrita) */
  resultsCountNumber?: number | string;
  /** Etiqueta del contador (ej. "resultados") */
  resultsCountLabel?: string;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  onExport?: () => void;

  // Main content (list of BullCards or custom content)
  children?: ReactNode;

  className?: string;
}
