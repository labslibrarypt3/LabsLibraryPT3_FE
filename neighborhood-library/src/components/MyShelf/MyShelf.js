import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Borrowed from "./Borrowed";
import Loaned from "./Loaned";

class MyShelf extends Component {
  render() {
    return (
      <div>
        <h2>MyShelf</h2>
        <NavLink to="/loaned" component={Loaned}>
          Loaned
        </NavLink>
        <NavLink to="/borrowed" component={Borrowed}>
          Borrowed
        </NavLink>
      </div>
    );
  }
}

export default MyShelf;
