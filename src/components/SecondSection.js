import React from "react";
import scheduleImg from "../images/shcedule example.png";
import "../styles/scss/_SecondSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGamepad,
  faComputer,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function SecondSection() {
  return (
    <div className="second-section container">
      <div className="inner-content container">
        <div className="content d-flex jc-center schedule-container">
          <img src={scheduleImg} className="schedule-logo" />
          <div className="schedule-info">
            <h1>Programação do Dia</h1>
            <p>Evento online - Dia 24 de Novembro</p>
            <p>Ás 20h - horário de Moçambique</p>
          </div>
        </div>
        <h1 className="text-center">Entregáveis do Evento</h1>

        <div className="deliverables container">
          <div className="row-1">
            <div className="delivery-1 category-phones">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faMobilePhone} className="fa-2x" />
              </div>
              <div className="info">
                <h2 className="title">Categoria de Celulares</h2>
                <p>
                  Você vai poder ver como você poderá escolher o melhor celular
                  e melhores tipos de acessórios para celulares nesta black
                  friday.
                </p>
              </div>
            </div>

            <div className="delivery-2 category-pc">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faComputer} className="fa-2x" />
              </div>
              <div className="info">
                <h2 className="title">Categoria de Informática</h2>
                <p>
                  Você vai poder ver como você poderá escolher o melhor
                  computador e melhores materiais informáticos nesta black
                  friday.
                </p>
              </div>
            </div>
          </div>

          <div className="row-2">
            <div className="delivery-3 category-videogames">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faGamepad} className="fa-2x" />
              </div>
              <div className="info">
                <h2 className="title">Categoria de Jogos</h2>
                <p>
                  Você vai poder ver como você poderá escolher o melhor
                  videojogo e melhores consolas nesta black friday.
                </p>
              </div>
            </div>

            <div className="delivery-4">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faWhatsapp} className="fa-3x" />
              </div>
              <div className="info">
                <h2 className="title">Grupo no WhatsApp</h2>
                <p>
                  Você vai ter acesso a um grupo exclusivo no Whatsapp. Lá você
                  vai receber todas as actividades e informações de acesso para
                  o evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
