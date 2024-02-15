import React, { PureComponent } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    if (this.props.markAsRead) {
      this.props.markAsRead(this.props.id); // Call markAsRead function with notification id
    }
  };
  render() {
    return (
      <li data-priority={this.props.type} onClick={this.handleClick}>
        {this.props.html ? (
          <span dangerouslySetInnerHTML={{ __html: this.props.html }} />
        ) : (
          <span>{this.props.value}</span>
        )}
      </li>
    );
  }
}
NotificationItem.protoTypes = {
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default NotificationItem;
