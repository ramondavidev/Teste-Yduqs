import { Dog } from "../types/dog";

export interface DogState {
  dogs: Dog[];
  favorites: Dog[];
}

export type DogAction =
  | { type: "SET_DOGS"; dogs: Dog[] }
  | { type: "HANDLE_FAVORITES"; dog: Dog };

export interface DogContextType {
  state: DogState;
  dispatch: React.Dispatch<DogAction>;
}
