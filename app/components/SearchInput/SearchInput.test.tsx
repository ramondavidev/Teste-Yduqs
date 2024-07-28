import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./index";

describe("Renderiza o componente SearchInput corretamente", () => {
  it("deve chamar onChange com o valor correto quando a entrada mudar", () => {
    // Crie uma função para simular o onChange.
    const mockOnChange = jest.fn();
    const placeholderText = "Search...";
    const valueText = "test";

    render(
      <SearchInput
        placeholder={placeholderText}
        onChange={mockOnChange}
        value={valueText}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    // Simula um evento de alteração no elemento de entrada
    // O evento define a input para "new query"
    fireEvent.change(inputElement, { target: { value: "new query" } });

    // Afirme que a função mockOnChange foi chamada com o valor correto
    expect(mockOnChange).toHaveBeenCalledWith("new query");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(valueText);
  });
});
