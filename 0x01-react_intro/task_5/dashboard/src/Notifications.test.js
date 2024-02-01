import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeTruthy();
});

it('renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('li');
  expect(listItems.length).toBe(3);
});

it('renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  const text = wrapper.find('p').text();
  expect(text).toBe('Here is the list of notifications');
});
