import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

jest.mock('./Login.css', () => 'Login.css');
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
