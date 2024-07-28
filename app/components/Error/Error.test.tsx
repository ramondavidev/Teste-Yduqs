import { render, screen } from "@testing-library/react";
import { Error } from "./Error.component";

it("Renderiza o componente Error corretamente", () => {
  render(<Error />);
  const element = screen.getByText("Algo deu errado!");

  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
