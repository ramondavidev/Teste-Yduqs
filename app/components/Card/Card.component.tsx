import { Dog } from "app/types/dog";
import HeartIcon from "../../../public/images/heart.png";
import FilledHeartIcon from "../../../public/images/heart filled.png";

import "./card.styles.css";
import Image from "next/image";
import { useDog } from "app/context";
import { ProgressBar } from "../";
import { HANDLE_FAVORITES } from "app/context/actionTypes";

type CardProps = {
  dog: Dog;
};

const Card = ({ dog }: CardProps) => {
  const { state, dispatch } = useDog();

  // função para alterar o state do context, especificamente para adicionar ou remover um dogzinho
  const handleAddFavorite = (dog: Dog) => {
    dispatch({
      type: HANDLE_FAVORITES,
      dog: dog,
    });
  };
  const { id, energy, trainability } = dog;

  // variavel vefifica se o dog está adicionado como favorito
  const isSetAsFavorite = state.favorites.find((fav) => fav.id === id);

  return (
    <div
      data-testid={`dog-card-${id}`}
      className="card"
      style={{ position: "relative" }}
    >
      <div
        style={{
          width: 30,
          position: "absolute",
          top: 11,
          right: 18,
          cursor: "pointer",
        }}
        onClick={() => handleAddFavorite(dog)}
      >
        {isSetAsFavorite ? (
          <Image src={FilledHeartIcon} alt="Filled Heart Icon" />
        ) : (
          <Image src={HeartIcon} alt="Heart Icon" />
        )}
      </div>

      <h2>{dog.name}</h2>
      <p>Treinabilidade</p>
      <ProgressBar level={trainability} />

      <p>Energia</p>
      <ProgressBar level={energy} />

      <Image width={260} height={173} src={dog.image_link} alt={dog.name} />
    </div>
  );
};

export { Card };
