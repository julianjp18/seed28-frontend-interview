export type BadgeVariant = "default" | "success" | "secondary" | "outline";

export interface BullTagItem {
  label: string;
  variant?: BadgeVariant;
}

export interface BullTagsProps {
  tags: BullTagItem[];
  className?: string;
}
