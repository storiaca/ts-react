import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/Header";

ReactDOM.render(
  <div>
    <h1>This is JSX</h1>
    <Header text="Aca" />
    <Header text="Green" />
  </div>,
  document.getElementById("root")
);
