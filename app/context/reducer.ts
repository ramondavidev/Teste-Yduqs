import { Dog } from "app/types/dog";
import { DogAction, DogState } from "./types";
import { HANDLE_FAVORITES, SET_DOGS } from "./actionTypes";

// função para dicionar ou remover um favorito
// se favorito já adicionado, remova, caso contrário, adicione
const toggleFavorite = (dog: Dog, favorites: Dog[]) => {
  if (favorites.some((fav) => fav.id === dog.id)) {
    return favorites.filter((fav) => fav.id !== dog.id);
  } else {
    return [...favorites, dog];
  }
};

// Reducer para gerenciar o estado de cães e favoritos.
// * Ele com ações para definir a lista de cães e alternar favoritos.
export const dogReducer = (state: DogState, action: DogAction): DogState => {
  switch (action.type) {
    case SET_DOGS:
      return { ...state, dogs: action.dogs };
    case HANDLE_FAVORITES:
      return {
        ...state,
        favorites: toggleFavorite(action.dog, state.favorites),
      };
    default:
      return state;
  }
};
