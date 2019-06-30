import React, { Component } from "react";
import axios from "axios";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      showError: false,
      messageFromServer: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendEmail = event => {
    event.preventDefault();
    if (this.state.email === "") {
      this.setState({
        showError: false,
        messageFromServer: ""
      });
    } else {
      axios
        .get("http://localhost:4000/api/users/forgot-password", {
          email: this.state.email
        })
        .then(response => {
          if (response.data === "Email not in database") {
            this.setState({
              showError: false,
              messageFromServer:
                "Error: We can't find a user with that email address."
            });
          } else if (
            response.data ===
            "Recovery email sent. Check your email to change your password."
          ) {
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            value={this.state.password}
            placeholder="username@email.com"
            name="email"
            onChange={this.changeHandler}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
