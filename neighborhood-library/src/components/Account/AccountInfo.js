import React from "react";
import { Redirect, Link } from "react-router-dom";
import EditPasswordForm from "./EditPasswordForm";
import EditAccountInfoForm from "./EditAccountInfoForm";
import { FormControl, Form, FormGroup, Button } from "react-bootstrap";

const AccountInfo = props => {
  if (!localStorage.getItem("userId")) {
    window.location.replace(" http://localhost:3000/auth");
  }
  return (
    <section className="account-info">
      <img src={props.img ? props.img : " "} alt="user profile image" />

      <form>
        <div className="form-pair">
          <label>Name:</label> <input readOnly value={props.name} />
        </div>
        <div className="form-pair">
          <label>Street Address:</label>
          <input readOnly value={props.address} />
        </div>
        <div className="form-pair">
          <label>City:</label> <input readOnly value={props.city} />
        </div>
        <div className="form-pair">
          <label>State:</label> <input readOnly value={props.state} />
        </div>
        <div className="form-pair">
          <label>Zipcode:</label> <input readOnly value={props.zidcode} />
        </div>
        <div className="form-pair">
          <label>Email:</label> <input readOnly value={props.email} />
        </div>
      </form>
      <Link to="/account/edit">Edit Account</Link>
    </section>
  );
};

export default AccountInfo;
