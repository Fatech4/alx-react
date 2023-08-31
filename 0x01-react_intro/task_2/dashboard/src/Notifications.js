import React from 'react';
import './Notifications.css';
import App from './App';
import Close from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };
  return (
    <>
      <div className='Notifications' style={{ position: 'relative' }}>
        <p>Here is the list of notifications</p>
        <button
          aria-label='Close'
          style={{
            position: 'absolute',
            display: 'block',
            right: '10px',
            top: '10px',
          }}
          onClick={handleClose}
        >
          <img src={Close} alt='Close' /> 
        </button>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li
            data-priority='urgent'
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
      <App />
    </>
  );
}

export default Notifications;
