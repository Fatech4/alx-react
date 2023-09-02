import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../Login/Login.css';
import '../Footer/Footer.css';
import '../Header/Header.css';
import '../assets/close-icon.png';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

jest.mock('../assets/close-icon.png', () => 'close-icon.png');
jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo-jpg');
jest.mock('./App.css', () => 'App.css');
jest.mock('../Login/Login.css', () => 'Login.css');
jest.mock('../Footer/Footer.css', () => 'Footer.css');
jest.mock('../Header/Header.css', () => 'Header.css');
jest.mock('../Notifications/Notifications.css', () => 'Notifications.css');
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

it('verify that it contains Login', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Login);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});

it('verify that it contains Footer', () => {
  const wrapper = shallow(<App />);
  const childComponent = wrapper.find(Footer);

  // Assert that the ChildComponent is present in the ParentComponent
  expect(childComponent.exists()).toBeTruthy();
});
