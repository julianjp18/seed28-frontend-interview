import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterDropdown } from "./FilterDropdown";

const options = [
  { value: "all", label: "Todos" },
  { value: "negro", label: "Negro" },
  { value: "colorado", label: "Colorado" },
];

describe("FilterDropdown", () => {
  it("renders label and value", () => {
    render(<FilterDropdown label="Pelaje" value="all" options={options} />);
    expect(screen.getByText("Pelaje")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("all");
  });

  it("calls onChange when selection changes", async () => {
    const onChange = jest.fn();
    render(<FilterDropdown label="Pelaje" value="all" options={options} onChange={onChange} />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "negro");
    expect(onChange).toHaveBeenCalledWith("negro");
  });

  it("shows all options", () => {
    render(<FilterDropdown label="Ordenamiento" value="score-desc" options={[{ value: "score-desc", label: "Score mejor a peor" }]} />);
    expect(screen.getByRole("option", { name: "Score mejor a peor" })).toBeInTheDocument();
  });
});
