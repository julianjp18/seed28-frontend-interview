import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BullCardActions } from "./BullCardActions";

describe("BullCardActions", () => {
  it("calls onViewDetails when eye clicked", async () => {
    const onViewDetails = jest.fn();
    render(<BullCardActions onViewDetails={onViewDetails} />);
    await userEvent.click(screen.getByRole("button", { name: /ver detalles/i }));
    expect(onViewDetails).toHaveBeenCalled();
  });

  it("calls onToggleFavorite when heart clicked", async () => {
    const onToggleFavorite = jest.fn();
    render(<BullCardActions onToggleFavorite={onToggleFavorite} />);
    await userEvent.click(screen.getByRole("button", { name: /añadir a favoritos/i }));
    expect(onToggleFavorite).toHaveBeenCalled();
  });

  it("shows favorite state", () => {
    render(<BullCardActions onToggleFavorite={() => {}} isFavorite />);
    expect(screen.getByRole("button", { name: /quitar de favoritos/i })).toBeInTheDocument();
  });
});
