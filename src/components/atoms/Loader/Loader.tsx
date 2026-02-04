"use client";

import { cn } from "@/lib/utils";
import type { LoaderProps } from "./Loader.types";

const sizeClasses = {
  sm: "size-6 border-2",
  md: "size-10 border-2",
  lg: "size-14 border-[3px]",
};

export function Loader({ size = "md", className }: LoaderProps) {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className={cn(
        "animate-spin rounded-full border-muted-foreground/30 border-t-muted-foreground",
        sizeClasses[size],
        className
      )}
    />
  );
}
