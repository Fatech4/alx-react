import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr className={isHeader ? css(styles.headerRow) : css(styles.defaultRow)}>
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan='2' className={css(styles.th)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}> {textFirstCell}</th>
            <th className={css(styles.th)}> {textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  // th: { textAlign: 'center', backgroundColor: '#deb5b545' },
  th: {
    borderBottom: '1px solid black',
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',

    textAlign: 'left',
  },

  td: {
    borderBottom: '1px solid black',
    paddingTop: '0.1rem',

    textAlign: 'left',
    borderBottom: 'none',
  },
});
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
