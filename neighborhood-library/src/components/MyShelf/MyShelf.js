import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";
<<<<<<< HEAD

=======
>>>>>>> 6523265bb364375fd5e08538dc1c9ac43ed56bcb
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
