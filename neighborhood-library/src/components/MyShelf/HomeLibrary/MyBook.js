import React from "react";
import axios from "axios";


const MyBook = (props) =>{


    return(
        
        <div key={props.bookId}>
            <div>{props.title}</div>
            <div>{props.authors}</div>
            <img src={props.cover}/>
            <button onClick={ function buttonClicked (e) {
        
        const book = props.bookId
         console.log('buttonclicked',props.bookId)
         return axios({
             method:'DELETE',
             url:'http://localhost:4000/api/books/',
             data:props.bookId
         })
       }}>Delete</button>
    </div>  )
}
//'http://localhost:4000/api/books/'
export default MyBook;