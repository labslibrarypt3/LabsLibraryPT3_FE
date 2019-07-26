import React from 'react';
import { Link } from 'react-router-dom';
import books from './assets/alfons-morales-YLSwjSy7stw-unsplash.jpg';
import libraryMarker from './assets/noun_Library_2474696.svg';
import messages from './assets/noun_messages_699935.svg';

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
        <img src={libraryMarker} alt="library marker" />
        <div>
          <h3>Map to assist search</h3>
          <p>
            We've intergrated maps and geolocation services to allow you to search libraries near you. It doesn't matter if you are in your local neighborhood, or across the globe, you will be able to borrow a good book.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3>Secure in app messaging</h3>
          <p>
            Communicate securely whith other users to coordinate exchanges.
          </p>
        </div>
        <img src={messages} alt="chat messages" />
      </div>
      <Link to="/auth">Register/Login</Link>
    </div>
  );
}

export default LandingPage;
