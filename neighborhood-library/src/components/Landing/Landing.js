import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = props => {
  return (
    <div>
      <h2>Neighborhood Library</h2>
      <div>
        <p>LandingPage</p>
      </div>
      <div>
        <h3>Short blurb about app</h3>
        <p>
          Culpa o et culpa aliquip, pariatur quis voluptate. Probant elit mandaremus,
          mandaremus dolore magna sed amet. Te proident aut arbitror, quis ab nam sunt.
        </p>
      </div>
      <div>
        <h3>Share Your Books</h3>
        <p>
          Culpa o et culpa aliquip, pariatur quis voluptate. Probant elit mandaremus,
          mandaremus dolore magna sed amet. Te proident aut arbitror, quis ab nam sunt.
        </p>
      </div>
      <div>
        <h3>Map to assist search</h3>
        <p>
          Culpa o et culpa aliquip, pariatur quis voluptate. Probant elit mandaremus,
          mandaremus dolore magna sed amet. Te proident aut arbitror, quis ab nam sunt.
        </p>
      </div>
      <Link to="/auth">Register/Login</Link>
    </div>
  );
}

export default LandingPage;
