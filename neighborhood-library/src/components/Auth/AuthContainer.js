import React, { Component } from "react";
import AuthPostData from './AuthPostData';
import Login from './Login';
import Register from './Register';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirectToReferrer:false
    };
    this.callback = this.callback.bind(this);
  }
  callback (res, type){

  let authPostData;

  if( type ==='facebook'&& res.email){

  }

  if( type ==='google'&& res.w3.U3){
    
  }

  AuthPostData('/callback',authPostData).then((result)=>{
    let responseJson = result;

    if(responseJson.userData){
      sessionStorage.setItem('userData',JSON.stringify(responseJson));
      this.setState({redirectToReferrer:true});

    }
  })
}


  render() {
   
    if(this.state.redirectToReferrer){
      return (<Redirect to ={'/account'}/>
      )}
    
      const responseGoogle = (response) => {
        console.log(response);
        this.callback(response, 'google');
      }
      
      const responseFacebook = (response) => {
        console.log(response);
        this.callback(response, 'facebook');
      }
      
      const componentClicked =(response) => {
        console.log(response);
      }
      return(
        <div>
        <FacebookLogin
    appId="2561795117185670"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />

     <GoogleLogin
    clientId="276277558253-h0h6fqj0m26r3a20998jeplb75r097g7.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

        <Login />
        <Register />
      <div className="auth-container">
        {this.state.loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div>
      </div>
      )
  }
    
}



export default AuthContainer;
