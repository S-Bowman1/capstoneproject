import React from "react";
import lemonpic from "./media/lemonpic.jpg";

const Hero = () => {
  return (
      <div className="hero" style={{ backgroundImage: `url(${lemonpic})` }}>
        <h1 className="title">Welcome To Little Lemon!</h1>
        <p className="subtitle">Chicago, IL</p>
      </div>
  );
  }

export default Hero;