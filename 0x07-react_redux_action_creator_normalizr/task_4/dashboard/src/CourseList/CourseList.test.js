import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'; // Import your CourseList component

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders CourseList component without crashing when an empty listCourses is passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find('CourseListRow'); // Assuming your rows have a class "course-row"

    expect(rows.length).toBe(listCourses.length + 2);
  });
});
