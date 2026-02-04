"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/atoms";

export function BullCardSkeleton({ className }: { className?: string }) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-4 rounded-3xl bg-white p-4",
        "md:min-h-[192px] md:flex-row md:items-center md:gap-6 md:p-6",
        className
      )}
      aria-hidden
    >
      <div className="flex min-w-0 flex-1 shrink-0 items-start gap-3 md:items-center">
        <Skeleton className="size-8 shrink-0 rounded md:size-10" />
        <Skeleton className="h-8 w-12 shrink-0 rounded-lg" />
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Skeleton className="h-16 w-20 shrink-0 rounded-lg md:h-[72px] md:w-[83px]" />
          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <Skeleton className="hidden h-12 w-px shrink-0 self-stretch md:block" />
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-12 rounded" />
        </div>
        <Skeleton className="hidden size-20 rounded-full md:block sm:size-24" />
        <div className="flex shrink-0 gap-2 md:ml-auto">
          <Skeleton className="size-10 rounded-lg" />
          <Skeleton className="size-10 rounded-lg" />
        </div>
      </div>
      <Skeleton className="hidden h-12 w-px shrink-0 self-stretch md:block" />
      <div className="hidden shrink-0 gap-2 md:flex">
        <Skeleton className="size-10 rounded-lg" />
        <Skeleton className="size-10 rounded-lg" />
      </div>
    </article>
  );
}
