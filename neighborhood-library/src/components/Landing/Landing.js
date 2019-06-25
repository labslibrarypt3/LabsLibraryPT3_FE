import React, { Component } from "react";
import AuthContainer from "../Auth/AuthContainer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  handleLoginClick = () => {
    this.setState({
      loggedIn: true
    });
  };
  handleRegClick = () => {
    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <div className="landing-auth">
        <AuthContainer />
        <div className="auth-divider">
          <p>or</p>
        </div>
        <div className="manual-auth-container">
          {this.state.loggedIn ? (
            <div>
              <Login />
              <p>Need an account?</p>
              <button className="manual-auth-nav" onClick={this.handleRegClick}>
                Register
              </button>
            </div>
          ) : (
            <div className="manual-auth-container">
              <Register />
              <p>Already have an account?</p>
              <button
                className="manual-auth-nav"
                onClick={this.handleLoginClick}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Landing;
