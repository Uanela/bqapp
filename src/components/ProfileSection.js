import React from "react";
import market7Profile from "../images/market7_profile_logo.png";
import "../styles/scss/_ProfileSection.scss";

function ProfileSection() {
  return (
    <div className="profile-section container">
      <div className="profile-inner-content">
        <div className="profile-info">
          <h1>SOBRE MARKET7</h1>
          <p>
            O Market7 acredita que se pode vender aos clientes o que eles
            realmente querem e o que eles realmente estão aptos a comprar. Ao
            invés de tentar vender algo para alguém que não se interessa por um
            certo producto e nem se encontra apto para tal compra, nós
            acreditamos que é melhor seguirmos com base no que o cliente diz e
            deste modo ele poderá obter mais informações do que ele realmente
            pretende comprar e ele não terá que ficar a aturar um vendedor que
            simplesmente quer vender o seu peixe.
          </p>
        </div>
        <div className="profile-logo">
          <img src={market7Profile} alt="market7 profile picture" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
