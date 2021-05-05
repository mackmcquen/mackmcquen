import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import CRT from "./containers/CRT";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CRT />
  </BrowserRouter>,
  document.getElementById("root")
);
