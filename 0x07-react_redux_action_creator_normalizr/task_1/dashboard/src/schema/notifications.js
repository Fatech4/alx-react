// notifications.js

import notificationsData from '../../notifications.json' assert { type: 'json' };
import { normalize, schema } from 'normalizr';

function getAllNotificationsByUser(userId) {
  return notificationsData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const notificationSchema = [notification];
const normalizedNotification = normalize(notificationsData, notificationSchema);

export {
  notificationSchema,
  normalizedNotification,
  getAllNotificationsByUser,
};
