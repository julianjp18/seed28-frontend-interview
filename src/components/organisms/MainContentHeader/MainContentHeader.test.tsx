import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MainContentHeader } from "./MainContentHeader";

describe("MainContentHeader", () => {
  it("renders title and description", () => {
    render(
      <MainContentHeader
        title="Classification results"
        description="Results are ordered by Bulltrack Score."
      />
    );
    expect(screen.getByRole("heading", { name: /classification results/i })).toBeInTheDocument();
    expect(screen.getByText(/Results are ordered/)).toBeInTheDocument();
  });

  it("renders updated at label when provided", () => {
    render(
      <MainContentHeader
        title="Results"
        updatedAtLabel="Data updated 2 min ago"
      />
    );
    expect(screen.getByText("Data updated 2 min ago")).toBeInTheDocument();
  });

  it("renders ranking criteria button when onCriteriaToggle provided", () => {
    render(
      <MainContentHeader title="Results" onCriteriaToggle={() => {}} />
    );
    expect(screen.getByText("Criterios del ranking")).toBeInTheDocument();
  });

  it("renders search and toolbar when props provided", () => {
    render(
      <MainContentHeader
        title="Results"
        searchPlaceholder="Search"
        resultsCount="24 results"
        onExport={() => {}}
      />
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("Exportar")).toBeInTheDocument();
  });

  it("calls onCriteriaToggle when criteria clicked", async () => {
    const onCriteriaToggle = jest.fn();
    render(
      <MainContentHeader title="Results" onCriteriaToggle={onCriteriaToggle} />
    );
    await userEvent.click(screen.getByText("Criterios del ranking"));
    expect(onCriteriaToggle).toHaveBeenCalled();
  });
});
