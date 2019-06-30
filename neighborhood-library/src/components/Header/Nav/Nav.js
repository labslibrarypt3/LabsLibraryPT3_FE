import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../Auth/Logout";

function Nav() {
  return (
    <div>
      {localStorage.getItem("jwt") ? (
        <nav id="logged-in-nav">
          <NavLink
            to="/add-book"
            activeClassName="selected"
            className="nav-item"
          >
            Add a Book
            <hr />
            <div className="pageTurn" />
          </NavLink>
          <NavLink
            to="/my-shelf"
            activeClassName="selected"
            className="nav-item"
          >
            My Shelf
            <hr />
            <div className="pageTurn" />
          </NavLink>
          <NavLink
            to="/account"
            activeClassName="selected"
            className="nav-item"
          >
            Account
            <hr />
            <div className="pageTurn" />
          </NavLink>
          <Logout />
        </nav>
      ) : (
        <nav id="logged-out-nav">
          <NavLink
            to="/"
            activeClassName="selected"
            className="nav-item login-button"
          >
            Login
            <hr />
            <div className="pageTurn" />
          </NavLink>
          <NavLink
            to="/"
            activeClassName="selected"
            className="nav-item login-button"
          >
            Register
            <hr />
            <div className="pageTurn" />
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Nav;
