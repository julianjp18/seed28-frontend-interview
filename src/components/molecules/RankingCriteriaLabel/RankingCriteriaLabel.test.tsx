import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RankingCriteriaLabel } from "./RankingCriteriaLabel";

describe("RankingCriteriaLabel", () => {
  it("renders label", () => {
    render(<RankingCriteriaLabel />);
    expect(screen.getByText("Criterios del ranking")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", async () => {
    const onToggle = jest.fn();
    render(<RankingCriteriaLabel onToggle={onToggle} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onToggle).toHaveBeenCalled();
  });

  it("sets aria-expanded when expanded", () => {
    render(<RankingCriteriaLabel expanded />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });
});
