import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
<h2>Follow us!</h2>
<div className="socialicons">
<a><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
<a><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
<a><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>

</div>
    </footer>
  );
  }

export default Footer;