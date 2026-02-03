export type IconName =
  | "checkmark"
  | "search"
  | "download"
  | "list"
  | "grid"
  | "info"
  | "eye"
  | "heart"
  | "heartFilled"
  | "location"
  | "chevronDown"
  | "chevronUp"
  | "arrowLeft"
  | "user"
  | "logoB";

export interface IconProps {
  name: IconName;
  className?: string;
  "aria-label"?: string;
}
