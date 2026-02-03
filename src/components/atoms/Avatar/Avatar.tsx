"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon/Icon";
import type { AvatarProps } from "./Avatar.types";

export function Avatar({
  src,
  alt = "",
  showStatus = false,
  className,
}: AvatarProps) {
  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="rounded-full object-cover size-full"
        />
      ) : (
        <span
          className="flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground"
          aria-hidden
        >
          <Icon name="user" className="size-1/2" />
        </span>
      )}
      {showStatus && (
        <span
          className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-green-500"
          aria-hidden
        />
      )}
    </span>
  );
}
