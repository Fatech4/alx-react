import React from 'react';
import './Notifications.css';
import Close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ listNotifications }) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div>
      <div className='menuItem'>Your notifications</div>
      {listNotifications.length == 0 ? (
        <p>No new notification for now</p>
      ) : (
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
            {listNotifications.map((notification) => {
              return (
                <NotificationItem
                  type={notification.type}
                  value={notification.value}
                  key={notification.id}
                  html={notification.html ? notification.html.__html : ''}
                ></NotificationItem>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  listNotifications: [],
};
export default Notifications;
