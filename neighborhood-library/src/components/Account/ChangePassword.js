
import React, { Component } from "react";



class ChangePassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render(){return(
        <div className="user-info">
            <h2>Change Password</h2>
            <form>
              <div>
                <label>Current Password:</label>
                <input
                  placeholder={"Enter current password"}
                  type="password"
                  name="currentPassword"
                  ref="currentPassword"
                />
              </div>
              <div>
                <label>New Password:</label>
                <input
                  placeholder={"Enter new password"}
                  type="password"
                  name="newPassword"
                  ref="newPassword"
                />
              </div>
              <div>
                <label>Confirm password:</label>
                <input
                  placeholder={"Enter current password"}
                  type="password"
                  name="currentPassword"
                  ref="currentPassword"
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
    )

    }}
    export default ChangePassword