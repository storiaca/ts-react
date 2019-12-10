import React from "react";

type HeaderProps = {
  text: string;
};
const Header = (props: HeaderProps) => {
  return <h2 className="primary-header">{props.text}</h2>;
};

export default Header;
