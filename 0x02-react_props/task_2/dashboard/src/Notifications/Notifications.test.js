import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
jest.mock('./Notifications.css', () => 'Notification.css');
jest.mock('../assets/close-icon.png', () => 'close-icon.png');

it('renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper).toBeTruthy();
});

it('renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('NotificationItem');
  expect(listItems.length).toBe(3);
});

// it('verify that the first NotificationItem element renders the right html', () => {
//   const wrapper = shallow(<Notifications />);
//   const firstNotificationItem = wrapper.find(NotificationItem).first();
//   expect(firstNotificationItem.text()).toBe('New course available');
// });
it('renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  const text = wrapper.find('p').text();
  expect(text).toBe('Here is the list of notifications');
});
