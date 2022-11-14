import React from "react";
import "../styles/scss/_FourthSection.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGamepad,
  faComputer,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function FourthSection() {
  return (
    <div className="fourth-section">
      <div className="inner-content container">
        <a href="#header" className="sub-link sub-link-media">
          QUERO ME INSCREVER GRATUITAMENTE NA BLACK QUINTA
        </a>
        <div className="footer">
          <div className="social-media-icons container">
            <a href="https://bit.ly/3CN3HTM">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="https://bit.ly/3TyoWP2">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="https://bit.ly/3RsIfrs">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a href="https://bit.ly/3wLFPMm">
              <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
            </a>
            <a href="https://wa.me/258844724380">
              <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
            </a>
          </div>
          <p className="copyright">
            &copy; 2022 market7 todos direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
