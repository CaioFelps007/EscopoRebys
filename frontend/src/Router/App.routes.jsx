import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "../Pages/Home/Home";
import Cardapio from "../Pages/Cardapio/Cardapio";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapioonline" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
