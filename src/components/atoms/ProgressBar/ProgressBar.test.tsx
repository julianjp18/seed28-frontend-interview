import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders with aria attributes", () => {
    render(<ProgressBar value={0.9} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "0.9");
    expect(bar).toHaveAttribute("aria-valuemax", "1");
  });

  it("uses max for percentage", () => {
    render(<ProgressBar value={50} max={100} />);
    const fill = document.querySelector("[style*='width']");
    expect(fill).toHaveStyle({ width: "50%" });
  });

  it("caps at 100%", () => {
    render(<ProgressBar value={2} max={1} />);
    const fill = document.querySelector("[style*='width']");
    expect(fill).toHaveStyle({ width: "100%" });
  });
});
