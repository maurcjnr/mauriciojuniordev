import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";
import RandomNumber from "../components/RandomNumber";

import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import d20 from "../images/d20.png";
import M from "../images/m.png";
import Brazil from "../images/brazil.png";
import USA from "../images/united-states.png";

export default (props) => {
  const RollIn = styled.div`
    animation: 3s ${keyframes`${rollIn}`} infinite;
  `;

  const [locale, setLocale] = useState(true);

  const clickBR = () => {
    setLocale(true);
  };

  const clickUSA = () => {
    setLocale(false);
  };

  return (
    <div className="page">
      <div className="content">
        <div className="page__top">
          <div className="page__top__left">
            <div className="page__top__left__input">
              <p>{locale == true ? "Nome:" : "Name:"}</p>
              <p>Maurício Júnior</p>
            </div>
            <div className="page__top__left__input">
              <p>{locale == true ? "Nível:" : "Level:"}</p>
              <p>23</p>
            </div>
          </div>

          <div className="page__top__right">
            <div className="page__top__right__input">
              <p>{locale == true ? "Classe:" : "Class:"}</p>
              <p>{locale == true ? "Programador" : "Developer"}</p>
            </div>
            <div className="page__top__right__input">
              <p>{locale == true ? "Raça:" : "Race:"}</p>
              <p>{locale == true ? "Humano" : "Human"}</p>
            </div>
          </div>
        </div>

        <div className="page__title">
          <h2>{locale == true ? "ATRIBUTOS" : "ATTRIBUTES"}</h2>
          <h2>{locale == true ? "SOBRE" : "ABOUT"}</h2>
        </div>

        <div className="page__one">
          <div className="page__one__attributes">
            <div className="page__one__attributes__left">
              <div className="page__one__attributes__left__input">
                <p>
                  {locale == true ? "FOR:" : "STR:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
              <div className="page__one__attributes__left__input">
                <p>
                  {locale == true ? "DES:" : "DEX:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
              <div className="page__one__attributes__left__input">
                <p>
                  {locale == true ? "CON:" : "CON:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
            </div>

            <div className="page__one__attributes__right">
              <div className="page__one__attributes__right__input">
                <p>
                  {locale == true ? "INT:" : "INT:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
              <div className="page__one__attributes__right__input">
                <p>
                  {locale == true ? "SAB:" : "WIS:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
              <div className="page__one__attributes__right__input">
                <p>
                  {locale == true ? "CAR:" : "CHA:"} <RandomNumber />
                </p>
                <img src={d20} alt="d20" />
              </div>
            </div>
          </div>

          <div className="page__one__about">
            <div className="page__one__about__input">
              <p>
                {locale == true
                  ? "Apaixonado por jogos e tecnologia, atualmente estudando React e Node, desenvolvendo um projeto pessoal sobre jogos de tabuleiro e sistemas de RPG, cursando no quinto semestre o curso superior de Tecnologia em Sistemas para Internet no IFSul."
                  : "Passionate about games and technology, currently studying React and Node, developing a personal project on board games and RPG systems, studying in the fifth semester the higher course of Technology in Internet Systems at IFSul."}
              </p>
            </div>
          </div>
        </div>

        <h2>{locale == true ? "HABILIDADES" : "SKILLS"}</h2>
        <div className="page__skills">
          <div className="page__skills__left">
            <div className="page__skills__left__input">
              <p className="page__skills__left__input__html5">HTML5</p>
            </div>
            <div className="page__skills__left__input">
              <p className="page__skills__left__input__css">CSS</p>
            </div>
            <div className="page__skills__left__input">
              <p className="page__skills__left__input__sass">Sass</p>
            </div>
            <div className="page__skills__left__input">
              <p className="page__skills__left__input__js">JavaScript</p>
            </div>
          </div>

          <div className="page__skills__right">
            <div className="page__skills__right__input">
              <p className="page__skills__right__input__react">ReactJS</p>
            </div>
            <div className="page__skills__right__input">
              <p className="page__skills__right__input__unity">Unity</p>
            </div>
            <div className="page__skills__right__input">
              <p className="page__skills__right__input__git">Git/GitHub</p>
            </div>
            <div className="page__skills__right__input">
              <p className="page__skills__right__input__salesforce">
                Salesforce
              </p>
            </div>
          </div>
        </div>

        <div className="page__title">
          <h2>{locale == true ? "EXPERIÊNCIAS" : "EXPERIENCES"}</h2>
          <h2>{locale == true ? "PROJETOS" : "PROJECTS"}</h2>
        </div>

        <div className="page__two">
          <div className="page__two__exp">
            <div className="page__two__exp__input">
              <p>
                <a href="https://hostche.com.br/" target="_blank">
                  Hostche Interatividade Digital
                </a>
              </p>
            </div>
            <div className="page__two__exp__input">
              <p>
                <a href="https://compassouol.com/" target="_blank">
                  Compasso UOL
                </a>
              </p>
            </div>
            <div className="page__two__exp__input">
              <p>
                <a href="" target="_blank"></a>
              </p>
            </div>
            <div className="page__two__exp__input">
              <p>
                <a href="" target="_blank"></a>
              </p>
            </div>
          </div>

          <div className="page__two__projects">
            <div className="page__two__projects__input">
              <p>
                <a href="https://lmalarmes.com.br/" target="_blank">
                  LM Alarmes
                </a>
              </p>
            </div>
            <div className="page__two__projects__input">
              <p>
                <a href="https://lycansgaming.com.br/" target="_blank">
                  Lycans Gaming
                </a>
              </p>
            </div>
            <div className="page__two__projects__input">
              <p>
                <a href="https://meeplepedia.com.br/" target="_blank">
                  Meeplepedia
                </a>
              </p>
            </div>
            <div className="page__two__projects__input">
              <p>
                <a href="" target="_blank"></a>
              </p>
            </div>
          </div>
        </div>

        <div className="page__bottom">
          <div className="page__bottom__contact">
            <h2>{locale == true ? "CONTATO:" : "CONTACT:"}</h2>
            <a href="https://github.com/maurcjnr" target="_blank">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/maur%C3%ADcio-j%C3%BAnior-96a466179/"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/maurcjnr" target="_blank">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/maurcjnr/" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/maurcjnr" target="_blank">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="mailto:mauriciojunior.dev@gmail.com" target="_blank">
              mauriciojunior.dev@gmail.com
            </a>
          </div>

          <div className="page__bottom__copyright">
            <RollIn>
              <a href="https://mauriciojunior.dev/">
                <img src={M} alt="M" />
              </a>
            </RollIn>
            <a className="page__bottom__copyright__flag" onClick={clickBR}>
              <img src={Brazil} alt="Brazil" />
            </a>
            <a className="page__bottom__copyright__flag" onClick={clickUSA}>
              <img src={USA} alt="United States" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
