// notifications.js

import notificationsData from '../../notifications.json' assert { type: 'json' };
import { normalize, schema } from 'normalizr';

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

function getAllNotificationsByUser(userId) {
  const notifications = normalizedNotification.entities.notifications;
  const userNotifications = [];

  for (const notificationId in notifications) {
    const notification = notifications[notificationId];
    if (notification.author === userId) {
      const context =
        normalizedNotification.entities.messages[notification.context];
      userNotifications.push(context);
    }
  }

  return userNotifications;
}

export {
  notificationSchema,
  normalizedNotification,
  getAllNotificationsByUser,
};
