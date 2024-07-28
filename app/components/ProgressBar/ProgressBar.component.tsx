import React from "react";
import "./ProgressBar.styles.css";

type ProgressBar = {
  level: number;
};

// Componente  que renderiza uma barra de progresso com níveis.
const ProgressBar = ({ level }: ProgressBar) => {
  // Número total de níveis a serem exibidos na barra de progresso.
  const totalLevels = 5;

  return (
    // Contêiner para a barra de progresso com um data-testid para fins de teste.
    <div data-testid="ProgressBar" className="progress-container">
      <div className="levels">
        {/*
          Array.from() cria um array de comprimento especificado, que é então
          preenchido com valores. */}
        {Array.from({ length: totalLevels }, (_, index) => (
          <div
            key={index}
            className={`level ${index < level ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export { ProgressBar };
