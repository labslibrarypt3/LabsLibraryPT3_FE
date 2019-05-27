export default function AuthPostData(type,userData){
    console.log(userData)
    let baseURL = 'http://localhost:4000/auths/callback';

    return new Promise((resolve, reject) =>{

        fetch(baseURL,{
            method:'POST',
            body:JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((res)=>{
            resolve(res);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}