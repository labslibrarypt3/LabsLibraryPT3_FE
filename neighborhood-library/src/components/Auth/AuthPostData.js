import axios from "axios";

export default function AuthPostData(type, userData) {
  
  return new Promise((resolve, reject) => {
let endpoint;

    type === 'facebook' || type === 'google'? endpoint = "http://localhost:4000/auths/auth"
    :type === 'register'?endpoint = "http://localhost:4000/auths/manual":endpoint = "http://localhost:4000/auths/login"
    axios
      .post(endpoint, userData)
      .then(res => {
        console.log (res.data)
        localStorage.setItem("jwt", res.data.password);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("id", res.data.userId);
        
      })
      .catch(err => {
        console.log("login Error", err);
      });
  });
}
