import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResultsToolbar } from "./ResultsToolbar";

describe("ResultsToolbar", () => {
  it("renders results count", () => {
    render(<ResultsToolbar resultsCount="24 resultados" />);
    expect(screen.getByText("24 resultados")).toBeInTheDocument();
  });

  it("calls onExport when Exportar clicked", async () => {
    const onExport = jest.fn();
    render(<ResultsToolbar resultsCount="10 resultados" onExport={onExport} />);
    await userEvent.click(screen.getByRole("button", { name: /exportar/i }));
    expect(onExport).toHaveBeenCalled();
  });

  it("calls onViewModeChange when list view clicked", async () => {
    const onViewModeChange = jest.fn();
    render(
      <ResultsToolbar resultsCount="5" viewMode="grid" onViewModeChange={onViewModeChange} />
    );
    await userEvent.click(screen.getByRole("button", { name: /vista lista/i }));
    expect(onViewModeChange).toHaveBeenCalledWith("list");
  });

  it("highlights list button when viewMode is list", () => {
    render(<ResultsToolbar resultsCount="0" viewMode="list" onViewModeChange={() => {}} />);
    const listBtn = screen.getByRole("button", { name: /vista lista/i });
    expect(listBtn).toHaveClass("bg-primary");
  });
});
