import { CATEGORIAS } from "./data";
import { ItemsSection } from "./itenscardapio";

export default function Itens() {
  return (
    <div>
      {CATEGORIAS.map((categoria) => (
        <ItemsSection
          key={categoria.title}
          title={categoria.title}
          itens={categoria.itens}
        />
      ))}
    </div>
  );
}
