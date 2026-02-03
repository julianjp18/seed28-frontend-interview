import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders title", () => {
    render(<SectionHeader title="Resultados de la clasificación" />);
    expect(screen.getByRole("heading", { name: /resultados de la clasificación/i })).toBeInTheDocument();
  });

  it("renders description", () => {
    render(
      <SectionHeader
        title="Título"
        description="Los resultados están ordenados por Bulltrack Score."
      />
    );
    expect(screen.getByText(/resultados están ordenados/i)).toBeInTheDocument();
  });

  it("shows info icon when showInfoIcon", () => {
    render(<SectionHeader title="Título" showInfoIcon />);
    expect(screen.getByRole("button", { name: /más información/i })).toBeInTheDocument();
  });

  it("calls onInfoClick when info clicked", async () => {
    const onInfoClick = jest.fn();
    render(<SectionHeader title="Título" showInfoIcon onInfoClick={onInfoClick} />);
    await userEvent.click(screen.getByRole("button", { name: /más información/i }));
    expect(onInfoClick).toHaveBeenCalled();
  });
});
