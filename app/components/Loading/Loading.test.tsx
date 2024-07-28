import { render, screen } from "@testing-library/react";
import { Loading } from "./";

it("Renderiza o componente Loading corretamente", () => {
  render(<Loading />);
  const element = screen.getByText("Loading...");

  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
