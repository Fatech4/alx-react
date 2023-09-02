import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../assets/holberton-logo.jpg', () => 'holberton-logo-jpg');
jest.mock('./App.css', () => 'App.css');
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

// it('renders a div with the class App-header', () => {
//   const wrapper = shallow(<App />);
//   const header = wrapper.find('.App-header');
//   expect(header).toBeTruthy();
// });

// it('renders a div with the class App-body', () => {
//   const wrapper = shallow(<App />);
//   const body = wrapper.find('.App-body');
//   expect(body).toBeTruthy();
// });

// it('renders a div with the class App-footer', () => {
//   const wrapper = shallow(<App />);
//   const footer = wrapper.find('.App-footer');
//   expect(footer).toBeTruthy();
// });
