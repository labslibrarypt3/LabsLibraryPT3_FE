import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import Borrowed from "./Borrowed";
import Loaned from "./Loaned";
import HomeLibrary from "./HomeLibrary";

function MyShelf() {
  return (
    <div>
      <h2>MyShelf</h2>
      <Nav />
      <div>
        <Link to={Borrowed}>Borrowed</Link>
        <Link to={Loaned}>Loaned</Link>
        <Link to={HomeLibrary}>Home Library</Link>
      </div>
    </div>
  );
}

export default MyShelf;
