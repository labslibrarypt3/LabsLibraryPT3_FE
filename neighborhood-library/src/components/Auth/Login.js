// import React, { Component } from "react";
// import Axios from "axios";


// export default class Login extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email : '',
//       password: ''
//     };
//   }

//   handleInputChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value
//     });
//   }
// //   axios({
           
// //     method:'post',
// //     url:'http://localhost:4000/auths/register',
// //     data:userData
// // })
  
//     onSubmit = (event) => {
//       event.preventDefault();
//       Axios({
//         method: 'post',
//         url:'http://localhost:4000/auths/login',
//         data:this.state
//       })
//       .then(res => {
//         if (res.status === 200) {
//           this.props.history.push('/');
//         } else {
//           const error = new Error(res.error);
//           throw error;
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         alert('Error logging in please try again');
//       });
//     }
  
  
 
//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <h1>Login Below!</h1>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={this.state.email}
//           onChange={this.handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           required
//         />
//        <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }
