import React, { useEffect } from "react";

type HeaderProps = {
  text: string;
};
const Header = (props: HeaderProps) => {
  useEffect(() => {
    alert(document.querySelector("#myHeader"));
  });
  return (
    <h2 id="myHeader" className="primary-header">
      {props.text}
    </h2>
  );
};

export default Header;
