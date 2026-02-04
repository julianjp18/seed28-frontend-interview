"use client";

import { cn } from "@/lib/utils";
import { Input, Text } from "@/components/atoms";
import type { SearchInputGroupProps } from "./SearchInputGroup.types";

const searchInputClasses =
  "h-14 min-h-[56px] pl-6 pr-12 py-4 bg-white border-0 rounded-lg text-foreground placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder:leading-5 placeholder:text-[#2D2D2D] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function SearchInputGroup({
  placeholder = "Busca por caravana, nombre o cabaña",
  rightLabel,
  className,
  ...rest
}: SearchInputGroupProps) {
  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <Input
        type="search"
        iconRight="search"
        iconRightClassName="right-6"
        placeholder={placeholder}
        className={cn("flex-1", searchInputClasses)}
        {...rest}
      />
      {rightLabel && (
        <Text variant="label" className="shrink-0 text-foreground">
          {rightLabel}
        </Text>
      )}
    </div>
  );
}
