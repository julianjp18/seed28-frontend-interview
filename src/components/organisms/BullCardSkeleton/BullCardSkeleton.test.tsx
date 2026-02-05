import { render, screen } from "@testing-library/react";
import { BullCardSkeleton } from "./BullCardSkeleton";

describe("BullCardSkeleton", () => {
  it("renders without crashing", () => {
    render(<BullCardSkeleton />);
    const article = screen.getByRole("article", { hidden: true });
    expect(article).toBeInTheDocument();
  });

  it("has aria-hidden for accessibility", () => {
    render(<BullCardSkeleton />);
    const article = screen.getByRole("article", { hidden: true });
    expect(article).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    render(<BullCardSkeleton className="custom-skeleton" />);
    const article = screen.getByRole("article", { hidden: true });
    expect(article).toHaveClass("custom-skeleton");
  });

  it("renders with article element", () => {
    render(<BullCardSkeleton />);
    const article = screen.getByRole("article", { hidden: true });
    expect(article.tagName).toBe("ARTICLE");
  });
});
