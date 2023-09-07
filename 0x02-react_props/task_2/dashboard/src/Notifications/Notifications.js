import React from 'react';
import './Notifications.css';
import Close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div>
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
          <NotificationItem
            type='default'
            value='New course available'
          ></NotificationItem>
          <NotificationItem
            type='urgent'
            value='New resume available'
          ></NotificationItem>

          <NotificationItem
            type='urgent'
            html={getLatestNotification()}
          ></NotificationItem>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
