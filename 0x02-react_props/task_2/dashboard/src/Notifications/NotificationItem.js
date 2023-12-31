import React from 'react';
import { Fragment } from 'react';
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

export default NotificationItem;
