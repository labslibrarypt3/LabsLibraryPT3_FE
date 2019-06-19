import React from "react";
import { NavLink } from "react-router-dom";
import AuthContainer from "../../Auth/AuthContainer";

function Nav() {
  return (
    <div className="App">
      {localStorage.getItem("jwt") ? (
        <nav>
          <NavLink to="/add-book/:id" activeClassName="selected">
            Add a Book
          </NavLink>
          <NavLink to="/my-shelf/:id" activeClassName="selected">
            My Shelf
          </NavLink>
          <NavLink to="/account/:id" activeClassName="selected">
            {" "}
            Account
          </NavLink>
        </nav>
      ) : null}

      <AuthContainer />
    </div>
  );
}

export default Nav;
