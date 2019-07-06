import React from "react";
import { Redirect, withRouter } from "react-router-dom";

const Logout = props => {
  const logout = () => {
    localStorage.clear();
    props.loggedInStateHandler();
  };
  return (
    <button onClick={logout} className=" nav__submenu-item">
      Logout
    </button>
  );
};
export default Logout;
