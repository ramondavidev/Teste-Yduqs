import { render, screen } from "@testing-library/react";
import { Card } from "./Card.component";

import { dogsDatabase } from "app/api/user/mock";
import { DogProvider } from "app/context";

it("Renderiza o componente Card corretamente", () => {
  render(
    <DogProvider>
      <Card dog={dogsDatabase[0]} />
    </DogProvider>
  );
  const dogCard = screen.getByTestId(`dog-card-${dogsDatabase[0].id}`);

  expect(dogCard).toBeInTheDocument();
  expect(dogCard).toBeVisible();
});
