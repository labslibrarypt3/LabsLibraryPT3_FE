import React, { Component } from 'react';
import Router from 'react-router-dom';

class Account extends Component {
    render() {
        return (
            <div>
                My Account
                <Route path='/account/:id/settings' component={Settings} />
            </div>
        );
    }
}

export default Account;