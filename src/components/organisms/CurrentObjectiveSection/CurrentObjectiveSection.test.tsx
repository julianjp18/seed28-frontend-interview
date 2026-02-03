import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CurrentObjectiveSection } from "./CurrentObjectiveSection";

describe("CurrentObjectiveSection", () => {
  it("renders description", () => {
    render(
      <CurrentObjectiveSection description="Maximize weight gain while maintaining ease of calving." />
    );
    expect(screen.getByText("Objetivo actual")).toBeInTheDocument();
    expect(screen.getByText(/Maximize weight gain/)).toBeInTheDocument();
  });

  it("calls onEditClick when button clicked", async () => {
    const onEditClick = jest.fn();
    render(
      <CurrentObjectiveSection
        description="Objective text"
        onEditClick={onEditClick}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: /edit criteria/i }));
    expect(onEditClick).toHaveBeenCalled();
  });

  it("uses custom edit button label", () => {
    render(
      <CurrentObjectiveSection
        description="Text"
        onEditClick={() => {}}
        editButtonLabel="Change criteria"
      />
    );
    expect(screen.getByRole("button", { name: /change criteria/i })).toBeInTheDocument();
  });
});
