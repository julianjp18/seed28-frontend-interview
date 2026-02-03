import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInputGroup } from "./SearchInputGroup";

describe("SearchInputGroup", () => {
  it("renders with default placeholder", () => {
    render(<SearchInputGroup />);
    expect(screen.getByPlaceholderText("Busca por caravana, nombre o cabaña")).toBeInTheDocument();
  });

  it("renders rightLabel", () => {
    render(<SearchInputGroup rightLabel="24 resultados" />);
    expect(screen.getByText("24 resultados")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const onChange = jest.fn();
    render(<SearchInputGroup onChange={onChange} />);
    await userEvent.type(screen.getByRole("searchbox"), "992");
    expect(onChange).toHaveBeenCalled();
  });
});
