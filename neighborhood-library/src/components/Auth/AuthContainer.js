import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class AuthContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
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
      </div>
    );
  }
}

const responseGoogle = (response) => {
  console.log(response);
}
const responseFacebook = (response) => {
  console.log(response);
}
const componentClicked =(response) => {
  console.log(response);
}


export default AuthContainer;
