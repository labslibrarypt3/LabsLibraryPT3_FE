import React from "react";
import { Redirect, withRouter } from "react-router-dom";

const Logout = withRouter(({ history }, props) => {
  const logout = () => {
    localStorage.clear();
    // <Redirect to={"http://localhost:3000/"} />
    history.push("/");
  };

  return (
    <button onClick={logout} className="logout-button">
      Logout
    </button>
  );
});
export default Logout;
