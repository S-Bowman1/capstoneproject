import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
        </ul>
    </nav>
  );
  }

export default Nav;