import React from "react";
import DrawerToggleButton from './DrawerToggleButton';
import { NavLink } from "react-router-dom";

const Header = props => (
  <header className="header-bar">
      <h1 className="logo">
        <a href="/">Neighborhood Library</a>
      </h1>
    <nav className="header-navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">my shelf</a>
        </li>
        <li>
          <a href="#">loaned</a>
        </li>
        <li>
          <a href="#">borrowed</a>
        </li>
        <li>
          <a href="#">chat</a>
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
