import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Busca por caravana" />);
    expect(screen.getByPlaceholderText("Busca por caravana")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    await userEvent.type(screen.getByRole("textbox"), "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("shows error state", () => {
    render(<Input error placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveClass("border-red-500");
  });

  it("renders with left icon", () => {
    const { container } = render(<Input iconLeft="search" placeholder="Search" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toHaveClass("pl-10");
  });
});
