import { render, screen } from "@testing-library/react";
import { ClassificationResultsLayout } from "./ClassificationResultsLayout";

describe("ClassificationResultsLayout", () => {
  it("renders top bar slots", () => {
    render(
      <ClassificationResultsLayout
        topBarLeft={<span>Logo</span>}
        topBarRight={<span>User</span>}
      />
    );
    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("renders sidebar content", () => {
    render(
      <ClassificationResultsLayout sidebar={<div>Filters</div>} />
    );
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("renders main header and children", () => {
    render(
      <ClassificationResultsLayout
        mainHeader={<h1>Results</h1>}
      >
        <ul><li>Card 1</li></ul>
      </ClassificationResultsLayout>
    );
    expect(screen.getByRole("heading", { name: "Results" })).toBeInTheDocument();
    expect(screen.getByText("Card 1")).toBeInTheDocument();
  });

  it("renders without optional slots", () => {
    const { container } = render(<ClassificationResultsLayout />);
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelector("aside")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
  });
});
