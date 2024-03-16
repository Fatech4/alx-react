// notifications.js

import notificationsData from '../../notifications.json' assert { type: 'json' };

export function getAllNotificationsByUser(userId) {
  return notificationsData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
