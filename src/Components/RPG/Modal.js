//Imported
import React from "react";

//Imported CSS
import "../../Styles/RPG/Modal.css";

//Imported Icons
import { RiCloseFill as CloseIcon } from "react-icons/ri";

function Modal({ id = "modal", onClose = () => {}, children }) {
  const handleOutsideClick = (e) => {
    if (e.target.id == id) {
      onClose();
    }
  };

  return (
    <div className="modal" id={id} onClick={handleOutsideClick}>
      <div className="modal__container">
        <div className="modal__container__close-button">
          <a onClick={onClose}>
            <CloseIcon />
          </a>
        </div>
        <div className="modal__container__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
