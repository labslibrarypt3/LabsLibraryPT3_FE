import React from "react";
import { Link } from "react-router-dom";
import TOS from "../Legal/TOS";
import Privacy from "../Legal/Privacy";

const Footer = () => {
  return (
    <footer id="footer">
      <p>A Lambda Labs project.</p>
      <a href="https://github.com/labslibrarypt3 ">View the source code.</a>
      <div className="legal-links">
        <Link to="/tos">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
