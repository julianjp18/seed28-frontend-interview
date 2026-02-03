import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Toros propios" />);
    expect(screen.getByText("Toros propios")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles when clicked", async () => {
    render(<Checkbox label="Option" />);
    const cb = screen.getByRole("checkbox");
    expect(cb).not.toBeChecked();
    await userEvent.click(screen.getByText("Option"));
    expect(cb).toBeChecked();
  });

  it("respects controlled checked", () => {
    render(<Checkbox label="Controlled" checked onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("applies square shape by default", () => {
    const { container } = render(<Checkbox />);
    const wrapper = container.querySelector("span.rounded");
    expect(wrapper).toBeInTheDocument();
  });

  it("applies circle shape", () => {
    const { container } = render(<Checkbox shape="circle" />);
    const wrapper = container.querySelector("span.rounded-full");
    expect(wrapper).toBeInTheDocument();
  });
});
