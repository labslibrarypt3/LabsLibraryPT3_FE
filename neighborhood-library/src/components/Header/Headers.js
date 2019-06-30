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
//enables use of icon
library.add(faCommentAlt);

class Headers extends React.Component {
  state = {
    open: false,
    userId: "",
    name: "",
    email: "",
    img: "",
    isLoggedIn: false
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  closeMenu() {
    this.setState({ open: false });
  }
  componentDidMount() {
    this.getData();
  }

  isLoggedIn() {
    this.setState({ isLoggedIn: true });
  }
  isLoggedOut() {
    this.setState({ isLoggedIn: false });
  }
  getData = () => {
    if (localStorage.getItem("jwt")) {
      const authToken = localStorage.getItem("jwt");
      const endpoint = "http://localhost:4000/api/users/user";
      return axios
        .get(endpoint, {
          headers: { authorization: authToken }
        })
        .then(res => {
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            email: res.data.email,
            img: res.data.img,
            isLoggedIn: true
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    let avatar;

    if (isLoggedIn) {
      avatar = this.state.img;
    } else {
      avatar = null;
    }
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
            Neighborhood Library
          </h1>
          <div className="user-nav">
            <img src={avatar} className="avatar" />
            <FontAwesomeIcon icon="comment-alt" className="message-icon" />
          </div>
        </div>
      </header>
    );
  }
}

export default Headers;
