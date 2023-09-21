import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'; // Import your CourseList component
import './CourseList.css';
jest.mock('./CourseList.css', () => 'CourseList.css');
describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find('CourseListRow'); // Assuming your rows have a class "course-row"

    expect(rows.length).toBe(5);
  });
});
