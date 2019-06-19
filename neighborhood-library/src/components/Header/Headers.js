import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import CheeseburgerMenu from "cheeseburger-menu";
import MenuContent from "./MenuContent";
import "../../App.css";

class Headers extends React.Component {
  state = {
    open: false,
    userId: "",
    name: "",
    email: ""
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  closeMenu() {
    this.setState({ open: false });
  }

  render() {
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
            color="#ea4d33"
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
