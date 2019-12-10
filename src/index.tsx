import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import CustomDate from "./components/CustomDate";
import FruitLoops from "./components/FruitLoops";
ReactDOM.render(
  <div>
    <h1>This is JSX</h1>
    <Header text="Aca" />
    <CustomDate />
    <FruitLoops />
  </div>,
  document.getElementById("root")
);
