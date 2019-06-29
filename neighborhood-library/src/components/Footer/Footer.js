import React from "react";
import { Link } from "react-router-dom";
import TOS from "../Legal/TOS";
import Privacy from "../Legal/Privacy";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>A Lambda Labs project.</p>
        <a href="#">View the source code.</a>
        <div className="legal-links">
          <Link to="/tos" component={TOS} />
          <Link to="/privacy" component={Privacy} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
