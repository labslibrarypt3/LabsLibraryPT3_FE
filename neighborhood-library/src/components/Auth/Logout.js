import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const logout = () => {
    return (localStorage.clear(), <Redirect to={"/"} />);
  };

  return (
    <button onClick={logout} class="logout-button">
      Logout
    </button>
  );

  }
export default Logout;

