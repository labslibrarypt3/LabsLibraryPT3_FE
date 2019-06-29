
import React, { Component } from "react";



class ChangeUserInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: " ",
        name: " ",
        firstName: " ",
        lastName: " ",
        email: " ",
        address: " ",
        city: " ",
        state: " ",
        zipcode: " ",
        img: " ",
        password: " ",
        stripe_user_id: " "
      }
    }
    render(){return(
        <div className="user-info">
        <h2>Edit Profile</h2>
        <form className="edit-profile-form">
          <div className="form-pair">
            <label>Name</label>
            <input
              placeholder={this.props.name}
              type="text"
              name="name"
              ref="name"
            />
          </div>
          <div className="form-pair">
            <label>FirstName</label>
            <input
              placeholder={this.props.firstname}
              type="text"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-pair">
            <label>LastName</label>
            <input
              placeholder={this.props.lastname}
              type="text"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-pair">
            <label>Street Address</label>
            <input
              
              placeholder={this.props.address}
              type="text"
              name="address"
              ref="address"
            />
          </div>
          <div className="form-pair">
            <label>City</label>
            <input
              placeholder={this.props.city}
              type="text"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-pair">
            <label>State</label>
            <input
              placeholder={this.props.state}
              type="text"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-pair">
            <label>Zipcode</label>
            <input
              placeholder={this.props.zipcode}
              type="text"
              name="name"
              ref="name"
            />
          </div>

          <div className="form-pair">
            <label>Email</label>
            <input
              placeholder={this.props.email}
              type="email"
              name="email"
              ref="email"
            />
          </div>
          <div className="form-pair">
            <label>Avatar url:</label>
            <input
              placeholder="Enter web address for img"
              type="text"
              name="img"
              ref="img"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>



    )
    }
}

export default ChangeUserInfo;