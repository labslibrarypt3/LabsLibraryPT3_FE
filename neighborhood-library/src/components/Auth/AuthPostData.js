import axios from "axios";


export default function AuthPostData(type,userData){
    
    // console.log(userData)

    return new Promise((resolve, reject) =>{
        const endpoint = 'http://localhost:4000/auths/auth';
        axios.post(endpoint,userData)
             .then(res => {console.log(res.data);
                localStorage.setItem('jwt',userData.token)
                localStorage.setItem('email',userData.email)
                // console.log('token storage',localStorage.getItem('jwt'))
                // console.log('email storeage',localStorage.getItem('email'))
            }).catch(err =>{
                console.log('login Error',err)
            })
        
})
}

