import React, { Component } from "react";
import axios from "axios"
import { NavLink, Redirect } from "react-router-dom";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        address:"",
        email:"",
        img:"",
        password:"",
    }
    };
    // getData = () => {
    //     if (localStorage.getItem("jwt")) {
    //       const authToken = localStorage.getItem("jwt");
    //       const endpoint = "http://localhost:4000/api/users/user";
    //       return axios
    //         .get(endpoint, {
    //           headers: { authorization: authToken },
    //           params: { userId: localStorage.getItem("id") }
    //         })
    //         .then(res => {
    //           this.setState({
    //             name: res.data.name,
    //             address:res.data.address,
    //             email: res.data.email,
    //             img: res.data.img,
    //             password: res.data.password
    //           });
    //         })
    //         .catch(err => console.log(err));
    //     } else {
    //       return <Redirect to={"/"} />;
    //     }
    //   };
  

  render(){
    console.log(this.props,'in the userinfo')
      return(
      <>
       <h2> Account Info</h2>
       <div>Name: {this.props.name};</div>
       <div>Address:{this.props.address};</div>
       <div>email:{this.props.email};</div>
       <div>img:{this.props.img};</div>
       <div>password:{this.props.password}</div>
      </>
      )
  }
}
export default UserInfo;