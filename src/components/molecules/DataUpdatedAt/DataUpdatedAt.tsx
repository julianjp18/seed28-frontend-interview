import { Text } from "@/components/atoms";
import type { DataUpdatedAtProps } from "./DataUpdatedAt.types";

export function DataUpdatedAt({ label, className }: DataUpdatedAtProps) {
  return (
    <Text variant="caption" color="muted" as="span" className={className}>
      {label}
    </Text>
  );
}
