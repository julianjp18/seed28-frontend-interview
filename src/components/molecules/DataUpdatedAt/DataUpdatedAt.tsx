import { cn } from "@/lib/utils";
import { Icon, Text } from "@/components/atoms";
import type { DataUpdatedAtProps } from "./DataUpdatedAt.types";

export function DataUpdatedAt({ label, className }: DataUpdatedAtProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      role="status"
    >
      <Icon name="cloudSync" className="size-4 shrink-0 text-[#2D2D2D]" />
      <Text
        as="span"
        variant="body"
        className="font-inter text-sm font-normal leading-5 text-[#2D2D2D]"
      >
        {label}
      </Text>
    </span>
  );
}
