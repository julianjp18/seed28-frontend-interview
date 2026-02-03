import { render, screen } from "@testing-library/react";
import { ProductiveFiltersSidebar } from "./ProductiveFiltersSidebar";

const dropdownOptions = [
  { value: "all", label: "All" },
  { value: "black", label: "Black" },
  { value: "red", label: "Red" },
];

describe("ProductiveFiltersSidebar", () => {
  it("renders title and toggle label", () => {
    render(
      <ProductiveFiltersSidebar
        toggleLabel="For heifer"
        dropdownLabel="Coat"
        dropdownValue="all"
        dropdownOptions={dropdownOptions}
      />
    );
    expect(screen.getByText("PRODUCTIVE FILTERS")).toBeInTheDocument();
    expect(screen.getByText("For heifer")).toBeInTheDocument();
  });

  it("renders dropdown with options", () => {
    render(
      <ProductiveFiltersSidebar
        toggleLabel="For heifer"
        dropdownLabel="Coat"
        dropdownValue="all"
        dropdownOptions={dropdownOptions}
      />
    );
    expect(screen.getByText("Coat")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("all");
  });
});
