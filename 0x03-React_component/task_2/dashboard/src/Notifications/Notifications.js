import React from 'react';
import './Notifications.css';
import Close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    console.log('Close button has been clicked');
  };
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };
  render() {
    return (
      <div>
        <div className='menuItem'>Your notifications</div>
        {this.props.listNotifications.length == 0 ? (
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
              onClick={this.handleClose}
            >
              <img src={Close} alt='Close' />
            </button>
            <ul>
              {this.props.listNotifications.map((notification) => {
                return (
                  <NotificationItem
                    type={notification.type}
                    value={notification.value}
                    key={notification.id}
                    html={notification.html ? notification.html.__html : ''}
                    markAsRead={() => this.markAsRead(notification.id)}
                  ></NotificationItem>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  listNotifications: [],
};
export default Notifications;
