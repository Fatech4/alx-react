// uiActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
const fetchMock = require('fetch-mock-jest');
// const fetchMock = require('fetch-mock').sandbox();
// const nodeFetch = require('node-fetch');
// nodeFetch.default = fetchMock;

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

const mockStore = configureMockStore([thunk]);

describe('Async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN_SUCCESS on successful API call', () => {
    fetchMock.getOnce('/login-success.json', {
      body: {
        first_name: 'Johann',
        last_name: 'Salva',
        email: 'johann.salva@holberton.nz',
        profile_picture: 'http://placehold.it/32x32',
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_SUCCESS }];

    const store = mockStore({});

    return store.dispatch(loginRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN_FAILURE on failed API call', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_FAILURE }];

    const store = mockStore({});

    return store.dispatch(loginRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
