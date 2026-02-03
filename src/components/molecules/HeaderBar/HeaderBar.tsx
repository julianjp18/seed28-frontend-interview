"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import type { HeaderBarProps } from "./HeaderBar.types";

export function HeaderBar({ title = "Bulltrack", className }: HeaderBarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="flex size-10 flex-col items-center justify-center gap-2.5 rounded-[24px] bg-[#36E27B] p-[10px_14px]"
        aria-hidden
      >
        <span className="text-lg font-semibold leading-5 tracking-normal text-[#393939] [font-family:var(--font-inter)] pt-0.5 pl-0.5">
        B
      </span>
      </div>
      <Text
        variant="heading2"
        as="span"
        className="text-lg font-semibold leading-5 tracking-normal text-white [font-family:var(--font-inter)]"
      >
        {title}
      </Text>
    </div>
  );
}
