import React from 'react';
import CourseListRow from './CourseListRow';
// import './CourseList.css';
import PropTypes from 'prop-types';
import { CourseShape } from './CourseShape';
function CourseList({ listCourses }) {
  return (
    <table>
      {listCourses.length === 0 ? (
        <tr>
          <td colSpan='2'>No course available yet</td>
        </tr>
      ) : (
        <>
          <thead>
            <CourseListRow
              textFirstCell='Available courses'
              isHeader={true}
            ></CourseListRow>
            <CourseListRow
              textFirstCell='Course name'
              textSecondCell='Credit'
              isHeader={true}
            ></CourseListRow>
          </thead>
          <tbody>
            {listCourses.map((course) => {
              return (
                <CourseListRow
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                  key={course.id}
                  isHeader={false}
                ></CourseListRow>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape), // Use CourseShape as the prop type
};

CourseList.defaultProps = {
  listCourses: [], // Default to an empty array if not provided by parent component
};
export default CourseList;
