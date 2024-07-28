import { render, screen } from "@testing-library/react";
import { CardList } from "./CardList.component";

import { dogsDatabase } from "app/api/user/mock";
import { DogProvider } from "app/context";

it("Renderiza o componente CardList corretamente", () => {
  render(
    <DogProvider>
      <CardList dogs={dogsDatabase} />
    </DogProvider>
  );
  const renderedItems = screen.getAllByText("Treinabilidade");

  expect(renderedItems).toHaveLength(dogsDatabase.length);
});
