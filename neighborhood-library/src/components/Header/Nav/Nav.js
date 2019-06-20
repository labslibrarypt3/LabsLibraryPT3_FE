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
            <hr />
          </NavLink>
          <NavLink to="/my-shelf/:id" activeClassName="selected">
            My Shelf
            <hr />
          </NavLink>
          <NavLink to="/account/:id" activeClassName="selected">
            {" "}
            Account
            <hr />
          </NavLink>
        </nav>
      ) : null}

      <AuthContainer />
    </div>
  );
}

export default Nav;
