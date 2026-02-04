"use client";

import { cn } from "@/lib/utils";
import { Icon } from "../Icon/Icon";
import type { InputProps } from "./Input.types";

export function Input({
  error = false,
  iconLeft,
  iconRight,
  iconRightClassName,
  className,
  id,
  ...rest
}: InputProps) {
  return (
    <span className="relative inline-flex w-full">
      {iconLeft && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Icon name={iconLeft} className="size-5" />
        </span>
      )}
      {iconRight && (
        <span
          className={cn(
            "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
            iconRightClassName
          )}
        >
          <Icon name={iconRight} className="size-5" />
        </span>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500 focus-visible:ring-red-500",
          iconLeft && "pl-10",
          iconRight && "pr-10",
          className
        )}
        {...rest}
      />
    </span>
  );
}
