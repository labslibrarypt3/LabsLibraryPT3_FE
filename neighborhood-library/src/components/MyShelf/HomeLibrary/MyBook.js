import React from "react";


const MyBook = (props) =>{
    console.log(props.cover)

    const removefromLibrary = () =>{
console.log('ira do this')
}

    return(
        <div key={props.key}>
            <div>{props.title}</div>
            <div>{props.authors}</div>
            <div><img src={props.cover}/></div>
            <button onClick={removefromLibrary}>Remove Book</button>
            
        </div>    )
}

export default MyBook;