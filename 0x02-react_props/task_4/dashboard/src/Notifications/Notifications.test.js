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
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  const listItems = wrapper.find('NotificationItem');
  expect(listItems.length).toBe(3);
});

// it('verify that the first NotificationItem element renders the right html', () => {
//   const wrapper = shallow(<Notifications />);
//   const firstNotificationItem = wrapper.find(NotificationItem).first();
//   expect(firstNotificationItem.text()).toBe('New course available');
// });
it('renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  const text = wrapper.find('p').text();
  expect(text).toBe('Here is the list of notifications');
});
it('verify that menuItem is being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.exists('.menuItem')).toBe(true);
});
it('verify that div.Notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.exists('div.Notifications')).toBe(false);
});
it('verify that menuItem is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.exists('.menuItem')).toBe(true);
});

it('verify that div.Notification is being displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.exists('div.Notifications')).toBe(true);
});
