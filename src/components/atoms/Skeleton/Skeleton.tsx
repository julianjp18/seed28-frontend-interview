import { cn } from "@/lib/utils";
import type { SkeletonProps } from "./Skeleton.types";

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("rounded-md bg-muted skeleton-pulse", className)}
      aria-hidden
    />
  );
}
