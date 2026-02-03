import { render, screen } from "@testing-library/react";
import { ObjectiveDescription } from "./ObjectiveDescription";

describe("ObjectiveDescription", () => {
  it("renders title and description", () => {
    render(
      <ObjectiveDescription description="Maximizar la ganancia de peso (destete) manteniendo facilidad de parto." />
    );
    expect(screen.getByText("Objetivo actual")).toBeInTheDocument();
    expect(screen.getByText(/Maximizar la ganancia de peso/)).toBeInTheDocument();
  });
});
