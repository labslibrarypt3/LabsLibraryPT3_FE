export default function AuthPostData(type,userData){
    let baseURL = 'http://localhost:4000/auths';

    return new Promise((resolve, reject) =>{

        fetch(baseURL+type,{
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