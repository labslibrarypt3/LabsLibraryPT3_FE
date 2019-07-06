import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SubNav from "./SubNav";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountMenu: false
    };
  }

  handleHover = () => {
    this.setState({ showAccountMenu: true });
  };

  handleLeave = () => {
    this.setState({ showAccountMenu: false });
  };

  render() {
    return (
      <nav className="nav" onMouseLeave={this.handleLeave}>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <NavLink
              to={{
                pathname: "/account",
                state: { isLoggedIn: true }
              }}
              onMouseEnter={this.handleHover}
            >
              Account
            </NavLink>
            {this.state.showAccountMenu && (
              <SubNav loggedInStateHandler={this.props.loggedInStateHandler} />
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
