import React, { use } from "react";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import "./Home.css";

//icons
import { MdDeliveryDining } from "react-icons/md";
import { GiPaperBagFolded } from "react-icons/gi";

//images
import acaisolto from "../../images/acaisolto.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <img src={acaisolto} className="acaisolto" />
      <img src={acaisolto} className="acaisolto" />
      <img src={acaisolto} className="acaisolto" />

      <div className="space">
        <div className="title-home">
          <h1>Reby's Açai</h1>
          <div className="slogan-home">Conheça o melhor do açaí</div>
        </div>
        <section className="section-icons">
          <GiPaperBagFolded />

          <MdDeliveryDining />
        </section>

        <button
          className="button-home"
          onClick={() => navigate("/cardapioonline")}
        >
          Vizualizar Cardápio
        </button>
      </div>
    </div>
  );
}

export default Home;
