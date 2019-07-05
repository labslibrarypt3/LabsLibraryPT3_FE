import React from "react";
import Logout from "../../Auth/Logout";
const SubNav = () => {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>My Shelf</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Add Book</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Messages</a>
      </li>
      <li className="nav__submenu-item ">
        <Logout />
      </li>
    </ul>
  );
};

export default SubNav;
