import { cn } from "@/lib/utils";
import type { SkeletonProps } from "./Skeleton.types";

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      aria-hidden
    />
  );
}
