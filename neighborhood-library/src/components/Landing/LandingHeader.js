import React from 'react';
import { Link } from 'react-router-dom';

import './LandingHeader.css';

const LandingHeader = props => {
  return (
    <div className="l-header">
      <Link to="/auth" className='link'>
        <p>Register or Login</p>
      </Link>
    </div>
  );
}

export default LandingHeader;
