import React from "react";
import "./SearchInput.styles.css";

type SearchInputProps = {
  placeholder: string;
  onChange: (query: string) => void;
  value: string;
};

// Componente para renderizar um campo de pesquisa
const SearchInput = ({ placeholder, onChange, value }: SearchInputProps) => {
  // Função para chamar quando o valor de entrada muda
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Chame a função onChange passada como prop com o novo valor
    onChange(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export { SearchInput };
