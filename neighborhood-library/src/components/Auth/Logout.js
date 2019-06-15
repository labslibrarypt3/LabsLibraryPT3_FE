import React, { Component } from "react";

const Logout = () => {
  return <button onClick={localStorage.clear()}>Logout</button>;
};

export default Logout;
