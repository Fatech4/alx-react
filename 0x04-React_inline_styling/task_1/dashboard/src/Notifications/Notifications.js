import React from 'react';
import './Notifications.css';
import Close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    const currentList = this.props.listNotifications;
    const nextList = nextProps.listNotifications;

    if (currentList.length !== nextList.length) {
      return true; // If lengths are different, the arrays are different
    }

    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i].id !== nextList[i].id) {
        return true; // If any id is different, the arrays are different
      }
      // Compare other properties if needed
    }

    return false; // If all elements are the same, the arrays are the same
  }

  // Helper function to compare arrays

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
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.listNotifications.length == 0 ? (
          <p>No new notification for now</p>
        ) : (
          <div className={css(styles.notifications)}>
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
              <img src={Close} alt='Close' className={css(styles.img)} />
            </button>
            <ul className={css(styles.ul)}>
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
const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    border: '1px dotted red',
    padding: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
    width: '400px',
    position: 'absolute',
    right: '0',
  },
  ul: {
    paddingLeft: '2rem',
  },

  img: {
    width: '10px',
    height: '10px',
  },
  button: {
    padding: '0',
    border: 'none',
    backgroundColor: 'none',
    cursor: 'pointer',
  },
});
export default Notifications;
