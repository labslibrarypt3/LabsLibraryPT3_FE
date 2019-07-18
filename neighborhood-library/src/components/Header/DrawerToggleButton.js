import React from 'react';


const DrawerToggleButton = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
) 
export default DrawerToggleButton;