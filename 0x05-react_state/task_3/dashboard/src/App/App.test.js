StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

import '../assets/close-icon.png';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
// import '../Notifications/Notifications.css';
jest.mock('../assets/close-icon.png', () => 'close-icon.png');
jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo-jpg');
// jest.mock('../Notifications/Notifications.css', () => 'Notifications.css');
import { AppContext, logOut } from './AppContext';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
it('verify that it contains Notification', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Notifications);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});

it('verify that it contains Header', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Header);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});

it('should render the Login component when isLoggedIn is false', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <App />
    ); expect(wrapper.contains(
    <Login />
    )).toBe(true); expect(wrapper.contains( <CourseList /> )).toBe(false);
  </AppContext.Provider>;
});

it('should render the CourseList component when isLoggedIn is true', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: true,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <App />
    ); expect(wrapper.contains(
    <Login />
    )).toBe(false); expect(wrapper.contains(
    <CourseList listCourses={listCourses} />
    )).toBe(true);
  </AppContext.Provider>;
});

it('should not display CourseList component by default', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <App />
    ); expect(wrapper.contains(
    <Login />
    )).toBe(true); expect(wrapper.contains(
    <CourseList />
    )).toBe(false);
  </AppContext.Provider>;
});

it('verify that it contains Footer', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Footer);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});

it('should log out when Ctrl+H is pressed', () => {
  const wrapper = shallow(<App />);
  const consoleSpy = jest.spyOn(window, 'alert').mockImplementation();

  const event = new KeyboardEvent('keydown', {
    key: 'h',
    ctrlKey: true,
  });

  window.dispatchEvent(event);

  // After dispatching the event, verify that the logOut method is called
  expect(wrapper.state('user').isLoggedIn).toBe(false); // Ensure user is logged out
  expect(window.alert).toHaveBeenCalledWith('Logging you out');
  consoleSpy.mockRestore();
});

it('should have default state displayDrawer as false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('displayDrawer')).toBe(false);
});

it('should update state displayDrawer to true after calling handleDisplayDrawer', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleDisplayDrawer();

  expect(wrapper.state('displayDrawer')).toBe(true);
});

it('should update state displayDrawer to false after calling handleHideDrawer', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ displayDrawer: true }); // Set displayDrawer to true initially
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state('displayDrawer')).toBe(false);
});

it('should update state correctly when logIn function is called', () => {
  const wrapper = shallow(<App />);
  const email = 'adekoladamilola4@gmail.com';
  const password = '1234';

  // Invoke logIn function
  wrapper.instance().logIn(email, password);

  // Assert on the state changes
  expect(wrapper.state('user')).toEqual({
    email: email,
    password: password,
    isLoggedIn: true,
  });
});

it('should update state correctly when logOut function is called', () => {
  const wrapper = shallow(<App />);
  const initialState = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: true,
  };

  // Set initial state
  wrapper.setState({ user: initialState });

  // Invoke logOut function
  wrapper.instance().logOut();

  // Assert on the state changes
  expect(wrapper.state('user')).toEqual({
    email: '',
    password: '',
    isLoggedIn: false,
  });
});

it('should mark notification as read', () => {
  const mockMarkAsRead = jest.fn();
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New' },
  ];

  const wrapper = shallow(<App />);

  // Access the instance of your component
  const instance = wrapper.instance();

  // Call markNotificationAsRead function with an ID (e.g., 2)
  instance.markNotificationAsRead(2);

  // Retrieve the updated state
  const updatedState = instance.state.listNotifications;

  // Verify that the notification with ID 2 has been removed from the list
  expect(updatedState.length).toBe(2);
  expect(updatedState.some((notification) => notification.id === 2)).toBe(
    false
  );
});
