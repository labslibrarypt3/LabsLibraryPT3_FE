import React, { Component } from "react";

const Logout = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <button onClick={logout} class="logout-button">
      Logout
    </button>
  );
};

export default Logout;
