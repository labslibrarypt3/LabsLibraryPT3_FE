import React from "react";
import { NavLink } from "react-router-dom";
import AuthContainer from "../../Auth/AuthContainer";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";
import Logout from "../../Auth/Logout";

function Nav() {
  return (
    <div>
      {localStorage.getItem("jwt") ? (
        <nav>
          <NavLink
            to="/add-book"
            activeClassName="selected"
            className="nav-item"
          >
            Add a Book
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <NavLink
            to="/my-shelf"
            activeClassName="selected"
            className="nav-item"
          >
            My Shelf
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <NavLink
            to="/account"
            activeClassName="selected"
            className="nav-item"
          >
            Account
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <Logout />
        </nav>
      ) : (
        <nav>
          <NavLink
            to="/login"
            activeClassName="selected"
            className="nav-item login-button"
          >
            Login
            <hr />
            <div class="pageTurn" />
          </NavLink>
          <NavLink
            to="/register"
            activeClassName="selected"
            className="nav-item login-button"
          >
            Register
            <hr />
            <div class="pageTurn" />
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Nav;
