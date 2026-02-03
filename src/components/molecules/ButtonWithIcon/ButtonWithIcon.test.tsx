import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonWithIcon } from "./ButtonWithIcon";

describe("ButtonWithIcon", () => {
  it("renders label", () => {
    render(<ButtonWithIcon>Editar criterios</ButtonWithIcon>);
    expect(screen.getByRole("button", { name: /editar criterios/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = jest.fn();
    render(<ButtonWithIcon onClick={onClick}>Editar</ButtonWithIcon>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
