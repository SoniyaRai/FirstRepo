import React from "react";
import Logo from "../images/f.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="" />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default Navbar;
