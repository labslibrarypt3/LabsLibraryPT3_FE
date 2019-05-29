import React from "react";
import { slide as Menu } from "react-hamburger-menu";
import Nav from "../Nav/Nav";


const style = {
    container: {
        borderBottom: '4px solid AliceBlue',
        backgroundColor: 'SkyBlue',
        padding: 10
    },
    title: {
        color: 'white'
    }
}

class Header extends React.Component {

    render(){
        return(
            <header style={style.container}>
                <h1 style={style.title}>Hello React!</h1>
                <Menu />
                <Nav />
            </header>
        )
    }
}

export default Header
