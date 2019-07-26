import React from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

const Logout = props => {
  const logout = () => {
    localStorage.clear();
    window.location.replace(`${feBaseUrl}/auth`);
  };
  return (
    <Link onClick={logout} className="nav__submenu-item">
      Logout
    </Link>
  );
};
export default Logout;
