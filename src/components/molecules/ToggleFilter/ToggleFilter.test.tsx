import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToggleFilter } from "./ToggleFilter";

describe("ToggleFilter", () => {
  it("renders label", () => {
    render(<ToggleFilter label="Para vaquillona" />);
    expect(screen.getByText("Para vaquillona")).toBeInTheDocument();
  });

  it("renders subLabel when provided", () => {
    render(<ToggleFilter label="Para vaquillona" subLabel="Facilidad de parto" />);
    expect(screen.getByText("Facilidad de parto")).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    const onChange = jest.fn();
    render(<ToggleFilter label="Toggle" onChange={onChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("reflects checked state", () => {
    render(<ToggleFilter label="On" checked aria-label="On" />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });
});
