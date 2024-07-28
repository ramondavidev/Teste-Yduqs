import Image from "next/image";
import Paws from "../../../public/images/paw.png";
import "./Menu.styles.css";

const Menu = () => {
  return (
    <div className="app-header">
      <div className="logo">
        <Image src={Paws} alt="Picture of the author" width={40} />
        Teste Yduqs
      </div>
      <nav>
        <ul className="nav-links"></ul>
      </nav>
    </div>
  );
};

export { Menu };
