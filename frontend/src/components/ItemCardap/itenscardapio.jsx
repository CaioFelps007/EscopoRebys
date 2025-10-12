import React from "react";
import "./itenscardapio.css";

function Items() {
  const itens = [
    {
      id: 1,
      photo: "image 1",
      descript: "açai gostoso com calda de chocolate",
      peso: "770ml",
      preco: "R$19,90",
    },
    {
      id: 2,
      photo: "image 1",
      descript: "açai gostoso com calda de chocolate",
      peso: "770ml",
      preco: "R$19,90",
    },
    {
      id: 3,
      photo: "image 1",
      descript: "açai gostoso com calda de chocolate",
      peso: "770ml",
      preco: "R$19,90",
    },
  ];

  return (
    <div className="iten-cardapio">
      <div className="container-card"></div>
    </div>
  );
}

export default Items;
