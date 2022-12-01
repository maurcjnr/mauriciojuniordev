//Imported
import React from "react";

function Archibald() {
  return (
    <div className="archibald">
      <div className="archibald__name">
        <h1>Archibald Luren</h1>
      </div>
      <div className="archibald__info">
        <div className="archibald__info__left-side">
          <p>
            <span>Informações </span>
          </p>
          <p>
            <span>Dádiva: </span>Meio-dádiva
          </p>
          <p>
            <span>Classe: </span>Cavaleiro Rúnico
          </p>
          <p>
            <span>Rank: </span>D
          </p>
          <p>
            <span>Clube: </span>Conselho Estudantil
          </p>
        </div>
        <div className="archibald__info__right-side">
          <div className="archibald__info__right-side-column-one">
            <p>
              <span>FOR: </span>14 (2)
            </p>
            <p>
              <span>DES: </span>20 (5)
            </p>
            <p>
              <span>CON: </span>16 (3)
            </p>
          </div>
          <div className="archibald__info__right-side__column-two">
            <p>
              <span>INT: </span>10 (0)
            </p>
            <p>
              <span>SAB: </span>8 (-1)
            </p>
            <p>
              <span>CAR: </span>12 (1)
            </p>
          </div>
        </div>
      </div>
      <div className="archibald__magic-items">
        <p>
          <span>Itens Mágicos </span>
        </p>
        <h1>Espada Rúnica +1</h1>
        <p>
          <span>Dano: </span>2d4 + 1 perfurante
        </p>
        <p>
          <span>Crítico: </span>x3
        </p>
        <p>
          <span>Peso: </span>2 kg
        </p>
        <p>
          <span>Propriedades: </span>Acuidade, Duas Mãos, Pesada
        </p>
        <p>
          <span>Raridade: </span>Muito rara, requer sintonização
        </p>
      </div>
    </div>
  );
}

export default Archibald;
