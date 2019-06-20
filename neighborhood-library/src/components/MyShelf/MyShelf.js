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
        <div className="page">
          <h2>MyShelf</h2>

          <NavLink to="/loaned/:id" component={Loaned}>
            Loaned
          </NavLink>
          <NavLink to="/borrowed/:id" component={Borrowed}>
            Borrowed
          </NavLink>
          <NavLink to="/home-library/:id" component={HomeLibrary}>
            Home Library
          </NavLink>
          {/* <Route path="/loaned/:id" component={Loaned} />
          <Route path="/borrowed/:id" component={Borrowed} />
          <Route path="/home-library/:id" component={HomeLibrary} /> 
          
          ^^^ These aren't rendering, and I don't know why*/}

          <Borrowed />
        </div>
      );
    } else {
      return <Redirect to={"/"} />;
    }
    // set up routes for the above links.
  }
}

export default MyShelf;
