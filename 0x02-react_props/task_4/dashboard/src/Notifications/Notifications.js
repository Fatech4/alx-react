import React from 'react';
import './Notifications.css';
import Close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
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
      )}
    </div>
  );
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
Notifications.defaultProps = {
  displayDrawer: false,
};
export default Notifications;
