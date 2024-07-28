import { render, screen } from "@testing-library/react";
import { Menu } from "./";

it("Renderiza o componente Menu corretamente", () => {
  render(<Menu />);
  const element = screen.getByText("Teste Yduqs");

  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
