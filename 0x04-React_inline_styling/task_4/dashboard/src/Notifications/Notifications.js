import React from 'react';

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
        <div
          className={`notificationClick ${css(
            styles.menuItem,
            styles.menuItemHover,
            styles.menuItemMediaQuery
          )}`}
        >
          Your notifications
        </div>
        {this.props.listNotifications.length == 0 ? (
          <p>No new notification for now</p>
        ) : (
          <div className={css(styles.notifications)} id='notificationBlock'>
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
const opacityChangeAnimation = {
  '0%': {
    opacity: '0.5',
  },
  '100%': {
    opacity: '1',
  },
};

const bounceAnimation = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  menuItemHover: {
    ':hover + div': {
      display: 'block',
    },
    ':hover': {
      animationName: [bounceAnimation],
      animationDuration: '0.5s',
      animationIterationCount: '3',
      animationDirection: 'alternate',
      visibility: 'hidden',
    },
  },
  menuItemMediaQuery: {
    '@media screen and (max-width:900px)': {
      // Media query styles for max-width 900px
    },
  },

  notifications: {
    fontSize: '20px',
    border: '1px dotted red',
    padding: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
    width: '400px',
    position: 'absolute',
    right: '0',
    display: 'none',
    boxSizing: 'border-box',
    ':hover': {
      animationName: [opacityChangeAnimation],
      animationDuration: '0.5s',
      animationIterationCount: '3',
      animationDirection: 'alternate',
    },
    '@media screen and (max-width:900px)': {
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      right: '100px',
      marginTop: '0',
      marginLeft: '0',
      padding: '0',
      margin: '0',
      backgroundColor: 'white',
      border: 'none',
    },
  },
  ul: {
    paddingLeft: '2rem',
    '@media screen and (max-width:900px)': {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
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
