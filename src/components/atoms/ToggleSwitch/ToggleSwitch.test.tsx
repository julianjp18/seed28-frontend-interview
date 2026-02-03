import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToggleSwitch } from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  it("renders unchecked by default", () => {
    render(<ToggleSwitch aria-label="Toggle" />);
    expect(screen.getByRole("switch", { name: "Toggle" })).toHaveAttribute("aria-checked", "false");
  });

  it("toggles on click", async () => {
    const onChange = jest.fn();
    render(<ToggleSwitch onChange={onChange} aria-label="Toggle" />);
    await userEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("respects controlled checked", () => {
    render(<ToggleSwitch checked aria-label="On" />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("is disabled when disabled prop is true", () => {
    render(<ToggleSwitch disabled aria-label="Disabled" />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });
});
