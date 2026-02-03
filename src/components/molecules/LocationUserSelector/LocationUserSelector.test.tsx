import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocationUserSelector } from "./LocationUserSelector";

describe("LocationUserSelector", () => {
  it("renders location label", () => {
    render(<LocationUserSelector locationLabel="La soledad" />);
    expect(screen.getByText("La soledad")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = jest.fn();
    render(<LocationUserSelector locationLabel="La soledad" onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("shows chevron up when isOpen", () => {
    const { container } = render(
      <LocationUserSelector locationLabel="La soledad" isOpen />
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });
});
