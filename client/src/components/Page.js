import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import Meeplepedia from "../images/meeplepedia.png";
import LMAlarmes from "../images/lmalarmes.png";
import LycansGaming from "../images/lycansgaming.png";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

export default (props) => {
  return (
    <div className="page">
      <div className="content">
        <Bounce>
          <h1>Hello, World! :)</h1>
        </Bounce>
        <p>mauriciojunior.dev</p>
        <div className="page__projects">
          <p>Projects/Portfolios</p>
          <div className="page__projects__items">
            <div className="page__projects__items__item">
              <a href="https://www.lmalarmes.com.br/" target="_blank">
                <img src={LMAlarmes} alt="LM Alarmes" />
              </a>
            </div>
            <div className="page__projects__items__item">
              <a href="https://www.lycansgaming.com.br/" target="_blank">
                <img src={LycansGaming} alt="Lycans Gaming" />
              </a>
            </div>
            <div className="page__projects__items__item">
              <a href="https://www.meeplepedia.com.br/" target="_blank">
                <img src={Meeplepedia} alt="Meeplepedia" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
