import { StyleSheetTestUtils } from 'aphrodite';

// Call suppressStyleInjection before any other imports in your test file
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

it('renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toBeTruthy();
});

it('verify that the least component output Copyright', () => {
  const wrapper = shallow(<Footer />);
  const text = wrapper.find('p').text();
  expect(text).toContain('Copyright');
});

it('verify that the link is not displayed when the user is logged out within the context', () => {
  const user = {
    email: '',
    password: '',
    isLoggedIn: false,
  };
  const mockLogOut = jest.fn();

  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Footer />) wrapper.find('a').toBe(false)
  </AppContext.Provider>;
});
it('verify that the link is displayed when the user is logged in within the context', () => {
  const user = {
    email: 'adekoladamilola4@gmail.com',
    password: '1234',
    isLoggedIn: true,
  };
  const mockLogOut = jest.fn();

  <AppContext.Provider value={{ user: user, logOut: mockLogOut }}>
    const wrapper = shallow(
    <Footer />) wrapper.find('a').toBeTruthy
  </AppContext.Provider>;
});
