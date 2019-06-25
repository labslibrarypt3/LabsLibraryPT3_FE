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
        edit:false,
        changePassword:false
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
    handlePasswordClick = () => {
      this.setState({
        edit: false,
        changePassword: true
      })}
    

    handleEditClick = () => {
      this.setState({
        edit: true,
        changePassword:false
      })}
    
  

  render(){
    console.log(this.props,'in the userinfo')
    
    if(this.state.edit){
    return(
    
      <div>
        <h2> Enter data to replace</h2>
        <div>Name: <input placeholder={this.props.name} type="text" name="name" ref="name" /></div>
        <div>Street address: <input placeholder={this.props.address} type="text" name="address" ref="address" /></div>
        <div>email:<input placeholder={this.props.email} type="email" name="email" ref="email" /></div>
        <div>img:<input placeholder="Enter web address for img" type="text" name="img" ref="img" /></div>
        <div><button onClick={this.handleEditClick}>Submit</button></div>
        
      </div>
    )
    }else{
    if(this.state.changePassword){
      return(
        <div>
          
        <h2> Account Info</h2>
         <div>Name: {this.props.name};</div>
         <div>Street address:{this.props.address};</div>
         <div>email:{this.props.email};</div>
         <div><img src={this.props.img}/></div>
        <div><button onClick={this.handleClick}>Edit profile</button></div>
        <div><button onClick={this.handlePasswordClick}>Change Password</button></div>

    </div>
      )
    }else{
      return(
      <div>

          <h2>Enter current password</h2>
          <form>
          <div>
          Current password: <input placeholder={"Enter current password"} type="password" name="currentPassword" ref="currentPassword" />
          </div>
          <div>
          New password:<input placeholder={"Enter new password"} type="password" name="newPassword" ref="newPassword" />
          </div>
          <div>
          Confirm password:<input placeholder={"Enter current password"} type="password" name="currentPassword" ref="currentPassword" />
          </div>
          </form>

      </div>

      
    )
  }  
} 
  }
}

      
     
  


export default UserInfo;
