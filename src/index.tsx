import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header";
import CustomDate from "./components/CustomDate";

ReactDOM.render(
  <div>
    <h1>This is JSX</h1>
    <Header text="Aca" />
    <CustomDate />
  </div>,
  document.getElementById("root")
);
