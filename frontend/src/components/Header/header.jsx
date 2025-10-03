import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="header-component">
      <nav>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
            <Link to="/cardapioonline"> Cardápio </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
