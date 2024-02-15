import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
jest.mock('./Notifications.css', () => 'Notification.css');
jest.mock('../assets/close-icon.png', () => 'close-icon.png');

describe('Notifications component', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeTruthy();
  });
  it('renders without crashing when an empty array is passed', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper).toBeTruthy();
  });
  it('renders list items', () => {
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

  it('calls markAsRead function with the right message', () => {
    const mockMarkAsRead = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const wrapper = shallow(
      <Notifications
        listNotifications={[{ id: 0, type: 'default', value: 'Test value' }]}
        markAsRead={mockMarkAsRead}
      />
    );
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    );

    consoleSpy.mockRestore();
  });
});
it('should not rerender when updating with the same list', () => {
  const initialList = [
    { id: 1, type: 'default', value: 'New course available' },
  ];

  const wrapper = shallow(<Notifications listNotifications={initialList} />);

  let shouldUpdate = wrapper
    .instance()
    .shouldComponentUpdate({ listNotifications: initialList });
  expect(shouldUpdate).toBe(false);
});

it('should rerender when updating with a longer list', () => {
  const initialList = [
    { id: 1, type: 'default', value: 'New course available' },
  ];
  const longerList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];
  const wrapper = shallow(<Notifications listNotifications={initialList} />);
  // const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');

  // Update props with a longer list
  wrapper.setProps({ listNotifications: longerList });

  expect(
    wrapper.instance().shouldComponentUpdate({ listNotifications: initialList })
  ).toBe(true);
  // expect(shouldUpdate).toHaveBeenCalled();
});
