import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        name:"",
        address:"",
        email:"",
        img:"",
        password:"",
      },
        edit:false,
        changePassword:false
    }
    };

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
    
  onSubmit = () =>{
    this.setState({
      edit:false,
      changePassword:false
    })
  }

  render(){
    console.log(this.props,'in the userinfo')
    if (!localStorage.getItem("jwt")) {
      return <Redirect to={"/"} />;
    }
    if(this.state.edit){
    return(
    
      <div>
        
        <h2> Enter data to replace</h2>
        <form>
        <div>Name: <input placeholder={this.props.name} type="text" name="name" ref="name" /></div>
        <div>Street address: <input placeholder={this.props.address} type="text" name="address" ref="address" /></div>
        <div>email:<input placeholder={this.props.email} type="email" name="email" ref="email" /></div>
        <div>img:<input placeholder="Enter web address for img" type="text" name="img" ref="img" /></div>
        <button>Submit Changes</button>
        </form>
        
      </div>
    )
    }else{
    if(!this.state.changePassword){
      return(
        <div>
          
        <h2> Account Info</h2>
         <div>Name: {this.props.name};</div>
         <div>Street address:{this.props.address};</div>
         <div>email:{this.props.email};</div>
         <div><img src={this.props.img} alt="user profile"/></div>
         <div><button onClick={this.handleEditClick}>Edit Profile</button></div>
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
