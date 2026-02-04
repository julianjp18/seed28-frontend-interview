"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import type { HeaderBarProps } from "./HeaderBar.types";

export function HeaderBar({ title = "Bulltrack", className }: HeaderBarProps) {
  return (
    <div className={cn("flex min-w-0 shrink items-center gap-1.5 sm:gap-2", className)}>
      <div
        className="flex size-8 shrink-0 flex-col items-center justify-center rounded-xl bg-[#36E27B] sm:size-10 sm:rounded-[24px] sm:p-[10px_14px]"
        aria-hidden
      >
        <span className="font-inter text-sm font-semibold leading-none tracking-normal text-[#393939] sm:text-lg sm:leading-5 sm:pt-0.5 sm:pl-0.5">
          B
        </span>
      </div>
      <Text
        variant="heading2"
        as="span"
        className="font-inter min-w-0 truncate text-base font-semibold leading-5 tracking-normal text-white sm:text-lg"
      >
        {title}
      </Text>
    </div>
  );
}
