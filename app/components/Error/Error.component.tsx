import React from "react";
import "./Error.styles.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Algo deu errado!</h1>
      <p>Tente novamente mais tarde, obrigado.</p>
    </div>
  );
};

export { Error };
