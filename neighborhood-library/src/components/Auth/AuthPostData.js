import axios from "axios";

export default function AuthPostData(type, userData) {
  
  return new Promise((resolve, reject) => {
let endpoint;

    type === 'facebook' || type === 'google'? endpoint = "http://localhost:4000/auths/auth"
    :type === 'register'?endpoint = "http://localhost:4000/auths/manual":endpoint = "http://localhost:4000/auths/login"
    axios
      .post(endpoint, userData)
      .then(res => {
        
        localStorage.setItem("jwt", res.data);     
      })
      .catch(err => {
        console.log("login Error", err)
      });
  });
}
