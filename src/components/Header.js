import React from "react";
import BQLogo from "../images/Black Quinta Logo.png";
import "../styles/scss/_Header.scss";
import "../styles/scss/_media.scss";

function Header() {
  return (
    <div id="header" className="header section container">
      <div className="logo-div container">
        <img src={BQLogo} alt="Black Quinta Logo" className="logo-img" />
      </div>

      <h1 className="text-center">COMO APROVEITAR A BLACK FRIDAY AO MÁXIMO</h1>
      <p className="text-center">
        Um Workshop 100% Online e 100% Gratuito Que Vai Acontecer No Dia 24 De
        Novembro (Quinta-Feira) Pelas 20 Horas
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="d-flex-col container"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu email"
          required
        />
        <small>
          Esses dados serão utilizados para entrarmos em contacto com você e
          disponibilizarmos mais conteúdos e ofertas. Caso você não queira mais
          receber os nosso emails, cada email que você receber, incluirá ao
          final, um link que poderá ser usado para remover o seu email da nossa
          lista de distribuição.
        </small>

        <div className="agreement-container d-flex">
          <input type="checkbox" name="agreement" id="agreement" required />
          <label htmlFor="agreement">Concordo em receber os e-mails</label>
        </div>

        <input type="submit" value="Inscrever-se" />
      </form>
    </div>
  );
}

export default Header;
