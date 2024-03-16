import { StyleSheetTestUtils } from 'aphrodite';

// Call suppressStyleInjection before any other imports in your test file
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo-jpg');
it('renders without crashing', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Header />
    ); expect(wrapper).toBeTruthy();
  </AppContext.Provider>;
});

it('verify that the component renders img', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Header />
    ); const img = wrapper.find('img'); expect(img).toBeTruthy();
  </AppContext.Provider>;
});

it('verify that the component renders h1', () => {
  const user = {
    email: '',
    password: '',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Header />
    ); const header = wrapper.find('h1'); expect(header).toBeTruthy();
  </AppContext.Provider>;
});

it('Verify that the logoutSection is not created when context has default value', () => {
  const user = {
    email: '',
    password: '',
    isLoggedIn: false,
  };
  <AppContext.Provider value={{ user: user }}>
    const wrapper = shallow(
    <Header />
    ); const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection).toBe(false);
  </AppContext.Provider>;
});

it('Verify that the logoutSection is created when IsLoggedIn is true', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: true,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Header />
    ); const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection).toBeTruthy();
  </AppContext.Provider>;
});
it('verify that the component renders h1', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: true,
  };
  const mockLogOut = jest.fn();
  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Header />
    ); wrapper.find('a').simulate('click');
    expect(mockLogOut).toHaveBeenCalled();
  </AppContext.Provider>;
});
