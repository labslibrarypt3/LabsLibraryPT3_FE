import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/add-book/:id" activeClassName="selected">
          Add a Book
        </NavLink>
        <NavLink to="/my-shelf/:id" activeClassName="selected">
          My Shelf
        </NavLink>
        <NavLink to="/search" activeClassName="selected">
          Search
        </NavLink>
        <NavLink to="/account" activeClassName="selected">
          Account
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
