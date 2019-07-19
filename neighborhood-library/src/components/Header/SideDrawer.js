import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li>
        <Link to="/">Home</Link>
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
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
