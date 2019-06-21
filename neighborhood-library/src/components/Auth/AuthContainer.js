import React, { Component } from "react";
import AuthPostData from "./AuthPostData";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import Logout from "./Logout";
import Register from "./Register"
import Landing from "../Landing/Landing"
import "../../App.css";


class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.callback = this.callback.bind(this);
  }
  callback(res, type) {
    let userData;
console.log(res)
    if (type === "facebook" && res.email) {
      this.setState({ loggedIn: true });
      userData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        img:res.picture
      };
    }

    if (type === "google" && res.w3.U3) {
      this.setState({ loggedIn: true });
      userData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        img:res.w3.Paa
      };
      
    }

    AuthPostData(type, userData);
  }

  render() {
  
    const responseGoogle = response => {
      this.callback(response, "google");
    };

    const responseFacebook = response => {
      this.callback(response, "facebook");
    };

    const componentClicked = response => {};
    return (
      <div className="auth-buttons">
        {!localStorage.getItem("jwt") ? (
          <div className="login-section">
            <FacebookLogin
              appId="2561795117185670"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              // cssClass="login-button"
              icon="fa fa-facebook"
              textButton="Login"
            />

            <GoogleLogin
              clientId="276277558253-h0h6fqj0m26r3a20998jeplb75r097g7.apps.googleusercontent.com"
              icon={true}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="login-button"
            />
          </div>
        ) : (

          <button
            className="logout-button"
            onClick={() => {
              localStorage.clear();
              this.setState({ loggedIn: false });
            }}
          >
            Logout
          </button>

        )}
      </div>
    );
  }
}
export default AuthContainer;
