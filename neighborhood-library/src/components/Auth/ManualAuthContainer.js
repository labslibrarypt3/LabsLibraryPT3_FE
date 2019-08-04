import React, { Component } from "react";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

class ManualAuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isNewHere: false };
  }

  loginVsRegisterToggler = event => {
    //set state to the opposite of the previous state (false -> true, vice versa)

    this.state.isNewHere
      ? this.setState({ isNewHere: false })
      : this.setState({ isNewHere: true });
  };

  render() {
    return (
      <section className="manual-auth-container">
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
      </section>
    );
  }
}
export default ManualAuthContainer;
