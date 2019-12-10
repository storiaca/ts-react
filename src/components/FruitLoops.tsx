import React from "react";

const FruitLoops = () => {
  let fruits: Array<string> = ["red", "green", "blue", "yellow"];
  return (
    <div>
      <h1>FruitLoops</h1>
      <ul>
        {fruits.map((fruit, i) => {
          // let color: string = "";
          // if (fruit === "red") {
          //   color = "red";
          // }
          return (
            <li key={i} style={{ color: fruit }}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FruitLoops;
