import React from "react";
import lemonpic from "./media/lemonpic.jpg";

const Hero = () => {
  return (
      <div className="hero" style={{ backgroundImage: `url(${lemonpic})` }}>
        <h1 className="title">Welcome To Little Lemon!</h1>
        <p className="subtitle">Chicago, IL</p>
        <p className="description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus nulla eget ante cursus, ut varius orci dignissim. Quisque id arcu risus. Duis non tempor turpis. Ut vitae imperdiet tellus, in euismod neque. In quam turpis, pellentesque venenatis volutpat id, elementum eget massa. Praesent eget leo sapien. Quisque commodo nibh sit amet nisi hendrerit tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id gravida arcu, nec euismod dolor. Curabitur vel quam in erat interdum mollis nec vel velit. Sed pellentesque ex dictum neque eleifend fringilla.</p>
      </div>
  );
  }

export default Hero;