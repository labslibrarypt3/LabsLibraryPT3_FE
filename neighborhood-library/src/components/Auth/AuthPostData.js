import axios from "axios";


export default function AuthPostData(type,userData){
    
    

    return new Promise((resolve, reject) =>{
        
        axios({
           
            method:'post',

            url:'http://localhost:4000/auths/auth',

            data:userData
        })
})
}

//repushing oauth work to development after it was merged out 
