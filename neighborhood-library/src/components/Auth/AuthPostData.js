export function PostData(type,userData){
    let baseURL = 'https://pt3-neighborhood-library-back.herokuapp.com/';

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