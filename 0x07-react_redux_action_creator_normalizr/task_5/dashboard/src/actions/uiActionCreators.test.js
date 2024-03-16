// uiActionCreators.test.js

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('login action creator', () => {
  it('should create an action to select a login', () => {
    const user = { email: 'adekoladamilola4@gmail.com', password: '1234' };
    const expectedAction = {
      type: LOGIN,
      user: { ...user },
    };
    const action = login('adekoladamilola4@gmail.com', '1234');
    expect(action).toEqual(expectedAction);
  });
});

describe('logout action creator', () => {
  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    const action = logout();
    expect(action).toEqual(expectedAction);
  });
});

describe(' displayNotificationDrawer action creator', () => {
  it('should create an action to  displayNotificationDrawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const action = displayNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
});

describe('hideNotificationDrawer action creator', () => {
  it('should create an action to hideNotificationDrawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    const action = hideNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
});
