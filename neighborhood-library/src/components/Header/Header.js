import React from "react";
import BookSearchBar from "../Header/BookSearchBar";
import Nav from "./Nav/Nav";
import {NavLink} from "react-router-dom"

const Header = props => {
  return (
    <header>
      <h1 className="title">Neighborhood Library</h1>
      <BookSearchBar />
      {props.isLoggedIn ? <Nav /> : <NavLink to="/auth">Sign Up</NavLink>}
    </header>
  );
};

export default Header;
