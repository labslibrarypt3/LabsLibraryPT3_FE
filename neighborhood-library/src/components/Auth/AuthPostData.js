import axios from "axios";

const AuthPostData = (type, userData) => {
  return new Promise((resolve, reject) => {
    let endpoint;

    localStorage.setItem("username", userData.name);
    localStorage.setItem("img", userData.img);

    type === "facebook" || type === "google"
      ? (endpoint = "http://localhost:4000/auths/auth")
      : type === "register"
      ? (endpoint = "http://localhost:4000/auths/manual")
      : (endpoint = "http://localhost:4000/auths/login");
    // console.log (userData)
    axios
      .post(endpoint, userData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("jwt", res.data);
          window.location.replace(
            " http://localhost:3000/my-shelf/home-library"
          );
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.log("login Error", err);
        alert("Error logging in please try again");
      });
  });
};
export default AuthPostData;
