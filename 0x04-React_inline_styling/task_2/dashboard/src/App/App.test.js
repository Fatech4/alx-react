import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();
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

// it('verify that it contains Login', () => {
//   const wrapper = shallow(<App />);
//   const childComponent = wrapper.find(Login);

//   // Assert that the ChildComponent is present in the ParentComponent
//   expect(childComponent.exists()).toBeTruthy();
// });
it('should render the Login component when isLoggedIn is false', () => {
  const wrapper = shallow(<App isLoggedIn={false} />);
  expect(wrapper.contains(<Login />)).toBe(true);
  expect(wrapper.contains(<CourseList />)).toBe(false);
});

it('should render the CourseList component when isLoggedIn is true', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.contains(<Login />)).toBe(false);
  expect(wrapper.contains(<CourseList listCourses={listCourses} />)).toBe(true);
});

it('should not display CourseList component by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Login />)).toBe(true);
  expect(wrapper.contains(<CourseList />)).toBe(false);
});

it('verify that it contains Footer', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Footer);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});

it('should log out when Ctrl+H is pressed', () => {
  const logOutMock = jest.fn();
  const consoleSpy = jest.spyOn(window, 'alert').mockImplementation();

  const wrapper = shallow(<App logOut={logOutMock} />);
  const event = new KeyboardEvent('keydown', {
    key: 'h',
    ctrlKey: true,
  });

  window.dispatchEvent(event);

  expect(window.alert).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalled();
  consoleSpy.mockRestore();
});
