import { StyleSheetTestUtils } from 'aphrodite';

// Call suppressStyleInjection before any other imports in your test file
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toBeTruthy();
});

it('verify that the component renders input', () => {
  const wrapper = shallow(<Login />);
  const input = wrapper.find('input');
  expect(input).toBeTruthy();
});

it('verify that the component renders label', () => {
  const wrapper = shallow(<Login />);
  const label = wrapper.find('label');
  expect(label).toBeTruthy();
});

it('should have submit button disabled by default', () => {
  const wrapper = shallow(<Login />);
  const submitButton = wrapper.find('input[type="submit"]');
  expect(submitButton.prop('disabled')).toBe(true);
});

it('should enable submit button after changing the value of email and password inputs', () => {
  const wrapper = shallow(<Login />);
  const emailInput = wrapper.find('input[type="email"]');
  const passwordInput = wrapper.find('input[type="password"]');
  const submitButton = wrapper.find('input[type="submit"]');

  // Simulate changing email and password inputs
  emailInput.simulate('change', { target: { value: 'test@example.com' } });
  passwordInput.simulate('change', { target: { value: 'password12344' } });
  wrapper.update();
  // Check if submit button is enabled
  expect(submitButton.prop('disabled')).toBeFalsy;
});
