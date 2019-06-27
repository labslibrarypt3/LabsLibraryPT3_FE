import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";
import Stripe from "./Stripe/Stripe";
import UserInfo from "./UserInfo"

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      email: ""
    };
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
          headers: { authorization: authToken },
        })
        .then(res => {
          this.setState({
            userId: res.data.userId,
            name: res.data.name,
            address: res.data.address,
            email: res.data.email,
            img:res.data.img,
            password:res.data.img
          });
        })
        .catch(err => console.log(err));
    } else {
      return <Redirect to={"/"} />;
    }
  };

  render() {
    return(
      !localStorage.getItem("jwt")?
      <Redirect to={"/"} />:
      <div>
        <h2>{this.state.name}</h2>
        <UserInfo
          name= {this.state.name}
          address= {this.state.address}
          email= {this.state.email}
          img={this.state.img}
          password={this.state.password}
        />

        <StripeProvider apiKey="pk_test_j6wi0FWmtWCqFPwU3oCHJA2800c8YshuOy">
          <Elements>
            <Stripe />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Account;
