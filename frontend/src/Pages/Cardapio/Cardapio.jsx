import React from "react";
import "./Cardapio.css";

//image
import photoperfil from "../../images/photoperfilrebys.jpg";

//icons
import { IoMenuSharp } from "react-icons/io5";

function Cardapio() {
  return (
    <main>
      <section className="header-cardapio">
        <h1>REBY'S </h1> <h2>AÇAI</h2>
      </section>
      <div className="div-cardapio">
        <section className="sub-header">
          <div className="img-profile">
            <img src={photoperfil} className="photorebys" />
          </div>
          <div>descrição do rebys</div>
        </section>
        <section className="scroll-options">
          <div className="button-scroll">
            <IoMenuSharp />
          </div>
          <button className="button-scroll">Açais</button>
          <button className="button-scroll">Barcas</button>
          <button className="button-scroll">Sorvetes</button>
          <button className="button-scroll">Milkshakes</button>
          <button className="button-scroll"> Bebidas</button>
        </section>

        <section className="cardapio">cardapio</section>
      </div>
    </main>
  );
}

export default Cardapio;
