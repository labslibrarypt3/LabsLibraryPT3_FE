import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeLibrary from "./HomeLibrary/HomeLibrary";
import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";
import { Route, Link, Redirect } from "react-router-dom";

class MyShelf extends Component {
  render() {
    if (localStorage.getItem("jwt")) {
      return (
        <div>
          <h2>MyShelf</h2>
          <HomeLibrary />
          <Loaned />
          <Borrowed />
          <NavLink to="/loaned" component={Loaned}>
            Loaned
          </NavLink>
          <NavLink to="/borrowed" component={Borrowed}>
            Borrowed
          </NavLink>
        </div>
      );
    } else {
      return <Redirect to={"/"} />;
    }
    // set up routes for the above links.
  }
}

export default MyShelf;
