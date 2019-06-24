import React from "react";
import { NavLink } from "react-router-dom";
import AuthContainer from "../../Auth/AuthContainer";

function Nav() {
  return (
    <div className="App">
      {localStorage.getItem("jwt") ? (
        <nav>
          <NavLink
            to="/add-book/:id"
            activeClassName="selected"
            className="nav-item"
          >
            Add a Book
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <NavLink
            to="/my-shelf/:id"
            activeClassName="selected"
            className="nav-item"
          >
            My Shelf
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <NavLink
            to="/account/:id"
            activeClassName="selected"
            className="nav-item"
          >
            Account
            <hr />
            <div class="pageTurn" />
          </NavLink>
        </nav>
      ) : null}

      <AuthContainer />
    </div>
  );
}

export default Nav;
