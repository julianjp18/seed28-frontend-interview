import { render, screen } from "@testing-library/react";
import { DataUpdatedAt } from "./DataUpdatedAt";

describe("DataUpdatedAt", () => {
  it("renders label", () => {
    render(<DataUpdatedAt label="Datos actualizados hace 2 min" />);
    expect(screen.getByText("Datos actualizados hace 2 min")).toBeInTheDocument();
  });
});
