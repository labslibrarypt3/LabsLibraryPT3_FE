import axios from "axios";

<<<<<<< HEAD
export default function AuthPostData(type, userData) {
  return new Promise((resolve, reject) => {
    const endpoint = "http://localhost:4000/auths/auth";
    axios
      .post(endpoint, userData)
      .then(res => {
        localStorage.setItem("jwt", userData.token);
        localStorage.setItem("email", userData.email);
      })
      .catch(err => err.json({ error: err }));
  });
=======

export default function AuthPostData(type,userData){
    
    console.log(userData)

    return new Promise((resolve, reject) =>{
        const endpoint = 'http://localhost:4000/auths/auth';
        axios.post(endpoint,userData)
             .then(res => {console.log(res.data);
                localStorage.setItem('jwt',userData.token)
                localStorage.setItem('email',userData.email)
                console.log(localStorage, 'authenticate frontend')
                // localStorage.setItem ("id",res.data.u)
                // console.log('token storage',localStorage.getItem('jwt'))
                // console.log('email storeage',localStorage.getItem('email'))
            }).catch(err =>{
                console.log('login Error',err)
            })
        
})
>>>>>>> 073f96300eeec053792a36b0aecef2813f5f9192
}
