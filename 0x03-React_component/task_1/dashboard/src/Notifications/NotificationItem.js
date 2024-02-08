import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <li data-priority={type}>
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
};
export default NotificationItem;
