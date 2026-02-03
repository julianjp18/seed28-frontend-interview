import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SortingSidebar } from "./SortingSidebar";

const options = [
  { value: "score-desc", label: "Score best to worst" },
  { value: "score-asc", label: "Score worst to best" },
];

describe("SortingSidebar", () => {
  it("renders title", () => {
    render(<SortingSidebar value="score-desc" options={options} />);
    expect(screen.getByText("SORTING")).toBeInTheDocument();
  });

  it("renders dropdown with value", () => {
    render(<SortingSidebar value="score-desc" options={options} />);
    expect(screen.getByRole("combobox")).toHaveValue("score-desc");
  });

  it("calls onChange when selection changes", async () => {
    const onChange = jest.fn();
    render(<SortingSidebar value="score-desc" options={options} onChange={onChange} />);
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "score-asc");
    expect(onChange).toHaveBeenCalledWith("score-asc");
  });
});
