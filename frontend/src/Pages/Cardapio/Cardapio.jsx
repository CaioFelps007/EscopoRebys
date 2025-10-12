import React from "react";
import "./Cardapio.css";

function Cardapio() {
  return (
    <main>
      <section className="header-cardapio">section-header</section>
      <div className="div-cardapio">
        <section className="sub-header">
          <div>descrição do rebys</div>
          <section className="scroll-options">scroll de umas parada</section>
        </section>
        <section className="cardapio">cardapio</section>
      </div>
    </main>
  );
}

export default Cardapio;
