import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeLibrary from "./HomeLibrary/HomeLibrary";
import Borrowed from "./Borrowed/Borrowed";
import Loaned from "./Loaned/Loaned";
import { Route, Link, Redirect } from "react-router-dom";

class MyShelf extends Component {
  constructor() {
    super();
    this.state = {
      hlOpen: true,
      boOpen: false,
      loOpen: false
    };
  }
  handleHlClick = () => {
    this.setState({
      hlOpen: true,
      boOpen: false,
      loOpen: false
    });
  };
  handleBoClick = () => {
    this.setState({
      hlOpen: false,
      boOpen: true,
      loOpen: false
    });
  };
  handleLoClick = () => {
    this.setState({
      hlOpen: false,
      boOpen: false,
      loOpen: true
    });
  };

  render() {
    if (localStorage.getItem("jwt")) {
      if (this.state.hlOpen) {
        return (
          <div className="page">
            <h2>MyShelf</h2>
            <div className="my-shelf-nav">
              <button onClick={this.handleBoClick}>Borrowed</button>
              <button onClick={this.handleLoClick}>Loaned</button>
            </div>
            <HomeLibrary />
          </div>
        );
      }
      if (this.state.boOpen) {
        return (
          <div className="page">
            <h2>MyShelf</h2>
            <div className="my-shelf-nav">
              <button onClick={this.handleHlClick}>HomeLibrary</button>
              <button onClick={this.handleLoClick}>Loaned</button>
            </div>
            <Borrowed />
          </div>
        );
      }
      if (this.state.loOpen) {
        return (
          <div className="page">
            <h2>MyShelf</h2>
            <div className="my-shelf-nav">
              <button onClick={this.handleHlClick}>HomeLibrary</button>
              <button onClick={this.handleBoClick}>Borrowed</button>
            </div>
            <Loaned />
          </div>
        );
      }
    } else {
      return <Redirect to={"/"} />;
    }
  }
}

export default MyShelf;
