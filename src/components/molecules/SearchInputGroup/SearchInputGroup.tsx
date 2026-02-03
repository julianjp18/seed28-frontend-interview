"use client";

import { cn } from "@/lib/utils";
import { Input, Text } from "@/components/atoms";
import type { SearchInputGroupProps } from "./SearchInputGroup.types";

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
        iconLeft="search"
        placeholder={placeholder}
        className="flex-1"
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
