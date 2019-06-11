import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import CheeseburgerMenu from "cheeseburger-menu";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import MenuContent from "./MenuContent";

const style = {
<<<<<<< HEAD
    container: {
        borderBottom: '4px solid AliceBlue',
        backgroundColor: '#BCBCBE',
        padding: 10
    },
    title: {
        color: 'white'
    },
}
=======
  container: {
    borderBottom: "4px solid AliceBlue",
    backgroundColor: "SkyBlue",
    padding: 10
  },
  title: {
    color: "white"
  }
};
>>>>>>> 6523265bb364375fd5e08538dc1c9ac43ed56bcb

class Headers extends React.Component {
  state = {
    open: false
  };
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  closeMenu() {
    this.setState({ open: false });
  }

<<<<<<< HEAD
    render(){
        return(
            <header style={style.container}>
                <h1 style={style.title}>Neighborhood Library!</h1>
                <div classname = "sidebar">
                <CheeseburgerMenu
                isOpen={this.state.open}
                closeCallback={this.closeMenu.bind(this)}>
                <MenuContent closeCallback={this.closeMenu.bind(this)}/>
                </CheeseburgerMenu>
                <HamburgerMenu 
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
                />
                </div>
            </header>
        )
    }
=======
>>>>>>> 6523265bb364375fd5e08538dc1c9ac43ed56bcb
  render() {
    return (
      <header style={style.container}>
        <h1 style={style.title}>Neighborhood Library</h1>
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
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </header>
    );
  }
}

export default Headers;
