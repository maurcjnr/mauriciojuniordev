import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";

import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import d20 from "../images/d20.png";
import M from "../images/m.png";

const Bounce = styled.div`
  animation: 2s ${keyframes`${rollIn}`} infinite;
`;

export default (props) => {
  return (
    <div className="page">
      <div className="content">
        <div className="page__top">
          <div className="page__top__left">
            <div className="page__top__left__input">
              <p>Nome:</p>
              <p>Maurício Júnior</p>
            </div>
            <div className="page__top__left__input">
              <p>Nível:</p>
              <p>23</p>
            </div>
          </div>

          <div className="page__top__right">
            <div className="page__top__right__input">
              <p>Classe:</p>
              <p>Programador</p>
            </div>
            <div className="page__top__right__input">
              <p>Raça:</p>
              <p>Humano</p>
            </div>
          </div>
        </div>

        <div className="page__title">
          <h2>ATRIBUTOS</h2>
          <h2>SOBRE</h2>
        </div>

        <div className="page__one">
          <div className="page__one__attributes">
            <div className="page__one__attributes__left">
              <div className="page__one__attributes__left__input">
                <p>FOR: 10</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
              <div className="page__one__attributes__left__input">
                <p>DES: 8</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
              <div className="page__one__attributes__left__input">
                <p>CON: 14</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
            </div>

            <div className="page__one__attributes__right">
              <div className="page__one__attributes__right__input">
                <p>INT: 16</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
              <div className="page__one__attributes__right__input">
                <p>SAB: 18</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
              <div className="page__one__attributes__right__input">
                <p>CAR: 15</p>
                <a>
                  <img src={d20} alt="d20" />
                </a>
              </div>
            </div>
          </div>

          <div className="page__one__about">
            <div className="page__one__about__input">
              <p>
                Apaixonado por jogos e tecnologia, atualmente estudando React e
                Node, desenvolvendo um projeto pessoal sobre jogos de tabuleiro
                e sistemas de RPG, cursando no quinto semestre o curso superior
                de Tecnologia em Sistemas para Internet no IFSul.
              </p>
            </div>
          </div>
        </div>

        <h2>HABILIDADES</h2>
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
          <h2>EXPERIÊNCIAS</h2>
          <h2>PROJETOS</h2>
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
            <h2>CONTATO:</h2>
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
            <Bounce>
              <a href="https://mauriciojunior.dev/">
                <img src={M} alt="M" />
              </a>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};
