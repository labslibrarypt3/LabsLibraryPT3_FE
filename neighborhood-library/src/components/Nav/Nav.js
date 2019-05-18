import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <h2>Neighborhood Library</h2>
      </header>*/}
      <nav>
        <NavLink to="/addBook" activeClassName="selected">
          Add a Book
        </NavLink>
        <NavLink to="/myShelf" activeClassName="selected">
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
