import React, { Component } from "react";
import OAuthContainer from "./OAuthContainer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import { Redirect } from "react-router-dom";
import MapContainer from "../Search/MapContainer";

class ManualAuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isNewHere: false };
  }

  loginVsRegisterToggler = event => {
    this.setState(prevState => ({ isNewHere: !prevState.isNewHere }));
  };

  render() {
    return (
      <div className="manual-auth-container">
        {this.state.isNewHere ? (
          <Register
            loginVsRegisterToggler={this.loginVsRegisterToggler}
            loggedInStateHandler={this.props.loggedInStateHandler}
          />
        ) : (
          <Login
            loginVsRegisterToggler={this.loginVsRegisterToggler}
            loggedInStateHandler={this.props.loggedInStateHandler}
          />
        )}
      </div>
    );
  }
}
export default ManualAuthContainer;
