import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Marker from './assets/noun_Library_2474696.svg';
import Messages from './assets/noun_messages_699935.svg';
import Books from './assets/noun_books_983242.svg';

const LandingPage = props => {
  return (
    <div className='wrapper'>
      <div className='section parallax bg1'>
        <h1>Neighborhood Library</h1>
      </div>
      <div className='section static'>
        <p>
          A new way to lend and borrow books.
        </p>
      </div>
      <div className='section parallax bg2'>
        <h1>Share Your Books</h1>
      </div>
      <div className='section-2 static'>
        <div className='section'>
          <p>
            Neighborhood Library makes it easy to share your books. Users can effortlessly create Home Libraries others can browse and request.
          </p>
        </div>
        <div className='section column static'>
          <div className='row'>
            <div className='row-cell'>
              <img className='icon' src={Marker} alt='book marker' />
            </div>
            <div className='row-cell row-text column'>
              <h3>Location Search</h3>
              <p>
                We've intergrated maps and geolocation services to allow you to search libraries near you. It doesn't matter if you are in your local neighborhood, or across the globe, you will be able to borrow a good book.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='row-cell row-text column'>
              <h3>Secure in App Messaging</h3>
              <p>
                We Tilio's Chat API to allow you to communicate securely with other users to coordinate exchanges.
              </p>
            </div>
            <div className='row-cell'>
              <img className='icon' src={Messages} alt='chat bubbles' />
            </div>
          </div>
          <div className='row'>
            <div className='row-cell'>
              <img className='icon' src={Books} alt='stack of books' />
            </div>
            <div className='row-cell row-text column'>
              <h3>Returns Guaranteed</h3>
              <p>
                Like your public library, Neighborhood Library's books are free to borrow. And like them we charge late fees for overdue books. This way we can ensure our users are reimburse, or books are returned.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='section parallax bg3'>
        <Link to="/auth" className='link'>Register or Login</Link>
      </div>
    </div>
  );
}

export default LandingPage;
