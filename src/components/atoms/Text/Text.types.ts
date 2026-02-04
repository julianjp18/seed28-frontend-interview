import type { CSSProperties, ReactNode } from "react";

export type TextVariant =
  | "heading1"
  | "heading2"
  | "heading4"
  | "label"
  | "body"
  | "caption"
  | "button";

export type TextColor =
  | "default"
  | "muted"
  | "inverse"
  | "primary"
  | "accent"   // #36E27B
  | "dark"    // #2D2D2D
  | "white";

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  uppercase?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
}
