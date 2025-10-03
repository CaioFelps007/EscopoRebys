import React, { use } from "react";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <div className="space">
        <div className="title-home">
          <h1>Reby's Açai</h1>
          <div className="slogan-home">Conheça o melhor do açaí</div>
        </div>

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
