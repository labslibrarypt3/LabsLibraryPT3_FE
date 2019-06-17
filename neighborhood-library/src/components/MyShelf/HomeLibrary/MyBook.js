import React from "react";
import axios from "axios";


const MyBook = (props) =>{


    return(
        
        <div key={props.bookId}>
            <div>{props.title}</div>
            <div>{props.authors}</div>
            <img src={props.cover}/>
            <button onClick={ function buttonClicked (e) {
        const endpoint = "http://localhost:4000/api/books/del/";
        const book = props.bookId
         console.log('buttonclicked',props.bookId)
         axios(endpoint,book)
       }}>Delete</button>
    </div>  )
}

export default MyBook;