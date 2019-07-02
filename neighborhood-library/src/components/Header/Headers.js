import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import CheeseburgerMenu from "cheeseburger-menu";
import MenuContent from "./MenuContent";
import "../../App.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//enables use of icon
library.add(faCommentAlt);

class Headers extends React.Component {
  state = {
    open: false,
    userId: "",
    name: "",
    email: "",
    img: ""
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  closeMenu() {
    this.setState({ open: false });
  }

  // componentDidMount() {
  //   this.getData();
  // }

  userNav = (
    <div className="user-nav">
      <img className="avatar" src={localStorage.getItem("img")} />

      <FontAwesomeIcon icon="comment-alt" className="message-icon" />
    </div>
  );

  // componentDidUpdate() {
  //   if (localStorage.getItem("img") !== this.state.img) {
  //     this.setState({ img: localStorage.getItem("img") });
  //   }
  // }

  render() {
    return (
      <header>
        <div className="sidebar">
          <CheeseburgerMenu
            isOpen={this.state.open}
            closeCallback={this.closeMenu.bind(this)}
          >
            <MenuContent closeCallback={this.closeMenu.bind(this)} />
          </CheeseburgerMenu>

          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
            className="hamburger-icon"
            border-radius={15}
          />
        </div>
        <div className="header-content">
          <h1 className="title">
            <img id="logo" src={logo} />
            <Link to={{ pathname: "/" }}>Neighborhood Library</Link>
          </h1>

          {/* {avatar ? (
            <div className="user-nav">
              <img src={avatar} className="avatar" />
              <FontAwesomeIcon icon="comment-alt" className="message-icon" />
            </div>
          ) : null} */}
        </div>
      </header>
    );
  }
}

export default Headers;
