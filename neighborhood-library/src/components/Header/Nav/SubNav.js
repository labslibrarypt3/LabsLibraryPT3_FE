import React from "react";
import Logout from "../../Auth/Logout";
import { NavLink } from "react-router-dom";

const SubNav = props => {
  return (
    <ul className="nav__submenu">
      <NavLink to="/my-shelf/home-library" className="nav__submenu-item ">
        My Shelf
      </NavLink>

      <NavLink to="/add-book" className="nav__submenu-item ">
        Add Book
      </NavLink>

      <NavLink to="/chat" className="nav__submenu-item ">
        Messages
      </NavLink>

      <NavLink to="/Account" className="nav__submenu-item ">
        Account
      </NavLink>

      <Logout loggedInStateHandler={props.loggedInStateHandler} />
    </ul>
  );
};

export default SubNav;
