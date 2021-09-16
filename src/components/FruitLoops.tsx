import React from "react";

type FruitLoopsProps = {
  fruits: Array<string>;
};
const FruitLoops = (props: FruitLoopsProps) => {
  return (
    <div>
      <h1>FruitLoops</h1>
      <ul>
        {props.fruits.map((fruit, i) => {
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
