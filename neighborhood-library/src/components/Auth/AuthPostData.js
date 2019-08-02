import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const feBaseUrl = process.env.REACT_APP_FE_BASE_URL;

const AuthPostData = (type, userData) => {
  console.log(type, userData, "inside authpostdata");
  return new Promise((resolve, reject) => {
    let endpoint;

    localStorage.setItem("username", userData.name);
    localStorage.setItem("img", userData.img);

    type === "facebook" || type === "google"
      ? (endpoint = `${baseUrl}/auths/auth`)
      : type === "register"
      ? (endpoint = `${baseUrl}/auths/manual`)
      : (endpoint = `${baseUrl}/auths/login`);

    axios
      .post(endpoint, userData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("jwt", res.data);

          window.location.replace(`${feBaseUrl}/my-shelf/home-library`);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        alert("Error logging in please try again");
      });
  });
};
export default AuthPostData;
