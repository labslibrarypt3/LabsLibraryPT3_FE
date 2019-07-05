import React from "react";
import Logout from "../../Auth/Logout";
import { NavLink } from "react-router-dom";

const SubNav = props => {
  return (
    <ul className="nav__submenu">
      <NavLink to="/my-shelf" className="nav__submenu-item ">
        My Shelf
      </NavLink>

      <NavLink to="/add-book" className="nav__submenu-item ">
        Add Book
      </NavLink>

      <NavLink to="/messages" className="nav__submenu-item ">
        Messages
      </NavLink>

      <Logout loggedInStateHandler={props.loggedInStateHandler} />
    </ul>
  );
};

export default SubNav;
