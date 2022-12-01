//Imported
import React from "react";

//Imported CSS
import "../../Styles/RPG/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__back-button">
        <a href="/">{"<"} Voltar ao início</a>
      </div>
      <div className="footer__copyright">
        <p>
          © <a href="/">MAURICIOJUNIOR.DEV</a> All Rights Reserved
        </p>
        <p>
          Made By Maurício Juníor (<a href="/">mauriciojunior.dev</a>)
        </p>
      </div>
      <div className="footer__flaticon">
        <a
          href="https://www.flaticon.com/br/icones-gratis/rpg"
          title="rpg ícones"
          target="_blank"
        >
          RPG ícones criados por Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}

export default Footer;
