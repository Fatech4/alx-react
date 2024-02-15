import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import '../assets/holberton-logo.jpg';

jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo-jpg');
jest.mock('./Header.css', () => 'Header.css');
it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toBeTruthy();
});

it('verify that the component renders img', () => {
  const wrapper = shallow(<Header />);
  const img = wrapper.find('img');
  expect(img).toBeTruthy();
});

it('verify that the component renders h1', () => {
  const wrapper = shallow(<Header />);
  const header = wrapper.find('h1');
  expect(header).toBeTruthy();
});
