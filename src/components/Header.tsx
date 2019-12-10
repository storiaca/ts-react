import * as React from "react";

const Header = (props: any) => {
  return (
    <div>
      <h2 className="primary-header">{props.text}</h2>
    </div>
  );
};

// function Header(props) {
//   return <h2>{props.text}</h2>;
// }

export default Header;
