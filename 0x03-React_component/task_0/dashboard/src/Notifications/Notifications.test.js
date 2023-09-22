import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
jest.mock('./Notifications.css', () => 'Notification.css');
jest.mock('../assets/close-icon.png', () => 'close-icon.png');

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeTruthy();
  });
  it('renders without crashing when an empty array is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper).toBeTruthy();
  });
  it('renders list items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.length).toBe(listNotifications.length);
  });
  it('displays "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toContain('No new notification for now');
  });
  it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });
});
