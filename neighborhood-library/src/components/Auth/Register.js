// import React, { Component } from "react";
// import AuthPostData from './AuthPostData';
// import axios from 'axios'
// // import { Link } from "react-router-dom";

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: "",
//       email:""
//     };
//   }

//   handleInput = e => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();
//     axios({
//       method: 'post',
//       url:'http://localhost:4000/auths/add',
//       data:this.state
//     })
//     .then(res => {
//       if (res.status === 200) {
//         this.props.history.push('/');
//       } else {
//         const error = new Error(res.error);
//         throw error;
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       alert('Error logging in please try again');
//     });
//   }


//   render() {
//     return (
//       <div>
//         <form>
//           <label htmlFor="login">Register</label>
//           <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={this.state.username}
//             onChange={this.handleInput}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value={this.state.password}
//             onChange={this.handleInput}
//           />
//            <input
//             type="email"
//             name="email"
//             placeholder="email"
//             value={this.state.email}
//             onChange={this.handleInput}
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;
