"use client";

import { cn } from "@/lib/utils";
import { Avatar, Icon, Text } from "@/components/atoms";
import type { LocationUserSelectorProps } from "./LocationUserSelector.types";

const DEFAULT_AVATAR_SRC = "/Avatar.svg";

export function LocationUserSelector({
  locationLabel,
  avatarSrc,
  onClick,
  isOpen = false,
  className,
}: LocationUserSelectorProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex h-10 w-[170px] items-center justify-between gap-2 rounded-xl border border-[#36E27B]/80 bg-[#36E27B]/15 py-3 px-4 text-left text-[#36E27B] transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36E27B]/80"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Icon name="location" className="size-4 shrink-0 text-[#36E27B]" />
        <Text
          variant="label"
          color="accent"
          className="truncate text-center align-middle font-inter text-sm font-semibold"
        >
          {locationLabel}
        </Text>
        <Icon
          name={isOpen ? "chevronUp" : "chevronDown"}
          className="size-4 shrink-0 text-[#36E27B]"
        />
      </button>

      <span className="relative inline-block size-14 shrink-0">
        <Avatar
          src={avatarSrc ?? DEFAULT_AVATAR_SRC}
          alt="Usuario"
          className="size-14 rounded-full"
        />
        <span
          className="absolute bottom-0 right-0 size-4 rounded-full border-[2.5px] border-white bg-[#36E27B]"
          aria-hidden
        />
      </span>
    </div>
  );
}
