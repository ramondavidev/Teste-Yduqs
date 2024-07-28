import { Dog } from "../../types/dog";
import "./FavoriteList.styles.css";
import Image from "next/image";

type FavoriteListProps = {
  favoriteList: Dog[];
};

const FavoriteList = ({ favoriteList }: FavoriteListProps) => {
  // Verifique se favoriteList é indefinido ou vazio, e retorna um fragmento vazio se for.
  // Isso evita renderizar o componente se não houver dados para exibir.
  if (!favoriteList) {
    return <></>;
  }

  return (
    <div className="favoriteListContainer">
      <div className="horizontal-item-list">
        {favoriteList.map((item) => (
          <div key={item.id} className="item">
            <div className="w-[150px]">
              <Image
                width={150}
                height={100}
                src={item.image_link}
                alt="dog image"
              />
            </div>
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FavoriteList };
