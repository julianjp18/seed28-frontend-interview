"use client";

import { cn } from "@/lib/utils";
import { Avatar, Icon, Text } from "@/components/atoms";
import type { LocationUserSelectorProps } from "./LocationUserSelector.types";

export function LocationUserSelector({
  locationLabel,
  avatarSrc,
  onClick,
  isOpen = false,
  className,
}: LocationUserSelectorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-left transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <Icon name="location" className="size-4 shrink-0 text-foreground" />
      <Text variant="label" className="truncate text-foreground">
        {locationLabel}
      </Text>
      <Icon
        name={isOpen ? "chevronUp" : "chevronDown"}
        className="size-4 shrink-0 text-muted-foreground"
      />
      <Avatar src={avatarSrc ?? undefined} alt="Usuario" className="size-8 shrink-0" showStatus />
    </button>
  );
}
