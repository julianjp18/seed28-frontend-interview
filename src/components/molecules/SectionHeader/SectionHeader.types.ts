import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  description?: ReactNode;
  /** Mostrar ícono de información */
  showInfoIcon?: boolean;
  onInfoClick?: () => void;
  className?: string;
}
