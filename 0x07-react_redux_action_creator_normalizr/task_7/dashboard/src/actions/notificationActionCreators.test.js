import {
  markAsread,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

describe('markAsread action creator', () => {
  it('should create an action markAsread', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index: index,
    };
    const action = markAsread(index);
    expect(action).toEqual(expectedAction);
  });
});

describe('setNotificationFilter action creator', () => {
  it('should create an action setNotificationFilter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: filter,
    };
    const action = setNotificationFilter(filter);
    expect(action).toEqual(expectedAction);
  });
});
