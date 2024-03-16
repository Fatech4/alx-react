import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const rowStyle = isHeader
    ? css(styles.headerRow)
    : isChecked
    ? css(styles.defaultRow, styles.rowChecked)
    : css(styles.defaultRow);

  return (
    <tr className={rowStyle}>
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan='2' className={css(styles.th)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>
            {' '}
            <input type='checkbox' onChange={handleCheck} />
            {textFirstCell}
          </td>
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
  rowChecked: {
    backgroundColor: '#e6e4e4',
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
