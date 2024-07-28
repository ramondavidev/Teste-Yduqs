import React from "react";

import "./Header.styles.css";
import { Menu } from "../Menu";

const Header = () => {
  return (
    <>
      <Menu />
      <div className="app-title">
        <h1>Teste Yduqs</h1>
        <p>
          Cada cão possui um perfil detalhado com fotos e traços de
          personalidade.
        </p>
      </div>
    </>
  );
};

export { Header };
