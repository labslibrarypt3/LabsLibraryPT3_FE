import axios from "axios";


export default function AuthPostData(type,userData){
    console.log(userData)
    

    return new Promise((resolve, reject) =>{

        axios({
            method:'post',
            url:'http://localhost:4000/auths/callback',
            data:userData
        })
})
}

// Send a POST request
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });