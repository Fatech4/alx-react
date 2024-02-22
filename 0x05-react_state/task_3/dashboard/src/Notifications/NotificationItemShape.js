import PropTypes from 'prop-types';
const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});
NotificationItemShape.defaultProps = {
  html: { __html: '' }, // Default value for 'html'
  value: '',
};
export default NotificationItemShape;
