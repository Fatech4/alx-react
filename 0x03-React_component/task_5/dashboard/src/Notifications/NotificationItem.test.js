import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

it('renders without crashing', () => {
  const wrapper = shallow(<NotificationItem />);
  expect(wrapper).toBeTruthy();
});

it('should render the correct HTML for type="default" and value="test"', () => {
  const wrapper = shallow(
    <NotificationItem type='default' value='New course available' />
  );
  expect(wrapper.find('li').text()).toContain('New course available');
});

it('calls markAsRead function with the right ID argument', () => {
  const mockMarkAsRead = jest.fn();
  const wrapper = shallow(
    <NotificationItem id={1} markAsRead={mockMarkAsRead} />
  );

  // Simulate click on the component
  wrapper.simulate('click');

  // Expect that markAsRead is called with the right ID argument
  expect(mockMarkAsRead).toHaveBeenCalledWith(1);
});

// it('renders with dummy html prop', () => {
//   const wrapper = shallow(
//     <NotificationItem type='warning' html={{ __html: '<u>test</u>' }} />
//   );
//   expect(
//     wrapper.find('[data-priority"warning"]').exists()
//   ).toBeTruthy();

//   // Access the rendered HTML content
//   const renderedHTML = wrapper.html();

//   // Check if the rendered HTML contains the expected HTML
//   expect(renderedHTML).toContain(
//     '<li data-notification-type="warning"><span>[object Object]</span></li>"'
//   );
// });
