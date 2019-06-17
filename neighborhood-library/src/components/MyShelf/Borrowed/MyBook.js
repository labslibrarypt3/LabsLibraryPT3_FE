import React from "react";


const MyBook = (props) =>{
    return(
        <div key={props.key}>
            <div>{props.title}</div>
            <div>{props.authors}</div>
        </div>    )
}

export default MyBook;