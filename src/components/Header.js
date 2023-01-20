import React from "react";
import logo from "./media/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="headerlogo" />
    </header>
  );
  }

export default Header;