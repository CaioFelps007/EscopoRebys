import React from "react";
import "./itenscardapio.css";

export function ItemsCard({ photo, descript, peso, preco }) {
  return (
    <article className="card-produto">
      <div className="image-card">
        <img src={photo} />
      </div>
      <div className="texts-card">
        <h2>{peso}</h2>
        <p>{descript}</p>
        <h4>{preco}</h4>
      </div>
    </article>
  );
}

export function ItemsSection({ title, itens }) {
  return (
    <div className="item-cardapio">
      <h1>{title}</h1>
      <div className="container-card">
        {itens.map((item) => (
          <ItemsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
