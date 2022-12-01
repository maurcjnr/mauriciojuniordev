//Imported
import React from "react";
import styled, { keyframes } from "styled-components";
import { shake as ReactAnimation } from "react-animations";

//Imported Icons
import { GiRollingDices as DiceIcon } from "react-icons/gi";

//Imported CSS
import "../Styles/Home.css";

//Animation
const Animation = keyframes`${ReactAnimation}`;
const AnimatedDice = styled.div`
  animation: infinite 10s ${Animation};
`;

function Home() {
  return (
    <div className="home">
      <div className="home__left-side">
        <div className="home__left-side__top-side">
          <div className="home__left-side__top-side__content">
            <h1>Em breve...</h1>
            <p>Viste também: </p>
            <a href="https://fcbolin.com.br" target="_blank">
              fcbolin.com.br
            </a>
          </div>
        </div>
        <div className="home__left-side__bottom-side"></div>
      </div>
      <div className="home__right-side">
        <div className="home__right-side__rpg-button">
          <AnimatedDice>
            <a href="rpg">
              <DiceIcon />
            </a>
          </AnimatedDice>
        </div>
      </div>
    </div>
  );
}

export default Home;
