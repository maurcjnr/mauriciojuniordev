//Imported
import React from "react";

function Ludovica() {
  return (
    <div className="ludovica">
      <div className="ludovica__name">
        <h1>Ludovica Koral</h1>
      </div>
      <div className="ludovica__info">
        <div className="archibald__info__left-side">
          <p>
            <span>Informações </span>
          </p>
          <p>
            <span>Dádiva: </span>Humana
          </p>
          <p>
            <span>Classe: </span>Ladina
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
              <span>FOR: </span>8 (-1)
            </p>
            <p>
              <span>DES: </span>16 (3)
            </p>
            <p>
              <span>CON: </span>10 (0)
            </p>
          </div>
          <div className="archibald__info__right-side__column-two">
            <p>
              <span>INT: </span>13 (1)
            </p>
            <p>
              <span>SAB: </span>14 (2)
            </p>
            <p>
              <span>CAR: </span>16 (3)
            </p>
          </div>
        </div>
      </div>
      <div className="ludovica__magic-items">
        <p>
          <span>Itens Mágicos </span>
        </p>
        <h1>Lâminas Gêmeas +1</h1>
        <p>
          <span>Dano: </span>1d8 + 1 perfurante
        </p>
        <p>
          <span>Crítico: </span>18
        </p>
        <p>
          <span>Peso: </span>1 kg
        </p>
        <p>
          <span>Propriedades: </span>Acuidade, Leve
        </p>
        <p>
          <span>Raridade: </span>Muito rara, requer sintonização
        </p>
      </div>
    </div>
  );
}

export default Ludovica;
