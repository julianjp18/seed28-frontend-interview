import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Propio</Badge>);
    expect(screen.getByText("Propio")).toBeInTheDocument();
  });

  it("applies default variant", () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText("Tag")).toHaveClass("bg-primary", "text-primary-foreground");
  });

  it("applies success variant", () => {
    render(<Badge variant="success">Para vaquillona</Badge>);
    expect(screen.getByText("Para vaquillona")).toHaveClass("bg-green-600");
  });

  it("applies custom className", () => {
    render(<Badge className="ml-2">Extra</Badge>);
    expect(screen.getByText("Extra")).toHaveClass("ml-2");
  });
});
