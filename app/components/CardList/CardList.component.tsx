import { Dog } from "app/types/dog";
import "./CardList.styles.css";
import { Card } from "../Card";

type CardListProps = {
  dogs?: Dog[];
};

const CardList = ({ dogs }: CardListProps) => {
  // Verifique se CardList é indefinido ou vazio, e retorna um fragmento vazio se for.
  // Isso evita renderizar o componente se não houver dados para exibir.
  if (!dogs) {
    return <></>;
  }
  // Retorna uma lista de dogs.
  return (
    <div id="dog-card-list" className="card-list">
      {dogs.map((dog) => (
        <Card dog={dog} key={dog.id} />
      ))}
    </div>
  );
};

export { CardList };
