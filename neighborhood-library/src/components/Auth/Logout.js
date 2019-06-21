import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Landing from "../Landing/Landing"

const Logout = () => {

  const logout = () => {
    return(
      localStorage.clear(),
    <Redirect to={"/"} />
    )
  };
  return <button onClick={logout}>Logout</button>;
  
};

export default Logout;
