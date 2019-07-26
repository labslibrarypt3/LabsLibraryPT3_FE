import React from "react";
import { Redirect, withRouter } from "react-router-dom";
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

const Logout = props => {
  const logout = () => {
    localStorage.clear();
    props.loggedInStateHandler();
    window.location.replace(`${feBaseUrl}/auth`);
  };
  return (
    <button onClick={logout} className=" nav__submenu-item">
      Logout
    </button>
  );
};
export default Logout;
