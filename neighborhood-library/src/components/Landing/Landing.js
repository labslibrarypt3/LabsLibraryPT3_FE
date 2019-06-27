import React, { Component } from "react";
import AuthContainer from "../Auth/AuthContainer"
import Register from "../Auth/Register";
import Login from "../Auth/Login"
import { Redirect } from "react-router-dom";

import MapContainer from "../Search/MapContainer"


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  };
  handleLoginClick = () => {
    this.setState({
      loggedIn: true

    })}
  handleRegClick = () => {
      this.setState({
        loggedIn: false
      })}


  render() {
    return(
    localStorage.getItem("jwt")?
    <Redirect to={"/account"} />:
    
    <div>
      <div className="delete-me-filler">
        <h2>Welcome</h2>
        <p>
          Welcome to the Neighborhood Library. Here you can add books to your
          lending library so that your neighbors and friends can check them out
          from you. We've taken the pesky problem of forgetful friends out of
          the equation by empowering every person to charge late fees through
          the app.
        </p>
        <h3>JOIN TODAY!</h3>
        
        <AuthContainer/>
        <h3>Login or register manually</h3>
        <button onClick={this.handleLoginClick}>Login</button>
        <button onClick={this.handleRegClick}>Register</button>
        {this.state.loggedIn?<Login/>:<Register/>}
        <div>
       <MapContainer/>
       </div>
      </div>
    </div> 
    )
}
}
export default Landing;
