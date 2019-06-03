import React from "react";

import SignupForm from "./SignupForm/SignupForm.js";

class LandingPage extends React.Component {
    render () {
        return (
        <div>
        Discover books just around the corner... 
        <SignupForm />
        </div>
        );
    }
}

export default LandingPage;