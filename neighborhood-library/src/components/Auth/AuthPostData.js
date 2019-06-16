import axios from "axios";


export default function AuthPostData(type,userData){
    
    console.log(userData)

    return new Promise((resolve, reject) =>{
        const endpoint = 'http://localhost:4000/auths/auth';
        axios.post(endpoint,userData)
             .then(res => {console.log(res,'at set storage');
                localStorage.setItem('jwt',userData.token)
                localStorage.setItem('email',userData.email)
                localStorage.setItem('id',res.data.userId)
                console.log(localStorage, 'authenticate frontend')
    
            }).catch(err =>{
                console.log('login Error',err)
            })
        
})
}

