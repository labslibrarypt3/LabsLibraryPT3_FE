import React, { Component } from "react";
import { Link } from "react-router-dom";
import Borrowed from "./Borrowed";
import Loaned from "./Loaned";
import HomeLibrary from "./HomeLibrary";

function MyShelf() {
  return (
    <div>
      <h2>MyShelf</h2>
      <div className="my-shelf-links">
        <Link to={Borrowed}>Borrowed</Link>
        <Link to={Loaned}>Loaned</Link>
        <Link to={HomeLibrary}>Home Library</Link>
      </div>
    </div>
  );
}

export default MyShelf;
