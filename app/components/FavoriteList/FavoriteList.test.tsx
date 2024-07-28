import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FavoriteList } from "./FavoriteList.component";

import { dogsDatabase } from "app/api/user/mock";
import { DogProvider } from "app/context";

it("Renderiza o componente FavoriteList corretamente", () => {
  render(
    <DogProvider>
      <FavoriteList favoriteList={dogsDatabase} />
    </DogProvider>
  );
  const renderedItems = screen.getAllByRole("paragraph");

  expect(renderedItems).toHaveLength(dogsDatabase.length);
});
