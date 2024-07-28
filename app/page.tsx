// Os componentes do cliente são renderizados no navegador e podem interagir com dados e estados do lado do cliente
"use client";

import useFetch from "./hooks/useFetch";
import { useMemo, useState } from "react";
import { Dog } from "./types/dog";
import { useDog } from "./context";
import {
  FavoriteList,
  Loading,
  Error,
  Header,
  SearchInput,
  CardList,
} from "./components";

export type Response = {
  dogs: Dog[];
};

const Home: React.FC = () => {
  const { state } = useDog();
  // custom hook para encapsular e reutilizar lógica de busca de dados, em diferentes componentes de forma limpa e organizada.
  const { data, loading, error } = useFetch<Response>("/api/user");
  const [filter, setFilter] = useState("");

  // useMemo para otimizar o código, evitando execuções desnecessárias.
  // Essa função só será atualizada quando o array de dogs mudar
  const filteredDogs = useMemo(() => {
    if (!filter) return data?.dogs;
    return data?.dogs.filter((dog) =>
      dog.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, data?.dogs]);

  // o custom hook que criei retornará 3 estados, com os dados, o loading state e o error state.
  // Caso esteja carregando ou ocorra um erro, errei exibir o component correspondente a cada situação.
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className="min-height">
      <Header />
      <FavoriteList favoriteList={state.favorites} />
      <div className="inputContainer">
        <SearchInput
          placeholder="Pesquise..."
          value={filter}
          onChange={(e) => setFilter(e)}
        />
      </div>
      <CardList dogs={filteredDogs} />
    </main>
  );
};

export default Home;
