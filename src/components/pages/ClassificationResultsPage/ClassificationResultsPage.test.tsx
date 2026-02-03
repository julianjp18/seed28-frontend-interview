import { render, screen } from "@testing-library/react";
import { ClassificationResultsPage } from "./ClassificationResultsPage";

const minimalProps = {
  locationLabel: "La soledad",
  originOptions: [
    { value: "all", label: "All" },
    { value: "own", label: "Own bulls" },
  ],
  productiveToggleLabel: "For heifer",
  coatDropdownLabel: "Coat",
  coatDropdownValue: "all",
  coatDropdownOptions: [{ value: "all", label: "All" }],
  sortValue: "score-desc",
  sortOptions: [{ value: "score-desc", label: "Score best to worst" }],
  objectiveDescription: "Maximize weight gain while maintaining ease of calving.",
  mainTitle: "Classification results",
};

describe("ClassificationResultsPage", () => {
  it("renders layout with header bar", () => {
    render(<ClassificationResultsPage {...minimalProps} />);
    expect(screen.getByText("Bulltrack")).toBeInTheDocument();
    expect(screen.getByText("La soledad")).toBeInTheDocument();
  });

  it("renders sidebar filters and objective", () => {
    render(<ClassificationResultsPage {...minimalProps} />);
    expect(screen.getByText("ACTIVE FILTERS")).toBeInTheDocument();
    expect(screen.getByText("PRODUCTIVE FILTERS")).toBeInTheDocument();
    expect(screen.getByText("SORTING")).toBeInTheDocument();
    expect(screen.getByText("Objetivo actual")).toBeInTheDocument();
    expect(screen.getByText(/Maximize weight gain/)).toBeInTheDocument();
  });

  it("renders main title", () => {
    render(<ClassificationResultsPage {...minimalProps} />);
    expect(screen.getByRole("heading", { name: /classification results/i })).toBeInTheDocument();
  });

  it("renders children in main content", () => {
    render(
      <ClassificationResultsPage {...minimalProps}>
        <div>Results list</div>
      </ClassificationResultsPage>
    );
    expect(screen.getByText("Results list")).toBeInTheDocument();
  });
});
