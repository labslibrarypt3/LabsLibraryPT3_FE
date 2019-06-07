import React, { Component } from "react";
import AuthPostData from './AuthPostData';
// import Login from './Login';
// import Register from './Register';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
// import { Link } from "react-router-dom";

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

  let userData;

  if( type ==='facebook'&& res.email){
    userData = {
      name: res.name,
      provider:type,
      email:res.email,
      provider_id:res.id,
      token:res.accessToken
    }

  }

  if( type ==='google'&& res.w3.U3){
      userData = {
        name: res.w3.ig,
        provider:type,
        email:res.w3.U3,
        provider_id:res.El,
        token:res.Zi.access_token
      }
  }

  AuthPostData(type,userData);
}

  render() {
   
    if(this.state.redirectToReferrer){
      return (<Redirect to ={'/account'}/>
      )}
    
      const responseGoogle = (response) => {
        this.callback(response, 'google');
      }
      
      const responseFacebook = (response) => {
        this.callback(response, 'facebook');
      }
      
      const componentClicked =(response) => {
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

        {/* <Login />
        <Register />
      <div className="auth-container">
        {this.state.loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div> */}
      </div>
      )
  }
    
}
export default AuthContainer;
