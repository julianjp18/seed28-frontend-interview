import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterCheckboxItem } from "./FilterCheckboxItem";

describe("FilterCheckboxItem", () => {
  it("renders label", () => {
    render(<FilterCheckboxItem label="Toros propios" />);
    expect(screen.getByText("Toros propios")).toBeInTheDocument();
  });

  it("calls onChange when toggled", async () => {
    const onChange = jest.fn();
    render(<FilterCheckboxItem label="Catálogo" onChange={onChange} />);
    await userEvent.click(screen.getByText("Catálogo"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("respects checked state", () => {
    render(<FilterCheckboxItem label="Favoritos" checked onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
