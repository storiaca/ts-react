import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import CustomDate from "./components/CustomDate";
import FruitLoops from "./components/FruitLoops";

let fruits: Array<string> = ["red", "green", "blue", "yellow", "pink"];
ReactDOM.render(
  <div>
    <h1>This is JSX</h1>
    <Header text="Aca" />
    <CustomDate />
    <FruitLoops fruits={fruits} />
  </div>,
  document.getElementById("root")
);
