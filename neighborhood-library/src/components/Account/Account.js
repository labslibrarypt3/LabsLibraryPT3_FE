import React, { Component } from "react";
import { Route } from "react-router-dom";
import Settings from "./Settings";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';

class Account extends Component {

  constructor(props){
    super(props);
    this.state={
      redirectToReferrer:false,
      name:'',
      email:''
    }
  }
  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('userData'))
    this.setState({name: data.userData.name})
    this.setState({email: data.userData.email})

  }
  render() {
    if(!sessionStorage.getItem('userData')){
return (
<Redirect to={'/'}/> 
)}
    return (
      <div>
        <h2>Welcome {this.state.name}</h2>
        <Link to={Settings} />
        <Route path="/account/:id/settings" component={Settings} />
      </div>
    );
  }
}

export default Account;
