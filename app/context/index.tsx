"use client";

import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { DogContextType, DogState } from "./types";
import { dogReducer } from "./reducer";

const initialState: DogState = {
  dogs: [],
  favorites: [],
};

export const DogContext = createContext<DogContextType | undefined>(undefined);

// componente provedor que encapsula components e fornece o estado e o dispatch
export const DogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(dogReducer, initialState);

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      {children}
    </DogContext.Provider>
  );
};

export const useDog = (): DogContextType => {
  const context = useContext(DogContext);
  // Se o contexto não estiver definido, gera um erro indicando que o hook deve ser usado dentro de um DogProvider.
  if (context === undefined) {
    throw new Error("useDog deve ser usando dentro de um DogProvider");
  }
  return context;
};
