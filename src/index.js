import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import PlayerComponent from "./PlayerComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <PlayerComponent /> */}
  </React.StrictMode>
);
