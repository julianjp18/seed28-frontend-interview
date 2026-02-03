import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActiveFiltersSidebar } from "./ActiveFiltersSidebar";

const options = [
  { value: "all", label: "All" },
  { value: "own", label: "Own bulls" },
  { value: "catalog", label: "Catalog" },
  { value: "favorites", label: "Favorites" },
];

describe("ActiveFiltersSidebar", () => {
  it("renders title and subtitle", () => {
    render(<ActiveFiltersSidebar options={options} />);
    expect(screen.getByText("ACTIVE FILTERS")).toBeInTheDocument();
    expect(screen.getByText("Origin")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(<ActiveFiltersSidebar options={options} />);
    expect(screen.getByText("Own bulls")).toBeInTheDocument();
    expect(screen.getByText("Catalog")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("calls onOptionChange when option toggled", async () => {
    const onOptionChange = jest.fn();
    render(<ActiveFiltersSidebar options={options} onOptionChange={onOptionChange} />);
    await userEvent.click(screen.getByText("Own bulls"));
    expect(onOptionChange).toHaveBeenCalledWith("own", true);
  });
});
