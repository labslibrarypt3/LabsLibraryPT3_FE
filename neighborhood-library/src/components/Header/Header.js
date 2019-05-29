import React from "react";
import { slide as Menu } from "react-hamburger-menu";
import Nav from "../Nav/Nav";


// class Header extends React.Component {
//     render() {
    export default props => {
    return (
        <Menu {...props}>
            <div>Hello</div>
        <Nav />
    </Menu>
    );
    }
//     }
// }
// export default Header;

