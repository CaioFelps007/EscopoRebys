import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterApp from "./Router/App.routes.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
