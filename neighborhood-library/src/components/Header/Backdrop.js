import React from 'react';

const Backdrop = props => (
    <div className='backdrop' onClick={props.backdropClick} />
);

export default Backdrop;