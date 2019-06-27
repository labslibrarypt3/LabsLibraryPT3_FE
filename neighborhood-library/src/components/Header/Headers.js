import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import CheeseburgerMenu from "cheeseburger-menu";
import MenuContent from "./MenuContent";
import "../../App.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Headers extends React.Component {
  state = {
    open: false,
    userId: "",
    name: "",
    email: "",
    img:""
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
  getData = () => {
    if (localStorage.getItem("jwt")) {
      const authToken = localStorage.getItem("jwt");
      const endpoint = "http://localhost:4000/api/users/user";
      return axios
        .get(endpoint, {
          headers: { authorization: authToken }
        })
        .then(res => {
          console.log(res.data,`in then`)
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            email: res.data.email,
            img: res.data.img
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    console.log(this.state,'here is the header')
    return (
      <header>
        <div classname="sidebar">
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
        <h1 className="title">Neighborhood Library!</h1>
      </header>
    );
  }
}

export default Headers;
