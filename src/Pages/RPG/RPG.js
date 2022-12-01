//Imported
import { useState, React } from "react";

//Imported Components
import Modal from "../../Components/RPG/Modal";
import Archibald from "../../Components/RPG/Archibald";
import Ludovica from "../../Components/RPG/Ludovica";
import Footer from "../../Components/RPG/Footer";

//Imported CSS
import "../../Styles/RPG/RPG.css";

//Imported Images
import ArchibaldImage from "../../Images/archibald.png";
import LudovicaImage from "../../Images/ludovica.png";

function RPG() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [character, setCharacter] = useState("");

  return (
    <div className="rpg">
      <div className="rpg__top-side">
        <div className="rpg__top-side__modal">
          <a
            onClick={() => {
              setIsModalVisible(true);
              setCharacter("archibald");
            }}
          >
            <img src={ArchibaldImage} alt="Archibald" />
          </a>

          <a
            onClick={() => {
              setIsModalVisible(true);
              setCharacter("ludovica");
            }}
          >
            <img src={LudovicaImage} alt="Ludovica" />
          </a>

          {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}>
              {character == "archibald" ? <Archibald /> : null}
              {character == "ludovica" ? <Ludovica /> : null}
            </Modal>
          ) : null}
        </div>
      </div>
      <div className="rpg__bottom-side">
        <div className="rpg__bottom-side__content"></div>
        <div className="rpg__bottom-side__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RPG;
