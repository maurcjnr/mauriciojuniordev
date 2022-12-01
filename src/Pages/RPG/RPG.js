//Imported
import { useState, React } from "react";

//Imported Components
import Modal from "../../Components/RPG/Modal";
import Footer from "../../Components/RPG/Footer";

//Imported CSS
import "../../Styles/RPG/RPG.css";

function RPG() {
  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="rpg">
      <div className="rpg__top-side">
        <div className="rpg__top-side__archibald-modal">
          {/* <button onClick={() => setIsModalVisible(true)}>Open</button> */}
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
