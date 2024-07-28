import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./";

it("Renderiza o componente ProgressBar corretamente", () => {
  render(<ProgressBar level={5} />);
  const element = screen.getByTestId("ProgressBar");

  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
