import { render, screen } from "@testing-library/react";
import { BullCardInfo } from "./BullCardInfo";

describe("BullCardInfo", () => {
  it("renders name and subtitle", () => {
    render(
      <BullCardInfo
        imageSrc="/bull.jpg"
        imageAlt="Toro 992"
        name="Toro #992"
        subtitle="Angus . 36 meses"
      />
    );
    expect(screen.getByText("Toro #992")).toBeInTheDocument();
    expect(screen.getByText("Angus . 36 meses")).toBeInTheDocument();
  });

  it("renders image with alt", () => {
    render(
      <BullCardInfo
        imageSrc="/bull.jpg"
        imageAlt="Toro 992"
        name="Toro"
        subtitle="Angus"
      />
    );
    expect(screen.getByRole("img", { name: "Toro 992" })).toHaveAttribute("src", "/bull.jpg");
  });
});
