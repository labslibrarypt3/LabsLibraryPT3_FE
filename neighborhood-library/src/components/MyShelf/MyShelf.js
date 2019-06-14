import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeLibrary from "./HomeLibrary/HomeLibrary"
import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";
class MyShelf extends Component {
  render() {
    return (
      <div>
        <h2>MyShelf</h2>
        
         <HomeLibrary/>
         <Borrowed/>

        
        <NavLink to="/loaned" component={Loaned}>
          Loaned
        </NavLink>
        <NavLink to="/borrowed" component={Borrowed}>
          Borrowed
        </NavLink>
      </div>

    // set up routes for the above links.
    );
  }
}

export default MyShelf;
