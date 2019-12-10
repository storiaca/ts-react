import * as React from "react";

const Header = (props: any) => {
  return (
    <div>
      <h2 style={{ color: "red" }}>{props.text}</h2>
    </div>
  );
};

// function Header(props) {
//   return <h2>{props.text}</h2>;
// }

export default Header;
