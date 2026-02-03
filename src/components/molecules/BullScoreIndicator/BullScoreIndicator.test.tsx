import { render, screen } from "@testing-library/react";
import { BullScoreIndicator } from "./BullScoreIndicator";

describe("BullScoreIndicator", () => {
  it("renders BULL SCORE label", () => {
    render(<BullScoreIndicator value={0.9} />);
    expect(screen.getByText("BULL SCORE")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <BullScoreIndicator
        value={0.9}
        description="Top 1% de facilidad de parto"
      />
    );
    expect(screen.getByText("Top 1% de facilidad de parto")).toBeInTheDocument();
  });

  it("renders progress bar", () => {
    render(<BullScoreIndicator value={0.5} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0.5");
  });
});
