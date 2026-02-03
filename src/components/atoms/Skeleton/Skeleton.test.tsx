import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders", () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector(".animate-pulse");
    expect(el).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(<Skeleton className="h-8 w-24" />);
    const el = container.querySelector(".animate-pulse");
    expect(el).toHaveClass("h-8", "w-24");
  });

  it("has aria-hidden", () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild;
    expect(el).toHaveAttribute("aria-hidden", "true");
  });
});
