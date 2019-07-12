import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from 'react-sidebar';

import SubNav from "./SubNav";




class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: false
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<div>
//           <SubNav loggedInStateHandler={this.props.loggedInStateHandler} />
//         </div>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//         pullRight={true}
//       >
//         <button onClick={() => this.onSetSidebarOpen(true)}>
//          account Sidebar (will go on right)
//         </button>
//       </Sidebar>
//     );
//   }
// }





  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
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
