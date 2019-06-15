import axios from "axios";

export default function AuthPostData(type, userData) {
  return new Promise((resolve, reject) => {
    const endpoint = "http://localhost:4000/auths/auth";
    axios
      .post(endpoint, userData)
      .then(res => {
        localStorage.setItem("jwt", userData.token);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("name", userData.name);
      })
      .catch(err => console.log(err));
  });
}
