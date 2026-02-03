import { render, screen } from "@testing-library/react";
import { ScoreNumber } from "./ScoreNumber";

describe("ScoreNumber", () => {
  it("renders number formatted to one decimal", () => {
    render(<ScoreNumber value={0.9} />);
    expect(screen.getByText("0.9")).toBeInTheDocument();
  });

  it("renders string as-is", () => {
    render(<ScoreNumber value="0.85" />);
    expect(screen.getByText("0.85")).toBeInTheDocument();
  });
});
