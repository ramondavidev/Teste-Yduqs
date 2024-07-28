import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./";

it("Renderiza o componente Header corretamente", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading", { level: 1 });

  expect(headingElement).toHaveTextContent("Teste Yduqs");
});
