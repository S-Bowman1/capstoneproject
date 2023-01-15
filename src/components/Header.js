import React from "react";
import logo from "./media/logo.png";

const Header = () => {
  return (
    <div>
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
  }

export default Header;