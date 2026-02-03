import type { ReactNode } from "react";

export type BadgeVariant = "default" | "success" | "secondary" | "outline";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}
