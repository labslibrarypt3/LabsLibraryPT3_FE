import React from "react";
import Logout from "../../Auth/Logout";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <NavLink to="/my-shelf">My Shelf</NavLink>
      </li>
      <li className="nav__submenu-item ">
        <NavLink to="/add-book">Add Book</NavLink>
      </li>
      <li className="nav__submenu-item ">
        <NavLink to="/messages">Messages</NavLink>
      </li>
      <li className="nav__submenu-item ">
        <Logout />
      </li>
    </ul>
  );
};

export default SubNav;
