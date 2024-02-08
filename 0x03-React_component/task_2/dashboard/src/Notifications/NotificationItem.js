import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead, id }) {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id); // Call markAsRead function with notification id
    }
  };
  return (
    <li data-priority={type} onClick={handleClick}>
      {html ? (
        <span dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
}
NotificationItem.protoTypes = {
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default NotificationItem;
