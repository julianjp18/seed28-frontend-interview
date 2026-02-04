"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Avatar, Icon, Text } from "@/components/atoms";
import type { LocationUserSelectorProps } from "./LocationUserSelector.types";

const DEFAULT_AVATAR_SRC = "/Avatar.svg";

export function LocationUserSelector({
  locationLabel,
  avatarSrc,
  onClick,
  isOpen: isOpenControlled,
  onLogout,
  className,
}: LocationUserSelectorProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = isOpenControlled !== undefined;
  const isOpen = isControlled ? isOpenControlled : menuOpen;

  const handleButtonClick = () => {
    if (isControlled) {
      onClick?.();
    } else {
      setMenuOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!isOpen || isControlled) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isControlled]);

  const handleLogout = () => {
    if (!isControlled) setMenuOpen(false);
    onLogout?.();
  };

  return (
    <div ref={containerRef} className={cn("relative flex items-center gap-2 sm:gap-6", className)}>
      <div className="relative">
        <button
          type="button"
          onClick={handleButtonClick}
          className={cn(
            "flex h-9 min-w-0 max-w-[130px] items-center justify-between gap-1 rounded-lg border border-[#36E27B]/80 bg-[#36E27B]/15 py-2 px-2.5 text-left text-[#36E27B] transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36E27B]/80 sm:h-10 sm:max-w-none sm:w-[170px] sm:rounded-xl sm:gap-2 sm:py-3 sm:px-4"
          )}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <Icon name="location" className="size-3.5 shrink-0 text-[#36E27B] sm:size-4" />
          <Text
            variant="label"
            color="accent"
            className="min-w-0 truncate text-center align-middle font-inter text-xs font-semibold sm:text-sm"
          >
            {locationLabel}
          </Text>
          <Icon
            name={isOpen ? "chevronUp" : "chevronDown"}
            className="size-3.5 shrink-0 text-[#36E27B] sm:size-4"
          />
        </button>

        {isOpen && (
          <div
            role="menu"
            className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-white/20 bg-[#1a211c] py-1 shadow-lg"
          >
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left font-inter text-sm text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none"
            >
              <Icon name="logout" className="size-4 shrink-0 text-[#36E27B]" />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>

      <span className="relative inline-block size-10 shrink-0 sm:size-14">
        <Avatar
          src={avatarSrc ?? DEFAULT_AVATAR_SRC}
          alt="Usuario"
          className="size-10 rounded-full sm:size-14"
        />
        <span
          className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[#36E27B] sm:size-4 sm:border-[2.5px]"
          aria-hidden
        />
      </span>
    </div>
  );
}
