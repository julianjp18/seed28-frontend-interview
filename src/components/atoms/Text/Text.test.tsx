import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders as specified element", () => {
    render(<Text as="h1">Title</Text>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title");
  });

  it("applies heading1 variant", () => {
    render(<Text variant="heading1">Title</Text>);
    const el = screen.getByText("Title");
    expect(el).toHaveClass("text-2xl", "font-bold");
  });

  it("applies caption and muted color", () => {
    render(<Text variant="caption" color="muted">Caption</Text>);
    const el = screen.getByText("Caption");
    expect(el).toHaveClass("text-muted-foreground");
  });

  it("applies custom className", () => {
    render(<Text className="custom">Hi</Text>);
    expect(screen.getByText("Hi")).toHaveClass("custom");
  });
});
