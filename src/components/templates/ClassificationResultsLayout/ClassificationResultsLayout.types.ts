import type { ReactNode } from "react";

export interface ClassificationResultsLayoutProps {
  /** Top bar left (e.g. HeaderBar) */
  topBarLeft?: ReactNode;
  /** Top bar right (e.g. LocationUserSelector) */
  topBarRight?: ReactNode;
  /** Left sidebar content (filters + objective) */
  sidebar?: ReactNode;
  /** Main area header (e.g. MainContentHeader) */
  mainHeader?: ReactNode;
  /** Main area content (e.g. list of BullCards) */
  children?: ReactNode;
  className?: string;
}
