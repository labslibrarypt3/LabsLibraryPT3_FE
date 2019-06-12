import axios from "axios";


export default function AuthPostData(type,userData){
    
    console.log(userData)

    return new Promise((resolve, reject) =>{
        const endpoint = 'http://localhost:4000/auths/auth';
        axios.post(endpoint,userData)
             .then(res => {console.log(res.data);
                localStorage.setItem('jwt',res.data.password)
                localStorage.setItem('id',res.data.userId)
                console.log(localStorage.getItem('jwt'))
                console.log(localStorage.getItem('id'))
            }).catch(err =>{
                console.log('login Error',err)
            })
        
})
}

