import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logout from "../Auth/Logout";

const Header = props => (
  <header className="header-bar">

    <h1 className="title">
      <a href="/">Neighborhood Library</a>

    </h1>
    <nav className="header-navigation">
      <div className="nav-toggle">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/my-shelf/home-library">My Shelf</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          {localStorage.getItem("jwt") ? (
            <Logout />
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

{
  /* start of logged in question
{props.isLoggedIn ? (
  <Nav loggedInStateHandler={props.loggedInStateHandler} />
) : (
  <nav>
    <NavLink to="/auth">Sign Up</NavLink>
  </nav>
)} */
}
